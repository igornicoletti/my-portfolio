import { Badge } from '@/components/ui/badge'
import { CalendarBlankIcon } from '@phosphor-icons/react'

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
        <h3 className='text-muted-foreground font-medium'>{title}</h3>
      </div>
      <div>
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
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Hublab',
      period: 'Oct 2019 - Feb 2023',
      description:
        'Led the front-end development of a chatbot ecosystem, creating an intuitive UI and a dynamic admin panel that allowed the operations team to manage conversation flows without new development, reducing business response time.',
      technologies: ['React', 'TypeScript', 'State Management', 'API Integration', 'Responsive Design'],
    },
    {
      title: 'Frontend Developer',
      company: 'Olivas Digital',
      period: 'Mar 2021 - Jan 2022',
      description:
        'Developed high-fidelity responsive interfaces and accelerated page load performance through in-depth code optimization and lazy loading, positively impacting Core Web Vitals and implementing advanced technical SEO practices.',
      technologies: ['Next.js', 'TypeScript', 'Performance Optimization', 'Core Web Vitals', 'SEO'],
    },
    {
      title: 'Frontend Developer',
      company: 'Trinto | Digital Partners',
      period: 'Nov 2020 - Mar 2021',
      description:
        'Strengthened front-end security by implementing protections against XSS and CSRF vulnerabilities. Also eliminated critical performance bottlenecks and resolved complex caching issues to ensure data consistency.',
      technologies: ['React', 'Security', 'Form Validation', 'Caching', 'Performance Tuning'],
    },
    {
      title: 'Frontend Developer',
      company: '2morrow Sports',
      period: 'Jan 2020 - Oct 2020',
      description:
        'Architected and developed critical user-facing features, including login/registration, profile management, and personalized user experiences. Built a comprehensive financial history dashboard to enhance member transparency.',
      technologies: ['React', 'Authentication', 'UI/UX', 'Component Libraries', 'User Onboarding'],
    },
    {
      title: 'Frontend Developer',
      company: 'Velani Contabilidade',
      period: 'Jun 2019 - Sep 2019',
      description:
        'Designed and led the development of an intuitive financial system interface, transforming complex data into actionable insights using charts and visualizations. Acted as the focal point for third-party API integrations.',
      technologies: ['React', 'Data Visualization', 'D3.js / Chart.js', 'API Integration', 'Financial Tech'],
    },
  ]

  return (
    <section id='experience' className='relative py-20 px-6'>
      <div className='max-w-screen-md mx-auto'>
        <div className='text-center mb-12'>
          <Badge variant='secondary' className='mb-4'>
            Experience
          </Badge>
          <h2 className='text-4xl sm:text-5xl font-bold tracking-tight'>
            Professional Journey
          </h2>
          <p className='text-muted-foreground mt-2 sm:mt-4 text-lg'>
            A timeline of my professional growth and key achievements
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
