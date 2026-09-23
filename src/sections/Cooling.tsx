import { cooling } from '../content/product'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'

export function Cooling() {
  return (
    <Section id="cooling" tone="stage" className="py-24 md:py-32">
      <SectionHeader kicker={cooling.kicker} title={cooling.title} body={cooling.body} />
      <div className="relative mx-auto mt-16 h-64 max-w-3xl overflow-hidden rounded-[32px] bg-[#0c0c0e] px-6">
        <div className="absolute inset-x-[15%] top-1/2 h-24 -translate-y-1/2 rounded-[40px] border border-sky-300/20 bg-gradient-to-r from-sky-500/10 via-white/10 to-indigo-500/10 blur-[1px]" />
        <div className="absolute inset-x-[22%] top-1/2 h-10 -translate-y-1/2 rounded-full bg-sky-300/20 blur-xl" />
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="absolute bottom-6 h-16 w-px bg-gradient-to-t from-transparent to-sky-200/50"
            style={{ left: `${10 + i * 7}%`, animation: `pulse ${1.6 + (i % 4) * 0.2}s ease-in-out infinite` }}
          />
        ))}
      </div>
    </Section>
  )
}
