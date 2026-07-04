# 🧪 ChemZim — Master IGCSE & A-Level Chemistry

The ultimate chemistry learning platform for Cambridge IGCSE and A-Level students. Built with a "Security-First" architecture and premium interactive UI, ChemZim brings the proven pedagogical engine of the ChemZimJO project to an international audience.

---

## 🛠️ Technical Architecture

ChemZim is built for speed, security, and scientific precision.

### 🔐 Deep Security (Server-Dominated Sovereignty)
- **Firebase Admin SDK:** All data interactions (Firestore) are handled exclusively on the server. Client-side SDKs are restricted to authentication, ensuring 100% data integrity.
- **Lockdown Mode:** Firestore security rules are set to block direct client access, preventing any unauthorized manipulation.
- **NextAuth & Signed JWT Sessions:** Secure session management with HTTP-only cookies, robust middleware protection, signed HS256 JWT tokens, and strict `SESSION_SECRET` fallback protection (automatically throws fatal errors to block execution if missing).
- **Atomic Operations & Transactions:** All critical device and student registration/status modifications (e.g. approve, block, register, delete) are run using Firestore transactions to prevent write conflicts and guarantee absolute state atomicity.
- **Offline XP Sync (WAL Queue):** Client-side XP is synced atomically with Firestore using server-side transaction validators and a local Write-Ahead Log (WAL) queue to ensure offline resilience and prevent double-claiming of points.
- **Automated Copy-Asset Protection:** Completely removed deprecated and insecure file replication paths (`/api/copy-asset`) to prevent unauthorized access.

### 🗂️ Scalable Multi-Board Curriculum Registry
- **Dynamic Track Loading:** Structured to support international exam boards (`cie-igcse` for Cambridge IGCSE 0620, `cie-as` for Cambridge AS-Level 9701, `cie-alevel` for AS/A-Level 9701, and `edexcel-alevel` for Pearson Edexcel IAL Chemistry XCH11/YCH11) with dynamic registries for modular lessons, exams, and difficulty levels. Includes automated suffix resolution (`-20260106`) during registry lookups to ensure flawless route-to-data mapping, and robust fallback track matching inside the curriculum page filter to prevent mismatched student tracks from throwing undefined errors.
- **Granular Lesson Tree:** Maps 56 unique lessons for CIE tracks and 22 lessons (across 6 units) for Edexcel. Pearson Edexcel Unit 1: Topic 1 ("Formulae, Equations and Amount of Substance") is fully completed as a state-of-the-art interactive curriculum featuring 10 slide-based parts, integrated chemical simulators (Avogadro scale, gas laws, reaction animator), and a comprehensive 30-question quiz covering all standard exam concepts.
- **Security & Authorization Middleware:** Integrated route protection for `edexcel-alevel` and automated student track redirection during login based on registered grades.
- **Empty-State UI Safeguards:** Integrated safety layout checks in client components (such as `CurriculumView`) to gracefully display warning panels instead of causing Next.js runtime exceptions if no matched curriculum is found.


### ⚙️ Build & Deployment Stability
- **Parser Stability & Safety Borders:** Wrapped custom `SmartText` parser rendering pipeline in protective `try-catch` blocks, guaranteeing that complex formatting exceptions fallback gracefully to raw text instead of causing app-wide React crashes.
- **TypeScript Compliance:** Cleaned registry code structure (resolving duplicate entries and merge remnants in lesson trees) and decoupled context calls (connecting quiz events directly to `useGamification` for XP processing), ensuring consistent build success and type check compliance on cloud deployment engines.
- **Local Module Declarations:** Added custom type definitions for untyped modules (`canvas-confetti`, `react-katex`) in the local `types/` registry to guarantee immediate TypeScript type check resolution on remote deployment platforms (Vercel) without depending on package manager paths.
- **Client-Side Hook Pre-rendering Isolation:** Configured Suspense boundary wrappers around the Admin sovereign dashboard components (`AdminPage` and `AdminLayout`) to isolate query search parameter hooks (`useSearchParams`) and guarantee clean static generation during Vercel Turbopack builds.

### 📝 Smart Exam Engine
- **Exam & Quiz Session Persistence:** Integrated `sessionStorage` session tracking that dynamically saves answers, progress index, and the randomized question list. Provides students with an interactive "Resume Quiz" dialog upon page refresh or temporary disconnection.
- **Programmatic Options Shuffling:** Implemented a React client-side shuffling system using `useMemo` and the Fisher-Yates algorithm. Automatically randomizes the choices (A, B, C, D) for each question upon loading the quiz to remove layout answer bias (such as clustering of correct answers on B or C).
- **Interactive Quiz Option KaTeX Rendering:** Integrated KaTeX rendering wrapper `renderTextWithMath` directly into quiz option buttons, allowing isotopes, ionic charges, and mathematical expressions to render properly.
- **Bloom's Taxonomy Levels:** Questions organized into 3 difficulty levels (Retrieve, Apply, Analyze).
- **Grouped Randomization:** Questions sharing a scientific context (diagrams, tables) are presented together as a cohesive unit.
- **Scientific Rendering:** Full **KaTeX** support for chemistry notation and a custom **SmartText** engine for flawless mixed-content rendering.

