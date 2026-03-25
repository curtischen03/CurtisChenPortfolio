"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useActiveSection } from "@/context/ActiveSectionProvider"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronDown } from "lucide-react"
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
]
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection()

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-7 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center sm:rounded-full sm:border sm:bg-background/80 sm:p-2 sm:backdrop-blur-sm"
    >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="bg-background/80 backdrop-blur-sm sm:hidden"
          >
            Menu <ChevronDown className="ml-2 size-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-h-screen w-[90%] rounded text-muted-foreground">
          <DialogHeader>
            <DialogTitle className="text-md self-start font-medium">
              Navigation
            </DialogTitle>
          </DialogHeader>
          <nav>
            <ul>
              {links.map(({ name, hash }) => (
                <li
                  onClick={() => setIsOpen(false)}
                  key={name}
                  className="border-muted-foreground/10 py-3 text-sm [&:not(:last-child)]:border-b"
                >
                  <Link className="block" href={hash}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DialogContent>
      </Dialog>
      <nav className="hidden text-sm sm:block">
        <ul className="flex gap-4">
          {links.map(({ name, hash }) => (
            <li key={name}>
              <Link
                href={hash}
                className="relative flex items-center justify-center px-4 py-2 transition-colors hover:text-foreground"
                onClick={() => {
                  setActiveSection(name)
                  setTimeOfLastClick(Date.now())
                }}
              >
                {name}
                {name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-full bg-muted"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}
