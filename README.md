# 🧪 ChemZim — Master IGCSE & A-Level Chemistry

The ultimate chemistry learning platform for Cambridge IGCSE and A-Level students. Built with a "Security-First" architecture and premium interactive UI, ChemZim brings the proven pedagogical engine of the ChemZimJO project to an international audience.

---

## 🛠️ Technical Architecture

ChemZim is built for speed, security, and scientific precision.

### 🔐 Deep Security (Server-Dominated Sovereignty)
- **Firebase Admin SDK:** All data interactions (Firestore) are handled exclusively on the server. Client-side SDKs are restricted to authentication, ensuring 100% data integrity.
- **Lockdown Mode:** Firestore security rules are set to block direct client access, preventing any unauthorized manipulation.
- **NextAuth & Signed JWT Sessions:** Secure session management with HTTP-only cookies, robust middleware protection, signed HS256 JWT tokens, and resilient `SESSION_SECRET` fallback protection (guaranteeing continuous uptime even if environment variables are missing on cold start).
- **Resilient Mobile Device Fingerprinting & Approval Workflow:** Advanced hardware and browser fingerprinting in `lib/device-fingerprint.ts` featuring safe `webkitAudioContext` detection and canvas try-catch fallbacks to prevent mobile browser crashes. Paired with explicit admin device approval enforcement (`pending` status trigger managed directly from the `/admin` Security Requests tab).
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
- **Granular Lesson Tree & Syllabus Alignment:** Maps 56 unique lessons for CIE tracks and 22 lessons (across 6 units) for Edexcel, aligned 100% with the official Pearson Edexcel IAL syllabus (Topics 11 to 20). Fully completed interactive curricula for:
  - **Cambridge IGCSE Chemistry (CIE IGCSE 0620) Complete Curriculum & Exam Bank Overhaul:**
    - **Unit 1 (States of Matter):** Comprehensive lesson content with particle theory, heating/cooling curves, kinetic model, diffusion rates, worked examples in `[!EXAMPLE]` and `[!TIP]` boxes, and authentic exam bank questions.
    - **Unit 3 (Stoichiometry):** Full interactive stoichiometry coverage with valency crossover vector diagrams, mole conversion triangles ($n = m / Mr$, $V = n \times 24$, $n = c \times V$), titration stoichiometry steps, percentage yield and purity formulas, and authentic exam questions.
    - **Unit 4 (Electrochemistry):** Molten binary electrolyte decomposition ($PbBr_2$ animation), aqueous selective discharge decision tree SVG, brine electrolysis, dilute sulfuric acid 2:1 gas volume ratio, copper refining & electroplating mechanisms, alkaline hydrogen-oxygen fuel cell redox equations, and dedicated `ElectrolysisSimulator.tsx`.
    - **Unit 7 (Acids, Bases and Salts):** Full pH scale & indicators SVG (Thymolphthalein, Methyl Orange, Litmus), Brønsted-Lowry proton transfer, strong vs. weak acid conductivity comparisons, oxide classification tree SVG (basic, acidic, amphoteric $Al_2O_3/ZnO$, neutral $CO, NO, N_2O$), salt preparation flowchart SVG (excess insoluble base, titration, precipitation), and 19 authentic Cambridge exam questions.
    - **Unit 10 (Chemistry of the Environment):** Chemical water purity tests ($CuSO_4, CoCl_2$), 6-stage domestic water treatment pipeline SVG (screening, sedimentation, coagulation with $Fe_2(SO_4)_3$, filtration, chlorination, carbon adsorption), eutrophication mechanism, NPK fertilizers & ammonia displacement warnings, air composition pie SVG ($78\% N_2, 21\% O_2, 0.9\% Ar, 0.04\% CO_2$), atmospheric pollutants table, acid rain effects and Flue-Gas Desulfurisation (FGD) with $CaO$, carbon cycle, and vehicular catalytic converter reduction/oxidation SVG ($2CO + 2NO \rightarrow 2CO_2 + N_2$).
    - **Unit 11 (Organic Chemistry):** Complete 6-lesson syllabus architecture covering formulae, homologous series, and structural isomerism; IUPAC nomenclature and petroleum fractional distillation tower SVG; alkanes, combustion, UV photochemical substitution, and catalytic cracking; alkenes, addition reactions, and the aqueous bromine water test; alcohols, fermentation vs. catalytic hydration comparison, and clean fuels; carboxylic acids, weak acid reactions, esterification, addition & condensation polymerisation (Nylon, PET), and non-biodegradable plastic pollution. Added 16 new authentic Cambridge exam questions.
    - **Unit 12 (Experimental Techniques and Chemical Analysis):** Comprehensive 4-lesson overhaul covering lab apparatus (pipettes, burettes, measuring cylinders, gas syringes) with a dedicated SVG visualizer, divided flask gas collection method, Liebig condenser water direction, digital balance taring, titration practical rules (rinsing protocols, white tile, concordant titres $\pm 0.1\text{ cm}^3$, acid-base indicator colors); separation & purification methods (filtration, crystallisation, simple distillation, fractional distillation with fractionating column & glass beads, paper chromatography with $R_f$ formula, locating agents, and pencil baseline rules); qualitative analysis for 6 key gases ($CO_2, NH_3, Cl_2, H_2, O_2, SO_2$) with an inline SVG identification chart, chemical and physical tests for water ($CuSO_4, CoCl_2, 100^\circ\text{C}$ boiling point), cation/anion precipitation reactions (including $Pb(NO_3)_2$ alternative test, $AgX$ photochemical reduction to grey silver metal in sunlight), full flame test table (Li, Na, K, Rb, Cs, Ca, Sr, Ba, Cu), comprehensive salt solubility rules; thermal stability of carbonates; and planning an investigation framework (Paper 6 experimental design, independent/dependent/control variables, precision apparatus, and PPE/fume cupboard/water bath safety rules). Added 18 authentic Cambridge exam questions.
    - **Replaced all placeholder dummy questions** with real, syllabus-aligned exam questions across Units 1 to 12.
  - **Edexcel Unit 1 Topic 1: Formulae, Equations and Amount of Substance:** Fully completed interactive curriculum across 8 comprehensive parts with 50+ worked examples, SI conversion tables, Unicode-clean tables, and **11 new high-yield exam bank questions** (Level 1, 2, and 3) extracted and converted directly from Pearson Edexcel end-of-topic past paper scans (covering Avogadro calculations, solution molarities, percentage yields, atom economy, stoichiometry of azide gas decomposition, metal oxide reduction, and Group 2 metal identification).
  - **Edexcel Unit 1 Topic 5: Alkenes:** Added Worked Example 8 on drawing three repeating units of poly(propene) with proper extension bonds and brackets, alongside nickel-catalyzed margarine production applications.
  - **Edexcel Unit 4 Topics 11-15:** 
    - **Topic 11: Kinetics (Lesson 1 — Fully Standardized & Verified 100%):** Complete syllabus coverage across 6 interactive parts, 13 solved worked examples (including Compound P decomposition graph analysis, 3-reactant Bromate rates tables, Ethanal+HCN mechanism evaluation, $2\text{H}_2+2\text{NO}$ pre-equilibrium derivation, Chlorine dissociation and pseudo-first-order kinetics, 4-step HBr oxidation intermediates cancellation, homogeneous catalyst quantity recycling, tetraethyl lead catalytic converter poisoning, Arrhenius plot $E_a$ calculations, two-temperature $E_a$ math, pre-exponential $A$ constant derivation, exponential temperature analysis, and temperature prediction for rate doubling; cobalt(II) salt $\text{Co}^{2+}/\text{Co}^{3+}$ color changes, urease enzyme hydrolysis mechanism, and heterogenous catalyst adsorption/desorption stages). Includes 5 interactive kinetics simulators (`KineticsRatePlotter`, `MaxwellBoltzmannSimulator`, `ArrheniusSimulator`, `RateMechanismBuilder`, `DisappearingCrossSimulator`) and clean SVG visualizers (including dedicated 3-stage Heterogeneous Catalysis surface adsorption/reaction/desorption diagram).
    - **Topic 12: Entropy and Energetics (Lesson 2 — Fully Standardized & Verified 100%):** 7 comprehensive interactive parts covering system/surroundings/total entropy, Gibbs free energy ($\Delta G^\theta$), lattice enthalpy, Born-Haber cycles, enthalpy of solution/hydration, and Group 2 solubility trends. Standardized all KaTeX state subscripts and worked examples.
  - **Edexcel Unit 5 (WCH15) — Complete 5-Topic Restructuring & Exam Bank (240 Questions):** Fully partitioned Unit 5 into five standalone topics precisely mirroring the official Pearson Edexcel IAL syllabus:
    - **Lesson 1 (Topic 16: Redox Equilibria):** 40 exam questions covering standard electrode potentials, electrochemical cells, feasibility, and redox titrations.
    - **Lesson 2 (Topic 17: Transition Metals & Their Chemistry):** 40 exam questions covering electron configurations, ligand exchange, complex geometry, catalytic mechanisms, and oxidation state colors.
    - **Lesson 3 (Topic 18: Organic Chemistry – Arenes):** 40 exam questions dedicated to benzene structure/bonding, resonance stabilization (152 kJ/mol), electrophilic aromatic substitution, phenol chemistry, and directing effects.
    - **Lesson 4 (Topic 19: Organic Nitrogen Compounds: Amines, Amides, Amino Acids & Proteins):** 40 exam questions covering aliphatic/aromatic amines basicity, diazonium salts & azo dyes, amides, nylon polyamides, amino acids, zwitterions, and protein structure levels.
    - **Lesson 5 (Topic 20: Organic Synthesis & Modern Spectroscopy):** 80 exam questions covering Grignard carbon-chain extensions, retrosynthesis, Core Practical 16 (aspirin purification/melting point), TLC, HPLC, GLC, HRMS exact mass deduction, and 1H/13C NMR splitting analysis.
  - **Edexcel Unit 2:** 
    - **Lesson 5 (Topic 10 - Modern Analytical Techniques I):** Fully completed interactive curriculum across 17 comprehensive parts with a responsive SVG IR spectrum diagram, and a **100-question quiz** containing actual Edexcel exam questions covering primary/secondary/tertiary halogenoalkane classifications, C-Cl vs. C-Br hydrolysis bond enthalpy kinetics, preparation and purification steps (fume cupboards, $NaHCO_3$ neutralization, anhydrous $Na_2SO_4$ drying), percentage yield calculations, pentan-2-one vs. pentan-3-one fragmentation distinctions, and integrated structural determination.
    - **Lesson 6 (Mathematical Skills in Chemistry - NEW):** Fully implemented new maths skills curriculum across 4 parts covering standard form (Avogadro scale conversions), ratio simplifications, fraction operators, percentage multipliers/change, algebraic rearrangement, significant figures rules, and a **custom visual SVG concept map for mole formulas**. Includes worked examples (moles stoichiometry of potassium in water, potassium iodide dosing, and copper(II) chloride hydrated crystal yield using the "NAUTE" no-approximation rule) with a **16-question math quiz**.
  - **Edexcel Unit 6 (WCH16):** Lesson 1 covering A2 Practical Skills and Laboratory Techniques.

  - **Exam Practice Banks:** Fully integrated (**184 new MCQs**) with topic tagging, lesson-number filtering, and unicode-safe KaTeX rendering:
    - Added **80 new exam questions for Edexcel Unit 2** distributed as:
      - **20 new intermolecular forces questions** (Topic 7) covering dipole moments, hydrogen bonding, hydride boiling point trends, and solubility factors.
      - **20 new redox & groups questions** (Topic 8) covering flame tests, halogen electronegativities, nitrate thermal decompositions, and iron titrations.
      - **20 new kinetics & equilibria questions** (Topic 9) covering Maxwell-Boltzmann distribution, Kc units, inactive gas effect, and ICE calculations.
      - **20 new halogenoalkane & spectroscopy questions** (Topic 10) covering nucleophile definition, KCN substitution, sodium metal tests, IR/MS peaks, and isomeric dehydrations.
    - Added **40 new exam questions for Edexcel Unit 3** (Practical Skills) covering qualitative flame tests, halide/sulfate precipitability, uncertainty percentage calculations, standard solution quantitative transfers, calorimetry systematic errors, and melting range purity checks.
    - Added **20 new entropy exam questions** (Topic 12) covering entropy predictions, system/surroundings calculations, Gibbs feasibility, Born-Haber cycle math, polarization/covalent character, and solubility trends.
    - Added **3 new acid-base exam questions** (Topic 14, raising total to 20) covering conjugate acid-base pairs, buffer solution pH calculations, and titration curve buffer regions.
    - Added **3 kinetics exam questions** (Topic 11) covering clock reaction approximation validity, thermodynamic feasibility (Gibbs free energy) vs. kinetic stability (Ea), acid-catalyzed mechanism rate laws, and Arrhenius pre-exponential factor units.

