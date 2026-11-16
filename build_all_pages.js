import fs from 'fs';

function sanitizeJsx(content) {
  return content
    .replace(/\bfor="([^"]*)"/g, 'htmlFor="$1"')
    .replace(/\brows="(\d+)"/g, 'rows={$1}')
    .replace(/\bcols="(\d+)"/g, 'cols={$1}')
    .replace(/\btabIndex="(-?\d+)"/g, 'tabIndex={$1}')
    .replace(/\bmaxLength="(\d+)"/g, 'maxLength={$1}')
    .replace(/\bminLength="(\d+)"/g, 'minLength={$1}')
    .replace(/\baria-disabled="(true|false)"/g, 'aria-disabled={$1}')
    .replace(/\baria-hidden="(true|false)"/g, 'aria-hidden={$1}')
    .replace(/\baria-expanded="(true|false)"/g, 'aria-expanded={$1}')
    .replace(/\baria-selected="(true|false)"/g, 'aria-selected={$1}')
    .replace(/\baria-current="(true|false)"/g, 'aria-current={$1}')
    .replace(/\baria-modal="(true|false)"/g, 'aria-modal={$1}')
    .replace(/\ballowfullscreen=""/gi, 'allowFullScreen={true}')
    .replace(/\ballowFullScreen=""/gi, 'allowFullScreen={true}')
    .replace(/\brequired=""/g, 'required')
    .replace(/\bselected=""/g, 'selected')
    .replace(/\bdisabled=""/g, 'disabled')
    .replace(/\bautocapitalize="[^"]*"/g, '')
    .replace(/\bspellcheck="[^"]*"/g, '')
    .replace(/autocorrect="[^"]*"/g, '')
    .replace(/wrap-break-word/g, 'break-words');
}

function wrapPage(componentName, title, breadcrumb, mainJsxFile) {
  let mainJsx = fs.readFileSync(mainJsxFile, 'utf8');
  mainJsx = sanitizeJsx(mainJsx)
    .replace(/href="\/contact"/g, 'onClick={(e) => { e.preventDefault(); onNavigate("contact"); }}')
    .replace(/href="\/service"/g, 'onClick={(e) => { e.preventDefault(); onNavigate("service"); }}')
    .replace(/href="\/about"/g, 'onClick={(e) => { e.preventDefault(); onNavigate("about"); }}')
    .replace(/href="\/project"/g, 'onClick={(e) => { e.preventDefault(); onNavigate("project"); }}')
    .replace(/href="\/packages"/g, 'onClick={(e) => { e.preventDefault(); onNavigate("packages"); }}')
    .replace(/href="\/faqs"/g, 'onClick={(e) => { e.preventDefault(); onNavigate("faqs"); }}')
    .replace(/href="\/blog"/g, 'onClick={(e) => { e.preventDefault(); onNavigate("blog"); }}')
    .replace(/<button([^>]*aria-label="Play video"[^>]*)>/g, '<button$1 onClick={onOpenVideo}>')
    .replace(/<button class="absolute top-1\/2 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 size-16/g, '<button onClick={onOpenVideo} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 cursor-pointer')
    .replace(/>Request a Quote<\/button>/g, ' onClick={onOpenQuote}>Request a Quote</button>')
    .replace(/>Get Free Quote<\/button>/g, ' onClick={onOpenQuote}>Get Free Quote</button>');

  return `
interface ${componentName}Props {
  onNavigate: (page: string) => void;
  onOpenVideo?: () => void;
  onOpenQuote?: () => void;
}

export function ${componentName}({ onNavigate, onOpenVideo, onOpenQuote }: ${componentName}Props) {
  void onOpenVideo;
  void onOpenQuote;

  return (
    <div>
      {/* Subpage Header Banner */}
      <header className="relative flex flex-col pt-[var(--menubar-height)]">
        <div className="absolute inset-0 overflow-hidden -z-10 bg-darker">
          <img
            alt="Page Header Background"
            width={1920}
            height={936}
            className="object-cover object-top w-full h-full parallax-bg"
            src="/solurax/page-header-bg.27692hgl31ns5.jpg"
          />
          <div className="absolute inset-0 bg-darker/65"></div>
        </div>
        <div className="relative py-12 lg:py-20 xl:py-28">
          <div className="container">
            <div className="flex flex-col items-center justify-center gap-4">
              <div>
                <nav aria-label="breadcrumb">
                  <ol className="flex flex-wrap items-center gap-2.5 text-sm text-white/70">
                    <li className="inline-flex items-center gap-1">
                      <button
                        onClick={() => onNavigate('home')}
                        className="transition-colors text-base text-white/70 hover:text-white cursor-pointer"
                      >
                        Home
                      </button>
                    </li>
                    <li className="text-white/90 text-sm">/</li>
                    <li className="inline-flex items-center gap-1">
                      <span className="font-normal text-sm text-white">${breadcrumb}</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl leading-[1.1] xl:text-6xl 2xl:text-[5rem]">
                ${title}
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      ${mainJsx}
    </div>
  );
}
`;
}

fs.writeFileSync('src/pages/AboutPage.tsx', wrapPage('AboutPage', 'About Us', 'About Us', 'page_about_main.jsx'));
fs.writeFileSync('src/pages/ServicePage.tsx', wrapPage('ServicePage', 'Our Services', 'Our Services', 'page_service_main.jsx'));
fs.writeFileSync('src/pages/ProjectPage.tsx', wrapPage('ProjectPage', 'Project', 'Project', 'page_project_main.jsx'));
fs.writeFileSync('src/pages/ContactPage.tsx', wrapPage('ContactPage', 'Contact Us', 'Contact Us', 'page_contact_main.jsx'));
fs.writeFileSync('src/pages/PackagesPage.tsx', wrapPage('PackagesPage', 'Pricing Plans', 'Pricing', 'page_packages_main.jsx'));
fs.writeFileSync('src/pages/FaqsPage.tsx', wrapPage('FaqsPage', 'Frequently Asked Questions', 'FAQ', 'page_faqs_main.jsx'));
fs.writeFileSync('src/pages/BlogPage.tsx', wrapPage('BlogPage', 'Latest News & Articles', 'Blog', 'page_blog_main.jsx'));

console.log('Regenerated pages cleanly');
