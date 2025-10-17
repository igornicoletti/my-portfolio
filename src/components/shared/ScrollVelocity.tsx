import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"

export const ScrollVelocity = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-muted text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]">
        <ScrollVelocityRow direction={1}>
          Fullstack Developer{' '}&nbsp;{'\u00A0'}
          Tech Lover{' '}&nbsp;{'\u00A0'}
          Web Enthusiast{' '}&nbsp;{'\u00A0'}
        </ScrollVelocityRow>
        <ScrollVelocityRow direction={-1}>
          Creative Coder{' '}&nbsp;{'\u00A0'}
          Lifelong Learner{' '}&nbsp;{'\u00A0'}
          Problem Solver{' '}&nbsp;{'\u00A0'}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}
