import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface ProjectPageProps {
  onNavigate: (page: string) => void;
  onOpenVideo?: () => void;
  onOpenQuote?: () => void;
}

interface Project {
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

export function ProjectPage({ onNavigate, onOpenVideo, onOpenQuote }: ProjectPageProps) {
  void onOpenVideo;
  void onOpenQuote;
  const { lang, t } = useLanguage();
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);

  const projectsPage1: Project[] = [
    {
      title: 'SKM Engineering',
      tag: lang === 'pt' ? 'SOLAR C&I LIGADO À REDE' : 'GRID-TIED C&I',
      location: lang === 'pt' ? 'Maputo, Moçambique' : 'Maputo, Mozambique',
      image: '/lecasu/official-project-skm.jpg',
      stat1Value: '80 kWp',
      stat1Label: lang === 'pt' ? 'CAPACIDADE' : 'CAPACITY',
      stat2Value: lang === 'pt' ? 'Sincronismo Diesel' : 'Diesel Sync',
      stat2Label: lang === 'pt' ? 'INTEGRAÇÃO GERADOR' : 'GENERATOR INTEGRATION',
      stat3Value: '65%',
      stat3Label: lang === 'pt' ? 'POUPANÇA DIESEL' : 'FUEL DISPLACEMENT'
    },
    {
      title: 'INCUBOX 2 (GAPI)',
      tag: lang === 'pt' ? 'HÍBRIDO ISOLADO DA REDE' : 'OFF-GRID HYBRID',
      location: 'Cabo Delgado, Nampula & Niassa',
      image: '/lecasu/official-project-incubox.jpeg',
      stat1Value: '68.2 kWp',
      stat1Label: lang === 'pt' ? 'CAPACIDADE TOTAL' : 'TOTAL CAPACITY',
      stat2Value: lang === 'pt' ? '11 Cabines' : '11 Cabins',
      stat2Label: lang === 'pt' ? 'UNIDADES SOLARES' : 'SOLAR UNITS',
      stat3Value: '100%',
      stat3Label: lang === 'pt' ? 'AUTONOMIA ENERGÉTICA' : 'ENERGY AUTONOMY'
    },
    {
      title: lang === 'pt' ? 'Eletrificação Solar de Inhambane' : 'Inhambane Solar Electrification',
      tag: lang === 'pt' ? 'SOLAR COMERCIAL' : 'COMMERCIAL SOLAR',
      location: lang === 'pt' ? 'Inhambane, Moçambique' : 'Inhambane, Mozambique',
      image: '/lecasu/project-inhambane.jpg',
      stat1Value: '45 kWp',
      stat1Label: lang === 'pt' ? 'CAPACIDADE' : 'CAPACITY',
      stat2Value: lang === 'pt' ? 'Baterias Lítio' : 'Lithium BESS',
      stat2Label: lang === 'pt' ? 'ARMAZENAMENTO' : 'STORAGE',
      stat3Value: lang === 'pt' ? 'Zero Falhas' : 'Zero Outages',
      stat3Label: lang === 'pt' ? 'DESEMPENHO' : 'PERFORMANCE'
    },
    {
      title: lang === 'pt' ? 'Estação Inversora & SCADA Modular' : 'Modular Inverter & SCADA Station',
      tag: lang === 'pt' ? 'SCADA HÍBRIDO' : 'HYBRID SCADA',
      location: lang === 'pt' ? 'Corredores de Moçambique' : 'Mozambique Corridors',
      image: '/lecasu/incubox-inverter.jpeg',
      stat1Value: lang === 'pt' ? 'Industrial' : 'Industrial',
      stat1Label: lang === 'pt' ? 'TIPO DE INVERSOR' : 'INVERTER TIER',
      stat2Value: '24/7',
      stat2Label: lang === 'pt' ? 'TELEMETRIA' : 'TELEMETRY',
      stat3Value: lang === 'pt' ? 'Remota' : 'Remote',
      stat3Label: lang === 'pt' ? 'MONITORIZAÇÃO' : 'MONITORING'
    },
    {
      title: lang === 'pt' ? 'Infraestrutura de Cabines Modulares' : 'Modular Training Cabins Infrastructure',
      tag: lang === 'pt' ? 'IMPACTO SOCIAL' : 'SOCIAL IMPACT',
      location: lang === 'pt' ? 'Norte de Moçambique' : 'Northern Mozambique',
      image: '/lecasu/incubox-site.jpeg',
      stat1Value: lang === 'pt' ? '11 Centros' : '11 Hubs',
      stat1Label: lang === 'pt' ? 'INSTALADOS' : 'INSTALLED',
      stat2Value: '1,500+',
      stat2Label: lang === 'pt' ? 'JOVENS BENEFICIADOS' : 'YOUTH REACHED',
      stat3Value: lang === 'pt' ? '100% Limpa' : '100% Clean',
      stat3Label: lang === 'pt' ? 'FONTE DE ENERGIA' : 'POWER SOURCE'
    },
    {
      title: lang === 'pt' ? 'Central Solar em Cobertura C&I' : 'C&I Rooftop Energy Station',
      tag: lang === 'pt' ? 'SOLAR EM COBERTURA' : 'ROOFTOP SOLAR',
      location: lang === 'pt' ? 'Maputo, Moçambique' : 'Maputo, Mozambique',
      image: '/lecasu/solar-site.jpeg',
      stat1Value: lang === 'pt' ? 'Alta Rentabilidade' : 'High Yield',
      stat1Label: lang === 'pt' ? 'PAINÉIS SOLARES' : 'SOLAR PANELS',
      stat2Value: 'Tier-1',
      stat2Label: lang === 'pt' ? 'EQUIPAMENTO' : 'HARDWARE',
      stat3Value: lang === 'pt' ? '25 Anos' : '25 Years',
      stat3Label: lang === 'pt' ? 'VIDA ÚTIL' : 'LIFESPAN'
    }
  ];

