import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { useTheme } from '@/hooks/use-theme'
import { GithubLogoIcon, ListIcon, MoonIcon, SpiralIcon, SunIcon } from '@phosphor-icons/react'
import type { ReactNode } from 'react'

interface NavItem {
  title: string
  url: string
}

interface LogoProps {
  url: string
  title?: string
  src?: string
  alt?: string
  icon?: ReactNode
}

interface NavbarProps {
  logo?: LogoProps
  menu?: NavItem[]
}

const defaultMenuItems: NavItem[] = [
  { title: 'About', url: '#about' },
  { title: 'Experience', url: '#experience' },
  { title: 'Projects', url: '#projects' },
  { title: 'Contact', url: '#contact' },
]

const defaultLogoIcon: LogoProps = {
  url: '#home',
  icon: <SpiralIcon weight='fill' className="size-8" />,
  title: '2Ti',
}

const Actions = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="flex items-center gap-1">
      <Button asChild variant="ghost" size="icon" aria-label="Github Profile">
        <a href='https://github.com/igornicoletti' target="_blank" rel="noopener noreferrer">
          <GithubLogoIcon />
        </a>
      </Button>
      <Button onClick={toggleTheme} variant="ghost" size="icon" aria-label="Toggle theme">
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </div>
  )
}


const Logo = ({ url, src, alt, title, icon }: LogoProps) => (
  <a href={url} className='flex items-center gap-2'>
    {icon ? (
      <div className='flex items-center justify-center'>{icon}</div>
    ) : src && (
      <img src={src} className='max-h-8 dark:invert' alt={alt} />
    )}
    {title && <span className='text-lg font-bold tracking-tight'>{title}</span>}
  </a>
)

export const Navbar = ({ logo = defaultLogoIcon, menu = defaultMenuItems, }: NavbarProps) => (
  <header className='p-4 sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b'>
    <div className='container mx-auto'>
      <DesktopNav logo={logo} menu={menu} />
      <MobileNav logo={logo} menu={menu} />
    </div>
  </header>
)

const DesktopNav = ({ logo, menu }: { logo: LogoProps; menu: NavItem[] }) => (
  <nav className='hidden justify-between lg:flex'>
    <div className='flex items-center gap-6'>
      <Logo {...logo} />
      <NavigationMenu>
        <NavigationMenuList className='gap-1'>
          {menu.map((item) => (
            <NavigationMenuItem key={item.title} >
              <NavigationMenuLink href={item.url} className='bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors'>
                {item.title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
    <Actions />
  </nav>
)

const MobileNav = ({ logo, menu }: { logo: LogoProps; menu: NavItem[] }) => (
  <div className='block lg:hidden'>
    <div className='flex items-center justify-between'>
      <Logo {...logo} />
      <div className='flex items-center gap-2'>
        <Actions />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='ghost' size='icon'>
              <ListIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side='right' className='overflow-y-auto w-full'>
            <SheetHeader>
              <SheetTitle><Logo {...logo} /></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <div className='flex flex-col gap-4 p-4'>
              {menu.map((item) => (
                <a key={item.title} href={item.url} className='text-md font-semibold'>
                  {item.title}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </div>
)
