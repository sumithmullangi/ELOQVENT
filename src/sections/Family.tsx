import { family } from '../content/product'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'
import { PhoneMock } from '../components/visuals/PhoneMock'

export function Family() {
  return (
    <Section id="family" className="py-24 md:py-32">
      <SectionHeader kicker={family.kicker} title={family.title} body={family.body} />
      <div className="mx-auto mt-16 flex max-w-5xl items-end justify-center gap-4 px-6 md:gap-10">
        <div className="text-center">
          <PhoneMock color="frost" size="sm" />
          <p className="mt-4 text-sm text-muted">Lumen 17</p>
        </div>
        <div className="text-center">
          <PhoneMock color="mist" size="md" />
          <p className="mt-4 text-sm text-muted">Lumen 18 Pro</p>
        </div>
        <div className="text-center">
          <PhoneMock color="garnet" size="lg" />
          <p className="mt-4 text-sm text-muted">Lumen 18 Pro Max</p>
        </div>
      </div>
    </Section>
  )
}
