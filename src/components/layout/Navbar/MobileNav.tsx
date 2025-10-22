import { DockDemo } from '@/components/shared/DockDemo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ListIcon, SpiralIcon } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

interface NavItem {
  title: string
  url: string
}

interface MobileNavProps {
  menu: NavItem[]
}

export const MobileNav = ({ menu }: MobileNavProps) => {
  const { t } = useTranslation()

  return (
    <nav className='flex items-center justify-between lg:hidden'>
      <a href='#home' className='flex items-center gap-2'>
        <SpiralIcon weight='fill' className='size-8' />
        <span className='text-lg font-semibold tracking-tight'>2Ti</span>
      </a>
      <div className='flex items-center gap-2'>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon' aria-label={t('aria_open_menu')}>
              <ListIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='w-full max-w-xs'>
            <SheetHeader>
              <SheetTitle>
                <a href='#home' className='flex items-center gap-2'>
                  <SpiralIcon weight='fill' className='size-8' />
                  <span className='text-lg font-semibold tracking-tight'>2Ti</span>
                </a>
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className='flex flex-col gap-4 px-6'>
              {menu.map((item) => (
                <a key={item.title} href={item.url} className='text-md font-medium'>
                  {item.title}
                </a>
              ))}
            </div>
            <SheetFooter>
              <DockDemo />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
