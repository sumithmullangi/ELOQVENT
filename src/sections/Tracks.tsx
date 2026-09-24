import { motion } from 'framer-motion'
import { Section } from '../components/ui/Section'

export function Tracks() {
  return (
    <Section id="tracks" className="relative py-14 md:py-20 overflow-hidden bg-black text-white">
      {/* Background radial ambient lights */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-white/[0.03] to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Main Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
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
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="my-10 md:my-14 w-full border-t border-white/10"
        />

        {/* ELOQVENT IS ABOUT - THEORY */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              Core Philosophy
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              ELOQVENT is about
            </h3>
          </div>

          <div className="mt-6 space-y-5 text-[17px] sm:text-[19px] leading-[1.7] text-neutral-400 font-normal">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              At its foundation, <strong className="font-semibold text-white">ELOQVENT</strong> is driven by the conviction that transformative leadership begins with authentic <strong className="font-semibold text-sky-400">Expression</strong> and rigorous <strong className="font-semibold text-purple-400">Critical Thinking</strong>. It empowers individuals to articulate complex perspectives with poise and conviction, cultivating the discipline to challenge preconceptions, interrogate hypotheses, and deeply analyze the intricacies of modern challenges.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Moving past superficial symptoms, the philosophy emphasizes deep <strong className="font-semibold text-amber-400">Problem Discovery</strong>—the relentless inquiry into systemic roots and underlying realities. From these diagnostic insights stems breakthrough <strong className="font-semibold text-yellow-400">Innovation</strong>, bridging abstract theory with inventive, pragmatic solutions designed to address real-world friction.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              Ultimately, visionary ideas must deliver tangible <strong className="font-semibold text-green-400">Impact</strong> and manifest through sustainable <strong className="font-semibold text-rose-400">Entrepreneurship</strong>. ELOQVENT fosters initiatives engineered for long-term viability, ethical value, and social resonance, turning insight into enduring enterprises that shape tomorrow.
            </motion.p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="my-10 md:my-14 w-full border-t border-white/10"
        />

        {/* TWO TRACKS. ONE PURPOSE. */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">
              Event Structure
            </p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Two Tracks. One Purpose.
            </h3>
          </div>

          <div className="mt-6 space-y-5 text-[17px] sm:text-[19px] leading-[1.6] text-neutral-400">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <strong className="font-semibold text-[#38bdf8]">ELOCUTION</strong> — Develop the ability to{' '}
              <strong className="font-semibold text-white">communicate, articulate, debate, and defend ideas.</strong>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <strong className="font-semibold text-[#e5b877]">ROOT RIDDLES</strong> — Develop the ability to{' '}
              <strong className="font-semibold text-white">discover, design, develop, and pitch solutions to real-world challenges.</strong>
            </motion.p>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.85 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="my-10 md:my-14 w-full border-t border-white/10"
        />

        {/* Grand Vision Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-white">
            ELOQVENT 2K26 — Where Ideas Find Their Voice & Problems Find Their Solutions.
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
