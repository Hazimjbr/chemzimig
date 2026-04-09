"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 1500,
    suffix: "+",
    label: "Practice Questions",
    description: "Covering all IGCSE topics",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 3L9 8L6 14L8 14L10 18L14 18L16 14L18 14L15 8L15 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "gold",
  },
  {
    value: 12,
    suffix: "",
    label: "IGCSE Topics",
    description: "Full Cambridge 0620 syllabus",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "teal",
  },
  {
    value: 3,
    suffix: "",
    label: "Difficulty Levels",
    description: "Easy, Medium & Hard",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "purple",
  },
  {
    value: 100,
    suffix: "%",
    label: "Free Access",
    description: "No paywall, no limits",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: "emerald",
  },
];

const colorClasses: Record<string, string> = {
  gold: "text-gold-400 bg-gold-500/10 border-gold-500/20",
  teal: "text-teal-400 bg-teal-500/10 border-teal-500/20",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
};

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24 lg:py-32" id="stats">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 via-navy-800/30 to-navy-900/50" />
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(circle, rgba(212,168,67,0.3) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-teal-400 uppercase mb-4">
            By The Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-5">
            Built for <span className="text-gradient-teal">Results</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Everything you need to ace your Cambridge chemistry exams.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-navy-900/60 p-6 sm:p-8 text-center hover:border-border-bright transition-all duration-500 group"
              id={`stat-card-${index}`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg ${colorClasses[stat.color]} border flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>

              {/* Counter */}
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />

              {/* Label */}
              <div className="text-sm font-medium text-white mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-muted mt-1">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
