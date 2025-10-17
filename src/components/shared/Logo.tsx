// src/components/shared/Logo.tsx
import { SpiralIcon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'

export interface LogoProps {
  url?: string
  title?: string
  icon?: ReactNode
}

const defaultLogo: LogoProps = {
  url: '#home',
  icon: <SpiralIcon weight='fill' className='size-8' />,
  title: '2Ti',
}

export const Logo = ({ url = defaultLogo.url, title = defaultLogo.title, icon = defaultLogo.icon }: LogoProps) => (
  <a href={url} className='flex items-center gap-2'>
    {icon && <div className='flex items-center justify-center'>{icon}</div>}
    {title && <span className='text-lg font-bold tracking-tight'>{title}</span>}
  </a>
)
