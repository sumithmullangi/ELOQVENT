import { switchOver, upgrade } from '../content/product'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'

export function Upgrade() {
  return (
    <Section id="upgrade" className="py-24 md:py-32">
      <SectionHeader kicker={upgrade.kicker} title={upgrade.title} body={upgrade.body} />
      <div className="mx-auto mt-16 grid max-w-5xl gap-6 px-6 md:grid-cols-3">
        {upgrade.stats.map((stat) => (
          <div key={stat.label} className="rounded-[28px] bg-[#1d1d1f] px-6 py-10 text-center">
            <p className="text-[40px] font-semibold tracking-tight text-white md:text-[48px]">
              {stat.value}
            </p>
            <p className="mt-3 text-[15px] leading-6 text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-28 max-w-5xl px-6">
        <SectionHeader kicker={switchOver.kicker} title={switchOver.title} body={switchOver.body} />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {switchOver.stats.map((stat) => (
            <div key={stat.label} className="border-t border-white/15 pt-5">
              <p className="text-[28px] font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-[15px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
