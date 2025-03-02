import CircuitBackground from "@/app/components/CircuitBackground"
import Header from "@/app/components/Header"
import Hero from "@/app/components/Hero"
import About from "@/app/components/About"
import ExperienceSection from "@/app/components/Experience"
import ProjectsSection from "@/app/components/Projects"
import SkillsSection from "@/app/components/Skills"
import ContactSection from "@/app/components/Contact"
import Footer from "@/app/components/Footer"

export default function Home() {
  return (
    <main className="bg-primary min-h-screen">
      <CircuitBackground />
      <Header />
      <Hero />
      <About />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

