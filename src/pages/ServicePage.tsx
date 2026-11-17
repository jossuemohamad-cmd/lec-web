import { useLanguage } from '../i18n/LanguageContext';

interface ServicePageProps {
  onNavigate: (page: string) => void;
  onOpenVideo?: () => void;
  onOpenQuote?: () => void;
}

export function ServicePage({ onNavigate, onOpenVideo, onOpenQuote }: ServicePageProps) {
  const { lang, t } = useLanguage();

  const services = [
    {
      title: t('EPC — Engineering, Procurement & Construction'),
      desc: t('Turnkey solar delivery: engineering design, Tier-1 equipment procurement, certified construction, and grid/generator commissioning.'),
      image: '/lecasu/engineering-procurement-construction.jpeg'
    },
    {
      title: t('Energia Solar e Sistemas Híbridos'),
      desc: `${t('Ajudamos famílias e empresas a produzir e gerir a sua própria energia, com soluções solares e híbridas adaptadas às suas necessidades.')}\n\n${t('Para as empresas, procuramos transformar os custos de energia numa oportunidade de poupança, eficiência e maior competitividade.')}\n\n${t('O nosso objectivo é oferecer soluções que façam sentido, tanto do ponto de vista técnico como económico.')}`,
      image: '/lecasu/official-service-hybrid.jpeg'
    },
    {
      title: t('Energy-as-a-Service (PPA)'),
      desc: t('Zero upfront capital investment. Pay only for the clean kilowatt-hours you consume with guaranteed availability and covered maintenance.'),
      image: '/lecasu/energy-as-a-service-ppa.jpeg'
    },
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
                      {lang === 'pt' ? (
                        <>Concebido para África: <br className="hidden sm:inline" />Infraestrutura Energética Fiável</>
                      ) : (
                        <>Conceived for Africa: <br className="hidden sm:inline" />Reliable Energy Infrastructure</>
                      )}
                    </h2>
                    <p className="text-base xl:text-lg leading-relaxed text-body max-w-2xl mx-auto">
                      {t('From first assessment to long-term operation, we deliver resilient energy infrastructure through one accountable engineering partner across Mozambique.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-content relative">
            <div className="container -mb-20">
              <div className="row pb-20 gy-8">
                {services.map((svc, idx) => (
                  <div key={idx} className="xl:column-4 md:column-6">
                    <div
                      onClick={() => (onOpenQuote ? onOpenQuote() : onNavigate('contact'))}
                      className="reveal-item flex flex-col bg-white shadow-[0_2px_26px_0_rgba(0,0,0,.07)] rounded-2xl h-full border border-lighter cursor-pointer overflow-hidden border-b-4 border-b-primary group"
                    >
                      <div className="overflow-hidden h-56">
                        <img
                          alt={svc.title}
                          width={840}
                          height={520}
                          className="w-full h-full object-cover"
                          src={svc.image}
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-1 justify-between">
                        <div>
                          <h5 className="text-2xl xl:text-3xl leading-normal font-semibold text-darker group-hover:text-primary transition-colors tracking-[-1px] mb-3">
                            {svc.title}
                          </h5>
                          <div className="space-y-3 text-base/relaxed text-body">
                            {svc.desc.split('\n\n').map((paragraph, pIdx) => (
                              <p key={pIdx}>{paragraph}</p>
                            ))}
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

        {/* Section: The LECASU 4-Step Engineering Process */}
        <section className="relative w-full pt-20 lg:pt-24 xl:pt-30 bg-white">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" width={381} height={780} className="absolute top-0 inset-e-0 w-95.25 h-195" src="/solurax/line-d.1--wkxdawkfjt.png" />
          </div>
          <div className="section-head relative mb-10 xl:mb-15">
            <div className="container">
              <div className="justify-center text-center row">
                <div className="lg:column-8 xl:column-7 2xl:column-7">
                  <div className="reveal-item reveal-delay-100 2xl:px-8">
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                      {t('The LECASU 4-Step Process')}
                    </h2>
                    <p className="text-base/relaxed text-body max-w-sm mx-auto xl:px-10">
                      {t('Our seamless transition to clean energy, delivering robust and certified energy infrastructure across Mozambique.')}
                    </p>
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
                    <p className="text-body text-base md:text-lg leading-relaxed mb-8 text-pretty">
                      {t('Watch how our sustainable energy installations transform homes, businesses, and rural districts with dependable zero-carbon electricity.')}
                    </p>
                    <button
                      type="button"
                      onClick={() => onNavigate('about')}
                      className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-12 lg:h-14 gap-4 rounded-full px-7 text-sm font-medium uppercase shadow-lg hover:shadow-primary/25"
                    >
                      <span>{t('Learn More')}</span>
                      <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-white/40 group-hover/button:border-white fill-white size-5">
                        <svg viewBox="0 0 24 24" className="size-3">
                          <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                        </svg>
                      </div>
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
                          <button
                            type="button"
                            onClick={onOpenVideo}
                            aria-label={`Watch ${story.title}`}
                            className="absolute bottom-4 right-4 size-11 bg-primary hover:bg-primary-dark rounded-full flex justify-center items-center cursor-pointer shadow-lg transition-colors"
                          >
                            <svg viewBox="0 0 24 24" className="size-5 fill-white translate-x-0.5">
                              <path d="M18.055 11.168l-9-6c-0.156-0.105-0.348-0.168-0.555-0.168-0.552 0-1 0.448-1 1v0 12c0 0.552 0.448 1 1 1 0.207 0 0.399-0.063 0.558-0.17l-0.004 0.002 9-6c0.27-0.182 0.445-0.486 0.445-0.832s-0.175-0.65-0.442-0.83l-0.004-0.002z"></path>
                            </svg>
                          </button>
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
