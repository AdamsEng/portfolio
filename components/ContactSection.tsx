import { Mail } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { portfolioData } from "@/lib/portfolio-data"

export default function ContactSection() {
  const email = portfolioData.socials.find((s) => s.icon === "mail")

  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-4 py-12 text-center"
    >
      <div className="flex items-center gap-2">
        <span className="h-px w-8 bg-primary/40" />
        <h2 className="text-2xl font-semibold tracking-tight">Get in Touch</h2>
        <span className="h-px w-8 bg-primary/40" />
      </div>
      <p className="text-muted-foreground max-w-md leading-relaxed">
        I&apos;m always open to discussing new projects, interesting ideas, or
        opportunities to be part of something great.
      </p>
      {email && (
        <a
          href={email.href}
          className={cn(buttonVariants({ size: "lg" }), "mt-2")}
        >
          <Mail className="size-4" />
          Say Hello
        </a>
      )}
    </section>
  )
}
