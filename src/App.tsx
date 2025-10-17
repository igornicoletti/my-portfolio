// src/App.tsx
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { ScrollVelocity } from '@/components/shared/ScrollVelocity'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollVelocity />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}

export default App
