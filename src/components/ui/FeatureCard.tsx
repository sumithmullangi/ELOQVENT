import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type FeatureCardProps = {
  title: string
  body: string
  className?: string
  children?: ReactNode
  light?: boolean
}

export function FeatureCard({ title, body, className, children, light }: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={cn(
        'flex min-h-[280px] flex-col overflow-hidden rounded-[28px] p-8 md:min-h-[340px] md:p-10',
        light ? 'bg-white text-[#1d1d1f] shadow-sm' : 'bg-[#1d1d1f] text-ink',
        className,
      )}
    >
      <h3 className="text-[24px] font-semibold tracking-tight md:text-[28px]">{title}</h3>
      <p className={cn('mt-3 text-[17px] leading-7', light ? 'text-[#6e6e73]' : 'text-muted')}>
        {body}
      </p>
      {children ? <div className="mt-auto pt-8">{children}</div> : null}
    </motion.article>
  )
}
