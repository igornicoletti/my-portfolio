import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"
import { useTranslation } from 'react-i18next'

const separator = '\u00A0\u2022\u00A0'

export const ScrollVelocity = () => {
  const { t } = useTranslation()

  const row1Phrases = t('scroll_velocity_row_1', { returnObjects: true }) as string[]
  const row2Phrases = t('scroll_velocity_row_2', { returnObjects: true }) as string[]

  const row1String = row1Phrases.map((item) => item + separator).join('')
  const row2String = row2Phrases.map((item) => item + separator).join('')

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-muted text-4xl font-bold tracking-[-0.02em] md:text-7xl">
        <ScrollVelocityRow direction={1}>
          {row1String}
        </ScrollVelocityRow>
        <ScrollVelocityRow direction={-1}>
          {row2String}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
