import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type ButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'buy' | 'ghost' | 'pill' | 'text'
  className?: string
  type?: 'button' | 'submit'
}

export function Button({
  children,
  href,
  onClick,
  variant = 'buy',
  className,
  type = 'button',
}: ButtonProps) {
  const styles = {
    buy: 'bg-buy text-white hover:bg-buy-hover',
    ghost: 'border border-white/40 text-white hover:border-white',
    pill: 'bg-white/10 text-white hover:bg-white/15',
    text: 'text-buy hover:underline underline-offset-4',
  }[variant]

  const cls = cn(
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200',
    styles,
    className,
  )

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
