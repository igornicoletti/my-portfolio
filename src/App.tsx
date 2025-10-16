import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/layout/Hero"
import { Navbar } from "@/components/layout/Navbar"
import { About } from "@/components/sections/About"
import { Experience } from "@/components/sections/Experience"
import { Projects } from "@/components/sections/Projects"

export const App = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Footer />
  </>
)
