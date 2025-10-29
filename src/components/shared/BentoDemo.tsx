import { AnimatedBeamDemo } from '@/components/shared/AnimatedBeamDemo'
import { AnimatedBeamMultipleOutputDemo } from '@/components/shared/AnimatedBeamMultipleOutputDemo'
import { AnimatedListDemo } from '@/components/shared/AnimatedListDemo'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { Marquee } from '@/components/ui/marquee'
import { cn } from '@/lib/utils'
import { useTranslation } from 'react-i18next'

const codingPrinciples = [
  { name: 'Código Limpo', body: 'Priorize legibilidade e modularidade para manter escalabilidade.' },
  { name: 'Funções Pequenas', body: 'Cada função deve resolver um único problema de forma clara.' },
  { name: 'Tratamento de Erros', body: 'Use mensagens claras e capturas seguras para lidar com exceções.' },
  { name: 'Evite Globais', body: 'Isolamento lógico reduz efeitos colaterais e melhora a previsibilidade.' },
  { name: 'Formatação Consistente', body: 'Estilo uniforme facilita a leitura e revisão de código.' },
]

const items = [
  {
    className: 'col-span-3 lg:col-span-1',
    background: (
      <Marquee pauseOnHover className='absolute top-4 [mask-image:linear-gradient(to_top,transparent_00%,#000_100%)] [--duration:20s]'>
        {codingPrinciples.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              'relative w-44 cursor-pointer overflow-hidden border rounded-sm p-4',
              'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
              'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]',
              'transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none'
            )}
          >
            <figcaption className='text-sm font-medium'>
              {f.name}
            </figcaption>
            <blockquote className='mt-2 text-sm'>{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    className: 'col-span-3 lg:col-span-2',
    background: (
      <AnimatedBeamMultipleOutputDemo className='absolute top-0 right-0 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105' />
    ),
  },
  {
    className: 'col-span-3 lg:col-span-2',
    background: (
      <AnimatedBeamDemo className='absolute top-0 right-0 h-[300px] border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105' />
    ),
  },
  {
    className: 'col-span-3 lg:col-span-1',
    background: (
      <AnimatedListDemo className='absolute top-0 right-0 h-[300px] w-full scale-90 border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-90' />
    ),
  },
]

export function BentoDemo() {
  const { t } = useTranslation()

  const skills = t('skills_items', { returnObjects: true })

  const features = Array.isArray(skills)
    ? items.map((feature, idx) => ({
      ...feature,
      ...skills[idx]
    })) : []

  return (
    <section className='relative'>
      <div className='mx-auto max-w-screen-xl px-4 py-20'>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
