import { Github, Globe, Linkedin, FileText } from "lucide-react"

export const tabName = "Curtis Chen"
export const tabIconSrc = "portfolioLogo.png"
export const metaDescription =
  "Portfolio of Curtis Chen, a Fullstack Developer and Machine Learning Engineer. View my latest work."
export const headerLinks = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
]

export const homeNameOptions = ["Curtis."]
export const homeJobOptions = [
  "Fullstack Developer.",
  "Machine Learning Engineer.",
  "Software Engineer.",
]
export const homePicture = {
  src: "portfolioPicture.png",
  alt: "Curtis Chen Portfolio Picture",
}
export const homeGithubSrc = "https://github.com/curtischen03"
export const homeLinkedinSrc = "https://www.linkedin.com/in/curtis-chen1/"
export const homeResumeSrc = "/resume.pdf"

export const experienceSection = [
  {
    jobTitle: "Full Stack Developer",
    company: "Koios Enterprises, Calabasas, CA",
    date: "Sep 2025 – April 2026",
    description: (
      <>
        Integrate backend services with frontend using <b>Typescript</b> and{" "}
        <b>React</b> to deliver 3+ microservices, including social media, vendor
        applications, and user settings. Develop 40+ <b>Figma</b> designs into
        responsive, visually polished, and accessibility compliant pages. Build
        in-house <b>React</b> component library for major features, reducing
        frontend development time by 15%. Coordinate end to end technical
        requirements with stakeholders, designers, and engineers via <b>Jira</b>
        .
      </>
    ),
    youtubeVideo: {
      videoSrc: "https://www.youtube.com/embed/h1n7tztyCpw?si=PXiAfRNTjjSR8ihG",
      thumbnailSrc: "thumbnail.png",
      thumbnailAlt: "Koios Job Video",
    },
  },
  {
    jobTitle: "Full Stack Developer",
    company: "UC Berkeley Water Polo Club, Berkeley, CA",
    date: "Nov 2025 – Feb 2026",
    description: (
      <>
        Develop mobile friendly pages with <b>React</b>, <b>Next.js</b>,{" "}
        <b>TailwindCSS</b>, and <b>ShadCN</b> on <b>Typescript</b>. Implement
        10+ custom themed components by translating stakeholder vision into
        functional code. Design a <b>PostgreSQL</b> database in <b>Supabase</b>{" "}
        to manage a roster of 30+ athlete profiles and real time game results,
        implementing efficient data fetching for the team's public facing
        dashboard.
      </>
    ),
    externalLink: {
      src: "https://berkeleywpc.com/",
      label: "UC Berkeley Water Polo Club Website",
    },
  },
  {
    jobTitle: "Tutoring Chair",
    company: "UCLA Computer Science Department, Los Angeles, CA",
    date: "Sep 2022 – Sep 2025",
    description: `Lead 200+ student review sessions for data structures, algorithms, ML, AI, and databases,
communicating complex technical concepts.`,
  },
]
export const experienceTitleOptions = ["Experience"]

export const educationSection = [
  {
    name: "University of California, Los Angeles",
    degree: "MEng, Artificial Intelligence",
    gpa: "4.0",
    date: "2025-2026",
    coursework: [
      "Neural Networks",
      "Natural Language Processing",
      "Machine Learning Algorithms",
      "Data Mining",
      "Deep Learning",
      "Business Analytics",
    ],
    externalLink: {
      src: "https://www.meng.ucla.edu/",
      label: "UCLA MEng Program",
    },
  },
  {
    name: "University of California, Los Angeles",
    degree: "BS, Computer Science",
    gpa: "3.87",
    date: "2021-2025",
    coursework: [
      "Algorithms",
      "Data Structures",
      "Software Construction",
      "Computer Architecture",
      "Operating Systems",
      "Machine Learning",
      "Data Science",
      "Computer Vision",
    ],
    externalLink: {
      src: "https://www.cs.ucla.edu/",
      label: "UCLA CS Department",
    },
  },
]
export const educationTitleOptions = ["Education"]

