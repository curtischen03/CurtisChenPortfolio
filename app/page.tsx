"use client"
import { Header } from "@/components/Header"
import { LinksDock } from "@/components/LinksDock"
import { Home } from "@/components/Home"
import { Experience } from "@/components/Experience"
import { Education } from "@/components/Education"
import { Skills } from "@/components/Skills"
import { motion } from "framer-motion"
import { TypingAnimation } from "@/components/ui/typing-animation"

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <Experience />
      <Education />
      <Skills />
      <LinksDock />
      <div className="flex min-h-[75dvh] flex-row items-center justify-center">
        <motion.div
          initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: false }}
        >
          <h1 className="pb-8 text-center text-3xl font-bold sm:text-4xl">
            <TypingAnimation
              words={["In Progress..."]}
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
      </div>
    </div>
  )
}
