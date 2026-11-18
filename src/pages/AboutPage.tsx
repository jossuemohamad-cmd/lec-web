import { useLanguage } from '../i18n/LanguageContext';

interface AboutPageProps {
  onNavigate: (page: string) => void;
  onOpenQuote?: () => void;
}

export function AboutPage({ onNavigate, onOpenQuote }: AboutPageProps) {
  void onOpenQuote;
  const { t } = useLanguage();

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
                      <span className="font-normal text-sm text-white">{t('About Us')}</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl leading-[1.1] xl:text-6xl 2xl:text-[5rem]">
                {t('About Us')}
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        {/* Section: Decarbonization is Mission (Padronizado 50% / 50%) */}
        <section className="relative w-full py-20 lg:py-24 xl:py-30 bg-white">
          <div className="section-content relative">
            <div className="container">
              <div className="row items-stretch gy-8">
                {/* Lado Esquerdo (50%) — Imagem esticada na altura do texto */}
                <div className="column-12 lg:column-6 flex flex-col">
                  <div className="reveal-item reveal-delay-100 relative w-full h-full flex flex-col flex-1 max-w-lg lg:max-w-none mx-auto">
                    <div className="relative w-full h-full min-h-[380px] lg:min-h-0 rounded-2xl overflow-hidden shadow-xl border-b-6 border-primary group flex-1">
                      <img
                        alt="LECASU Off-Grid Modular Solar Installation"
                        width={700}
                        height={700}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="/lecasu/incubox-site.jpeg"
                      />
                    </div>
                  </div>
                </div>

                {/* Lado Direito (50%) — Texto com espaçamento uniforme */}
                <div className="column-12 lg:column-6 flex flex-col justify-between">
                  <div className="reveal-item reveal-delay-200 lg:ps-8 xl:ps-12 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">{t('Quem Somos')}</div>
                      <h2 className="text-3xl lg:text-4xl xl:text-5xl leading-[1.167] font-bold text-darker mb-6 text-pretty">
                        {t('Somos uma empresa de engenharia que acredita no valor de fazer bem as coisas.')}
                      </h2>
                      <div className="space-y-4 text-base/relaxed text-body mb-8 text-pretty">
                        <p>
                          {t('A LECASU é uma empresa moçambicana dedicada ao desenvolvimento de soluções de energia e engenharia eléctrica para clientes residenciais, comerciais, industriais e institucionais.')}
                        </p>
                        <p>
                          {t('Trabalhamos em cada projecto com um objectivo claro: compreender as necessidades do cliente e encontrar uma solução técnica que seja segura, viável e duradoura.')}
                        </p>
                        <p>
                          {t('A nossa actividade abrange estudos e projectos de engenharia, sistemas solares fotovoltaicos, soluções híbridas, instalações eléctricas, manutenção e assistência técnica.')}
                        </p>
                        <p>
                          {t('Acreditamos que um bom projecto não termina com a entrega dos equipamentos. É preciso acompanhar, resolver problemas e garantir que o investimento continua a produzir resultados.')}
                        </p>
                        <p className="font-medium text-darker">
                          {t('É assim que queremos construir a nossa história: um projecto, um cliente e uma relação de confiança de cada vez.')}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => onNavigate('contact')}
                        className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-12 lg:h-14 gap-4 rounded-full px-7 text-sm font-medium uppercase shadow-lg hover:shadow-primary/25"
                      >
                        <span>{t('Fale Connosco')}</span>
                        <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-white/40 group-hover/button:border-white fill-white size-5">
                          <svg viewBox="0 0 24 24" className="size-3">
                            <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                          </svg>
                        </div>
                      </button>
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
                  <div className="reveal-item group border border-b-4 bg-white border-primary/50 transition-all p-6 rounded-2xl shadow-sm h-full">
                    <div className="text-darker transition-colors font-semibold text-5xl/[1.1] mb-5">
                      <span className="tabular-nums inline-block">25+</span>
                    </div>
                    <h5 className="text-dark transition-colors font-semibold text-xl/relaxed mb-3">
                      {t('Projects Delivered')}
                    </h5>
                    <p className="text-body transition-colors text-base/snug">
                      {t('Completed turnkey C&I installations, off-grid systems, and hybrid micro-grids across Mozambique.')}
                    </p>
                  </div>
                </div>

                <div className="sm:column-6 lg:column-3">
                  <div className="reveal-item group border border-b-4 bg-white border-primary/50 transition-all p-6 rounded-2xl shadow-sm h-full">
                    <div className="text-darker transition-colors font-semibold text-5xl/[1.1] mb-5">
                      <span className="tabular-nums inline-block">12+</span>
                    </div>
                    <h5 className="text-dark transition-colors font-semibold text-xl/relaxed mb-3">
                      {t('Hybrid & Off-Grid Specialists')}
                    </h5>
                    <p className="text-body transition-colors text-base/snug">
                      {t('Dedicated engineering team specialized in solar PV, battery storage, and diesel generator synchronisation.')}
                    </p>
                  </div>
                </div>

                <div className="sm:column-6 lg:column-3">
                  <div className="reveal-item group border border-b-4 bg-white border-primary/50 transition-all p-6 rounded-2xl shadow-sm h-full">
                    <div className="text-darker transition-colors font-semibold text-5xl/[1.1] mb-5">
                      <span className="tabular-nums inline-block">4+</span>
                    </div>
                    <h5 className="text-dark transition-colors font-semibold text-xl/relaxed mb-3">
                      {t('Operations in Mozambique')}
                    </h5>
                    <p className="text-body transition-colors text-base/snug">
                      {t('Active operations and deployed infrastructure in Maputo, Cabo Delgado, Nampula, and Niassa provinces.')}
                    </p>
                  </div>
                </div>

                <div className="sm:column-6 lg:column-3">
                  <div className="reveal-item group border border-b-4 bg-white border-primary/50 transition-all p-6 rounded-2xl shadow-sm h-full">
                    <div className="text-darker transition-colors font-semibold text-5xl/[1.1] mb-5">
                      <span className="tabular-nums inline-block">100%</span>
                    </div>
                    <h5 className="text-dark transition-colors font-semibold text-xl/relaxed mb-3">
                      {t('Engineering Rigor')}
                    </h5>
                    <p className="text-body transition-colors text-base/snug">
                      {t('Full single-line design, protective relays, live telemetry, and proactive preventative maintenance.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Aligning Technology with Business Strategy (Padronizado 50% / 50%) */}
        <section className="relative w-full py-20 lg:py-24 xl:py-30 bg-[#f8f9fa] border-y border-gray-200/70">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" width={515} height={367} className="absolute top-0 inset-s-0 w-128.75 h-91.75 opacity-40" src="/solurax/shape-a.3alpm6du1b821.png" />
            <img alt="" width={348} height={373} className="absolute top-0 inset-s-0 w-87 h-93.25 opacity-25" src="/solurax/line-b.3n1vtjp4lg3yk.png" />
            <img alt="" width={361} height={647} className="absolute bottom-0 inset-e-0 w-95.25 h-161.75 opacity-25" src="/solurax/line-e.2kld3qnxxjrpv.png" />
            <img alt="" width={280} height={429} className="absolute bottom-10 inset-s-0 w-70 h-107.25 opacity-25" src="/solurax/hexagon-large-half-b.33_zqf09bzfa9.png" />
            <img alt="" width={181} height={157} className="absolute top-1/10 translate-container-end w-45.25 h-39.25 opacity-25" src="/solurax/hexagon-small-a.0nd4j_gaek6pl.png" />
          </div>

          <div className="section-content relative">
            <div className="container">
              <div className="row items-stretch gy-8">
                {/* Lado Esquerdo (50%) — Texto */}
                <div className="column-12 lg:column-6 flex flex-col justify-between">
                  <div className="reveal-item reveal-delay-100 text-block lg:pe-8 xl:pe-12 flex flex-col justify-between h-full">
                    <div className="mb-6">
                      <div className="mb-3 text-sm/4.25 font-semibold uppercase text-primary tracking-wider">{t('Our Value')}</div>
                      <h2 className="mb-4 text-darker text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold text-pretty">
                        {t('Aligning technology with business strategy.')}
                      </h2>
                      <p className="text-base/relaxed text-body text-pretty">
                        {t("LECASU was founded to bridge Africa's energy deficit through robust engineering. We design systems that withstand demanding climates, grid volatility, and remote terrain, providing long-term reliability for enterprises and communities.")}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex gap-3">
                        <svg viewBox="0 0 24 24" className="size-5.5 mt-1 shrink-0 fill-primary">
                          <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16.737 9.676l-5.5 6c-0.183 0.2-0.446 0.324-0.737 0.324s-0.554-0.125-0.737-0.324l-0.001-0.001-2.5-2.727c-0.163-0.177-0.263-0.415-0.263-0.676 0-0.552 0.448-1 1-1 0.291 0 0.554 0.125 0.737 0.324l0.001 0.001 1.763 1.923 4.763-5.196c0.183-0.2 0.446-0.324 0.737-0.324 0.552 0 1 0.448 1 1 0 0.261-0.1 0.498-0.264 0.677l0.001-0.001z"></path>
                        </svg>
                        <div>
                          <h5 className="text-darker font-semibold text-lg leading-tight mb-1">{t('Our Vision')}</h5>
                          <p className="text-sm/relaxed text-body">{t('Become a leading energy infrastructure company in Africa, powering sustainable industrialization and community resilience.')}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <svg viewBox="0 0 24 24" className="size-5.5 mt-1 shrink-0 fill-primary">
                          <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16.737 9.676l-5.5 6c-0.183 0.2-0.446 0.324-0.737 0.324s-0.554-0.125-0.737-0.324l-0.001-0.001-2.5-2.727c-0.163-0.177-0.263-0.415-0.263-0.676 0-0.552 0.448-1 1-1 0.291 0 0.554 0.125 0.737 0.324l0.001 0.001 1.763 1.923 4.763-5.196c0.183-0.2 0.446-0.324 0.737-0.324 0.552 0 1 0.448 1 1 0 0.261-0.1 0.498-0.264 0.677l0.001-0.001z"></path>
                        </svg>
                        <div>
                          <h5 className="text-darker font-semibold text-lg leading-tight mb-1">{t('Our Mission')}</h5>
                          <p className="text-sm/relaxed text-body">{t('Deliver reliable and sustainable energy solutions tailored for African conditions through one accountable engineering partner.')}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <svg viewBox="0 0 24 24" className="size-5.5 mt-1 shrink-0 fill-primary">
                          <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16.737 9.676l-5.5 6c-0.183 0.2-0.446 0.324-0.737 0.324s-0.554-0.125-0.737-0.324l-0.001-0.001-2.5-2.727c-0.163-0.177-0.263-0.415-0.263-0.676 0-0.552 0.448-1 1-1 0.291 0 0.554 0.125 0.737 0.324l0.001 0.001 1.763 1.923 4.763-5.196c0.183-0.2 0.446-0.324 0.737-0.324 0.552 0 1 0.448 1 1 0 0.261-0.1 0.498-0.264 0.677l0.001-0.001z"></path>
                        </svg>
                        <div>
                          <h5 className="text-darker font-semibold text-lg leading-tight mb-1">{t('Our Motto')}</h5>
                          <p className="text-sm/relaxed text-body">{t('Engineering Excellence, Reliability & Performance, Innovation, and Uncompromising Commitment to Africa.')}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lado Direito (50%) — Imagem esticada com botão de vídeo */}
                <div className="column-12 lg:column-6 flex flex-col">
                  <div className="reveal-item reveal-delay-300 relative w-full h-full flex flex-col flex-1 max-w-lg lg:max-w-none mx-auto">
                    <div className="relative w-full h-full min-h-[380px] lg:min-h-0 rounded-2xl overflow-hidden shadow-xl border-b-6 border-primary group flex-1">
                      <img
                        alt="Modern Solar Residence with Garden"
                        width={966}
                        height={995}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="/lecasu/official-project-skm.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Company Overview & Engineering Team (Padronizado 50% / 50%) */}
        <section className="relative w-full py-20 lg:py-24 xl:py-30 bg-white">
          <div className="section-content relative">
            <div className="container">
              <div className="row items-stretch gy-10">
                {/* Lado Esquerdo (50%) — Imagem esticada da Equipa */}
                <div className="column-12 lg:column-6 flex flex-col">
                  <div className="reveal-item relative w-full h-full flex flex-col flex-1 max-w-lg lg:max-w-none mx-auto">
                    <div className="relative w-full h-full min-h-[380px] lg:min-h-0 rounded-2xl overflow-hidden shadow-xl border-b-6 border-primary group flex-1">
                      <img
                        alt="LECASU Engineering Team on Site"
                        width={800}
                        height={600}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src="/lecasu/about-team.jpeg"
                      />
                    </div>
                  </div>
                </div>

                {/* Lado Direito (50%) — Missão, Visão e Valores */}
                <div className="column-12 lg:column-6 flex flex-col justify-between">
                  <div className="reveal-item lg:ps-8 xl:ps-12 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">{t('Engenharia e Compromisso')}</div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-darker mb-6 leading-tight text-pretty">
                        {t('A Nossa Visão, Missão e Valores')}
                      </h2>
                      <div className="flex flex-col gap-4">
                        <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 border-l-4 border-l-primary shadow-xs">
                          <h4 className="font-bold text-darker text-base sm:text-lg mb-1">{t('Missão')}</h4>
                          <p className="text-sm text-body leading-relaxed">
                            {t('Fornecer soluções energéticas confiáveis, sustentáveis e eficientes, concebidas com rigor de engenharia para impulsionar o crescimento de África.')}
                          </p>
                        </div>

                        <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 border-l-4 border-l-primary shadow-xs">
                          <h4 className="font-bold text-darker text-base sm:text-lg mb-1">{t('Visão')}</h4>
                          <p className="text-sm text-body leading-relaxed">
                            {t('Tornar-se uma empresa líder em infraestrutura energética em África, sendo a parceira de referência para a transição energética sustentável.')}
                          </p>
                        </div>

                        <div className="p-5 rounded-xl bg-gray-50 border border-gray-100 border-l-4 border-l-primary shadow-xs">
                          <h4 className="font-bold text-darker text-base sm:text-lg mb-1">{t('Valores')}</h4>
                          <p className="text-sm text-body leading-relaxed">
                            {t('Excelência em Engenharia, Confiabilidade & Desempenho, Inovação Prática e Compromisso Inabalável com o Desenvolvimento de África.')}
                          </p>
                        </div>
                      </div>
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
