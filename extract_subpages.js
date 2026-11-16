import fs from 'fs';

function cleanHtmlToJsx(raw) {
  return raw
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\bclass="/g, 'className="')
    .replace(/\btabindex="/g, 'tabIndex="')
    .replace(/data-slot="[^"]*"/g, '')
    .replace(/data-nimg="1"/g, '')
    .replace(/data-reveal="[^"]*"/g, '')
    .replace(/decoding="async"/g, '')
    .replace(/loading="(lazy|eager)"/g, '')
    .replace(/style="([^"]*)"/g, (match, p1) => {
      if (p1.includes('background-image')) return '';
      if (p1.includes('--reveal-delay')) return '';
      return '';
    })
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/<img([^>]+[^\/])>/g, '<img$1 />')
    .replace(/<input([^>]+[^\/])>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/\/_next\/static\/media\/([^"'\s]+)/g, '/solurax/$1');
}

const pages = ['about', 'service', 'project', 'contact', 'packages', 'faqs', 'blog'];
for (const p of pages) {
  const file = `solurax_${p}.html`;
  if (fs.existsSync(file)) {
    const html = fs.readFileSync(file, 'utf8');
    const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
    const mainMatch = html.match(/<main[\s\S]*?<\/main>/i);
    if (headerMatch && mainMatch) {
      fs.writeFileSync(`page_${p}_header.jsx`, cleanHtmlToJsx(headerMatch[0]));
      fs.writeFileSync(`page_${p}_main.jsx`, cleanHtmlToJsx(mainMatch[0]));
      console.log(`Generated JSX for ${p}`);
    }
  }
}
