import { Badge } from '@/components/ui/badge'
import { BorderBeam } from '@/components/ui/border-beam'
import { Particles } from '@/components/ui/particles'
import { TextAnimate } from '@/components/ui/text-animate'
import { LightningIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id='home' className='relative flex min-h-[calc(100vh-theme(spacing.16))] w-full items-center justify-center py-20 px-6 overflow-hidden'>
      <div className='relative z-[1] mx-auto max-w-screen-md text-center'>
        <Badge className='relative mb-6 px-3 py-1 text-accent-foreground bg-accent/50 overflow-hidden'>
          <LightningIcon weight='duotone' />
          {t('hero_badge_title')}
          <BorderBeam size={50} className="from-transparent via-accent-foreground to-transparent" />
        </Badge>
        <TextAnimate
          duration={0.8}
          animation="blurInUp"
          by="word"
          as="h1"
          className='mb-4 text-5xl text-balance font-medium md:text-6xl'>
          {t('hero_main_title')}
        </TextAnimate>
        <TextAnimate
          delay={0.5}
          animation="fadeIn"
          by="line"
          as="p"
          className='text-lg text-balance text-muted-foreground'>
          {t('hero_subtitle')}
        </TextAnimate>
      </div>
      <Particles className="absolute inset-0 z-0" refresh />
    </section>
  )
}
