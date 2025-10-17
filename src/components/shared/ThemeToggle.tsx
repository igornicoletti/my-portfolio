// src/components/shared/ThemeToggle.tsx
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'
import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export const ThemeToggle = ({ ...props }) => {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <Button
      onClick={toggleTheme}
      variant='ghost'
      size='icon'
      aria-label={t('aria_toggle_theme')}>
      {theme === 'dark' ? <SunIcon {...props} /> : <MoonIcon {...props} />}
    </Button>
  )
}
