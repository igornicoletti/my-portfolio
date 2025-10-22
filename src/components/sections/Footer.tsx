import { DockDemo } from '@/components/shared/DockDemo'
import { Separator } from '@/components/ui/separator'
import { SpiralIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

const FOOTER_LINKS = [
  { key: 'nav_home', url: '#home' },
  { key: 'nav_about', url: '#about' },
  { key: 'nav_experience', url: '#experience' },
  { key: 'nav_projects', url: '#projects' },
  { key: 'nav_contact', url: '#contact' },
]

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='mt-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-start'>
          <a href='#home' className='flex items-center gap-2'>
            <SpiralIcon weight='fill' className='size-8' />
            <span className='text-lg font-semibold tracking-tight'>2Ti</span>
          </a>
          <ul className='mt-6 flex flex-wrap items-center gap-4'>
            {FOOTER_LINKS.map(({ key, url }) => (
              <li key={key}>
                <a href={url} className='text-muted-foreground hover:text-foreground'>
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Separator className='hidden mt-8 sm:flex' />
        <div className='flex flex-col-reverse items-center justify-between gap-x-2 gap-y-4 px-6 py-6 sm:flex-row'>
          <span className='text-sm text-muted-foreground'>
            {t('footer_copyright', { year: new Date().getFullYear() })}
          </span>
          <DockDemo />
        </div>
      </div>
    </footer>
  )
}
