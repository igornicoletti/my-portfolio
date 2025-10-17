// src/components/sections/Projects/ProjectCard.tsx
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) => {
  const { t } = useTranslation()

  return (
    <div className='group relative flex flex-col overflow-hidden rounded-lg border transition-all bg-card'>
      <div className='relative h-48 overflow-hidden bg-secondary'>
        <img
          src={image}
          alt={t('project_image_alt', { projectName: title })}
          className='object-cover transition-transform duration-300 group-hover:scale-105'
        />
      </div>
      <div className='flex flex-1 flex-col p-6'>
        <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
        <p className='mb-4 text-muted-foreground'>{description}</p>
        <div className='mb-6 flex flex-wrap gap-2'>
          {technologies.map((tech) => (
            <Badge key={tech} variant='secondary' className='rounded-full'>
              {tech}
            </Badge>
          ))}
        </div>
        <div className='mt-auto flex flex-wrap gap-3'>
          {liveUrl && (
            <Button className='rounded-full' asChild>
              <a href={liveUrl} target='_blank' rel='noopener noreferrer'>
                <ArrowSquareOutIcon className='mr-1 h-4 w-4' />
                {t('project_btn_live')}
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button variant='outline' className='rounded-full shadow-none' asChild>
              <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
                <GithubLogoIcon className='mr-1 h-4 w-4' />
                {t('project_btn_code')}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
