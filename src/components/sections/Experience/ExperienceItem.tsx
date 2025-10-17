// src/components/sections/Experience/ExperienceItem.tsx
import { Badge } from '@/components/ui/badge'
import { CalendarBlankIcon } from '@phosphor-icons/react'

export interface ExperienceItemProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export const ExperienceItem = ({ title, company, period, description, technologies }: ExperienceItemProps) => (
  <li className='relative pl-8 not-last:pb-12 group'>
    <div className='absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:top-2' />
    <div className='absolute -left-[5px] top-2 h-3 w-3 rounded-full border-2 border-primary bg-background' />

    <div className='space-y-3'>
      <span className='text-xl font-semibold'>{company}</span>
      <div>
        <h3 className='font-medium text-muted-foreground'>{title}</h3>
        <div className='mt-1 flex items-center gap-2 text-sm'>
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
  </li>
)