- **Security & Authorization Middleware:** Integrated route protection for `edexcel-alevel` and automated student track redirection during login based on registered grades.
- **Empty-State UI Safeguards:** Integrated safety layout checks in client components (such as `CurriculumView`) to gracefully display warning panels instead of causing Next.js runtime exceptions if no matched curriculum is found. Includes mobile-responsive List View optimization preventing overflow bugs.


### ⚙️ Build & Deployment Stability
- **Parser Stability & Safety Borders:** Wrapped custom `SmartText` parser rendering pipeline in protective `try-catch` blocks, guaranteeing that complex formatting exceptions fallback gracefully to raw text instead of causing app-wide React crashes.
- **TypeScript Compliance:** Cleaned registry code structure (resolving duplicate entries and merge remnants in lesson trees) and decoupled context calls (connecting quiz events directly to `useGamification` for XP processing), ensuring consistent build success and type check compliance on cloud deployment engines.
- **Local Module Declarations:** Added custom type definitions for untyped modules (`canvas-confetti`, `react-katex`) in the local `types/` registry to guarantee immediate TypeScript type check resolution on remote deployment platforms (Vercel) without depending on package manager paths.
- **Client-Side Hook Pre-rendering Isolation:** Configured Suspense boundary wrappers around the Admin sovereign dashboard components (`AdminPage` and `AdminLayout`) to isolate query search parameter hooks (`useSearchParams`) and guarantee clean static generation during Vercel Turbopack builds.
- **LaTeX Markdown Conflict Prevention:** Escaped chiral asterisks (`*`) in chemistry formulas using `\\ast`, resolved double-underscore bold conflicts (`__n` to `_n`), and replaced subscript braces with unicode subscripts (`C₁₇H₃₅`) to prevent markdown parsers from breaking KaTeX equations.

