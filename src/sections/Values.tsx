import { values } from '../content/product'
import { FeatureCard } from '../components/ui/FeatureCard'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'

export function Values() {
  return (
    <Section id="values" tone="light" className="py-24 md:py-32">
      <SectionHeader light kicker="Our values" title="Lead the way." />
      <div className="mx-auto mt-14 grid max-w-5xl gap-5 px-6 md:grid-cols-3">
        {values.map((item) => (
          <FeatureCard key={item.title} light title={item.title} body={item.body}>
            <span className="text-sm font-medium text-buy">{item.hrefLabel} →</span>
          </FeatureCard>
        ))}
      </div>
    </Section>
  )
}
