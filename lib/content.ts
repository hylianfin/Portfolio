export type Media =
  | { kind: "image"; src: string; alt: string; ratio?: string }
  | { kind: "video"; src: string; ratio?: string }
  | { kind: "placeholder"; label: string; palette: number; ratio?: string };

export type AsideSection = {
  title: string;
  lines: string[];
};

export type Project = {
  id: string;
  name: string;
  subtitle: string;
  meta: { label: string; value: string }[];
  description: string;
  credits: string;
  link?: { label: string; href: string };
  media: Media[];
};

export type Testimonial = {
  name: string;
  title: string;
  relation: string;
  quote: string;
  /** short verbatim pull-quote used on the resume page */
  pull: string;
};

export type ExperienceEntry = {
  company: string;
  location: string;
  period: string;
  role: string;
  points: string[];
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export const person = {
  name: "Ruhan Pacolli",
  domain: "ruhanpacolli.online",
  year: 2026,
  email: "hi@ruhanpacolli.online",
  phone: "+383 48 627 683",
  location: "Prishtina, Kosovo",
  socials: [
    { label: "github", href: "https://github.com/Ruhanpaco" },
    { label: "linkedin", href: "https://www.linkedin.com/in/ruhan-pacolli/" },
    { label: "whatsapp", href: "https://wa.me/r.paco" },
    { label: "instagram", href: "https://www.instagram.com/ruhan.paco/" },
  ],
  intro:
    "I'm Ruhan, a Full-Stack Software Engineer with a focus on Web, Cloud, and Embedded Systems.",
  about: [
    "I build software, experiment with hardware, and turn ambitious ideas into working products.",
    "I'm the CEO & Founder of EliteDev Agency, a software company building digital products, custom software, automation, and APIs. I work across the stack, from interfaces and mobile apps to backend architecture and infrastructure.",
    "Most recently I helped build a job-proposal platform for the hospitality sector at Pioneering People, built on Laravel, MongoDB, Redis, and AWS S3. There I designed new pages, refactored legacy code, and hardened security.",
    "I started building websites when I was 9, and I've been exploring technology ever since. Today that means web, mobile, backend, and cloud, but also ESP32s, NFC, MQTT, and smart-home ecosystems. The fun part is usually the thing sitting between two systems that were never designed to work together.",
    "I'm an active member of the FLOSSK community in Kosovo, contributing to open source through projects, events, and education.",
    "Always happy to connect, collaborate, or just chat. Feel free to reach out!",
  ],
  resumeSummary:
    "I'm a junior software developer with strong knowledge in web development, mobile applications (Swift and Expo), and data analytics using Python, as well as experience building desktop applications using Electron. I have worked on production-ready systems involving both frontend and backend development, including deployment and performance optimization. I have contributed to open-source projects through FLOSSK and worked as a volunteer and organizer in local and international tech community events. I follow security-first development practices and I am ISO 27001 certified, with an understanding of secure software design and data protection principles.",
  aside: [] as AsideSection[],
};

const experience: ExperienceEntry[] = [
  {
    company: "EliteDev Agency",
    location: "Prishtina, Kosovo",
    period: "Jul 2025 – Present",
    role: "Software Engineer",
    points: [
      "Founded and lead a digital agency delivering custom CRM systems, management platforms, and scalable web applications.",
      "Built full-stack solutions using Next.js, TypeScript, MongoDB, and AWS, focused on performance, scalability, and maintainable architecture.",
      "Oversee the full development lifecycle: system design, implementation, testing, and deployment, working with collaborators through structured workflows.",
      "Apply security and performance best practices to improve reliability, stability, and data protection; support client engagement and delivery on local and international projects.",
    ],
  },
  {
    company: "Pioneering People Ltd",
    location: "London, United Kingdom (Remote)",
    period: "Jun 2025 – Aug 2025",
    role: "Software Engineer Intern",
    points: [
      "Developed a production-grade hospitality job-proposal platform using Laravel, PHP, MongoDB, AWS S3, and Redis.",
      "Built features including workflows, search functionality, and a redesigned user dashboard.",
      "Refactored and optimized legacy code for maintainability and system performance.",
      "Optimized APIs and database queries to handle 10k+ concurrent users.",
      "Strengthened security with SQL-injection protections, input validation, and data-handling audits.",
    ],
  },
  {
    company: "TechnoMarket by Mabetex",
    location: "Prishtina, Kosovo",
    period: "Jun 2024 – Aug 2024",
    role: "Salesperson",
    points: [
      "Identified customer needs through direct communication and provided tailored flooring product recommendations.",
      "Managed customer orders and inquiries in person; operated the cash register and supported daily sales operations.",
    ],
  },
];

export type CommunityRole = {
  org: string;
  role: string;
  period: string;
};

const community: CommunityRole[] = [
  {
    org: "AWS Cloud Club Prishtina",
    role: "Volunteer",
    period: "Mar 2026 – Present",
  },
  {
    org: "Google Developer Groups Prishtina",
    role: "Volunteer Staff",
    period: "May 2025 – Present",
  },
  {
    org: "FLOSSK (Free Libre Open Source Software Kosova)",
    role: "Contributing Member",
    period: "Oct 2025 – Present",
  },
  {
    org: "Cyber Security Challenge Kosovo & Albania",
    role: "Volunteer",
    period: "Feb 2026 – Present",
  },
  {
    org: "Wikimedia Kosovo & Albanian",
    role: "Volunteer Contributor",
    period: "Jan 2025 – Present",
  },
  {
    org: "Kosova Makers League",
    role: "Volunteer",
    period: "Jun 2025 – Jul 2025",
  },
];

export type Certification = {
  name: string;
  org: string;
  year: string;
};

const certifications: Certification[] = [
  { name: "ISO 27001:2022 Certification", org: "Mastermind", year: "2025" },
  { name: "SQL Certificate", org: "Codecademy", year: "2025" },
  { name: "TypeScript Certificate", org: "Codecademy", year: "2025" },
  { name: "APIs Certification", org: "Meta (Coursera)", year: "2025" },
  { name: "Microsoft Azure SQL", org: "Microsoft (Coursera)", year: "2025" },
  {
    name: "Best Engineering Solution",
    org: "American School of Kosova",
    year: "2026",
  },
];

export type Education = {
  school: string;
  degree: string;
  location: string;
  period: string;
};

const education: Education[] = [
  {
    school: "American School of Kosova",
    degree: "High School Diploma",
    location: "Prishtina, Kosovo",
    period: "Aug 2024 – Jun 2027 (expected)",
  },
];

const skills: SkillGroup[] = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Vue.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SCSS",
    ],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "PHP (Laravel)",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Firebase",
      "Supabase",
      "Prisma",
    ],
  },
  {
    group: "Mobile & Desktop",
    items: ["React Native (Expo)", "SwiftUI", "Swift", "Electron"],
  },
  {
    group: "Data & Analytics",
    items: ["Python", "SQL"],
  },
  {
    group: "DevOps & Tools",
    items: ["Git", "GitHub", "Vercel", "Cloudflare", "Linux CLI", "Postman", "NPM", "VS Code", "Xcode"],
  },
];

