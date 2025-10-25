import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { CalendarIcon } from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'

interface ExperienceProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

const BASE_DELAY = 0.25
const STAGGER_DELAY = 0.05

export const Experience = () => {
  const { t } = useTranslation()

  const experiences = t('experience_items', {
    returnObjects: true
  }) as ExperienceProps[]

  return (
    <section id='experience' className='relative'>
      <div className='mx-auto max-w-screen-md px-4 py-20'>
        <div className='mb-12 flex flex-col items-center gap-4 text-center'>
          <BlurFade delay={BASE_DELAY + 0 * STAGGER_DELAY} inView>
            <Badge variant='secondary'>{t('experience_badge')}</Badge>
          </BlurFade>
          <BlurFade delay={BASE_DELAY + 1 * STAGGER_DELAY} inView>
            <h2 className='text-3xl text-balance font-medium sm:text-4xl'>
              {t('experience_title')}
            </h2>
          </BlurFade>
          <BlurFade delay={BASE_DELAY + 2 * STAGGER_DELAY} inView>
            <p className='text-lg text-pretty text-muted-foreground sm:text-xl'>
              {t('experience_subtitle')}
            </p>
          </BlurFade>
        </div>
        <ul className='relative'>
          {experiences.map((experience, idx) => (
            <li key={idx} className='relative not-last:pb-12 group'>
              <div className='absolute left-0.5 top-2 h-full w-0.5 bg-muted' />
              <div className='absolute -left-0.5 top-2 size-2.5 rounded-full border-2 border-primary bg-background' />
              <div className='flex flex-col gap-2 pl-6'>
                <BlurFade delay={BASE_DELAY + idx * STAGGER_DELAY} inView>
                  <h3 className='text-xl text-balance font-medium sm:text-2xl'>
                    {experience.company}
                  </h3>
                </BlurFade>
                <BlurFade delay={BASE_DELAY + idx * STAGGER_DELAY} inView>
                  <div className='flex items-center gap-2'>
                    <CalendarIcon />
                    <span className='text-sm text-pretty text-muted-foreground sm:text-base'>
                      {experience.period}
                    </span>
                  </div>
                </BlurFade>
                <BlurFade delay={BASE_DELAY + idx * STAGGER_DELAY} inView>
                  <p className='text-base text-pretty text-muted-foreground sm:text-lg'>
                    {experience.description}
                  </p>
                </BlurFade>
                <div className='flex flex-wrap gap-2'>
                  {experience.technologies.map((tech, idx2) => (
                    <BlurFade key={tech} delay={BASE_DELAY + idx2 * STAGGER_DELAY} inView>
                      <Badge variant='secondary'>{tech}</Badge>
                    </BlurFade>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
