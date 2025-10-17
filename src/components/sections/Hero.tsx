import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { LightningIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export const Hero = () => {
  const { t } = useTranslation()

  return (
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
        <Badge className='rounded-full border-none px-3 py-1 inline-flex items-center gap-2 bg-primary/10 text-primary font-medium'>
          <LightningIcon weight='fill' />
          {t('hero_badge_title')}
        </Badge>
        <h1 className='mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight'>
          {t('hero_main_title')}
        </h1>
        <p className='mt-6 text-[17px] md:text-lg text-muted-foreground'>
          {t('hero_subtitle')}
        </p>
      </div>
    </div>
  )
}
