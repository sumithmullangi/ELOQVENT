import { connectivity } from '../content/product'
import { FeatureCard } from '../components/ui/FeatureCard'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'

export function Connectivity() {
  return (
    <Section id="connectivity" className="py-24 md:py-32">
      <SectionHeader kicker="Connectivity" title="Peace of mind in your pocket." />
      <div className="mx-auto mt-14 grid max-w-5xl gap-5 px-6 md:grid-cols-3">
        {connectivity.map((item) => (
          <FeatureCard key={item.title} title={item.title} body={item.body} />
        ))}
      </div>
    </Section>
  )
}
