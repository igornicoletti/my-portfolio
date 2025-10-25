import { DockDemo } from '@/components/shared/DockDemo'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { ListIcon, SpiralIcon } from '@phosphor-icons/react'
import { useState } from 'react'

interface NavItem {
  title: string
  url: string
}

interface MobileNavProps {
  menu: NavItem[]
}

export const MobileNav = ({ menu }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (url: string) => {
    setIsOpen(false)

    const targetId = url.substring(1)
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }, 300)
    }
  }

  return (
    <div className='flex items-center justify-between lg:hidden'>
      <Button variant='ghost' onClick={() => handleLinkClick('#home')}>
        <SpiralIcon weight='fill' className='size-8' />
        <span className='text-xl font-bold'>2Ti</span>
      </Button>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant='ghost' size='icon'>
            <ListIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <Button variant='ghost' onClick={() => handleLinkClick('#home')}>
                <SpiralIcon weight='fill' className='size-8' />
                <span className='text-xl font-bold'>2Ti</span>
              </Button>
            </DrawerTitle>
            <DrawerDescription />
          </DrawerHeader>
          <div className='flex flex-col'>
            {menu.map((item) => (
              <Button key={item.title} variant='ghost' onClick={() => handleLinkClick(item.url)}>
                {item.title}
              </Button>
            ))}
          </div>
          <DrawerFooter>
            <DockDemo />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