const languages = [
  { name: "Albanian", level: "Native" },
  { name: "English", level: "Professional working" },
];

// Home-page aside columns, derived from the structured data above
person.aside = [
  {
    title: "Experience",
    lines: experience.map(
      (e) =>
        `${e.company.toUpperCase()}, ${e.location.toUpperCase()}\n${e.period.toUpperCase()}\n${e.role}`
    ),
  },
  {
    title: "Stack",
    lines: skills.map(
      (s) => `${s.group.toUpperCase()}\n${s.items.join(", ")}`
    ),
  },
  {
    title: "Community",
    lines: community.map(
      (c) =>
        `${c.org.toUpperCase()}\n${c.role.toUpperCase()}\n${c.period.toUpperCase()}`
    ),
  },
  {
    title: "Open Source",
    lines: [
      "FLOSSK · OPEN SOURCE, COMMUNITY, EVENTS",
      "ALIRO HOMEKEY · ESP32 FIRMWARE",
      "DEVCLI · MACOS TERMINAL TOOLING",
      "GITHUB · PULL SHARK X2",
    ],
  },
  {
    title: "Beyond Code",
    lines: [
      "VOLLEYBALL & PARAVOLLEY PLAYER",
      "LANGUAGES · ENGLISH, ALBANIAN",
      "BASED IN PRISHTINA, KOSOVO",
    ],
  },
];

