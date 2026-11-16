import fs from 'fs';

['about', 'service', 'project', 'contact'].forEach(p => {
  const f = `page_${p}_main.jsx`;
  if (fs.existsSync(f)) {
    const content = fs.readFileSync(f, 'utf8');
    const headings = [...content.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
    console.log(`\n=== PAGE [${p.toUpperCase()}] Headings ===`);
    headings.forEach(h => console.log(' -', h));
  }
});
