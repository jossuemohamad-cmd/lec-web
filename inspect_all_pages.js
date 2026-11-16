import fs from 'fs';

function printDetails(p) {
  const f = `page_${p}_main.jsx`;
  if (!fs.existsSync(f)) return;
  const raw = fs.readFileSync(f, 'utf8');
  console.log(`\n================= ${p.toUpperCase()} (${raw.length} bytes) =================`);
  const sections = [...raw.matchAll(/<section[\s\S]*?<\/section>/g)].map(m => m[0]);
  sections.forEach((sec, idx) => {
    const h = sec.match(/<h[1-5][^>]*>([\s\S]*?)<\/h[1-5]>/i);
    console.log(`Section ${idx + 1}: ${h ? h[1].replace(/<[^>]+>/g, '').trim() : '(no heading)'}`);
  });
}

['about', 'service', 'project', 'contact', 'packages', 'faqs'].forEach(printDetails);
