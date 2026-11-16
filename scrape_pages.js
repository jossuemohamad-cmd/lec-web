import fs from 'fs';
import path from 'path';

const pages = ['about', 'service', 'project', 'contact', 'packages', 'faqs', 'blog'];
const outDir = path.resolve('public/solurax');
const mediaDir = path.resolve('public/_next/static/media');

async function scrapeAll() {
  const allImages = new Set();
  for (const p of pages) {
    const url = `https://solurax.niotheme.com/${p}`;
    console.log(`Fetching ${url}...`);
    try {
      const res = await fetch(url);
      if (res.ok) {
        const html = await res.text();
        fs.writeFileSync(`solurax_${p}.html`, html);
        const matches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/g)].map(m => m[1]);
        matches.forEach(m => allImages.add(m));
        console.log(`Saved solurax_${p}.html with ${matches.length} image refs.`);
      }
    } catch (e) {
      console.error(`Error fetching ${p}:`, e.message);
    }
  }

  console.log(`\nFound ${allImages.size} total image references across all pages. Downloading new ones...`);
  for (const src of allImages) {
    const filename = path.basename(src);
    const dest1 = path.join(outDir, filename);
    const dest2 = path.join(mediaDir, filename);
    if (!fs.existsSync(dest1)) {
      const fullUrl = src.startsWith('http') ? src : 'https://solurax.niotheme.com' + src;
      try {
        const res = await fetch(fullUrl);
        if (res.ok) {
          const buf = Buffer.from(await res.arrayBuffer());
          fs.writeFileSync(dest1, buf);
          fs.writeFileSync(dest2, buf);
          console.log(`Downloaded new asset: ${filename}`);
        }
      } catch (err) {
        console.error(`Failed to download ${filename}:`, err.message);
      }
    }
  }
  console.log('All pages and assets downloaded successfully!');
}

scrapeAll();
