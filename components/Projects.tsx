"use client"
import { TypingAnimation } from "./ui/typing-animation"
import { ProjectCard } from "@/components/ui/project-card"
import { projectSection, projectTitleOptions } from "@/data/resume"
import { LazyMotion, domAnimation, m } from "framer-motion"

export function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-row justify-center bg-gray-50 pb-20 sm:pb-35 dark:bg-gray-900"
    >
      <div className="mt-20 flex w-full flex-col items-center px-5 md:px-20">
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            viewport={{ once: true }}
          >
            <h2 className="pb-8 text-center text-3xl font-bold sm:text-4xl">
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
            </h2>
          </m.div>
        </LazyMotion>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ x: "-25vh", opacity: 0, scale: 0.75 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 60, damping: 25 }}
            viewport={{ once: true }}
            className="grid max-w-5xl auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2"
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
          </m.div>
        </LazyMotion>
      </div>
    </div>
  )
}
