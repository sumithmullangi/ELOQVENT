import { battery } from '../content/product'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'
import { PhoneMock } from '../components/visuals/PhoneMock'

export function Battery() {
  return (
    <Section id="battery" className="py-24 md:py-32">
      <SectionHeader kicker={battery.kicker} title={battery.title} />
      <p className="mx-auto mt-8 max-w-3xl px-6 text-center text-[28px] font-semibold tracking-tight text-white md:text-[40px]">
        {battery.lead}
      </p>
      <p className="mx-auto mt-5 max-w-3xl px-6 text-center text-[17px] leading-7 text-muted md:text-[21px] md:leading-8">
        {battery.body}
      </p>
      <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-12 px-6 md:flex-row md:justify-center">
        <PhoneMock color="midnight" size="lg" />
        <div className="max-w-md">
          <h3 className="text-[32px] font-semibold tracking-tight text-white md:text-[40px]">
            {battery.charge.title}
          </h3>
          <p className="mt-4 text-[17px] leading-7 text-muted">{battery.charge.body}</p>
          <p className="mt-8 text-[56px] font-semibold text-white">{battery.charge.stat}</p>
          <p className="text-muted">{battery.charge.statLabel}</p>
        </div>
      </div>
    </Section>
  )
}
