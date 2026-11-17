import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface FaqsPageProps {
  onNavigate: (page: string) => void;
  onOpenVideo?: () => void;
  onOpenQuote?: () => void;
}

interface FaqItem {
  q: string;
  a: string;
}

export function FaqsPage({ onNavigate, onOpenVideo, onOpenQuote }: FaqsPageProps) {
  void onOpenVideo;
  void onOpenQuote;
  const { lang, t } = useLanguage();

  const generalFaqs: FaqItem[] = lang === 'pt' ? [
    {
      q: 'Quanto pode a nossa empresa poupar com sistemas solares e híbridos da LECASU?',
      a: 'A poupança depende do perfil de carga e da dependência de geradores a diesel, mas as instalações C&I típicas da LECASU reduzem custos de energia entre 50% e 70%. Em sistemas híbridos sincronizados com geradores, a substituição de diesel atinge com regularidade até 65%. Na nossa avaliação inicial, fornecemos uma análise de retorno e viabilidade técnica completa.'
    },
    {
      q: 'O que é a Injeção na Rede / Compensação e quais os seus benefícios?',
      a: 'Trata-se de um mecanismo em que o excedente de energia solar gerado é injetado na rede local ou compensado no consumo. Durante as horas de pico solar, o excesso de produção compensa o consumo nos períodos de menor geração.'
    },
    {
      q: 'Os painéis solares geram energia à noite ou em dias nublados?',
      a: 'Os painéis dependem da radiação solar, não produzindo eletricidade à noite. Em dias encobertos, os módulos modernos Tier-1 continuam a captar radiação difusa, produzindo entre 25% e 40% da capacidade de pico. Com sistemas de baterias integrados, a energia limpa fica garantida mesmo após o anoitecer.'
    },
    {
      q: 'A minha cobertura é adequada para instalação de painéis solares?',
      a: 'A grande maioria das coberturas industriais, comerciais e residenciais (chapa metálica, telha, lajes de betão) é compatível com estruturas de fixação solar. Os nossos engenheiros avaliam a orientação, inclinação, estado estrutural e sombreamento para conceber uma solução segura e estanque.'
    }
  ] : [
    {
      q: 'How much can our commercial facility save with LECASU solar and hybrid systems?',
      a: 'Savings depend on your facility load profile and diesel reliance, but typical LECASU commercial and industrial installations cut electricity and fuel expenses by 50% to 70%. In hybrid systems synchronized with diesel generators, fuel displacement routinely reaches up to 65%. During our initial technical assessment, we provide a complete engineering yield analysis and ROI projection.'
    },
    {
      q: 'What is Net Metering and how does it benefit me?',
      a: 'Net Metering is a billing mechanism that credits you for the excess electricity your solar panels generate and feed back into the local power grid. When your panels produce more than you consume during peak daylight, your electric meter spins backwards, earning energy credits that offset power you draw at night.'
    },
    {
      q: 'Do solar panels generate electricity at night or on cloudy days?',
      a: 'Solar panels rely on daylight, so they do not produce power at night. On overcast or cloudy days, modern Tier-1 photovoltaic panels continue to capture diffuse solar irradiance, producing between 25% and 40% of their peak capacity. Combining your array with a smart battery storage system ensures uninterrupted green power after dark.'
    },
    {
      q: 'Is my roof suitable for a solar panel installation?',
      a: 'Most roofing materials—including composite asphalt shingles, metal standing seams, concrete tiles, and flat roofs—are compatible with solar mounting systems. Our certified structural engineers assess roof orientation, pitch, age, and shading to design an optimal, leak-proof array tailored to your home.'
    }
  ];

  const projectFaqs: FaqItem[] = lang === 'pt' ? [
    {
      q: 'Qual é a vida útil média e a garantia de um sistema solar?',
      a: 'Os painéis solares modernos são concebidos para alta durabilidade, operando por 25 a 30 anos. Os sistemas incluem garantia de desempenho linear de 25 anos dos fabricantes Tier-1, assegurando pelo menos 80-85% da eficiência original.'
    },
    {
      q: 'Quanto tempo demora o processo de engenharia e instalação?',
      a: 'A montagem física no terreno depende da dimensão, variando habitualmente entre 2 dias (residencial) e poucas semanas (médio porte C&I). O processo completo, incluindo levantamento técnico, engenharia de detalhe, licenciamento e comissionamento, decorre de forma ágil e estruturada.'
    },
    {
      q: 'Que tipo de manutenção os painéis solares requerem?',
      a: 'Os sistemas fotovoltaicos não têm peças móveis e requerem manutenção reduzida. Recomendamos limpezas periódicas para remoção de poeiras e inspeções preventivas regulares. A LECASU disponibiliza planos de O&M com telemetria SCADA 24/7.'
    },
    {
      q: 'Os painéis solares funcionam durante falhas da rede elétrica pública?',
      a: 'Sistemas solares convencionais ligados à rede desligam-se por segurança durante falhas de rede (anti-ilhamento). Contudo, quando equipados com baterias ou comissionados em modo híbrido com geradores, o sistema isola-se e mantém o fornecimento ininterrupto às cargas essenciais.'
    }
  ] : [
    {
      q: 'What is the average lifespan and warranty of a solar system?',
      a: 'Modern solar panels are engineered for durability, typically boasting a lifespan of 25 to 30 years or more. Most systems include a 25-year performance warranty ensuring panels maintain at least 80-85% of their original efficiency.'
    },
    {
      q: 'How long does the design and installation process take?',
      a: 'The physical installation of panels and inverters on a typical residential property generally takes just 1 to 2 business days. The entire end-to-end timeline—including drone site surveys, 3D CAD engineering, municipal permitting, utility interconnection review, and final inspection—averages 3 to 5 weeks.'
    },
    {
      q: 'What kind of maintenance do solar panels require?',
      a: 'Solar photovoltaic systems have zero moving parts and require minimal maintenance. In most geographic regions, normal rainfall naturally cleans panel surfaces. We recommend an annual visual inspection and light rinsing to clear dust, leaves, or pollen. Our optional service plan includes real-time telemetry monitoring and seasonal tune-ups.'
    },
    {
      q: 'Will my solar panels work during a utility grid blackout?',
      a: 'Standard grid-tied solar systems automatically disconnect during utility outages for safety reasons (anti-islanding). However, when paired with an integrated smart battery storage system or an automated microgrid backup switch, your home seamlessly isolates from the damaged utility line and powers all essential circuits continuously.'
    }
  ];

  const [openGeneralIndex, setOpenGeneralIndex] = useState<number | null>(0);
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(0);

  const toggleGeneral = (idx: number) => {
    setOpenGeneralIndex(openGeneralIndex === idx ? null : idx);
  };

  const toggleProject = (idx: number) => {
    setOpenProjectIndex(openProjectIndex === idx ? null : idx);
  };

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
                      <span className="font-normal text-sm text-white">{t('FAQ')}</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl leading-[1.1] xl:text-6xl 2xl:text-[5rem]">
                {t('Frequently Asked Questions')}
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        <section className="relative w-full py-20 lg:py-24 xl:py-30">
          <div className="container">
            <div className="row g-12 items-start lg:flex-row-reverse justify-between">
              {/* Accordion Questions Column */}
              <div className="xl:column-7">
                <div className="reveal-item reveal-delay-300 flex flex-col gap-12.5">
                  {/* Category 1: General Questions */}
                  <div>
                    <h4 className="text-3xl font-bold text-darker mb-3">{lang === 'pt' ? 'Perguntas Gerais' : 'General questions'}</h4>
                    <p className="mb-8 text-base/relaxed text-body">
                      {lang === 'pt' 
                        ? 'Respostas claras para as dúvidas mais comuns sobre serviços, processos, prazos e apoio técnico.' 
                        : 'Clear answers to common inquiries, helping you understand services, processes, pricing, timelines, and support for a smooth experience.'}
                    </p>
                    <div className="flex flex-col gap-4">
                      {generalFaqs.map((faq, idx) => {
                        const isOpen = openGeneralIndex === idx;
                        return (
                          <div
                            key={idx}
                            className={`border rounded-2xl bg-white transition-all duration-300 ${
                              isOpen ? 'border-primary/40 shadow-sm' : 'border-lighter'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleGeneral(idx)}
                              className="flex flex-1 items-center justify-between w-full p-5 lg:p-6 text-start font-semibold text-darker text-base lg:text-lg cursor-pointer transition-all group"
                            >
                              <span className="text-lg font-medium lg:text-xl text-darker pe-4 group-hover:text-primary transition-colors">
                                {faq.q}
                              </span>
                              <div className="size-9 rounded-full flex items-center justify-center shrink-0 bg-primary-lighter text-primary transition-all">
                                {isOpen ? (
                                  <svg viewBox="0 0 24 24" className="size-6 fill-primary">
                                    <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16 13h-8c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h8c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
                                  </svg>
                                ) : (
                                  <svg viewBox="0 0 24 24" className="size-6 fill-body">
                                    <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16 13h-3v3c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-3h-3c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h3v-3c0-0.552 0.448-1 1-1s1 0.448 1 1v0 3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
                                  </svg>
                                )}
                              </div>
                            </button>
                            {isOpen && (
                              <div className="px-5 pb-5 text-base leading-relaxed lg:px-6 lg:pb-6 text-body border-t border-lighter/50 pt-3">
                                {faq.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Category 2: Project & Process */}
                  <div>
                    <h4 className="text-3xl font-bold text-darker mb-3">{lang === 'pt' ? 'Projetos & Processos' : 'Project & process'}</h4>
                    <p className="mb-8 text-base/relaxed text-body">
                      {lang === 'pt'
                        ? 'Explicações detalhadas sobre fluxo de engenharia, licenciamento, segurança, garantias e ligação à rede.'
                        : 'Detailed explanations covering engineering workflows, permitting, safety, hardware warranties, and utility integration.'}
                    </p>
                    <div className="flex flex-col gap-4">
                      {projectFaqs.map((faq, idx) => {
                        const isOpen = openProjectIndex === idx;
                        return (
                          <div
                            key={idx}
                            className={`border rounded-2xl bg-white transition-all duration-300 ${
                              isOpen ? 'border-primary/40 shadow-sm' : 'border-lighter'
                            }`}
                          >
                            <button
                              type="button"
                              onClick={() => toggleProject(idx)}
                              className="flex flex-1 items-center justify-between w-full p-5 lg:p-6 text-start font-semibold text-darker text-base lg:text-lg cursor-pointer transition-all group"
                            >
                              <span className="text-lg font-medium lg:text-xl text-darker pe-4 group-hover:text-primary transition-colors">
                                {faq.q}
                              </span>
                              <div className="size-9 rounded-full flex items-center justify-center shrink-0 bg-primary-lighter text-primary transition-all">
                                {isOpen ? (
                                  <svg viewBox="0 0 24 24" className="size-6 fill-primary">
                                    <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16 13h-8c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h8c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
                                  </svg>
                                ) : (
                                  <svg viewBox="0 0 24 24" className="size-6 fill-body">
                                    <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16 13h-3v3c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-3h-3c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h3v-3c0-0.552 0.448-1 1-1s1 0.448 1 1v0 3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
                                  </svg>
                                )}
                              </div>
                            </button>
                            {isOpen && (
                              <div className="px-5 pb-5 text-base leading-relaxed lg:px-6 lg:pb-6 text-body border-t border-lighter/50 pt-3">
                                {faq.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Side CTA Card */}
              <div className="xl:column-5">
                <div className="reveal-item reveal-delay-100 p-8 lg:p-10 rounded-2xl bg-primary-lighter/40 border border-primary/20 sticky top-28">
                  <h2 className="text-3xl md:text-4xl leading-tight font-bold text-darker text-pretty mb-5">
                    {lang === 'pt' ? 'Tem mais perguntas?' : 'Do you have more questions?'}
                  </h2>
                  <p className="text-base leading-relaxed text-body text-pretty mb-8">
                    {lang === 'pt'
                      ? 'Acreditamos em fornecer aos nossos clientes soluções de energia limpa personalizadas, transparentes e eficientes, adaptadas às suas necessidades específicas.'
                      : 'We believe in providing our clients with personalized, transparent, and efficient clean energy solutions tailored to their exact roof and energy profile.'}
                  </p>
                  <h5 className="text-2xl text-darker font-bold mb-3">{t('Have a specific question?')}</h5>
                  <p className="text-base/relaxed text-body text-pretty mb-8">
                    {t('Need help with something? Our engineering team is here to assist you every step of the way. Don’t hesitate to reach out.')}
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate('contact')}
                    className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-12 lg:h-14 gap-4 rounded-full px-7 text-sm font-medium uppercase shadow-md"
                  >
                    {t('Contact Us')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
