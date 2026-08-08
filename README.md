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
- **Offline XP Sync (WAL Queue):** Client-side XP is synced atomically with Firestore using server-side transaction validators and a local Write-Ahead Log (WAL) queue to ensure offline resilience and prevent double-claiming of points. Includes an admin-account fallback framework (Silent Failure) that returns safe status codes instead of throwing 500 error crashes when a logged-in administrator lacks a corresponding document in the Firestore `students` collection.
- **Defensive Profile Updates (Fix API 500 & Admin Safe Bypass):** Converted strict Firestore `.update()` calls to safe `.set(..., { merge: true })` inside the profile update API. Added an explicit bypass check for logged-in administrators (`session.isAdmin`) to prevent creating empty/incomplete student document records in the Firestore `students` collection when administrators modify their profiles. This eliminates console warnings regarding duplicate React child keys and keeps the student management grid completely secure and clean.
- **Automated Copy-Asset Protection:** Completely removed deprecated and insecure file replication paths (`/api/copy-asset`) to prevent unauthorized access.

### 🗂️ Scalable Multi-Board Curriculum Registry
- **Dynamic Track Loading:** Structured to support international exam boards (`cie-igcse` for Cambridge IGCSE 0620, `cie-as` for Cambridge AS-Level 9701, `cie-alevel` for AS/A-Level 9701, and `edexcel-alevel` for Pearson Edexcel IAL Chemistry XCH11/YCH11) with dynamic registries for modular lessons, exams, and difficulty levels. Includes automated suffix resolution (`-20260106`) during registry lookups to ensure flawless route-to-data mapping, robust fallback track matching, and unified Unit Title resolution inside the Admin Question Auditor dashboard.
- **Consistent Edexcel Title Formatting:** Updated Unit 3/5/6 title logic to eliminate duplicate "Unit X" text and ensure consistent display:
  - Unit 3: "Unit 3 Practical: AS Laboratory Skills"
  - Unit 5 Topic 20: "Unit 5 - Topic 20: Transition Metals & Organic Nitrogen Chemistry"
  - Unit 6: "Unit 6 Practical: A2 Practical Skills and Techniques"
