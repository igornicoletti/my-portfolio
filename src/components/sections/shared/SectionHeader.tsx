// src/components/sections/shared/SectionHeader.tsx
import { Badge } from '@/components/ui/badge'
import type { ReactNode } from 'react'

interface SectionHeaderProps {
  badge: string
  title: ReactNode
  subtitle: string
}

export const SectionHeader = ({ badge, title, subtitle }: SectionHeaderProps) => (
  <div className='mb-12 text-center'>
    <Badge variant='secondary' className='mb-4'>
      {badge}
    </Badge>
    <h2 className='text-4xl font-bold tracking-tight sm:text-5xl'>{title}</h2>
    <p className='mt-2 text-lg text-muted-foreground sm:mt-4'>{subtitle}</p>
  </div>
)
