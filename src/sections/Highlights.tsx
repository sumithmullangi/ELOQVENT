import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { highlights } from '../content/product'
import { cn } from '../lib/cn'
import { Section } from '../components/ui/Section'
import { PhoneMock, type PhoneColor } from '../components/visuals/PhoneMock'

const tones: Record<string, PhoneColor> = {
  camera: 'garnet',
  battery: 'midnight',
  colours: 'mist',
  chip: 'frost',
  aura: 'mist',
}

export function Highlights() {
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const scroller = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!playing) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % highlights.length)
    }, 4500)
    return () => window.clearInterval(id)
  }, [playing])

  useEffect(() => {
    const el = scroller.current
    if (!el) return
    const card = el.children[index] as HTMLElement | undefined
    if (card) {
      const targetLeft = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2
      el.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' })
    }
  }, [index])


  return (
    <Section id="highlights" tone="stage" className="py-12 md:py-16">
      <h2 className="mb-8 text-center text-[40px] font-semibold tracking-tight text-white md:text-[56px]">
        Get the highlights.
      </h2>
      <div
        ref={scroller}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-[8vw] pb-6"
      >
        {highlights.map((item, i) => (
          <article
            key={item.id}
            className={cn(
              'relative h-[520px] w-[min(78vw,420px)] shrink-0 snap-center overflow-hidden rounded-[32px] bg-[#1d1d1f] p-8 transition-[opacity,transform] duration-500 md:h-[640px] md:w-[520px] md:p-10',
              i === index ? 'opacity-100' : 'opacity-70',
            )}
          >
            <p className="text-sm font-medium text-white/50">{item.label}</p>
            <h3 className="mt-3 max-w-sm text-[28px] font-semibold leading-tight tracking-tight text-white md:text-[34px]">
              {item.title}
            </h3>
            <p className="mt-3 max-w-sm text-[17px] text-muted">{item.body}</p>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              {item.tone === 'family' ? (
                <div className="flex items-end gap-2">
                  {(['midnight', 'frost', 'mist', 'garnet'] as PhoneColor[]).map((c) => (
                    <PhoneMock key={c} color={c} size="sm" />
                  ))}
                </div>
              ) : (
                <PhoneMock color={tones[item.id] ?? 'garnet'} size="md" />
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
          {highlights.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={item.label}
              onClick={() => {
                setIndex(i)
                setPlaying(false)
              }}
              className={cn(
                'h-2 rounded-full transition-all',
                i === index ? 'w-6 bg-white' : 'w-2 bg-white/40',
              )}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label={playing ? 'Pause highlights' : 'Play highlights'}
          onClick={() => setPlaying((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white"
        >
          {playing ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
    </Section>
  )
}
