import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import AcademicProjectsSection from "@/components/sections/AcademicsProjects";
import Contact from "@/components/sections/Contact";
import Formation from "@/components/sections/Formation";




export default function Home() {
  return (
    
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Formation />
      <AcademicProjectsSection />
      <Contact />
    </main>
    
  );
}
