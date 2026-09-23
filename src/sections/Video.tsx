import { video } from '../content/product'
import { FeatureCard } from '../components/ui/FeatureCard'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'

export function Video() {
  return (
    <Section id="video" className="py-24 md:py-32">
      <SectionHeader kicker={video.kicker} title={video.title} body={video.body} />
      <div className="mx-auto mt-14 grid max-w-5xl gap-5 px-6 md:grid-cols-2 lg:grid-cols-3">
        {video.cards.map((card) => (
          <FeatureCard key={card.title} title={card.title} body={card.body}>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-rose-400 to-sky-400" />
            </div>
          </FeatureCard>
        ))}
      </div>
    </Section>
  )
}
