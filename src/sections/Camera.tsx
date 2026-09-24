import { motion } from 'framer-motion'
import { Section } from '../components/ui/Section'

const milestones = [
  {
    step: '01',
    title: 'Orientation',
    description:
      'Expert address on public administration, social impact, civic responsibility & inclusive governance.',
  },
  {
    step: '02',
    title: 'Expression',
    description:
      'JAM sessions, thematic debates & guided group discussions.',
  },
  {
    step: '03',
    title: 'Debate Practice',
    description:
      'Structured debates and communication drills focused on logical reasoning and argument building.',
  },
  {
    step: '04',
    title: 'Day 1 Evaluation',
    description:
      'Assessment of communication, critical thinking, articulation, argument structure & confidence.',
  },
  {
    step: '05',
    title: 'Storytelling',
    description:
      'Expert-led session on storytelling, narrative building & impactful delivery.',
  },
  {
    step: '06',
    title: 'Final Assessment',
    description:
      'Final speeches/debates evaluated on clarity, confidence, structure, articulation, persuasion & overall impact.',
  },
]

export function Camera() {
  return (
    <Section id="camera" className="relative py-14 md:py-20 overflow-hidden bg-black text-white">
      {/* Background subtle ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-sky-500/[0.03] to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#38bdf8]">
            <span>🎤 Track 01</span>
            <span className="text-neutral-600">•</span>
            <span>Communication & Expression</span>
          </div>

          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-6xl md:text-7xl leading-[1.08]">
            Elocution.
          </h2>

          <p className="mt-5 text-[18px] sm:text-[20px] md:text-[22px] leading-[1.6] text-neutral-400 font-normal">
            A communication-focused track designed to develop{' '}
            <strong className="font-semibold text-white">
              public speaking, articulation, critical thinking, debate, storytelling, and persuasive communication
            </strong>
            .
          </p>
        </motion.div>

        {/* WHAT HAPPENS? */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 md:mt-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
            What Happens?
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-12 gap-y-7 sm:grid-cols-2">
            {milestones.map((m, i) => (
              <motion.div
                key={m.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-1.5"
              >
                <h4 className="font-display text-[19px] sm:text-[21px] font-semibold tracking-tight text-white">
                  {m.step} — {m.title}
                </h4>
                <p className="text-[15px] sm:text-[16px] leading-relaxed text-neutral-400">
                  {m.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="my-10 md:my-12 border-t border-white/10"
        />

        {/* WHAT YOU'LL DEVELOP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
            What You'll Develop
          </p>
          <p className="mt-3 text-[17px] sm:text-[19px] md:text-[20px] font-medium leading-relaxed text-white">
            Clarity • Confidence • Critical Thinking • Articulation • Logical Reasoning • Persuasive Speaking • Storytelling • Audience Engagement
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="my-10 md:my-12 border-t border-white/10"
        />

        {/* TRACK JOURNEY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-400">
            Track Journey
          </p>
          <p className="mt-3 text-[19px] sm:text-[22px] md:text-[24px] font-semibold tracking-tight text-white">
            Express <span className="text-neutral-500 font-normal">→</span> Discuss <span className="text-neutral-500 font-normal">→</span> Debate <span className="text-neutral-500 font-normal">→</span> Refine <span className="text-neutral-500 font-normal">→</span> Present
          </p>
        </motion.div>

      </div>
    </Section>
  )
}



