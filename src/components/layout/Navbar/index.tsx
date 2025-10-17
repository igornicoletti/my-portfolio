// src/components/layout/Navbar/index.tsx
import type { LogoProps } from '@/components/shared/Logo'
import { useTranslation } from 'react-i18next'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'

const defaultLogo: LogoProps = {
  url: '#home',
  title: '2Ti',
}

export const Navbar = () => {
  const { t } = useTranslation()

  const menuItems = [
    { title: t('nav_about'), url: '#about' },
    { title: t('nav_experience'), url: '#experience' },
    { title: t('nav_projects'), url: '#projects' },
    { title: t('nav_contact'), url: '#contact' },
  ]

  return (
    <header className='sticky top-0 z-50 border-b bg-background/80 p-4 backdrop-blur-sm'>
      <div className='container mx-auto'>
        <DesktopNav logo={defaultLogo} menu={menuItems} />
        <MobileNav logo={defaultLogo} menu={menuItems} />
      </div>
    </header>
  )
}
