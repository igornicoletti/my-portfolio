import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { MagicCard } from '@/components/ui/magic-card'
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

  const projects = t("projects", {
    returnObjects: true,
  }) as ProjectsProps[]

  return (
    <section id="projects" className="relative px-6 py-20">
      <div className='mx-auto max-w-screen-lg'>

        <div className='mb-12 flex flex-col items-center gap-6 text-center'>
          <Badge variant="secondary">{t("project_section_title")}</Badge>
          <h2 className="text-4xl font-extralight text-balance sm:text-5xl">{t("project_main_title")}</h2>
          <p className="max-w-xl text-muted-foreground text-base text-balance md:text-lg">{t("project_subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Card key={idx} className="w-full border-none p-0 shadow-none bg-transparent">
              <MagicCard gradientFrom='#1e69dc' gradientTo='#7033ff'>
                <CardHeader className="p-0.5">
                  <div className="relative w-full overflow-hidden rounded-t-lg">
                    <img src={project.image} alt={t("project_image_alt")} className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />
                  </div>
                </CardHeader>

                <CardContent className="p-4">
                  <CardTitle className="mb-2 text-xl font-semibold">{project.title}</CardTitle>
                  <CardDescription className="mb-4 line-clamp-3">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-4 grid sm:grid-cols-2 gap-2">
                  {project.githubUrl && (
                    <Button asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <GithubLogoIcon />
                        {t("project_btn_code")}
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild variant="outline">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ArrowSquareOutIcon />
                        {t("project_btn_live")}
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </MagicCard>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
