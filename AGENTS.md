<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Lesson Page & Design Standards

When creating or modifying lesson pages (`app/dashboard/curriculum/[curriculumId]/[topicId]/page.tsx` or fallback markdown views), you must follow these rules:

1. **Flexbox & Shrinking Prevention:**
   - To prevent interactive/visualizer components (such as `EquationAnimator`) from being compressed to zero height inside nested flex parent containers, **always** specify `flex-shrink-0` on their outermost element.
   
2. **Study Notes (`LessonNotes`):**
   - Every individual lesson part (excluding the `interactive-quiz` slide) must render a student notes section at the bottom of the scrollable container:
     ```tsx
     <LessonNotes lessonId={`${curriculumId}-${topicId}-lesson-${currentLessonNum}`} />
     ```
   
3. **Scrollable Layout Structure:**
   - The active lesson slide content area must use a nested flex structure to allow independent columns scrolling:
     ```html
     Parent (flex-1 flex flex-col overflow-hidden min-h-0) ->
       Scrollable Container (flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6) ->
         Visualizers & Slide Content & LessonNotes
     ```
   - Do not set fixed heights or block scrolling on parent containers; let the `overflow-y-auto` container handle the height and scrolling naturally.

4. **Stoichiometry & Reaction Animations:**
   - Any lesson part discussing chemical equations, stoichiometry, or reactions should declare a dynamic `equationVisualizer` property on its data object inside the lesson registry (rather than hardcoding visualizers in `page.tsx`).
   - Example configuration in `LessonPart`:
     ```ts
     equationVisualizer: {
         reactants: [['ReactantFormula', '#colorHex']],
         products: [['ProductFormula', '#colorHex']],
         description: "A description of the reaction stoichiometry."
     }
     ```

5. **Worked Examples Formatting & Callout Boxes:**
   - Every worked example in the lesson content MUST be wrapped inside a `[!EXAMPLE]` callout box.
   - The question text should be directly under the header:
     ```markdown
     > [!EXAMPLE]
     > #### 📝 Worked Example X: [Title]
     > **Question:** [Question description]
     ```
   - The step-by-step solution MUST be nested inside a `[!TIP]` callout box inside the outer blockquote, starting with a key emoji:
     ```markdown
     > > [!TIP]
     > > **🔑 Step-by-step Solution:**
     > > 
     > > 1. **Step Title:**
     ```
   - Do NOT write or duplicate labels like `TIP` or `WARNING` or `NOTE` before the solution header, as the rendering engine automatically styles them and hides redundant labels when it detects the `step-by-step solution` phrase.
   - **Box Separation & Nesting Prevention:** To prevent a worked example box from being nested inside a preceding `[!BOX]` or explanation card, you MUST close the prior blockquote by inserting a completely blank line (without any leading `>` character) before starting the next `> [!EXAMPLE]` box. Any line containing a `>` character (even a blank one like `> `) will merge the containers together.

6. **Callout Containers & Styling Guidelines (`[!NOTE]`, `[!TIP]`, `[!IMPORTANT]`, `[!WARNING]`, `[!CAUTION]`, `[!BOX]`):**
   - The rendering engine supports six custom container types mapped to semantic styling classes:
     - `[!NOTE]` / `[!BOX]`: Blue theme (`bg-blue-500/10 border-blue-500/20`) - for core chemistry concepts, elements, and data lists.
     - `[!TIP]`: Emerald/Green theme (`bg-emerald-500/10 border-emerald-500/20`) - for practical tips, species classification, or step-by-step solutions.
     - `[!IMPORTANT]`: Indigo theme (`bg-indigo-500/10 border-indigo-500/20`) - for formulas, mathematical relations, and critical definitions.
     - `[!WARNING]`: Amber/Orange theme (`bg-amber-500/10 border-amber-500/20`) - for common pitfalls, mistakes to avoid, and safety advice.
     - `[!CAUTION]`: Rose/Red theme (`bg-rose-500/10 border-rose-500/20`) - for dangerous reactions, hazards, or critical exam alerts.
   - **Horizontal Overflow Protection:** The rendering engine applies `overflow-x-auto w-full` to custom callout boxes. This ensures that any long equations, step-by-step solutions, or math expressions can be horizontally scrolled on mobile viewports instead of overflowing the screen or breaking the page layout.
   - **No Default Headers:** Unlike standard callouts, these blocks (except `[!EXAMPLE]`) do NOT render default label headers. Therefore, you **MUST** explicitly define an `H3` (`###`) heading with an appropriate thematic emoji on the first line inside the callout block:
     ```markdown
     > [!NOTE]
     > ### ⚛️ Fundamental Chemistry Concepts (Elements)
     ```
     ```markdown
     > [!IMPORTANT]
     > ### 🧮 The Molar Calculation Formulas
     ```
     ```markdown
     > [!BOX]
     > ### 📋 Common Ionic Groups
     ```
   - Ensure the header title uses a descriptive emoji (e.g. `⚛️`, `🧪`, `⚖️`, `📋`, `🧮`, `⚠️`, `🛑`) instead of numbers, to match the unified project styling.

7. **List Indentation inside Callouts:**
   - To ensure sub-lists (bullet points) inside ordered lists (`1.`, `2.`, `3.`) render with proper right indentation inside blockquotes/callouts, indent them with exactly **4 spaces** after the `>` character (i.e. `>    *` or `>    -`):
     ```markdown
     > 1. **First Point:**
     >    * Nested bullet point (indented)
     ```

8. **SVG Asset Design Guidelines:**
   - For clean scaling and to match the paragraph styling of the website:
     - Use a compact viewBox (e.g. `1000`x`360`) to prevent excessive vertical spacing.
     - Set base text `font-size` to `12` (subscripts/superscripts to `8.5`) to match the `text-sm` paragraph size on-screen when scaled.
     - Use the project's signature dark background gradient: `#070f1e` to `#0b1b35`, with a stroke border of `#1e293b`.

9. **Avoiding Confusing End-of-Line Periods:**
   - To prevent student confusion, do not put a period (`.`) at the end of a line if it terminates with a chemical symbol (e.g. `Na`), a number (e.g. `2.3`), or a unit (e.g. `mol/dm3`), as the period could be mistaken for part of the symbol, number, or unit.
