import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='relative p-6 pt-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row'>
          <InteractiveHoverButton className='text-sm'>
            <a href="mailto:igor93nicoletti@gmail.com" target="_blank" rel="noopener noreferrer">
              {t('footer_contact')}
            </a>
          </InteractiveHoverButton>
          <span className='text-muted-foreground text-sm'>
            {t('footer_copyright', { year: new Date().getFullYear() })}
          </span>
        </div>
      </div>
    </footer>
  )
}
