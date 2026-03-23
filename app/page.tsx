import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { PersonalLinksDock } from "@/components/PersonalLinksDock"
import { Home } from "@/components/Home"

export default function Page() {
  return (
    <div>
      <Header />
      <Home />
      <PersonalLinksDock />
    </div>
  )
}