### 🚀 Premium Interactive UX
- **Viewport-Aware Canvas Optimization:** Utilizes `IntersectionObserver` loops to automatically pause heavy simulator animation loops (such as `GasLawSimulator.tsx`, `AvogadroScale.tsx`, and `MassSpecSimulator.tsx`) when they scroll out of view, dramatically conserving client hardware resources. Loaded dynamically on-demand using Next.js lazy-loading dynamic imports (`{ ssr: false }`).
- **Mobile Table Optimization:** Responsive Markdown/HTML table injection that automatically prevents font-shrinking on mobile layout by implementing custom `[CUSTOM_TABLE:]` token parsing within study blockquotes.
- **3D Molecular Visualization:** Interactive atomic models using **React Three Fiber**.
- **Modern Aesthetics:** Glassmorphism, NeonGlow accents, and ultra-smooth transitions using **Framer Motion**.
- **Mobile First & Orientation Aware:** Responsive charts, tables, sidebar navigation, and a floating toolbar. Includes a custom orientation-aware Casio Scientific Calculator that automatically splits into a dual-column layout on mobile landscape screens.
- **Interactive Chemistry Calculator:** Floating toolbar widget offering stoichiometric calculations for Moles ($n = m / Mr$), Concentration, Dilutions ($C_1V_1 = C_2V_2$), Percentage Yield, Atom Economy, Uncertainty (accounting for readings count), and pH/pOH.
- **Interactive Lesson Player:** Slide-by-slide learning dashboard with sidebar step navigation, linear progress indicator, and confetti completion celebration.
- **Full-Screen Immersive Layout:** Dynamic layout that automatically hides the main dashboard sidebar and header in lesson view to provide a distraction-free study environment.
- **Interactive Study Tools:** Text-to-Speech (TTS) audio-reading assistant, chemical equation reaction animator, persistent localStorage-based study notes, and a **Project-Wide Parentheses Formatting Rule** with a custom React NOWRAP parser wrapper that automatically ensures numbers, chemical symbols (e.g. `(NaCl).`), and units (e.g. `(g mol⁻¹).`) at the end of sentences are wrapped in parentheses and never split across lines.
- **Inline SVG Asset Engine:** Support for embedding highly detailed, responsive SVG diagrams directly inside lesson registries via a safe `svgToken` URL-encoding helper, eliminating client-side `fs` bundler dependencies (successfully implemented in Edexcel A-Level Unit 1 Topic 2 Worked Example 3).
- **Interactive Mass Spectrometry Simulator:** A custom HTML Canvas-based interactive simulator demonstrating vaporisation, ionisation, acceleration, deflection (B-field strength slider), and detection stage physics. Scaled dynamically with `devicePixelRatio` to guarantee crisp high-DPI (Retina) text rendering without blurriness.

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
- 📝 **Dynamic Exam Designer & Practice Focus (Student)** — Step-by-step interactive exam builder allowing students to customize their study sessions into Comprehensive, Unit-specific, Lesson-specific, or Custom exams with dynamic unit/lesson loading and gamified XP rewards. Features curriculum-specific isolation based on the active student's track (e.g. automatically mapping `edexcel-as` grades to modular units), a console-inspired visual card selector for Source Type (Mixed, Exams, Quizzes) and Difficulty Levels, and a **Smart Question Filtering** segmented control (Unanswered, Answered Incorrectly, Answered Correctly, All) displaying dynamic live counts with empty-state warnings. Exam-mode behavior hides correct answers and explanations during gameplay and saves attempts on final submission.
- 🏆 **Hybrid API Leaderboard** — Gamified standings populated by active students, with automatic backend mock-student fillers to ensure a complete podium (1st, 2nd, 3rd) and ranking lists in early-stage deployments.
- 🧮 **Pearson Edexcel Physics & Chemistry Constants** — Calculation engines fully adapted to Edexcel conventions, utilizing exact rounded constants (e.g. 273 Kelvin for absolute zero conversion instead of 273.15) to guarantee 100% alignment with official Pearson Mark Schemes.
- 🔒 **Sovereign Device Lockdown & Security Panel (Admin)** — Robust device-fingerprint matching system integrated directly with the student credentials database. Multi-device tracking blocks unauthorized logins and requests admin approval via a dedicated "Devices" tab in the Admin panel to approve, reject, or block devices.
- 👥 **Student Credentials Auto-Generation & Administrative Controls** — Streamlined student account creation process with automatic username and password generators, dynamic curriculum support across all 6 tracks, and a live administrative table to filter, search, activate/suspend, or delete registered student accounts.
- 📣 **Targeted Broadcast Announcements & Scheduling System** — Fully integrated notification system allowing administrators to target announcements to specific curriculum tracks (or all tracks) with custom urgency categories (Important, Update, Event, General). Includes native calendar-based start and end scheduling to automatically broadcast and expire alerts. Displayed on student dashboards as modern, color-coded, dismissible floating alert banners.
- ⚡ **Smart Paste Registration Auto-Fill (Admin)** — A intelligent one-click registration feature that parses student registration data from WhatsApp or Email messages, automatically maps details (Name, Email, Phone, Curriculum/Grade) and populates the registration form instantly. Includes a one-click copy template button to easily request the required details from students.
- 🎨 **Premium Landing Page UI/UX Redesign** — Transformed the landing page with highly polished design updates:
  - **Inline Glassmorphism Login Modal:** Added a sleek, modal-based login flow that authenticates users directly on the landing page, maintaining context.
  - **Smart Hero Redirection:** The "Start Practicing Now" button opens the login modal for guests and routes active students straight to their dashboard.
  - **Registered-Only Dropdown Switcher:** Restricted the header board switcher so that guests are prompted to log in, and registered students can only access their assigned track, with other tracks locked visually.
  - **Active Curriculum Card Interactivity:** Curriculum cards are display-only for guests, but dynamically unlock and show a clickable "Start Practicing" button for the student's registered track once logged in.
  - **Dynamic Live Question Counters:** Replaced static counts with real-time question sums calculated from both exam banks (`questionBank`) and lesson quizzes (`curriculumRegistry`).
  - **Premium Profile Dropdown:** Restructured the logged-in header CTA into a beautiful circular profile avatar menu containing the student's name, track, dashboard link, profile settings link, and a custom Sign Out button.
  - **Contact Admin Quick Actions:** Integrated direct WhatsApp and Telegram links in the invitation text to request account access.
  - **Features Consolidation:** Removed the duplicate Features section from the landing page and navigation menu to streamline content presentation.
  - **Curriculum Badge Redesign:** Updated the header badge to "Cambridge • Edexcel • AP • IB • EST & More" to represent current and upcoming international curriculum tracks.
  - **Premium Stats & Benefits Cards:** Refined the homepage statistics cards to showcase key benefits instead of redundant numbers, including "3,000+ Practice Questions (Covering all major boards)", "Instant Mark Schemes & Hints", "3 Difficulty Levels", and "100% Exam-Aligned".
