// src/components/sections/About/index.tsx
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DownloadSimpleIcon, GithubLogoIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { ProfileImage } from './ProfileImage'

export const About = () => {
  const { t } = useTranslation()

  return (
    <section id='about' className='relative px-6 py-20'>
      <div className='mx-auto max-w-screen-lg'>
        <div className='flex flex-col gap-16 md:flex-row-reverse'>
          <div className='flex justify-center md:w-64'>
            <ProfileImage className='hidden md:block md:h-full' />
          </div>
          <div className='flex-1 md:text-left'>
            <Badge variant='secondary' className='mb-4'>
              {t('about_section_title')}
            </Badge>
            <div className='flex justify-center'>
              <ProfileImage className='mb-8 mt-3 block md:hidden' />
            </div>
            <h2 className='mb-4 text-4xl font-bold text-balance'>{t('about_main_title')}</h2>
            <p className='mb-4 text-muted-foreground'>{t('about_paragraph_1')}</p>
            <p className='mb-6 text-muted-foreground'>{t('about_paragraph_2')}</p>
            <div className='flex flex-wrap justify-center gap-4 md:justify-start'>
              <Button className='rounded-full' asChild>
                <a href='YOUR_GITHUB_LINK' target='_blank' rel='noopener noreferrer'>
                  <GithubLogoIcon />
                  {t('about_btn_github')}
                </a>
              </Button>
              <Button variant='outline' className='rounded-full' asChild>
                <a href='/path-to-your-cv.pdf' download>
                  <DownloadSimpleIcon />
                  {t('about_btn_cv')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
