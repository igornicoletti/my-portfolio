import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { BentoDemo } from '@/components/sections/Demo'
import { Experience } from '@/components/sections/Experience'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Experience />
      <Projects />
      <BentoDemo />
      <Contact />
      <Footer />
    </>
  )
}

export default App
