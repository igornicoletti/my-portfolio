// src/components/shared/LanguageToggle.tsx
import { Button } from '@/components/ui/button'
import { GlobeIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export const LanguageToggle = ({ ...props }) => {
  const { i18n, t } = useTranslation()

  const handleLanguageChange = () => {
    const currentLang = i18n.language.substring(0, 2)
    const nextLang = currentLang === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(nextLang)
  }

  return (
    <Button
      onClick={handleLanguageChange}
      variant='ghost'
      size='icon'
      aria-label={t('aria_toggle_language')}>
      <GlobeIcon {...props} />
    </Button>
  )
}
