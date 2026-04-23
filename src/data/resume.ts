export const bio = {
  name: 'Sofia Romero Kamermann',
  titleLine1: 'FRONTEND',
  titleLine2: 'DEVELOPER',
  subtitle: 'AI-Augmented Developer',
  location: 'Madrid, Spain',
  openTo: 'Open to remote · EU & US',
  languages: [
    { name: 'English', level: 'C2' },
    { name: 'Spanish', level: 'Native' },
  ],
  email: 'sofiaxrk@gmail.com',
  github: 'https://github.com/SRomK',
  linkedin: 'https://www.linkedin.com/in/sofiaromerokamermann/?locale=en_US',
  summary:
    "Frontend Developer with 4+ years building scalable web applications in Vue.js, React, and TypeScript. I use Gemini, Claude, ChatGPT Enterprise and GitHub Copilot daily — pairing fast iteration with disciplined code review and clean architecture.",
  stats: [
    { value: '4+', label: 'Years of Experience' },
    { value: '3', label: 'Companies' },
    { value: '15+', label: 'Technologies' },
  ],
}

export type ExperienceItem = {
  company: string
  role: string
  detail: string | null
  period: string
  bullets: string[]
  tags: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'BBVA Technology',
    role: 'Frontend Developer (Full-stack collaboration)',
    detail: null,
    period: 'Jun 2025 — Present',
    bullets: [
      'Enhanced frontend performance in a complex financial web platform, improving responsiveness across critical workflows.',
      'Led performance optimizations by reducing unnecessary re-renders and tightening component lifecycle management.',
      'Integrated AI-assisted development (GitHub Copilot) into daily workflow — maintaining strict code review discipline.',
      'Refactored reusable UI modules and Chart.js visualizations, increasing development efficiency ~20%.',
      'Expanded Jest unit test coverage and contributed to CI/CD workflows in GCP.',
    ],
    tags: ['Vue.js', 'TypeScript', 'Chart.js', 'Jest', 'GCP', 'Jenkins'],
  },
  {
    company: 'BBVA Technology',
    role: 'Frontend Developer',
    detail: null,
    period: 'Nov 2023 — May 2025',
    bullets: [
      'Delivered and maintained Vue.js + TypeScript features for a complex enterprise platform.',
      'Reduced technical debt by refactoring legacy components, improving code clarity.',
      'Strengthened cross-team collaboration with UX and backend for consistent API integration.',
    ],
    tags: ['Vue.js', 'TypeScript', 'REST APIs', 'Jira'],
  },
  {
    company: 'Kimia Group',
    role: 'Full-stack Developer',
    detail: null,
    period: 'May 2023 — Oct 2023',
    bullets: [
      'Developed full-stack solutions (Django + Vue.js) to automate marketing processes.',
    ],
    tags: ['Django', 'Vue.js', 'Python', 'REST APIs'],
  },
  {
    company: 'Private Radar',
    role: 'Frontend Developer',
    detail: null,
    period: 'Nov 2022 — May 2023',
    bullets: [
      'Built responsive React interfaces for an airline management platform.',
      'Developed reusable UI components with MUI, reducing duplication and speeding up feature implementation.',
    ],
    tags: ['React', 'MUI', 'TypeScript', 'JavaScript'],
  },
]

export type StackCategory = {
  label: string
  items: string[]
}

export const stack: StackCategory[] = [
  {
    label: 'Frontend',
    items: ['Vue.js', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'MUI'],
  },
  {
    label: 'State & Data',
    items: ['Vuex', 'Pinia', 'Chart.js', 'REST APIs'],
  },
  {
    label: 'AI Tools',
    items: ['GitHub Copilot', 'Claude', 'ChatGPT', 'Gemini'],
  },
  {
    label: 'Testing & Quality',
    items: ['Jest', 'SonarQube', 'CI/CD'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['GCP', 'AWS', 'Jenkins'],
  },
  {
    label: 'Databases',
    items: ['MySQL', 'PostgreSQL'],
  },
  {
    label: 'Tools',
    items: ['Git', 'Bitbucket', 'Jira', 'Postman'],
  },
]

export type Project = {
  number: string
  name: string
  company: string
  description: string
  tags: string[]
  url: string | null
  image: string
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'BBVA Global Staffing Tool',
    company: 'BBVA Technology',
    description:
      'Performance-optimized Vue.js platform for global workforce management, featuring Chart.js data visualizations and comprehensive Jest test coverage across a large-scale enterprise codebase.',
    tags: ['Vue.js', 'TypeScript', 'Chart.js', 'GCP'],
    url: null,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=640&q=80',
  },
  {
    number: '02',
    name: 'Compliance Management Platform',
    company: 'BBVA Technology',
    description:
      'Enterprise-grade internal compliance platform built with Vue.js and TypeScript, delivering features under strict banking regulatory requirements, reducing legacy technical debt, and improving cross-team workflows between UX and backend.',
    tags: ['Vue.js', 'TypeScript', 'REST APIs', 'Jest'],
    url: null,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=640&q=80',
  },
  {
    number: '03',
    name: 'Flight Ops Management Platform',
    company: 'Private Radar',
    description:
      'React + MUI interface for real-time airline operations management, built with a reusable component library that reduced UI development time across the platform.',
    tags: ['React', 'MUI', 'TypeScript'],
    url: null,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=640&q=80',
  },
  {
    number: '04',
    name: 'Enterprise Campaign Suite',
    company: 'Kimia Group',
    description:
      'Full-stack solution combining a Django backend with Vue.js frontend to automate marketing processes and reduce manual operational workload, for enterprise clients including Zara, Real Madrid, and Bimba y Lola.',
    tags: ['Vue.js', 'Django', 'Python', 'REST APIs'],
    url: null,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=640&q=80',
  },
  {
    number: '05',
    name: 'Portfolio Website',
    company: 'Personal',
    description:
      'This portfolio — built with React 19, TypeScript, Framer Motion, and a scroll-driven animation system designed from scratch.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Vite'],
    url: 'https://github.com/SRomK/sofia-portfolio',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&q=80',
  },
]
