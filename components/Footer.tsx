import { portfolioData } from "@/lib/portfolio-data"

export default function Footer() {
  return (
    <footer className="border-t border-primary/15 py-6 text-center text-sm text-muted-foreground">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-primary font-medium">{portfolioData.name}</span>
      </p>
    </footer>
  )
}
