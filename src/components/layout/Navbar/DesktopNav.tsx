import { DockDemo } from '@/components/shared/DockDemo'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { SpiralIcon } from '@phosphor-icons/react'

interface NavItem {
  title: string
  url: string
}

interface DesktopNavProps {
  menu: NavItem[]
}

export const DesktopNav = ({ menu }: DesktopNavProps) => {
  const handleLinkClick = (url: string) => {
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
    <div className='hidden items-center justify-between lg:flex'>
      <div className='flex items-center gap-6'>
        <Button variant='ghost' onClick={() => handleLinkClick('#home')}>
          <SpiralIcon weight='fill' className='size-8' />
          <span className='text-xl font-bold'>2Ti</span>
        </Button>
        <NavigationMenu>
          <NavigationMenuList>
            {menu.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Button key={item.title} variant='ghost' onClick={() => handleLinkClick(item.url)}>
                  {item.title}
                </Button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <DockDemo />
    </div>
  )
}
