import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section } from '../components/ui/Section'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'

export function Design() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'communication' | 'technical' | 'leadership'>('all')

  const gainCards = [
    {
      id: '01',
      category: 'Public Speaking',
      categoryType: 'communication',
      badgeColor: 'border-sky-500/20 bg-sky-500/10 text-sky-400',
      title: 'Stronger',
      titleHighlight: 'Communication',
      highlightColor: 'text-sky-400',
      description: 'Build confidence in public speaking, articulation, storytelling, debate, and persuasive communication.',
      meta: 'Articulation • Storytelling • Debate • Persuasion',
    },
    {
      id: '02',
      category: 'Analytical Rigor',
      categoryType: 'technical',
      badgeColor: 'border-purple-500/20 bg-purple-500/10 text-purple-400',
      title: 'Critical',
      titleHighlight: 'Thinking',
      highlightColor: 'text-purple-400',
      description: 'Learn to analyse challenges, structure your thoughts, question assumptions, and develop logical arguments.',
      meta: 'Structured Thoughts • Logical Arguments • Inquiry',
    },
    {
      id: '03',
      category: 'Root Analysis',
      categoryType: 'technical',
      badgeColor: 'border-amber-500/20 bg-amber-500/10 text-amber-400',
      title: 'Problem-Solving',
      titleHighlight: 'Skills',
      highlightColor: 'text-amber-400',
      description: 'Understand real-world problems, identify their root causes, and develop practical approaches to solving them.',
      meta: 'Root Causes • Practical Approaches • Impact',
    },
    {
      id: '04',
      category: 'Design Thinking',
      categoryType: 'technical',
      badgeColor: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-400',
      title: 'Innovation &',
      titleHighlight: 'Creativity',
      highlightColor: 'text-yellow-400',
      description: 'Explore Design Thinking and human-centred approaches to generate meaningful and innovative solutions.',
      meta: 'Human-Centred • Creative Frameworks • Novelty',
    },
    {
      id: '05',
      category: 'Team Synergy',
      categoryType: 'leadership',
      badgeColor: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
      title: 'Empathy &',
      titleHighlight: 'Collaboration',
      highlightColor: 'text-emerald-400',
      description: 'Understand the needs of users and stakeholders while working with others to explore challenges and develop solutions.',
      meta: 'User Needs • Stakeholders • Cross-Disciplinary',
    },
    {
      id: '06',
      category: 'Venture Viability',
      categoryType: 'leadership',
      badgeColor: 'border-rose-500/20 bg-rose-500/10 text-rose-400',
      title: 'Entrepreneurial',
      titleHighlight: 'Thinking',
      highlightColor: 'text-rose-400',
      description: 'Learn how to turn an idea into a viable initiative through value propositions, business models, feasibility, and sustainability.',
      meta: 'Value Propositions • Business Models • Feasibility',
    },
    {
      id: '07',
      category: '17 UN SDGs',
      categoryType: 'technical',
      badgeColor: 'border-green-500/20 bg-green-500/10 text-green-400',
      title: 'Social Impact &',
      titleHighlight: 'Sustainability',
      highlightColor: 'text-green-400',
      description: 'Explore SDG-driven approaches and understand how ideas and solutions can create measurable social impact.',
      meta: 'SDG Framework • Measurable Impact • Longevity',
    },
    {
      id: '08',
      category: 'Executive Defense',
      categoryType: 'communication',
      badgeColor: 'border-blue-500/20 bg-blue-500/10 text-blue-400',
      title: 'Presentation &',
      titleHighlight: 'Pitching',
      highlightColor: 'text-blue-400',
      description: 'Learn how to communicate your ideas effectively, defend your thinking, and present solutions before an expert evaluation panel.',
      meta: 'Expert Panel • Idea Defense • Clear Delivery',
    },
  ]

  const filteredCards = selectedFilter === 'all' 
    ? gainCards 
    : gainCards.filter(c => c.categoryType === selectedFilter)

  return (
    <Section id="gains" className="relative py-12 md:py-16 overflow-hidden bg-black text-white">
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-blue-600/[0.03] via-purple-600/[0.02] to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Large Rounded Apple Module Container (Ash Gray Box) */}
        <div className="rounded-[32px] sm:rounded-[44px] border border-white/[0.08] bg-[#161617] p-6 sm:p-10 md:p-14 shadow-2xl">
          
          {/* Apple Pro Section Header (Left title + Right selector pill) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
                Key Takeaways
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl leading-[1.08]">
                What Will You Gain?
              </h2>
              <p className="mt-4 max-w-2xl text-[16px] sm:text-[18px] leading-[1.55] text-neutral-400 font-normal">
                Here’s what you develop through <strong className="font-semibold text-white">ELOQVENT 2K26</strong> across communication, critical thinking, and innovation.
              </p>
            </div>

            {/* Apple-Style Filter Pill */}
            <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
              <span className="text-xs font-medium text-neutral-400">Filter key competencies:</span>
              <div className="relative inline-block">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value as any)}
                  className="appearance-none cursor-pointer rounded-full border border-white/10 bg-black/60 px-4 py-2 pr-9 text-xs font-medium text-white transition hover:border-white/25 focus:outline-none focus:ring-1 focus:ring-sky-500"
                >
                  <option value="all" className="bg-[#161617] text-white">All Competencies (8+)</option>
                  <option value="communication" className="bg-[#161617] text-white">Communication & Pitching</option>
                  <option value="technical" className="bg-[#161617] text-white">Critical Thinking & Analysis</option>
                  <option value="leadership" className="bg-[#161617] text-white">Collaboration & Venture</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-neutral-400" />
              </div>
            </div>
          </motion.div>

          {/* Apple-Style Bento Grid (Pure Black Inner Cards on Ash Container) */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between rounded-[22px] border border-white/[0.08] bg-black p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#0c0c0e] hover:-translate-y-0.5 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-medium uppercase tracking-wider ${card.badgeColor}`}>
                      {card.category}
                    </span>
                    <span className="font-mono text-xs font-semibold text-white/20">{card.id}</span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                    {card.title} <span className={card.highlightColor}>{card.titleHighlight}</span>
                  </h3>

                  <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
                    {card.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/5 pt-4 text-[12px] font-medium text-neutral-500">
                  {card.meta}
                </div>
              </motion.div>
            ))}

            {/* CARD 9: Flagship Journey Card (From Idea to Impact) */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative col-span-1 flex flex-col justify-between rounded-[22px] border border-white/[0.08] bg-black p-6 sm:p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#0c0c0e] hover:-translate-y-0.5 sm:col-span-2 lg:col-span-3 shadow-lg"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-amber-400">
                      Complete Lifecycle
                    </span>
                    <span className="font-mono text-xs font-semibold text-white/20">09</span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    From <span className="text-amber-400">Idea</span> to <span className="text-white">Impact</span>
                  </h3>

                  <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-neutral-400">
                    Experience the complete journey of understanding a problem, developing a solution, building a sustainable model, and presenting it for impact.
                  </p>
                </div>

                {/* Text-Only Stage Progression Path */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-neutral-400">
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-white">
                    01. Understand Problem
                  </span>
                  <span className="text-neutral-600">→</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-white">
                    02. Develop Solution
                  </span>
                  <span className="text-neutral-600">→</span>
                  <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-white">
                    03. Sustainable Model
                  </span>
                  <span className="text-neutral-600">→</span>
                  <span className="rounded-xl border border-amber-400/20 bg-amber-400/10 px-3.5 py-2 font-semibold text-amber-300">
                    04. Real Impact
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Apple-Style Bottom Callout Banner inside the Ash Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 sm:mt-12 text-center pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-2"
          >
            <div className="inline-flex items-center gap-2 text-base font-semibold text-white">
              <Sparkles className="h-4 w-4 text-sky-400" />
              <span>Engineers Without Borders • MLRIT</span>
            </div>
            <p className="text-sm text-neutral-400 max-w-xl">
              Equipping forward-thinking student innovators with speaking excellence and problem-solving mastery.
            </p>
            <a
              href="#tracks"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition group"
            >
              <span>Explore all competition tracks</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </motion.div>

        </div>
      </div>
    </Section>
  )
}




