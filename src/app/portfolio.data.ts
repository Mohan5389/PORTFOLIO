export interface Skill {
  name: string;
  category: string;
}

export interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  features?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export const skills: Skill[] = [
  { name: 'C#', category: 'Programming Languages' },
  { name: 'C', category: 'Programming Languages' },
  { name: 'Java', category: 'Programming Languages' },
  { name: 'JavaScript', category: 'Programming Languages' },
  { name: 'TypeScript', category: 'Programming Languages' },
  { name: '.NET Framework', category: 'Frameworks & Platforms' },
  { name: 'ASP.NET Core', category: 'Frameworks & Platforms' },
  { name: 'Django', category: 'Frameworks & Platforms' },
  { name: 'Vue.js', category: 'Frameworks & Platforms' },
  { name: 'React', category: 'Frameworks & Platforms' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Visual Studio Code', category: 'Tools' },
  { name: 'Sublime Text', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Git', category: 'Tools' }
];

export const projects: Project[] = [
  {
    number: '01',
    title: 'Quiz Website',
    description: 'Built a responsive quiz web application using React with Vite, featuring dynamic question rendering, real-time scoring, and answer validation.',
    tags: ['React', 'Vite', 'Responsive Design'],
    features: ['Dynamic Question Rendering', 'Real-time Scoring', 'Answer Validation'],
    githubUrl: 'https://github.com/Mohan5389',
    demoUrl: '#'
  },
  {
    number: '02',
    title: 'Authenticate App',
    description: 'Developed an authentication app using Flutter with seamless backend integration for secure user login and data management.',
    tags: ['Flutter', 'Authentication', 'Backend Integration'],
    features: ['Secure Login', 'Data Management'],
    githubUrl: 'https://github.com/Mohan5389',
    demoUrl: '#'
  },
  {
    number: '03',
    title: 'ICGS Website',
    description: 'Designed and developed a dynamic website for the International Conference on Green Sustainability using Vue.js. Implemented event details, registration, and updates.',
    tags: ['Vue.js', 'Web Design'],
    features: ['Event Registration', 'Interactive Updates', 'Responsive UI'],
    githubUrl: 'https://github.com/Mohan5389',
    demoUrl: '#'
  }
];

export const experiences: Experience[] = [
  {
    role: 'Software Developer',
    company: 'Unitecare Software Solutions',
    duration: 'Jan 2026 - Present',
    description: [
      'Develop and maintain web applications using C#, ASP.NET Core, JavaScript, HTML, and CSS.',
      'Write clean, readable, and reusable code following standardized coding practices.',
      'Collaborate with the team to deliver efficient, maintainable software solutions.'
    ],
    technologies: ['C#', 'ASP.NET Core', 'JavaScript', 'HTML', 'CSS']
  },
  {
    role: 'Front End Intern',
    company: 'Synovers Technology',
    duration: '24 Jun 2024 - 09 Jul 2024',
    description: [
      'Completed an internship focused on web designing and frontend development.',
      'Gained hands-on experience with Figma, React.js, and Vue.js.',
      'Learned the complete process of building web applications through real-time projects.'
    ],
    technologies: ['Figma', 'React.js', 'Vue.js', 'Web Design']
  }
];

export const educations: Education[] = [
  {
    degree: 'Bachelor of Engineering in Information Technology',
    institution: 'Dr. Mahalingam College of Engineering and Technology, Pollachi',
    year: '2022 - Jun 2026',
    details: 'CGPA: 8.6 (through 5th semester)'
  },
  {
    degree: 'HSC',
    institution: 'Kids Club Matric Higher Secondary School, Tiruppur',
    year: 'May 2022',
    details: 'Marks: 551 | Percentage: 92%'
  },
  {
    degree: 'SSLC',
    institution: 'Kids Club Matric Higher Secondary School, Tiruppur',
    year: 'May 2020',
    details: 'Marks: 429 | Percentage: 85%'
  }
];