import { Language } from '@/components/common/Language'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { GithubLogoIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

interface NavItem {
  title: string
  url: string
}

const footerLinkKeys = [
  { key: 'nav_about', url: '#about' },
  { key: 'nav_experience', url: '#experience' },
  { key: 'nav_projects', url: '#projects' },
  { key: 'nav_contact', url: '#contact' },
]

export const Footer = () => {
  const { t } = useTranslation()

  const translatedLinks: NavItem[] = footerLinkKeys.map(item => ({
    title: t(item.key),
    url: item.url,
  }))

  return (
    <footer className='mt-20'>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='py-12 flex flex-col justify-start items-center'>
          <ul className='mt-6 flex items-center gap-4 flex-wrap'>
            {translatedLinks.map(({ title, url }) => (
              <li key={title}>
                <a href={url} className='text-muted-foreground hover:text-foreground'>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className='py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-4 px-6'>
          <span className='text-sm text-muted-foreground'>
            {t('footer_copyright', { year: new Date().getFullYear() })}
          </span>
          <div className='flex items-center gap-2 text-muted-foreground'>
            <Button asChild variant='ghost' size='icon' aria-label={t('aria_github_profile')}>
              <a href='https://github.com/igornicoletti' target='_blank' rel='noopener noreferrer'>
                <GithubLogoIcon weight='fill' />
              </a>
            </Button>
            <Language weight='fill' />
          </div>
        </div>
      </div>
    </footer>
  )
}
