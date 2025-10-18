// src/components/sections/Experience/index.tsx
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '../shared/SectionHeader'
import { ExperienceItem, type ExperienceItemProps } from './ExperienceItem'

export const Experience = () => {
  const { t } = useTranslation()

  const experiences = t('experiences', {
    returnObjects: true,
  }) as ExperienceItemProps[]

  return (
    <section id='experience' className='relative px-6 py-20'>
      <div className='mx-auto max-w-screen-md'>
        <SectionHeader
          badge={t('experience_section_title')}
          title={t('experience_main_title')}
          subtitle={t('experience_subtitle')} />
        <ul className='relative'>
          {experiences.map((experience, idx) => (
            <ExperienceItem key={idx} {...experience} />
          ))}
        </ul>
      </div>
    </section>
  )
}
