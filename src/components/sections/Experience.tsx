import { Badge } from '@/components/ui/badge'
import { CalendarBlankIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

const ExperienceItem = ({ title, company, period, description, technologies }: ExperienceItemProps) => (
  <div className='relative pl-8 not-last:pb-12 group'>
    <div className='absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-2'>
      <div className='absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background' />
    </div>
    <div className='space-y-3'>
      <div className='flex items-center gap-3'>
        <span className='text-xl font-semibold'>{company}</span>
      </div>
      <div>
        <h3 className='text-muted-foreground font-medium'>{title}</h3>
        <div className='flex items-center gap-2 mt-1 text-sm'>
          <CalendarBlankIcon className='size-4' />
          <span>{period}</span>
        </div>
      </div>
      <p className='text-muted-foreground'>{description}</p>
      <div className='flex flex-wrap gap-2'>
        {technologies.map((tech) => (
          <Badge key={tech} variant='secondary' className='rounded-full'>
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  </div>
)

export const Experience = () => {
  const { t } = useTranslation()

  const experiences = t('experiences', {
    returnObjects: true
  }) as ExperienceItemProps[]

  return (
    <section id='experience' className='relative py-20 px-6'>
      <div className='max-w-screen-md mx-auto'>
        <div className='text-center mb-12'>
          <Badge variant='secondary' className='mb-4'>
            {t('experience_section_title')}
          </Badge>
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
            {t('experience_main_title')}
          </h2>
          <p className='text-muted-foreground mt-2 sm:mt-4 text-lg'>
            {t('experience_subtitle')}
          </p>
        </div>
        <div className='relative'>
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  )
}
