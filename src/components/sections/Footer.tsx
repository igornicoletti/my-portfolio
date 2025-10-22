import { DockDemo } from '@/components/shared/DockDemo'
import { useTranslation } from 'react-i18next'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className='relative px-6 py-20'>
      <div className='mx-auto max-w-screen-lg'>
        <div className='flex flex-col-reverse items-center justify-between gap-6 sm:flex-row'>
          <span className='text-muted-foreground text-sm'>
            {t('footer_copyright', { year: new Date().getFullYear() })}
          </span>
          <DockDemo />
        </div>
      </div>
    </footer>
  )
}