export const skillsSection = [
  {
    type: "Programming Languages",
    skills: ["Typescript", "Javascript", "Python", "C++", "Java"],
  },
  {
    type: "Frontend",
    skills: ["React", "TailwindCss", "ShadCn", "Next.js", "Bootstrap"],
  },
  {
    type: "Backend",
    skills: [
      "SQL",
      "NoSql",
      "Supabase",
      "Firebase",
      "Express.js",
      "PostgreSql",
      "Node.js",
      "Docker",
    ],
  },
  {
    type: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "OpenCv", "LLMs", "Pandas", "MatPlotLib"],
  },
  {
    type: "Tools",
    skills: ["Git", "Github", "BitBucket", "Jira"],
  },
  {
    type: "Certifications",
    skills: ["AWS Cloud Practitioner", "Fullstack Web Development"],
  },
]
export const skillsIcons: Record<string, React.ReactNode> = {
  Python: (
    <img
      className="mr-1 h-6 w-6"
      alt="Python Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    />
  ),
  Typescript: (
    <img
      className="mr-1 h-6 w-6"
      alt="Typescript Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    />
  ),
  Javascript: (
    <img
      className="mr-1 h-6 w-6"
      alt="Javascript Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    />
  ),
  "C++": (
    <img
      className="mr-1 h-6 w-6"
      alt="C++ Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
    />
  ),
  Java: (
    <img
      className="mr-1 h-6 w-6"
      alt="Java Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    />
  ),
  React: (
    <img
      className="mr-1 h-6 w-6"
      alt="React Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    />
  ),
  TailwindCss: (
    <img
      className="mr-1 h-6 w-6"
      alt="TailwindCss Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    />
  ),
  ShadCn: <img className="mr-1 h-6 w-6" alt="ShadCn Icon" src="shadcn.png" />,
  "Next.js": (
    <img
      className="mr-1 h-6 w-6"
      alt="Next.js Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
    />
  ),
  Bootstrap: (
    <img
      className="mr-1 h-6 w-6"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
    />
  ),
  SQL: (
    <img
      className="mr-1 h-6 w-6"
      alt="SQL Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
    />
  ),
  Supabase: (
    <img
      className="mr-1 h-6 w-6"
      alt="Supabase Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
    />
  ),
  Firebase: (
    <img
      className="mr-1 h-6 w-6"
      alt="Firebase Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
    />
  ),
  "Express.js": (
    <img
      className="mr-1 h-6 w-6"
      alt="Express.js Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
    />
  ),
  PostgreSql: (
    <img
      className="mr-1 h-6 w-6"
      alt="PostgreSql Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
    />
  ),
  "Node.js": (
    <img
      className="mr-1 h-6 w-6"
      alt="Node.js Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    />
  ),
  Docker: (
    <img
      className="mr-1 h-6 w-6"
      alt="Docker Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    />
  ),
  PyTorch: (
    <img
      className="mr-1 h-6 w-6"
      alt="PyTorch Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
    />
  ),
  TensorFlow: (
    <img
      className="mr-1 h-6 w-6"
      alt="TensorFlow Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
    />
  ),
  OpenCv: (
    <img
      className="mr-1 h-6 w-6"
      alt="OpenCv Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"
    />
  ),
  Pandas: (
    <img
      className="mr-1 h-6 w-6"
      alt="Pandas Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
    />
  ),
  MatPlotLib: (
    <img
      className="mr-1 h-6 w-6"
      alt="MatPlotLib Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
    />
  ),
  Git: (
    <img
      className="mr-1 h-6 w-6"
      alt="Git Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    />
  ),
  Github: (
    <div className="mr-1 h-6 w-6">
      <Github />
    </div>
  ),
  BitBucket: (
    <img
      className="mr-1 h-6 w-6"
      alt="BitBucket Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg"
    />
  ),
  Jira: (
    <img
      className="mr-1 h-6 w-6"
      alt="Jira Icon"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"
    />
  ),
}
export const skillTitleOptions = ["Skills"]

