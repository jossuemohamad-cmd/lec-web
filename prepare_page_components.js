import fs from 'fs';
import path from 'path';

const pagesDir = path.resolve('src/pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

function createSubpageHeader(title, breadcrumb) {
  return `
    <header className="relative flex flex-col pt-[var(--menubar-height)]">
      <div className="absolute inset-0 overflow-hidden -z-10 bg-darker">
        <img
          alt=""
          width="1920"
          height="936"
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
                    <button onClick={() => onNavigate('home')} className="transition-colors text-base text-white/70 hover:text-white cursor-pointer">
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
  `;
}

console.log('Setup script ready');
