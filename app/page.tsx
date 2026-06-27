import HeroSection from "@/components/HeroSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6">
      <HeroSection />
      <div className="flex flex-col gap-16 pb-16">
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
