import { BentoCard, BentoGrid } from "@/components/ui/bento-grid"
import { useTranslation } from "react-i18next"

const items = [
  {
    className: "col-span-3 lg:col-span-2",
    background: <></>,
  },
  {
    className: "col-span-3 lg:col-span-1",
    background: <></>,
  },
  {
    className: "col-span-3 lg:col-span-1",
    background: <></>,
  },
  {
    className: "col-span-3 lg:col-span-2",
    background: <></>,
  },
]

export function BentoDemo() {
  const { t } = useTranslation()

  const skills = t("skills_items", {
    returnObjects: true
  })

  const features = Array.isArray(skills)
    ? items.map((feature, idx) => ({
      ...feature,
      ...skills[idx]
    })) : []

  return (
    <section className='relative'>
      <div className='mx-auto max-w-screen-lg px-4 py-20'>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
