import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'

type SectionHeaderProps = {
  kicker?: string
  title: string
  body?: string
  align?: 'left' | 'center'
  light?: boolean
  className?: string
}

export function SectionHeader({
  kicker,
  title,
  body,
  align = 'center',
  light = false,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'mx-auto max-w-5xl px-6',
        align === 'center' ? 'text-center' : 'text-left',
        className,
      )}
    >
      {kicker ? (
        <p
          className={cn(
            'text-[21px] font-semibold tracking-tight md:text-[28px]',
            light ? 'text-[#6e6e73]' : 'text-dim',
          )}
        >
          {kicker}
        </p>
      ) : null}
      <h2
        className={cn(
          'mt-1 text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[64px] lg:text-[80px]',
          light ? 'text-[#1d1d1f]' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={cn(
            'mx-auto mt-5 max-w-3xl text-[17px] leading-7 md:text-[21px] md:leading-8',
            light ? 'text-[#6e6e73]' : 'text-muted',
            align === 'left' && 'mx-0',
          )}
        >
          {body}
        </p>
      ) : null}
    </motion.div>
  )
}