### 📝 Smart Exam Engine & Adaptive Spaced Repetition (Leitner System)
- **Leitner Spaced Repetition System (⚡ Adaptive Review):** Built-in adaptive memory engine that tracks every question attempt across 5 progressive Leitner review boxes (1, 3, 7, 14, and 30-day review intervals). Mistakes are automatically routed to Box 1 for next-day review, while correct recall advances intervals towards permanent long-term mastery.
- **Smart Mistake Bank & 5-Way Question Filtering:** Exam Designer (`app/dashboard/quizzes/page.tsx`) features dynamic multi-state question filtering:
  - `⚡ Due Review`: Questions currently due for memory reinforcement today.
  - `❌ Mistakes`: Dedicated Mistake Bank for retrying all previously missed questions.
  - `🆕 Unseen`: Fresh questions never before attempted by the student.
  - `✅ Mastered`: Questions successfully solved and locked in long-term retention.
  - `🌐 All Questions`: Unfiltered comprehensive pool.
- **5 Multi-Style Exam Modes & Dynamic Board Terminology:** Step 1 in Exam Designer provides 5 customizable modes: **⚡ Spaced Review (Adaptive AI)**, **Comprehensive Exam**, **Unit Exam**, **Topic Exam** (dynamically rendered for Edexcel tracks matching Pearson Edexcel syllabus terminology / **Lesson Exam** for Cambridge), and **Custom Exam**. Features a balanced, symmetric 5-card grid layout across all device viewports.
- **Robust Versioned Curriculum Title Resolution:** Resolved curriculum ID lookup matching (`.startsWith('edexcel-a2')` / `.startsWith('edexcel-as')`) in `resolveUnitTitle` and dashboard hooks, ensuring timestamped IDs (e.g. `edexcel-a2-20260106`) resolve unit titles to match UI dropdown options (`"Unit 4: Rates, Equilibria & Further Organic"`), eliminating 0-question filter drops.
- **Clean Responsive Navigation & Transparent Sidebar Overlay:** Removed heavy background dimming/blur from mobile sidebar overlays in `app/dashboard/layout.tsx` and `app/admin/layout.tsx` for a clean view, integrated 1-click auto-close on navigation link clicks, and standardized top header layout to prevent content overlapping.
- **Student Dashboard Memory Hub Widget:** Features a live Leitner Memory Engine banner on the main dashboard (`app/dashboard/page.tsx`) showing real-time counters of questions due today with a 1-click **"Launch Smart Review"** CTA.
- **Unified Lesson Quizzes:** Standardized all interactive lesson quizzes for Pearson Edexcel Unit 4 (Topics 11 to 15) to contain comprehensive questions per topic, fully covering all syllabus sub-topics with high-order past-paper style scenarios.
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
- **Smart Worksheet Generator & PDF Exporter (`/dashboard/worksheet`):** Enables teachers and students to select 10, 20, 30, or 40 questions dynamically from Cambridge IGCSE or Pearson Edexcel question banks, customized by curriculum, unit, and difficulty level. Renders an official printable A4 exam layout with editable headers, auto-paging (`break-inside-avoid`), and an auto-generated official Mark Scheme appendix (`break-before-page`) complete with answer keys and bullet-pointed explanations, ready for 1-click printing via `window.print()`.
- **Full-Scale Mock Exam Simulator (`/dashboard/mock-exam`):** Recreates real exam conditions for Cambridge IGCSE (e.g. Paper 2: 40 questions, 45 mins) and Edexcel IAL with strict fullscreen mode, tab-switch anti-cheat violation strikes, interactive periodic table modal, dynamic question palette, and official grade boundaries evaluation (`A*-U` and `9-1`) with downloadable PNG performance certificates.
- **Student Command Center:** Smart daily dashboard header rendering real-time Level progress, XP counters, active Daily Streaks (🔥), recommended next lesson quick-resume buttons, and live Micro-Practice Chemistry Challenges (+50 XP).
- **3D Curriculum Journey:** Interactive unit cards featuring 3D Tilt perspective physics (`framer-motion`), neon hover glows, and complete scrollable lesson listings.
- **Centralized Virtual Chemistry Lab Hub (`components/visual/`):** Reusable interactive laboratory simulation components decoupled from curriculum registries:
  - `TitrationSimulator.tsx`: Real-time acid-base titration canvas simulation with dynamic pH curve calculation, burette liquid fill levels, indicator color transition mechanics (Phenolphthalein colorless to pink), and equivalence point alerts.
  - `GasLawSimulator.tsx`, `MassSpecSimulator.tsx`, `AvogadroScale.tsx`, `EquationAnimator.tsx`.
  - **Kinetics & Rate Simulators:**
    - `KineticsRatePlotter.tsx`: Concentration-time plotting simulator with custom reaction orders (Zero, First, Second) to visualize reaction rates.
    - `MaxwellBoltzmannSimulator.tsx`: Interactive energy distribution curves showing the effect of activation energy ($E_a$) and temperature adjustments.
    - `ArrheniusSimulator.tsx`: Graphical and exponential Arrhenius solver simulating rate constant ($k$), pre-exponential factor ($A$), and activation energy ($E_a$).
    - `RateMechanismBuilder.tsx`: Multi-step reaction mechanism designer with intermediate/catalyst cancellation and RDS rate law generation.
    - `DisappearingCrossSimulator.tsx`: Virtual lab simulation of the disappearing cross experiment (sodium thiosulfate and hydrochloric acid reaction).
