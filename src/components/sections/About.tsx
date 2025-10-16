import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { DownloadSimpleIcon, GithubLogoIcon } from '@phosphor-icons/react'
import type { HTMLAttributes } from 'react'

const ProfileImage = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-10 w-48 h-48 md:w-64 md:h-full', className)} {...props}>
    <div className='relative w-full h-full rounded-2xl overflow-hidden bg-accent'>
      <img src='/ChatGPT.png' alt='Profile picture' className='object-cover w-full h-full' />
    </div>
  </div>
)

export const About = () => (
  <section id='about' className='relative py-20 px-6'>
    <div className='max-w-screen-md mx-auto'>
      <div className='flex flex-col md:flex-row-reverse gap-16'>
        <ProfileImage className='hidden md:block' />
        <div className='flex-1 md:text-left'>
          <Badge variant='secondary' className='mb-4'>
            About Me
          </Badge>
          <ProfileImage className='mt-3 mb-8 block md:hidden' />
          <h2 className='text-4xl font-bold mb-4 tracking-tight'>
            My Approach to Building Quality Software
          </h2>
          <p className='text-muted-foreground mb-4 text-justify'>
            With over 5 years of experience, my development philosophy centers on building efficient and scalable products with the right tools. I architect applications with a clear separation of responsibilities, creating a clean and maintainable codebase.
          </p>
          <p className='text-muted-foreground mb-6 text-justify'>
            I ensure data integrity with robust forms using React Hook Form and Zod, manage server state efficiently with React Query, and build accessible UIs with Radix and Tailwind CSS. This structured approach allows me to deliver secure, consistent, and high-quality solutions.
          </p>
          <div className='flex flex-wrap gap-4 justify-start'>
            <Button className='rounded-full' asChild>
              <a href='YOUR_GITHUB_LINK' target='_blank' rel='noopener noreferrer'>
                <GithubLogoIcon />
                View Github
              </a>
            </Button>
            <Button variant='outline' className='rounded-full' asChild>
              <a href='/path-to-your-cv.pdf' download>
                <DownloadSimpleIcon />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
)
