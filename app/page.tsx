import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { PersonalLinksDock } from "@/components/PersonalLinksDock"

export default function Page() {
  return (
    <div className="container flex flex-col items-center">
      <Header />
      <PersonalLinksDock />
    </div>
  )
}