export { experience, skills, languages, community, certifications, education };

export const testimonials: Testimonial[] = [
  {
    name: "Rita Kastrati",
    title: "Founder & CEO @ Pioneering People",
    relation: "Managed Ruhan directly · Jan 2026",
    quote:
      "Ruhan joined us as an intern in his first ever programming role, and we were really pleased to support him at the start of his career. From early on, he showed a strong willingness to learn, regularly asking thoughtful questions and actively seeking feedback to improve his work.\n\nHe took initiative, approached tasks with energy, and was open about areas where he needed more guidance, which meant he developed quickly over the course of his time with us. Ruhan brought a positive attitude to the team and demonstrated the kind of curiosity and work ethic that will serve him well as he continues to grow as a developer.\n\nI'm confident he'll be a great asset to any team willing to invest in his development.",
    pull: "I'm confident he'll be a great asset to any team willing to invest in his development.",
  },
  {
    name: "Shpresa Hana",
    title: "College Guidance Counsellor & AP Coordinator at American School of Kosova",
    relation: "Mentor · Jan 2026",
    quote:
      "I have been blessed to work with Ruhan, and I have been amazed by his interest in learning new things, his work ethic, and his desire to learn more. He is a true problem solver who presents his ideas very well, which makes him a great contributor in both individual and team work. His work ethic and maturity make him stand out from the rest, and I have no doubt that he will be a valuable asset for his future workplaces.",
    pull: "His work ethic and maturity make him stand out from the rest, and I have no doubt that he will be a valuable asset for his future workplaces.",
  },
];

