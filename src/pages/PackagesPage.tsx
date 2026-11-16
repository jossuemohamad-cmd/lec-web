import { useState } from 'react';

interface PackagesPageProps {
  onNavigate: (page: string) => void;
  onOpenVideo?: () => void;
  onOpenQuote?: () => void;
}

export function PackagesPage({ onNavigate, onOpenVideo, onOpenQuote }: PackagesPageProps) {
  void onOpenVideo;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter Plan',
      system: 'Up to 4.5 kW System',
      price: billingCycle === 'monthly' ? '$1,260' : '$945',
      period: billingCycle === 'monthly' ? 'Flexible Monthly Financing' : 'Billed Annually (Save 25%)',
      btnText: 'GET ESTIMATE',
      isPopular: false,
      features: [
        'Tier-1 High-Efficiency Solar Panels',
        'Standard Grid-Tied Smart Inverter',
        'Comprehensive Drone-Based Roof Shading Analysis',
        'In-House Professional Installation',
        'Standard 10-Year Workmanship Warranty',
        'Real-Time Mobile App Energy Tracking'
      ]
    },
    {
      name: 'Recommended Plan',
      system: 'Up to 8.5 kW System',
      price: billingCycle === 'monthly' ? '$4,256' : '$3,192',
      period: billingCycle === 'monthly' ? 'Most Popular Choice for Homeowners' : 'Billed Annually (Save 25%)',
      btnText: 'REQUEST QUOTE',
      isPopular: true,
      features: [
        'All features in Starter Plan, plus',
        'Premium High-Output Mono PERC Solar',
        'Next-Gen Microinverter Technology',
        'Priority Grid Interconnection Activation',
        '25-Year Premium Industry Performance Warranty',
        '24/7 Dedicated Customer Support Hotline'
      ]
    },
    {
      name: 'Premium Plan',
      system: '12+ kW Scalable System + Battery',
      price: billingCycle === 'monthly' ? '$6,479' : '$4,859',
      period: billingCycle === 'monthly' ? 'Complete Energy Security Setup' : 'Billed Annually (Save 25%)',
      btnText: 'CONTACT US',
      isPopular: false,
      features: [
        'All features in Recommended Plan, plus',
        'Ultra-Premium All-Black Aesthetic Solar Array',
        'Smart Battery Storage System Integration',
        'Automated Blackout Isolation Switch',
        'Built-in EV Level-2 Charging Station Setup',
        'Lifetime Proactive Health Monitoring & Cleaning'
      ]
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
                        Home
                      </button>
                    </li>
                    <li className="text-white/90 text-sm">/</li>
                    <li className="inline-flex items-center gap-1">
                      <span className="font-normal text-sm text-white">Pricing</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl leading-[1.1] xl:text-6xl 2xl:text-[5rem]">
                Pricing Plans
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
                <div className="lg:column-8 xl:column-7 2xl:column-6">
                  <div className="reveal-item reveal-delay-100 2xl:px-8">
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                      Commercial &amp; Enterprise Solutions
                    </h2>
                    <p className="text-base/relaxed text-body">
                      Choose the level of support you need — whether you want everything handled for you or prefer a more hands-on approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-content relative">
            <div className="container">
              {/* Billing Cycle Toggle */}
              <div className="reveal-item reveal-delay-100 flex justify-center mb-10">
                <div className="inline-flex items-center p-1 rounded-full border border-primary bg-white shadow-xs">
                  <button
                    type="button"
                    onClick={() => setBillingCycle('monthly')}
                    className={`flex items-center gap-2.5 px-5 py-2.25 rounded-full text-sm font-medium transition-all cursor-pointer ${
                      billingCycle === 'monthly'
                        ? 'bg-primary text-white shadow-xs'
                        : 'text-body hover:text-darker'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle('yearly')}
                    className={`flex items-center gap-2.5 ps-4 pe-2.5 py-2.25 rounded-full text-sm font-medium transition-all cursor-pointer ${
                      billingCycle === 'yearly'
                        ? 'bg-primary text-white shadow-xs'
                        : 'text-body hover:text-darker'
                    }`}
                  >
                    <span>Yearly</span>
                    <span className={`px-2 py-0.5 text-[11px] font-semibold rounded-full transition-colors ${
                      billingCycle === 'yearly' ? 'bg-white text-primary' : 'bg-primary text-white'
                    }`}>
                      Save 25%
                    </span>
                  </button>
                </div>
              </div>

              {/* Plans Grid */}
              <div className="row gy-8">
                {plans.map((plan, idx) => (
                  <div key={idx} className="md:column-6 lg:column-4">
                    <div
                      className={`reveal-item rounded-2xl h-full flex flex-col border-b-4 transition-all duration-300 shadow-[0_4px_20px_0] shadow-black/8 ${
                        plan.isPopular
                          ? 'border-primary bg-primary text-white scale-102 lg:-translate-y-2'
                          : 'border-primary bg-white text-darker'
                      }`}
                    >
                      <div className="p-8">
                        <div className="mb-6">
                          <h3 className={`text-xl font-semibold mb-1 ${plan.isPopular ? 'text-white' : 'text-darker'}`}>
                            {plan.name}
                          </h3>
                          <p className={`text-base ${plan.isPopular ? 'text-white/90' : 'text-body'}`}>
                            {plan.system}
                          </p>
                        </div>
                        <div className="mb-6.5">
                          <div className={`text-4xl lg:text-5xl font-semibold tracking-tight ${plan.isPopular ? 'text-white' : 'text-darker'}`}>
                            {plan.price}
                          </div>
                          <p className={`text-sm mt-2 ${plan.isPopular ? 'text-white/80' : 'text-body'}`}>
                            {plan.period}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => (onOpenQuote ? onOpenQuote() : onNavigate('contact'))}
                          className={`w-full inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 transition-all outline-none select-none cursor-pointer tracking-[.5px] h-10 lg:h-12 rounded-lg px-6 text-sm font-medium uppercase shadow-md ${
                            plan.isPopular
                              ? 'border-white bg-white text-primary hover:bg-darker hover:border-darker hover:text-white'
                              : 'border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark'
                          }`}
                        >
                          {plan.btnText}
                        </button>
                      </div>

                      <div className={`h-px ${plan.isPopular ? 'bg-white/30' : 'bg-primary/20'}`}></div>

                      <div className="p-8 flex-1">
                        <ul className="space-y-5">
                          {plan.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5">
                              <div className="shrink-0 mt-0.5">
                                <svg
                                  viewBox="0 0 24 24"
                                  className={`size-4.5 ${plan.isPopular ? 'fill-white stroke-white' : 'fill-primary stroke-primary'}`}
                                >
                                  <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16.737 9.676l-5.5 6c-0.183 0.2-0.446 0.324-0.737 0.324s-0.554-0.125-0.737-0.324l-0.001-0.001-2.5-2.727c-0.163-0.177-0.263-0.415-0.263-0.676 0-0.552 0.448-1 1-1 0.291 0 0.554 0.125 0.737 0.324l0.001 0.001 1.763 1.923 4.763-5.196c0.183-0.2 0.446-0.324 0.737-0.324 0.552 0 1 0.448 1 1 0 0.261-0.1 0.498-0.264 0.677l0.001-0.001z"></path>
                                </svg>
                              </div>
                              <span className={`text-base font-normal ${plan.isPopular ? 'text-white' : 'text-darker'}`}>
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
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
                  <h2 className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.27] uppercase text-pretty max-w-md">
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
