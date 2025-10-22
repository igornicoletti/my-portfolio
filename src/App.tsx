import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Technologies } from '@/components/sections/Technologies'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Technologies />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}

export default App
