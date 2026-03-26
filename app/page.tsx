import { Header } from "@/components/Header"
import { LinksDock } from "@/components/LinksDock"
import { Home } from "@/components/Home"
import { Experience } from "@/components/Experience"
import { Education } from "@/components/Education"
import { Skills } from "@/components/Skills"

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <Experience />
      <Education />
      <Skills />
      <LinksDock />
      <div className="min-h-[75dvh] bg-red-500"></div>
    </div>
  )
}
