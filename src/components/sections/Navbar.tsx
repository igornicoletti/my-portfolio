import { useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { DockDemo } from '@/components/shared/DockDemo'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'

import { ListIcon, SpiralIcon } from '@phosphor-icons/react'

interface NavItem {
  title: string
  id: string
}

const useSmoothScroll = (onBeforeScroll?: () => void) => {
  const handleLinkClick = useCallback((id: string) => {
    if (onBeforeScroll) {
      onBeforeScroll()
    }

    const targetId = id.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }, 300)
    }
  }, [onBeforeScroll])

  return handleLinkClick
}

export const Navbar = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const menuItems: NavItem[] = [
    { title: t('nav_home'), id: '#home' },
    { title: t('nav_about'), id: '#about' },
    { title: t('nav_experience'), id: '#experience' },
    { title: t('nav_projects'), id: '#projects' },
  ]

  const handleLinkClick = useSmoothScroll()

  const handleDrawerLinkClick = (id: string) => {
    setIsOpen(false)
    handleLinkClick(id)
  }

  return (
    <header className='sticky top-0 z-50 h-16 p-4 border-b bg-background/80 backdrop-blur-sm'>
      <div className='container mx-auto'>
        <div className='flex items-center gap-2 lg:gap-6'>
          <Button variant='none' onClick={() => handleLinkClick('#home')}>
            <SpiralIcon weight='fill' className='size-8' />
            <span className='text-xl font-bold'>2Ti</span>
          </Button>
          <div className='hidden lg:flex'>
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.id}>
                    <Button variant='ghost' onClick={() => handleLinkClick(item.id)}>
                      {item.title}
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <DockDemo />
          <div className='lg:hidden'>
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button variant='ghost' size='icon'>
                  <ListIcon />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>
                    <Button variant='ghost' onClick={() => handleDrawerLinkClick('#home')}>
                      <SpiralIcon weight='fill' className='size-8' />
                      <span className='text-xl font-bold'>2Ti</span>
                    </Button>
                  </DrawerTitle>
                  <DrawerDescription />
                </DrawerHeader>
                <div className='flex flex-col'>
                  {menuItems.map((item) => (
                    <Button key={item.id} variant='ghost' onClick={() => handleDrawerLinkClick(item.id)}>
                      {item.title}
                    </Button>
                  ))}
                </div>
                <DrawerFooter className='mx-auto'>
                  <DockDemo isDrawer />
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  )
}
