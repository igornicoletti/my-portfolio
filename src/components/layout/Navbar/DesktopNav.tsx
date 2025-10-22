import { DockDemo } from '@/components/shared/DockDemo'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { SpiralIcon } from '@phosphor-icons/react'

interface NavItem {
  title: string
  url: string
}

interface DesktopNavProps {
  menu: NavItem[]
}

export const DesktopNav = ({ menu }: DesktopNavProps) => (
  <nav className='hidden lg:flex items-center justify-between'>
    <div className='flex items-center gap-6'>
      <a href='#home' className='flex items-center gap-2'>
        <SpiralIcon weight='fill' className='size-8' />
        <span className='text-xl font-semibold tracking-tighter text-balance sm:text-2xl'>2Ti</span>
      </a>
      <NavigationMenu>
        <NavigationMenuList>
          {menu.map((item) => (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink href={item.url} className='px-4 py-2 font-medium transition-colors'>
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <DockDemo />
  </nav>
)
