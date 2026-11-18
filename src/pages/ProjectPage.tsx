import { useLanguage } from '../i18n/LanguageContext';

interface ProjectPageProps {
  onNavigate: (page: string, context?: string) => void;
  onOpenQuote?: () => void;
  onSelectProject?: (id: string) => void;
}

interface Project {
  id: string;
  title: string;
  tag: string;
  location: string;
  image: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
}

export function ProjectPage({ onNavigate, onOpenQuote, onSelectProject }: ProjectPageProps) {
  void onOpenQuote;
  const { lang, t } = useLanguage();

  const handleProjectClick = (projectId: string) => {
    if (onSelectProject) {
      onSelectProject(projectId);
    } else {
      onNavigate('project-detail', projectId);
    }
  };

  const currentProjects: Project[] = [
    {
      id: 'skm-engineering',
      title: 'SKM Engineering',
      tag: lang === 'pt' ? 'Solar C&I ligado à rede' : 'Grid-tied C&I',
      location: lang === 'pt' ? 'Maputo, Moçambique' : 'Maputo, Mozambique',
      image: '/lecasu/official-project-skm.jpg',
      stat1Value: '80 kWp',
      stat1Label: lang === 'pt' ? 'Capacidade' : 'Capacity',
      stat2Value: lang === 'pt' ? 'Sincronismo diesel' : 'Diesel sync',
      stat2Label: lang === 'pt' ? 'Integração gerador' : 'Generator integration',
      stat3Value: '65%',
      stat3Label: lang === 'pt' ? 'Poupança diesel' : 'Fuel displacement'
    },
    {
      id: 'incubox-2',
      title: 'INCUBOX 2 (GAPI)',
      tag: lang === 'pt' ? 'Híbrido isolado da rede' : 'Off-grid hybrid',
      location: 'Cabo Delgado, Nampula & Niassa',
      image: '/lecasu/official-project-incubox.jpeg',
      stat1Value: '68.2 kWp',
      stat1Label: lang === 'pt' ? 'Capacidade total' : 'Total capacity',
      stat2Value: lang === 'pt' ? '11 cabines' : '11 cabins',
      stat2Label: lang === 'pt' ? 'Unidades solares' : 'Solar units',
      stat3Value: '100%',
      stat3Label: lang === 'pt' ? 'Autonomia energética' : 'Energy autonomy'
    }
  ];

  return (
    <div>
      {/* Subpage Header Banner */}
      <header className="relative flex flex-col pt-[var(--menubar-height)] bg-[#0f0f0f] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            alt="Page Header Background"
            width={1920}
            height={936}
            className="object-cover object-top w-full h-full"
            src="/lecasu/hero-energy-v2.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/45 via-[#0f0f0f]/35 to-[#0f0f0f]/55"></div>
        </div>
        <div className="relative z-10 py-12 lg:py-20 xl:py-28">
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
                        {t('Home')}
                      </button>
                    </li>
                    <li className="text-white/90 text-sm">/</li>
                    <li className="inline-flex items-center gap-1">
                      <span className="font-normal text-sm text-white">{t('Projects')}</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl leading-[1.1] xl:text-6xl 2xl:text-[5rem]">
                {t('Projects')}
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-col justify-between overflow-x-hidden bg-white">
        <section className="relative w-full py-20 lg:py-24 xl:py-30 bg-white">
          <div className="section-head relative mb-10 xl:mb-15">
            <div className="container">
              <div className="justify-center text-center row">
                <div className="lg:column-8 xl:column-9 2xl:column-8">
                  <div className="reveal-item reveal-delay-100 2xl:px-8">
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                      {t('Projects powering real places in Mozambique.')}
                    </h2>
                    <p className="text-base xl:text-lg leading-relaxed text-body max-w-md mx-auto">
                      {t('Explore our featured installations across our international network, highlighting how our seamless technology delivers reliable power.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-content relative">
            <div className="container">
              <div className="row gy-8">
                {currentProjects.map((proj) => (
                  <div key={proj.id} className="md:column-6">
                    <div
                      onClick={() => handleProjectClick(proj.id)}
                      className="reveal-item group relative rounded-2xl overflow-hidden shadow-lg border-b-6 border-primary min-h-[500px] w-full flex flex-col justify-end bg-darker cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
                    >
                      {/* Background Image formatted to 100% fill the card */}
                      <img
                        alt={proj.title}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                        src={proj.image}
                      />
                      {/* Dark Gradient Overlay for consistent readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/65 to-black/20 pointer-events-none group-hover:via-[#0f0f0f]/75 transition-colors"></div>

                      {/* Content pinned to bottom with consistent height and padding */}
                      <div className="relative z-10 p-7 lg:p-8 flex flex-col justify-end w-full">
                        <div className="mb-3 flex items-center justify-between gap-2">
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/25 border border-primary/40 text-primary-light text-xs font-semibold tracking-wider backdrop-blur-md">
                            {proj.tag}
                          </span>
                          <span className="text-xs text-white/80 font-medium group-hover:text-primary-light transition-colors flex items-center gap-1">
                            <span>{lang === 'pt' ? 'Ver detalhes e galeria' : 'View details & gallery'}</span>
                            <span className="size-6 rounded-full bg-black/70 flex items-center justify-center text-white shrink-0 group-hover:bg-primary transition-colors">
                              <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                              </svg>
                            </span>
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl leading-snug font-bold text-white mb-1 line-clamp-1 group-hover:text-primary-light transition-colors">
                          {proj.title}
                        </h3>
                        <p className="text-sm text-white/75 mb-5 line-clamp-1">
                          {proj.location}
                        </p>
                        
                        {/* 3 Metric Stats with equal columns */}
                        <div className="pt-4 border-t border-white/20 grid grid-cols-3 gap-2">
                          <div>
                            <div className="text-base lg:text-lg font-bold text-white truncate">
                              {proj.stat1Value}
                            </div>
                            <div className="text-[10px] text-white/60 font-medium tracking-wider truncate">
                              {proj.stat1Label}
                            </div>
                          </div>
                          <div>
                            <div className="text-base lg:text-lg font-bold text-white truncate">
                              {proj.stat2Value}
                            </div>
                            <div className="text-[10px] text-white/60 font-medium tracking-wider truncate">
                              {proj.stat2Label}
                            </div>
                          </div>
                          <div>
                            <div className="text-base lg:text-lg font-bold text-white truncate">
                              {proj.stat3Value}
                            </div>
                            <div className="text-[10px] text-white/60 font-medium tracking-wider truncate">
                              {proj.stat3Label}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
