"use client"
import { Linkedin, Github, FileText } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Dock, DockIcon } from "@/components/ui/dock"

const links = [
  {
    name: "GitHub",
    url: "https://github.com/curtischen03",
    icon: <Github className="size-full" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/curtis-chen1/",
    icon: <Linkedin className="size-full" />,
  },
  {
    name: "Resume",
    url: "#",
    icon: <FileText className="size-full" />,
  },
]

export function LinksDock() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle" iconMagnification={60} iconDistance={100}>
          <DockIcon key="ThemeToggler">
            <Tooltip>
              <TooltipTrigger asChild className="mx-2 size-full">
                <div className="mt-2 size-full">
                  <AnimatedThemeToggler className="size-full" />
                </div>
              </TooltipTrigger>
              <TooltipContent>Toggle dark/light mode</TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator orientation="vertical" className="h-full" />

          {links.map(({ name, url, icon }) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild className="m-2 size-full">
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-full w-full items-center justify-center"
                  >
                    {icon}
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  )
}
