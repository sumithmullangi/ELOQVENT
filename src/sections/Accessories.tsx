import { accessories } from '../content/product'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'

export function Accessories() {
  return (
    <Section id="accessories" className="py-24 md:py-32">
      <SectionHeader kicker={accessories.kicker} title={accessories.title} body={accessories.body} />
      <div className="mx-auto mt-14 flex max-w-5xl justify-center gap-6 px-6">
        {['#2c2c2e', '#5c2a32', '#8aa4c4', '#d8d4cc'].map((hex) => (
          <div
            key={hex}
            className="h-40 w-28 rounded-[28px] border border-white/10 md:h-56 md:w-40"
            style={{
              background: `linear-gradient(160deg, ${hex}, #111)`,
              boxShadow: 'inset 0 0 0 8px rgba(0,0,0,0.35)',
            }}
          />
        ))}
      </div>
    </Section>
  )
}
