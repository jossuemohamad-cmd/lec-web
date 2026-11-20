import { useLanguage } from '../i18n/LanguageContext';

interface ServicePageProps {
  onNavigate: (page: string, context?: string) => void;
  onOpenQuote?: () => void;
}

export function ServicePage({ onNavigate, onOpenQuote }: ServicePageProps) {
  void onOpenQuote;
  const { t } = useLanguage();

  const featuredService = {
    title: t('Energia Solar e Sistemas Híbridos'),
    desc: `${t('Ajudamos famílias e empresas a produzir e gerir a sua própria energia, com soluções solares e híbridas adaptadas às suas necessidades.')}\n\n${t('Para as empresas, procuramos transformar os custos de energia numa oportunidade de poupança, eficiência e maior competitividade.')}\n\n${t('O nosso objectivo é oferecer soluções que façam sentido, tanto do ponto de vista técnico como económico.')}`,
    image: '/lecasu/energy-as-a-service-ppa.jpeg'
  };

  const sideServices = [
    {
      title: t('EPC — Engineering, Procurement & Construction'),
      desc: t('Turnkey solar delivery: engineering design, Tier-1 equipment procurement, certified construction, and grid/generator commissioning.'),
      image: '/lecasu/epc-team-working.jpg'
    },
    {
      title: t('Energy-as-a-Service (PPA)'),
      desc: t('Zero upfront capital investment. Pay only for the clean kilowatt-hours you consume with guaranteed availability and covered maintenance.'),
      image: '/lecasu/official-service-hybrid.jpeg'
    }
  ];

  const bottomServices = [
    {
      title: t('Operations & Maintenance (O&M)'),
      desc: t('Proactive solar panel cleaning, thermal imaging inspections, SCADA telemetry monitoring, inverter diagnostics, and regular reporting.'),
      image: '/lecasu/operations-maintenance.jpeg'
    },
    {
      title: t('Commercial & Industrial (C&I) Rooftops'),
      desc: t('High-yield rooftop solar arrays for factories, warehouses, logistics centers, and office headquarters across Mozambique.'),
      image: '/lecasu/official-project-skm.jpg'
    },
    {
      title: t('Off-Grid & Rural Electrification'),
      desc: t('Independent micro-grids and modular solar units (like INCUBOX 2) powering education hubs, remote clinics, and agricultural enterprises.'),
      image: '/lecasu/official-project-incubox.jpeg'
    }
  ];

  const stories = [
    {
      title: t('Commercial Solar PV (SKM Engineering)'),
      image: '/lecasu/official-project-skm.jpg'
    },
    {
      title: t('Off-Grid Modular Systems (INCUBOX 2)'),
      image: '/lecasu/official-project-incubox.jpeg'
    },
    {
      title: t('Industrial Rooftop PV Installation'),
      image: '/lecasu/solar-site.jpeg'
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
                      <span className="font-normal text-sm text-white">{t('Our Services')}</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl leading-[1.1] xl:text-6xl 2xl:text-[5rem]">
                {t('Our Services')}
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        {/* Section: 6 Service Cards */}
        <section className="relative w-full pt-20 lg:pt-24 xl:pt-30 bg-white">
          <div className="section-head relative mb-10 xl:mb-15">
            <div className="container">
              <div className="justify-center text-center row">
                <div className="column-12 lg:column-10 xl:column-10 mx-auto">
                  <div className="reveal-item reveal-delay-100">
                    <h2 className="text-darker font-bold text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.2] mb-5 max-w-4xl mx-auto">
                      {t('Reliable Energy Infrastructure')}
                    </h2>
                    <p className="text-base xl:text-lg leading-relaxed text-body max-w-2xl mx-auto">
                      {t('From first assessment to long-term operation, we deliver resilient energy infrastructure.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-content relative">
            <div className="container -mb-20">
              <div className="pb-20 flex flex-col gap-6 lg:gap-7.5">
                {/* Linha Superior — Bento Flexbox Assimétrico */}
                <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-7.5">
                  {/* Card Destaque à Esquerda — Energia Solar e Sistemas Híbridos */}
                  <div
                    onClick={() => onNavigate('contact', featuredService.title)}
                    className="reveal-item reveal-delay-100 flex flex-col lg:w-[46%] xl:w-[45%] shrink-0 bg-white shadow-[0_2px_26px_0_rgba(0,0,0,.07)] rounded-2xl border border-lighter cursor-pointer overflow-hidden border-b-4 border-b-primary group hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative overflow-hidden bg-white border-b border-gray-100 aspect-[3/2] lg:aspect-auto lg:h-60 xl:h-64 p-3 flex items-center justify-center">
                      <img
                        alt={featuredService.title}
                        width={1080}
                        height={720}
                        className="w-full h-full object-contain"
                        src={featuredService.image}
                      />
                    </div>
                    <div className="p-7 xl:p-8 flex flex-col flex-1 justify-between">
                      <div>
                        <h5 className="text-2xl xl:text-[1.75rem] leading-snug font-semibold text-darker group-hover:text-primary transition-colors tracking-[-0.5px] mb-3">
                          {featuredService.title}
                        </h5>
                        <div className="space-y-3 text-sm sm:text-base leading-relaxed text-body">
                          {featuredService.desc.split('\n\n').map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                      <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between gap-3">
                        <span className="text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors">
                          {t('Solicitar Informações / Cotação')}
                        </span>
                        <span className="size-8 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover:translate-x-1">
                          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Coluna Direita — 2 Cards Horizontais Empilhados em Flexbox */}
                  <div className="flex flex-col flex-1 gap-6 lg:gap-7.5">
                    {sideServices.map((svc, idx) => (
                      <div
                        key={svc.title}
                        onClick={() => onNavigate('contact', svc.title)}
                        className={`reveal-item ${idx === 0 ? 'reveal-delay-200' : 'reveal-delay-300'} flex flex-col sm:flex-row flex-1 bg-white shadow-[0_2px_26px_0_rgba(0,0,0,.07)] rounded-2xl border border-lighter cursor-pointer overflow-hidden border-b-4 border-b-primary group hover:shadow-2xl transition-all duration-300`}
                      >
                        <div className="relative overflow-hidden h-56 sm:h-auto sm:w-[42%] lg:w-[40%] xl:w-[42%] sm:min-h-[240px] shrink-0">
                          <img
                            alt={svc.title}
                            width={840}
                            height={520}
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={svc.image}
                          />
                        </div>
                        <div className="p-6 xl:p-7 flex flex-col flex-1 justify-between">
                          <div>
                            <h5 className="text-xl xl:text-2xl leading-snug font-semibold text-darker group-hover:text-primary transition-colors tracking-[-0.5px] mb-2.5">
                              {svc.title}
                            </h5>
                            <p className="text-sm sm:text-base leading-relaxed text-body">
                              {svc.desc}
                            </p>
                          </div>
                          <div className="pt-4 mt-5 border-t border-gray-100 flex items-center justify-between gap-3">
                            <span className="text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors">
                              {t('Solicitar Informações / Cotação')}
                            </span>
                            <span className="size-8 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover:translate-x-1">
                              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Linha Inferior — 3 Cards Equilibrados em Flexbox */}
                <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-stretch gap-6 lg:gap-7.5">
                  {bottomServices.map((svc, idx) => (
                    <div
                      key={svc.title}
                      onClick={() => onNavigate('contact', svc.title)}
                      className={`reveal-item ${idx === 0 ? 'reveal-delay-100' : idx === 1 ? 'reveal-delay-200' : 'reveal-delay-300'} flex flex-col flex-1 md:basis-[calc(50%-1rem)] lg:basis-0 bg-white shadow-[0_2px_26px_0_rgba(0,0,0,.07)] rounded-2xl border border-lighter cursor-pointer overflow-hidden border-b-4 border-b-primary group hover:shadow-2xl transition-all duration-300`}
                    >
                      <div className="relative overflow-hidden h-56 shrink-0">
                        <img
                          alt={svc.title}
                          width={840}
                          height={520}
                          className="w-full h-full object-cover object-center"
                          src={svc.image}
                        />
                      </div>
                      <div className="p-7 xl:p-8 flex flex-col flex-1 justify-between">
                        <div>
                          <h5 className="text-xl xl:text-2xl leading-snug font-semibold text-darker group-hover:text-primary transition-colors tracking-[-0.5px] mb-3">
                            {svc.title}
                          </h5>
                          <p className="text-sm sm:text-base leading-relaxed text-body">
                            {svc.desc}
                          </p>
                        </div>
                        <div className="pt-5 mt-6 border-t border-gray-100 flex items-center justify-between gap-3">
                          <span className="text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors">
                            {t('Solicitar Informações / Cotação')}
                          </span>
                          <span className="size-8 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover:translate-x-1">
                            <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: The LECASU 4-Step Engineering Process */}
        <section className="relative w-full pt-20 lg:pt-24 xl:pt-30 bg-white">
          <div className="section-head relative mb-10 xl:mb-15">
            <div className="container">
              <div className="justify-center text-center row">
                <div className="lg:column-8 xl:column-7 2xl:column-7">
                  <div className="reveal-item reveal-delay-100 2xl:px-8">
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166]">
                      {t('The 4-Step Process')}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-content relative">
            <div className="container">
              <div className="relative z-0">
                <div className="hidden xl:block absolute top-7 left-1/8 w-3/4 h-0.5 bg-gradient-to-r from-primary via-primary-light to-primary -z-1 opacity-50"></div>
                <div className="justify-between row gy-6">
                  <div className="md:column-6 xl:column-3">
                    <div className="reveal-item text-center px-4 xl:px-0 2xl:px-4">
                      <div className="mb-6 size-14 rounded-full border-2 border-primary bg-white text-lg font-semibold flex justify-center items-center text-primary mx-auto shadow-sm">
                        01
                      </div>
                      <h5 className="font-semibold text-xl xl:text-2xl text-darker mb-4">{t('Free Site Analysis')}</h5>
                      <p className="text-sm xl:text-base leading-relaxed text-body">
                        {t('Expert evaluation of your energy needs and site potential.')}
                      </p>
                    </div>
                  </div>
                  <div className="md:column-6 xl:column-3">
                    <div className="reveal-item text-center px-4 xl:px-0 2xl:px-4">
                      <div className="mb-6 size-14 rounded-full border-2 border-primary bg-white text-lg font-semibold flex justify-center items-center text-primary mx-auto shadow-sm">
                        02
                      </div>
                      <h5 className="font-semibold text-xl xl:text-2xl text-darker mb-4">{t('Custom 3D Engineering')}</h5>
                      <p className="text-sm xl:text-base leading-relaxed text-body">
                        {t('Precision engineering blueprints tailored to your property.')}
                      </p>
                    </div>
                  </div>
                  <div className="md:column-6 xl:column-3">
                    <div className="reveal-item text-center px-4 xl:px-0 2xl:px-4">
                      <div className="mb-6 size-14 rounded-full border-2 border-primary bg-white text-lg font-semibold flex justify-center items-center text-primary mx-auto shadow-sm">
                        03
                      </div>
                      <h5 className="font-semibold text-xl xl:text-2xl text-darker mb-4">{t('Flawless Installation')}</h5>
                      <p className="text-sm xl:text-base leading-relaxed text-body">
                        {t('Rapid, clean deployment by our certified master technicians.')}
                      </p>
                    </div>
                  </div>
                  <div className="md:column-6 xl:column-3">
                    <div className="reveal-item text-center px-4 xl:px-0 2xl:px-4">
                      <div className="mb-6 size-14 rounded-full border-2 border-primary bg-white text-lg font-semibold flex justify-center items-center text-primary mx-auto shadow-sm">
                        04
                      </div>
                      <h5 className="font-semibold text-xl xl:text-2xl text-darker mb-4">{t('Grid Activation')}</h5>
                      <p className="text-sm xl:text-base leading-relaxed text-body">
                        {t('We handle the utility company grid connection and activate.')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Inspiring Stories */}
        <section className="w-full py-20 lg:py-24 xl:py-30 relative overflow-hidden bg-white">
          <div className="section-content relative">
            <div className="container relative">
              <div className="row items-center gy-10">
                {/* Lado Esquerdo (50%) — Texto */}
                <div className="column-12 lg:column-6 relative z-10">
                  <div className="reveal-item reveal-delay-100 text-block lg:pe-8 xl:pe-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-darker leading-[1.2] mb-4 xl:mb-6 text-pretty">
                      {t('Proven Deployments Across Mozambique')}
                    </h2>
                    <p className="text-body text-base md:text-lg leading-relaxed mb-8 text-pretty hyphens-none">
                      {t('Watch how our sustainable energy installations transform homes, businesses, and rural districts with dependable zero-carbon electricity.')}
                    </p>
                    <button
                      type="button"
                      onClick={() => onNavigate('project')}
                      className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-12 lg:h-14 gap-3.5 rounded-full pl-7 pr-2.5 sm:pr-3 text-sm font-semibold shadow-lg hover:shadow-primary/25"
                    >
                      <span>{t('Learn More')}</span>
                      <span className="size-8 sm:size-9 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover/button:translate-x-0.5">
                        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                {/* Lado Direito (50%) — Vídeos dos Casos */}
                <div className="column-12 lg:column-6 overflow-visible">
                  <div className="reveal-item reveal-delay-300">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {stories.map((story, sIdx) => (
                        <div key={sIdx} className="relative aspect-9/16 w-full rounded-2xl overflow-hidden group shadow-md border-b-4 border-primary">
                          <img
                            alt={story.title}
                            className="object-cover w-full h-full"
                            src={story.image}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-darker/70 via-transparent to-transparent"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
