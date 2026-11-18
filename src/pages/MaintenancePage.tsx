export function MaintenancePage() {
  return (
    <div className="relative min-h-screen bg-[#0a0b0d] text-white flex flex-col justify-between selection:bg-primary selection:text-white overflow-hidden font-instrument-sans">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[140px]" />
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px]" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Header / Logo */}
      <header className="relative z-10 w-full py-8 sm:py-12">
        <div className="container mx-auto px-6 flex justify-center">
          <img 
            alt="LECASU" 
            width={302} 
            height={72} 
            className="w-auto h-10 sm:h-12 drop-shadow-md" 
            src="/lecasu/lecasu-logo.png" 
          />
        </div>
      </header>

      {/* Central Content */}
      <main className="relative z-10 container mx-auto px-6 py-10 my-auto">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-8 shadow-inner backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Modo de Manutenção • Maintenance Mode
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
            Estamos em Manutenção
          </h1>

          {/* Descriptions */}
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mb-3">
            O nosso website está a passar por actualizações programadas para lhe proporcionar uma melhor experiência com as nossas soluções de engenharia e energia.
          </p>
          <p className="text-sm sm:text-base text-white/50 leading-relaxed max-w-lg mb-10">
            Our website is currently undergoing scheduled updates to better serve you. We will be back online shortly.
          </p>

          {/* Contact Direct Cards */}
          <div className="w-full max-w-lg grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <a
              href="mailto:info@lecasu.co.mz"
              className="group flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-primary/50 transition-all text-left"
            >
              <div className="size-11 shrink-0 rounded-lg bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="size-5 fill-current">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="overflow-hidden">
                <div className="text-xs text-white/50 font-medium">Email</div>
                <div className="text-sm font-semibold text-white truncate group-hover:text-primary transition-colors">
                  info@lecasu.co.mz
                </div>
              </div>
            </a>

            <a
              href="tel:+258855500255"
              className="group flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-primary/50 transition-all text-left"
            >
              <div className="size-11 shrink-0 rounded-lg bg-primary/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="size-5 fill-current">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="overflow-hidden">
                <div className="text-xs text-white/50 font-medium">Contacto Direto</div>
                <div className="text-sm font-semibold text-white truncate group-hover:text-primary transition-colors">
                  +258 85 550 0255
                </div>
              </div>
            </a>
          </div>

          <div className="text-xs text-white/40">
            Agradecemos a sua compreensão e paciência.
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 border-t border-white/5">
        <div className="container mx-auto px-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} LECASU LDA. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
