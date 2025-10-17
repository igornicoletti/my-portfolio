// src/components/sections/Hero/index.tsx
import { Badge } from '@/components/ui/badge'
import { BorderBeam } from '@/components/ui/border-beam'
import { Particles } from '@/components/ui/particles'
import { TextAnimate } from '@/components/ui/text-animate'
import { LightningIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id='home' className='relative flex min-h-[calc(100vh-theme(spacing.16))] w-full items-center justify-center overflow-hidden px-6'>
      <div className='relative z-[1] mx-auto max-w-screen-md text-center'>
        <Badge className='relative px-3 py-1.5 text-accent-foreground bg-accent/25 overflow-hidden'>
          <LightningIcon weight='fill' />
          {t('hero_badge_title')}
          <BorderBeam
            size={50}
            className="from-transparent via-accent-foreground to-transparent"
          />
        </Badge>
        <TextAnimate
          duration={0.8}
          animation="blurInUp"
          by="word"
          as="h1"
          className='mt-6 text-4xl font-bold !leading-[1.2] tracking-tight sm:text-5xl md:text-6xl'>
          {t('hero_main_title')}
        </TextAnimate>
        <TextAnimate
          delay={0.5}
          animation="fadeIn"
          by="line"
          className='mt-6 text-[17px] text-muted-foreground md:text-lg'>
          {t('hero_subtitle')}
        </TextAnimate>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        refresh
      />
    </section>
  )
}
