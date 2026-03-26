"use client"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { Github } from "lucide-react"
import React from "react"

export function Skills() {
  const skillsSection = [
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
      skills: [
        "PyTorch",
        "TensorFlow",
        "OpenCv",
        "LLMs",
        "Pandas",
        "MatPlotLib",
      ],
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
  const skillsIcons: Record<string, React.ReactNode> = {
    Python: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
      />
    ),
    Typescript: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
      />
    ),
    Javascript: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      />
    ),
    "C++": (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
      />
    ),
    Java: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
      />
    ),
    React: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      />
    ),
    TailwindCss: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
      />
    ),
    ShadCn: <img className="mr-1 h-6 w-6" src="shadcn.png" />,
    "Next.js": (
      <img
        className="mr-1 h-6 w-6"
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
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
      />
    ),
    Supabase: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg"
      />
    ),
    Firebase: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
      />
    ),
    "Express.js": (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
      />
    ),
    PostgreSql: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
      />
    ),
    "Node.js": (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
      />
    ),
    Docker: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
      />
    ),
    PyTorch: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
      />
    ),
    TensorFlow: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
      />
    ),
    OpenCv: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg"
      />
    ),
    Pandas: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
      />
    ),
    MatPlotLib: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
      />
    ),
    Git: (
      <img
        className="mr-1 h-6 w-6"
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
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg"
      />
    ),
    Jira: (
      <img
        className="mr-1 h-6 w-6"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg"
      />
    ),
  }
  return (
    <div
      id="skills"
      className="flex min-h-[75dvh] flex-row justify-center pb-5"
    >
      <div className="mt-20 w-full max-w-5xl px-5 md:px-20">
        <motion.div
          initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: false }}
        >
          <h1 className="pb-8 text-center text-3xl font-bold sm:text-4xl">
            <TypingAnimation
              words={["Skills"]}
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
          initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 25 }}
          viewport={{
            once: false,
          }}
          className="flex flex-col gap-12"
        >
          {skillsSection.map(({ type, skills }) => (
            <div className="flex flex-col gap-5" key={type}>
              <h1 className="text-xl font-bold sm:text-2xl">{type}</h1>
              <div className="flex flex-row flex-wrap gap-4 lg:gap-6">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-md flex items-center justify-center px-4 py-5 sm:text-lg lg:px-5 lg:py-6"
                  >
                    {skill in skillsIcons ? skillsIcons[skill] : null}
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
