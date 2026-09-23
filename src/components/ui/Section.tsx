import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type SectionProps = {
  id?: string
  children: ReactNode
  className?: string
  tone?: 'void' | 'stage' | 'panel' | 'light'
}

export function Section({ id, children, className, tone = 'void' }: SectionProps) {
  const bg = {
    void: 'bg-void text-ink',
    stage: 'bg-[#101010] text-ink',
    panel: 'bg-[#f5f5f7] text-[#1d1d1f]',
    light: 'bg-white text-[#1d1d1f]',
  }[tone]

  return (
    <section id={id} className={cn('relative scroll-mt-28 overflow-hidden', bg, className)}>
      {children}
    </section>
  )
}
