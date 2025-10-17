import { Button } from '@/components/ui/button'
import { GlobeIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export const Language = ({ ...props }) => {
  const { i18n, t } = useTranslation()

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
  ]

  const currentLang = i18n.language.substring(0, 2)
  const nextLang = languages.find(lang => lang.code !== currentLang)

  if (!nextLang) return null

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <Button
      onClick={() => changeLanguage(nextLang.code)}
      variant="ghost"
      size="icon"
      aria-label={t('aria_toggle_language')}>
      <GlobeIcon {...props} />
    </Button>
  )
}