export const projectSection = [
  {
    href: "https://quizai-nextjs.vercel.app/",
    title: "Quiz AI",
    description:
      "Fullstack web app that allows users to generate quizzes based on chosen topic and number of questions, take quizzes, and share with others",
    dates: "December 2025",
    tags: [
      "React",
      "Typescript",
      "Bootstrap",
      "Next.js",
      "Supabase",
      "PostgreSql",
    ],
    image: "quizai.png",
    links: [
      {
        type: "Website",
        href: "https://quizai-nextjs.vercel.app/",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/curtischen03/quizai",
        icon: <Github className="size-3" />,
      },
    ],
  },
  {
    href: "https://job-dashboard-silk.vercel.app/",
    title: "Job Dashboard",
    description:
      "Fullstack web app that simplifies job search process for developers by providing a daily curated list of full stack positions, tracking user application progress via user account, and displaying visual insights and stats",
    dates: "February 2026",
    tags: [
      "React",
      "Typescript",
      "Next.js",
      "TailwindCSS",
      "ShadCn",
      "Firebase",
      "NoSql",
    ],
    image: "jobdashboard.png",
    links: [
      {
        type: "Website",
        href: "https://job-dashboard-silk.vercel.app/",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/curtischen03/JobDashboard",
        icon: <Github className="size-3" />,
      },
    ],
  },
  {
    href: "https://github.com/curtischen03/EMG-Signal-Machine-Learning",
    title: "Muscle Activity Machine Learning",
    description:
      "Developed a machine learning model that maps EMG muscle signals to keystroke predictions, supporting accessible input for users with physical disabilities",
    dates: "March 2026",
    tags: ["Python", "PyTorch", "NumPy", "Pandas", "MatPlotLib"],
    image: "emgmachinelearning.png",
    links: [
      {
        type: "Source",
        href: "https://github.com/curtischen03/EMG-Signal-Machine-Learning",
        icon: <Github className="size-3" />,
      },
    ],
  },
  {
    href: "https://curtis-chen-portfolio.vercel.app/",
    title: "Personal Portfolio",
    description:
      "Built a responsive personal portfolio with a clean UI, designed for easy customization and reusable as a template for other developers.",
    dates: "March 2026",
    tags: [
      "React",
      "Typescript",
      "Next.js",
      "TailwindCSS",
      "ShadCn",
      "Framer Motion",
    ],
    image: "personalportfolio.png",
    links: [
      {
        type: "Website",
        href: "https://curtis-chen-portfolio.vercel.app/",
        icon: <Globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/curtischen03/CurtisChenPortfolio",
        icon: <Github className="size-3" />,
      },
    ],
  },
]
export const projectTitleOptions = ["Projects"]

export const contactEmail = "curtischen1234@gmail.com"
export const contactPhoneNumber = "+1 (626) 321 0852"
export const contactTitleOptions = ["Contact Me"]

export const linksDockSection = [
  {
    name: "GitHub",
    url: "https://github.com/curtischen03",
    icon: <Github className="sm:size-full" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/curtis-chen1/",
    icon: <Linkedin className="sm:size-full" />,
  },
  {
    name: "Resume",
    url: "/resume.pdf",
    icon: <FileText className="sm:size-full" />,
  },
]

export const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export const footerSocialLinks = [
  {
    href: "https://www.linkedin.com/in/curtis-chen1/",
    label: "Linkedin",
    icon: <Linkedin />,
  },
  {
    href: "https://github.com/curtischen03",
    label: "Github",
    icon: <Github />,
  },
]
export const footerName = "Curtis Chen"
export const footerGithub = "https://github.com/curtischen03"
