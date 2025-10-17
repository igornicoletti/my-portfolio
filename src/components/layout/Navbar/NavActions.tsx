// src/components/layout/Navbar/NavActions.tsx
import { LanguageToggle } from '@/components/shared/LanguageToggle'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { Button } from '@/components/ui/button'
import { GithubLogoIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export const NavActions = () => {
  const { t } = useTranslation()

  return (
    <div className='flex items-center gap-1'>
      <Button asChild variant='ghost' size='icon' aria-label={t('aria_github_profile')}>
        <a href='https://github.com/igornicoletti' target='_blank' rel='noopener noreferrer'>
          <GithubLogoIcon />
        </a>
      </Button>
      <LanguageToggle />
      <ThemeToggle />
    </div>
  )
}
