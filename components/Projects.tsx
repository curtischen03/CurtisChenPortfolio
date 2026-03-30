import { TypingAnimation } from "./ui/typing-animation"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ui/project-card"
import { Globe, Github } from "lucide-react"

export function Projects() {
  const projectSection = [
    {
      href: "https://quizai-nextjs.vercel.app/",
      title: "Quiz AI",
      description:
        "Intelligent fullstack web app that allows users to generate quizzes based on chosen topic and number rof questions, take quizzes, and share with others",
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
        "Fullstack web app that simplifies job search process for developers by providing a daily curated list of full stack positions, tracking user application progress, and displaying visual insights and stats",
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
          href: "https://github.com/curtischen03/JobDashboard",
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
        "MagicUI",
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
  const projectTitleOptions = ["Projects"]
  return (
    <div id="projects" className="flex flex-row justify-center pb-20 sm:pb-35">
      <div className="mt-20 w-full max-w-6xl px-5 md:px-20">
        <motion.div
          initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: true }}
        >
          <h1 className="pb-8 text-center text-3xl font-bold sm:text-4xl">
            <TypingAnimation
              words={projectTitleOptions}
              showCursor={true}
              blinkCursor={true}
              pauseDelay={2000}
              cursorStyle="line"
              auroraText={false}
              typeSpeed={50}
              loop
            />
          </h1>
        </motion.div>
        <motion.div
          initial={{ x: "-25vh", opacity: 0, scale: 0.75 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 25 }}
          viewport={{ once: true }}
          className="grid auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {projectSection.map(
            ({ href, title, description, dates, tags, image, links }) => (
              <ProjectCard
                href={href}
                key={title}
                title={title}
                description={description}
                dates={dates}
                tags={tags}
                image={image}
                links={links}
              />
            )
          )}
        </motion.div>
      </div>
    </div>
  )
}
