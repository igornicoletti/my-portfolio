import { ScrollVelocityContainer, ScrollVelocityRow } from '@/components/ui/scroll-based-velocity'

interface TechItem {
  name: string
  icon: string
}

const techItemsSup: TechItem[] = [
  // Core Web Development
  { name: 'HTML5', icon: '/icons/HTML5.svg' },
  { name: 'CSS3', icon: '/icons/CSS3.svg' },
  { name: 'JavaScript', icon: '/icons/JavaScript.svg' },
  // Frameworks/Libraries
  { name: 'AngularJS', icon: '/icons/AngularJS.svg' },
  { name: 'React', icon: '/icons/React.svg' },
  { name: 'Redux', icon: '/icons/Redux.svg' },
  { name: 'TailwindCSS', icon: '/icons/TailwindCSS.svg' },
  { name: 'Bootstrap', icon: '/icons/Bootstrap.svg' },
  { name: 'Ionic', icon: '/icons/Ionic.svg' },
  // Design/UI Tools
  { name: 'Figma', icon: '/icons/Figma.svg' },
  { name: 'AdobePhotoshop', icon: '/icons/AdobePhotoshop.svg' },
]

const techItemsSub: TechItem[] = [
  // Runtime/Backend
  { name: 'Node.js', icon: '/icons/Node.js.svg' },
  { name: 'TypeScript', icon: '/icons/TypeScript.svg' },
  { name: 'Firebase', icon: '/icons/Firebase.svg' },
  // DevOps/Version Control
  { name: 'Git', icon: '/icons/Git.svg' },
  { name: 'BitBucket', icon: '/icons/BitBucket.svg' },
  { name: 'GitLab', icon: '/icons/GitLab.svg' },
  // Testing/Bundling/Build Tools
  { name: 'Jest', icon: '/icons/Jest.svg' },
  { name: 'Webpack', icon: '/icons/Webpack.svg' },
  { name: 'Vite', icon: '/icons/Vite.js.svg' },
  // Development Tools
  { name: 'Postman', icon: '/icons/Postman.svg' },
  { name: 'Insomnia', icon: '/icons/Insomnia.svg' },
  { name: 'jQuery', icon: '/icons/jQuery.svg' },
]

export const Technology = () => (
  <section className='relative flex w-full flex-col items-center justify-center overflow-hidden py-10'>
    <ScrollVelocityContainer className='text-muted-foreground font-mono'>
      <ScrollVelocityRow direction={1}>
        {techItemsSup.map((tech) => (
          <div key={tech.name} className='flex items-center justify-center gap-2 px-6 py-4'>
            <img className='h-6 shrink-0' src={tech.icon} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </ScrollVelocityRow>
      <ScrollVelocityRow direction={-1}>
        {techItemsSub.map((tech) => (
          <div key={tech.name} className='flex items-center justify-center gap-2 px-6 py-4'>
            <img className='h-6 shrink-0' src={tech.icon} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </ScrollVelocityRow>
    </ScrollVelocityContainer>
    <div className='from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r'></div>
    <div className='from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l'></div>
  </section>
)
