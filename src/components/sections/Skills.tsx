import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"
import { useTranslation } from 'react-i18next'

const separator = '\u00A0'

export const Skills = () => {
  const { t } = useTranslation()

  const row1Phrases = t('scroll_velocity_row_1', { returnObjects: true }) as string[]
  const row2Phrases = t('scroll_velocity_row_2', { returnObjects: true }) as string[]

  const row1String = row1Phrases.map((item) => item + separator).join('')
  const row2String = row2Phrases.map((item) => item + separator).join('')

  return (
    <section className='relative flex w-full flex-col items-center justify-center overflow-hidden py-6 md:py-20'>
      <ScrollVelocityContainer className="text-muted-foreground/10 font-bold text-5xl md:text-6xl">
        <ScrollVelocityRow baseVelocity={2} direction={1}>
          {row1String}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={2} direction={-1}>
          {row2String}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </section>
  )
}
