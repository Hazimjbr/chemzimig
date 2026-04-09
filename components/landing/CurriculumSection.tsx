"use client";

import Link from "next/link";

const curricula = [
  {
    level: "IGCSE",
    code: "0620",
    title: "O-Level Chemistry",
    description: "Complete Cambridge IGCSE Chemistry syllabus with 12 core topics covering fundamental concepts.",
    topics: [
      "States of Matter",
      "Atoms & Elements",
      "Stoichiometry",
      "Electrochemistry",
      "Chemical Energetics",
      "Chemical Reactions",
      "Acids, Bases & Salts",
      "The Periodic Table",
      "Metals",
      "Environment Chemistry",
      "Organic Chemistry",
      "Experimental Techniques",
    ],
    status: "active" as const,
    questions: "1,500+",
    color: "gold",
    gradient: "from-gold-600 to-gold-400",
  },
  {
    level: "AS-Level",
    code: "9701",
    title: "AS Chemistry",
    description: "Advanced Subsidiary level covering physical, inorganic, and organic chemistry in greater depth.",
    topics: [
      "Atoms & Bonding",
      "Amount of Substance",
      "Energetics & Equilibria",
      "Redox & Electrochemistry",
      "Organic Intro",
      "Analytical Techniques",
    ],
    status: "coming-soon" as const,
    questions: "Coming Soon",
    color: "teal",
    gradient: "from-teal-600 to-teal-400",
  },
  {
    level: "A-Level",
    code: "9701",
    title: "A2 Chemistry",
    description: "Full A-Level coverage including transition metals, organic synthesis pathways, and equilibria.",
    topics: [
      "Chemical Energetics II",
      "Electrochemistry II",
      "Equilibria II",
      "Reaction Kinetics",
      "Organic Chemistry II",
      "Analytical Chemistry",
    ],
    status: "coming-soon" as const,
    questions: "Coming Soon",
    color: "purple",
    gradient: "from-purple-600 to-purple-400",
  },
];

const statusStyles = {
  active: {
    badge: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    label: "Available Now",
  },
  "coming-soon": {
    badge: "bg-gold-500/10 text-gold-400 border-gold-500/20",
    label: "Coming Soon",
  },
};

export default function CurriculumSection() {
  return (
    <section className="relative py-24 lg:py-32" id="curriculum">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-gold-400 uppercase mb-4">
            Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-5">
            Cambridge <span className="text-gradient-gold">International</span>{" "}
            Syllabus
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Aligned with the official Cambridge Assessment International
            Education syllabi. Every question mapped to specific learning
            objectives.
          </p>
        </div>

        {/* Curriculum cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {curricula.map((curr, index) => {
            const status = statusStyles[curr.status];
            const isActive = curr.status === "active";

            return (
              <div
                key={index}
                className={`relative rounded-2xl border bg-navy-900/60 overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${
                  isActive
                    ? "border-gold-500/30 hover:border-gold-500/50 hover:shadow-2xl hover:shadow-gold-500/10"
                    : "border-border hover:border-border-bright"
                }`}
                id={`curriculum-card-${curr.level.toLowerCase()}`}
              >
                {/* Top gradient bar */}
                <div
                  className={`h-1 bg-gradient-to-r ${curr.gradient} ${
                    !isActive ? "opacity-30" : ""
                  }`}
                />

                <div className="p-7">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                          {curr.level}
                        </span>
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold border ${status.badge}`}
                        >
                          {status.label}
                        </span>
                      </div>
                      <p className="text-xs text-muted">
                        Cambridge {curr.code}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-white">
                        {curr.questions}
                      </div>
                      <div className="text-[10px] text-muted">questions</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {curr.description}
                  </p>

                  {/* Topics */}
                  <div className="mb-6">
                    <p className="text-xs font-medium text-white/70 mb-3 uppercase tracking-wider">
                      Topics Covered
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {curr.topics.map((topic) => (
                        <span
                          key={topic}
                          className={`inline-block px-2.5 py-1 rounded-lg text-[11px] border ${
                            isActive
                              ? "bg-navy-800/80 border-border text-muted"
                              : "bg-navy-800/40 border-border/50 text-muted/60"
                          }`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  {isActive ? (
                    <Link
                      href="/login"
                      className={`block w-full text-center py-3 rounded-xl bg-gradient-to-r ${curr.gradient} text-navy-950 font-semibold text-sm hover:opacity-90 transition-opacity`}
                    >
                      Start Practicing
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="block w-full text-center py-3 rounded-xl border border-border text-muted text-sm cursor-not-allowed"
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
