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
    <section id='experience' className='relative px-4 py-20'>
      <div className='mx-auto max-w-screen-md'>
        <div className='mb-12 flex flex-col items-center gap-4 text-center'>
          <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 0} inView>
            <Badge variant='secondary'>{t('experience_badge')}</Badge>
          </BlurFade>
          <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 1} inView>
            <h2 className='text-3xl font-medium text-balance sm:text-4xl'>
              {t('experience_title')}
            </h2>
          </BlurFade>
          <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 2} inView>
            <p className='max-w-2xl text-muted-foreground text-balance sm:text-lg'>
              {t('experience_subtitle')}
            </p>
          </BlurFade>
        </div>
        <ul className='relative'>
          {experiences.map((experience, idx) => (
            <li key={idx} className='relative not-last:pb-12 group'>
              <div className='absolute left-0.5 top-2 h-full w-0.5 bg-muted' />
              <div className='absolute -left-0.5 top-2 size-2.5 rounded-full border-2 border-primary bg-background' />
              <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * (3 + idx)} inView>
                <div className='pl-8'>
                  <h3 className='text-lg font-medium text-balance sm:text-xl'>
                    {experience.company}
                  </h3>
                  <h4 className='text-muted-foreground text-balance md:text-lg'>
                    {experience.title}
                  </h4>
                  <div className='mb-2 text-muted-foreground text-balance text-sm'>
                    <div className='flex items-center gap-2'>
                      <CalendarIcon />
                      <span>{experience.period}</span>
                    </div>
                  </div>
                  <p className='mb-4 text-muted-foreground text-balance'>
                    {experience.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant='secondary'>{tech}</Badge>
                    ))}
                  </div>
                </div>
              </BlurFade>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
