"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      id="hero-section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/8 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/8 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-navy-700/20 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Chemistry Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Benzene ring */}
        <div className="absolute top-[15%] right-[15%] animate-float opacity-20">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <polygon
              points="40,10 70,25 70,55 40,70 10,55 10,25"
              stroke="var(--color-gold-400)"
              strokeWidth="1"
              fill="none"
            />
            <polygon
              points="40,20 58,30 58,50 40,60 22,50 22,30"
              stroke="var(--color-gold-400)"
              strokeWidth="0.5"
              fill="none"
            />
          </svg>
        </div>

        {/* Atom */}
        <div className="absolute bottom-[20%] left-[10%] animate-float-slow opacity-15">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="4" fill="var(--color-teal-400)" />
            <ellipse
              cx="50"
              cy="50"
              rx="40"
              ry="15"
              stroke="var(--color-teal-400)"
              strokeWidth="0.8"
              fill="none"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="40"
              ry="15"
              stroke="var(--color-teal-400)"
              strokeWidth="0.8"
              fill="none"
              transform="rotate(60 50 50)"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="40"
              ry="15"
              stroke="var(--color-teal-400)"
              strokeWidth="0.8"
              fill="none"
              transform="rotate(-60 50 50)"
            />
          </svg>
        </div>

        {/* H2O molecule */}
        <div className="absolute top-[30%] left-[8%] animate-float opacity-15" style={{ animationDelay: "2s" }}>
          <svg width="70" height="50" viewBox="0 0 70 50" fill="none">
            <circle cx="35" cy="15" r="8" stroke="var(--color-gold-300)" strokeWidth="0.8" fill="none" />
            <circle cx="15" cy="38" r="6" stroke="var(--color-teal-300)" strokeWidth="0.8" fill="none" />
            <circle cx="55" cy="38" r="6" stroke="var(--color-teal-300)" strokeWidth="0.8" fill="none" />
            <line x1="30" y1="22" x2="19" y2="33" stroke="var(--color-muted)" strokeWidth="0.5" />
            <line x1="40" y1="22" x2="51" y2="33" stroke="var(--color-muted)" strokeWidth="0.5" />
            <text x="32" y="18" fill="var(--color-gold-300)" fontSize="7" fontFamily="monospace">O</text>
            <text x="12" y="41" fill="var(--color-teal-300)" fontSize="6" fontFamily="monospace">H</text>
            <text x="52" y="41" fill="var(--color-teal-300)" fontSize="6" fontFamily="monospace">H</text>
          </svg>
        </div>

        {/* Periodic table element */}
        <div className="absolute bottom-[25%] right-[8%] animate-float-slow opacity-20" style={{ animationDelay: "1s" }}>
          <div className="w-16 h-20 rounded border border-gold-500/30 flex flex-col items-center justify-center gap-0.5 bg-gold-500/5">
            <span className="text-[8px] text-gold-400/60">79</span>
            <span className="text-lg font-bold text-gold-400/80 font-[family-name:var(--font-space-grotesk)]">Au</span>
            <span className="text-[7px] text-gold-400/40">Gold</span>
          </div>
        </div>

        {/* Flask */}
        <div className="absolute top-[55%] right-[25%] animate-float opacity-10" style={{ animationDelay: "3s" }}>
          <svg width="50" height="70" viewBox="0 0 50 70" fill="none">
            <path d="M18 5L18 25L5 55L5 62L45 62L45 55L32 25L32 5" stroke="var(--color-teal-400)" strokeWidth="0.8" fill="none" />
            <line x1="15" y1="5" x2="35" y2="5" stroke="var(--color-teal-400)" strokeWidth="0.8" />
            <path d="M10 48L40 48" stroke="var(--color-teal-400)" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-gold-500/20 mb-8 animate-fade-in-up">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium text-gold-300">
            Cambridge IGCSE & A-Level Chemistry
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight leading-[1.1] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="text-white">Master Chemistry</span>
          <br />
          <span className="text-gradient-hero">The Smart Way</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Practice with real Cambridge past paper questions, track your progress
          with gamified learning, and conquer every topic from Stoichiometry to
          Organic Chemistry.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <Link
            href="/dashboard/curriculum"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-semibold text-base shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            id="hero-cta-primary"
          >
            Start Practicing Now
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M3 8H13M13 8L9 4M13 8L9 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <a
            href="#features"
            className="px-8 py-4 rounded-xl border border-border hover:border-border-bright text-muted hover:text-white font-medium text-base transition-all duration-300 hover:bg-white/[0.03]"
            id="hero-cta-secondary"
          >
            Explore Features
          </a>
        </div>

        {/* Quick Stats */}
        <div
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { value: "1,500+", label: "Practice Questions" },
            { value: "12", label: "IGCSE Topics" },
            { value: "Free", label: "To Get Started" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-space-grotesk)]">
                {stat.value}
              </div>
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