- 🧪 **Dashboard Header Link:** Standardized the sidebar "ChemZim" logo in the student dashboard layout to navigate back to the landing page (`/`).
- 🤖 **AI-Agent Context Optimization (`AGENTS.md`)** — Documented workspace-specific rules, Scientific Constants, and Core TypeScript Schemas (Student, Device, LessonPart, Question) directly in the local rules configuration to enable zero-search, context-aware co-authoring for AI assistants.
- 🔬 **Interactive Mass Spectrometry & Spectrum Visualization** — Added a full Canvas simulator of mass spectrometers and embedded detailed, high-fidelity organic mass spectrum diagrams (with parent ion M, fragment peaks, and M+1 labels) using the custom inline SVG asset engine.
- 📐 **Collapsible Sidebar Layout Workspace** — Added a Chevron toggle button inside the lesson player header to completely hide/expand the sidebar (`aside`), giving students full screen real-estate for text content and interactive chemistry visualizers.
- 🧪 **Pearson Edexcel Unit 1 Lesson 5 (Alkenes) Theory & Quiz (Completed)** — Completed the theory structure for Alkenes (Unit 1 Lesson 5) including structure, $\sigma$/$\pi$ bonding, addition reactions, KMnO₄ cold diol oxidation, addition polymerisation table, and high-yield past paper worked examples. Added alkenes reactivity (weak $\pi$ bond) and complete/incomplete combustion pathways to Part 3, and integrated a premium, custom SVG electrophilic addition mechanism diagram showing Markovnikov's rule pathways (secondary vs primary carbocations) in Part 5. Fixed KaTeX mathematical notation backslash escaping and optimized multiple-choice option list formatting across all worked examples to prevent single-line rendering.
- 🎨 **Premium Light Mode & Theme System Architecture** — Engineered a complete theme-switching pipeline using a blocking header script to prevent Flash of Unthemed Content (FOUC). Defined semantic, dynamic CSS variables (`--theme-bg`, `--theme-fg`, etc.) mapping to Tailwind v4 color configurations. Replaced all legacy hardcoded dark layouts and colors across the Curriculum Syllabus view, lesson player slides, markdown blocks, callout components, and `LessonNotes` study area with clean, highly readable, theme-adaptive styles.

---

## 👨‍💻 Author
**Hazem Jaber** — Chemistry Expert & Developer

---
<div align="center">
  <sub>Designed with precision for the next generation of scientists.</sub>
</div>