- **Examiner Eye & Interactive Marking Schemes (`StructuredQuestionCard.tsx`):** Paper 4 / Structured Theory questions with interactive self-grading checkboxes, key phrase highlighting (`[+1 mark]`), and official Cambridge/Edexcel examiner warning panels (`Examiner Eye 👁️`).
- **3D Active Recall Flashcards Deck (`FlashcardsDeck.tsx`):** Interactive 3D flip card engine integrated as a warm-up phase in quiz slides, featuring dynamic topic header titles (`Topic X Active Recall Warm-Up 🃏`) and a comprehensive 103-card dataset covering all 5 topics of Edexcel AS Chemistry Unit 1 (Formulae & Stoichiometry, Atomic Structure, Bonding & Structure, Organic Chemistry & Alkanes, Alkenes) and A2 Chemistry Unit 4 (Kinetics, Entropy & Energetics, Chemical Equilibria, Acid-Base, Carbonyls & Chirality) alongside IGCSE datasets.
  - *Responsive Layout:* Container height is locked to `h-[260px] md:h-[280px]` with flex-shrink constraints and scrollable dot indicators to prevent horizontal overflow and card clipping on medium/small tablet containers.
  - *Onboarding Tip:* Interactive tutorial banner with a Lightbulb toggle icon in the deck header and a dismiss X button storing `localStorage` preference so instructions stay closed by default but accessible to students when needed.
