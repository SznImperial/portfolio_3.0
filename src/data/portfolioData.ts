export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools';
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  tags: string[];
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  threads?: string;
  email: string;
}

export interface Stats {
  linesWritten: string;
  projectsCompleted: string;
  projectsDeployed: string;
}

export interface PortfolioData {
  fullName: string;
  developerName: string;
  developerTitle: string;
  department: string;
  cyberAlias: string;
  tagline: string;
  bio: string;
  socials: SocialLinks;
  stats: Stats;
  skills: Skill[];
  projects: Project[];
  articles: Article[];
}

export const portfolioData: PortfolioData = {
  department: "Data Science at UNILAG & Software Engineering at Aptech",
  fullName: "Adetola Abdulkareem Ayinde",
  developerName: "Adetola Abdulkareem Ayinde",
  developerTitle: "Full-Stack Software Developer & Designer",
  cyberAlias: "IMPƎRIAL", 
  tagline: "Building software that solves real problems, from SaaS platforms to AI-assisted tools and creative web experiments.",
  bio: "I'm Ayomiposi, a developer and designer building software that solves real problems, from school management platforms to AI-assisted tools and creative web experiments. I'm currently completing an Advanced Diploma in Software Engineering at Aptech (graduating October 2026) while also pursuing a Data Science degree at the University of Lagos.\n\nI've worked on projects like Imp3rial Edu, a school management SaaS platform, and Ansar-Ud-Deen, a production-intended school system architected from scratch. I've also built Imp3rial Charts, a Nigeria and Africa-focused music and film chart platform.\n\nI care about shipping polished, functional products, whether that's a hackathon build like Mindvault (a personal knowledge graph app) or Terminus Sequence, a 3D particle morphing countdown built for Google I/O 2026. I'm active in the Hack Club ecosystem, where I track my coding hours and take on build challenges that push me to try new things fast.\n\nOutside of code, you'll find me solving a Rubik's cube, playing chess, or at the poker table, alongside a general love for music and gaming.",
  socials: {
    github: "https://github.com/SznImperial", 
    linkedin: "https://www.linkedin.com/in/abdulkareem-adetola-b570b3405", 
    threads: "https://www.threads.com/@_ayomiposi4tw", 
    email: "contact@imp3rial.dev" 
  },
  stats: {
    linesWritten: '1.5M+',
    projectsCompleted: '40+',
    projectsDeployed: '20+'
  },
  skills: [
    // Frontend
    { name: "React", level: 90, category: "frontend", iconName: "React" },
    { name: "Next.js", level: 85, category: "frontend", iconName: "Nextjs" },
    { name: "TypeScript", level: 85, category: "frontend", iconName: "TypeScript" },
    { name: "Tailwind CSS", level: 92, category: "frontend", iconName: "Tailwind" },
    
    // Backend
    { name: "Python / Django", level: 92, category: "backend", iconName: "Python" },
    { name: "Supabase", level: 88, category: "backend", iconName: "Database" },
    { name: "PostgreSQL", level: 82, category: "backend", iconName: "Database" },
    { name: "REST APIs", level: 85, category: "backend", iconName: "API" },
    
    // Tools / Environment
    { name: "Git / GitHub", level: 88, category: "tools", iconName: "Git" },
    { name: "AI / LLM Integration", level: 80, category: "tools", iconName: "Bot" },
    { name: "Statistics & Data Analysis", level: 85, category: "tools", iconName: "LineChart" },
    { name: "DaVinci Resolve / CapCut", level: 85, category: "tools", iconName: "Video" }
  ],
  projects: [
    {
      id: "imp3rial-edu",
      title: "IMP3RIAL EDU",
      tagline: "Multi-tenant B2B SaaS school management platform.",
      description: "A single-instance, multi-tenant school management platform with RLS-enforced tenant isolation, CBT proctoring, brute-force login protection, and role-based dashboards for admins, teachers, students, and parents.",
      longDescription: "A comprehensive B2B SaaS platform built on Next.js 16 (App Router) and Supabase (PostgreSQL). Enforces strict multi-tenancy through PostgreSQL Row-Level Security and server-side tenant verification to prevent cross-school data leaks. Features include computer-based testing with fullscreen proctoring, timetable/subject allocation, bulk student promotions, subscription-based student caps, and role-segmented dashboards.",
      technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://eduvantages.netlify.app", 
      githubUrl: "https://github.com/SznImperial/eduvantage", 
      featured: true
    },
    {
      id: "idearoom",
      title: "IdeaRoom",
      tagline: "Real-time AI collaboration & brainstorming hub.",
      description: "A premium virtual collaboration room blending real-time communication with AI — brainstorm, analyze documents, generate meeting minutes, build study plans, and take interactive quizzes together.",
      longDescription: "A state-of-the-art collaboration platform built on Next.js (App Router) and Supabase with Groq-powered AI. Features hybrid auth with magic links, document-aware AI context injection, Groq Vision model swapping for image analysis, interactive quiz generation, PDF export, and a premium Dark Cocoa & Caramel Gold glassmorphism UI.",
      technologies: ["Next.js", "React", "Supabase", "Groq API"],
      liveUrl: "https://idearoom.netlify.app",
      githubUrl: "https://github.com/SznImperial/IdeaRoom",
      featured: true
    },
    {
      id: "vibe-fm",
      title: "vibe.fm",
      tagline: "AI-powered music curator for any moment.",
      description: "An AI music curator that generates personalized YouTube playlists from plain-text vibe descriptions — studying, cooking, working out — powered by Groq's LLaMA 3.3 70B with real-time YouTube search and inline playback.",
      longDescription: "A context-aware music discovery app built on Next.js 16 and TypeScript. Uses Groq AI to analyze mood, energy, and activity from natural language input, then chains results into YouTube Data API v3 searches to build instant playlists with embedded playback and vibe profiling.",
      technologies: ["Next.js", "TypeScript", "Groq API", "YouTube API"],
      liveUrl: "https://fmvibe.netlify.app",
      githubUrl: "https://github.com/SznImperial/vibe.fm",
      featured: true
    },
    {
      id: "ansar-ud-deen-sms",
      title: "Ansar-Ud-Deen SMS",
      tagline: "Full-stack educational & role-based school management portal.",
      description: "A comprehensive educational portal featuring custom role-based dashboards for admins, teachers, students, and parents, complete with coursework grading (handwritten math sheets & PDFs), attendance tracking, and fee billing.",
      longDescription: "Engineered with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Supabase PostgreSQL. Features multi-child switching for parents, side-by-side active grading panels for teachers, collision-aware timetable builders for administrators, and an innovative offline mock database simulation using localStorage fallback.",
      technologies: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://ansaruddeenschools.netlify.app",
      githubUrl: "https://github.com/SznImperial/Ansar-Ud-Deen-SMS",
      featured: true
    },
    {
      id: "dejargonizer",
      title: "De-Jargonizer",
      tagline: "AI-powered text and jargon simplification tool.",
      description: "A specialized web application designed to translate complex technical, legal, and academic jargon into clear, digestible plain English.",
      longDescription: "Built to improve language accessibility and team communication by automatically identifying industry-heavy buzzwords and offering clear, precise real-time definitions and simplified summaries.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://dejargonizer.netlify.app",
      githubUrl: "https://github.com/SznImperial/De-Jargonizer",
      featured: true
    },
    {
      id: "homestyler",
      title: "HomeStyler Pro",
      tagline: "Interactive interior design and layout visualizer.",
      description: "A fast, responsive web application for staging floor plans and exploring modern interior design layouts and style setups.",
      longDescription: "A frontend platform allowing designers and homeowners to preview, mix, and coordinate furniture aesthetics with an intuitive interactive interface optimized for mobile and desktop displays.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://homestylerp.netlify.app",
      githubUrl: "https://github.com/SznImperial/HomeStyler",
      featured: true
    },
    {
      id: "rennys-closet",
      title: "Renny's Closet",
      tagline: "Modern fashion e-commerce storefront & digital catalog.",
      description: "A sleek retail digital catalog and boutique storefront designed for discovering personal fashion collections and apparel.",
      longDescription: "A custom e-commerce web application engineered for fast image loading, intuitive collection filtering, and a fluid responsive layout tailored for a contemporary fashion brand.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://rennysclosets.netlify.app",
      githubUrl: "https://github.com/SznImperial/rennyscloset_",
      featured: true
    },
    {
      id: "omoiyaayo-solar",
      title: "Omoiyaayo Green Energy",
      tagline: "Solar energy brand website & system specifications hub.",
      description: "A professional commercial platform showcasing sustainable solar energy solutions, inverter systems, and electrical load capacity guidance.",
      longDescription: "Designed and developed for a renewable energy business to educate customers on clean power alternatives, showcase residential and enterprise solar installations, and simplify client project inquiries.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://omoiyaayogreenenergy.netlify.app/",
      githubUrl: "https://github.com/SznImperial/omoiyaayo-solar",
      featured: true
    }
  ],
  articles: [
    {
      id: "the-cost-of-being-a-junior-dev",
      title: "The Cost of Being a \"Junior\" Dev",
      excerpt: "In the tech space, we often talk about the \"grind,\" the late nights, the endless debugging sessions, and the pressure to learn a million things at once...",
      date: "2026-05-24", 
      readTime: "2 min read",
      url: "https://www.linkedin.com/posts/abdulkareem-adetola-b570b3405_honestly-had-to-stop-writing-articles-for-activity-7457159634328526848-kQF9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGdrZbMB8hBOzydPT2iWc8bwjW6usLb6rKA", 
      tags: ["Career", "SoftwareEngineering", "Mentorship"]
    },
    {
      id: "bridging-the-gap-full-stack-data-science",
      title: "Bridging the Gap: Why Full-Stack Development and Data Science are the Ultimate Duo.",
      excerpt: "Ever notice how much of modern web development is just moving data from point A to point B? Building better, making smarter decisions.",
      date: "2026-05-18",
      readTime: "2 min read",
      url: "https://www.linkedin.com/posts/abdulkareem-adetola-b570b3405_fullstackdevelopment-datascience-python-activity-7453920384900493312-fYrr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGdrZbMB8hBOzydPT2iWc8bwjW6usLb6rKA",
      tags: ["FullStack", "DataScience", "Statistics"]
    },
    {
      id: "the-elephant-in-the-room-ai-guardrails",
      title: "The Elephant in the Room: Why AI Needs Guardrails (Unpacking AI TRiM).",
      excerpt: "We talk a lot about how fast AI is moving—writing code, automating workflows, generating assets—but how often do we talk about control?",
      date: "2026-05-10",
      readTime: "2 min read",
      url: "https://www.linkedin.com/posts/abdulkareem-adetola-b570b3405_aigovernance-aitrism-techethics-activity-7453544806036770817-JWAh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGdrZbMB8hBOzydPT2iWc8bwjW6usLb6rKA",
      tags: ["AI", "Security", "AITRiM", "Guardrails"]
    },
    {
      id: "ai-and-the-developer-accumulating-noise",
      title: "AI and the Developer: Are we building or just accumulating noise?",
      excerpt: "Everyone is talking about how AI helps you write code. But honestly? As a developer, sometimes it feels like we are just stacking up unverified complexity.",
      date: "2026-05-02",
      readTime: "2 min read",
      url: "https://www.linkedin.com/posts/abdulkareem-adetola-b570b3405_buildinpublic-softwareengineering-eduvantage-activity-7453194601315708928-8MkR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGdrZbMB8hBOzydPT2iWc8bwjW6usLb6rKA", 
      tags: ["AI", "SoftwareDev", "Productivity"]
    },
    {
      id: "the-delete-key-developers-best-friend",
      title: "The \"Delete\" Key is a Developer's Best Friend",
      excerpt: "Most developers show you them building finished portfolios, their sleek UI setups, and massive feature lists. Let's talk about the art of removing code.",
      date: "2026-04-20",
      readTime: "2 min read",
      url: "https://www.linkedin.com/posts/abdulkareem-adetola-b570b3405_buildinpublic-softwareengineering-edutech-activity-7452779394605060096-5B5S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGdrZbMB8hBOzydPT2iWc8bwjW6usLb6rKA", 
      tags: ["Refactoring", "CleanCode", "Productivity"]
    },
    {
      id: "navigating-the-future-nextjs-in-2026",
      title: "Navigating the Future of Web Development: Why Next.js is Still King in 2026",
      excerpt: "The landscape of frontend development moves at a breakneck speed. Let's examine why server actions, routing paradigms, and rendering optimizations keep Next.js on top.",
      date: "2026-04-05",
      readTime: "3 min read",
      url: "https://www.linkedin.com/posts/abdulkareem-adetola-b570b3405_day-1-of-posting-every-day-on-this-new-account-activity-7452481755376361472-U5OK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGdrZbMB8hBOzydPT2iWc8bwjW6usLb6rKA",
      tags: ["Nextjs", "Frontend", "WebDev"]
    }
  ]
};