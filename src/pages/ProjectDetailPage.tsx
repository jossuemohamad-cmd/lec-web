import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectsData, type ProjectDetail } from '../data/projectsData';

interface ProjectDetailPageProps {
  projectId: string;
  onNavigate: (page: string, context?: string) => void;
  onSelectProject: (id: string) => void;
}

export function ProjectDetailPage({
  projectId,
  onNavigate,
  onSelectProject
}: ProjectDetailPageProps) {
  const { lang, t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Fallback to skm-engineering if project not found
  const project: ProjectDetail = projectsData[projectId] || projectsData['skm-engineering'];

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImageIndex(null);
  }, [projectId]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') {
        setActiveImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev + 1) % project.gallery.length : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null
            ? (prev - 1 + project.gallery.length) % project.gallery.length
            : 0
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, project.gallery.length]);

  // Sibling project for navigation
  const projectIds = Object.keys(projectsData);
  const currentIndex = projectIds.indexOf(project.id);
  const nextProjectId = projectIds[(currentIndex + 1) % projectIds.length];
  const nextProject = projectsData[nextProjectId];

  return (
    <div className="bg-white min-h-screen">
      {/* Subpage Header Banner */}
      <header className="relative flex flex-col pt-[var(--menubar-height)] bg-[#0f0f0f] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            alt={project.title}
            width={1920}
            height={936}
            className="object-cover object-center w-full h-full scale-105 filter blur-[1px] brightness-75"
            src={project.coverImage}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/85 via-[#0f0f0f]/75 to-[#0f0f0f]/95"></div>
        </div>

        <div className="relative z-10 py-12 lg:py-20 xl:py-24">
          <div className="container">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              {/* Breadcrumbs */}
              <nav aria-label="breadcrumb">
                <ol className="flex flex-wrap items-center justify-center gap-2.5 text-sm text-white/70">
                  <li>
                    <button
                      onClick={() => onNavigate('home')}
                      className="transition-colors text-sm text-white/70 hover:text-white cursor-pointer"
                    >
                      {t('Home')}
                    </button>
                  </li>
                  <li className="text-white/60">/</li>
                  <li>
                    <button
                      onClick={() => onNavigate('project')}
                      className="transition-colors text-sm text-white/70 hover:text-white cursor-pointer"
                    >
                      {t('Projects')}
                    </button>
                  </li>
                  <li className="text-white/60">/</li>
                  <li>
                    <span className="font-medium text-sm text-primary-light">
                      {project.title}
                    </span>
                  </li>
                </ol>
              </nav>

              {/* Tag / Category Badge */}
              <div className="mt-1">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/25 border border-primary/40 text-primary-light text-xs font-semibold tracking-wider backdrop-blur-md uppercase">
                  {lang === 'pt' ? project.tag : project.tagEn}
                </span>
              </div>

              {/* Project Title */}
              <h1 className="text-3xl font-bold text-white md:text-5xl lg:text-6xl leading-[1.1] max-w-4xl">
                {project.title}
              </h1>

              {/* Location */}
              <p className="text-base md:text-lg text-white/80 flex items-center gap-2">
                <svg className="size-5 text-primary shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
                </svg>
                <span>{lang === 'pt' ? project.location : project.locationEn}</span>
              </p>
            </div>
          </div>
        </div>

        {/* 3 Metric Highlight Bar */}
        <div className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="container py-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/15">
              <div className="pt-2 sm:pt-0">
                <div className="text-2xl lg:text-3xl font-extrabold text-primary">
                  {project.stat1Value}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                  {lang === 'pt' ? project.stat1Label : project.stat1LabelEn}
                </div>
              </div>
              <div className="pt-4 sm:pt-0">
                <div className="text-2xl lg:text-3xl font-extrabold text-white">
                  {project.stat2Value}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                  {lang === 'pt' ? project.stat2Label : project.stat2LabelEn}
                </div>
              </div>
              <div className="pt-4 sm:pt-0">
                <div className="text-2xl lg:text-3xl font-extrabold text-primary">
                  {project.stat3Value}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/70 mt-1">
                  {lang === 'pt' ? project.stat3Label : project.stat3LabelEn}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Detail Content */}
      <main className="py-16 lg:py-24">
        <div className="container">
          {/* Top Project Quick Summary & Meta Cards */}
          <div className="row gy-8 items-start mb-16">
            {/* Left Column: Narrative (65%) */}
            <div className="column-12 lg:column-8">
              <div className="lg:pe-8 space-y-10">
                {/* Visão Geral */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-darker mb-4">
                    {lang === 'pt' ? 'Visão Geral do Projecto' : 'Project Overview'}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-body">
                    {lang === 'pt' ? project.overview.pt : project.overview.en}
                  </p>
                </div>

                {/* Desafio Técnico */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#f8f9fa] border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-darker mb-3 flex items-center gap-2.5">
                    <span className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                      !
                    </span>
                    {lang === 'pt' ? 'O Desafio Técnico' : 'The Technical Challenge'}
                  </h3>
                  <p className="text-base leading-relaxed text-body">
                    {lang === 'pt' ? project.challenge.pt : project.challenge.en}
                  </p>
                </div>

                {/* A Solução da LECASU */}
                <div>
                  <h3 className="text-2xl font-bold text-darker mb-4">
                    {lang === 'pt' ? 'A Engenharia e Solução Implementada' : 'Engineering & Solution Implemented'}
                  </h3>
                  <p className="text-base sm:text-lg leading-relaxed text-body mb-6">
                    {lang === 'pt' ? project.solution.pt : project.solution.en}
                  </p>

                  <h4 className="text-lg font-semibold text-darker mb-3">
                    {lang === 'pt' ? 'Principais Resultados Alcançados:' : 'Key Outcomes Achieved:'}
                  </h4>
                  <ul className="space-y-3">
                    {(lang === 'pt' ? project.results.pt : project.results.en).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-base text-body">
                        <span className="size-5 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="size-3.5 fill-current" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Project Meta & Quick Actions (35%) */}
            <div className="column-12 lg:column-4">
              <div className="space-y-6">
                {/* Meta Details Box */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-darker mb-5 pb-3 border-b border-gray-150">
                    {lang === 'pt' ? 'Ficha Técnica do Projecto' : 'Project Fact Sheet'}
                  </h4>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-xs uppercase font-semibold text-body/70 tracking-wider">
                        {lang === 'pt' ? 'Cliente' : 'Client'}
                      </dt>
                      <dd className="font-semibold text-darker mt-0.5">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase font-semibold text-body/70 tracking-wider">
                        {lang === 'pt' ? 'Localização' : 'Location'}
                      </dt>
                      <dd className="font-semibold text-darker mt-0.5">
                        {lang === 'pt' ? project.location : project.locationEn}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase font-semibold text-body/70 tracking-wider">
                        {lang === 'pt' ? 'Categoria / Sector' : 'Category / Sector'}
                      </dt>
                      <dd className="font-semibold text-darker mt-0.5">
                        {lang === 'pt' ? project.category : project.categoryEn}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase font-semibold text-body/70 tracking-wider">
                        {lang === 'pt' ? 'Ano de Execução' : 'Execution Year'}
                      </dt>
                      <dd className="font-semibold text-darker mt-0.5">{project.year}</dd>
                    </div>
                  </dl>
                </div>

                {/* Technical Specifications */}
                <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold text-darker mb-5 pb-3 border-b border-gray-150">
                    {lang === 'pt' ? 'Especificações Técnicas' : 'Technical Specs'}
                  </h4>
                  <div className="space-y-3.5">
                    {project.technicalSpecs.map((spec, idx) => (
                      <div key={idx} className="pb-3 border-b border-gray-100 last:border-b-0 last:pb-0">
                        <div className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {lang === 'pt' ? spec.label : spec.labelEn}
                        </div>
                        <div className="text-sm font-medium text-darker mt-0.5">
                          {lang === 'pt' ? spec.value : spec.valueEn}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Proposal CTA Card */}
                <div className="p-7 rounded-2xl bg-[#0f0f0f] text-white shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold mb-2 text-white">
                      {lang === 'pt' ? 'Precisa de um projecto semelhante?' : 'Need a similar energy setup?'}
                    </h4>
                    <p className="text-sm text-white/75 mb-6">
                      {lang === 'pt'
                        ? 'Os nossos engenheiros estão disponíveis para dimensionar uma solução à medida da sua empresa ou instituição.'
                        : 'Our engineers are ready to design a tailored solar installation for your business or institution.'}
                    </p>
                    <button
                      type="button"
                      onClick={() => onNavigate('contact', project.title)}
                      className="group/button w-full inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 bg-clip-padding transition-all outline-none select-none cursor-pointer tracking-[.5px] border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white h-12 gap-3.5 rounded-full px-5 text-sm font-semibold shadow-lg"
                    >
                      <span>{lang === 'pt' ? 'Pedir Proposta' : 'Request Proposal'}</span>
                      <span className="size-8 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-xs transition-transform group-hover/button:translate-x-0.5">
                        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PHOTO GALLERY SECTION */}
          <section className="pt-8 pb-12 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-primary font-semibold text-xs uppercase tracking-wider mb-1">
                  {lang === 'pt' ? 'Registo Fotográfico' : 'Photo Gallery'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-darker">
                  {lang === 'pt' ? 'Galeria de Fotos do Projecto' : 'Project Photo Gallery'}
                </h3>
              </div>
              <p className="text-sm text-body/75">
                {lang === 'pt' ? 'Clique em qualquer foto para ampliar' : 'Click any photo to enlarge'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {project.gallery.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className="group relative rounded-2xl overflow-hidden shadow-md bg-darker aspect-[4/3] cursor-pointer border border-gray-100 hover:shadow-xl transition-all"
                >
                  <img
                    alt={lang === 'pt' ? photo.caption : photo.captionEn}
                    src={photo.src}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <p className="text-xs text-white font-medium line-clamp-2">
                      {lang === 'pt' ? photo.caption : photo.captionEn}
                    </p>
                    <span className="text-[11px] text-primary-light font-semibold mt-1 flex items-center gap-1">
                      <svg className="size-3.5 fill-current" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                      {lang === 'pt' ? 'Ver em ecrã inteiro' : 'View full size'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* BOTTOM NAVIGATION (BACK TO PROJECTS & NEXT PROJECT) */}
          <div className="pt-10 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => onNavigate('project')}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-gray-300 text-darker hover:border-primary hover:text-primary transition-colors font-medium text-sm"
            >
              <svg className="size-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              <span>{lang === 'pt' ? 'Voltar a Todos os Projectos' : 'Back to All Projects'}</span>
            </button>

            {nextProject && (
              <button
                type="button"
                onClick={() => onSelectProject(nextProject.id)}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-darker text-white hover:bg-primary transition-colors font-medium text-sm"
              >
                <span>{lang === 'pt' ? 'Próximo Projecto:' : 'Next Project:'} {nextProject.title}</span>
                <svg className="size-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </main>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveImageIndex(null)}
        >
          {/* Top Bar with counter & close */}
          <div
            className="flex items-center justify-between text-white w-full max-w-6xl mx-auto z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-sm font-medium text-white/80">
              {activeImageIndex + 1} / {project.gallery.length}
            </div>
            <button
              type="button"
              onClick={() => setActiveImageIndex(null)}
              className="size-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Central Image View with Prev/Next buttons */}
          <div
            className="relative flex items-center justify-center flex-1 max-w-6xl w-full mx-auto my-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev !== null
                    ? (prev - 1 + project.gallery.length) % project.gallery.length
                    : 0
                )
              }
              className="absolute left-2 sm:left-4 z-20 size-11 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg"
              aria-label="Previous"
            >
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

            <img
              alt={
                lang === 'pt'
                  ? project.gallery[activeImageIndex].caption
                  : project.gallery[activeImageIndex].captionEn
              }
              src={project.gallery[activeImageIndex].src}
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl transition-all"
            />

            <button
              type="button"
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev !== null ? (prev + 1) % project.gallery.length : 0
                )
              }
              className="absolute right-2 sm:right-4 z-20 size-11 rounded-full bg-black/60 hover:bg-primary text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg"
              aria-label="Next"
            >
              <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div
            className="text-center text-white/90 text-sm sm:text-base font-medium max-w-3xl mx-auto py-2 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {lang === 'pt'
              ? project.gallery[activeImageIndex].caption
              : project.gallery[activeImageIndex].captionEn}
          </div>
        </div>
      )}
    </div>
  );
}