- **Viewport-Aware Canvas Optimization:** Utilizes `IntersectionObserver` loops to automatically pause heavy simulator animation loops (such as `GasLawSimulator.tsx`, `AvogadroScale.tsx`, and `MassSpecSimulator.tsx`) when they scroll out of view, dramatically conserving client hardware resources. Loaded dynamically on-demand using Next.js lazy-loading dynamic imports (`{ ssr: false }`).
  - *Avogadro Scale responsive layout:* Optimized column grids from `md:grid-cols-2` to `lg:grid-cols-2` to prevent layout squeezing when the sidebar is open on tablets/medium viewports, and added `max-w-[130px] sm:max-w-[160px] truncate` on the dropdown select menus to prevent container overflow.
- **Mobile Table Optimization:** Responsive Markdown/HTML table injection that automatically prevents font-shrinking on mobile layout by implementing custom `[CUSTOM_TABLE:]` token parsing within study blockquotes.
- **3D Molecular Visualization:** Interactive atomic models using a custom math-based 3D projection engine with depth-scaling/shading, drag-to-rotate interaction, auto-rotation, and play/pause controls.
- **Gaming & Fantasy 3D Preset Avatars (Full 63 Preset Avatar Collection Integration:** Integrated a massive collection of 63 3D, Anime, Minecraft, Roblox, and Sci-Fi/Fantasy preset avatars in the student profile page (`app/dashboard/profile/page.tsx`) and synced with the leaderboard system (`app/api/leaderboard/route.ts`). Includes custom Minecraft girls with floating plasma orbs, crystal gems, and volcanic energy vortices.
- **Modern Aesthetics:** Glassmorphism, NeonGlow accents, and ultra-smooth transitions using **Framer Motion**.
- **Mobile First & Orientation Aware:** Responsive charts, tables, sidebar navigation, and a floating toolbar. Includes a custom orientation-aware Casio Scientific Calculator that automatically splits into a dual-column layout on mobile landscape screens.
- **Casio Scientific Calculator Engine & Real-Number Verification Suite:** Re-engineered the scientific calculator engine using a clean, scoped execution context (`...Math`, `fact`, `nPr`, `nCr`, `log`, `ln`, `sqrt`, `cbrt`, `abs`, `sin`, `cos`, `tan`, `asin`, `acos`, `atan`, `pi`, `π`, `e`). Added active visual glowing indicators (Amber for SHIFT, Rose for ALPHA), Mode setup toggle (`DEG` vs `RAD` mode with LCD `D`/`R` indicators), and connected Replay D-Pad controls (Up: `Ans` recall, Down: `AC` clear, Left: `DEL` backspace, Right: `)` parenthesis). Verified on real numbers via a comprehensive Vitest automated test suite (`__tests__/calculators.test.ts`).
- **Interactive Chemistry Calculator:** Floating toolbar widget offering stoichiometric calculations for Moles ($n = m / Mr$), Concentration, Dilutions ($C_1V_1 = C_2V_2$), Percentage Yield, Atom Economy, Uncertainty (accounting for readings count), Ideal Gas Law ($pV=nRT / pM=\rho RT$), and pH/pOH.
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
  - **Inline Glassmorphism Login Modal:** Added a sleek, modal-based login flow supporting student credentials authentication and an **Admin Login with Google** OAuth option directly on the landing page.
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

- 🎮 **Game-Themed Preset Avatars** — Integrated a beautiful selection of 13 custom gaming-themed preset avatars (Assassin, Netrunner, Valkyrie, Chibi, Neon DJ, Flame Lord, Ice Mage, Esports Pro, Athlete, Cyber Fox, Dragon Knight, Poison Alchemist, Royal Mage) plus scientific chemistry emojis, allowing students to personalize their profiles with rich game-like identities.
- 🧪 **Dashboard Header Link:** Standardized the sidebar "ChemZim" logo in the student dashboard layout to navigate back to the landing page (`/`).
- 🤖 **AI-Agent Context Optimization (`AGENTS.md`)** — Documented workspace-specific rules, Scientific Constants, and Core TypeScript Schemas (Student, Device, LessonPart, Question) directly in the local rules configuration to enable zero-search, context-aware co-authoring for AI assistants.
- 🔬 **Interactive Mass Spectrometry & Spectrum Visualization** — Added a full Canvas simulator of mass spectrometers and embedded detailed, high-fidelity organic mass spectrum diagrams (with parent ion M, fragment peaks, and M+1 labels) using the custom inline SVG asset engine.
- 📐 **Collapsible Sidebar Layout Workspace** — Added a Chevron toggle button inside the lesson player header to completely hide/expand the sidebar (`aside`), giving students full screen real-estate for text content and interactive chemistry visualizers.
- 🧪 **Pearson Edexcel Unit 1 Lesson 5 (Alkenes) Theory & Quiz (Completed)** — Completed the theory structure for Alkenes (Unit 1 Lesson 5) including structure, $\sigma$/$\pi$ bonding, addition reactions, KMnO₄ cold diol oxidation, addition polymerisation table, and high-yield past paper worked examples. Added alkenes reactivity (weak $\pi$ bond) and complete/incomplete combustion pathways to Part 3, and integrated a premium, custom SVG electrophilic addition mechanism diagram showing Markovnikov's rule pathways (secondary vs primary carbocations) in Part 5. Fixed KaTeX mathematical notation backslash escaping and optimized multiple-choice option list formatting across all worked examples to prevent single-line rendering.
- 🎨 **Premium Light Mode & Theme System Architecture** — Engineered a complete theme-switching pipeline using a blocking header script to prevent Flash of Unthemed Content (FOUC). Defined semantic, dynamic CSS variables (`--theme-bg`, `--theme-fg`, etc.) mapping to Tailwind v4 color configurations. Replaced all legacy hardcoded dark layouts and colors across the Curriculum Syllabus view, lesson player slides, markdown blocks, callout components, and `LessonNotes` study area with clean, highly readable, theme-adaptive styles.
- 🔧 **KaTeX Rendering & Markdown Stability Fixes (Topic 14)** — Systematically audited and resolved all symbol rendering failures across all 5 parts of Unit 4 Topic 14 (Acid-Base Equilibria): corrected all 2-backslash `\\command` sequences to the required 4-backslash form in TypeScript template literals; replaced math-mode expressions inside Markdown table cells with Unicode characters (`×`, `⇌`, subscripts) since the Markdown parser strips backslashes inside table cells; removed all 22 raw `<br>` HTML tags (replacing with blank lines) since `react-markdown` renders unsupported raw HTML as literal escaped text without `rehype-raw`; fixed Henderson-Hasselbalch display equations and inline ratio formulas in Buffer Solutions and Ka from pH Curves parts.
- 📈 **Accurate pH Titration Curves SVG & Layout Repairs (Topic 14)** — Completely redesigned the 4-panel titration curves dashboard SVG in Unit 4 Lesson 4 (Acid-Base Equilibria) to match textbook precision: full y-axis labeled pH 0–14, full x-axis labeled 0–50 cm³, red dashed cross-hair lines meeting at the equivalence point, mathematically accurate S-shaped Bezier curves for all 4 titration types, and Phenolphthalein/Methyl Orange indicator bands. Cleaned up multiple `Expected ident` ECMAScript build errors, fixed worked example output leaks where step-by-step solutions would break out of the green `[!TIP]` containers, and systematically purged `ext` rendering artifacts by replacing problematic KaTeX `\text` instances with safe Unicode characters inside Parts 3, 4, and 5.
- 🧪 **Pearson Edexcel Unit 4 Topic 15: Carbonyls, Carboxylic Acids and Chirality (Completed)** — Completed and audited the entire lesson content for Unit 4 Lesson 5 (Topic 15) to match textbook syllabus and visual notes. Added two new worked examples in Part 1 (Worked Example 3 on drawing 3D Enantiomers of Lactic Acid, and Worked Example 4 on identifying chiral centres in amino acids). Created and embedded a custom SVG diagram (`lacticAcidEnantiomersSvg`) showing 3D tetrahedral enantiomers reflecting across a mirror plane. Added a custom comparison SVG (`sn2StereochemistrySvg` / `sn1StereochemistrySvg`) detailing the stereochemical outcome of $S_N2$ (Walden Inversion) and $S_N1$ (planar carbocation, 50:50 attack, racemisation). Added Worked Example 3 in Part 4 explaining why the nucleophilic addition of HCN to ethanal produces an optically inactive racemic mixture. Corrected all degree symbols (`^\circ`) to superscript layout (`^{\\circ}`) and fixed LaTeX command double-backslash escaping in TS template literals. Resolved ECMAScript build errors from duplicate closing SVG tags.
- 🧪 **Pearson Edexcel Unit 4 Topic 15 Section 8: Chromatography & Spectroscopy (Completed)** — Integrated comprehensive Section 8 into Unit 4 Lesson 5, featuring Thin-Layer (TLC), Paper, and Column Chromatography, Retention Factor ($R_f$) calculations, Instrumental Chromatography (HPLC & GC), Combined Techniques (GC-MS & HPLC-MS), High-Resolution Mass Spectrometry (HRMS, measuring $M^+$ to 4+ decimal places), and NMR Spectroscopy Principles. Built 5 custom vector visualizer SVGs (`chromatographySvg`, `chromatogramRfDiagramSvg` with horizontal dimension lines, `hrmsSpectrumSvg` showing $m/z$ 44 peaks, `instrumentalChromatographySvg`, `nmrPrinciplesSvg`) and 13 sequentially numbered worked examples interleaved directly following their theoretical concepts.
- 🧮 **KaTeX & Chemistry Math Sanitizer (Auto-Sanitizer)** — Implemented a runtime stabilizer utility ([`lib/katex-sanitizer.ts`](file:///c:/Users/admin/Projects/chemzim/lib/katex-sanitizer.ts)) to automatically recover corrupted LaTeX escape sequences (e.g. `\t` -> `\text`, `\r` -> `\rightarrow`, `\r` -> `\rightleftharpoons`, `\f` -> `\frac`) and stripped text-form symbols (e.g. `approx` -> `\approx`, `times` -> `\times`) caused by JavaScript template literal compilation. Applies sanitizer protection to all math components in curriculum lessons, practice quizzes, question auditor, structured question cards, and active-recall flashcards.
- 📚 **Multi-Curriculum Student Enrollment (Multi-Track Access)** — Engineered a flexible multi-curriculum access architecture (`enrolledTracks: string[]`) allowing a single student account to enroll in and seamlessly access multiple international curricula simultaneously (e.g. Cambridge IGCSE + Edexcel AS Level). Includes backward compatibility fallbacks for existing single-grade accounts, interactive multi-select checkbox controls and "Select All" actions in the admin registration dashboard, an instant-edit modal for student curriculum permissions, and unified multi-track syllabus views.
- 📱 **Mobile-First Responsive SVG Architecture** — Redesigned all major chemistry mechanism and stereoisomerism SVG illustrations across Topic 5 (Alkenes) and Topic 3/4 from wide monolithic layouts into stacked, high-contrast, mobile-first responsive cards (`650px` viewBox standard). Features enlarged atomic text labels (14px–18px), prominent curly reaction arrows, clear carbocation stability comparisons ($3^\circ > 2^\circ > 1^\circ$), and crisp touch-friendly rendering across all mobile and tablet viewports.
- 🧪 **Chromatography & Spectroscopy Worked Examples Unicode Fixes** — Audited and corrected Worked Examples 5, 6, and 7 in Unit 4 Lesson 5 Part 8 (Chromatography & Spectroscopy) to use clean Unicode chemistry formulas (e.g. C₂H₈N₂, C₂H₄O₂, CH₃CHO, C₃H₈), avoiding raw LaTeX parser stripping and rendering issues.
- 📱 **Progressive Web App (PWA) Offline & Install Prompt** — Configured native PWA offline support with a caching service worker (`sw.js`) and metadata manifest (`manifest.json`). Engineered a custom React update banner (`ServiceWorkerRegistration.tsx`) and client-side PWA install prompt card (`InstallPrompt.tsx`) in English to request app install for instant, offline desktop and mobile access, matching the feature set of the Arabic deployment.


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
