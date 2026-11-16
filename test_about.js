import fs from 'fs';

const raw = fs.readFileSync('page_about_main.jsx', 'utf8');
console.log('page_about_main length:', raw.length);
// Check for any unclosed tags or syntax issues
const hasUnescapedAmp = raw.match(/&(?!(amp|lt|gt|quot|#x?[0-9a-fA-F]+);)/g);
console.log('Unescaped ampersands:', hasUnescapedAmp ? hasUnescapedAmp.length : 0);
