import { cn } from '../../lib/cn'
import { colors } from '../../content/product'

export type PhoneColor = (typeof colors)[number]['id']
export type PhoneView = 'back' | 'front'

type PhoneMockProps = {
  color?: PhoneColor
  view?: PhoneView
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function PhoneMock({
  color = 'garnet',
  view = 'back',
  className,
  size = 'md',
}: PhoneMockProps) {
  const swatch = colors.find((c) => c.id === color) ?? colors[3]
  const widths = { sm: 'w-[92px]', md: 'w-[150px]', lg: 'w-[210px]' }

  return (
    <div
      className={cn('relative aspect-[9/19.2]', widths[size], className)}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 rounded-[18%] shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
        style={{
          background: `linear-gradient(160deg, ${swatch.metal}, ${swatch.hex} 42%, #0a0a0a)`,
          boxShadow: `inset 0 0 0 1.5px rgba(255,255,255,0.18), inset 0 0 18px rgba(255,255,255,0.06)`,
        }}
      >
        {view === 'back' ? <BackFace hex={swatch.hex} /> : <FrontFace />}
      </div>
    </div>
  )
}

function BackFace({ hex }: { hex: string }) {
  return (
    <>
      <div
        className="absolute left-[12%] right-[12%] top-[7%] h-[28%] rounded-[22%] border border-white/15"
        style={{
          background: `linear-gradient(145deg, rgba(255,255,255,0.14), ${hex} 40%, rgba(0,0,0,0.35))`,
        }}
      >
        <Lens className="left-[14%] top-[16%]" />
        <Lens className="left-[14%] bottom-[16%]" />
        <Lens className="right-[16%] top-[28%]" small />
        <div className="absolute right-[22%] bottom-[22%] h-[12%] w-[18%] rounded-full bg-[#c9b27a]/80" />
      </div>
      <div className="absolute bottom-[18%] left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border border-white/20">
        <div className="absolute inset-[3px] rounded-full border border-white/30" />
      </div>
    </>
  )
}

function FrontFace() {
  return (
    <div className="absolute inset-[2.4%] overflow-hidden rounded-[16%] bg-[#0b0b0d]">
      <div className="absolute left-1/2 top-[3.2%] h-[3.6%] w-[28%] -translate-x-1/2 rounded-full bg-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#7a3b44_0%,transparent_42%),radial-gradient(circle_at_80%_80%,#2a4a6a_0%,transparent_40%),linear-gradient(180deg,#1a1214,#09090b)]" />
      <div className="absolute inset-x-[10%] top-[18%] h-[54%] rounded-[18%] border border-white/10 bg-white/5 backdrop-blur-sm" />
    </div>
  )
}

function Lens({ className, small }: { className: string; small?: boolean }) {
  return (
    <div
      className={cn(
        'absolute rounded-full border border-white/20 bg-[#111]',
        small ? 'h-[28%] w-[28%]' : 'h-[38%] w-[38%]',
        className,
      )}
    >
      <div className="absolute inset-[18%] rounded-full bg-[conic-gradient(from_120deg,#1a1a2e,#4b6cb7,#1a1a2e,#6b3a5a,#1a1a2e)]" />
      <div className="absolute inset-[38%] rounded-full bg-black/80" />
    </div>
  )
}
