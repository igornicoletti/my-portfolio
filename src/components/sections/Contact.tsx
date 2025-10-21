import { Badge } from '@/components/ui/badge'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const { t } = useTranslation()

  return (
    <section id='contact' className='relative px-6 py-20'>
      <div className='mx-auto max-w-screen-md'>

        <div className='mb-12 flex flex-col items-center gap-6 text-center'>
          <Badge variant='secondary'>{t('contact_section_title')}</Badge>
          <h2 className='text-4xl font-extralight text-balance sm:text-5xl'>{t('contact_main_title')}</h2>
          <p className='text-muted-foreground text-base text-balance md:text-lg'>{t('contact_subtitle')}</p>
        </div>

      </div>
    </section>
  )
}
