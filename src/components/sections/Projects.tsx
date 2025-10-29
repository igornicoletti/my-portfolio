import { Badge } from '@/components/ui/badge'
import { BlurFade } from '@/components/ui/blur-fade'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { MagicCard } from '@/components/ui/magic-card'
import { ExternalLinkIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'

interface ProjectsProps {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const BASE_DELAY = 0.25
const STAGGER_DELAY = 0.05

export const Projects = () => {
  const { t } = useTranslation()

  const projects = t('project_items', {
    returnObjects: true,
  }) as ProjectsProps[]

  return (
    <section id='projects' className='relative'>
      <div className='mx-auto max-w-screen-lg px-4 py-20'>
        <div className='mb-12 flex flex-col items-center gap-4 text-center'>
          <BlurFade delay={BASE_DELAY + 0 * STAGGER_DELAY} inView>
            <b className="text-muted-foreground text-sm font-semibold uppercase">
              {t('project_badge')}
            </b>
          </BlurFade>
          <BlurFade delay={BASE_DELAY + 1 * STAGGER_DELAY} inView>
            <h2 className='text-3xl text-balance font-medium sm:text-4xl'>
              {t('project_title')}
            </h2>
          </BlurFade>
          <BlurFade delay={BASE_DELAY + 2 * STAGGER_DELAY} inView>
            <p className='text-lg text-pretty text-muted-foreground sm:text-xl'>
              {t('project_subtitle')}
            </p>
          </BlurFade>
        </div>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, idx) => (
            <BlurFade key={idx} delay={BASE_DELAY + idx * STAGGER_DELAY} inView>
              <Card className='w-full border-none p-0 shadow-none bg-transparent'>
                <MagicCard gradientFrom='#1e69dc' gradientTo='#7033ff'>
                  <CardHeader className='p-0.5'>
                    <div className='relative w-full overflow-hidden rounded-t-lg'>
                      <img src={project.image} alt={t('project_image')} className='object-cover w-full h-full transition-transform duration-300 hover:scale-105' />
                    </div>
                  </CardHeader>
                  <CardContent className='flex flex-col gap-2 px-4 py-2'>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardContent>
                  <div className='flex flex-wrap gap-2 px-4 py-2'>
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant='secondary'>{tech}</Badge>
                    ))}
                  </div>
                  <CardFooter className='grid grid-cols-2 gap-2 p-4'>
                    {project.githubUrl && (
                      <Button asChild variant='default' size='sm' className='rounded-full'>
                        <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                          <GitHubLogoIcon />
                          {t('project_code')}
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button asChild variant='outline' size='sm' className='rounded-full'>
                        <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                          <ExternalLinkIcon />
                          {t('project_demo')}
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </MagicCard>
              </Card>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}
