// src/components/sections/About/index.tsx
import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { DownloadSimpleIcon, GithubLogoIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { ProfileImage } from './ProfileImage'

const FADE_UP_DELAY = 0.05

export const About = () => {
  const { t } = useTranslation()

  const contentToAnimate = [
    <Badge variant='secondary' className='mb-4'>{t('about_section_title')}</Badge>,
    <ProfileImage className='mb-8 block md:hidden' />,
    <h2 className='mb-4 text-4xl font-bold text-balance'>{t('about_main_title')}</h2>,
    <p className='mb-4 text-muted-foreground'>{t('about_paragraph_1')}</p>,
    <p className='mb-6 text-muted-foreground'>{t('about_paragraph_2')}</p>,
    <div className='flex flex-wrap justify-center gap-4 md:justify-start'>
      <Button asChild className='w-full'>
        <a href='https://github.com/igornicoletti' target='_blank' rel='noopener noreferrer'>
          <GithubLogoIcon />
          {t('about_btn_github')}
        </a>
      </Button>
      <Button asChild variant='outline' className='w-full'>
        <a href='/igornicoletti.pdf' download>
          <DownloadSimpleIcon />
          {t('about_btn_cv')}
        </a>
      </Button>
    </div>
  ]

  return (
    <section id='about' className='relative px-6 py-20'>
      <div className='mx-auto max-w-screen-lg'>
        <div className='flex flex-col gap-16 md:flex-row-reverse'>
          <BlurFade direction='up' delay={0.25} inView>
            <ProfileImage className='hidden h-96 md:block' />
          </BlurFade>
          <div className='flex-1 md:text-left'>
            {contentToAnimate.map((component, idx) => (
              <BlurFade key={idx} direction='up' delay={0.25 + idx * FADE_UP_DELAY} inView>
                {component}
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
