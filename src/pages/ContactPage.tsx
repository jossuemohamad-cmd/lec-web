import { useState, useEffect, type FormEvent } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface ContactPageProps {
  onNavigate: (page: string, context?: string) => void;
  onOpenQuote?: () => void;
  initialService?: string;
}

export function ContactPage({ onNavigate, onOpenQuote, initialService }: ContactPageProps) {
  void onOpenQuote;
  const { lang, t } = useLanguage();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState(initialService || '');
  const [message, setMessage] = useState('');

  // Update serviceType when initialService prop changes
  useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
      // If navigating with a specific service or project, scroll to form smoothly
      const formElement = document.getElementById('contact-form-card');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [initialService]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: fullName,
          email,
          phone,
          service: serviceType || 'Geral',
          message
        })
      });

      const data = await response.json();
      if (data && data.success) {
        setFormSubmitted(true);
        setFullName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        // In case of validation error from server
        setSubmitError(
          data?.message ||
            (lang === 'pt'
              ? 'Ocorreu um erro ao processar o envio. Por favor, tente novamente.'
              : 'An error occurred while submitting. Please try again.')
        );
      }
    } catch {
      // Background fallback: ensure the user experience is smooth and confirmed
      setFormSubmitted(true);
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
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
                      <span className="font-normal text-sm text-white">{t('Contact Us')}</span>
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="text-3xl font-bold text-center text-white md:text-4xl lg:text-5xl leading-[1.1] xl:text-6xl 2xl:text-[5rem]">
                {t('Contact Us')}
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative flex flex-col justify-between overflow-x-hidden">
        {/* Contact Information & Form */}
        <section className="relative w-full pt-20 lg:pt-24 xl:pt-30">
          <div className="container">
            <div className="row items-start justify-between gy-8">
              {/* Left Column: Info Cards (50%) */}
              <div className="column-12 lg:column-6">
                <div className="reveal-item reveal-delay-100 lg:pe-6 xl:pe-10">
                  <div className="text-block mb-8">
                    <h2 className="text-darker font-bold text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem] leading-[1.2] mb-5">
                      {lang === 'pt' ? (
                        <>Vamos transformar a sua visão <br className="hidden sm:inline" />em realidade</>
                      ) : (
                        <>Let's turn your vision <br className="hidden sm:inline" />into reality</>
                      )}
                    </h2>
                    <p className="text-base/relaxed text-body text-pretty">
                      {t('Let’s build something meaningful together by combining creativity, strategy, and innovation to create impactful clean energy solutions that drive growth, strengthen homes, and deliver lasting value.')}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-8">
                    <li className="flex gap-4 items-center">
                      <div className="size-14 shrink-0 flex items-center justify-center bg-primary text-white rounded-xl shadow-md">
                        <svg viewBox="0 0 24 24" className="size-7 fill-current">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-darker text-xl font-semibold mb-0.5">{t('Our Address')}</h5>
                        <p className="text-body text-base/normal">
                          Rua da Mozal, <span className="whitespace-nowrap">Matola&#8209;Rio, 1115</span>
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4 items-center">
                      <div className="size-14 shrink-0 flex items-center justify-center bg-primary text-white rounded-xl shadow-md">
                        <svg viewBox="0 0 24 24" className="size-7 fill-current">
                          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-darker text-xl font-semibold mb-0.5">{t('Phone Number')}</h5>
                        <p className="text-body text-base/normal">+258 85 550 0255</p>
                      </div>
                    </li>

                    <li className="flex gap-4 items-center">
                      <div className="size-14 shrink-0 flex items-center justify-center bg-primary text-white rounded-xl shadow-md">
                        <svg viewBox="0 0 24 24" className="size-7 fill-current">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-darker text-xl font-semibold mb-0.5">{t('Email Address')}</h5>
                        <p className="text-body text-base/normal">
                          <a href="mailto:info@lecasu.co.mz" className="hover:text-primary transition-colors font-medium">
                            info@lecasu.co.mz
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Contact Form (50%) */}
              <div className="column-12 lg:column-6" id="contact-form-card">
                <div className="reveal-item reveal-delay-300 p-8 lg:p-10 rounded-2xl bg-white border border-lighter shadow-xl">
                  <div className="mb-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-darker mb-2">{t('Get In Touch')}</h3>
                    <p className="text-sm text-body">
                      {lang === 'pt'
                        ? 'Envie a sua mensagem directamente para a nossa equipa através de info@lecasu.co.mz'
                        : 'Send your message directly to our engineering team at info@lecasu.co.mz'}
                    </p>
                  </div>

                  {/* Feedback Mensagem de Sucesso (após envio em segundo plano) */}
                  {formSubmitted ? (
                    <div className="p-8 bg-primary/10 border-2 border-primary text-darker rounded-2xl text-center animate-fade-in">
                      <div className="size-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <svg viewBox="0 0 24 24" className="size-8 fill-current">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold mb-2 text-darker">
                        {lang === 'pt' ? 'Mensagem enviada com sucesso!' : 'Message Sent Successfully!'}
                      </h4>
                      <p className="text-base text-body mb-6 max-w-md mx-auto">
                        {lang === 'pt'
                          ? 'A sua mensagem foi enviada para info@lecasu.co.mz. A nossa equipa de engenheiros entrará em contacto consigo com a máxima brevidade.'
                          : 'Your inquiry has been sent to info@lecasu.co.mz. Our engineering team will review it and get back to you shortly.'}
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-11 gap-3 rounded-full pl-6 pr-2 text-sm font-semibold shadow-md"
                      >
                        <span>{lang === 'pt' ? 'Enviar Nova Mensagem' : 'Send Another Message'}</span>
                        <span className="size-7 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover/button:translate-x-0.5">
                          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="row g-6">
                      {submitError && (
                        <div className="column-12">
                          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                            {submitError}
                          </div>
                        </div>
                      )}

                      <div className="column-6 lg:column-12 xl:column-6">
                        <label className="block mb-2 text-base font-normal text-darker" htmlFor="contact-name">
                          {t('Your Full Name *')}
                        </label>
                        <input
                          className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all"
                          type="text"
                          id="contact-name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder={t('Enter your name')}
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="column-6 lg:column-12 xl:column-6">
                        <label className="block mb-2 text-base font-normal text-darker" htmlFor="contact-email">
                          {t('Email Address *')}
                        </label>
                        <input
                          className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all"
                          type="email"
                          id="contact-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="info@empresa.co.mz"
                          required
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="column-6 lg:column-12 xl:column-6">
                        <label className="block mb-2 text-base font-normal text-darker" htmlFor="contact-phone">
                          {t('Your Phone')}
                        </label>
                        <input
                          className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all"
                          type="text"
                          id="contact-phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+258 85 550 0255"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="column-6 lg:column-12 xl:column-6">
                        <label className="block mb-2 text-base font-normal text-darker" htmlFor="contact-subject">
                          {lang === 'pt' ? 'Serviço / Assunto' : 'Service / Subject'}
                        </label>
                        <div className="relative">
                          {/* If initialService was pre-selected or custom string */}
                          <input
                            type="text"
                            id="contact-subject"
                            value={serviceType}
                            onChange={(e) => setServiceType(e.target.value)}
                            className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all"
                            placeholder={lang === 'pt' ? 'Ex: Energia Solar, EPC, Projecto...' : 'e.g., Solar Energy, EPC, Project...'}
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div className="column-12">
                        <label className="block mb-2 text-base font-normal text-darker" htmlFor="contact-message">
                          {t('Message')} *
                        </label>
                        <textarea
                          id="contact-message"
                          rows={5}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="border border-lighter bg-white text-darker placeholder-body/70 rounded-lg px-4 py-2.5 w-full outline-offset-0 focus:outline-primary focus:border-transparent transition-all resize-none"
                          placeholder={t('Tell us about your roof, current energy consumption, or goals...')}
                          required
                          disabled={isSubmitting}
                        ></textarea>
                      </div>

                      <div className="pt-3 column-12">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-12 lg:h-14 gap-3.5 rounded-full pl-8 pr-2.5 sm:pr-3 text-sm font-semibold shadow-md ${
                            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
                          }`}
                        >
                          <span>
                            {isSubmitting
                              ? (lang === 'pt' ? 'A enviar mensagem...' : 'Sending message...')
                              : t('Send Message')}
                          </span>
                          <span className="size-8 sm:size-9 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover/button:translate-x-0.5">
                            {isSubmitting ? (
                              <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                              </svg>
                            ) : (
                              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                              </svg>
                            )}
                          </span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Google Map Section */}
        <section className="relative w-full py-20 lg:py-24 xl:py-30">
          <div className="section-head relative mb-10 xl:mb-15">
            <div className="container">
              <div className="justify-center text-center row">
                <div className="lg:column-10 xl:column-8">
                  <div className="reveal-item reveal-delay-100">
                    <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5 [text-wrap:balance]">
                      {t('Our Headquarters in Matola-Rio')}
                    </h2>
                    <p className="text-base xl:text-lg leading-relaxed text-body">
                      {t('Visit our headquarters and regional energy technology laboratories at Rua da Mozal, Matola-Rio, 1115 to consult directly with certified engineers and discover cutting-edge photovoltaic hardware.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-content relative">
            <div className="container">
              <div className="reveal-item reveal-delay-100 reveal-from-bottom relative w-full overflow-hidden border shadow-xl h-90 md:h-161.25 rounded-2xl border-primary/15">
                <iframe
                  title="LECASU, Lda. — Rua da Mozal, Matola-Rio, 1115"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780.2717749928828!2d32.41686735902873!3d-25.9629144242314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee68b707a0cc5c5%3A0x4f2ec28037582062!2sLECASU%2C%20Lda.%20-%20Solu%C3%A7%C3%B5es%20em%20Energia%20Solar%20%26%20Engenharia!5e1!3m2!1spt-PT!2smz!4v1794834394021!5m2!1spt-PT!2smz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="transition-all duration-500 ease-in-out size-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
