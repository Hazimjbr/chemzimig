import { Question } from './types';
import { questionBank as baseQuestionBank } from './question-bank';
import { examsRegistry } from './registry';

export * from './types';
export * from './exam-generator';
export * from './registry';

// Flatten all questions from the modular exams registry
const registeredQuestions: Question[] = [];
Object.values(examsRegistry).forEach(trackRegistry => {
    Object.values(trackRegistry).forEach(unitRegistry => {
        Object.values(unitRegistry).forEach(lessonQuestions => {
            registeredQuestions.push(...lessonQuestions);
        });
    });
});

export const questionBank: Question[] = [...baseQuestionBank, ...registeredQuestions];

// TEMPORARY SCRIPT TO ADD DATES
if (typeof window === 'undefined') {
    try {
        const fs = require('fs');
        const path = require('path');
        const dataDir = path.join(process.cwd(), 'data');
        
        function walkDir(dir: string): string[] {
            let results: string[] = [];
            if (!fs.existsSync(dir)) return results;
            const list = fs.readdirSync(dir);
            list.forEach((file: string) => {
                const fullPath = path.join(dir, file);
                const stat = fs.statSync(fullPath);
                if (stat && stat.isDirectory()) {
                    results = results.concat(walkDir(fullPath));
                } else if (fullPath.endsWith('.ts')) {
                    results.push(fullPath);
                }
            });
            return results;
        }
        
        const files = walkDir(dataDir);
        let modifiedFiles = 0;
        let modifiedQuestions = 0;
        files.forEach((file: string) => {
            if (!file.includes('exams') && !file.includes('curriculum')) return;
            const content = fs.readFileSync(file, 'utf-8');
            let hasChanges = false;
            const newContent = content.replace(/id:\s*(['"])([^'"]+)\1/g, (match: string, quote: string, idStr: string) => {
                if (!/\d{8}/.test(idStr)) {
                    hasChanges = true;
                    modifiedQuestions++;
                    return `id: ${quote}${idStr}-20260106${quote}`;
                }
                return match;
            });
            if (hasChanges) {
                fs.writeFileSync(file, newContent, 'utf-8');
                modifiedFiles++;
            }
        });
        console.log(`[DATA-MIGRATION] Successfully added dates to ${modifiedQuestions} questions across ${modifiedFiles} files.`);
    } catch(e) {
        console.error('[DATA-MIGRATION] Error:', e);
    }
}
