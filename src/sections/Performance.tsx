import { performance } from '../content/product'
import { FeatureCard } from '../components/ui/FeatureCard'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'
import { ChipVisual } from '../components/visuals/ChipVisual'

export function Performance() {
  return (
    <Section id="performance" className="py-24 md:py-32">
      <SectionHeader kicker={performance.kicker} title={performance.title} body={performance.body} />
      <div className="mx-auto mt-14 px-6">
        <ChipVisual />
      </div>
      <div className="mx-auto mt-16 grid max-w-5xl gap-5 px-6 md:grid-cols-3">
        {performance.points.map((point) => (
          <FeatureCard key={point.title} title={point.title} body={point.body} />
        ))}
      </div>
    </Section>
  )
}
