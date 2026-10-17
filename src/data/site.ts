// All personal content lives here so copy edits never touch markup.

export type Project = {
  slug?: string; // projects with a slug get a /work/<slug> case-study page
  name: string;
  tagline: string;
  body: string;
  url: string;
  cta: string;
  repo?: string;
  image?: string;
  problem?: string;
  built?: string[];
  decisions?: string[];
  stack?: string[];
};

export const projects: Project[] = [
  {
    slug: 'rivo',
    name: 'Rivo',
    tagline: 'Know where your money went',
    body: 'An offline money tracker for cash, bank, bKash and Nagad. Type <code>tea 20</code> and it files a food expense for <span lang="bn">৳</span>20. Works in English and Bangla.',
    url: 'https://rivo-navy.vercel.app',
    cta: 'See it live',
    repo: 'https://github.com/mdmakky/rivo',
    image: '/work/rivo.webp',
    problem: 'Most people here keep money in three places at once: cash in the pocket, a bank account and a mobile wallet like bKash or Nagad. Nothing shows all three together, so it is hard to answer a simple question: where did my money go this month?',
    built: [
      'An Android app that tracks cash, bank and mobile-wallet accounts in one place, in English or Bangla.',
      'Quick entry: type something like "tea 20" and it becomes a categorised expense.',
      'Budgets, monthly reports and money owed between friends.',
      'Works without internet: a read cache and a write queue sync when the connection returns.',
    ],
    decisions: [
      'SQL is the source of every number. Balances, totals and budget progress are Postgres functions; the app only formats them.',
      'Row Level Security is the security boundary, with composite foreign keys so no row can point at another user\'s data.',
      'Money is stored as integers in minor units, never floating point, and never rounded.',
      'Every row gets a client-made UUID and saving is an upsert, so a retried save never creates duplicates.',
    ],
    stack: ['Flutter', 'Riverpod', 'Supabase', 'PostgreSQL', 'RLS'],
  },
  {
    slug: 'meal-bazar',
    name: 'Meal Bazar',
    tagline: 'Run your whole mess from one phone',
    body: 'Meals, bazar, shared expenses and the month-end hisab, all settled automatically. Built with Flutter and Supabase for the shared houses students actually live in.',
    url: 'https://meal-bazar.vercel.app',
    cta: 'See it live',
    repo: 'https://github.com/mdmakky/meal_bazar',
    problem: 'A mess is shared bachelor housing, common among students in Bangladesh. Members eat together, take turns buying bazar and split rent and bills. Most messes still track this in a notebook, and the month-end calculation causes arguments.',
    built: [
      'A meal grid for every member, with half meals, guest meals and meal-off before a deadline the manager sets.',
      'Bazar trips with itemised lists and receipt photos. An optional AI scan turns a receipt into a draft that a person confirms.',
      'Expenses split equally, by meals eaten, or by weight. Deposits by cash, bKash, Nagad or bank.',
      'Month-end closing with the meal rate, each member\'s due or advance, and a detailed PDF report.',
      'Group chat, notice board, bazar duty rota and push notifications.',
    ],
    decisions: [
      'All money and meal calculations are SQL functions in Supabase, and Row Level Security is the access boundary.',
      'Offline first: Drift storage on the phone with a sync queue.',
      'An AI gateway on Vercel serverless functions uses Gemini first and OpenRouter as a fallback. AI output is always a draft.',
      'Push notifications go out from a database outbox through Firebase Cloud Messaging.',
    ],
    stack: ['Flutter', 'Riverpod', 'Drift', 'Supabase', 'TypeScript', 'Gemini', 'FCM'],
  },
  {
    slug: 'tong',
    name: 'Tong',
    tagline: 'Real-time chat, built from the socket up',
    body: 'Group chats, media sharing, OTP login and presence. Event-driven with Socket.io rooms, PostgreSQL plus MongoDB, and JWT refresh-token rotation.',
    url: 'https://tongchat.app',
    cta: 'See it live',
    repo: 'https://github.com/mdmakky/Tong',
    problem: 'I wanted to understand how real-time messaging actually works under load: rooms, presence, delivery and auth that stays secure across long sessions.',
    built: [
      'One-to-one and group chats with media sharing.',
      'OTP-based sign-in and online presence tracking.',
    ],
    decisions: [
      'Event-driven architecture on Socket.io rooms.',
      'Dual-database persistence: PostgreSQL alongside MongoDB.',
      'JWT access tokens with refresh-token rotation.',
    ],
    stack: ['Node.js', 'Express', 'Socket.io', 'PostgreSQL', 'MongoDB', 'JWT'],
  },
  {
    slug: 'mentora',
    name: 'Mentora AI',
    tagline: 'A study buddy that reads your course material',
    body: 'Upload lecture slides and notes, then chat with them. A RAG pipeline on FastAPI, Gemini and pgvector answers from your own material, in English or Bangla.',
    url: 'https://github.com/mdmakky/Mentora-AI',
    cta: 'Read the code',
    repo: 'https://github.com/mdmakky/Mentora-AI',
    problem: 'University students collect piles of slides, PDFs and past papers, but searching them before an exam is slow. Generic chatbots do not know what your course actually covered.',
    built: [
      'Semesters, courses and folders for PDF, DOCX, PPTX, spreadsheet and image uploads, with OCR for scanned files.',
      'Chat with one page, one document or a whole course, in English or বাংলা, with modes such as Learn, Exam prep and Practice.',
      'Summaries, practice questions and likely exam questions predicted from past papers.',
      'Study streaks and daily goals.',
    ],
    decisions: [
      'Retrieval with pgvector inside PostgreSQL instead of a separate vector database.',
      'Layered fallbacks: Gemini embeddings, then Sentence Transformers, then an offline hash. Gemini models first, then Groq LLaMA.',
      'Page-aware retrieval, so "explain page 5" targets the right content.',
      'JWT auth with Google OAuth, and rate limiting with SlowAPI.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'pgvector', 'Gemini', 'React', 'Tailwind'],
  },
  {
    name: 'Share-Reads',
    tagline: 'Borrow books from people nearby',
    body: 'A team project for uploading, lending and reviewing books, with Node.js, MongoDB and Firebase.',
    url: 'https://share-reads.web.app',
    cta: 'See it live',
  },
];

export const stack = ['Node.js', 'Express', 'FastAPI', 'Django', 'PostgreSQL', 'MongoDB', 'Supabase', 'Socket.io', 'Flutter', 'React', 'LangChain', 'Docker', 'AWS'];

export const milestones = [
  'B.Sc. CSE at JUST, Jashore',
  'Backend intern at Syftet Limited',
  'INNOVATEX 2025 hackathon finalist',
  'Datathon KUET, 56 of 200',
  '80-hour Machine Learning certification',
];

export const email = 'makky.cse@gmail.com';

export const links = [
  { label: 'GitHub', url: 'https://github.com/mdmakky' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/md-amakky' },
  { label: 'Facebook', url: 'https://facebook.com/md.arafatuzzaman.makky' },
];
