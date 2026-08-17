/**
 * KaTeX & Chemistry Math Sanitizer
 * Automatically repairs corrupted LaTeX escape sequences (e.g., \t -> \text, \r -> \rightarrow)
 * caused by JavaScript template literal evaluation, ensuring that all chemical formulas,
 * arrows, and math symbols render properly regardless of escaping in source files.
 */

export function sanitizeKatex(math: string): string {
    if (!math) return '';

    let res = math;

    // 1. Repair JS control characters created when single backslash was parsed by JS.
    // Use functions for replacement to avoid replacement-string escaping issues.
    res = res.replace(/\t(ext|imes|au|heta|riangle|woheadrightarrow)/g, (_, p1) => '\\t' + p1);
    res = res.replace(/\r(ightarrow|ightleftharpoons|ho|angle|ight|ound)/g, (_, p1) => '\\r' + p1);
    res = res.replace(/\n(abla|eq|u|eg)/g, (_, p1) => '\\n' + p1);
    res = res.replace(/\f(rac|orall)/g, (_, p1) => '\\f' + p1);
    res = res.replace(/\x08(eta|ullet|ar|egin)/g, (_, p1) => '\\b' + p1);
    res = res.replace(/\v(ec|ert)/g, (_, p1) => '\\v' + p1);

    // 2. Repair stripped backslashes where the slash was swallowed or missing before commands:
    res = res.replace(/(^|[^\w\\])ext\{/g, '$1\\text{');
    res = res.replace(/(^|[^\w\\])ightarrow\b/g, '$1\\rightarrow');
    res = res.replace(/(^|[^\w\\])ightleftharpoons\b/g, '$1\\rightleftharpoons');
    res = res.replace(/(^|[^\w\\])delta([+\-0-9]|\b)/g, '$1\\delta$2');
    res = res.replace(/(^|[^\w\\])Delta([+\-0-9]|\b)/g, '$1\\Delta$2');
    res = res.replace(/(^|[^\w\\])quad\b/g, '$1\\quad');
    res = res.replace(/(^|[^\w\\])qquad\b/g, '$1\\qquad');
    res = res.replace(/(^|[^\w\\])alpha\b/g, '$1\\alpha');
    res = res.replace(/(^|[^\w\\])beta\b/g, '$1\\beta');
    res = res.replace(/(^|[^\w\\])gamma\b/g, '$1\\gamma');
    res = res.replace(/(^|[^\w\\])lambda\b/g, '$1\\lambda');
    res = res.replace(/(^|[^\w\\])sigma\b/g, '$1\\sigma');
    res = res.replace(/(^|[^\w\\])pi\b/g, '$1\\pi');
    res = res.replace(/(^|[^\w\\])theta\b/g, '$1\\theta');
    res = res.replace(/(^|[^\w\\])approx\b/g, '$1\\approx');
    res = res.replace(/(^|[^\w\\])times\b/g, '$1\\times');

    // 3. Fix unescaped percentage signs which KaTeX interprets as LaTeX comments
    res = res.replace(/(?<!\\)%/g, '\\%');

    // 4. Fix escaped underscores from Markdown parser
    res = res.replace(/\\_/g, '_');

    // 5. Convert common Unicode chemical symbols into robust LaTeX equivalents
    res = res.replace(/→/g, '\\rightarrow ');
    res = res.replace(/⇌/g, '\\rightleftharpoons ');
    res = res.replace(/⇄/g, '\\rightleftarrows ');
    res = res.replace(/↔/g, '\\leftrightarrow ');
    res = res.replace(/×/g, '\\times ');
    res = res.replace(/±/g, '\\pm ');

    return res;
}
