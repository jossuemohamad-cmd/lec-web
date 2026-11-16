import { useState, useEffect } from 'react';
import { applyLanguageToDom, type Lang } from './i18n/pt';
import { AboutPage } from './pages/AboutPage';
import { ServicePage } from './pages/ServicePage';
import { ProjectPage } from './pages/ProjectPage';
import { ContactPage } from './pages/ContactPage';
import { PackagesPage } from './pages/PackagesPage';
import { FaqsPage } from './pages/FaqsPage';
import { BlogPage } from './pages/BlogPage';
export function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem('lecasu_lang') === 'pt' ? 'pt' : 'en'));

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'pt' : 'en'));
  };

  // Router state
  const [currentPage, setCurrentPage] = useState<string>('home');

  useEffect(() => {
    localStorage.setItem('lecasu_lang', lang);
    if (!loading) {
      applyLanguageToDom(lang);
    }
  }, [lang, currentPage, loading, mobileMenuOpen]);

  // Scroll detection for sticky header legibility
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync hash on initial load
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['about', 'service', 'project', 'contact', 'packages', 'faqs', 'blog'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Preloader
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 250);
          return 100;
        }
        return prev + 5;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  // Hero Counter animations
  const [installedCount, setInstalledCount] = useState(0);
  const [savingsCount, setSavingsCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);

  useEffect(() => {
    if (!loading && currentPage === 'home') {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setInstalledCount(Math.min(25, Math.floor(current * 1)));
        setSavingsCount(Math.min(12, Math.floor(current * 0.5)));
        setRatingCount(Math.min(4, Math.floor(current * 0.2)));
        if (current >= 25) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [loading, currentPage]);

  // Light scroll-triggered entrance animations
  useEffect(() => {
    if (loading) return;
    const targets = document.querySelectorAll<HTMLElement>(
      '.reveal-item, .reveal-fade, .reveal-scale, .reveal-from-top, .reveal-from-bottom, .reveal-from-left, .reveal-from-right'
    );
    targets.forEach((el) => el.classList.remove('is-revealed'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading, currentPage]);

  return (
    <div className="font-instrument-sans min-h-full flex flex-col text-body bg-white selection:bg-primary selection:text-white">
      {/* 0. PRELOADER */}
      {loading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-darker transition-opacity duration-700 ease-out opacity-100">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-primary/15 blur-[120px] animate-pulse"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center gap-8 max-w-xs w-full px-6">
            <div className="relative">
              <img
                alt="LECASU Logo"
                width={302}
                height={72}
                className="w-auto h-12 object-contain"
                src="/lecasu/lecasu-logo.png"
              />
            </div>
            <div className="w-full space-y-3">
              <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden relative">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(255, 128, 0,0.8)]"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center text-xs font-medium tracking-widest text-white/50 uppercase">
                <span>Loading</span>
                <span className="tabular-nums text-primary font-semibold">{progress}%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. FLOATING HEADER / NAVBAR */}
      <div className="reveal-item reveal-delay-100 reveal-from-top fixed top-0 left-0 w-full z-50 pt-3 lg:pt-4 transition-all duration-300">
        <div className="container">
          <div className={`border flex items-center rounded-full transition-all duration-300 min-[1470px]:-mx-10 mx-auto px-6 py-3 lg:py-3.5 ${
            scrolled 
              ? 'border-white/20 bg-[#12161a]/85 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.35)]' 
              : 'border-white/15 bg-black/30 backdrop-blur-md shadow-sm'
          }`}>
            <button
              onClick={() => navigateTo('home')}
              className="group flex items-center gap-2.5 shrink-0 cursor-pointer"
              aria-label="LECASU Home"
            >
              <img alt="LECASU" width={302} height={72} className="w-auto h-9 lg:h-10 transition-transform duration-300 group-hover:scale-105" src="/lecasu/lecasu-logo.png" />
            </button>

            {/* Desktop Navigation */}
            <nav className="items-center hidden w-full gap-6 lg:flex">
              <ul className="flex items-center gap-1 mx-auto lg:gap-2">
                {/* Home */}
                <li className="relative">
                  <button
                    type="button"
                    onClick={() => navigateTo('home')}
                    className={`relative flex items-center px-4 py-2 gap-1.5 justify-between text-base font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      currentPage === 'home' ? 'text-primary' : 'text-white hover:text-primary'
                    }`}
                  >
                    Home
                  </button>
                </li>

                <li className="relative">
                  <button
                    onClick={() => navigateTo('about')}
                    className={`relative flex items-center px-4 py-2 gap-1.5 justify-between text-base font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      currentPage === 'about' ? 'text-primary' : 'text-white hover:text-primary'
                    }`}
                  >
                    About
                  </button>
                </li>

                <li className="relative">
                  <button
                    onClick={() => navigateTo('service')}
                    className={`relative flex items-center px-4 py-2 gap-1.5 justify-between text-base font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      currentPage === 'service' ? 'text-primary' : 'text-white hover:text-primary'
                    }`}
                  >
                    Service
                  </button>
                </li>

                {/* Project */}
                <li className="relative">
                  <button
                    type="button"
                    onClick={() => navigateTo('project')}
                    className={`relative flex items-center px-4 py-2 gap-1.5 justify-between text-base font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      currentPage === 'project' ? 'text-primary' : 'text-white hover:text-primary'
                    }`}
                  >
                    Project
                  </button>
                </li>

                <li className="relative">
                  <button
                    onClick={() => navigateTo('contact')}
                    className={`relative flex items-center px-4 py-2 gap-1.5 justify-between text-base font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                      currentPage === 'contact' ? 'text-primary' : 'text-white hover:text-primary'
                    }`}
                  >
                    Contact
                  </button>
                </li>
              </ul>

              {/* Language Toggle Button */}
              <button
                type="button"
                onClick={toggleLanguage}
                title={lang === 'en' ? 'Traduzir para Português' : 'Switch to English'}
                className="inline-flex shrink-0 items-center gap-1.5 px-3.5 h-10 lg:h-11 rounded-full border border-white/25 bg-white/10 text-white hover:bg-white/20 hover:border-primary/60 text-sm font-semibold tracking-wide transition-all cursor-pointer"
              >
                <svg className="size-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
                </svg>
                <span>{lang === 'en' ? 'PT' : 'EN'}</span>
              </button>

              {/* Get in touch CTA */}
              <a
                href="https://simulador.lecasu.co.mz"
                target="_blank"
                rel="noopener noreferrer"
                className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-10 lg:h-12 gap-4 px-6 font-medium rounded-full text-base shadow-lg hover:shadow-primary/30"
              >
                Request a Proposal
              </a>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="relative z-50 flex lg:hidden flex-col items-center justify-center gap-1.25 rounded-full transition-colors duration-200 bg-white/10 ml-auto size-10 cursor-pointer"
            >
              <span className="block h-0.5 w-5 rounded-full bg-white transition-all duration-300 origin-center"></span>
              <span className="block h-0.5 w-5 rounded-full bg-white transition-all duration-300"></span>
              <span className="block h-0.5 w-5 rounded-full bg-white transition-all duration-300 origin-center"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-50"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Drawer Aside */}
      <aside
        className={`fixed top-0 start-0 z-50 flex h-full w-70 max-w-[85vw] flex-col bg-darker/95 backdrop-blur-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 flex items-center justify-between border-b border-white/10">
          <img alt="LECASU" width={160} height={40} className="h-8 w-auto" src="/lecasu/lecasu-logo.png" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white text-2xl p-1 cursor-pointer"
          >
            &times;
          </button>
        </div>
        <nav className="flex flex-col flex-1 px-6 pt-6 pb-10">
          <ul className="flex flex-col flex-1 gap-2">
            <li>
              <button
                onClick={() => navigateTo('home')}
                className={`w-full text-left py-2 font-medium ${currentPage === 'home' ? 'text-primary' : 'text-white'}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('about')}
                className={`w-full text-left py-2 font-medium ${currentPage === 'about' ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('service')}
                className={`w-full text-left py-2 font-medium ${currentPage === 'service' ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                Our Services
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('project')}
                className={`w-full text-left py-2 font-medium ${currentPage === 'project' ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('packages')}
                className={`w-full text-left py-2 font-medium ${currentPage === 'packages' ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                Pricing / Packages
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('faqs')}
                className={`w-full text-left py-2 font-medium ${currentPage === 'faqs' ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                FAQ
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('blog')}
                className={`w-full text-left py-2 font-medium ${currentPage === 'blog' ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => navigateTo('contact')}
                className={`w-full text-left py-2 font-medium ${currentPage === 'contact' ? 'text-primary' : 'text-white hover:text-primary'}`}
              >
                Contact Us
              </button>
            </li>
          </ul>
          <button
            type="button"
            onClick={toggleLanguage}
            className="w-full mt-4 py-2.5 rounded-full border border-white/20 bg-white/10 text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="size-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
            </svg>
            <span>{lang === 'en' ? 'Traduzir para Português (PT)' : 'Switch to English (EN)'}</span>
          </button>

          <a
            href="https://simulador.lecasu.co.mz"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-6 py-3 rounded-full bg-primary text-white font-medium text-center shadow-lg"
          >
            Request a Proposal
          </a>
        </nav>
      </aside>

      {/* 2. DYNAMIC PAGE ROUTER */}
      {currentPage === 'about' && (
        <AboutPage
          onNavigate={navigateTo}
          onOpenVideo={() => setVideoModalOpen(true)}
          onOpenQuote={() => setQuoteModalOpen(true)}
        />
      )}

      {currentPage === 'service' && (
        <ServicePage
          onNavigate={navigateTo}
          onOpenVideo={() => setVideoModalOpen(true)}
          onOpenQuote={() => setQuoteModalOpen(true)}
        />
      )}

      {currentPage === 'project' && (
        <ProjectPage
          onNavigate={navigateTo}
          onOpenVideo={() => setVideoModalOpen(true)}
          onOpenQuote={() => setQuoteModalOpen(true)}
        />
      )}

      {currentPage === 'contact' && (
        <ContactPage
          onNavigate={navigateTo}
          onOpenVideo={() => setVideoModalOpen(true)}
          onOpenQuote={() => setQuoteModalOpen(true)}
        />
      )}

      {currentPage === 'packages' && (
        <PackagesPage
          onNavigate={navigateTo}
          onOpenVideo={() => setVideoModalOpen(true)}
          onOpenQuote={() => setQuoteModalOpen(true)}
        />
      )}

      {currentPage === 'faqs' && (
        <FaqsPage
          onNavigate={navigateTo}
          onOpenVideo={() => setVideoModalOpen(true)}
          onOpenQuote={() => setQuoteModalOpen(true)}
        />
      )}

      {currentPage === 'blog' && (
        <BlogPage
          onNavigate={navigateTo}
          onOpenVideo={() => setVideoModalOpen(true)}
          onOpenQuote={() => setQuoteModalOpen(true)}
        />
      )}

      {/* HOME PAGE */}
      {currentPage === 'home' && (
        <>
          {/* SECÇÃO 1 & 2 — HEADER, HERO E INDICADOR DE RESULTADOS */}
          <header className="relative flex flex-col pt-[var(--menubar-height)] bg-[#0f0f0f]">
            <div className="flex-1 flex items-center pt-12 md:pt-16 xl:pt-22 2xl:pt-35 z-20 relative">
              <div className="absolute -top-[var(--menubar-height)] inset-x-0 bottom-0 pointer-events-none overflow-hidden -z-10 bg-darker parallax-bg">
                <img
                  alt="Hero background"
                  width={1920}
                  height={1010}
                  className="object-cover object-top w-full h-full"
                  src="/lecasu/hero-energy-v2.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/45 via-[#0f0f0f]/35 to-[#0f0f0f]/55 transition-opacity duration-300"></div>
              </div>

              <div className="container">
                <div className="row">
                  {/* Lado Esquerdo do Hero expandido */}
                  <div className="lg:column-10 xl:column-9 2xl:column-8">
                    <div className="reveal-stagger">
                      
                      <h1 className="reveal-item reveal-delay-150 text-white font-bold text-4xl md:text-5xl lg:text-6xl 2xl:text-[4.875rem] leading-[1.15] mb-8">
                        Powering Africa with Reliable Energy Infrastructure.
                      </h1>
                      <p className="reveal-item reveal-delay-200 text-lg/relaxed text-white/80 mb-11 max-w-2xl">
                        We design, build and operate high-performance solar and hybrid energy systems tailored for African conditions. From first assessment to long-term operation, we deliver resilient infrastructure through one accountable engineering partner.
                      </p>

                      <ul className="reveal-item reveal-delay-250 flex flex-wrap gap-4">
                        <li>
                          <a
                            href="https://simulador.lecasu.co.mz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-12 lg:h-14 gap-4 rounded-lg px-7 text-sm font-medium uppercase shadow-lg hover:shadow-primary/25 transition-all"
                          >
                            Request a Proposal
                          </a>
                        </li>
                        <li>
                          <button
                            type="button"
                            onClick={() => navigateTo('project')}
                            className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-white text-white hover:bg-white/10 fill-white h-12 lg:h-14 gap-4 rounded-lg px-7 text-sm font-medium uppercase backdrop-blur-md"
                          >
                            View Projects
                          </button>
                        </li>
                      </ul>

                      {/* Indicadores numéricos na parte inferior */}
                      <ul className="reveal-item reveal-delay-300 flex flex-wrap gap-4 sm:gap-0 mt-12 lg:mt-16 2xl:mt-24 pb-8 xl:pb-12 pt-4.5 border-t border-white/20">
                        <li>
                          <div className="text-3xl font-semibold text-white mb-2.5">
                            <span className="tabular-nums inline-block">{installedCount}+</span>
                          </div>
                          <div className="text-xs/normal tracking-[1px] font-medium uppercase text-white/65">
                            Projects <br /> Delivered
                          </div>
                        </li>
                        <li className="my-5 min-[420px]:my-0 min-[420px]:mx-4 sm:mx-10 md:mx-20 xl:mx-14 2xl:mx-20 sm:border-l border-white/20 hidden sm:block"></li>
                        <li>
                          <div className="text-3xl font-semibold text-white mb-2.5">
                            <span className="tabular-nums inline-block">{savingsCount}+</span>
                          </div>
                          <div className="text-xs/normal tracking-[1px] font-medium uppercase text-white/65">
                            Hybrid &amp; Off-Grid <br /> Specialists
                          </div>
                        </li>
                        <li className="my-5 min-[420px]:my-0 min-[420px]:mx-4 sm:mx-10 md:mx-20 xl:mx-14 2xl:mx-20 sm:border-l border-white/20 hidden sm:block"></li>
                        <li>
                          <div className="text-3xl font-semibold text-white mb-2.5">
                            <span className="tabular-nums inline-block">{ratingCount}+</span>
                          </div>
                          <div className="text-xs/normal tracking-[1px] font-medium uppercase text-white/65">
                            Operations Across <br /> Mozambique
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BRANDS / PARTNERS BAR */}
            <div className="bg-white py-10 lg:py-14 flex items-center relative z-10 border-b border-gray-100">
              <div className="container">
                <div className="w-full">
                  <div className="reveal-item flex flex-col md:flex-row md:items-center gap-6 reveal-delay-250">
                    <div className="text-sm/6 font-semibold text-darker uppercase self-start md:self-center shrink-0">
                      Trusted by leading <br /> organizations
                    </div>
                    <div className="hidden md:block shrink-0 grow-0 h-10 border-l border-darker/20 mx-4"></div>
                    <div className="flex gap-3 sm:gap-4 flex-wrap items-center">
                      <div className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-darker font-bold text-sm tracking-wider uppercase hover:text-primary hover:border-primary transition-all shadow-sm">
                        SKM Engineering
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-darker font-bold text-sm tracking-wider uppercase hover:text-primary hover:border-primary transition-all shadow-sm">
                        GAPI Moçambique
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-darker font-bold text-sm tracking-wider uppercase hover:text-primary hover:border-primary transition-all shadow-sm">
                        INCUBOX 2
                      </div>
                      <div className="px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-darker font-bold text-sm tracking-wider uppercase hover:text-primary hover:border-primary transition-all shadow-sm">
                        C&amp;I Solar Partners
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* MAIN HOME SECTIONS */}
          <main className="relative flex flex-col overflow-x-hidden">
            {/* SECÇÃO 3 — DECARBONIZATION IS MISSION */}
            <section id="decarbonization" className="relative w-full py-20 lg:py-24 xl:py-30 bg-white">
              <div className="section-content relative">
                <div className="container">
                  <div className="justify-between row gy-8">
                    <div className="lg:column-4 xl:column-3 relative z-20">
                      <div className="reveal-item reveal-delay-100 lg:me-7 xl:-me-7.5 relative">
                        <img
                          alt="LECASU Off-Grid Solar Hub"
                          width={510}
                          height={975}
                          className="w-full rounded-2xl border-b-4 border-primary max-lg:max-h-100 object-cover object-center shadow-md aspect-[510/975]"
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

                    <div className="lg:column-8 xl:column-9">
                      <div className="reveal-item reveal-delay-150 lg:ms-6 xl:ms-16.5 mb-8 lg:mb-12 xl:mb-16 2xl:mb-21 max-w-md">
                        <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">About LECASU</div>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl leading-[1.167] font-bold text-darker mb-4 xl:mb-6">
                          Deliver reliable and sustainable energy solutions.
                        </h2>
                        <button
                          type="button"
                          onClick={() => navigateTo('about')}
                          className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 border-transparent bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] text-primary hover:text-darker h-10 lg:h-12 rounded-lg px-0 gap-2.5 font-medium text-base xl:text-lg"
                        >
                          Learn More
                          <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker ms-auto size-5">
                            <svg viewBox="0 0 24 24" className="size-3">
                              <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                            </svg>
                          </div>
                        </button>
                      </div>

                      <div className="lg:-ms-4 xl:ms-7.5">
                        <div className="flex flex-col lg:flex-row gap-y-5 gap-x-7.5">
                          <div className="reveal-item reveal-delay-250 lg:w-54 xl:w-54 2xl:w-66.5 shrink-0">
                            <img
                              alt="Eco House with Solar"
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
                              From initial design to long-term operation, each solution is built around reliability, efficiency and the realities of African energy infrastructure. We design, build and operate high-performance solar and hybrid systems engineered for long-term performance.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECÇÃO 4 — SOLUÇÕES DE ENERGIA */}
            <section id="solucoes" className="relative w-full py-20 lg:py-24 xl:py-30 bg-primary-lighter/50">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" width={515} height={367} className="absolute top-0 inset-s-0 w-128.75 h-91.75 opacity-60" src="/solurax/shape-a.3alpm6du1b821.png" />
                <img alt="" width={348} height={373} className="absolute top-0 inset-s-0 w-87 h-93.25 opacity-40" src="/solurax/line-a.0vp8em3vzxe7v.png" />
                <img alt="" width={280} height={429} className="absolute top-2/5 inset-s-0 w-70 h-107.25 opacity-40" src="/solurax/hexagon-large-half-a.0lvwhb9rd0dr6.png" />
                <img alt="" width={181} height={157} className="absolute top-1/10 translate-container-end w-45.25 h-39.25 opacity-40" src="/solurax/hexagon-small-a.0nd4j_gaek6pl.png" />
              </div>

              <div className="section-content relative">
                <div className="container">
                  <div className="justify-between row gy-8 mb-16">
                    <div className="lg:column-6 xl:column-6">
                      <div className="reveal-item reveal-delay-100 flex flex-col h-full justify-between">
                        <div className="mb-8 xl:mb-12">
                          <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">What We Deliver</div>
                          <h2 className="text-3xl lg:text-4xl xl:text-5xl leading-[1.167] font-bold text-darker mb-4 xl:mb-6 text-pretty">
                            Conceived for Africa: Engineered for Maximum Energy Reliability
                          </h2>
                          <button
                            type="button"
                            onClick={() => navigateTo('service')}
                            className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 border-transparent bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] text-primary hover:text-darker h-10 lg:h-12 rounded-lg px-0 gap-2.5 font-medium text-base xl:text-lg"
                          >
                            Learn More
                            <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker ms-auto size-5">
                              <svg viewBox="0 0 24 24" className="size-3">
                                <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                              </svg>
                            </div>
                          </button>
                        </div>
                        <div className="bg-darker p-10 rounded-2xl mt-auto flex gap-6 shadow-xl">
                          <div className="w-1 bg-primary shrink-0 rounded-full"></div>
                          <blockquote className="text-xl 2xl:text-2xl leading-snug text-white">
                            Decarbonization requires balance between legacy systems and emerging technologies. Between the environment and business economies.
                          </blockquote>
                        </div>
                      </div>
                    </div>

                    <div className="lg:column-6 2xl:column-5 relative z-20">
                      <div className="reveal-item reveal-delay-300 xl:ps-5 2xl:ps-0 pe-13.5 2xl:-ms-15 relative h-full">
                        <img
                          alt="Solar Panel Grid Solution"
                          width={764}
                          height={738}
                          className="w-full max-lg:max-h-120 lg:min-h-full object-cover rounded-2xl border-b-4 border-primary shadow-lg"
                          src="/lecasu/solar-site.jpeg"
                        />
                        <div className="absolute z-20 inset-e-2 bottom-15.5 p-8 rounded-2xl bg-white border-b-4 border-primary flex flex-col items-center gap-4.5 shadow-[0_0_20px_0_rgba(0,0,0,.08)]">
                          <div className="bg-primary rounded-full size-15.5 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width={34} height={34} fill="none" viewBox="0 0 34 34">
                              <path fill="#fff" d="M2.123 4.238a2.12 2.12 0 0 1 2.12-2.119H8.48a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12H4.242a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12zM2.123 14.833a2.12 2.12 0 0 1 2.12-2.119H8.48a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12H4.242a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12zM2.123 25.428a2.12 2.12 0 0 1 2.12-2.119H8.48a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12H4.242a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12zm10.595 0a2.12 2.12 0 0 1 2.12-2.119h4.237a2.12 2.12 0 0 1 2.12 2.12v4.237a2.12 2.12 0 0 1-2.12 2.12h-4.238a2.12 2.12 0 0 1-2.119-2.12z"></path>
                            </svg>
                          </div>
                          <div className="font-semibold text-darker text-xl/none">Grid Solution</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7.5">
                    <div className="reveal-item flex flex-col bg-white shadow-[0_2px_26px_0_rgba(0,0,0,.07)] rounded-2xl reveal-delay-100 hover:shadow-xl transition-shadow">
                      <img alt="Residential Solar" width={840} height={520} className="w-full rounded-t-2xl object-cover h-60" src="/lecasu/engineering-procurement-construction.jpeg" />
                      <div className="p-8 flex flex-col flex-1 justify-between">
                        <div>
                          <h5 className="text-2xl xl:text-3xl leading-normal font-semibold text-darker mb-4">Residential Solar</h5>
                          <p className="text-base leading-relaxed text-body mb-6">
                            Advanced solar arrays tailored for modern homeowners who prioritize sustainability and economic independence.
                          </p>
                        </div>
                        <button
                          onClick={() => navigateTo('service')}
                          className="group/button inline-flex shrink-0 items-center whitespace-nowrap text-primary hover:text-darker font-medium text-base xl:text-lg gap-2.5 cursor-pointer"
                        >
                          Explore
                          <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker size-5">
                            <svg viewBox="0 0 24 24" className="size-3">
                              <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="reveal-item flex flex-col bg-white shadow-[0_2px_26px_0_rgba(0,0,0,.07)] rounded-2xl reveal-delay-200 hover:shadow-xl transition-shadow">
                      <img alt="Commercial Solar" width={840} height={520} className="w-full rounded-t-2xl object-cover h-60" src="/lecasu/official-service-hybrid.jpeg" />
                      <div className="p-8 flex flex-col flex-1 justify-between">
                        <div>
                          <h5 className="text-2xl xl:text-3xl leading-normal font-semibold text-darker mb-4">Commercial Solar</h5>
                          <p className="text-base leading-relaxed text-body mb-6">
                            Solurax industrial-grade energy solutions that optimize operational costs and enhance corporate ESG metrics.
                          </p>
                        </div>
                        <button
                          onClick={() => navigateTo('service')}
                          className="group/button inline-flex shrink-0 items-center whitespace-nowrap text-primary hover:text-darker font-medium text-base xl:text-lg gap-2.5 cursor-pointer"
                        >
                          Explore
                          <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker size-5">
                            <svg viewBox="0 0 24 24" className="size-3">
                              <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>

                    <div className="reveal-item flex flex-col bg-white shadow-[0_2px_26px_0_rgba(0,0,0,.07)] rounded-2xl reveal-delay-300 hover:shadow-xl transition-shadow">
                      <img alt="Energy-as-a-Service" width={840} height={520} className="w-full rounded-t-2xl object-cover h-60" src="/lecasu/energy-as-a-service-ppa.jpeg" />
                      <div className="p-8 flex flex-col flex-1 justify-between">
                        <div>
                          <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">03 — Financing</div>
                          <h5 className="text-2xl xl:text-3xl leading-normal font-semibold text-darker mb-4">Energy-as-a-Service (PPA)</h5>
                          <p className="text-base leading-relaxed text-body mb-6">
                            No upfront capital investment required. Pay only for the clean kilowatt-hours you consume with guaranteed availability and covered maintenance.
                          </p>
                        </div>
                        <button
                          onClick={() => navigateTo('service')}
                          className="group/button inline-flex shrink-0 items-center whitespace-nowrap text-primary hover:text-darker font-medium text-base xl:text-lg gap-2.5 cursor-pointer"
                        >
                          Explore
                          <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker size-5">
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
            </section>

            {/* SECÇÃO 5 — BENEFÍCIOS E SERVIÇOS */}
            <section id="beneficios" className="relative w-full py-20 lg:py-24 xl:py-30 bg-white">
              <div className="section-content relative">
                <div className="container">
                  <div className="justify-between xl:flex-row-reverse row items-center gy-8">
                    <div className="xl:column-6">
                      <div className="reveal-item reveal-delay-300">
                        <img
                          alt="Commercial Solar Panels"
                          width={968}
                          height={900}
                          className="w-full rounded-2xl max-xl:max-h-130 border-b-4 border-primary shadow-lg object-cover"
                          src="/lecasu/official-project-skm.jpg"
                        />
                      </div>
                    </div>
                    <div className="xl:column-6">
                      <div className="reveal-item reveal-delay-100 text-block xl:pe-15">
                        <div className="rounded-full bg-primary/16 size-15 xl:size-18 flex justify-center items-center mb-6">
                          <svg viewBox="0 0 24 24" className="size-8 xl:size-10 fill-primary">
                            <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.5l6 5.4V18h-2v-6H8v6H6v-7.1l6-5.4z"/>
                          </svg>
                        </div>
                        <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">Commercial &amp; Industrial Solutions</div>
                        <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                          Cut diesel generator costs &amp; ensure continuous operation
                        </h2>
                        <p className="text-base xl:text-lg leading-relaxed text-body mb-4">
                          Grid instability and surging fuel expenses directly reduce business profitability in Mozambique. LECASU engineers hybrid rooftop systems synchronised with your diesel generators.
                        </p>
                        <ul className="flex flex-col gap-3 text-base/relaxed mb-8">
                          <li className="relative ps-5.5 before:absolute before:size-2.25 before:rounded-full before:bg-primary before:inset-s-0 before:top-2">
                            <strong className="font-semibold text-darker">Generator Fuel Displacement: </strong>
                            Reduce generator run-hours and cut monthly diesel consumption by up to 60-80% during daylight operating hours.
                          </li>
                          <li className="relative ps-5.5 before:absolute before:size-2.25 before:rounded-full before:bg-primary before:inset-s-0 before:top-2">
                            <strong className="font-semibold text-darker">Live Telemetry &amp; Monitoring: </strong>
                            Real-time digital supervision of production, load consumption, battery storage, and fuel savings via centralized dashboards.
                          </li>
                        </ul>
                        <div>
                          <a
                            href="https://simulador.lecasu.co.mz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-12 lg:h-14 gap-4 rounded-lg px-7 text-sm font-medium uppercase shadow-lg hover:shadow-primary/30"
                          >
                            Request a Proposal
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-content relative mt-20 lg:mt-24 xl:mt-30">
                <div className="container">
                  <div className="justify-between items-center row gy-8">
                    <div className="xl:column-6">
                      <div className="reveal-item reveal-delay-100">
                        <img
                          alt="INCUBOX 2 Off-Grid Modular Solar Cabins"
                          width={968}
                          height={840}
                          className="w-full rounded-2xl max-xl:max-h-130 border-b-4 border-primary shadow-lg object-cover"
                          src="/lecasu/official-project-incubox.jpeg"
                        />
                      </div>
                    </div>
                    <div className="xl:column-6">
                      <div className="reveal-item reveal-delay-300 text-block xl:ps-15">
                        <div className="rounded-full bg-primary/16 size-15 xl:size-18 flex justify-center items-center mb-6">
                          <svg viewBox="0 0 24 24" className="size-8 xl:size-10 fill-primary">
                            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1V3c0-.55.45-1 1-1zm0 18c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-.55.45-1 1-1zM4 11H2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1zm18 0h-2c-.55 0-1 .45-1 1s.45 1 1 1h2c.55 0 1-.45 1-1s-.45-1-1-1z"/>
                          </svg>
                        </div>
                        <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">Social Impact &amp; Remote Electrification</div>
                        <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                          Solar infrastructure for remote education and enterprise
                        </h2>
                        <p className="text-base xl:text-lg leading-relaxed text-body mb-8">
                          LECASU installed 11 standalone solar PV systems powering modular training cabins (INCUBOX 2) across Cabo Delgado, Nampula and Niassa. These systems provide uninterrupted power for computers, satellite connectivity, digital equipment, and lighting in remote areas, enabling youth entrepreneurship and community development without relying on the national grid.
                        </p>
                        <div>
                          <a
                            href="https://simulador.lecasu.co.mz/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-12 lg:h-14 gap-4 rounded-lg px-7 text-sm font-medium uppercase shadow-lg hover:shadow-primary/30"
                          >
                            Request a Proposal
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECÇÃO 6 — HOW IT WORKS */}
            <section id="how-it-works" className="relative w-full py-20 lg:py-24 xl:py-30 bg-primary-lighter/50">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" width={515} height={367} className="absolute top-0 inset-s-0 w-128.75 h-91.75 opacity-60" src="/solurax/shape-a.3alpm6du1b821.png" />
                <img alt="" width={348} height={373} className="absolute top-0 inset-s-0 w-87 h-93.25 opacity-40" src="/solurax/line-b.3n1vtjp4lg3yk.png" />
                <img alt="" width={361} height={362} className="absolute bottom-0 inset-e-0 w-90.25 h-90.5 opacity-40" src="/solurax/line-c.2009jf6qn5162.png" />
                <img alt="" width={381} height={780} className="absolute top-0 inset-e-0 w-95.25 h-195 opacity-40" src="/solurax/line-d.1--wkxdawkfjt.png" />
                <img alt="" width={280} height={429} className="absolute bottom-0 translate-y-3/5 inset-s-0 w-70 h-107.25 opacity-40" src="/solurax/hexagon-large-half-b.33_zqf09bzfa9.png" />
                <img alt="" width={181} height={157} className="absolute top-1/10 translate-container-end w-45.25 h-39.25 opacity-40" src="/solurax/hexagon-small-a.0nd4j_gaek6pl.png" />
              </div>

              <div className="section-head relative mb-10 xl:mb-15">
                <div className="container">
                  <div className="justify-center text-center row">
                    <div className="lg:column-6 xl:column-5">
                      <div className="reveal-item reveal-delay-100 2xl:px-8">
                        <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                          How It Works
                        </h2>
                        <p className="text-base xl:text-lg leading-relaxed text-body">
                          From consultation to activation. Together, our customers are reshaping the region's energy footprint.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-content relative">
                <div className="container">
                  <div className="relative z-0">
                    <div className="hidden xl:block absolute top-7 left-[12%] w-[76%] h-0.5 bg-gradient-to-r from-[#1BBE7A] to-[#FFC72C] -z-1"></div>

                    <div className="justify-between row gy-6">
                      <div className="md:column-6 xl:column-3">
                        <div className="reveal-item text-center px-4 xl:px-0 2xl:px-4 reveal-delay-100">
                          <div className="mb-6 size-14 rounded-full border-2 border-primary bg-white text-lg font-semibold flex justify-center items-center text-primary mx-auto shadow-md">
                            01
                          </div>
                          <h5 className="font-semibold text-xl xl:text-2xl leading-normal text-darker mb-4">
                            Consultation
                          </h5>
                          <p className="text-sm xl:text-base leading-relaxed text-body">
                            Expert evaluation of your energy needs and site potential.
                          </p>
                        </div>
                      </div>

                      <div className="md:column-6 xl:column-3">
                        <div className="reveal-item text-center px-4 xl:px-0 2xl:px-4 reveal-delay-200">
                          <div className="mb-6 size-14 rounded-full border-2 border-primary bg-white text-lg font-semibold flex justify-center items-center text-primary mx-auto shadow-md">
                            02
                          </div>
                          <h5 className="font-semibold text-xl xl:text-2xl leading-normal text-darker mb-4">
                            Custom Design
                          </h5>
                          <p className="text-sm xl:text-base leading-relaxed text-body">
                            Precision engineering blueprints tailored to your property.
                          </p>
                        </div>
                      </div>

                      <div className="md:column-6 xl:column-3">
                        <div className="reveal-item text-center px-4 xl:px-0 2xl:px-4 reveal-delay-300">
                          <div className="mb-6 size-14 rounded-full border-2 border-primary bg-white text-lg font-semibold flex justify-center items-center text-primary mx-auto shadow-md">
                            03
                          </div>
                          <h5 className="font-semibold text-xl xl:text-2xl leading-normal text-darker mb-4">
                            Professional Install
                          </h5>
                          <p className="text-sm xl:text-base leading-relaxed text-body">
                            Rapid, clean deployment by our certified master technicians.
                          </p>
                        </div>
                      </div>

                      <div className="md:column-6 xl:column-3">
                        <div className="reveal-item text-center px-4 xl:px-0 2xl:px-4 reveal-delay-400">
                          <div className="mb-6 size-14 rounded-full border-2 border-primary bg-white text-lg font-semibold flex justify-center items-center text-primary mx-auto shadow-md">
                            04
                          </div>
                          <h5 className="font-semibold text-xl xl:text-2xl leading-normal text-darker mb-4">
                            Activation
                          </h5>
                          <p className="text-sm xl:text-base leading-relaxed text-body">
                            System testing, utility interconnection, and live monitoring.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECÇÃO 7 — PORQUÊ A LECASU (WHY LECASU) */}
            <section id="why-lecasu" className="relative w-full py-20 lg:py-24 xl:py-30 bg-primary-lighter/40">
              <div className="section-head relative mb-12 xl:mb-16">
                <div className="container">
                  <div className="justify-center text-center row">
                    <div className="lg:column-8 xl:column-7">
                      <div className="reveal-item reveal-delay-100">
                        <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">Porquê a LECASU</div>
                        <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                          Engenharia Confiável Feita Para África
                        </h2>
                        <p className="text-base/relaxed text-body max-w-2xl mx-auto">
                          Combinamos capacidade técnica avançada, execução rápida e acompanhamento operacional contínuo para garantir estabilidade energética duradoura.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-content relative">
                <div className="container">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="reveal-item p-8 bg-white shadow-md rounded-2xl border-b-4 border-primary hover:-translate-y-1 transition-all h-full flex flex-col justify-between">
                      <div>
                        <div className="text-primary font-bold text-3xl mb-3">01</div>
                        <h4 className="text-xl font-bold text-darker mb-3">African Expertise</h4>
                        <p className="text-sm/relaxed text-body">
                          Profundo conhecimento das normas elétricas de Moçambique, da rede da EDM e dos desafios climáticos locais de alta temperatura e poeira.
                        </p>
                      </div>
                    </div>

                    <div className="reveal-item p-8 bg-white shadow-md rounded-2xl border-b-4 border-primary hover:-translate-y-1 transition-all h-full flex flex-col justify-between">
                      <div>
                        <div className="text-primary font-bold text-3xl mb-3">02</div>
                        <h4 className="text-xl font-bold text-darker mb-3">Hybrid Systems Capability</h4>
                        <p className="text-sm/relaxed text-body">
                          Integração perfeita entre energia solar fotovoltaica, bancos de baterias e geradores a diesel, reduzindo combustível em até 60-80%.
                        </p>
                      </div>
                    </div>

                    <div className="reveal-item p-8 bg-white shadow-md rounded-2xl border-b-4 border-primary hover:-translate-y-1 transition-all h-full flex flex-col justify-between">
                      <div>
                        <div className="text-primary font-bold text-3xl mb-3">03</div>
                        <h4 className="text-xl font-bold text-darker mb-3">Fast Execution</h4>
                        <p className="text-sm/relaxed text-body">
                          Aprovisionamento direto com fabricantes Tier-1, equipas de montagem certificadas em Moçambique e comissionamento sem atrasos.
                        </p>
                      </div>
                    </div>

                    <div className="reveal-item p-8 bg-white shadow-md rounded-2xl border-b-4 border-primary hover:-translate-y-1 transition-all h-full flex flex-col justify-between">
                      <div>
                        <div className="text-primary font-bold text-3xl mb-3">04</div>
                        <h4 className="text-xl font-bold text-darker mb-3">Strong Engineering Team</h4>
                        <p className="text-sm/relaxed text-body">
                          Engenheiros eletrotécnicos e técnicos de campo baseados em Maputo fornecendo monitorização SCADA e manutenção preventiva contínua.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECÇÃO 8 — CTA PRINCIPAL */}
            <section className="relative w-full py-10">
              <div className="section-content relative">
                <div className="container">
                  <div className="reveal-item reveal-from-bottom">
                    <div className="bg-darker p-8 sm:p-12 md:p-16 xl:p-20 flex flex-wrap items-center justify-between xl:gap-x-15 gap-y-7 rounded-[1.25rem] shadow-2xl">
                      <h2 className="text-white font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.27] uppercase text-pretty max-w-md">
                        Power your facility with reliable energy infrastructure
                      </h2>
                      <a
                        href="https://simulador.lecasu.co.mz/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-12 lg:h-15 gap-4 px-7.5 text-base font-medium rounded-full shadow-lg hover:shadow-primary/30"
                      >
                        Request a Proposal
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECÇÃO 9 — ARTIGOS E CONHECIMENTO */}
            <section id="artigos" className="relative w-full py-20 lg:py-24 xl:py-30 bg-white">
              <div className="section-head relative mb-10 xl:mb-15">
                <div className="container">
                  <div className="justify-center text-center row">
                    <div className="lg:column-8 xl:column-7 2xl:column-6">
                      <div className="reveal-item reveal-delay-100 2xl:px-8">
                        <div className="text-primary font-semibold text-sm tracking-wider uppercase mb-2">Selected Case Studies &amp; Insights</div>
                        <h2 className="text-darker font-bold text-3xl lg:text-4xl xl:text-5xl leading-[1.166] mb-5">
                          Engineering Insights &amp; Projects
                        </h2>
                        <p className="text-base/relaxed text-body">
                          Proven deployments, hybrid strategies, and technical milestones from Mozambique.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section-content relative">
                <div className="container">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7.5">
                    <div className="reveal-item flex flex-col bg-white border-b-4 border-primary shadow-[0_4px_20px_0_rgba(0,0,0,.08)] rounded-2xl h-full reveal-delay-100 hover:shadow-xl transition-shadow">
                      <button onClick={() => navigateTo('blog')} className="group flex flex-col h-full text-left cursor-pointer">
                        <img
                          alt="The Ultimate Guide to Going Solar in 2026"
                          width={900}
                          height={585}
                          className="rounded-t-2xl object-cover h-56 w-full"
                          src="/lecasu/official-project-skm.jpg"
                        />
                        <div className="p-6 flex flex-col flex-1 justify-between">
                          <div>
                            <div className="text-primary text-sm font-semibold mb-3">19 April 2026</div>
                            <h4 className="text-lg md:text-xl lg:text-2xl leading-snug font-bold text-darker group-hover:text-primary transition-colors line-clamp-2 mb-3">
                              SKM Engineering Maputo: 80 kWp Grid-Tied Solar with Generator Sync
                            </h4>
                            <p className="text-body text-sm md:text-base leading-relaxed line-clamp-2 mb-6">
                              Installation of an 80 kWp C&I system at an office/warehouse in Maputo, including advanced monitoring and diesel generator synchronisation.
                            </p>
                          </div>
                          <div>
                            <span className="group/button inline-flex items-center text-primary hover:text-darker gap-2.5 font-medium text-base">
                              <span>Learn More</span>
                              <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker size-5">
                                <svg viewBox="0 0 24 24" className="size-3">
                                  <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                                </svg>
                              </div>
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div className="reveal-item flex flex-col bg-white border-b-4 border-primary shadow-[0_4px_20px_0_rgba(0,0,0,.08)] rounded-2xl h-full reveal-delay-200 hover:shadow-xl transition-shadow">
                      <button onClick={() => navigateTo('blog')} className="group flex flex-col h-full text-left cursor-pointer">
                        <img
                          alt="INCUBOX 2 (GAPI): 11 Solar PV Systems Powering Youth Education Hubs"
                          width={900}
                          height={585}
                          className="rounded-t-2xl object-cover h-56 w-full"
                          src="/lecasu/official-project-incubox.jpeg"
                        />
                        <div className="p-6 flex flex-col flex-1 justify-between">
                          <div>
                            <div className="text-primary text-sm font-semibold mb-3">10 October 2026</div>
                            <h4 className="text-lg md:text-xl lg:text-2xl leading-snug font-bold text-darker group-hover:text-primary transition-colors line-clamp-2 mb-3">
                              INCUBOX 2 (GAPI): 11 Cabines Solares Fotovoltaicas no Norte de Moçambique
                            </h4>
                            <p className="text-body text-sm md:text-base leading-relaxed line-clamp-2 mb-6">
                              Implementação de 11 sistemas solares isolados da rede pública em Cabo Delgado, Nampula e Niassa, capacitando centros modulares de formação de jovens.
                            </p>
                          </div>
                          <div>
                            <span className="group/button inline-flex items-center text-primary hover:text-darker gap-2.5 font-medium text-base">
                              <span>Learn More</span>
                              <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker size-5">
                                <svg viewBox="0 0 24 24" className="size-3">
                                  <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                                </svg>
                              </div>
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>

                    <div className="reveal-item flex flex-col bg-white border-b-4 border-primary shadow-[0_4px_20px_0_rgba(0,0,0,.08)] rounded-2xl h-full reveal-delay-300 hover:shadow-xl transition-shadow">
                      <button onClick={() => navigateTo('blog')} className="group flex flex-col h-full text-left cursor-pointer">
                        <img
                          alt="Energy-as-a-Service (PPA): Zero-Capex Energy for African Enterprises"
                          width={900}
                          height={585}
                          className="rounded-t-2xl object-cover h-56 w-full"
                          src="/lecasu/energy-as-a-service-ppa.jpeg"
                        />
                        <div className="p-6 flex flex-col flex-1 justify-between">
                          <div>
                            <div className="text-primary text-sm font-semibold mb-3">18 October 2026</div>
                            <h4 className="text-lg md:text-xl lg:text-2xl leading-snug font-bold text-darker group-hover:text-primary transition-colors line-clamp-2 mb-3">
                              Energy-as-a-Service (PPA): Energia Solar Sem Investimento Inicial
                            </h4>
                            <p className="text-body text-sm md:text-base leading-relaxed line-clamp-2 mb-6">
                              Descubra como empresas comerciais e industriais em Moçambique reduzem custos operacionais com zero despesa de capital (Zero Capex) e O&amp;M integral.
                            </p>
                          </div>
                          <div>
                            <span className="group/button inline-flex items-center text-primary hover:text-darker gap-2.5 font-medium text-base">
                              <span>Learn More</span>
                              <div className="inline-flex shrink-0 grow-0 rounded-full items-center justify-center border transition-all border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker size-5">
                                <svg viewBox="0 0 24 24" className="size-3">
                                  <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
                                </svg>
                              </div>
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </>
      )}

      {/* 3. FOOTER (COMMON ACROSS ALL PAGES) */}
      <footer id="footer" className="relative w-full bg-darker">
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-r from-darker to-dark">
          <img alt="" width={1920} height={636} className="absolute bottom-0 inset-0 opacity-10" src="/solurax/pattern-a.0ts1zcv6qcsrl.png" />
        </div>

        <div className="relative py-10 md:py-15">
          <div className="container">
            <div className="justify-between row">
              <div className="lg:column-4 me-auto">
                <div className="reveal-item reveal-delay-100 flex flex-col h-full">
                  <button onClick={() => navigateTo('home')} className="group flex items-center gap-2.5 shrink-0 text-left cursor-pointer" aria-label="home">
                    <img alt="LECASU" width={302} height={72} className="w-auto h-10" src="/lecasu/lecasu-logo.png" />
                  </button>
                  <p className="mt-4 text-base/relaxed text-white/80 max-w-sm">
                    LECASU delivers resilient solar and hybrid energy infrastructure engineered for African conditions. Turnkey EPC, C&amp;I solar, microgrids, and 24/7 telemetry monitoring across Mozambique.
                  </p>
                  <ul className="flex flex-wrap gap-4 pt-7 mt-auto">
                    <li>
                      <a href="https://web.facebook.com/lecasueletrica/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-colors border rounded-full group size-10 border-white/70 hover:border-primary">
                        <svg viewBox="0 0 24 24" className="transition-colors size-5 fill-white/70 group-hover:fill-primary">
                          <path d="M13.572 22v-7.030h2.344l0.446-2.909h-2.79v-1.888c-0.004-0.039-0.006-0.084-0.006-0.13 0-0.803 0.651-1.454 1.454-1.454 0.068 0 0.134 0.005 0.199 0.014l-0.008-0.001h1.268v-2.475c-0.669-0.114-1.448-0.185-2.241-0.196l-0.011-0c-0.081-0.007-0.175-0.010-0.27-0.010-1.961 0-3.55 1.589-3.55 3.55 0 0.132 0.007 0.263 0.021 0.391l-0.001-0.016v2.216h-2.556v2.909h2.556v7.030c-4.839-0.787-8.489-4.936-8.489-9.937 0-5.556 4.504-10.061 10.061-10.061s10.061 4.504 10.061 10.061c0 5.001-3.65 9.151-8.431 9.93l-0.058 0.008z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-colors border rounded-full group size-10 border-white/70 hover:border-primary">
                        <svg viewBox="0 0 24 24" className="transition-colors size-5 fill-white/70 group-hover:fill-primary">
                          <path d="M21 6v12c0 1.657-1.343 3-3 3v0h-12c-1.657 0-3-1.343-3-3v0-12c0-1.657 1.343-3 3-3v0h12c1.657 0 3 1.343 3 3v0zM18.429 8.015c-0.443 0.2-0.956 0.344-1.494 0.407l-0.025 0.002c0.544-0.327 0.954-0.832 1.152-1.432l0.005-0.019c-0.481 0.291-1.041 0.512-1.639 0.63l-0.033 0.005c-0.483-0.512-1.166-0.831-1.923-0.831-1.459 0-2.641 1.182-2.641 2.641 0 0.212 0.025 0.418 0.072 0.615l-0.004-0.018c-2.196-0.114-4.127-1.158-5.422-2.743l-0.011-0.013c-0.225 0.377-0.358 0.831-0.358 1.316 0 0.005 0 0.010 0 0.015v-0.001 0.003c0.051 0.897 0.497 1.68 1.166 2.185l0.007 0.005c-0.439-0.016-0.847-0.138-1.202-0.34l0.013 0.007v0.032c0 0.002 0 0.004 0 0.005 0 1.269 0.897 2.329 2.092 2.58l0.017 0.003c-0.212 0.057-0.456 0.089-0.707 0.089-0.17 0-0.337-0.015-0.5-0.044l0.017 0.003c0.348 1.055 1.315 1.806 2.46 1.828l0.003 0c-0.889 0.701-2.025 1.125-3.261 1.125-0.003 0-0.007 0-0.010 0h0.001c-0.012 0-0.026 0-0.040 0-0.209 0-0.416-0.012-0.62-0.035l0.025 0.002c1.143 0.74 2.54 1.181 4.040 1.181 4.142 0 7.499-3.355 7.503-7.496v-0c0-0.113 0-0.229-0.008-0.342 0.518-0.38 0.956-0.833 1.31-1.347l0.012-0.019z"></path>
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/lecasu-lda/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition-colors border rounded-full group size-10 border-white/70 hover:border-primary">
                        <svg viewBox="0 0 24 24" className="transition-colors size-5 fill-white/70 group-hover:fill-primary">
                          <path d="M8.658 7.099c0-0.854-0.693-1.547-1.547-1.547s-1.547 0.693-1.547 1.547c0 0.854 0.693 1.547 1.547 1.547v0c0.853-0.002 1.545-0.693 1.547-1.547v-0zM8.449 18.409v-8.588h-2.672v8.588h2.672zM18.445 13.701c0-2.314-0.502-4.095-3.203-4.095-0.031-0.001-0.067-0.002-0.104-0.002-1.027 0-1.926 0.552-2.415 1.375l-0.007 0.013h-0.037v-1.172h-2.559v8.588h2.669v-4.249c0-1.122 0.213-2.207 1.604-2.207 1.366 0 1.386 1.282 1.386 2.277v4.179h2.667zM6 3h12c1.657 0 3 1.343 3 3v0 12c0 1.657-1.343 3-3 3v0h-12c-1.657 0-3-1.343-3-3v0-12c0-1.657 1.343-3 3-3v0z"></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:column-6 lg:column-3">
                <div className="reveal-item reveal-delay-150">
                  <div className="text-xl/8 font-bold text-white mb-6">Contact Info</div>
                  <ul className="flex flex-col gap-4">
                    <li className="flex gap-2.5">
                      <svg viewBox="0 0 24 24" className="fill-primary size-5 mt-1.25 shrink-0">
                        <path d="M20 3h-16c-1.656 0.002-2.998 1.344-3 3v12c0.002 1.656 1.344 2.998 3 3h16c1.656-0.002 2.998-1.344 3-3v-12c-0.002-1.656-1.344-2.998-3-3h-0zM4 5h16c0.388 0.003 0.722 0.228 0.883 0.553l0.003 0.006-8.886 6.22-8.886-6.22c0.164-0.332 0.498-0.556 0.886-0.559h0zM20 19h-16c-0.552-0.001-0.999-0.448-1-1v-10.079l8.427 5.899c0.16 0.113 0.359 0.181 0.573 0.181s0.413-0.068 0.576-0.183l-0.003 0.002 8.427-5.899v10.079c-0.001 0.552-0.448 0.999-1 1h-0z"></path>
                      </svg>
                      <a className="text-lg/7.5 text-white/80 hover:text-primary transition-colors" href="mailto:info@lecasu.co.mz">
                        info@lecasu.co.mz
                      </a>
                    </li>
                    <li className="flex gap-2.5">
                      <svg viewBox="0 0 24 24" className="fill-primary size-5 mt-1.25 shrink-0">
                        <path d="M19.17 22.035c-0.070 0-0.149-0.004-0.228-0.011-3.109-0.347-5.917-1.394-8.341-2.98l0.073 0.045c-2.32-1.495-4.236-3.413-5.685-5.659l-0.045-0.074c-1.542-2.354-2.588-5.166-2.922-8.192l-0.008-0.085c-0.008-0.080-0.013-0.174-0.013-0.268 0-1.463 1.118-2.664 2.546-2.798l0.011-0.001c0.083-0.008 0.167-0.012 0.251-0.012h2.743c1.427 0.004 2.604 1.072 2.778 2.452l0.001 0.014c0.141 0.882 0.347 1.664 0.619 2.414l-0.029-0.091 0.031 0.098c0.084 0.254 0.132 0.547 0.132 0.852 0 0.77-0.31 1.468-0.813 1.975l0-0-0.6 0.599c1.055 1.619 2.397 2.96 3.964 3.984l0.052 0.032 0.595-0.595c0.509-0.504 1.209-0.815 1.982-0.815 0.353 0 0.69 0.065 1.001 0.183l-0.019-0.006c0.672 0.26 1.457 0.463 2.271 0.575l0.056 0.006c1.378 0.195 2.427 1.368 2.427 2.785 0 0.019-0 0.038-0.001 0.057l0-0.003v2.704c0 0.002 0 0.004 0 0.005 0 1.548-1.251 2.804-2.798 2.812h-0.001zM7.542 4h-2.733c-0.248 0.006-0.468 0.117-0.619 0.29l-0.001 0.001c-0.117 0.139-0.188 0.32-0.188 0.517 0 0.026 0.001 0.052 0.004 0.078l-0-0.003c0.308 2.779 1.243 5.29 2.661 7.457l-0.040-0.065c1.337 2.077 3.052 3.793 5.062 5.091l0.066 0.040c2.099 1.378 4.606 2.315 7.305 2.621l0.078 0.007c0.012 0.001 0.026 0.001 0.041 0.001 0.451 0 0.818-0.363 0.824-0.813v-2.744c0-0.006 0-0.013 0-0.020 0-0.407-0.301-0.744-0.692-0.801l-0.004-0.001c-1.030-0.14-1.96-0.381-2.843-0.718l0.087 0.029c-0.085-0.034-0.184-0.053-0.287-0.053-0.22 0-0.42 0.089-0.565 0.233l-1.148 1.148c-0.181 0.181-0.431 0.293-0.707 0.293-0.182 0-0.352-0.048-0.499-0.133l0.005 0.003c-2.435-1.402-4.403-3.37-5.765-5.73l-0.040-0.075c-0.082-0.142-0.131-0.313-0.131-0.494 0-0.276 0.112-0.526 0.293-0.707l1.149-1.149c0.143-0.146 0.231-0.345 0.231-0.566 0-0.088-0.014-0.172-0.040-0.251l0.002 0.006-0.030-0.095c-0.28-0.764-0.513-1.669-0.658-2.603l-0.011-0.083c-0.052-0.403-0.392-0.711-0.805-0.711-0 0-0 0-0 0v0zM17.85 10.718c-0.484-0.001-0.887-0.345-0.979-0.802l-0.001-0.006c-0.28-1.417-1.379-2.516-2.773-2.792l-0.022-0.004c-0.464-0.093-0.809-0.497-0.809-0.982 0-0.552 0.448-1 1-1 0.068 0 0.134 0.007 0.197 0.019l-0.006-0.001c2.218 0.438 3.938 2.158 4.37 4.341l0.006 0.035c0.012 0.058 0.018 0.124 0.018 0.191 0 0.552-0.448 1-1 1-0 0-0.001 0-0.001 0h0zM21.481 10.708c-0.513-0.001-0.935-0.387-0.993-0.884l-0-0.005c-0.371-3.336-2.996-5.958-6.301-6.322l-0.032-0.003c-0.503-0.058-0.89-0.481-0.89-0.995 0-0.038 0.002-0.076 0.006-0.113l-0 0.005c0.064-0.503 0.489-0.889 1.005-0.889 0.035 0 0.070 0.002 0.104 0.005l-0.004-0c4.268 0.469 7.626 3.824 8.097 8.050l0.004 0.041c0.004 0.033 0.006 0.072 0.006 0.111 0 0.513-0.386 0.936-0.884 0.994l-0.005 0c-0.033 0.004-0.070 0.006-0.108 0.006-0.001 0-0.003 0-0.004 0h0z"></path>
                      </svg>
                      <a className="text-lg/7.5 text-white/80 hover:text-primary transition-colors" href="tel:+258855500255">
                        +258 85 550 0255
                      </a>
                    </li>
                    <li className="flex gap-2.5">
                      <svg viewBox="0 0 24 24" className="fill-primary size-5 mt-1.25 shrink-0">
                        <path d="M21.369 18.341c-0.463-1.59-1.124-2.978-1.971-4.23l0.034 0.053c-0.399-0.756-0.948-1.384-1.611-1.861l-0.016-0.011c0.475-0.932 0.762-2.030 0.784-3.193l0-0.007c0-0.016 0-0.036 0-0.055 0-3.654-2.941-6.62-6.585-6.661l-0.004-0c-3.648 0.041-6.589 3.007-6.589 6.661 0 0.019 0 0.039 0 0.058l-0-0.003c0.022 1.169 0.309 2.266 0.803 3.241l-0.020-0.043c-0.673 0.479-1.216 1.097-1.595 1.816l-0.014 0.028c-0.744 1.141-1.387 2.453-1.866 3.843l-0.038 0.126c-0.049 0.189-0.077 0.406-0.077 0.63 0 0.614 0.212 1.179 0.567 1.625l-0.004-0.005c0.489 0.625 1.243 1.023 2.091 1.023 0.002 0 0.005 0 0.007 0h13.49c0.001 0 0.002 0 0.002 0 0.827 0 1.567-0.375 2.058-0.964l0.003-0.004c0.367-0.434 0.59-1 0.59-1.618 0-0.158-0.015-0.313-0.043-0.463l0.002 0.016zM12 4.375c2.543 0.039 4.589 2.11 4.589 4.658 0 0.020-0 0.040-0 0.061l0-0.003c0 3.081-3.251 5.956-4.589 7.009-1.338-1.053-4.589-3.928-4.589-7.009-0-0.017-0-0.037-0-0.058 0-2.549 2.046-4.619 4.586-4.658l0.004-0zM19.282 19.128c-0.127 0.15-0.315 0.246-0.526 0.247h-13.491c-0.212-0-0.401-0.1-0.522-0.254l-0.001-0.001c-0.085-0.105-0.137-0.24-0.137-0.387 0-0.053 0.007-0.105 0.019-0.154l-0.001 0.004c0.473-1.32 1.045-2.46 1.734-3.516l-0.039 0.064c0.232-0.438 0.528-0.809 0.882-1.115l0.005-0.004c1.196 1.613 2.593 2.989 4.175 4.125l0.056 0.038c0.158 0.109 0.353 0.174 0.564 0.174s0.406-0.065 0.567-0.176l-0.003 0.002c1.637-1.173 3.033-2.547 4.192-4.108l0.036-0.050c0.372 0.324 0.68 0.71 0.91 1.144l0.010 0.022c0.692 1.014 1.266 2.182 1.664 3.43l0.026 0.095c0.005 0.026 0.007 0.056 0.007 0.086 0 0.129-0.048 0.246-0.127 0.336l0-0.001zM14.75 9c0-1.519-1.231-2.75-2.75-2.75s-2.75 1.231-2.75 2.75c0 1.519 1.231 2.75 2.75 2.75v0c1.518-0.002 2.748-1.232 2.75-2.75v-0zM10.75 9c0-0.69 0.56-1.25 1.25-1.25s1.25 0.56 1.25 1.25c0 0.69-0.56 1.25-1.25 1.25v0c-0.69-0.001-1.249-0.56-1.25-1.25v-0z"></path>
                      </svg>
                      <a className="text-lg/7.5 text-white/80 hover:text-primary transition-colors" href="https://maps.google.com/?q=Maputo,+Mozambique" target="_blank" rel="noopener noreferrer">
                        Maputo, Mozambique
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="sm:column-6 md:column-3 lg:column-2">
                <div className="reveal-item reveal-delay-200">
                  <div className="text-xl/8 font-bold text-white mb-6">Quick Links</div>
                  <ul className="flex flex-col gap-4">
                    <li><button onClick={() => navigateTo('home')} className="text-lg/7.5 text-white/80 hover:text-primary transition-colors text-left cursor-pointer">Home</button></li>
                    <li><button onClick={() => navigateTo('about')} className="text-lg/7.5 text-white/80 hover:text-primary transition-colors text-left cursor-pointer">About</button></li>
                    <li><button onClick={() => navigateTo('service')} className="text-lg/7.5 text-white/80 hover:text-primary transition-colors text-left cursor-pointer">Services</button></li>
                    <li><button onClick={() => navigateTo('project')} className="text-lg/7.5 text-white/80 hover:text-primary transition-colors text-left cursor-pointer">Projects</button></li>
                    <li><button onClick={() => navigateTo('contact')} className="text-lg/7.5 text-white/80 hover:text-primary transition-colors text-left cursor-pointer">Contact</button></li>
                  </ul>
                </div>
              </div>

              <div className="sm:column-6 md:column-3 lg:column-2">
                <div className="reveal-item reveal-delay-250">
                  <div className="text-xl/8 font-bold text-white mb-6">Working Hours</div>
                  <ul className="flex flex-col gap-4 text-lg/7.5 text-white/80">
                    <li>
                      <span className="block text-sm text-white/50">Mon – Fri</span>
                      <span>08:00 – 17:00</span>
                    </li>
                    <li>
                      <span className="block text-sm text-white/50">Saturday</span>
                      <span>08:00 – 12:00</span>
                    </li>
                    <li>
                      <span className="block text-sm text-white/50">Sunday</span>
                      <span>Closed</span>
                    </li>
                    <li>
                      <a
                        href="https://simulador.lecasu.co.mz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        Solar Simulator &rarr;
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 border-t border-white/16">
          <div className="container">
            <div className="reveal-fade reveal-delay-100 flex flex-col lg:flex-row items-center flex-wrap gap-x-10 gap-y-2 justify-between">
              <p className="text-lg/normal text-white/70">
                &copy; 2026{' '}
                <button onClick={() => navigateTo('home')} className="font-medium transition-colors text-white hover:text-primary cursor-pointer">
                  LECASU LDA
                </button>
                . Engineered for African energy growth. All Rights Reserved.
              </p>
              <ul className="flex gap-y-2 gap-x-6">
                <li><button onClick={() => navigateTo('about')} className="text-lg/normal text-white/70 hover:text-primary transition-colors cursor-pointer">Terms and Conditions</button></li>
                <li><button onClick={() => navigateTo('about')} className="text-lg/normal text-white/70 hover:text-primary transition-colors cursor-pointer">Privacy Policy</button></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* 4. VIDEO MODAL (Interactive for play buttons across all pages) */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-darker rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-primary text-3xl font-bold z-10 p-2 cursor-pointer"
            >
              &times;
            </button>
            <div className="aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/1kUE0BZtTRc?autoplay=1"
                title="Solar & Renewable Energy Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* 5. QUOTE MODAL (Interactive for all Quote buttons) */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 text-darker">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-darker text-2xl font-bold cursor-pointer"
            >
              &times;
            </button>
            <div className="mb-6">
              <span className="text-primary font-bold text-xs uppercase tracking-wider">Fast &amp; Free</span>
              <h3 className="text-2xl font-bold text-darker mt-1">Request a Project Proposal</h3>
              <p className="text-sm text-body mt-1">Our engineers will calculate your custom savings in less than 24 hours.</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you! Your quote request has been received. Our team will contact you shortly.');
                setQuoteModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-darker uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-darker uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="empresa@exemplo.co.mz"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-darker uppercase mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+258 85 550 0255"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-darker uppercase mb-1">System Type</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-primary bg-white">
                  <option>EPC (Engineering, Procurement &amp; Construction)</option>
                  <option>Hybrid Systems (Solar + Battery + Diesel)</option>
                  <option>Energy-as-a-Service (PPA — Zero Capex)</option>
                  <option>Commercial &amp; Industrial (C&amp;I) Rooftops</option>
                  <option>Off-Grid &amp; Rural Solar Micro-Grids</option>
                  <option>Operations &amp; Maintenance (O&amp;M)</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition-all duration-300 shadow-md cursor-pointer uppercase tracking-wider"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
