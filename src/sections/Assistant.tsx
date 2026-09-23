import { assistant } from '../content/product'
import { FeatureCard } from '../components/ui/FeatureCard'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'

export function Assistant() {
  return (
    <Section id="assistant" className="py-24 md:py-32">
      <SectionHeader kicker={assistant.kicker} title={assistant.title} />
      <p className="mt-4 text-center text-sm text-dim">{assistant.note}</p>
      <div className="mx-auto mt-14 grid max-w-5xl gap-5 px-6 md:grid-cols-2">
        {assistant.cards.map((card) => (
          <FeatureCard key={card.title} title={card.title} body={card.body} />
        ))}
      </div>
    </Section>
  )
}
