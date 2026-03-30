"use client"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { Dock, DockIcon } from "@/components/ui/dock"
import { linksDockSection } from "@/data/resume"

export function LinksDock() {
  return (
    <div className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle" iconMagnification={60} iconDistance={100}>
          <DockIcon key="ThemeToggler">
            <Tooltip>
              <TooltipTrigger asChild className="sm:mx-2 sm:size-full">
                <div className="sm:mt-2 sm:size-full">
                  <AnimatedThemeToggler className="sm:size-full" />
                </div>
              </TooltipTrigger>
              <TooltipContent>Toggle dark/light mode</TooltipContent>
            </Tooltip>
          </DockIcon>
          <Separator orientation="vertical" className="h-full" />

          {linksDockSection.map(({ name, url, icon }) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild className="sm:m-2 sm:size-full">
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
