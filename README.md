# 🧪 ChemZim — Master IGCSE & A-Level Chemistry

The ultimate chemistry learning platform for Cambridge IGCSE and A-Level students. Built with a "Security-First" architecture and premium interactive UI, ChemZim brings the proven pedagogical engine of the ChemZimJO project to an international audience.

---

## 🛠️ Technical Architecture

ChemZim is built for speed, security, and scientific precision.

### 🔐 Deep Security (Server-Dominated Sovereignty)
- **Firebase Admin SDK:** All data interactions (Firestore) are handled exclusively on the server. Client-side SDKs are restricted to authentication, ensuring 100% data integrity.
- **Lockdown Mode:** Firestore security rules are set to block direct client access, preventing any unauthorized manipulation.
- **NextAuth Integration:** Secure session management with HTTP-only cookies and robust middleware protection.

### 🗂️ Scalable Multi-Board Curriculum Registry
- **Dynamic Track Loading:** Structured to support international exam boards (`cie-igcse` for Cambridge IGCSE 0620, `cie-alevel` for AS/A-Level 9701, and `edexcel-alevel` for Pearson Edexcel IAL Chemistry XCH11/YCH11) with dynamic registries for modular lessons, exams, and difficulty levels.
- **Granular Lesson Tree:** Maps 56 unique lessons for CIE tracks and 22 lessons (across 6 units) for Edexcel, matching standard curriculum specifications.
- **Security & Authorization Middleware:** Integrated route protection for `edexcel-alevel` and automated student track redirection during login based on registered grades.


### ⚙️ Build & Deployment Stability
- **TypeScript Compliance:** Cleaned registry code structure (resolving duplicate entries and merge remnants in lesson trees) and decoupled context calls (connecting quiz events directly to `useGamification` for XP processing), ensuring consistent build success and type check compliance on cloud deployment engines.
- **Local Module Declarations:** Added custom type definitions for untyped modules (`canvas-confetti`, `react-katex`) in the local `types/` registry to guarantee immediate TypeScript type check resolution on remote deployment platforms (Vercel) without depending on package manager paths.

### 📝 Smart Exam Engine
- **Bloom's Taxonomy Levels:** Questions organized into 3 difficulty levels (Retrieve, Apply, Analyze).
- **Grouped Randomization:** Questions sharing a scientific context (diagrams, tables) are presented together as a cohesive unit.
- **Scientific Rendering:** Full **KaTeX** support for chemistry notation and a custom **SmartText** engine for flawless mixed-content rendering.

### 🚀 Premium Interactive UX
- **3D Molecular Visualization:** Interactive atomic models using **React Three Fiber**.
- **Modern Aesthetics:** Glassmorphism, NeonGlow accents, and ultra-smooth transitions using **Framer Motion**.
- **Mobile First & Orientation Aware:** Responsive charts, tables, sidebar navigation, and a floating toolbar. Includes a custom orientation-aware Casio Scientific Calculator that automatically splits into a dual-column layout on mobile landscape screens.
- **Interactive Chemistry Calculator:** Floating toolbar widget offering stoichiometric calculations for Moles ($n = m / Mr$), Concentration, Dilutions ($C_1V_1 = C_2V_2$), Percentage Yield, Atom Economy, Uncertainty (accounting for readings count), and pH/pOH.
- **Interactive Lesson Player:** Slide-by-slide learning dashboard with sidebar step navigation, linear progress indicator, and confetti completion celebration.
- **Full-Screen Immersive Layout:** Dynamic layout that automatically hides the main dashboard sidebar and header in lesson view to provide a distraction-free study environment.
- **Interactive Study Tools:** Text-to-Speech (TTS) audio-reading assistant, chemical equation reaction animator, persistent localStorage-based study notes, and a **Project-Wide Parentheses Formatting Rule** with a custom React NOWRAP parser wrapper that automatically ensures numbers, chemical symbols (e.g. `(NaCl).`), and units (e.g. `(g mol⁻¹).`) at the end of sentences are wrapped in parentheses and never split across lines.

---

## 💻 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Database/Auth:** Firebase (Admin SDK) + NextAuth.js
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Scientific Tools:** KaTeX, React Katex
- **Visualization:** Three.js / React Three Fiber

---

## 📂 Project Structure

```
ChemZim/
├── app/                    # Next.js App Router (Auth, Dashboard, Exams)
├── components/             # UI Components (Landing, Layout, Exam Engine)
├── contexts/               # Global state (AuthContext, GamificationContext)
├── data/                   # Curriculum data & Exam banks (TS Files)
├── lib/                    # Core logic (Firebase Admin, Utils, Algorithms)
├── hooks/                  # Custom React hooks (useAuth, useExam)
└── public/                 # Assets (3D models, Images)
```

---

## 🚀 Development

```bash
# Install dependencies
npm install

# Setup Environment Variables
# Create .env.local with FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, etc.

# Run development server
npm run dev
```

---

## ✨ Features

- 🎯 **Past Paper Mastery** — Topic-specific questions from official papers.
- 🏆 **Gamified Progress & Leaderboard** — XP, levels, daily streaks, and competitive standings with custom Weekly, Monthly, and Mad Scientist (accuracy-focused) filters.
- 📊 **Deep Analytics** — Comprehensive tracking of student performance.
- 🧪 **Interactive Lab** — Simulations, 3D atomic structures, a responsive Casio-style scientific calculator, and a premium **Chemistry Stoichiometric Calculator** widget in the assistant bar.
- 🗂️ **Spaced Repetition Mistakes Inbox** — Automatically logs and schedules incorrect quiz questions for future student review.
- 📖 **Interactive Lesson Player** — Premium slide-based player utilizing optimized full-height screen real-estate with independent sidebar/content scrolling columns, persistent header and sticky bottom navigation controls. Includes progress tracking, study notes recorder, text-to-speech engine, reaction animator, and confetti completion celebration.
- 🌐 **Multi-Board Curriculum Splits** — Fully separated tracks for CIE IGCSE, CIE AS, CIE A-Level, Edexcel IGCSE, Edexcel AS, and Edexcel A2 with URL-based active track preservation and direct clickable subtopic list navigation from the Library dashboard.
- 🔍 **Smart Question Auditor (Admin)** — Dedicated, English LTR admin dashboard tool for filtering, auditing, and inspecting all database questions (Exams and Quizzes) by curriculum, type, unit, lesson, difficulty, and creation date.
- 📝 **Dynamic Exam Designer (Student)** — Step-by-step interactive exam builder allowing students to customize their study sessions into Comprehensive, Unit-specific, Lesson-specific, or Custom exams with dynamic unit/lesson loading and gamified XP rewards. Includes exam-mode behavior where correct answers and explanations are hidden during gameplay and revealed only on final submission, as well as strict curriculum isolation based on the student's active track.
- 🏆 **Hybrid API Leaderboard** — Gamified standings populated by active students, with automatic backend mock-student fillers to ensure a complete podium (1st, 2nd, 3rd) and ranking lists in early-stage deployments.
- 🧮 **Pearson Edexcel Physics & Chemistry Constants** — Calculation engines fully adapted to Edexcel conventions, utilizing exact rounded constants (e.g. 273 Kelvin for absolute zero conversion instead of 273.15) to guarantee 100% alignment with official Pearson Mark Schemes.

---

## 👨‍💻 Author
**Hazem Jaber** — Chemistry Expert & Developer

---
<div align="center">
  <sub>Designed with precision for the next generation of scientists.</sub>
</div>
