import { MapPin } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SkillBadge from "@/components/SkillBadge"
import SocialLinks from "@/components/SocialLinks"
import { portfolioData } from "@/lib/portfolio-data"
import { assetPath } from "@/lib/asset-path"

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 py-20 text-center">
      <Avatar className="size-28 ring-4 ring-primary/40">
        <AvatarImage src={assetPath(portfolioData.avatar)} alt={portfolioData.name} />
        <AvatarFallback className="text-2xl font-semibold bg-primary/15 text-primary">
          {portfolioData.avatarFallback}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {portfolioData.name}
        </h1>
        <p className="text-lg font-semibold text-primary">
          {portfolioData.title}
        </p>
        <span className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="size-3.5" />
          {portfolioData.location}
        </span>
      </div>

      <p className="max-w-xl text-muted-foreground leading-relaxed">
        {portfolioData.description}
      </p>

      <SocialLinks />

      <div className="flex flex-wrap justify-center gap-2 max-w-lg">
        {portfolioData.skills.map((skill) => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>
    </section>
  )
}
