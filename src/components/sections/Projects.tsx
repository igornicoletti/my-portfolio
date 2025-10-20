// src/components/sections/Projects/index.tsx
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

interface ProjectsProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export const Projects = () => {
  const { t } = useTranslation()

  const projects = t('projects', {
    returnObjects: true,
  }) as ProjectsProps[]

  return (
    <section id='projects' className='relative px-6 py-20'>
      <div className='mx-auto max-w-screen-md'>
        <div className='text-center'>
          <Badge variant='secondary' className='mb-4'>{t('project_section_title')}</Badge>
          <h2 className='mb-4 text-4xl text-balance font-extralight sm:text-5xl'>{t('project_main_title')}</h2>
          <p className='mb-12 text-lg text-balance text-muted-foreground'>{t('project_subtitle')}</p>
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          {projects.map((project, idx) => (
            <div key={idx} className='group relative flex flex-col overflow-hidden rounded-lg border transition-all bg-card'>
              <div className='relative h-48 overflow-hidden bg-secondary'>
                <img src={project.image} alt={t('project_image_alt')} className='object-cover transition-transform duration-300 group-hover:scale-105' />
              </div>
              <div className='flex flex-1 flex-col p-6'>
                <h3 className='mb-2 text-xl font-semibold'>{project.title}</h3>
                <p className='mb-4 text-muted-foreground'>{project.description}</p>
                <div className='mb-6 flex flex-wrap gap-2'>
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant='secondary'>{tech}</Badge>
                  ))}
                </div>
                <div className='mt-auto flex flex-wrap gap-3'>
                  {project.githubUrl && (
                    <Button asChild>
                      <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                        <GithubLogoIcon />
                        {t('project_btn_code')}
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild variant='outline'>
                      <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                        <ArrowSquareOutIcon />
                        {t('project_btn_live')}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
