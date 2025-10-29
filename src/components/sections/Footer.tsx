import { BlurFade } from '@/components/ui/blur-fade'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { useTranslation } from 'react-i18next'

const BASE_DELAY = 0.25
const STAGGER_DELAY = 0.05

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='relative'>
      <div className='mx-auto max-w-screen-md px-4 py-20'>
        <div className='flex flex-col items-center gap-6'>
          <BlurFade delay={BASE_DELAY + 0 * STAGGER_DELAY} inView>
            <InteractiveHoverButton>
              <a href='mailto:igor93nicoletti@gmail.com' target='_blank' rel='noopener noreferrer'>
                {t('footer_contact')}
              </a>
            </InteractiveHoverButton>
          </BlurFade>
          <BlurFade delay={BASE_DELAY + 1 * STAGGER_DELAY} inView>
            <p className='text-sm text-muted-foreground font-semibold'>
              {t('footer_copyright', { year: new Date().getFullYear() })}
            </p>
          </BlurFade>
        </div>
      </div>
    </footer>
  )
}