- **Granular Lesson Tree & Syllabus Alignment:** Maps 56 unique lessons for CIE tracks and 21 lessons (across 6 units) for Edexcel, aligned 100% with the official Pearson Edexcel IAL syllabus (Topics 11 to 20). Fully completed interactive curricula for:
  - **Edexcel Unit 1 Topic 1:** Formulae, Equations and Amount of Substance.
  - **Edexcel Unit 1 Topic 5: Alkenes:** Added Worked Example 8 on drawing three repeating units of poly(propene) with proper extension bonds and brackets, alongside nickel-catalyzed margarine production applications.
  - **Edexcel Unit 4 Topics 11-15:** Kinetics (fully restructured Lesson 1 "Rate Equations & Reaction Orders" with 6 comprehensive parts and 14 solved worked examples including Compound P decomposition graph analysis, 3-reactant Bromate rates tables, Ethanal+HCN mechanism evaluation, $2\text{H}_2+2\text{NO}$ pre-equilibrium derivation, Chlorine dissociation and pseudo-first-order kinetics, 4-step HBr oxidation intermediates cancellation, homogeneous catalyst quantity recycling, and tetraethyl lead catalytic converter poisoning; and resolved KaTeX-Markdown rendering conflicts, double-escaping backslashes, and box nesting for all Kinetics examples), Entropy & Energetics (Lesson 2 fully standardized across 7 interactive parts with an inline SVG hydration diagram `ion_hydration.svg`, 5 detailed worked examples in `[!EXAMPLE]` and `[!TIP]` containers, and a 30-question comprehensive quiz covering all syllabus statements with bullet-pointed explanations), Chemical Equilibria (Lesson 3 fully completed across 7 interactive parts including Kc, Kp, Reaction Quotient Q vs K, Le Chatelier's Principle, Temperature Effects on K with an **Autocatalysis S-Curve SVG** (sigmoidal concentration-time diagram with ①②③ phase labels and Mn²⁺/MnO₄⁻ chemistry example ported from Topic 11 with unique SVG marker IDs to prevent conflicts), and **Entropy & Equilibrium Constants** — the final part linking $\Delta S^\theta_{\text{total}} = R \ln K$ to equilibrium position, thermodynamic feasibility vs. kinetic stability with a custom SVG energy profile diagram, 3 fully solved Edexcel-style worked examples covering $K$ from $\Delta S$, equilibrium temperature calculation from $K_p$, and $\Delta H$ derivation from entropy data, with a **40-question comprehensive quiz** covering Kc/Kp mechanics, entropy–K relationships, and past paper calculations; updated with mathematically accurate symmetrical temperature dependency graphs and precise Bezier curve dot pointers), Acid-Base Equilibria (Lesson 4 — **35-question quiz** covering Brønsted-Lowry, Ka/pKa/Kw calculations, titration curves & indicators, buffer solutions, Henderson-Hasselbalch, and pKa determination; **redesigned 4-panel pH Titration Curves SVG** with accurate S-shaped Bezier curves, full pH 0–14 labeled y-axis, volume 0–50 cm³ labeled x-axis, red dashed equivalence-point cross-hairs, Phenolphthalein & Methyl Orange indicator bands on Strong/Strong panel, mathematically correct equivalence pH values for all 4 curve types, and optimized text contrast/legibility by increasing all font sizes to 11 or higher; fixed `Expected ident` build error in lesson-4 index.ts; fully standardized Worked Example 1 and Worked Example 2 in separate styled `[!EXAMPLE]` and `[!TIP]` boxes with perfectly formatted questions and step-by-step solutions, eliminating nested blockquote lines; extracted titration curves SVG into modular top-level template literals to fix top-level blockquote splitting bugs; updated page engine to support blockquote line preservation for inline SVGs; added **Worked Example 3** covering experimental $K_a$ determination from pH titration curves (half-equivalence point) and diprotic acid neutralization stoichiometry; expanded **Worked Example 10** into two parts covering (a) Acid in Excess and (b) Base in Excess mixtures; inserted a new **Worked Example 11** for strong acid and strong base Dilution Calculations; escaped all LaTeX formatting with quadruple backslashes inside the Dibasic Acid box, water pH temperature dependence box, and strong bases box; added 3 new flashcards to the Topic 4 Active Recall Warm-Up covering Ka calculation, half-equivalence method, and titration buffer action; integrated the dynamic `equationVisualizer` for liquid ammonia self-dissociation inside the Buffer Solutions card; and updated Key Study Points for all lesson parts to match these enhancements), and Carbonyls & Chirality.
  - **Edexcel Unit 5 Topic 20:** Modern Analytical Techniques II (TLC, GC-MS, HRMS, NMR principles, 13C NMR, Low & High-Res 1H NMR splitting) with 7 parts and 27 questions.
  - **Exam Practice Banks:** Fully integrated (42 new MCQs) with topic tagging, lesson-number filtering, and unicode-safe KaTeX rendering. Added 4 new kinetics exam questions covering clock reaction approximation validity, thermodynamic feasibility (Gibbs free energy) vs. kinetic stability (Ea), acid-catalyzed mechanism rate laws, and Arrhenius pre-exponential factor units.

- **Security & Authorization Middleware:** Integrated route protection for `edexcel-alevel` and automated student track redirection during login based on registered grades.
- **Empty-State UI Safeguards:** Integrated safety layout checks in client components (such as `CurriculumView`) to gracefully display warning panels instead of causing Next.js runtime exceptions if no matched curriculum is found. Includes mobile-responsive List View optimization preventing overflow bugs.


### ⚙️ Build & Deployment Stability
- **Parser Stability & Safety Borders:** Wrapped custom `SmartText` parser rendering pipeline in protective `try-catch` blocks, guaranteeing that complex formatting exceptions fallback gracefully to raw text instead of causing app-wide React crashes.
- **TypeScript Compliance:** Cleaned registry code structure (resolving duplicate entries and merge remnants in lesson trees) and decoupled context calls (connecting quiz events directly to `useGamification` for XP processing), ensuring consistent build success and type check compliance on cloud deployment engines.
- **Local Module Declarations:** Added custom type definitions for untyped modules (`canvas-confetti`, `react-katex`) in the local `types/` registry to guarantee immediate TypeScript type check resolution on remote deployment platforms (Vercel) without depending on package manager paths.
- **Client-Side Hook Pre-rendering Isolation:** Configured Suspense boundary wrappers around the Admin sovereign dashboard components (`AdminPage` and `AdminLayout`) to isolate query search parameter hooks (`useSearchParams`) and guarantee clean static generation during Vercel Turbopack builds.
- **LaTeX Markdown Conflict Prevention:** Escaped chiral asterisks (`*`) in chemistry formulas using `\\ast`, resolved double-underscore bold conflicts (`__n` to `_n`), and replaced subscript braces with unicode subscripts (`C₁₇H₃₅`) to prevent markdown parsers from breaking KaTeX equations.

### 📝 Smart Exam Engine
- **Unified Lesson Quizzes:** Standardized all interactive lesson quizzes for Pearson Edexcel Unit 4 (Topics 11 to 15) to contain comprehensive questions per topic, fully covering all syllabus sub-topics with high-order past-paper style scenarios. **Added 9 new questions (total 29) to Unit 4 Topic 11 (Kinetics)** covering:
  - Autocatalysis (definition & sigmoidal curve shape)
  - Experimental techniques (colorimetry, mass loss, quenching)
  - Second-order kinetics (half-life trends)
  - Catalyst poisoning & promoters
  - Arrhenius pre-exponential factor (A)
- **Consistent Explanation Formatting:** Removed bullet points from quiz explanations for consistency (Rule 15 still applies to explanation clarity).
- **Sovereign Rule on Explanations:** Establishes a project-wide formatting standard (Rule 15) ensuring all exam/quiz explanations are consistently written as bullet points on separate lines for maximal student clarity.
- **Graphical Exam Questions:** Integrated a detailed, dark-themed concentration-time SVG decay curve for the decomposition of N₂O₅ utilizing the base64 `[INLINE_SVG:]` token engine. Created 4 linked exam questions evaluating successive half-lives, order of reaction, first-order rate constant calculations, and initial rate of reaction calculations at a specific concentration.
- **Exam & Quiz Session Persistence:** Integrated `sessionStorage` session tracking that dynamically saves answers, progress index, and the randomized question list. Provides students with an interactive "Resume Quiz" dialog upon page refresh or temporary disconnection.
- **Programmatic Options Shuffling:** Implemented a React client-side shuffling system using `useMemo` and the Fisher-Yates algorithm. Automatically randomizes the choices (A, B, C, D) for each question upon loading the quiz to remove layout answer bias (such as clustering of correct answers on B or C).
- **Interactive Quiz Option KaTeX Rendering & Bidi Layout Fix:** Integrated KaTeX rendering wrapper `renderTextWithMath` directly into quiz option buttons, allowing isotopes, ionic charges, and mathematical expressions to render properly. Locked option rendering directionality to LTR (`dir="ltr" text-left`) and disabled CSS Flex wrappers on text nodes, preventing complex inline chemistry/math expressions from triggering bidi scrambling or wrapping text into scrambled columns.
- **Bloom's Taxonomy Levels:** Questions organized into 3 difficulty levels (Retrieve, Apply, Analyze).
- **Grouped Randomization:** Questions sharing a scientific context (diagrams, tables) are presented together as a cohesive unit.
- **Scientific Rendering:** Full **KaTeX** support for chemistry notation and a custom **SmartText** engine for flawless mixed-content rendering.

### 🚀 Premium Interactive UX & Gamification Hub
- **Student Command Center:** Smart daily dashboard header rendering real-time Level progress, XP counters, active Daily Streaks (🔥), recommended next lesson quick-resume buttons, and live Micro-Practice Chemistry Challenges (+50 XP).
- **3D Curriculum Journey:** Interactive unit cards featuring 3D Tilt perspective physics (`framer-motion`), neon hover glows, and complete scrollable lesson listings.
- **Centralized Virtual Chemistry Lab Hub (`components/visual/`):** Reusable interactive laboratory simulation components decoupled from curriculum registries:
  - `TitrationSimulator.tsx`: Real-time acid-base titration canvas simulation with dynamic pH curve calculation, burette liquid fill levels, indicator color transition mechanics (Phenolphthalein colorless to pink), and equivalence point alerts.
  - `GasLawSimulator.tsx`, `MassSpecSimulator.tsx`, `AvogadroScale.tsx`, `EquationAnimator.tsx`.
- **Examiner Eye & Interactive Marking Schemes (`StructuredQuestionCard.tsx`):** Paper 4 / Structured Theory questions with interactive self-grading checkboxes, key phrase highlighting (`[+1 mark]`), and official Cambridge/Edexcel examiner warning panels (`Examiner Eye 👁️`).
- **3D Active Recall Flashcards Deck (`FlashcardsDeck.tsx`):** Interactive 3D flip card engine integrated as a warm-up phase in quiz slides, featuring dynamic topic header titles (`Topic X Active Recall Warm-Up 🃏`) and a comprehensive 103-card dataset covering all 5 topics of Edexcel AS Chemistry Unit 1 (Formulae & Stoichiometry, Atomic Structure, Bonding & Structure, Organic Chemistry & Alkanes, Alkenes) and A2 Chemistry Unit 4 (Kinetics, Entropy & Energetics, Chemical Equilibria, Acid-Base, Carbonyls & Chirality) alongside IGCSE datasets.
  - *Responsive Layout:* Container height is locked to `h-[260px] md:h-[280px]` with flex-shrink constraints and scrollable dot indicators to prevent horizontal overflow and card clipping on medium/small tablet containers.
  - *Onboarding Tip:* Interactive tutorial banner with a Lightbulb toggle icon in the deck header and a dismiss X button storing `localStorage` preference so instructions stay closed by default but accessible to students when needed.
- **Viewport-Aware Canvas Optimization:** Utilizes `IntersectionObserver` loops to automatically pause heavy simulator animation loops (such as `GasLawSimulator.tsx`, `AvogadroScale.tsx`, and `MassSpecSimulator.tsx`) when they scroll out of view, dramatically conserving client hardware resources. Loaded dynamically on-demand using Next.js lazy-loading dynamic imports (`{ ssr: false }`).
  - *Avogadro Scale responsive layout:* Optimized column grids from `md:grid-cols-2` to `lg:grid-cols-2` to prevent layout squeezing when the sidebar is open on tablets/medium viewports, and added `max-w-[130px] sm:max-w-[160px] truncate` on the dropdown select menus to prevent container overflow.
- **Mobile Table Optimization:** Responsive Markdown/HTML table injection that automatically prevents font-shrinking on mobile layout by implementing custom `[CUSTOM_TABLE:]` token parsing within study blockquotes.
- **3D Molecular Visualization:** Interactive atomic models using a custom math-based 3D projection engine with depth-scaling/shading, drag-to-rotate interaction, auto-rotation, and play/pause controls.
- **Modern Aesthetics:** Glassmorphism, NeonGlow accents, and ultra-smooth transitions using **Framer Motion**.
- **Mobile First & Orientation Aware:** Responsive charts, tables, sidebar navigation, and a floating toolbar. Includes a custom orientation-aware Casio Scientific Calculator that automatically splits into a dual-column layout on mobile landscape screens.
- **Interactive Chemistry Calculator:** Floating toolbar widget offering stoichiometric calculations for Moles ($n = m / Mr$), Concentration, Dilutions ($C_1V_1 = C_2V_2$), Percentage Yield, Atom Economy, Uncertainty (accounting for readings count), and pH/pOH.
- **Interactive Lesson Player:** Slide-by-slide learning dashboard with sidebar step navigation, linear progress indicator, and confetti completion celebration.
- **Full-Screen Immersive Layout:** Dynamic layout that automatically hides the main dashboard sidebar and header in lesson view to provide a distraction-free study environment.
- **Interactive Study Tools:** Text-to-Speech (TTS) audio-reading assistant, chemical equation reaction animator, persistent localStorage-based study notes, and a **Project-Wide Parentheses Formatting Rule** with a custom React NOWRAP parser wrapper that automatically ensures numbers, chemical symbols (e.g. `(NaCl).`), and units (e.g. `(g mol⁻¹).`) at the end of sentences are wrapped in parentheses and never split across lines.
- **Inline SVG Asset Engine:** Support for embedding highly detailed, responsive SVG diagrams directly inside lesson registries via a safe `svgToken` URL-encoding helper, eliminating client-side `fs` bundler dependencies (successfully implemented in Edexcel A-Level Unit 1 Topic 2 Worked Example 3).
- **Interactive Mass Spectrometry Simulator:** A custom HTML Canvas-based interactive simulator demonstrating vaporisation, ionisation, acceleration, deflection (B-field strength slider), and detection stage physics. Scaled dynamically with `devicePixelRatio` to guarantee crisp high-DPI (Retina) text rendering without blurriness.
- **Visual Curriculum SVG Diagrams:** Integrated custom high-fidelity inline SVG illustrations directly into lesson registries for Cambridge IGCSE Topic 2 ("Atoms, Elements and Compounds") covering:
  - **Atomic Structure:** Diagram of nucleus (protons/neutrons) and energy level shells with orbiting electrons.
  - **Ionic Lattice stable state vs. Cleavage:** A 2-part comparative vector animation illustrating alternating grid attractions and impact cleavage.
  - **Macromolecules comparison board:** Side-by-side structures for Diamond, Graphite, and Silicon Dioxide (Quartz).
  - **Metallic Bonding model:** A giant regular cation lattice surrounded by a mobile, delocalised "sea" of electrons.
- **Interactive Security Dashboard & Admin Auditor Filters:** The administrator stats cards (Total Devices, Approved, Pending, Blocked) now serve as interactive, viewport-filtered buttons that instantly segment the student devices registry table by their current activation state. Integrated localized clear (X) buttons next to the "Date Added" and "Search / Filter" headers inside the Question Auditor dashboard to allow instant resetting of search queries and date filters independently.

---

## 💻 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Testing & QA:** Vitest, JSDOM, React Testing Library, Custom Content Linter & ID Checker
- **Database/Auth:** Firebase (Admin SDK) + NextAuth.js
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion, Lottie React
- **Scientific Tools:** KaTeX, React Katex
- **Visualization & Graphing:** Three.js / React Three Fiber, Recharts
- **Utilities & Export:** HTML2Canvas, Cheerio

---

## 📂 Project Structure

```
ChemZim/
├── app/                    # Next.js App Router (Auth, Dashboard, Exams)
│   ├── admin/             # Admin dashboard (Question Auditor, Students/Devices management)
│   ├── api/               # Server API routes (auth, devices, leaderboard, etc.)
│   ├── dashboard/         # Student dashboard (curriculum, lessons, quizzes, etc.)
│   └── login/             # Login page
├── components/             # UI Components (Landing, Layout, Exam Engine)
│   ├── assistant/         # Chemistry calculator, periodic table, etc.
│   ├── auth/              # Login modal
│   ├── gamification/      # Leaderboard, badges
│   ├── landing/           # Landing page sections
│   ├── layout/            # Header, footer
│   ├── ui/                # Reusable UI components (topic cards, etc.)
│   └── visual/            # Interactive visualizers (equation animator, gas simulator, etc.)
├── contexts/               # Global state (AuthContext, GamificationContext, ThemeContext)
├── data/                   # Curriculum data & Exam banks (TypeScript files)
│   ├── curriculum/        # Lesson registries for each track/unit/lesson
│   └── exams/             # Question bank & exam registry
├── lib/                    # Core logic (Firebase Admin, Utils, Algorithms)
├── public/                 # Assets (images, SVGs, etc.)
├── scripts/                # Utility scripts
├── types/                  # Type definitions for untyped packages
├── .gitignore
├── AGENTS.md
├── README.md
├── package.json
└── tsconfig.json
```

---

## 🚀 Development & Build Commands

### 📦 Dependencies Installation
```bash
# Install all dependencies
npm install
```

### 🛠️ Setup Environment Variables
Create a `.env.local` file in the project root with Firebase configuration:
- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `SESSION_SECRET`

### 🚀 Running & Testing Commands
```bash
# Start development server (runs on port 3001)
npm run dev

# Run Vitest automated unit test suite
npm test

# Run content & KaTeX syntax auditor
npm run lint:content

# Scan curriculum & exam banks for duplicate IDs
npm run check:duplicates

# Build for production
npm run build

# Start production server
npm start

# Run ESLint check
npm run lint
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
- 🦷 **Dentistry Board MCQs & Exam Simulator Module (Completed)** — Built a comprehensive prep platform for dental licensing exams (MFDs, MJDF, ORE, NDEB, INBDE) containing **1,340 high-yield clinical questions** (including **429 Master Extra** board-level scenario questions from Master Dentistry Vol. 1 & 2):
  - **Interactive Exam Review Mode & Score Share Card:** Added an interactive post-exam review mode with color-coded answers and detailed explanations, along with high-tech neon Score Share Cards exportable as PNG images (`html2canvas`).
  - **Category Diagnostics & Chapter Analytics:** Integrated category performance progress bars (Periodontics, Endodontics, Oral Surgery, Orthodontics, Prosthodontics, Paediatrics, Pharmacology) and dynamic chapter-by-chapter filtering for extracted Master Extra questions.
  - **Cloud Sync Integration:** Fully synchronized local student bookmarks and mistakes with Firestore in the background (`/api/dental/sync`) with automatic merge on login and boot.
  - **Admin Analytics Dashboard:** Integrated real-time dentistry metrics inside the Admin panel, calculating total dental students, active accounts, total XP, and bookmark/mistake counts.
  - **Topic-based / Chapter Filtering:** Enabled students to filter practice questions dynamically by specific book chapters (e.g. Master Dentistry Vol. 1, Ch. 10 Cysts, Ch. 11 Mucosal Diseases, Ch. 12 Oral Cancer, Ch. 13 Salivary, etc.) parsed directly from clinical explanations.
  - **Custom Quick Mock Exams:** Upgraded the simulator with custom presets (10, 20, 30, 50, 100 MCQs), custom time limits (including Untimed Study Mode), and chapter focus.
  - **Auto-Submit on Timeout:** Engineered a bulletproof countdown fallback that automatically submits the exam on time limit expiry, marking all unanswered questions as incorrect and routing them directly to the Mistakes Bank, with a clear results notification banner.
  - **Anatomical Dental Aesthetics & Branding:** Replaced general medical graphics with custom molar tooth and clinical floating SVGs (braces, handpiece drills, modern dental chairs). Replaced leftover stethoscope icons (`Stethoscope` / `🩺`) in the sidebar, dashboard headers, and category diagnostics with the molar tooth `🦷` for unified dentistry branding.
  - **Vercel Invite URL:** Updated the admin student credentials template to copy `https://chemzim.vercel.app/` directly for instant production login access.
  - **Inline Curriculum Editor:** Transformed the static curriculum tag in the Admin Panel student accounts list into an interactive dropdown select, allowing administrators to update any student's curriculum or upgrade them to the Dental Board instantly on Firestore via a secure API request (`update-grade`).
  - **Dynamic Session Re-Verification:** Modified `/api/auth/verify` to return the updated user document and updated the `checkStoredSession` logic in `AuthContext` to instantly synchronize state and `localStorage` with the latest server data on page refresh or window focus.
  - **Telegram Bot Publishing:** Integrated local-only extraction protection for new board MCQs while keeping core channel sync active.

- 🧪 **Dashboard Header Link:** Standardized the sidebar "ChemZim" logo in the student dashboard layout to navigate back to the landing page (`/`).
- 🤖 **AI-Agent Context Optimization (`AGENTS.md`)** — Documented workspace-specific rules, Scientific Constants, and Core TypeScript Schemas (Student, Device, LessonPart, Question) directly in the local rules configuration to enable zero-search, context-aware co-authoring for AI assistants.
- 🔬 **Interactive Mass Spectrometry & Spectrum Visualization** — Added a full Canvas simulator of mass spectrometers and embedded detailed, high-fidelity organic mass spectrum diagrams (with parent ion M, fragment peaks, and M+1 labels) using the custom inline SVG asset engine.
- 📐 **Collapsible Sidebar Layout Workspace** — Added a Chevron toggle button inside the lesson player header to completely hide/expand the sidebar (`aside`), giving students full screen real-estate for text content and interactive chemistry visualizers.
- 🧪 **Pearson Edexcel Unit 1 Lesson 5 (Alkenes) Theory & Quiz (Completed)** — Completed the theory structure for Alkenes (Unit 1 Lesson 5) including structure, $\sigma$/$\pi$ bonding, addition reactions, KMnO₄ cold diol oxidation, addition polymerisation table, and high-yield past paper worked examples. Added alkenes reactivity (weak $\pi$ bond) and complete/incomplete combustion pathways to Part 3, and integrated a premium, custom SVG electrophilic addition mechanism diagram showing Markovnikov's rule pathways (secondary vs primary carbocations) in Part 5. Fixed KaTeX mathematical notation backslash escaping and optimized multiple-choice option list formatting across all worked examples to prevent single-line rendering.
- 🎨 **Premium Light Mode & Theme System Architecture** — Engineered a complete theme-switching pipeline using a blocking header script to prevent Flash of Unthemed Content (FOUC). Defined semantic, dynamic CSS variables (`--theme-bg`, `--theme-fg`, etc.) mapping to Tailwind v4 color configurations. Replaced all legacy hardcoded dark layouts and colors across the Curriculum Syllabus view, lesson player slides, markdown blocks, callout components, and `LessonNotes` study area with clean, highly readable, theme-adaptive styles.
- 🔧 **KaTeX Rendering & Markdown Stability Fixes (Topic 15)** — Systematically audited and resolved all symbol rendering failures across all 5 parts of Unit 4 Topic 15 (Acid-Base Equilibria): corrected all 2-backslash `\\command` sequences to the required 4-backslash form in TypeScript template literals; replaced math-mode expressions inside Markdown table cells with Unicode characters (`×`, `⇌`, subscripts) since the Markdown parser strips backslashes inside table cells; removed all 22 raw `<br>` HTML tags (replacing with blank lines) since `react-markdown` renders unsupported raw HTML as literal escaped text without `rehype-raw`; fixed Henderson-Hasselbalch display equations and inline ratio formulas in Buffer Solutions and Ka from pH Curves parts.
- 📈 **Accurate pH Titration Curves SVG & Layout Repairs (Topic 14)** — Completely redesigned the 4-panel titration curves dashboard SVG in Unit 4 Lesson 4 (Acid-Base Equilibria) to match textbook precision: full y-axis labeled pH 0–14, full x-axis labeled 0–50 cm³, red dashed cross-hair lines meeting at the equivalence point, mathematically accurate S-shaped Bezier curves for all 4 titration types, and Phenolphthalein/Methyl Orange indicator bands. Cleaned up multiple `Expected ident` ECMAScript build errors, fixed worked example output leaks where step-by-step solutions would break out of the green `[!TIP]` containers, and systematically purged `ext` rendering artifacts by replacing problematic KaTeX `\text` instances with safe Unicode characters inside Parts 3, 4, and 5.


---

## 🔮 Future Development Roadmap (Under Study)

### 🤖 AI-Powered Short Answer & Explanation Grading
We are evaluating the integration of a Large Language Model (LLM) grading system to automatically assess and provide feedback on student-written explanation answers (which are currently manually reviewed or compared statically).
*   **Approach:** Utilizing lightweight, high-performance models (such as `Gemini 1.5 Flash` via server-side API calls) to evaluate student explanations against the official rubric/model answer.
*   **Key Capabilities:**
    *   **Semantic Understanding:** Moving beyond exact string matching to evaluate chemical concepts, allowing synonyms and ignoring minor non-conceptual spelling mistakes.
    *   **Chemistry-Specific Logic:** Differentiating critical scientific terms (e.g., exothermic vs. endothermic) where spelling is similar but meanings are opposite.
    *   **Contextual Feedback:** Generating structured JSON responses that include correctness (`isCorrect`), score, and a personalized chemistry-focused explanation detailing missing points (e.g., omitted catalysts, state symbols, or equilibrium shifts).
*   **Security & Resource Management:**
    *   Implementing server-side execution to keep API keys secure.
    *   Caching graded responses in Firebase to avoid redundant API consumption for identical submissions.
    *   Applying rate-limiting (e.g., max 2-3 grading attempts per student per question) and API quotas on Google Cloud to manage token costs.

---

## 👨‍💻 Author
**Hazem Jaber** — Chemistry Expert & Developer

---
<div align="center">
  <sub>Designed with precision for the next generation of scientists.</sub>
</div>
