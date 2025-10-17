import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DownloadSimpleIcon, GithubLogoIcon } from '@phosphor-icons/react'
import type { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

const ProfileImage = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { t } = useTranslation()

  return (
    <div className={cn('mt-10 w-48 h-48 md:w-64 md:h-full', className)} {...props}>
      <div className='relative w-full h-full rounded-2xl overflow-hidden bg-accent'>
        <img src='/ChatGPT.png' alt={t('about_image_alt')} className='object-cover w-full h-full' />
      </div>
    </div>
  )
}

export const About = () => {
  const { t } = useTranslation()

  return (
    <section id='about' className='relative py-20 px-6'>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col md:flex-row-reverse gap-16'>
          <ProfileImage className='hidden md:block' />
          <div className='flex-1 md:text-left'>
            <Badge variant='secondary' className='mb-4'>
              {t('about_section_title')}
            </Badge>
            <ProfileImage className='mt-3 mb-8 block md:hidden' />
            <h2 className='text-4xl font-bold mb-4'>
              {t('about_main_title')}
            </h2>
            <p className='text-muted-foreground mb-4'>
              {t('about_paragraph_1')}
            </p>
            <p className='text-muted-foreground mb-6'>
              {t('about_paragraph_2')}
            </p>
            <div className='flex flex-wrap gap-4 justify-start'>
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
