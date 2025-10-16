import { Separator } from '@/components/ui/separator'
import { GithubLogoIcon } from '@phosphor-icons/react'

const footerLinks = [
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Experience',
    href: '#experience',
  },
  {
    title: 'Projects',
    href: '#projects',
  },
]

export const Footer = () => (
  <footer className='mt-20'>
    <div className='max-w-screen-md mx-auto'>
      <div className='py-12 flex flex-col justify-start items-center'>
        <ul className='mt-6 flex items-center gap-4 flex-wrap'>
          {footerLinks.map(({ title, href }) => (
            <li key={title}>
              <a href={href} className='text-muted-foreground hover:text-foreground'>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Separator />
    <div className='max-w-screen-md mx-auto'>
      <div className='py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0'>
        <span className='text-sm text-muted-foreground'>
          &copy; {new Date().getFullYear()} Igor Nicoletti. All rights reserved.
        </span>
        <div className='flex items-center gap-5 text-muted-foreground'>
          <a href='#' target='_blank'>
            <GithubLogoIcon className='h-5 w-5' />
          </a>
        </div>
      </div>
    </div>
  </footer>
)
