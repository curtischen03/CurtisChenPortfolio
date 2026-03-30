import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
interface WebsiteLinkButtonProps {
  href: string
  label: string
}
export function WebsiteLinkButton({ href, label }: WebsiteLinkButtonProps) {
  return (
    <Button className="w-fit rounded-md border border-slate-300 bg-white py-5 text-black no-underline transition-transform duration-200 hover:scale-105 active:scale-95 lg:mx-4">
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noreferrer"
        className="start inline !no-underline"
      >
        <ExternalLink className="start mr-2 inline" />
        Link to Website
      </a>
    </Button>
  )
}
