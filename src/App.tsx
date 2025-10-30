import { About } from '@/components/sections/About'
import { Experience } from '@/components/sections/Experience'
import { Footer } from '@/components/sections/Footer'
import { Hero } from '@/components/sections/Hero'
import { Navbar } from '@/components/sections/Navbar'
import { Projects } from '@/components/sections/Projects'
import { Technology } from '@/components/sections/Technology'
import { BentoDemo } from '@/components/shared/BentoDemo'
import { Particles } from '@/components/ui/particles'
import { ScrollProgress } from '@/components/ui/scroll-progress'

export const App = () => (
  <div className='relative min-h-screen'>
    <div className='absolute inset-0 h-full w-full z-0'>
      <Particles quantity={80} ease={80} refresh className="h-full w-full" />
    </div>
    <div className='relative z-10'>
      <Navbar />
      <ScrollProgress />
      <Hero />
      <Technology />
      <BentoDemo />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  </div>
)
