import { useState } from 'react'
import { shopping } from '../content/product'
import { FeatureCard } from '../components/ui/FeatureCard'
import { Modal } from '../components/ui/Modal'
import { Section } from '../components/ui/Section'
import { SectionHeader } from '../components/ui/SectionHeader'

export function Shopping() {
  const [openId, setOpenId] = useState<string | null>(null)
  const active = shopping.find((item) => item.id === openId)

  return (
    <Section id="shop" tone="panel" className="py-24 md:py-32">
      <SectionHeader
        light
        kicker="Why shop here"
        title="The best place to start with Lumen."
      />
      <div className="mx-auto mt-14 grid max-w-5xl gap-5 px-6 md:grid-cols-2 lg:grid-cols-3">
        {shopping.map((item) => (
          <button key={item.id} type="button" className="text-left" onClick={() => setOpenId(item.id)}>
            <FeatureCard light title={item.title} body={item.subtitle} className="h-full" />
          </button>
        ))}
      </div>
      <Modal
        open={Boolean(active)}
        title={active?.modalTitle ?? ''}
        body={active?.modalBody ?? ''}
        onClose={() => setOpenId(null)}
      />
    </Section>
  )
}
