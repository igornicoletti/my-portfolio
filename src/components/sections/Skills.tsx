import { AnimatedBeamMultipleOutputDemo } from '@/components/shared/AnimatedBeamMultipleOutputDemo'
import { AnimatedListDemo } from '@/components/shared/AnimatedListDemo'
import { Badge } from '@/components/ui/badge'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { BlurFade } from '@/components/ui/blur-fade'
import { Marquee } from '@/components/ui/marquee'
import { cn } from '@/lib/utils'
import {
  Component1Icon,
  GearIcon,
  Pencil2Icon,
  StackIcon
} from '@radix-ui/react-icons'
import { useTranslation } from 'react-i18next'

// Constantes de animação
const BASE_DELAY = 0.25
const STAGGER_DELAY = 0.05

/*
1. Construa com SDKs para frameworks modernos
Manter a experiência do usuário em primeiro plano, fornecendo SDKs úteis para a maioria das estruturas modernas na web e em dispositivos móveis.
2. Funções e permissões personalizadas
Primitivos poderosos para personalizar totalmente a história de autorização do seu aplicativo.
3.Componentes da interface do usuário da organização
Os componentes de interface do usuário do Clerk adicionam simplicidade pronta para uso a tarefas complexas de gerenciamento da organização.
4. UIs perfeitas em pixels, incorporadas em minutos
*/
const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
]

const features = [
  {
    Icon: Component1Icon,
    name: 'Desenvolvimento Frontend',
    description: 'Criação de interfaces de usuário interativas, responsivas e performáticas com React, Next.js e TypeScript.',
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-2 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]">
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}>
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: StackIcon,
    name: 'Backend e APIs',
    description: 'Desenvolvimento de APIs RESTful robustas e gerenciamento de bancos de dados com Node.js, Express e PostgreSQL.',
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute top-0 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
  {
    Icon: GearIcon,
    name: 'Ferramentas e DevOps',
    description: 'Meu fluxo de trabalho inclui Git, Docker, Vercel, e CI/CD para automação e entrega contínua.',
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "Learn more",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute top-2 right-2 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105" />
    ),
  },
  {
    Icon: Pencil2Icon,
    name: 'Princípios de UI/UX',
    description: 'Foco em design acessível, intuitivo e centrado no usuário, prototipando ideias no Figma.',
    className: "col-span-3 lg:col-span-1",
    href: '/',
    cta: 'Saber mais',
    background: (
      <AnimatedListDemo className="absolute top-0 right-2 h-[300px] w-full scale-75 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90" />
    ),
  },
]

export const Skills = () => {
  const { t } = useTranslation()

  return (
    <section id='skills' className='relative px-6 py-20'>
      <div className='mx-auto max-w-screen-lg'>
        <div className='mb-12 flex flex-col items-center gap-4 text-center'>
          <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 0} inView>
            <Badge variant='secondary'>{t('skills_section_title')}</Badge>
          </BlurFade>
          <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 1} inView>
            <h2 className='text-4xl font-extralight text-balance sm:text-5xl'>
              {t('skills_main_title')}
            </h2>
          </BlurFade>
          <BlurFade direction='up' delay={BASE_DELAY + STAGGER_DELAY * 2} inView>
            <p className='max-w-xl text-muted-foreground text-balance md:text-lg'>
              {t('skills_subtitle')}
            </p>
          </BlurFade>
        </div>

        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
