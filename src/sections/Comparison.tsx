import { useState } from 'react'
import { comparisonRows } from '../content/product'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'

const fromOptions = [
  { id: 'from17' as const, label: 'Lumen 17 Pro' },
  { id: 'from16' as const, label: 'Lumen 16 Pro' },
  { id: 'from15' as const, label: 'Lumen 15 Pro' },
]

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="font-medium text-white">{value}</span>
  }
  return (
    <span className={value ? 'text-sky-400' : 'text-white/25'}>{value ? '●' : '○'}</span>
  )
}

export function Comparison() {
  const [from, setFrom] = useState<(typeof fromOptions)[number]['id']>('from17')

  return (
    <Section id="compare" className="py-24 md:py-32">
      <SectionHeader kicker="Worth the upgrade?" title="You bet." />
      <div className="mx-auto mt-10 flex max-w-3xl justify-center gap-2 px-6">
        {fromOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setFrom(opt.id)}
            className={`rounded-full px-4 py-2 text-sm ${from === opt.id ? 'bg-white text-black' : 'bg-white/10 text-white'}`}
          >
            From {opt.label}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[28px] bg-[#1d1d1f] px-6">
        {comparisonRows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-6 border-b border-white/10 py-5 last:border-none"
          >
            <p className="text-[15px] text-muted">{row.label}</p>
            <Cell value={row[from]} />
          </div>
        ))}
      </div>
    </Section>
  )
}
