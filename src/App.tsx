import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Navbar } from '@/components/sections/Navbar'
import { Projects } from '@/components/sections/Projects'
import { Technology } from '@/components/sections/Technology'
import { BentoDemo } from '@/components/shared/BentoDemo'

export const App = () => (
  <>
    <Navbar />
    <Hero />
    <Technology />
    <BentoDemo />
    <About />
    <Experience />
    <Projects />
    <Footer />
  </>
)
