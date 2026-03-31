"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { WebsiteLinkButton } from "@/components/ui/website-link-button"
import { educationSection, educationTitleOptions } from "@/data/resume"

export function Education() {
  return (
    <div
      id="education"
      className="flex flex-row justify-center bg-gray-50 pb-20 sm:pb-35 dark:bg-gray-900"
    >
      <div className="mt-20 flex w-full flex-col items-center px-5 md:px-20">
        <motion.div
          initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: true }}
        >
          <h2 className="pb-8 text-center text-3xl font-bold sm:text-4xl">
            <TypingAnimation
              words={educationTitleOptions}
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
        <Accordion type="single" collapsible className="max-w-5xl">
          <motion.div
            initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 25 }}
            viewport={{
              once: true,
            }}
          >
            {educationSection.map((school) => (
              <AccordionItem value={school.degree} key={school.degree}>
                <AccordionTrigger className="w-full">
                  <div className="flex w-full flex-row items-end justify-between gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {school.name}
                      </h3>
                      <h4 className="text-md text-muted-foreground sm:text-lg">
                        {school.degree}, {school.gpa}
                      </h4>
                    </div>
                    <h4 className="text-md font-medium whitespace-nowrap text-muted-foreground sm:text-lg">
                      {school.date}
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-md h-fit sm:text-lg">
                  <h4 className="text-md sm:text:lg mb-5 flex flex-row gap-3 font-semibold">
                    <BookOpen /> Relevant Coursework:
                  </h4>
                  <div className="items- justistartfy-between flex flex-row flex-wrap gap-5 lg:flex-nowrap">
                    {school.coursework && (
                      <div className="flex flex-row flex-wrap gap-3">
                        {school.coursework.map((course) => (
                          <Badge
                            variant="secondary"
                            className="text-md px-3 py-4 sm:text-lg"
                            key={course}
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {"externalLink" in school && (
                      <WebsiteLinkButton
                        href={school.externalLink.src}
                        label={school.externalLink.label}
                      />
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </motion.div>
        </Accordion>
      </div>
    </div>
  )
}
