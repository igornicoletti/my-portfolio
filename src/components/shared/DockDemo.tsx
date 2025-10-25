import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Button } from '@/components/ui/button'
import { Dock, DockIcon } from '@/components/ui/dock'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { GithubLogoIcon, GlobeSimpleIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export const DockDemo = () => {
  const { i18n, t } = useTranslation()

  const handleLanguageChange = () => {
    const currentLang = i18n.language.substring(0, 2)
    const nextLang = currentLang === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(nextLang)
  }

  return (
    <div className='relative'>
      <Dock>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant='ghost' size='icon'>
                <a href='https://linkedin.com/in/igornicoletti' target='_blank' rel='noopener noreferrer'>
                  <LinkedinLogoIcon />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t('dock_linkedin')}</TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button asChild variant='ghost' size='icon'>
                <a href='https://github.com/igornicoletti' target='_blank' rel='noopener noreferrer'>
                  <GithubLogoIcon />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>{t('dock_github')}</TooltipContent>
          </Tooltip>
        </DockIcon>
        <Separator orientation='vertical' className='data-[orientation=vertical]:h-6' />
        <DockIcon>
          <Button onClick={handleLanguageChange} variant='ghost' size='icon'>
            <GlobeSimpleIcon />
          </Button>
        </DockIcon>
        <DockIcon>
          <AnimatedThemeToggler />
        </DockIcon>
      </Dock>
    </div>
  )
}
