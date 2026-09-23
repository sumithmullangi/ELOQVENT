import { controlCards } from '../content/product'
import { FeatureCard } from '../components/ui/FeatureCard'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'

export function ControlGrid() {
  return (
    <Section id="controls" className="py-24 md:py-32">
      <SectionHeader kicker="Camera app" title="Such a control freak." />
      <div className="mx-auto mt-14 grid max-w-5xl gap-5 px-6 md:grid-cols-2">
        {controlCards.map((card) => (
          <FeatureCard key={card.title} title={card.title} body={card.body} />
        ))}
      </div>
    </Section>
  )
}
