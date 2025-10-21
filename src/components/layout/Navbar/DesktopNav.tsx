// src/components/layout/Navbar/DesktopNav.tsx
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { GithubLogoIcon, SpiralIcon } from '@phosphor-icons/react'

interface NavItem {
  title: string
  url: string
}

interface DesktopNavProps {
  menu: NavItem[]
}

export const DesktopNav = ({ menu }: DesktopNavProps) => (
  <nav className='hidden justify-between lg:flex'>
    <div className='flex items-center gap-6'>
      <a href='#home' className='flex items-center gap-2'>
        <SpiralIcon weight='fill' className='size-8' />
        <span className='text-lg font-semibold tracking-tight'>2Ti</span>
      </a>
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
    <div className='flex items-center gap-2'>
      <Button asChild variant='ghost' size='icon'>
        <a href='https://github.com/images/igornicoletti' target='_blank' rel='noopener noreferrer'>
          <GithubLogoIcon />
        </a>
      </Button>
      <AnimatedThemeToggler />
    </div>
  </nav>
)
