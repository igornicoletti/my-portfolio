// src/components/sections/Experience/index.tsx
import { Badge } from '@/components/ui/badge'
import { CalendarBlankIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

interface ExperienceProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export const Experience = () => {
  const { t } = useTranslation()

  const experiences = t('experiences', {
    returnObjects: true,
  }) as ExperienceProps[]

  return (
    <section id='experience' className='relative px-6 py-20'>
      <div className='mx-auto max-w-screen-md'>
        <div className='text-center'>
          <Badge variant='secondary' className='mb-4'>{t('experience_section_title')}</Badge>
          <h2 className='mb-4 text-4xl text-balance font-extralight sm:text-5xl'>{t('experience_main_title')}</h2>
          <p className='mb-12 text-lg text-balance text-muted-foreground'>{t('experience_subtitle')}</p>
        </div>
        <ul className='relative'>
          {experiences.map((experience, idx) => (
            <li key={idx} className='relative pl-8 not-last:pb-12 group'>
              <div className='absolute left-0.5 top-2 h-full w-0.5 bg-muted' />
              <div className='absolute -left-0.5 top-2 size-2.5 rounded-full border-2 border-primary bg-background' />
              <h3 className='mb-2 text-xl font-medium sm:text-2xl'>{experience.company}</h3>
              <h4 className='mb-2 text-lg font-extralight'>{experience.title}</h4>
              <div className='flex items-center gap-2 mb-4 font-extralight text-sm text-muted-foreground'>
                <CalendarBlankIcon weight='duotone' />
                <span>{experience.period}</span>
              </div>
              <p className='mb-6 text-lg text-balance text-muted-foreground'>{experience.description}</p>
              <div className='flex flex-wrap gap-2'>
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant='secondary'>{tech}</Badge>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