export const projects: Project[] = [
  {
    id: "aliro-homekey",
    name: "Aliro",
    subtitle: "HomeKey",
    meta: [
      { label: "Type", value: "OPEN-SOURCE FIRMWARE" },
      { label: "Platform", value: "ESP32, SMART LOCKS" },
      { label: "Role", value: "AUTHOR & MAINTAINER" },
      { label: "Status", value: "ONGOING" },
    ],
    description:
      "An open-source access-control project built around the ESP32, exploring interoperability between modern digital-key and smart-home ecosystems. It speaks the CSA Aliro protocol, the standard behind Apple, Samsung, and Google Home Key, and bridges it into the wider smart home through NFC, MQTT, Matter, and Home Assistant.",
    credits: "FIRMWARE & PROTOCOL WORK · RUHAN PACOLLI",
    link: { label: "GitHub Repo", href: "https://github.com/Ruhanpaco/Aliro-homekey" },
    media: [
      {
        kind: "image",
        src: "https://opengraph.githubassets.com/1/Ruhanpaco/Aliro-homekey",
        alt: "Aliro HomeKey repository overview",
        ratio: "2 / 1",
      },
      { kind: "placeholder", label: "PHOTO · HARDWARE", palette: 0, ratio: "16 / 9" },
      { kind: "placeholder", label: "PHOTO · UNLOCK FLOW", palette: 4, ratio: "16 / 9" },
    ],
  },
  {
    id: "sfk-conference-app",
    name: "SFK 2026",
    subtitle: "Conference App",
    meta: [
      { label: "Type", value: "CONFERENCE APP" },
      { label: "Platform", value: "REACT NATIVE (EXPO)" },
      { label: "Client", value: "SOFTWARE FREEDOM KOSOVA" },
      { label: "Year", value: "2026" },
    ],
    description:
      "A conference companion app for Software Freedom Kosova 2026, the 11th edition of SFK, built with React Native and Expo. One app, four role-based experiences (attendees, volunteers, crew, and organizers), each with its own tab bar and shared areas: schedule, ticket or badge, community, updates, and help. The visual language follows the SFK 2026 Field Guide: yellow, blue, and ink on paper, flat surfaces, no gradients, with 62 screens covering the full journey including states and error handling.",
    credits: "DESIGN & MOBILE DEVELOPMENT · RUHAN PACOLLI",
    link: { label: "GitHub Repo", href: "https://github.com/hylianfin/conference-app" },
    media: [
      {
        kind: "image",
        src: "https://opengraph.githubassets.com/1/hylianfin/conference-app",
        alt: "SFK 2026 conference app repository overview",
        ratio: "2 / 1",
      },
      {
        kind: "image",
        src: "https://raw.githubusercontent.com/hylianfin/conference-app/main/overview/1-attendees.png",
        alt: "SFK 2026 attendee experience, all screens",
        ratio: "16 / 9",
      },
      {
        kind: "image",
        src: "https://raw.githubusercontent.com/hylianfin/conference-app/main/overview/4-organizers.png",
        alt: "SFK 2026 organizer experience, all screens",
        ratio: "16 / 9",
      },
    ],
  },
  {
    id: "pioneering-people",
    name: "Pioneering People",
    subtitle: "Hospitality Platform",
    meta: [
      { label: "Type", value: "JOB-PROPOSAL PLATFORM" },
      { label: "Company", value: "PIONEERING PEOPLE LTD" },
      { label: "Stack", value: "LARAVEL, MONGODB, REDIS, AWS S3" },
      { label: "Year", value: "2025" },
    ],
    description:
      "A job-proposal platform connecting hospitality destinations with pioneers, the people who fill them. I designed and built new pages and components (Create Job, Search Pioneer, Search Destination, a redesigned dashboard), refactored and tested legacy code, added SQL-injection protection, and shipped new features to live users alongside a colleague.",
    credits: "FULL-STACK DEVELOPMENT · RUHAN PACOLLI",
    media: [
      { kind: "placeholder", label: "SCREEN · DASHBOARD", palette: 2, ratio: "16 / 9" },
      { kind: "placeholder", label: "SCREEN · SEARCH", palette: 1, ratio: "16 / 9" },
      { kind: "placeholder", label: "SCREEN · CREATE JOB", palette: 0, ratio: "16 / 9" },
    ],
  },
  {
    id: "flossk-ms",
    name: "FLOSSK MS",
    subtitle: "Organization Management System",
    meta: [
      { label: "Type", value: "MANAGEMENT PLATFORM" },
      { label: "Client", value: "FLOSSK & PRISHTINA HACKERSPACE" },
      { label: "Stack", value: "NEXT.JS 16, NESTJS 12, POSTGRESQL" },
      { label: "License", value: "APACHE 2.0" },
    ],
    description:
      "An open-source management platform for FLOSSK and Prishtina Hackerspace: member records with field-level AES-256-GCM encryption, MQTT and NFC door access designed to pair with Aliro HomeKey readers, democratic governance with secret ballots and generated assembly protocols, inventory and loan agreements, space rentals, a kiosk point of sale, and newsletters. Next.js 16 with React 19 on the frontend, NestJS 12 with PostgreSQL 17 and Prisma 7 on the backend, and passkeys, TOTP MFA, and JWT sessions end to end.",
    credits: "ARCHITECTURE & FULL-STACK DEVELOPMENT · RUHAN PACOLLI",
    link: { label: "GitHub Repo", href: "https://github.com/hylianfin/Organization-MS" },
    media: [
      {
        kind: "image",
        src: "https://opengraph.githubassets.com/1/hylianfin/Organization-MS",
        alt: "FLOSSK MS repository overview",
        ratio: "2 / 1",
      },
      { kind: "placeholder", label: "SCREEN · ADMIN PORTAL", palette: 1, ratio: "16 / 9" },
    ],
  },
];
