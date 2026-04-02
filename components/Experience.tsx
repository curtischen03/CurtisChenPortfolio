"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { motion } from "framer-motion"
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"
import { WebsiteLinkButton } from "./ui/website-link-button"
import { experienceSection, experienceTitleOptions } from "@/data/resume"

export function Experience() {
  return (
    <div
      id="experience"
      className="dark:bg-gray-[850] bg-gray-[150] flex flex-row justify-center pb-20 sm:pb-35"
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
              words={experienceTitleOptions}
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
            {experienceSection.map((job) => (
              <AccordionItem value={job.company} key={job.company}>
                <AccordionTrigger className="w-full">
                  <div className="flex w-full flex-row items-end justify-between gap-4">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {job.jobTitle}
                      </h3>
                      <h4 className="text-md text-muted-foreground sm:text-lg">
                        {job.company}
                      </h4>
                    </div>
                    <h4 className="text-md font-medium whitespace-nowrap text-muted-foreground sm:text-lg">
                      {job.date}
                    </h4>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-md flex h-fit flex-row flex-wrap items-center sm:text-lg lg:flex-nowrap lg:gap-5">
                  <p className="text-justify">{job.description}</p>
                  <div className="flex flex-col gap-4">
                    {job.externalLink && (
                      <WebsiteLinkButton
                        href={job.externalLink.src}
                        label={job.externalLink.label}
                      />
                    )}
                    {job.youtubeVideo && (
                      <HeroVideoDialog
                        className="sm:min-w-xs lg:mx-4 lg:max-w-lg"
                        animationStyle="from-center"
                        videoSrc={job.youtubeVideo.videoSrc}
                        thumbnailSrc={job.youtubeVideo.thumbnailSrc}
                        thumbnailAlt={job.youtubeVideo.thumbnailAlt}
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
