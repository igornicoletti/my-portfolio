// src/components/sections/Projects/index.tsx
import { useTranslation } from 'react-i18next'
import { SectionHeader } from '../shared/SectionHeader'
import { ProjectCard, type ProjectCardProps } from './ProjectCard'

export const Projects = () => {
  const { t } = useTranslation()

  const projects = t('projects', {
    returnObjects: true,
  }) as ProjectCardProps[]

  return (
    <section id='projects' className='relative px-6 py-20'>
      <div className='mx-auto max-w-screen-md'>
        <SectionHeader
          badge={t('project_section_title')}
          title={t('project_main_title')}
          subtitle={t('project_subtitle')}
        />
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
