import ProjectCard from "@/components/ProjectCard"
import { portfolioData } from "@/lib/portfolio-data"

export default function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="text-sm text-muted-foreground">
          A selection of things I&apos;ve built.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
