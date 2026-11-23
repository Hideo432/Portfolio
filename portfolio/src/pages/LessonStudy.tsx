import TitleComponent from "../components/Title";
import type { Theme } from "../types";

interface Props {
  theme: Theme;
}

const attributes = [
  "Natural conditions",
  "Clarity and openness of research",
  "Systematic research structure",
  "Precise recording of changes",
];

const cycle = [
  {
    number: "01",
    title: "Plan",
    description: "Design the lesson and define learning objectives.",
  },
  {
    number: "02",
    title: "Teach & Observe",
    description: "Conduct the lesson while observing student learning.",
  },
  {
    number: "03",
    title: "Reflect",
    description: "Analyze observations and discuss the outcomes.",
  },
  {
    number: "04",
    title: "Revise",
    description: "Improve the lesson based on collected evidence.",
  },
];

export default function LessonStudy({ theme }: Props) {
  return (
    <div className="relative w-full overflow-hidden pb-16">
      <TitleComponent theme={theme} title="Lesson Study" />

      <section className="mx-auto mt-8 max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-[28px] bg-[#f5f7f2] border border-[#e1e8df]">
          <div className="relative overflow-hidden bg-[#193d32] px-6 py-10 sm:px-10 sm:py-14 text-white">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -right-8 -top-12 h-56 w-56 rounded-full border border-white/10" />

            <div className="relative z-10 max-w-2xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-1 w-10 rounded-full bg-[#b9d0a5]" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c7d9bc]">
                  Collaborative teaching research
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-serif tracking-tight leading-[1.05]">
                LESSON
                <br />
                <span className="text-[#c6d8b7]">STUDY.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm sm:text-base leading-7 text-white/75">
                A collaborative process of planning, teaching, observing,
                reflecting, and improving classroom practice.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Research-based", "Collaborative", "Reflective"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs tracking-wide text-white/90"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8 space-y-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white p-6 sm:p-7 border border-[#e4e9e1]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eaf0e5] text-[#315b43] font-serif text-lg">
                    A
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#829181]">
                      Foundation
                    </p>
                    <h3 className="text-lg font-semibold text-[#23392e]">
                      Key Attributes
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {attributes.map((item, index) => (
                    <div key={item} className="flex gap-4 items-start">
                      <span className="text-sm font-medium text-[#8a9a85] pt-0.5">
                        0{index + 1}
                      </span>
                      <p className="text-sm leading-6 text-[#39483c]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#e5ecdf] p-6 sm:p-7 border border-[#d7e2d2]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d0dfc8] text-[#315b43]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      <path d="M12 3v18M3 12h18" />
                      <circle cx="12" cy="12" r="8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#829181]">
                      Intended outcomes
                    </p>
                    <h3 className="text-lg font-semibold text-[#23392e]">
                      Process Goals
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Reproductive",
                    "Creative",
                    "Emotional",
                    "Value-oriented",
                  ].map((goal, index) => (
                    <div
                      key={goal}
                      className="flex items-center justify-between rounded-xl bg-white/70 px-4 py-3"
                    >
                      <span className="text-sm font-medium text-[#35483a]">
                        {goal}
                      </span>
                      <span className="text-xs text-[#91a18d]">
                        0{index + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#193d32] p-6 sm:p-8 text-white">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#b9d0a5]">
                    Continuous improvement
                  </p>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-serif">
                    The Core Cycle
                  </h3>
                </div>
                <p className="max-w-xs text-sm leading-6 text-white/60">
                  A repeating cycle of inquiry, observation, and refinement.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {cycle.map((step, index) => (
                  <div
                    key={step.number}
                    className="relative rounded-xl border border-white/10 bg-white/[0.06] p-5 transition-colors hover:bg-white/[0.1]"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-serif text-[#b9d0a5]/80">
                        {step.number}
                      </span>
                      {index !== cycle.length - 1 && (
                        <span className="hidden xl:block text-[#b9d0a5]">
                          →
                        </span>
                      )}
                    </div>

                    <h4 className="font-semibold text-base">{step.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex justify-center">
                <div className="rounded-full border border-[#b9d0a5]/30 px-5 py-2 text-xs tracking-wide text-[#c7d9bc]">
                  Repeat · Evaluate · Improve
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="rounded-2xl bg-white border border-[#e4e9e1] p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-[#829181]">
                  Framework
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#23392e]">
                  Methodology Overview
                </h3>

                <div className="mt-4 border-l-2 border-[#a9c19d] pl-4">
                  <p className="text-sm leading-7 text-[#526052]">
                    A teacher-led professional development process using action
                    research to analyze, develop, and refine teaching practices.
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Action research", "Observation", "Reflection"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-[#f1f4ed] px-3 py-2 text-xs text-[#51634f]"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-2xl bg-[#f0eee5] border border-[#e4e0d2] p-6 sm:p-7">
                <p className="text-xs uppercase tracking-[0.18em] text-[#998f79]">
                  Practical requirements
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[#353c32]">
                  Considerations
                </h3>

                <div className="mt-5 space-y-3">
                  {[
                    "Time and scheduling demands",
                    "Requires open collaboration",
                    "Lesson-level support",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 items-start">
                      <span className="mt-1 h-2 w-2 rounded-full bg-[#879879] shrink-0" />
                      <p className="text-sm leading-6 text-[#5c5e50]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#dce6d7] p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#71816c]">
                  Historical background
                </p>
                <p className="mt-2 text-sm leading-6 text-[#35483a]">
                  Originated in Japan, formalized and popularized globally since
                  the 1970s.
                </p>
              </div>

              <div className="rounded-xl bg-[#e9e7de] p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-[#8a8779]">
                  Translation note
                </p>
                <p className="mt-2 text-sm leading-6 text-[#56574e]">
                  Makoto Yoshida translated the concept into English as “Lesson
                  Study” to describe the methodology.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 border-t border-[#dfe5dc] pt-5">
              <span className="text-xs tracking-wide text-[#879286]">
                EDUCATIONAL RESEARCH · TEACHER DEVELOPMENT
              </span>
              <span className="text-xs text-[#879286]">
                PLAN — TEACH — REFLECT — REVISE
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
