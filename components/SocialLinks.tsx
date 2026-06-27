import { Github, Linkedin, Mail } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { portfolioData } from "@/lib/portfolio-data"

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="size-4" />,
  linkedin: <Linkedin className="size-4" />,
  mail: <Mail className="size-4" />,
}

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {portfolioData.socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
        >
          {iconMap[social.icon]}
        </a>
      ))}
    </div>
  )
}
