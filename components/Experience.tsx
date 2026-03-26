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
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Experience() {
  const experienceSection = [
    {
      jobTitle: "Full Stack Developer",
      company: "Koios Enterprises, Calabasas, CA",
      date: "Oct 2025 – Present",
      description: `Integrated backend services with frontend using Typescript and React to deliver 3+ microservices, including social media, vendor application, and user settings.
Translated 40+ Figma designs into responsive, visually polished, and accessibility compliant pages.
Coordinated requirements with business analysts, designers, stakeholders, and backend developers via Jira.
Built an in-house React component library and UI system for major features.`,
      youtubeVideo: {
        videoSrc:
          "https://www.youtube.com/embed/h1n7tztyCpw?si=PXiAfRNTjjSR8ihG",
        thumbnailSrc: "thumbnail.png",
        thumbnailAlt: "Koios Job Video",
      },
      externalLink: "",
    },
    {
      jobTitle: "Full Stack Developer",
      company: "UC Berkeley Athletics, Berkeley, CA",
      date: "Nov 2025 – Present",
      description: `Developed mobile responsive pages using Mantine UI, React, and Next.js with Typescript.
Implemented 10+ custom themed components by translating stakeholder vision into functional code.
Designed a PostgreSQL database in Supabase to manage 30+ athlete profiles and real-time game results.
Implemented efficient data fetching for the team's public-facing dashboard.`,
      externalLink: "",
    },
    {
      jobTitle: "Tutoring Chair",
      company: "UCLA Computer Science Department, Los Angeles, CA",
      date: "Sep 2022 – Sep 2025",
      description: `Led 200+ student review sessions for data structures, algorithms, machine learning, AI, and databases.
Mentored 50+ students individually, improving average grades by 10% in core CS courses.`,
    },
  ]
  return (
    <div
      id="experience"
      className="flex min-h-[75dvh] flex-row justify-center pb-5"
    >
      <div className="mt-20 flex w-full flex-col items-center px-5 md:px-20">
        <motion.div
          initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: false }}
        >
          <h1 className="pb-8 text-center text-3xl font-bold sm:text-4xl">
            <TypingAnimation
              words={["Experience"]}
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
        <Accordion type="single" collapsible className="max-w-5xl">
          <motion.div
            initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 50, damping: 25 }}
            viewport={{
              once: false,
            }}
          >
            {experienceSection.map((job) => (
              <AccordionItem value={job.company} key={job.company}>
                <AccordionTrigger className="w-full">
                  <div className="flex w-full flex-row items-end justify-between gap-4">
                    <div className="flex flex-col">
                      <h1 className="text-xl font-bold sm:text-2xl">
                        {job.jobTitle}
                      </h1>
                      <h1 className="text-md text-muted-foreground sm:text-lg">
                        {job.company}
                      </h1>
                    </div>
                    <h1 className="text-md font-medium whitespace-nowrap text-muted-foreground sm:text-lg">
                      {job.date}
                    </h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-md flex h-fit flex-row flex-wrap items-center sm:text-lg lg:flex-nowrap lg:gap-5">
                  <p className="text-justify">{job.description}</p>
                  <div className="flex flex-col gap-4">
                    {"externalLink" in job && (
                      <Button className="w-fit rounded-md border border-slate-300 bg-white py-5 text-black lg:mx-4">
                        <ExternalLink />
                        Link to Website
                      </Button>
                    )}
                    {job.youtubeVideo && (
                      <HeroVideoDialog
                        className="min-w-xs lg:mx-4 lg:max-w-lg"
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
