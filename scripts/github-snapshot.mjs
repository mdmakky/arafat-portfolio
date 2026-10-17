// Refresh src/data/github.json from GitHub using the local `gh` login.
// Run: npm run snapshot   (needs the GitHub CLI signed in as mdmakky)
// ponytail: a committed snapshot instead of build-time fetching, so Vercel needs no token; re-run to update.
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const query = `{
  user(login: "mdmakky") {
    contributionsCollection { contributionCalendar { totalContributions weeks { contributionDays { contributionCount date } } } }
    repositories(first: 100, ownerAffiliations: OWNER, isFork: false, privacy: PUBLIC) {
      totalCount
      nodes { primaryLanguage { name color } }
    }
  }
}`;
const raw = execFileSync('gh', ['api', 'graphql', '-f', `query=${query}`], { encoding: 'utf8' });
const user = JSON.parse(raw).data.user;
const cal = user.contributionsCollection.contributionCalendar;

// Count repos by primary language: byte counts get skewed by vendored folders (a committed venv reads as 90% Python).
const counts = new Map();
for (const repo of user.repositories.nodes) {
  const l = repo.primaryLanguage;
  if (!l) continue;
  const cur = counts.get(l.name) ?? { n: 0, color: l.color };
  cur.n += 1;
  counts.set(l.name, cur);
}
const withLang = [...counts.values()].reduce((a, b) => a + b.n, 0);
const top = [...counts.entries()].sort((a, b) => b[1].n - a[1].n).slice(0, 7)
  .map(([name, v]) => ({ name, color: v.color ?? '#9aa1ad', repos: v.n, pct: +(100 * v.n / withLang).toFixed(1) }));

const out = {
  updated: new Date().toISOString().slice(0, 10),
  total: cal.totalContributions,
  publicRepos: user.repositories.totalCount,
  weeks: cal.weeks.map((w) => w.contributionDays.map((d) => [d.date, d.contributionCount])),
  languages: top,
};
writeFileSync(new URL('../src/data/github.json', import.meta.url), JSON.stringify(out) + '\n');
console.log(`total ${out.total}, ${out.weeks.length} weeks, ${top.length} languages, ${out.publicRepos} public repos`);
