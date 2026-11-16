import { useState } from 'react';

interface BlogPageProps {
  onNavigate: (page: string) => void;
  onOpenVideo?: () => void;
  onOpenQuote?: () => void;
}

interface BlogPost {
  title: string;
  date: string;
  summary: string;
  image: string;
}

export function BlogPage({ onNavigate, onOpenVideo, onOpenQuote }: BlogPageProps) {
  void onOpenVideo;
  void onOpenQuote;
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);

  const postsPage1: BlogPost[] = [
    {
      title: 'INCUBOX 2: Off-Grid Solar Modular Cabins Across Northern Mozambique',
      date: '10 October 2026',
      summary: 'How modular off-grid solar and battery storage units deliver reliable electricity to vocational training hubs in Cabo Delgado, Nampula, and Niassa.',
      image: '/lecasu/official-project-incubox.jpeg'
    },
    {
      title: 'Hybrid Power Systems: Synchronizing Solar PV with Diesel Generators',
      date: '18 October 2026',
      summary: 'Technical architecture for synchronizing solar arrays with commercial diesel generators to displace up to 65% of expensive fuel consumption.',
      image: '/lecasu/official-service-hybrid.jpeg'
    },
    {
      title: 'Energy-as-a-Service (PPA): Zero Capex Solar for Industry in Mozambique',
      date: '29 October 2026',
      summary: 'Explore how Power Purchase Agreements enable commercial and industrial clients to secure predictable electricity rates with zero upfront capital.',
      image: '/lecasu/energy-as-a-service-ppa.jpeg'
    },
    {
      title: 'Battery Energy Storage (BESS) for Commercial Grid Reliability',
      date: '10 November 2026',
      summary: 'An engineering comparison of industrial lithium iron phosphate (LiFePO4) storage vs backup generators for uninterruptible power continuity.',
      image: '/lecasu/incubox-system.jpeg'
    },
    {
      title: 'Solar Operations & Maintenance (O&M): Peak Uptime in African Conditions',
      date: '18 November 2026',
      summary: 'Comprehensive O&M protocols including dust cleaning, thermal thermography scans, string inspection, and preventative telemetry diagnostics.',
      image: '/lecasu/operations-maintenance.jpeg'
    },
    {
      title: 'SCADA & Real-Time Cloud Telemetry for Remote Solar Microgrids',
      date: '29 November 2026',
      summary: 'How LECASU monitors generation, load profiles, inverter health, and battery state-of-charge remotely across Mozambique 24 hours a day.',
      image: '/lecasu/incubox-inverter.jpeg'
    }
  ];

  const postsPage2: BlogPost[] = [
    {
      title: 'Commercial & Industrial Rooftop Solar: Engineering for Maximum Yield',
      date: '05 December 2026',
      summary: 'Design criteria for industrial rooftop solar installations, structural roof load assessments, and grid interconnection in Maputo and Matola.',
      image: '/lecasu/solar-site.jpeg'
    },
    {
      title: 'Turnkey EPC Solar Projects: From Feasibility Study to Commissioning',
      date: '12 December 2026',
      summary: 'The end-to-end engineering lifecycle: site feasibility, 3D solar design, procurement of Tier-1 hardware, civil construction, and compliance.',
      image: '/lecasu/engineering-procurement-construction.jpeg'
    },
    {
      title: 'Inhambane Solar Electrification Case Study: Commercial Solar PV',
      date: '20 December 2026',
      summary: 'Deploying robust solar and storage systems for commercial facilities in coastal environments with high salt spray and humidity.',
      image: '/lecasu/project-inhambane.jpg'
    },
    {
      title: 'Empowering Communities: Mini-Grids & Rural Electrification in Mozambique',
      date: '02 January 2027',
      summary: 'How decentralized solar mini-grids provide clean, continuous electricity for rural economic growth, healthcare, and education.',
      image: '/lecasu/project-extra-2.jpeg'
    },
    {
      title: 'Industrial Energy Storage: Peak Shaving & Power Factor Optimization',
      date: '15 January 2027',
      summary: 'How large-scale BESS mitigates peak demand charges, regulates voltage, and provides instant backup for sensitive industrial manufacturing equipment.',
      image: '/lecasu/project-extra-1.jpeg'
    },
    {
      title: 'Engineering Capacity Building: Training Local Technicians in Mozambique',
      date: '28 January 2027',
      summary: 'LECASU commitment to local content, workforce upskilling, and technical capacity development in electrical engineering and renewable energy.',
      image: '/lecasu/about-team.jpeg'
    }
  ];

  const currentPosts = currentPageNum === 1 ? postsPage1 : postsPage2;

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
                        Home
                      </button>
                    </li>
                    <li className="text-white/90 text-sm">/</li>
                    <li className="inline-flex items-center gap-1">
                      <span className="font-normal text-sm text-white">Blog</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl leading-[1.1] xl:text-6xl 2xl:text-[5rem]">
                Latest News &amp; Articles
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <section className="relative w-full py-20 lg:py-24 xl:py-30">
          <div className="section-head relative mb-10 xl:mb-15">
            <div className="container">
              <div className="justify-center text-center row">
                <div className="column-12">
                  <div className="reveal-item reveal-delay-100 2xl:px-8">
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                      LECASU Insights &amp; Energy News
                    </h2>
                    <p className="text-base xl:text-lg leading-relaxed text-body">
                      Expert Guides, Industry Trends, and Smart Tips to Power Your Life Efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-content relative">
            <div className="container">
              {/* Featured Main Post (only on page 1) */}
              {currentPageNum === 1 && (
                <div className="pb-10">
                  <div className="reveal-item reveal-delay-100">
                    <div className="group block bg-white border border-lightest border-b-6 border-b-primary rounded-2xl p-4 shadow-[0_4px_20px_0] shadow-black/8 transition-all duration-300">
                      <div className="row gy-4">
                        <div className="lg:column-6">
                          <div className="lg:pe-7 h-full">
                            <img
                              alt="The Ultimate Guide to Going Solar"
                              width={900}
                              height={585}
                              className="rounded-xl lg:min-h-full object-cover w-full h-80 lg:h-full"
                              src="/lecasu/official-project-skm.jpg"
                            />
                          </div>
                        </div>
                        <div className="lg:column-6 self-center">
                          <div className="xl:pe-4 py-4 max-lg:px-4">
                            <span className="group/badge inline-flex tracking-[1px] uppercase w-fit shrink-0 items-center justify-center whitespace-nowrap bg-primary rounded-full mb-5 text-sm font-medium py-1 px-4 text-white">
                              FEATURED
                            </span>
                            <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight font-semibold text-darker group-hover:text-primary transition-colors mb-4">
                              SKM Engineering Maputo: 80 kWp Grid-Tied Solar with Generator Sync
                            </h3>
                            <p className="text-body text-sm md:text-base/relaxed line-clamp-3 mb-8">
                              Estudo de caso detalhado da implantação do sistema solar fotovoltaico de 80 kWp na SKM Engineering Maputo, com sincronização automática a gerador a diesel e telemetria remota 24/7.
                            </p>
                            <div className="flex items-center gap-4 text-xs md:text-sm text-body">
                              <div className="flex items-center gap-2">
                                <span className="group/avatar relative flex shrink-0 rounded-full select-none size-10 bg-primary/10 text-primary font-bold">
                                  <img
                                    alt="LECASU Engineering"
                                    width={80}
                                    height={80}
                                    className="aspect-square size-full rounded-full object-cover"
                                    src="/lecasu/lecasu-logo.png"
                                  />
                                </span>
                                <span className="font-medium text-base text-body">LECASU Engineering</span>
                              </div>
                              <div className="h-3 border-l border-body/20 shrink-0"></div>
                              <div className="font-medium text-base text-body">19 April 2026</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Blog Post Grid */}
              <div id="blog-grid" className="row g-8">
                {currentPosts.map((post, idx) => (
                  <div key={idx} className="md:column-6 xl:column-4">
                    <div className="reveal-item flex flex-col bg-white border-b-4 border-primary shadow-[0_4px_20px_0_rgba(0,0,0,.08)] rounded-2xl h-full">
                      <div className="group flex flex-col h-full">
                        <img
                          alt={post.title}
                          width={900}
                          height={585}
                          className="rounded-t-2xl object-cover h-52 w-full"
                          src={post.image}
                        />
                        <div className="p-6 flex flex-col flex-1 justify-between">
                          <div>
                            <div className="text-primary text-sm font-medium mb-3">{post.date}</div>
                            <h4 className="text-lg md:text-xl lg:text-2xl leading-snug font-bold text-darker group-hover:text-primary transition-colors line-clamp-2 mb-3">
                              {post.title}
                            </h4>
                            <p className="text-body text-sm md:text-base leading-relaxed line-clamp-2">
                              {post.summary}
                            </p>
                          </div>
                          <div className="pt-6">
                            <button
                              type="button"
                              onClick={() => onNavigate('contact')}
                              className="group/button inline-flex shrink-0 items-center justify-between whitespace-nowrap border-2 border-transparent bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] text-primary hover:text-darker h-auto! gap-2.5 font-medium text-base"
                            >
                              <span>Learn More</span>
                              <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker size-5">
                                <svg viewBox="0 0 24 24" className="size-3 fill-current">
                                  <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
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
                  <span>Previous</span>
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
                      ? 'bg-darker text-white shadow-xs scale-105'
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
                      ? 'bg-darker text-white shadow-xs scale-105'
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
                  <span>Next</span>
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
