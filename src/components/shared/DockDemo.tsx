import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Button } from '@/components/ui/button'
import { Dock, DockIcon } from '@/components/ui/dock'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
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
      <TooltipProvider>
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
          {showExtraIcons && (
            <>
              <Separator orientation='vertical' className='data-[orientation=vertical]:h-6' />
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button onClick={handleLanguageChange} variant='ghost' size='icon'>
                      <GlobeSimpleIcon />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{t('dock_language')}</TooltipContent>
                </Tooltip>
              </DockIcon>
              <DockIcon>
                <AnimatedThemeToggler />
              </DockIcon>
            </>
          )}
        </Dock>
      </TooltipProvider>
    </div>
  )
}
