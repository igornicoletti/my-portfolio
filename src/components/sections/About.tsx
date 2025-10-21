import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { DownloadSimpleIcon, GithubLogoIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

const FADE_UP_DELAY = 0.05

export const About = () => {
  const { t } = useTranslation()

  const contentToAnimate = [
    <Badge variant='secondary' className='mb-6'>{t('about_section_title')}</Badge>,
    <div className='mb-6 max-w-xs rounded-lg overflow-hidden md:hidden'>
      <img src='/images/igornicoletti.png' alt={t('about_image_alt')} className='w-full h-full object-cover' />
    </div>,
    <h2 className='mb-6 text-4xl text-balance font-extralight sm:text-5xl'>{t('about_main_title')}</h2>,
    <p className='mb-6 text-lg text-balance text-muted-foreground'>{t('about_paragraph_1')}</p>,
    <p className='mb-6 text-lg text-balance text-muted-foreground'>{t('about_paragraph_2')}</p>,
    <p className='mb-12 text-lg text-balance text-muted-foreground'>{t('about_paragraph_3')}</p>,
    <div className='flex flex-wrap gap-2'>
      <Button asChild variant='default'>
        <a href='https://github.com/igornicoletti' target='_blank' rel='noopener noreferrer'>
          <GithubLogoIcon />
          {t('about_btn_github')}
        </a>
      </Button>
      <Button asChild variant='outline'>
        <a href='/images/igornicoletti.pdf' download>
          <DownloadSimpleIcon />
          {t('about_btn_cv')}
        </a>
      </Button>
    </div>
  ]

  return (
    <section id='about' className='relative px-6 py-20'>
      <div className='mx-auto max-w-screen-lg'>
        <div className='flex gap-x-16'>
          <div className='flex-1'>
            {contentToAnimate.map((component, idx) => (
              <BlurFade key={idx} direction='up' delay={0.25 + idx * FADE_UP_DELAY} inView>
                {component}
              </BlurFade>
            ))}
          </div>
          <BlurFade direction='up' delay={0.25} inView>
            <div className='hidden sticky top-20 max-w-xs rounded-lg overflow-hidden md:block'>
              <img src='/images/igornicoletti.png' alt={t('about_image_alt')} className='w-full h-full object-cover' />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
