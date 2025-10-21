import { Badge } from '@/components/ui/badge'
import { BorderBeam } from '@/components/ui/border-beam'
import { Particles } from '@/components/ui/particles'
import { TextAnimate } from '@/components/ui/text-animate'
import { LightningIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative h-full overflow-hidden py-6 md:py-20">
      <div className="z-10 flex flex-col items-center gap-6 px-6 pb-8 text-center md:px-10 mt-10 md:mt-20">
        <Badge className="relative text-accent-foreground bg-accent/50 overflow-hidden">
          <LightningIcon weight="duotone" />
          {t('hero_badge_title')}
          <BorderBeam size={35} className="from-transparent via-accent-foreground to-transparent" />
        </Badge>

        <TextAnimate
          duration={0.8}
          animation="blurInUp"
          by="word"
          as="h1"
          className="max-w-2xl font-semibold tracking-tighter text-balance text-5xl md:text-7xl">
          {t('hero_main_title')}
        </TextAnimate>

        <TextAnimate
          delay={0.5}
          animation="fadeIn"
          by="line"
          as="p"
          className="text-muted-foreground max-w-xl tracking-tight text-base text-balance md:text-lg">
          {t('hero_subtitle')}
        </TextAnimate>
      </div>

      <Particles className="fixed inset-0 z-0 w-screen h-screen" refresh />
    </section>

  )
}
