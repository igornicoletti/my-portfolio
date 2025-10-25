import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"

const separator = '\u00A0\u00B7\u00A0'
const stack = ["React", "TypeScript", "Vite", "Firebase", "TanStack Query", "React Router", "Radix UI", "Tailwind CSS", "Vitest", "API Rest", "Motion", "React Hook Form", "Zod"]

export const Technology = () => {
  const technologies = stack.join(separator)

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      <ScrollVelocityContainer className="text-muted text-5xl font-bold md:text-6xl">
        <ScrollVelocityRow baseVelocity={2} direction={1}>
          {technologies}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={2} direction={-1}>
          {technologies}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </section>
  )
}
