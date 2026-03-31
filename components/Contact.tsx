import { motion } from "framer-motion"
import { TypingAnimation } from "./ui/typing-animation"
import { Mail, Phone } from "lucide-react"
import {
  contactEmail,
  contactPhoneNumber,
  contactTitleOptions,
} from "@/data/resume"
export function Contact() {
  return (
    <div id="contact" className="flex flex-row justify-center pb-20 sm:pb-35">
      <div className="mt-20 w-full max-w-5xl px-5 md:px-20">
        <motion.div
          initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          viewport={{ once: true }}
        >
          <h2 className="pb-8 text-center text-3xl font-bold sm:text-4xl">
            <TypingAnimation
              words={contactTitleOptions}
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
          initial={{ x: "-25vh", opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 25 }}
          viewport={{ once: true }}
        >
          <p className="pb-8 text-left text-xl font-bold sm:text-2xl">
            Get in Touch
          </p>
          <h3 className="text-md sm:text-l pb-2 text-left font-bold">
            <Mail className="start mr-4 inline" />
            Email
          </h3>
          <p className="mb-5">{contactEmail}</p>
          <h3 className="text-md pb-2 text-left font-bold sm:text-lg">
            <Phone className="start mr-4 inline" />
            Phone
          </h3>
          <p>{contactPhoneNumber}</p>
        </motion.div>
      </div>
    </div>
  )
}
