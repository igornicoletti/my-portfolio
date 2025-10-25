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
    <section id='about' className='relative'>
      <div className='mx-auto max-w-screen-lg px-4 py-20'>
        <div className='flex flex-col md:gap-16 lg:gap-24 md:flex-row-reverse'>
          <BlurFade delay={BASE_DELAY} inView>
            <div className='hidden sticky top-20 max-w-xs rounded-lg overflow-hidden md:block'>
              <img src='/images/igornicoletti.png' alt={t('about_image')} className='w-full h-full object-cover' />
            </div>
          </BlurFade>
          <div className='flex-1'>
            <div className='mb-12 flex flex-col gap-4'>
              <BlurFade delay={BASE_DELAY + 0 * STAGGER_DELAY} inView>
                <Badge variant='secondary'>{t('about_badge')}</Badge>
              </BlurFade>
              <BlurFade delay={BASE_DELAY + 2 * STAGGER_DELAY} inView>
                <h2 className='text-3xl text-balance font-medium sm:text-4xl'>
                  {t('about_title')}
                </h2>
              </BlurFade>
              <BlurFade delay={BASE_DELAY + 1 * STAGGER_DELAY} inView>
                <div className='max-w-xs rounded-lg overflow-hidden md:hidden'>
                  <img src='/images/igornicoletti.png' alt={t('about_image')} className='w-full h-full object-cover' />
                </div>
              </BlurFade>
              <BlurFade delay={BASE_DELAY + 3 * STAGGER_DELAY} inView>
                <p className='text-lg text-pretty text-muted-foreground sm:text-xl'>
                  {t('about_paragraph_1')}
                </p>
              </BlurFade>
              <BlurFade delay={BASE_DELAY + 4 * STAGGER_DELAY} inView>
                <p className='text-lg text-pretty text-muted-foreground sm:text-xl'>
                  {t('about_paragraph_2')}
                </p>
              </BlurFade>
              <BlurFade delay={BASE_DELAY + 5 * STAGGER_DELAY} inView>
                <p className='text-lg text-pretty text-muted-foreground sm:text-xl'>
                  {t('about_paragraph_3')}
                </p>
              </BlurFade>
            </div>
            <div className='flex flex-wrap gap-2'>
              <BlurFade delay={BASE_DELAY + 6 * STAGGER_DELAY} inView>
                <Button asChild variant='default'>
                  <a href='https://github.com/igornicoletti' target='_blank' rel='noopener noreferrer'>
                    <GitHubLogoIcon />
                    {t('about_github')}
                  </a>
                </Button>
              </BlurFade>
              <BlurFade delay={BASE_DELAY + 7 * STAGGER_DELAY} inView>
                <Button asChild variant='outline'>
                  <a href='/images/igornicoletti.pdf' download>
                    <DownloadIcon />
                    {t('about_resume')}
                  </a>
                </Button>
              </BlurFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
