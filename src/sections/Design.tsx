import { Section } from '../components/ui/Section'

export function Design() {
  return (
    <Section id="gains" className="relative py-24 md:py-36 overflow-hidden bg-black text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-blue-600/[0.04] via-purple-600/[0.03] to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Apple Pro Section Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-500">
            Key Takeaways
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08]">
            What Will You Gain?
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-center text-[17px] sm:text-[19px] md:text-[20px] leading-[1.55] text-neutral-400 font-normal">
            <strong className="font-semibold text-white">ELOQVENT 2K26</strong> is designed to help you build practical skills that go beyond the classroom through <strong className="font-semibold text-white">communication, critical thinking, innovation, and real-world problem solving</strong>.
          </p>
        </div>

        {/* Apple-Style Bento Grid (Pure Text & Context) */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* CARD 1: Stronger Communication */}
          <div className="group relative flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#161619] hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-sky-400">
                  Public Speaking
                </span>
                <span className="font-mono text-xs font-semibold text-white/20">01</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                Stronger <span className="text-sky-400">Communication</span>
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
                Build confidence in public speaking, articulation, storytelling, debate, and persuasive communication.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 text-[12px] font-medium text-neutral-500">
              Articulation • Storytelling • Debate • Persuasion
            </div>
          </div>

          {/* CARD 2: Critical Thinking */}
          <div className="group relative flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#161619] hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-purple-400">
                  Analytical Rigor
                </span>
                <span className="font-mono text-xs font-semibold text-white/20">02</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                Critical <span className="text-purple-400">Thinking</span>
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
                Learn to analyse challenges, structure your thoughts, question assumptions, and develop logical arguments.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 text-[12px] font-medium text-neutral-500">
              Structured Thoughts • Logical Arguments • Inquiry
            </div>
          </div>

          {/* CARD 3: Problem-Solving Skills */}
          <div className="group relative flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#161619] hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-amber-400">
                  Root Analysis
                </span>
                <span className="font-mono text-xs font-semibold text-white/20">03</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                Problem-Solving <span className="text-amber-400">Skills</span>
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
                Understand real-world problems, identify their root causes, and develop practical approaches to solving them.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 text-[12px] font-medium text-neutral-500">
              Root Causes • Practical Approaches • Impact
            </div>
          </div>

          {/* CARD 4: Innovation & Creativity */}
          <div className="group relative flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#161619] hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-yellow-400">
                  Design Thinking
                </span>
                <span className="font-mono text-xs font-semibold text-white/20">04</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                Innovation & <span className="text-yellow-400">Creativity</span>
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
                Explore Design Thinking and human-centred approaches to generate meaningful and innovative solutions.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 text-[12px] font-medium text-neutral-500">
              Human-Centred • Creative Frameworks • Novelty
            </div>
          </div>

          {/* CARD 5: Empathy & Collaboration */}
          <div className="group relative flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#161619] hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-emerald-400">
                  Team Synergy
                </span>
                <span className="font-mono text-xs font-semibold text-white/20">05</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                Empathy & <span className="text-emerald-400">Collaboration</span>
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
                Understand the needs of users and stakeholders while working with others to explore challenges and develop solutions.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 text-[12px] font-medium text-neutral-500">
              User Needs • Stakeholders • Cross-Disciplinary
            </div>
          </div>

          {/* CARD 6: Entrepreneurial Thinking */}
          <div className="group relative flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#161619] hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-rose-400">
                  Venture Viability
                </span>
                <span className="font-mono text-xs font-semibold text-white/20">06</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                Entrepreneurial <span className="text-rose-400">Thinking</span>
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
                Learn how to turn an idea into a viable initiative through value propositions, business models, feasibility, and sustainability.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 text-[12px] font-medium text-neutral-500">
              Value Propositions • Business Models • Feasibility
            </div>
          </div>

          {/* CARD 7: Social Impact & Sustainability */}
          <div className="group relative flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#161619] hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-green-400">
                  17 UN SDGs
                </span>
                <span className="font-mono text-xs font-semibold text-white/20">07</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                Social Impact & <span className="text-green-400">Sustainability</span>
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
                Explore SDG-driven approaches and understand how ideas and solutions can create measurable social impact.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 text-[12px] font-medium text-neutral-500">
              SDG Framework • Measurable Impact • Longevity
            </div>
          </div>

          {/* CARD 8: Presentation & Pitching */}
          <div className="group relative flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#161619] hover:-translate-y-0.5">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-blue-400">
                  Executive Defense
                </span>
                <span className="font-mono text-xs font-semibold text-white/20">08</span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-white">
                Presentation & <span className="text-blue-400">Pitching</span>
              </h3>

              <p className="mt-3 text-[14px] leading-relaxed text-neutral-400">
                Learn how to communicate your ideas effectively, defend your thinking, and present solutions before an expert evaluation panel.
              </p>
            </div>

            <div className="mt-8 border-t border-white/5 pt-4 text-[12px] font-medium text-neutral-500">
              Expert Panel • Idea Defense • Clear Delivery
            </div>
          </div>

          {/* CARD 9: Flagship Journey Card (From Idea to Impact) */}
          <div className="group relative col-span-1 flex flex-col justify-between rounded-[26px] border border-white/[0.08] bg-[#121214] p-7 transition-all duration-300 hover:border-white/20 hover:bg-[#161619] hover:-translate-y-0.5 sm:col-span-2 lg:col-span-3">
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
          </div>

        </div>
      </div>
    </Section>
  )
}



