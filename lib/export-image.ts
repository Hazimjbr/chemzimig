import html2canvas from 'html2canvas';

/**
 * Capture an HTML element by ID and trigger a browser PNG download.
 */
export async function exportElementAsImage(elementId: string, fileName: string = 'lesson-notes.png'): Promise<boolean> {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Export failed: Element with id "${elementId}" not found.`);
        return false;
    }

    try {
        const canvas = await html2canvas(element, {
            scale: 2, // High resolution output
            useCORS: true,
            backgroundColor: '#070f1e', // ChemZim signature dark background
        });

        const link = document.createElement('a');
        link.download = fileName;
        link.href = canvas.toDataURL('image/png');
        link.click();
        return true;
    } catch (error) {
        console.error('Error rendering image export:', error);
        return false;
    }
}
