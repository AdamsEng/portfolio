import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import SkillBadge from "@/components/SkillBadge"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Project {
  title: string
  description: string
  tags: string[]
  screenshot: string
  href?: string
  live?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card ring-1 ring-foreground/5 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-0.5">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <span className="text-lg font-bold text-white drop-shadow-sm">
            {project.title}
          </span>
        </div>
        <div className="absolute top-3 right-3 size-2 rounded-full bg-primary opacity-80" />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5 border-t-2 border-t-primary/20">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <SkillBadge key={tag} label={tag} />
          ))}
        </div>

        <div className="flex items-center gap-3 pt-1 mt-auto">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              <Github className="size-3.5" />
              View Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "sm" }))}
            >
              <ExternalLink className="size-3.5" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
