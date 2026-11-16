import fs from 'fs';

const c = fs.readFileSync('src/pages/ContactPage.tsx', 'utf8');
const lines = c.split('\n');
const line53 = lines[52]; // 0-based
console.log('line 53 char 11718:');
console.log(line53.slice(11680, 11760));
