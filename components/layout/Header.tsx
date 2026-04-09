"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#curriculum", label: "Curriculum" },
    { href: "#stats", label: "Stats" },
    { href: "#tools", label: "Tools" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-bright shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" id="logo-link">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-500 to-teal-500 opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="relative z-10"
              >
                <path
                  d="M9 3L9 8L6 14L8 14L10 18L14 18L16 14L18 14L15 8L15 3"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="6" r="1" fill="white" opacity="0.8" />
                <circle cx="10" cy="12" r="0.8" fill="white" opacity="0.6" />
                <circle cx="14" cy="11" r="0.8" fill="white" opacity="0.6" />
              </svg>
            </div>
          </div>
          <span className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] tracking-tight">
            <span className="text-white">Chem</span>
            <span className="text-gradient-gold">Zim</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-white transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3" id="header-cta">
          <Link
            href="/login"
            className="px-5 py-2.5 text-sm text-muted hover:text-white transition-colors duration-300"
            id="login-btn"
          >
            Log In
          </Link>
          <Link
            href="/login"
            className="px-5 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 hover:from-gold-500 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-105"
            id="get-started-btn"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen
                  ? "rotate-45 translate-y-2"
                  : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                mobileMenuOpen
                  ? "-rotate-45 -translate-y-2"
                  : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-6 pb-6 pt-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <hr className="border-border" />
          <Link
            href="/login"
            className="text-center py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-500 text-navy-950 font-medium"
            id="mobile-get-started-btn"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </header>
  );
}
