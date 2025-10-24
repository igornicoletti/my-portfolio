import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { useTranslation } from "react-i18next"

const items = [
  {
    href: "#",
    className: "col-span-3 lg:col-span-1",
    background: <></>,
  },
  {
    href: "#",
    className: "col-span-3 lg:col-span-2",
    background: <></>,
  },
  {
    href: "#",
    className: "col-span-3 lg:col-span-2",
    background: <></>,
  },
  {
    href: "#",
    className: "col-span-3 lg:col-span-1",
    background: <></>,
  },
]

export function BentoDemo() {
  const { t } = useTranslation()

  const skills = t("skills_items", { returnObjects: true })

  const features = Array.isArray(skills)
    ? items.map((feature, idx) => ({
      ...feature,
      ...skills[idx],
    }))
    : []

  return (
    <section id='experience' className='relative px-4 py-20'>
      <div className='mx-auto max-w-screen-lg'>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
