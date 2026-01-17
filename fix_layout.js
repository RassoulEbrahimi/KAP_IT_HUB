const fs = require('fs');
const path = require('path');

const files = [
    'd:\\KAP_IT_HUB\\m365-helfer.html',
    'd:\\KAP_IT_HUB\\ai-gallery.html'
];

files.forEach(filePath => {
    try {
        if (!fs.existsSync(filePath)) {
            console.error(`File not found: ${filePath}`);
            return;
        }

        let content = fs.readFileSync(filePath, 'utf8');
        let initialContent = content;

        // Replacement 1: Container Fix
        const containerTarget = 'class="flex items-center gap-2 overflow-x-auto pb-2"';
        const containerReplace = 'class="flex items-center gap-2 flex-wrap"';

        if (content.includes(containerTarget)) {
            content = content.split(containerTarget).join(containerReplace);
            console.log(`[${path.basename(filePath)}] Container fixed.`);
        } else {
            console.log(`[${path.basename(filePath)}] Container target not found (might differ or already fixed).`);
        }

        // Replacement 2: Button Fix
        const buttonTarget = 'class="px-4 py-1.5 text-sm font-medium rounded-full';
        const buttonReplace = 'class="whitespace-nowrap px-4 py-1.5 text-sm font-medium rounded-full';

        if (content.includes(buttonTarget)) {
            content = content.split(buttonTarget).join(buttonReplace);
            console.log(`[${path.basename(filePath)}] Buttons fixed.`);
        } else {
            console.log(`[${path.basename(filePath)}] Button target not found.`);
        }

        if (content !== initialContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`[${path.basename(filePath)}] SAVED.`);
        } else {
            console.log(`[${path.basename(filePath)}] No changes needed.`);
        }

    } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
    }
});
