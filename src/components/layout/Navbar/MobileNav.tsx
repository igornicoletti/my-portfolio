// src/components/layout/Navbar/MobileNav.tsx
import { Logo, type LogoProps } from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ListIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { NavActions } from './NavActions'

interface NavItem {
  title: string
  url: string
}

interface MobileNavProps {
  logo: LogoProps
  menu: NavItem[]
}

export const MobileNav = ({ logo, menu }: MobileNavProps) => {
  const { t } = useTranslation()

  return (
    <nav className='flex items-center justify-between lg:hidden'>
      <Logo {...logo} />
      <div className='flex items-center gap-2'>
        <NavActions />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' aria-label={t('aria_open_menu')}>
              <ListIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side='right'>
            <SheetHeader>
              <SheetTitle>
                <Logo {...logo} />
              </SheetTitle>
            </SheetHeader>
            <div className='flex flex-col gap-4 p-4'>
              {menu.map((item) => (
                <a key={item.title} href={item.url} className='text-md font-medium'>
                  {item.title}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
