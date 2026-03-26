"use client"
import { Linkedin, Github, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { WordRotate } from "@/components/ui/word-rotate"
import { TypingAnimation } from "@/components/ui/typing-animation"

export function Home() {
  const homeNameOptions = ["Curtis."]
  const homeJobOptions = [
    "Fullstack Developer.",
    "Machine Learning Engineer.",
    "Software Engineer.",
  ]
  const homePictureSrc = "portfolioPicture.png"
  return (
    <div
      id="home"
      className="flex min-h-dvh flex-row items-center justify-center gap-15 px-4"
    >
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
            <TypingAnimation
              words={homeNameOptions}
              showCursor={true}
              blinkCursor={true}
              pauseDelay={2000}
              cursorStyle="line"
              auroraText={true}
              typeSpeed={50}
              loop
            />
          </h1>
          <h1 className="text-center font-sans text-xl sm:text-3xl">
            I am a
            <WordRotate className="font-bold" words={homeJobOptions} />
          </h1>
        </div>
        <div className="flex flex-row justify-center gap-3">
          <Button
            onClick={() => console.log("clicked")}
            className="rounded-md border border-slate-300 bg-white text-black"
          >
            <Linkedin />
          </Button>
          <Button
            className="rounded-md border border-slate-300 bg-white text-black"
            onClick={() => console.log("clicked")}
          >
            <Github />
          </Button>
        </div>
        <div className="flex flex-row justify-center">
          <Button className="rounded-md border border-slate-300 bg-white py-5 text-black">
            <Download />
            Download Resume
          </Button>
        </div>
      </motion.div>
      {/* right */}
      <motion.div
        initial={{ x: "100vh", opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="hidden max-w-100 grow sm:block"
      >
        <img src={homePictureSrc} />
      </motion.div>
    </div>
  )
}
