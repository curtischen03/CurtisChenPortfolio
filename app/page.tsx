import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { PersonalLinksDock } from "@/components/PersonalLinksDock"
import { Home } from "@/components/Home"
import { ProfessionalExperience } from "@/components/ProfessionalExperience"
import { Education } from "@/components/Education"
import { Skills } from "@/components/Skills"

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <ProfessionalExperience />
      <Education />
      {/* <Skills /> */}
      <PersonalLinksDock />
    </div>
  )
}
