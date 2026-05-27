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
  mockupType: 'terminal' | 'dashboard' | 'browser';
  mockupContent: string[]; // Lines of content/logs or key statistics
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
  twitter?: string;
  email: string;
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
  skills: Skill[];
  projects: Project[];
  articles: Article[];
}

export const portfolioData: PortfolioData = {
  department: "Statistics Student at University of Lagos",
  fullName: "Adetola Abdulkareem Ayinde",
  developerName: "Adetola Abdulkareem Ayinde",
  developerTitle: "Full-Stack Software Developer",
  cyberAlias: "IMPƎRIAL", 
  tagline: "Building robust full-stack applications with elegant user experiences and statistical precision.",
  bio: "Full-stack developer operating at the intersection of reactive frontend interfaces and data-driven backend architectures. Currently specializing in Statistics at the University of Lagos while engineering scalable web ecosystems, multi-tenant SaaS platforms, and automated workflow configurations.",
  socials: {
    github: "https://github.com/SznImperial", 
    linkedin: "https://www.linkedin.com/in/abdulkareem-adetola-b570b3405", 
    twitter: "https://x.com/Szn_Imperial", 
    email: "adetolaabdulkareem40@gmail.com" 
  },
  skills: [
    // Frontend
    { name: "React", level: 90, category: "frontend", iconName: "React" },
    { name: "Next.js", level: 85, category: "frontend", iconName: "Nextjs" },
    { name: "Tailwind CSS", level: 92, category: "frontend", iconName: "Tailwind" },
    { name: "JavaScript", level: 88, category: "frontend", iconName: "JavaScript" },
    
    // Backend
    { name: "Python / Django", level: 92, category: "backend", iconName: "Python" },
    { name: "C#", level: 80, category: "backend", iconName: "Csharp" },
    { name: "REST APIs", level: 85, category: "backend", iconName: "API" },
    { name: "Java / Spring Boot", level: 60, category: "backend", iconName: "Java" }, 
    
    // Tools / Environment
    { name: "Antigravity IDE", level: 95, category: "tools", iconName: "Terminal" },
    { name: "Git / GitHub", level: 88, category: "tools", iconName: "Git" },
    { name: "DaVinci Resolve / CapCut", level: 85, category: "tools", iconName: "Video" }
  ],
  projects: [
    {
      id: "eduvantage-backend",
      title: "EduVantage Core (In-Work)",
      tagline: "Multi-tenant engine backend pipeline.",
      description: "A robust multi-tenant backend architecture with strict tenant isolation, customizable database routing, and secure API endpoints.",
      longDescription: "The core engine powering a multi-tenant SaaS management ecosystem. Engineered with Django and a relational database framework to maintain strict data boundaries and secure, scalable tenant provisioning across separate operational tracks.",
      technologies: ["Python", "Django", "REST APIs", "PostgreSQL"],
      liveUrl: "#", 
      githubUrl: "https://github.com/SznImperial/eduvantage", 
      mockupType: "terminal",
      mockupContent: [
        "django-admin runserver --settings=eduvantage.core",
        "[OK] Migrations verified for active tenants",
        "[SECURE] Subdomain isolation filter enabled",
        "[DB Engine] Routing to tenant_db_04... Success",
        "Backend Listener: http://localhost:8000"
      ],
      featured: true
    },
    {
      id: "dejargonizer",
      title: "De-Jargonizer",
      tagline: "Technical text simplification node.",
      description: "A sleek interface built to strip heavy academic or technical jargon from text blocks, translating them into digestible terms.",
      longDescription: "A specialized text processing application designed to detect, highlight, and translate industry-heavy jargon into clear phrases, improving language accessibility for non-technical stakeholders.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://dejargonizer.netlify.app",
      githubUrl: "https://github.com/SznImperial/De-Jargonizer",
      mockupType: "browser",
      mockupContent: [
        "https://dejargonizer.netlify.app",
        "Parser Thread: ACTIVE",
        "Jargon Density Analyzed: 42%",
        "Simplification Pipeline: OK",
        "Render Time: 18ms"
      ],
      featured: true
    },
    {
      id: "homestyler",
      title: "HomeStyler Pro",
      tagline: "Interactive layout and design client.",
      description: "A fast, responsive web interface built for staging layouts and customizing interior aesthetic setups seamlessly.",
      longDescription: "A clean frontend application allowing users to preview, coordinate, and interact with design layouts, optimizing responsiveness across mobile configurations.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://homestylerp.netlify.app",
      githubUrl: "https://github.com/SznImperial/HomeStyler",
      mockupType: "browser",
      mockupContent: [
        "https://homestylerp.netlify.app",
        "UI State: INITIALIZED",
        "Asset Optimization: WebP Enabled",
        "Viewport Sync: 60Hz Mobile-First",
        "Lighthouse Layout Score: 100"
      ],
      featured: true
    },
    {
      id: "rennys-closet",
      title: "Renny's Closet",
      tagline: "E-commerce retail storefront channel.",
      description: "A highly responsive digital catalog and closet storefront engineered for browsing personal fashion collections.",
      longDescription: "A custom e-commerce client focused on rapid image rendering, layout fluidness on mobile viewports, and clean interaction layers for a fashion brand catalog.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://rennysclosets.netlify.app",
      githubUrl: "https://github.com/SznImperial/rennyscloset_",
      mockupType: "dashboard",
      mockupContent: [
        "Storefront Session: CONNECTED",
        "Inventory Synced: OK",
        "Cart Context: OPERATIONAL",
        "Image Pipeline: CDN Optimized",
        "SSL Handshake: SECURE"
      ],
      featured: true
    },
    {
      id: "estatedev",
      title: "Estate Dev Manager",
      tagline: "Property management & development matrix.",
      description: "A basic portfolio website for an estate manage who is willing to put his brand into the internet's spotlight.",
      longDescription: "A basic frontend portfolio website to showvase and put thr brand into the internet spotlight.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "C#"],
      liveUrl: "https://esstatedev.netlify.app",
      githubUrl: "https://github.com/SznImperial/estatedev",
      mockupType: "dashboard",
      mockupContent: [
        "Active Portfolios Mapped: 84",
        "Lease Logic Core: C# API Pipeline",
        "Database Link: OPERATIONAL",
        "Query Execution Time: 8ms",
        "Client Status: LIVE"
      ],
      featured: true
    },
    {
      id: "omoiyaayo-solar",
      title: "Omoiyaayo Green Energy",
      tagline: "Sustainable solar matrix visualizer.",
      description: "A clean green energy web hub presenting solar alternative infrastructure grids and deployment pipelines.",
      longDescription: "A web deployment built for a professional solar brand highlighting active systems configurations, electrical load metrics, and green energy alternatives.",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      liveUrl: "https://omoiyaayogreenenergy.netlify.app/",
      githubUrl: "https://github.com/SznImperial/omoiyaayo-solar",
      mockupType: "browser",
      mockupContent: [
        "https://omoiyaayogreenenergy.netlify.app",
        "Inverter Sync Rate: 100%",
        "Grid Integrity: OPTIMIZED",
        "Carbon Offset Metric: CALCULATED",
        "Status: ONLINE // SECURE"
      ],
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