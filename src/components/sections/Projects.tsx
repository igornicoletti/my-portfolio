import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowSquareOutIcon, GithubLogoIcon } from '@phosphor-icons/react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) => (
  <div className='group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50'>
    <div className='relative h-64 overflow-hidden bg-primary'>
      <img src={image} alt={title} className='object-cover transition-transform duration-300 group-hover:scale-105' />
    </div>
    <div className='flex-1 flex flex-col p-6'>
      <h3 className='text-xl font-semibold mb-2'>{title}</h3>
      <p className='text-muted-foreground mb-4'>{description}</p>
      <div className='flex flex-wrap gap-2 mb-6'>
        {technologies.map((tech) => (
          <Badge key={tech} variant='secondary' className='rounded-full'>
            {tech}
          </Badge>
        ))}
      </div>
      <div className='flex gap-3 mt-auto'>
        {liveUrl && (
          <Button variant='default' className='rounded-full' asChild>
            <a href={liveUrl} target='_blank' rel='noopener noreferrer'>
              <ArrowSquareOutIcon className='mr-1 h-4 w-4' />
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button variant='outline' className='rounded-full shadow-none' asChild>
            <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
              <GithubLogoIcon className='mr-1 h-4 w-4' />
              View Code
            </a>
          </Button>
        )}
      </div>
    </div>
  </div>
)

export const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/username/ecommerce',
    },
    {
      title: 'AI Task Manager',
      description:
        'Smart task management app that uses AI to categorize, prioritize, and suggest optimal task scheduling.',
      image: '/placeholder.svg',
      technologies: ['React', 'Python', 'TensorFlow', 'FastAPI', 'MongoDB'],
      liveUrl: 'https://ai-taskmanager.com',
      githubUrl: 'https://github.com/username/ai-taskmanager',
    },
  ]

  return (
    <section id='projects' className='relative py-20 px-6'>
      <div className='max-w-screen-md mx-auto'>
        <div className='text-center mb-12'>
          <Badge variant='secondary' className='mb-4'>
            Projects
          </Badge>
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
            Featured Work
          </h2>
          <p className='text-muted-foreground mt-2 sm:mt-4 text-lg'>
            Showcasing some of my best projects and technical achievements
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </div>
      </div>
    </section>
  )
}
