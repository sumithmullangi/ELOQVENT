import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { PhoneMock } from './PhoneMock'

export function HeroStage() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  const glow = useTransform(scrollYProgress, [0, 1], [0.55, 0.2])

  return (
    <div ref={ref} className="relative mx-auto mt-6 flex h-[58vh] min-h-[340px] max-w-5xl items-end justify-center md:h-[72vh]">
      <motion.div
        style={{ opacity: glow }}
        className="pointer-events-none absolute inset-x-[10%] bottom-[8%] h-[42%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(122,58,68,0.45),transparent_70%)] blur-3xl"
      />
      <motion.div style={{ y, scale }} className="relative flex items-end justify-center">
        <span
          className="font-display select-none text-[23vw] font-black leading-none tracking-[-0.06em] text-transparent sm:text-[20vw] md:text-[13.5rem] lg:text-[16rem]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.25), rgba(180,196,220,0.08) 42%, rgba(90,40,50,0.18))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextStroke: '1px rgba(255,255,255,0.14)',
          }}
        >
          2026
        </span>
        <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
          <PhoneMock color="garnet" size="lg" />
        </div>
      </motion.div>
    </div>
  )
}
