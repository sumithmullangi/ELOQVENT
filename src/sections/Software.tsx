import { useState } from 'react'
import { softwareCards } from '../content/product'
import { cn } from '../lib/cn'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'

export function Software() {
  const [index, setIndex] = useState(0)
  const card = softwareCards[index]

  return (
    <Section id="software" tone="stage" className="py-24 md:py-32">
      <SectionHeader
        kicker="AuraOS"
        title="Helpful in all the right places."
      />
      <div className="mx-auto mt-14 max-w-4xl px-6">
        <article className="min-h-[320px] rounded-[32px] bg-[#1d1d1f] p-10 md:p-14">
          <h3 className="text-[32px] font-semibold tracking-tight text-white md:text-[40px]">
            {card.title}
          </h3>
          <p className="mt-4 max-w-xl text-[19px] leading-8 text-muted">{card.body}</p>
        </article>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-full bg-white/10 px-4 py-2 text-sm text-white"
            onClick={() => setIndex((i) => (i - 1 + softwareCards.length) % softwareCards.length)}
          >
            Previous
          </button>
          <div className="flex gap-2">
            {softwareCards.map((item, i) => (
              <button
                key={item.title}
                type="button"
                aria-label={item.title}
                onClick={() => setIndex(i)}
                className={cn('h-2 w-2 rounded-full', i === index ? 'bg-white' : 'bg-white/30')}
              />
            ))}
          </div>
          <button
            type="button"
            className="rounded-full bg-white/10 px-4 py-2 text-sm text-white"
            onClick={() => setIndex((i) => (i + 1) % softwareCards.length)}
          >
            Next
          </button>
        </div>
      </div>
    </Section>
  )
}
