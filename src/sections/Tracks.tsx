import { Section } from '../components/ui/Section'

const pillars = [
  {
    icon: '🎤',
    title: 'Expression',
    description: 'Communicate ideas with clarity and confidence.',
    accent: 'text-sky-400',
  },
  {
    icon: '🧠',
    title: 'Critical Thinking',
    description: 'Question, analyse, and understand challenges.',
    accent: 'text-purple-400',
  },
  {
    icon: '🔍',
    title: 'Problem Discovery',
    description: 'Go beyond the surface and identify real problems and their root causes.',
    accent: 'text-amber-400',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Turn insights into meaningful and practical solutions.',
    accent: 'text-yellow-400',
  },
  {
    icon: '🌱',
    title: 'Impact',
    description: 'Build ideas with sustainability and social impact in mind.',
    accent: 'text-green-400',
  },
  {
    icon: '🚀',
    title: 'Entrepreneurship',
    description: 'Transform solutions into viable and sustainable initiatives.',
    accent: 'text-rose-400',
  },
]

export function Tracks() {
  return (
    <Section id="tracks" className="relative py-24 md:py-36 overflow-hidden bg-black text-white">
      {/* Background radial ambient lights */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-white/[0.03] to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Main Section Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
            About the Event
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl md:text-7xl leading-[1.08]">
            What is ELOQVENT?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[18px] sm:text-[20px] md:text-[22px] leading-[1.6] text-neutral-400 font-normal">
            <strong className="font-semibold text-white">ELOQVENT 2K26</strong> is a two-day multidisciplinary event that brings together{' '}
            <strong className="font-semibold text-white">
              communication, innovation, problem-solving, design thinking, and entrepreneurship
            </strong>{' '}
            on one platform.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-center text-[17px] sm:text-[19px] leading-[1.6] text-neutral-400 font-normal">
            The event is built around two tracks — <strong className="font-semibold text-[#38bdf8]">ELOCUTION</strong> and{' '}
            <strong className="font-semibold text-[#e5b877]">ROOT RIDDLES</strong> — giving participants opportunities to express ideas, think critically, explore real-world problems, develop innovative solutions, and present their ideas for impact.
          </p>
        </div>

        {/* Divider */}
        <div className="my-16 md:my-24 w-full border-t border-white/10" />

        {/* ELOQVENT IS ABOUT */}
        <div>
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              Core Philosophy
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              ELOQVENT is about
            </h3>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="space-y-1.5">
                <h4 className="font-display text-[20px] sm:text-[22px] font-semibold tracking-tight text-white">
                  <span className="mr-2">{p.icon}</span>
                  <span className={p.accent}>{p.title}</span>
                </h4>
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-neutral-400">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 md:my-24 w-full border-t border-white/10" />

        {/* TWO TRACKS. ONE PURPOSE. */}
        <div>
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              Event Structure
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Two Tracks. One Purpose.
            </h3>
          </div>

          <div className="mt-8 space-y-6 text-[17px] sm:text-[19px] leading-[1.6] text-neutral-400">
            <p>
              <strong className="font-semibold text-[#38bdf8]">ELOCUTION</strong> — Develop the ability to{' '}
              <strong className="font-semibold text-white">communicate, articulate, debate, and defend ideas.</strong>
            </p>
            <p>
              <strong className="font-semibold text-[#e5b877]">ROOT RIDDLES</strong> — Develop the ability to{' '}
              <strong className="font-semibold text-white">discover, design, develop, and pitch solutions to real-world challenges.</strong>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 md:my-20 w-full border-t border-white/10" />

        {/* Grand Vision Callout */}
        <div className="text-center">
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white">
            ELOQVENT 2K26 — Where Ideas Find Their Voice & Problems Find Their Solutions.
          </p>
        </div>

      </div>
    </Section>
  )
}






