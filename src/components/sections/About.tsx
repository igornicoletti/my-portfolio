import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import { DownloadIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'

const BASE_DELAY = 0.25
const STAGGER_DELAY = 0.05

export const About = () => {
  const { t } = useTranslation()

  return (
    <section id='about' className='relative px-4 py-20'>
      <div className='mx-auto max-w-screen-lg'>
        <div className='flex flex-col gap-x-16 md:flex-row-reverse'>
          <BlurFade direction='up' delay={BASE_DELAY} inView>
            <div className='hidden sticky top-20 max-w-xs rounded-lg overflow-hidden md:block'>
              <img
                src='/images/igornicoletti.png'
                alt={t('about_image')}
                className='w-full h-full object-cover'
              />
            </div>
          </BlurFade>
          <div className='flex-1'>
            <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 0} inView>
              <Badge variant='secondary' className='mb-4'>
                {t('about_badge')}
              </Badge>
            </BlurFade>
            <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 1} inView>
              <div className='mb-4 max-w-xs rounded-lg overflow-hidden md:hidden'>
                <img
                  src='/images/igornicoletti.png'
                  alt={t('about_image')}
                  className='w-full h-full object-cover' />
              </div>
            </BlurFade>
            <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 2} inView>
              <h2 className='mb-4 text-3xl font-medium text-balance sm:text-4xl'>
                {t('about_title')}
              </h2>
            </BlurFade>
            <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 3} inView>
              <p className='mb-4 text-muted-foreground text-balance sm:text-lg'>
                {t('about_paragraph_1')}
              </p>
            </BlurFade>
            <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 4} inView>
              <p className='mb-4 text-muted-foreground text-balance sm:text-lg'>
                {t('about_paragraph_2')}
              </p>
            </BlurFade>
            <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 5} inView>
              <p className='mb-8 text-muted-foreground text-balance sm:text-lg'>
                {t('about_paragraph_3')}
              </p>
            </BlurFade>
            <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 6} inView>
              <div className='flex flex-wrap gap-2'>
                <Button asChild variant='default'>
                  <a href='https://github.com/igornicoletti' target='_blank' rel='noopener noreferrer'>
                    <GitHubLogoIcon />
                    {t('about_github')}
                  </a>
                </Button>
                <Button asChild variant='outline'>
                  <a href='/images/igornicoletti.pdf' download>
                    <DownloadIcon />
                    {t('about_resume')}
                  </a>
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
