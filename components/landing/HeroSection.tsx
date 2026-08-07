"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import LoginModal from "@/components/auth/LoginModal";
import { Stethoscope, Sparkles, BookOpen, Trophy, ArrowRight, Shield } from "lucide-react";
import { useEffect } from "react";

export default function HeroSection() {
  const { isAuthenticated } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"chemistry" | "dental">("chemistry");

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("active_specialty", activeTab);
    window.dispatchEvent(new Event("specialty-change"));
  }, [activeTab]);

  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
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

        {/* Floating Background Icons */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {activeTab === "chemistry" ? (
            <>
              {/* Benzene ring */}
              <div className="absolute top-[15%] right-[15%] animate-float opacity-20">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <polygon points="40,10 70,25 70,55 40,70 10,55 10,25" stroke="var(--color-gold-400)" strokeWidth="1" />
                  <polygon points="40,20 58,30 58,50 40,60 22,50 22,30" stroke="var(--color-gold-400)" strokeWidth="0.5" />
                </svg>
              </div>

              {/* Atom */}
              <div className="absolute bottom-[20%] left-[10%] animate-float-slow opacity-15">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="4" fill="var(--color-teal-400)" />
                  <ellipse cx="50" cy="50" rx="40" ry="15" stroke="var(--color-teal-400)" strokeWidth="0.8" />
                  <ellipse cx="50" cy="50" rx="40" ry="15" stroke="var(--color-teal-400)" strokeWidth="0.8" transform="rotate(60 50 50)" />
                  <ellipse cx="50" cy="50" rx="40" ry="15" stroke="var(--color-teal-400)" strokeWidth="0.8" transform="rotate(-60 50 50)" />
                </svg>
              </div>
            </>
          ) : (
            <>
              {/* Floating Tooth / Dental Icons */}
              <div className="absolute top-[15%] right-[15%] animate-float opacity-20 text-indigo-400">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {/* Outer Crown outline with 4 distinct cusps */}
                  <path d="M25 35 C 25 22, 35 20, 50 25 C 65 20, 75 22, 75 35 C 75 52, 70 65, 65 72 C 60 78, 62 88, 60 92 C 58 92, 54 85, 50 78 C 46 85, 42 92, 40 92 C 38 88, 40 78, 35 72 C 30 65, 25 52, 25 35 Z" />
                  {/* Fissures/lines on the occlusal/crown surface */}
                  <path d="M35 38 C 45 42, 55 42, 65 38" />
                  <path d="M50 25 L 50 48" />
                </svg>
              </div>
              <div className="absolute bottom-[20%] left-[10%] animate-float-slow opacity-15 text-teal-400">
                <svg width="90" height="90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M25 35 C 25 22, 35 20, 50 25 C 65 20, 75 22, 75 35 C 75 52, 70 65, 65 72 C 60 78, 62 88, 60 92 C 58 92, 54 85, 50 78 C 46 85, 42 92, 40 92 C 38 88, 40 78, 35 72 C 30 65, 25 52, 25 35 Z" />
                  <path d="M35 38 C 45 42, 55 42, 65 38" />
                  <path d="M50 25 L 50 48" />
                </svg>
              </div>
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
          
          {/* 1. Tab Switcher (Interactive Pill) */}
          <div className="inline-flex p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-4 animate-fade-in-up">
            <button
              onClick={() => setActiveTab("chemistry")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "chemistry"
                  ? "bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ⚗️ Chemistry Academy
            </button>
            <button
              onClick={() => setActiveTab("dental")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "dental"
                  ? "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              🦷 Dental Prep Portal
            </button>
          </div>

          {/* Heading & Intro */}
          {activeTab === "chemistry" ? (
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight leading-[1.1] mb-4">
                <span className="text-white">Master Chemistry</span>
                <br />
                <span className="text-gradient-hero">The Smart Way</span>
              </h1>
              <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Practice with real past paper questions from international exam boards, track your progress with gamified learning, and conquer Chemistry.
              </p>
            </div>
          ) : (
            <div className="animate-fade-in-up">
              <h1 className="text-4xl sm:text-6xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight leading-[1.1] mb-4">
                <span className="text-white">Master Dental MCQs</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">Professional Prep</span> 🦷
              </h1>
              <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Practice 911 clinical questions for MFDs, MJDF, ORE, and Board Exams with detailed Master Dentistry textbook references.
              </p>
            </div>
          )}

          {/* 2. Dual Path Cards (Dual Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            
            {/* Card 1: Chemistry Path */}
            <div 
              onClick={() => setActiveTab("chemistry")}
              className={`group cursor-pointer rounded-2xl p-6 text-left border transition-all duration-300 backdrop-blur-xl flex flex-col justify-between ${
                activeTab === "chemistry"
                  ? "bg-gold-950/20 border-gold-500/40 shadow-xl shadow-gold-500/5 scale-[1.02]"
                  : "bg-surface/40 border-border hover:border-gold-500/20 hover:bg-surface/60"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">⚗️</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/20">
                    High School
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                  Chemistry Curriculum
                </h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  CIE IGCSE, AS/A-Level, and Edexcel syllabus alignment. Includes diagnostic tests, syllabus notes, and progress levels.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-semibold">12+ curriculum modules</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-gold-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Path</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Card 2: Dental Path */}
            <div 
              onClick={() => setActiveTab("dental")}
              className={`group cursor-pointer rounded-2xl p-6 text-left border transition-all duration-300 backdrop-blur-xl flex flex-col justify-between ${
                activeTab === "dental"
                  ? "bg-indigo-950/20 border-indigo-500/40 shadow-xl shadow-indigo-500/5 scale-[1.02]"
                  : "bg-surface/40 border-border hover:border-indigo-500/20 hover:bg-surface/60"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">🦷</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Professional
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  Dental Board Exam MCQs
                </h3>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  911 ORE, MJDF, MFDs preparation questions. Features timed exam simulators, custom study modes, and weak-area analysis.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-semibold">911 clinical questions</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Path</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {isAuthenticated ? (
              <Link
                href={activeTab === "chemistry" ? "/dashboard" : "/dashboard/dental"}
                className={`group px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer ${
                  activeTab === "chemistry"
                    ? "bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 shadow-xl shadow-gold-500/25"
                    : "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-xl shadow-indigo-500/25"
                }`}
              >
                Go to {activeTab === "chemistry" ? "Chemistry Dashboard" : "Dental Prep Portal"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className={`group px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer ${
                  activeTab === "chemistry"
                    ? "bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 shadow-xl shadow-gold-500/25"
                    : "bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-xl shadow-indigo-500/25"
                }`}
              >
                Start Practicing Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
