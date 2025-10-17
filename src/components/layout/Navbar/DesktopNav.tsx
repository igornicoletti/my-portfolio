// src/components/layout/Navbar/DesktopNav.tsx
import { Logo, type LogoProps } from '@/components/shared/Logo'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { NavActions } from './NavActions'

interface NavItem {
  title: string
  url: string
}

interface DesktopNavProps {
  logo: LogoProps
  menu: NavItem[]
}

export const DesktopNav = ({ logo, menu }: DesktopNavProps) => (
  <nav className='hidden justify-between lg:flex'>
    <div className='flex items-center gap-6'>
      <Logo {...logo} />
      <NavigationMenu>
        <NavigationMenuList className='gap-1'>
          {menu.map((item) => (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink href={item.url} className='bg-background hover:bg-muted hover:text-accent-foreground group inline-flex w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors'>
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <NavActions />
  </nav>
)
