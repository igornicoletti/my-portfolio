import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { BorderBeam } from '@/components/ui/border-beam'
import { Particles } from '@/components/ui/particles'
import { LightningIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()

  return (
    <section id='home' className='relative'>
      <div className='mx-auto max-w-screen-md px-4 py-20 md:py-40'>
        <div className='mb-12 flex flex-col items-center gap-4 text-center'>
          <BlurFade delay={0.25 + 0 * 0.05} inView>
            <Badge className="relative text-accent-foreground bg-accent/75 overflow-hidden">
              <LightningIcon weight="duotone" />
              {t('hero_badge')}
              <BorderBeam size={35} className="from-transparent via-accent-foreground to-transparent" />
            </Badge>
          </BlurFade>
          <BlurFade delay={0.25 + 1 * 0.05} inView>
            <h1 className='text-4xl text-balance font-semibold sm:text-6xl'>
              {t('hero_title')}
            </h1>
          </BlurFade>
          <BlurFade delay={0.25 + 2 * 0.05} inView>
            <p className='text-lg text-pretty text-muted-foreground sm:text-xl'>
              {t('hero_subtitle')}
            </p>
          </BlurFade>
        </div>
      </div>
      <Particles className="fixed inset-0 z-0 w-screen h-screen" refresh />
    </section>

  )
}
