import { useEffect } from 'react'
import { Section } from '../components/ui/Section'

export function Hero() {
  useEffect(() => {
    let timer: number | null = null

    const scheduleAutoScroll = () => {
      if (timer) {
        window.clearTimeout(timer)
      }
      // If user is currently on the Hero section (near the top)
      if (window.scrollY < 120) {
        timer = window.setTimeout(() => {
          if (window.scrollY < 120) {
            const nextSection = document.getElementById('tracks')
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' })
            }
          }
        }, 2500)
      }
    }

    // Schedule initially
    scheduleAutoScroll()

    // Whenever user scrolls back to the Hero, restart the 2.5s auto-scroll countdown
    const handleScroll = () => {
      scheduleAutoScroll()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      if (timer) {
        window.clearTimeout(timer)
      }
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Section id="hero" className="relative pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="relative mx-auto max-w-5xl px-4 text-center select-none">
        {/* Arched ELOQVENT in exact style with no background box or back color */}
        <div className="mx-auto w-full max-w-[760px] md:max-w-[900px]">
          <svg
            viewBox="0 0 1000 230"
            className="w-full h-auto overflow-visible"
            aria-label="ELOQVENT"
          >
            <defs>
              <style>{`
                @font-face {
                  font-family: 'Extra Innings';
                  src: url('/ExtraInnings.otf') format('opentype');
                  font-weight: normal 900;
                  font-style: normal;
                }
              `}</style>
              {/* Upward arched curve matching the reference picture */}
              <path id="hero-arch-path" d="M 40,195 Q 500,85 960,195" fill="none" />
              <filter id="shadow-3d" x="-20%" y="-20%" width="140%" height="150%">
                <feDropShadow dx="0" dy="6" stdDeviation="0" floodColor="#333336" />
                <feDropShadow dx="0" dy="12" stdDeviation="0" floodColor="#1c1c20" />
                <feDropShadow dx="0" dy="24" stdDeviation="16" floodColor="rgba(255,255,255,0.12)" />
              </filter>
            </defs>

            {/* 3D Extrusion Shadow Layer */}
            <text
              style={{ fontFamily: "'Extra Innings', sans-serif" }}
              fontSize="130"
              fontWeight="bold"
              letterSpacing="8"
              fill="#252528"
              dy="10"
            >
              <textPath href="#hero-arch-path" startOffset="50%" textAnchor="middle">
                ELOQVENT
              </textPath>
            </text>

            {/* Front Crisp White Face */}
            <text
              style={{ fontFamily: "'Extra Innings', sans-serif" }}
              fontSize="130"
              fontWeight="bold"
              letterSpacing="8"
              fill="#FFFFFF"
              filter="url(#shadow-3d)"
            >
              <textPath href="#hero-arch-path" startOffset="50%" textAnchor="middle">
                ELOQVENT
              </textPath>
            </text>
          </svg>

        </div>

        {/* 2K26 in exact matching font */}
        <div className="-mt-3 sm:-mt-5 md:-mt-8">
          <span
            style={{
              fontFamily: "'Extra Innings', 'Russo One', sans-serif",
              textShadow: '0 5px 0 #2b2b30, 0 10px 0 #18181c, 0 18px 25px rgba(255,255,255,0.15)',
            }}
            className="text-[44px] font-bold tracking-widest text-white sm:text-[60px] md:text-[80px] lg:text-[92px]"
          >
            2K26
          </span>
        </div>


        {/* Sub Tagline */}
        <div className="mt-8 flex items-center justify-center gap-2.5 sm:gap-4 md:mt-10 md:gap-5">
          <span className="font-display text-xs font-bold uppercase tracking-[0.24em] text-neutral-300 sm:text-sm md:text-base lg:text-lg">
            Tech
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <span className="font-display text-xs font-bold uppercase tracking-[0.24em] text-neutral-300 sm:text-sm md:text-base lg:text-lg">
            Talk
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          <span className="font-display text-xs font-bold uppercase tracking-[0.24em] text-neutral-300 sm:text-sm md:text-base lg:text-lg">
            Triumph
          </span>
        </div>
      </div>
    </Section>
  )
}