  const projectsPage2: Project[] = [
    {
      title: lang === 'pt' ? 'Sistemas de Armazenamento Incubox' : 'Incubox Energy Storage Arrays',
      tag: lang === 'pt' ? 'BATERIAS BESS' : 'BATTERY BESS',
      location: lang === 'pt' ? 'Província do Niassa, Moçambique' : 'Niassa Province, Mozambique',
      image: '/lecasu/incubox-system.jpeg',
      stat1Value: '48V High C',
      stat1Label: lang === 'pt' ? 'TECNOLOGIA LÍTIO' : 'LITHIUM TECH',
      stat2Value: lang === 'pt' ? 'Ciclo Diário' : 'Daily Cycling',
      stat2Label: lang === 'pt' ? 'DESEMPENHO' : 'PERFORMANCE',
      stat3Value: '99.9%',
      stat3Label: lang === 'pt' ? 'DISPONIBILIDADE' : 'UPTIME'
    },
    {
      title: lang === 'pt' ? 'Engenharia & Comissionamento em Campo' : 'Engineering & Field Commissioning',
      tag: lang === 'pt' ? 'SERVIÇOS DE O&M' : 'O&M SERVICES',
      location: lang === 'pt' ? 'Operações em Maputo' : 'Maputo Operations',
      image: '/lecasu/about-team.jpeg',
      stat1Value: lang === 'pt' ? 'Especialistas' : 'Specialists',
      stat1Label: lang === 'pt' ? 'EQUIPA DE CAMPO' : 'FIELD TEAM',
      stat2Value: lang === 'pt' ? 'Telemetria em Tempo Real' : 'Live Telemetry',
      stat2Label: lang === 'pt' ? 'SCADA NUVEM' : 'SCADA CLOUD',
      stat3Value: lang === 'pt' ? 'Preventiva' : 'Preventive',
      stat3Label: lang === 'pt' ? 'MANUTENÇÃO' : 'MAINTENANCE'
    },
    {
      title: lang === 'pt' ? 'Central Elétrica Industrial Híbrida' : 'Hybrid Industrial Power Station',
      tag: lang === 'pt' ? 'C&I INDUSTRIAL' : 'HEAVY C&I',
      location: lang === 'pt' ? 'Zona Industrial da Matola' : 'Matola Industrial Zone',
      image: '/lecasu/project-extra-1.jpeg',
      stat1Value: '120 kWp',
      stat1Label: lang === 'pt' ? 'SISTEMA SOLAR' : 'SOLAR ARRAY',
      stat2Value: lang === 'pt' ? 'Trifásico' : 'Tri-Phase',
      stat2Label: lang === 'pt' ? 'FATOR DE POTÊNCIA' : 'POWER FACTOR',
      stat3Value: '75%',
      stat3Label: lang === 'pt' ? 'POUPANÇA' : 'SAVINGS'
    },
    {
      title: lang === 'pt' ? 'Mini-Rede Comunitária Rural' : 'Rural Community Mini-Grid',
      tag: lang === 'pt' ? 'ISOLADO DA REDE (OFF-GRID)' : 'OFF-GRID',
      location: lang === 'pt' ? 'Província da Zambézia' : 'Zambezia Province',
      image: '/lecasu/project-extra-2.jpeg',
      stat1Value: lang === 'pt' ? 'Autónoma' : 'Autonomous',
      stat1Label: lang === 'pt' ? 'REDE ELÉTRICA' : 'POWER GRID',
      stat2Value: lang === 'pt' ? 'Energia Limpa' : 'Clean Energy',
      stat2Label: lang === 'pt' ? 'DISTRIBUIÇÃO' : 'DISTRIBUTION',
      stat3Value: '24/7',
      stat3Label: lang === 'pt' ? 'ILUMINAÇÃO & ENERGIA' : 'LIGHTING & POWER'
    },
    {
      title: lang === 'pt' ? 'Central Solar de Solo de Alta Densidade' : 'High-Density Hybrid Ground Array',
      tag: lang === 'pt' ? 'INSTALAÇÃO DE SOLO' : 'GROUND MOUNT',
      location: lang === 'pt' ? 'Sul de Moçambique' : 'Southern Mozambique',
      image: '/lecasu/official-alternative-3.jpeg',
      stat1Value: lang === 'pt' ? 'Monocristalino' : 'Monocrystalline',
      stat1Label: lang === 'pt' ? 'TIPO DE PAINEL' : 'PANEL TYPE',
      stat2Value: lang === 'pt' ? 'Clima Extremo' : 'Hot Climate',
      stat2Label: lang === 'pt' ? 'CERTIFICAÇÃO' : 'RATED',
      stat3Value: lang === 'pt' ? 'Rendimento Máx.' : 'Max Yield',
      stat3Label: lang === 'pt' ? 'GERAÇÃO' : 'GENERATION'
    },
    {
      title: lang === 'pt' ? 'Hub Comercial de Energia como Serviço' : 'Energy-as-a-Service Commercial Hub',
      tag: lang === 'pt' ? 'FINANCIAMENTO PPA' : 'PPA FINANCE',
      location: lang === 'pt' ? 'Maputo Central' : 'Maputo Central',
      image: '/lecasu/service-eaas.jpeg',
      stat1Value: 'Zero Capex',
      stat1Label: lang === 'pt' ? 'FINANCIAMENTO' : 'FINANCING',
      stat2Value: lang === 'pt' ? 'Pagamento por kWh' : 'Pay per kWh',
      stat2Label: lang === 'pt' ? 'CONTRATO' : 'AGREEMENT',
      stat3Value: lang === 'pt' ? 'O&M Integral' : 'Full O&M',
      stat3Label: lang === 'pt' ? 'INCLUÍDO' : 'INCLUDED'
    }
  ];

