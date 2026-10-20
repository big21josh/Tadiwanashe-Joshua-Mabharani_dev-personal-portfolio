export const profile = {
  name: 'Tadiwanashe Joshua Mabharani',
  email: 'Big21josh@gmail.com',
  github: 'https://github.com/big21josh',
  linkedin: 'https://www.linkedin.com/in/tadiwanashe-joshua-mabharani-001084346/',
  cv: '/Tadiwanashe_Joshua_Mabharani_CV.pdf',
};

// Grounded in the original portfolio and public GitHub READMEs. OAK is unchanged.
export const projects = [
  {
    id: 'keith',
    title: 'Keith Kapfunde Portfolio',
    subtitle: 'A developer’s work, connected through an interactive world.',
    category: 'Frontend',
    year: '2026',
    kind: 'portfolio',
    image: '/projects/keith-kapfunde.jpg',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'WebGL', 'Vite'],
    description:
      'An interactive developer portfolio with a custom WebGL globe, project showcase, certifications, and a scroll-driven development method.',
    challenge:
      'Present Keith’s projects, skills, and learning journey in a distinctive portfolio while keeping navigation, contact details, and project information accessible.',
    approach:
      'React and TypeScript structure the portfolio, with React Router for dedicated pages and a custom WebGL globe rendered from geographic data. Scroll-driven transitions introduce the development method and project showcase.',
    features: [
      'Animated WebGL globe with geographic connection arcs',
      'Project gallery with detailed previews and search',
      'Dedicated About, Projects, and Certifications pages',
      'Five-stage method section and scrolling technology toolkit',
      'Responsive navigation, CV download, and contact links',
    ],
    note: 'Adapted for Keith Mutsawanaki Kapfunde from a supplied design reference, using Keith’s projects and content. Preview shows the actual portfolio interface.',
    github: null,
    live: 'https://keith-mutsawanaki-kapfunde.onrender.com/',
  },
  {
    id: 'shalom',
    title: 'Shalom Chigama Portfolio',
    subtitle: 'A graphic designer’s work, brought to life.',
    category: 'Full stack',
    year: '2026',
    kind: 'portfolio',
    image: '/projects/shalom-chigama.png',
    tags: ['JavaScript', 'Node.js', 'Firebase', 'Firestore', 'Cloudinary', 'WebGL'],
    description:
      'A full-stack graphic design portfolio combining an interactive WebGL gallery with an authenticated studio for managing projects, artwork, and photos.',
    challenge:
      'Give Shalom a distinctive digital portfolio and a content management workflow for updating projects and artwork without changing source code.',
    approach:
      'JavaScript and WebGL power the public gallery. Firebase Authentication and Firestore support owner/editor access and project data, while a Node.js API verifies editing roles and signs Cloudinary photo uploads.',
    features: [
      'Curved WebGL gallery with smooth scrolling and drag navigation',
      'Authenticated Photo studio with owner and editor roles',
      'Project creation, artwork additions, and photo replacement',
      'Firestore project data and signed Cloudinary uploads',
      'Responsive catalogue, portrait viewer, and themed résumé',
    ],
    note: 'Developed for Shalom R. Chigama using Shalom’s supplied artwork. Preview shows the public catalogue; admin uploads require configured Firebase access and Cloudinary credentials.',
    github: null,
    live: 'https://shalom-chigama.vercel.app/',
  },
  {
    id: 'oak',
    title: 'OAK Foundation',
    subtitle: 'Bringing people and purpose together.',
    category: 'Full stack',
    year: '2026',
    kind: 'oak',
    image: '/projects/oak.jpg',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    description:
      'An event platform connecting registration, programme access, QR passes, and attendance in one considered experience.',
    challenge:
      'Bring a multi-role convening experience into a single platform, with clear access boundaries for partners, staff, presenters, observers, and coordinators.',
    approach:
      'Next.js and TypeScript power the interface, with Supabase integration, role-aware navigation, protected routes, and partner QR passes.',
    features: [
      'Registration and role-aware navigation',
      'Partner QR passes and coordinator check-in',
      'Programme, private notes, and partner directory',
      'Attendance dashboard with search and filters',
    ],
    note: 'Featured from the existing GitHub repository. The OAK project is unchanged. Its README documents demo-data and production configuration requirements.',
    github: 'https://github.com/big21josh/oak_foudation',
    live: 'https://oak-convening-2026.vercel.app',
  },
  {
    id: 'skate',
    title: 'Harare Skate Club',
    subtitle: 'A digital home for a moving community.',
    category: 'Frontend',
    year: '2026',
    kind: 'skate',
    image: '/projects/skate.webp',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    description:
      'A community-focused website supporting skateboarding in Harare through skatepark stories, events, merchandise, and donation pathways.',
    challenge:
      'Give a local skateboarding community a recognizable digital home that explains the skatepark project and helps visitors get involved.',
    approach:
      'A bold visual identity and responsive Next.js interface connect the community story with dedicated sections for the skatepark, gallery, events, and store.',
    features: [
      'Skatepark project presentation',
      'Community and event pages',
      'Merchandise presentation',
      'Donation-focused calls to action',
    ],
    note: 'Project details and screenshot come from the previous portfolio. A public source repository was not provided; the existing website is linked below.',
    github: null,
    live: 'https://harare-skate-club.vercel.app/',
  },
  {
    id: 'muwoni',
    title: 'Muwoni Task Manager',
    subtitle: 'Less friction. More getting things done.',
    category: 'Full stack',
    year: '2026',
    kind: 'muwoni',
    image: '/projects/muwoni-task-manager.jpg',
    tags: ['Python', 'Django', 'SQLite', 'Bootstrap'],
    description:
      'A practical Django application for managing everyday tasks, with calendar scheduling and a clean, responsive interface.',
    challenge:
      'Turn daily task management into a simple workflow while building a foundation in backend development and deployment.',
    approach:
      'Django models and views handle task creation, updates, and deletion, paired with a responsive Bootstrap frontend and calendar integration.',
    features: [
      'Create, update, and delete tasks',
      'Calendar integration for scheduling',
      'Responsive task overview',
      'Deployed on Render',
    ],
    note: 'The project README identifies this as my first successfully deployed web application. Authentication, collaboration, and notifications are listed as future improvements.',
    github: 'https://github.com/big21josh/muwoni-completed-project',
    live: 'https://muwoni-completed-project.onrender.com/',
  },
  {
    id: 'tools',
    title: 'Muwoni Tools',
    subtitle: 'A collection of practical browser tools in one place.',
    category: 'Frontend',
    year: '2026',
    kind: 'muwoni',
    image: '/projects/muwoni-tools.jpg',
    tags: ['JavaScript', 'HTML', 'CSS'],
    description: 'A dedicated hub connecting Muwoni Converter and Muwoni Websaver.',
    challenge: 'Give visitors a clear starting point for the independently deployed Muwoni tools.',
    approach:
      'A lightweight JavaScript hub links directly to the file converter and webpage capture applications.',
    features: [
      'Independent Converter and Websaver links',
      'Responsive tool presentation',
      'Shared Muwoni identity',
    ],
    note: 'Screenshot captured from the actual website.',
    github: null,
    live: 'https://muwoni-tools.vercel.app/',
  },
  {
    id: 'websaver',
    title: 'Muwoni Websaver',
    subtitle: 'A webpage capture tool that packages page design, code, and resources.',
    category: 'Frontend',
    year: '2026',
    kind: 'muwoni',
    image: '/projects/muwoni-websaver.jpg',
    tags: ['JavaScript', 'Node.js', 'Repomix'],
    description: 'A webpage capture tool that packages page design, code, and resources.',
    challenge:
      'Keep a public webpage and its accessible resources together in a downloadable package.',
    approach:
      'A Node.js capture service collects public HTML and assets, with bounded whole-site capture and Repomix source packing.',
    features: [
      'Capture public webpages',
      'Download HTML and source bundles',
      'Pack project source as Repomix XML',
    ],
    note: 'Screenshot captured from the actual website.',
    github: null,
    live: 'https://muwoni-websaver.vercel.app/',
  },
  {
    id: 'converter',
    title: 'Muwoni Converter',
    subtitle: 'A browser-based workspace for converting files across formats.',
    category: 'Frontend',
    year: '2026',
    kind: 'muwoni',
    image: '/projects/muwoni-converter.jpg',
    tags: ['JavaScript', 'WebAssembly', 'FFmpeg'],
    description: 'A browser-based workspace for converting files across formats.',
    challenge:
      'Make common file conversion tasks accessible without API keys or conversion credits.',
    approach:
      'Browser engines process supported documents, images, audio and video locally; the desktop edition handles additional workflows.',
    features: [
      'File conversion and compression',
      'Watermarking and PDF merging',
      'Browser processing for supported formats',
    ],
    note: 'Screenshot captured from the actual website.',
    github: null,
    live: 'https://muwoni-converter.vercel.app/',
  },
  {
    id: 'technologies',
    title: 'Muwoni Technologies',
    subtitle: 'See beyond what exists.',
    category: 'Frontend',
    year: '2026',
    kind: 'muwoni',
    image: '/projects/muwoni-technologies.jpg',
    tags: ['Next.js', 'TypeScript', 'Three.js'],
    description: 'A modern digital home for Muwoni technology services.',
    challenge:
      'Present the company identity and technology services through a distinctive digital experience.',
    approach:
      'Next.js and TypeScript support the company website, with a Three.js visual identity and responsive service presentation.',
    features: [
      'Interactive company presentation',
      'Technology service information',
      'Responsive contact pathways',
    ],
    note: 'Screenshot captured from the actual website.',
    github: null,
    live: 'https://muwonitechnologies.vercel.app/',
  },
];
export const experience = [
  {
    period: '2026 — Present',
    role: 'Junior Software Engineer',
    company: 'Uncommon.org',
    detail:
      'Building responsive web applications with React, JavaScript, and Python, and translating product design into usable interfaces.',
  },
  {
    period: '2023 — Present',
    role: 'CCTV Installation Technician',
    company: 'Muwoni Technologies',
    detail:
      'Installing and maintaining security systems, configuring IP networks, and helping clients solve technical problems.',
  },
  {
    period: '2022 — Present',
    role: 'Software Provider',
    company: 'Classic Technology',
    detail:
      'Supporting retail businesses with point-of-sale software, inventory workflows, and ongoing technical support.',
  },
  {
    period: '2021 — 2022',
    role: 'Sales Representative',
    company: 'Builderz Pride',
    detail:
      'Client consultations, inventory management, and customer relationships in a retail environment.',
  },
];
export const certificates = [
  {
    title: 'Introduction to Software Engineering',
    issuer: 'IBM / Coursera',
    date: 'Aug 2026',
    href: 'https://coursera.org/verify/ZMGSA9VVO8BX',
  },
  {
    title: 'React Basics',
    issuer: 'Meta / Coursera',
    date: 'Jul 2026',
    href: 'https://coursera.org/verify/6QMQU1SIY8E3',
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google / Coursera',
    date: 'Jul 2026',
    href: 'https://coursera.org/verify/8KUUBGTPQPA9',
  },
  {
    title: 'Product Designer',
    issuer: 'Professional Certification / Uxcel',
    date: 'Mar 2026',
    href: null,
  },
  {
    title: 'Advanced UI Components',
    issuer: 'Course Certificate / Uxcel',
    date: 'Mar 2026',
    href: null,
  },
  {
    title: 'Core UI Components',
    issuer: 'Course Certificate / Uxcel',
    date: 'Mar 2026',
    href: null,
  },
  {
    title: 'Leadership Mastery',
    issuer: 'Course Certificate / Uxcel',
    date: 'Mar 2026',
    href: null,
  },
  {
    title: 'AI Prompts Foundations',
    issuer: 'Course Certificate / Uxcel',
    date: 'Mar 2026',
    href: null,
  },
  {
    title: 'Design Terminology',
    issuer: 'Course Certificate / Uxcel',
    date: 'Mar 2026',
    href: null,
  },
  {
    title: 'Typography',
    issuer: 'Course Certificate / Uxcel',
    date: 'Mar 2026',
    href: null,
  },
  {
    title: 'UX Design Foundations',
    issuer: 'Course Certificate / Uxcel',
    date: 'Mar 2026',
    href: null,
  },
];
export function filterProjects(category, query = '') {
  const term = query.trim().toLowerCase();
  return projects.filter(
    (project) =>
      (category === 'All projects' || project.category === category) &&
      `${project.title} ${project.description} ${project.tags.join(' ')}`
        .toLowerCase()
        .includes(term),
  );
}
export function createEmailHref({ name, email, message }) {
  return `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${name.trim()}`)}&body=${encodeURIComponent(`${message.trim()}\n\nFrom: ${name.trim()} (${email.trim()})`)}`;
}
