// src/components/sections/Hero/index.tsx
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { Badge } from '@/components/ui/badge'
import { BorderBeam } from '@/components/ui/border-beam'
import { cn } from '@/lib/utils'
import { LightningIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id='home' className='relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-6'>
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-0 h-full skew-y-12'
        )}
      />
      <div className='relative z-[1] mx-auto max-w-screen-md text-center'>
        <Badge className='relative inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-medium text-primary overflow-hidden'>
          <LightningIcon weight='fill' />
          {t('hero_badge_title')}
          <BorderBeam
            duration={4}
            size={40}
            className="from-transparent via-accent-foreground to-transparent"
          />
        </Badge>
        <h1 className='mt-6 text-4xl font-bold !leading-[1.2] tracking-tight sm:text-5xl md:text-6xl'>
          {t('hero_main_title')}
        </h1>
        <p className='mt-6 text-[17px] text-muted-foreground md:text-lg'>
          {t('hero_subtitle')}
        </p>
      </div>
    </section>
  )
}
