interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenVideo?: () => void;
  onOpenQuote?: () => void;
}

export function AboutPage({ onNavigate, onOpenVideo, onOpenQuote }: AboutPageProps) {
  void onOpenVideo;
  void onOpenQuote;

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
                      <span className="font-normal text-sm text-white">About Us</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl leading-[1.1] xl:text-6xl 2xl:text-[5rem]">
                About Us
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        {/* Section: Decarbonization is Mission */}
        <section className="relative w-full py-20 lg:py-24 xl:py-30">
          <div className="section-content relative">
            <div className="container">
              <div className="justify-between row gy-8">
                {/* Left image with Solar & Hybrid badge */}
                <div className="lg:column-4 xl:column-3 relative z-20">
                  <div className="reveal-item reveal-delay-100 lg:me-7 xl:-me-7.5 relative">
                    <img
                      alt="LECASU Off-Grid Modular Solar Installation"
                      width={510}
                      height={975}
                      className="w-full rounded-2xl border-b-4 border-primary max-lg:max-h-100 object-cover object-center shadow-lg aspect-[510/975]"
                      src="/lecasu/incubox-site.jpeg"
                    />
                    <div className="absolute z-20 bottom-10 lg:bottom-30 xl:bottom-20 2xl:bottom-43 inset-e-10 lg:-inset-e-17 p-8 rounded-2xl bg-white border-b-4 border-primary flex flex-col items-center gap-4.5 shadow-[0_0_20px_0_rgba(0,0,0,.08)]">
                      <div className="bg-primary rounded-full size-15.5 flex items-center justify-center text-white shadow-md">
                        <svg viewBox="0 0 24 24" className="size-8 fill-current">
                          <path d="M12 2L14.5 7H9.5L12 2ZM4 11H8V15H3.5L4 11ZM10 11H14V15H10V11ZM16 11H20L20.5 15H16V11ZM2 17H7.5L7 21H1.5L2 17ZM9.5 17H14.5L14.5 21H9.5V17ZM16.5 17H22L22.5 21H17L16.5 17Z"/>
                        </svg>
                      </div>
                      <div className="font-semibold text-darker text-xl/none">Solar &amp; Hybrid</div>
                    </div>
                  </div>
                </div>

                {/* Right text & second image */}
                <div className="lg:column-8 xl:column-9">
                  <div className="reveal-item reveal-delay-150 lg:ms-6 xl:ms-16.5 mb-8 lg:mb-12 xl:mb-16 2xl:mb-21 max-w-md">
                    <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">Company Overview</div>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl leading-[1.167] font-bold text-darker mb-4 xl:mb-6">
                      Deliver reliable and sustainable energy solutions.
                    </h2>
                    <button
                      type="button"
                      onClick={() => onNavigate('service')}
                      className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 border-transparent bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] text-primary hover:text-darker h-auto! gap-2.5 font-medium text-base xl:text-lg"
                    >
                      <span>Learn More</span>
                      <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker ms-auto size-5">
                        <svg viewBox="0 0 24 24" className="size-3 fill-current">
                          <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                        </svg>
                      </div>
                    </button>
                  </div>

                  <div className="lg:-ms-4 xl:ms-7.5">
                    <div className="flex flex-col lg:flex-row gap-y-5 gap-x-7.5">
                      <div className="reveal-item reveal-delay-250 lg:w-54 xl:w-54 2xl:w-66.5 shrink-0">
                        <img
                          alt="Sustainable modern home"
                          width={401}
                          height={524}
                          className="w-full max-lg:max-h-100 object-cover rounded-2xl border-b-4 border-primary shadow-md"
                          src="/lecasu/about-team.jpeg"
                        />
                      </div>
                      <div className="reveal-item reveal-delay-350 flex flex-col text-lg/relaxed gap-6 py-2 text-body xl:pe-20 text-pretty">
                        <p>
                          LECASU is an energy engineering company focused on delivering reliable, efficient and scalable power solutions across Africa.
                        </p>
                        <p>
                          From initial design to long-term operation, each solution is built around reliability, efficiency and the realities of African energy infrastructure. We engineer and operate resilient solar and hybrid power stations tailored for commercial, industrial, and social impact clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stat Cards */}
          <div className="section-content relative mt-16 xl:mt-24">
            <div className="container">
              <div className="justify-between row gy-6">
                <div className="sm:column-6 lg:column-3">
                  <div className="reveal-item group border border-b-4 bg-white hover:bg-primary border-primary/50 transition-all p-6 rounded-2xl hover:border-primary hover:-translate-y-1 shadow-sm h-full">
                    <div className="text-darker transition-colors group-hover:text-white font-semibold text-5xl/[1.1] mb-5">
                      <span className="tabular-nums inline-block">25+</span>
                    </div>
                    <h5 className="text-dark transition-colors group-hover:text-white font-semibold text-xl/relaxed mb-3">
                      Projects Delivered
                    </h5>
                    <p className="text-body transition-colors group-hover:text-white/85 text-base/snug">
                      Completed turnkey C&amp;I installations, off-grid systems, and hybrid micro-grids across Mozambique.
                    </p>
                  </div>
                </div>

                <div className="sm:column-6 lg:column-3">
                  <div className="reveal-item group border border-b-4 bg-white hover:bg-primary border-primary/50 transition-all p-6 rounded-2xl hover:border-primary hover:-translate-y-1 shadow-sm h-full">
                    <div className="text-darker transition-colors group-hover:text-white font-semibold text-5xl/[1.1] mb-5">
                      <span className="tabular-nums inline-block">12+</span>
                    </div>
                    <h5 className="text-dark transition-colors group-hover:text-white font-semibold text-xl/relaxed mb-3">
                      Hybrid &amp; Off-Grid Specialists
                    </h5>
                    <p className="text-body transition-colors group-hover:text-white/85 text-base/snug">
                      Dedicated engineering team specialized in solar PV, battery storage, and diesel generator synchronisation.
                    </p>
                  </div>
                </div>

                <div className="sm:column-6 lg:column-3">
                  <div className="reveal-item group border border-b-4 bg-white hover:bg-primary border-primary/50 transition-all p-6 rounded-2xl hover:border-primary hover:-translate-y-1 shadow-sm h-full">
                    <div className="text-darker transition-colors group-hover:text-white font-semibold text-5xl/[1.1] mb-5">
                      <span className="tabular-nums inline-block">4+</span>
                    </div>
                    <h5 className="text-dark transition-colors group-hover:text-white font-semibold text-xl/relaxed mb-3">
                      Operations in Mozambique
                    </h5>
                    <p className="text-body transition-colors group-hover:text-white/85 text-base/snug">
                      Active operations and deployed infrastructure in Maputo, Cabo Delgado, Nampula, and Niassa provinces.
                    </p>
                  </div>
                </div>

                <div className="sm:column-6 lg:column-3">
                  <div className="reveal-item group border border-b-4 bg-white hover:bg-primary border-primary/50 transition-all p-6 rounded-2xl hover:border-primary hover:-translate-y-1 shadow-sm h-full">
                    <div className="text-darker transition-colors group-hover:text-white font-semibold text-5xl/[1.1] mb-5">
                      <span className="tabular-nums inline-block">100%</span>
                    </div>
                    <h5 className="text-dark transition-colors group-hover:text-white font-semibold text-xl/relaxed mb-3">
                      Engineering Rigor
                    </h5>
                    <p className="text-body transition-colors group-hover:text-white/85 text-base/snug">
                      Full single-line design, protective relays, live telemetry, and proactive preventative maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Aligning Technology with Business Strategy */}
        <section className="relative w-full py-20 lg:py-24 xl:py-30 bg-primary-lighter">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" width={515} height={367} className="absolute top-0 inset-s-0 w-128.75 h-91.75" src="/solurax/shape-a.3alpm6du1b821.png" />
            <img alt="" width={348} height={373} className="absolute top-0 inset-s-0 w-87 h-93.25" src="/solurax/line-b.3n1vtjp4lg3yk.png" />
            <img alt="" width={361} height={647} className="absolute bottom-0 inset-e-0 w-95.25 h-161.75" src="/solurax/line-e.2kld3qnxxjrpv.png" />
            <img alt="" width={280} height={429} className="absolute bottom-10 inset-s-0 w-70 h-107.25" src="/solurax/hexagon-large-half-b.33_zqf09bzfa9.png" />
            <img alt="" width={181} height={157} className="absolute top-1/10 translate-container-end w-45.25 h-39.25" src="/solurax/hexagon-small-a.0nd4j_gaek6pl.png" />
          </div>

          <div className="section-content relative">
            <div className="container">
              <div className="justify-between row items-center gy-8">
                <div className="lg:column-6 xl:column-6">
                  <div className="reveal-item reveal-delay-100 text-block xl:pe-20">
                    <div className="mb-6">
                      <div className="mb-3 text-sm/4.25 font-medium uppercase text-primary">Our Value</div>
                      <h2 className="mb-4 text-darker text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold">
                        Aligning technology with business strategy.
                      </h2>
                      <p className="text-lg/relaxed text-body">
                        LECASU was founded to bridge Africa's energy deficit through robust engineering. We design systems that withstand demanding climates, grid volatility, and remote terrain, providing long-term reliability for enterprises and communities.
                      </p>
                    </div>

                    <div className="flex flex-col gap-5 xl:pe-15">
                      <div className="flex gap-2.5">
                        <svg viewBox="0 0 24 24" className="size-5.5 xl:mt-1 shrink-0 fill-primary">
                          <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16.737 9.676l-5.5 6c-0.183 0.2-0.446 0.324-0.737 0.324s-0.554-0.125-0.737-0.324l-0.001-0.001-2.5-2.727c-0.163-0.177-0.263-0.415-0.263-0.676 0-0.552 0.448-1 1-1 0.291 0 0.554 0.125 0.737 0.324l0.001 0.001 1.763 1.923 4.763-5.196c0.183-0.2 0.446-0.324 0.737-0.324 0.552 0 1 0.448 1 1 0 0.261-0.1 0.498-0.264 0.677l0.001-0.001z"></path>
                        </svg>
                        <div>
                          <h5 className="text-darker font-semibold text-xl xl:text-2xl leading-tight mb-2.5">Our Vision</h5>
                          <p className="text-base/relaxed text-body">Become a leading energy infrastructure company in Africa, powering sustainable industrialization and community resilience.</p>
                        </div>
                      </div>

                      <div className="flex gap-2.5">
                        <svg viewBox="0 0 24 24" className="size-5.5 xl:mt-1 shrink-0 fill-primary">
                          <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16.737 9.676l-5.5 6c-0.183 0.2-0.446 0.324-0.737 0.324s-0.554-0.125-0.737-0.324l-0.001-0.001-2.5-2.727c-0.163-0.177-0.263-0.415-0.263-0.676 0-0.552 0.448-1 1-1 0.291 0 0.554 0.125 0.737 0.324l0.001 0.001 1.763 1.923 4.763-5.196c0.183-0.2 0.446-0.324 0.737-0.324 0.552 0 1 0.448 1 1 0 0.261-0.1 0.498-0.264 0.677l0.001-0.001z"></path>
                        </svg>
                        <div>
                          <h5 className="text-darker font-semibold text-xl xl:text-2xl leading-tight mb-2.5">Our Mission</h5>
                          <p className="text-base/relaxed text-body">Deliver reliable and sustainable energy solutions tailored for African conditions through one accountable engineering partner.</p>
                        </div>
                      </div>

                      <div className="flex gap-2.5">
                        <svg viewBox="0 0 24 24" className="size-5.5 xl:mt-1 shrink-0 fill-primary">
                          <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16.737 9.676l-5.5 6c-0.183 0.2-0.446 0.324-0.737 0.324s-0.554-0.125-0.737-0.324l-0.001-0.001-2.5-2.727c-0.163-0.177-0.263-0.415-0.263-0.676 0-0.552 0.448-1 1-1 0.291 0 0.554 0.125 0.737 0.324l0.001 0.001 1.763 1.923 4.763-5.196c0.183-0.2 0.446-0.324 0.737-0.324 0.552 0 1 0.448 1 1 0 0.261-0.1 0.498-0.264 0.677l0.001-0.001z"></path>
                        </svg>
                        <div>
                          <h5 className="text-darker font-semibold text-xl xl:text-2xl leading-tight mb-2.5">Our Motto</h5>
                          <p className="text-base/relaxed text-body">Engineering Excellence, Reliability &amp; Performance, Innovation, and Uncompromising Commitment to Africa.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image with Interactive Video Button */}
                <div className="lg:column-6 xl:column-6">
                  <div className="reveal-item reveal-delay-300 relative group">
                    <img
                      alt="Modern Solar Residence with Garden"
                      width={966}
                      height={995}
                      className="w-full max-lg:max-h-120 rounded-2xl border-b-4 border-primary shadow-xl object-cover"
                      src="/lecasu/official-project-skm.jpg"
                    />
                    <button
                      type="button"
                      onClick={onOpenVideo}
                      aria-label="Play presentation video"
                      className="absolute bottom-7 right-7.5 size-14 bg-primary hover:bg-primary-dark rounded-full flex justify-center items-center cursor-pointer shadow-lg hover:scale-110 transition-transform"
                    >
                      <svg viewBox="0 0 24 24" className="size-7 fill-white translate-x-0.5">
                        <path d="M18.055 11.168l-9-6c-0.156-0.105-0.348-0.168-0.555-0.168-0.552 0-1 0.448-1 1v0 12c0 0.552 0.448 1 1 1 0.207 0 0.399-0.063 0.558-0.17l-0.004 0.002 9-6c0.27-0.182 0.445-0.486 0.445-0.832s-0.175-0.65-0.442-0.83l-0.004-0.002z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Company Overview & Engineering Team */}
        <section className="relative w-full py-20 lg:py-24 xl:py-30 bg-white">
          <div className="section-content relative">
            <div className="container">
              <div className="row items-center gy-10">
                <div className="lg:column-6">
                  <div className="reveal-item relative">
                    <img
                      alt="LECASU Engineering Team on Site"
                      width={800}
                      height={600}
                      className="w-full rounded-2xl border-b-4 border-primary shadow-xl object-cover aspect-[4/3]"
                      src="/lecasu/about-team.jpeg"
                    />
                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#0f0f0f]/90 backdrop-blur-md text-white border-l-4 border-primary">
                      <div className="font-bold text-lg">Equipa de Engenharia LECASU</div>
                      <p className="text-sm text-white/80 mt-1">Especialistas em projetos solares C&amp;I, microrredes e sistemas híbridos em Moçambique.</p>
                    </div>
                  </div>
                </div>

                <div className="lg:column-6">
                  <div className="reveal-item lg:ps-10">
                    <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">Engenharia e Compromisso</div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-darker mb-6 leading-tight">
                      A Nossa Visão, Missão e Valores
                    </h2>
                    <div className="flex flex-col gap-6">
                      <div className="p-5 rounded-xl bg-primary-lighter border-l-4 border-primary">
                        <h4 className="font-bold text-darker text-lg mb-1">Missão</h4>
                        <p className="text-sm text-body leading-relaxed">
                          Fornecer soluções energéticas confiáveis, sustentáveis e eficientes, concebidas com rigor de engenharia para impulsionar o crescimento de África.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-primary-lighter border-l-4 border-primary">
                        <h4 className="font-bold text-darker text-lg mb-1">Visão</h4>
                        <p className="text-sm text-body leading-relaxed">
                          Tornar-se uma empresa líder em infraestrutura energética em África, sendo a parceira de referência para a transição energética sustentável.
                        </p>
                      </div>

                      <div className="p-5 rounded-xl bg-primary-lighter border-l-4 border-primary">
                        <h4 className="font-bold text-darker text-lg mb-1">Valores</h4>
                        <p className="text-sm text-body leading-relaxed">
                          Excelência em Engenharia, Confiabilidade &amp; Desempenho, Inovação Prática e Compromisso Inabalável com o Desenvolvimento de África.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative w-full pb-20 lg:pb-24 xl:pb-30">
          <div className="section-content relative">
            <div className="container">
              <div className="reveal-item reveal-from-bottom">
                <div className="bg-darker p-8 sm:p-12 md:p-16 xl:p-20 flex flex-wrap items-center justify-between xl:gap-x-15 gap-y-7 rounded-[1.25rem]">
                  <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] leading-[1.2] uppercase max-w-3xl">
                    Power your facility with reliable energy infrastructure
                  </h2>
                  <a
                    href="https://simulador.lecasu.co.mz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-12 lg:h-15 gap-4 px-7.5 text-base font-medium rounded-full shadow-lg"
                  >
                    Request a Proposal
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
