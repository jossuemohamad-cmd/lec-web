import fs from 'fs';

const content = fs.readFileSync('src/pages/ContactPage.tsx', 'utf8');
const slice = content.slice(11600, 11850);
console.log('ContactPage around 11718:');
console.log(slice);
