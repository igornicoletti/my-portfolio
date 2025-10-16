import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { LightningIcon } from '@phosphor-icons/react'

export const Hero = () => (
  <div className='relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden'>
    <AnimatedGridPattern
      numSquares={30}
      maxOpacity={0.1}
      duration={3}
      className={cn(
        '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
        'inset-x-0 h-full skew-y-12'
      )} />
    <div className='relative z-[1] text-center max-w-screen-md'>
      <Badge className='rounded-full border-none text-md'>
        <LightningIcon />
        Fullstack Web Developer
      </Badge>
      <h1 className='mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight'>
        Transforming Complex Ideas into Elegant Web Solutions
      </h1>
      <p className='mt-6 text-[17px] md:text-lg text-muted-foreground'>
        I specialize in building modern, high-performance web applications with a focus on clean architecture and code quality, using technologies like React, TypeScript, and Firebase.
      </p>
    </div>
  </div>
)
