// src/components/sections/About/ProfileImage.tsx
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'react'
import { useTranslation } from 'react-i18next'

interface ProfileImageProps extends HTMLAttributes<HTMLDivElement> { }

export const ProfileImage = ({ className, ...props }: ProfileImageProps) => {
  const { t } = useTranslation()

  return (
    <div className={cn('relative overflow-hidden rounded-2xl bg-accent', className)} {...props}>
      <img
        src='/ChatGPT.png'
        alt={t('about_image_alt')}
        className='h-full w-full object-cover'
      />
    </div>
  )
}
