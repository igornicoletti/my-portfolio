// src/components/layout/Footer.tsx
import { LanguageToggle } from '@/components/shared/LanguageToggle'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { GithubLogoIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

const FOOTER_LINKS = [
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
        <div className='flex flex-col items-center justify-start py-12'>
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
        <Separator />
        <div className='flex flex-col-reverse items-center justify-between gap-x-2 gap-y-4 px-6 py-6 sm:flex-row'>
          <span className='text-sm text-muted-foreground'>
            {t('footer_copyright', { year: new Date().getFullYear() })}
          </span>
          <div className='flex items-center gap-2 text-muted-foreground'>
            <Button asChild variant='ghost' size='icon' aria-label={t('aria_github_profile')}>
              <a href='https://github.com/igornicoletti' target='_blank' rel='noopener noreferrer'>
                <GithubLogoIcon weight='fill' />
              </a>
            </Button>
            <LanguageToggle weight='fill' />
          </div>
        </div>
      </div>
    </footer>
  )
}