  const currentProjects = currentPageNum === 1 ? projectsPage1 : projectsPage2;

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
                {currentProjects.map((proj, idx) => (
                  <div key={idx} className="md:column-6">
                    <div className="reveal-item group relative rounded-2xl overflow-hidden shadow-lg border-b-6 border-primary h-[480px] w-full flex flex-col justify-end bg-darker transition-all">
                      {/* Background Image formatted to 100% fill the card */}
                      <img
                        alt={proj.title}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={proj.image}
                      />
                      {/* Dark Gradient Overlay for consistent readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent pointer-events-none"></div>

                      {/* Content pinned to bottom with consistent height and padding */}
                      <div className="relative z-10 p-7 lg:p-8 flex flex-col justify-end w-full">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/25 border border-primary/40 text-primary-light text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                            {proj.tag}
                          </span>
                        </div>
                        <h3 className="text-2xl lg:text-3xl leading-snug font-bold text-white mb-1 line-clamp-1">
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
                            <div className="text-[10px] text-white/60 font-medium uppercase tracking-wider truncate">
                              {proj.stat1Label}
                            </div>
                          </div>
                          <div>
                            <div className="text-base lg:text-lg font-bold text-white truncate">
                              {proj.stat2Value}
                            </div>
                            <div className="text-[10px] text-white/60 font-medium uppercase tracking-wider truncate">
                              {proj.stat2Label}
                            </div>
                          </div>
                          <div>
                            <div className="text-base lg:text-lg font-bold text-white truncate">
                              {proj.stat3Value}
                            </div>
                            <div className="text-[10px] text-white/60 font-medium uppercase tracking-wider truncate">
                              {proj.stat3Label}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Pagination Bar */}
              <div className="reveal-item reveal-delay-150 mt-16 flex items-center justify-center gap-3">
                <button
                  type="button"
                  disabled={currentPageNum === 1}
                  onClick={() => {
                    setCurrentPageNum(1);
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-body hover:text-darker transition-colors px-3 py-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Previous Page"
                >
                  <svg viewBox="0 0 24 24" className="size-4 fill-current">
                    <path d="M20 11h-13.586l2.293-2.293c0.174-0.18 0.281-0.425 0.281-0.695 0-0.552-0.448-1-1-1-0.27 0-0.515 0.107-0.695 0.281l-4 4c-0.18 0.181-0.292 0.431-0.292 0.707s0.111 0.526 0.292 0.707l4 4c0.18 0.174 0.425 0.281 0.695 0.281 0.552 0 1-0.448 1-1 0-0.27-0.107-0.515-0.281-0.695l-2.293-2.293h13.586c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
                  </svg>
                  <span>{lang === 'pt' ? 'Anterior' : 'Previous'}</span>
                </button>

                <span className="text-xs font-medium text-body px-2">0{currentPageNum} / 02</span>

                <button
                  type="button"
                  onClick={() => {
                    setCurrentPageNum(1);
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className={`size-9 rounded-full text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                    currentPageNum === 1
                      ? 'bg-darker text-white shadow-xs'
                      : 'bg-white border border-lighter text-body hover:bg-gray-100 hover:text-darker'
                  }`}
                >
                  01
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setCurrentPageNum(2);
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className={`size-9 rounded-full text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                    currentPageNum === 2
                      ? 'bg-darker text-white shadow-xs'
                      : 'bg-white border border-lighter text-body hover:bg-gray-100 hover:text-darker'
                  }`}
                >
                  02
                </button>

                <button
                  type="button"
                  disabled={currentPageNum === 2}
                  onClick={() => {
                    setCurrentPageNum(2);
                    window.scrollTo({ top: 350, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 text-xs font-semibold text-body hover:text-darker transition-colors px-3 py-2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  aria-label="Next Page"
                >
                  <span>{lang === 'pt' ? 'Seguinte' : 'Next'}</span>
                  <svg viewBox="0 0 24 24" className="size-4 fill-current">
                    <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
