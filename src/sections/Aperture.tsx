import { Section } from '../components/ui/Section'

const milestones = [
  {
    step: '01',
    title: 'Understand',
    description: 'Explore SDGs, Design Thinking and human-centred innovation.',
  },
  {
    step: '02',
    title: 'Discover',
    description:
      'Research users, communities, stakeholders, existing practices, gaps and unmet needs.',
  },
  {
    step: '03',
    title: 'Find the Root',
    description:
      'Analyse why the problem exists, who is affected, existing limitations and opportunities for intervention.',
  },
  {
    step: '04',
    title: 'Ideate & Develop',
    description:
      'Generate multiple ideas and develop a practical product, service, system, process or technology-enabled solution.',
  },
  {
    step: '05',
    title: 'Build the Model',
    description:
      'Define the value proposition, target users, feasibility, implementation, business model, sustainability and scalability.',
  },
  {
    step: '06',
    title: 'Pitch for Impact',
    description:
      'Present the complete innovation journey — from problem discovery and root cause to solution, business model, sustainability and social impact.',
  },
]

export function Aperture() {
  return (
    <Section id="aperture" className="relative py-24 md:py-36 overflow-hidden bg-black text-white">
      {/* Background subtle ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-amber-500/[0.03] to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e5b877]">
            <span>🧩 Track 02</span>
            <span className="text-neutral-600">•</span>
            <span>Human-Centred Innovation & Social Impact</span>
          </div>

          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl md:text-7xl leading-[1.08]">
            Root Riddles.
          </h2>

          <p className="mt-6 text-[18px] sm:text-[20px] md:text-[22px] leading-[1.6] text-neutral-400 font-normal">
            An innovation challenge where participants explore{' '}
            <strong className="font-semibold text-white">real-world societal challenges</strong>, understand people and their needs, identify{' '}
            <strong className="font-semibold text-white">root causes</strong>, develop innovative solutions, and transform them into{' '}
            <strong className="font-semibold text-white">sustainable and impactful initiatives</strong>.
          </p>
        </div>

        {/* WHAT HAPPENS? */}
        <div className="mt-16 md:mt-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5b877]">
            What Happens?
          </p>

          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2">
            {milestones.map((m) => (
              <div key={m.step} className="space-y-1.5">
                <h4 className="font-display text-[19px] sm:text-[21px] font-semibold tracking-tight text-white">
                  {m.step} — {m.title}
                </h4>
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-neutral-400">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 border-t border-white/10" />

        {/* CHALLENGE THEMES */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5b877]">
            Challenge Themes
          </p>
          <p className="mt-4 text-[17px] sm:text-[19px] md:text-[20px] font-medium leading-relaxed text-white">
            Healthcare & Well-being • Smart & Sustainable Agriculture • Water & Sanitation • Waste Management & Circular Economy • Education & Inclusive Learning
          </p>
        </div>

        {/* Divider */}
        <div className="my-14 border-t border-white/10" />

        {/* TRACK JOURNEY */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5b877]">
            Track Journey
          </p>
          <p className="mt-4 text-[19px] sm:text-[22px] md:text-[24px] font-semibold tracking-tight text-white">
            Empathize <span className="text-neutral-500 font-normal">→</span> Define <span className="text-neutral-500 font-normal">→</span> Ideate <span className="text-neutral-500 font-normal">→</span> Develop <span className="text-neutral-500 font-normal">→</span> Model <span className="text-neutral-500 font-normal">→</span> Pitch
          </p>
        </div>

        {/* Divider */}
        <div className="my-14 border-t border-white/10" />

        {/* WHAT YOU'LL DEVELOP */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
            What You'll Develop
          </p>
          <p className="mt-4 text-[17px] sm:text-[19px] md:text-[20px] font-medium leading-relaxed text-white">
            Problem Solving • Empathy • Research • Root-Cause Analysis • Innovation • Design Thinking • Business Thinking • Sustainability • Social Impact • Pitching
          </p>
        </div>

      </div>
    </Section>
  )
}

