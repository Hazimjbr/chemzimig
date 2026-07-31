/**
 * svgToken.ts
 *
 * Utility for embedding inline SVGs safely inside lesson markdown content.
 *
 * Usage in index.ts:
 *   import { svgToken } from '@/data/curriculum/svgToken';
 *
 *   const mySvg = `<svg viewBox="0 0 600 200" ...>...</svg>`;
 *
 *   content: `
 *   Some text above.
 *
 *   ${svgToken(mySvg)}
 *
 *   Some text below.
 *   `
 *
 * How it works:
 *   - The SVG string is URL-encoded and wrapped in an [INLINE_SVG:...] token.
 *   - The page renderer detects this token in renderTextWithMath and renders
 *     the decoded SVG safely via dangerouslySetInnerHTML.
 *   - This avoids all ReactMarkdown / HTML-stripping issues.
 */
export function svgToken(svgString: string): string {
    const encoded = encodeURIComponent(svgString.trim())
        // Encode brackets, asterisks, underscores, and tildes that ReactMarkdown might misparse
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\[/g, '%5B')
        .replace(/\]/g, '%5D')
        .replace(/\*/g, '%2A')
        .replace(/_/g, '%5F')
        .replace(/~/g, '%7E');
    return `[INLINE_SVG:${encoded}]`;
}
