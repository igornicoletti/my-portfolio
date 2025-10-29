import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Button } from '@/components/ui/button'
import { Dock, DockIcon } from '@/components/ui/dock'
import { Separator } from '@/components/ui/separator'
import { useBreakpoint } from '@/hooks/useBreakpoint'
import { GithubLogoIcon, GlobeSimpleIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

interface Props {
  isDrawer?: boolean
}

export const DockDemo = ({ isDrawer }: Props) => {
  const { i18n, t } = useTranslation()
  const isMobile = useBreakpoint('(max-width: 64rem)')

  const showExtraIcons = !isMobile || (isMobile && isDrawer)

  const handleLanguageChange = () => {
    const currentLang = i18n.language.substring(0, 2)
    const nextLang = currentLang === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(nextLang)
  }

  return (
    <div className='relative ml-auto'>
      <Dock>
        <DockIcon>
          <Button asChild variant='ghost' size='icon'>
            <a href='https://linkedin.com/in/igornicoletti' aria-label={t('dock_linkedin')} target='_blank' rel='noopener noreferrer'>
              <LinkedinLogoIcon />
            </a>
          </Button>
        </DockIcon>
        <DockIcon>
          <Button asChild variant='ghost' size='icon'>
            <a href='https://github.com/igornicoletti' aria-label={t('dock_github')} target='_blank' rel='noopener noreferrer'>
              <GithubLogoIcon />
            </a>
          </Button>
        </DockIcon>
        <Separator orientation='vertical' className='data-[orientation=vertical]:h-6' />
        {showExtraIcons && (
          <DockIcon>
            <Button onClick={handleLanguageChange} aria-label={t('dock_language')} variant='ghost' size='icon'>
              <GlobeSimpleIcon />
            </Button>
          </DockIcon>
        )}
        {showExtraIcons && (
          <DockIcon>
            <AnimatedThemeToggler aria-label={t('dock_theme')} />
          </DockIcon>
        )}
      </Dock>
    </div>
  )
}
