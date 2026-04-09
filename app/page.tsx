import { Header } from "@/components/Header"
import { Home } from "@/components/Home"
import { Experience } from "@/components/Experience"
import { Education } from "@/components/Education"
import { Skills } from "@/components/Skills"
import { Projects } from "@/components/Projects"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"
import { LinksDock } from "@/components/LinksDock"

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <LinksDock />
      <Footer />
    </div>
  )
}
