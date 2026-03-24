"use client"
import { Linkedin, Github, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { WordRotate } from "@/components/ui/word-rotate"
import { AuroraText } from "@/components/ui/aurora-text"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { RainbowButton } from "@/components/ui/rainbow-button"

export function Home() {
  return (
    <div className="flex min-h-dvh flex-row items-center justify-center gap-15 px-4">
      {/* left */}
      <motion.div
        initial={{ x: "-100vh", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="flex grow flex-col justify-center gap-4 sm:max-w-120"
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-center font-sans text-xl sm:text-3xl">Hi, I'm</h1>
          <h1 className="text-center font-sans text-5xl font-bold sm:text-7xl">
            {/* <AuroraText> */}
            <TypingAnimation
              words={["Curtis Chen.", "Curtis."]}
              showCursor={true}
              blinkCursor={true}
              pauseDelay={2000}
              cursorStyle="line"
              auroraCursor={true}
              typeSpeed={50}
              loop
            />
            {/* </AuroraText> */}
          </h1>
          <h1 className="text-center font-sans text-xl sm:text-3xl">
            I am a{" "}
            <WordRotate
              className="font-bold"
              words={[
                "Fullstack Developer.",
                "Machine Learning Engineer.",
                "Software Engineer.",
              ]}
            />
          </h1>
        </div>
        <div className="flex flex-row justify-center gap-3">
          <RainbowButton
            onClick={() => console.log("clicked")}
            className="rounded-md border text-black"
          >
            <Linkedin />
          </RainbowButton>
          <RainbowButton
            className="rounded-md border text-black"
            onClick={() => console.log("clicked")}
          >
            <Github />
          </RainbowButton>
        </div>
        <div className="flex flex-row justify-center">
          <RainbowButton className="rounded-md border text-black">
            <Download />
            Download Resume
          </RainbowButton>
        </div>
      </motion.div>
      {/* right */}
      <motion.div
        initial={{ x: "100vh", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="hidden max-w-100 grow sm:block"
      >
        <img src="portfolioPicture.png" />
      </motion.div>
    </div>
  )
}
