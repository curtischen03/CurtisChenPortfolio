"use client"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { skillsSection, skillsIcons, skillTitleOptions } from "@/data/resume"

export function Skills() {
  return (
    <div id="skills" className="flex flex-row justify-center pb-20 sm:pb-35">
      <div className="mt-20 flex w-full flex-col items-center px-5 md:px-20">
        <motion.div
          initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: true }}
        >
          <h2 className="pb-8 text-center text-3xl font-bold sm:text-4xl">
            <TypingAnimation
              words={skillTitleOptions}
              showCursor={true}
              blinkCursor={true}
              pauseDelay={2000}
              cursorStyle="line"
              auroraText={false}
              typeSpeed={50}
              loop
            />
          </h2>
        </motion.div>
        <motion.div
          initial={{ x: "-25vh", opacity: 0, scale: 0.75 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{
            once: true,
          }}
          className="flex max-w-5xl flex-col gap-12"
        >
          {skillsSection.map(({ type, skills }) => (
            <div className="flex flex-col gap-5" key={type}>
              <h3 className="text-xl font-bold sm:text-2xl">{type}</h3>
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
