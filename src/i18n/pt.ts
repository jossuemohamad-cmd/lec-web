export type Lang = 'en' | 'pt';

export const PT_TRANSLATIONS: Record<string, string> = {
  // Navigation & CTA
  'Home': 'Início',
  'About': 'Sobre',
  'About Us': 'Sobre Nós',
  'Service': 'Serviços',
  'Our Services': 'Nossos Serviços',
  'Project': 'Projetos',
  'Projects': 'Projetos',
  'Pricing / Packages': 'Preços / Pacotes',
  'Blog': 'Blog',
  'FAQ': 'Perguntas Frequentes',
  'Contact': 'Contacto',
  'Contact Us': 'Contacte-nos',
  'Request a Proposal': 'Solicitar Proposta',
  'View Projects': 'Ver Projetos',
  'Learn More': 'Saber Mais',
  'Read More': 'Ler Mais',
  'Get Started': 'Começar Agora',

  // Hero
  'Powering Africa with Reliable Energy Infrastructure.':
    'Impulsionando África com Infraestrutura Energética Fiável.',
  'We design, build and operate high-performance solar and hybrid energy systems tailored for African conditions. From first assessment to long-term operation, we deliver resilient infrastructure through one accountable engineering partner.':
    'Projetamos, construímos e operamos sistemas solares e híbridos de alto desempenho adaptados às condições africanas. Da avaliação inicial à operação de longo prazo, entregamos infraestrutura resiliente com um único parceiro de engenharia responsável.',
  'Projects Installed': 'Projetos Instalados',
  'Energy Savings': 'Poupança Energética',
  'Client Rating': 'Avaliação dos Clientes',
  'Satisfied Clients': 'Clientes Satisfeitos',
  'System Availability': 'Disponibilidade do Sistema',

  // Home Sections
  'Grid Solution': 'Solução de Rede',
  'Residential Solar': 'Solar Residencial',
  'Advanced solar arrays tailored for modern homeowners who prioritize sustainability and economic independence.':
    'Sistemas solares avançados concebidos para residências modernas que priorizam sustentabilidade e independência económica.',
  'Commercial Solar': 'Solar Comercial',
  'Energy-as-a-Service (PPA)': 'Energia como Serviço (PPA)',
  'African Expertise': 'Experiência Africana',
  'Hybrid Systems Capability': 'Capacidade em Sistemas Híbridos',
  'Fast Execution': 'Execução Rápida',
  'Strong Engineering Team': 'Equipa de Engenharia Sólida',
  'Solar infrastructure for remote education and enterprise':
    'Infraestrutura solar para educação remota e empreendedorismo',
  'Power your facility with reliable energy infrastructure':
    'Alimente a sua instalação com infraestrutura energética fiável',

  // Subpage Headers & Common
  'Our Story & Mission': 'Nossa História e Missão',
  'Engineering & Energy Services': 'Serviços de Engenharia e Energia',
  'Solar & Hybrid Projects': 'Projetos Solares e Híbridos',
  'Packages & Pricing': 'Pacotes e Preços',
  'Frequently Asked Questions': 'Perguntas Frequentes',
  'Energy Insights & Articles': 'Artigos e Conhecimento Energético',
  'Get in Touch': 'Entre em Contacto',

  // Footer
  'Contact Info': 'Informações de Contacto',
  'Quick Links': 'Links Rápidos',
  'Services': 'Serviços',
  'Working Hours': 'Horário de Funcionamento',
  'Mon – Fri': 'Seg – Sex',
  'Sat – Sun': 'Sáb – Dom',
  'Saturday': 'Sábado',
  'Sunday': 'Domingo',
  'Closed': 'Encerrado',
  'Solar Simulator →': 'Simulador Solar →',
  'Terms and Conditions': 'Termos e Condições',
  'Privacy Policy': 'Política de Privacidade',
  'Engineered for African energy growth. All Rights Reserved.':
    'Desenvolvido para o crescimento energético de África. Todos os direitos reservados.',

  // Contact / Quote Modal
  'Fast & Free': 'Rápido e Gratuito',
  'Request a Project Proposal': 'Solicitar Proposta de Projeto',
  'Full Name': 'Nome Completo',
  'Email Address': 'Endereço de Email',
  'Phone Number': 'Número de Telefone',
  'Message': 'Mensagem',
  'Send Message': 'Enviar Mensagem',
};

const originalTextMap = new WeakMap<Text, string>();

function normalizeText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

export function applyLanguageToDom(lang: Lang): void {
  const root = document.getElementById('root');
  if (!root) return;

  document.documentElement.lang = lang === 'pt' ? 'pt-MZ' : 'en';

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      const tag = parent.tagName;
      if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') {
        return NodeFilter.FILTER_REJECT;
      }
      if (!node.nodeValue || !node.nodeValue.trim()) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }

  for (const textNode of nodes) {
    const currentText = textNode.nodeValue ?? '';
    const original = originalTextMap.get(textNode);

    if (lang === 'en') {
      if (original !== undefined && currentText !== original) {
        textNode.nodeValue = original;
      }
      continue;
    }

    const base = original ?? currentText;
    const normalized = normalizeText(base);
    const translated = PT_TRANSLATIONS[normalized];
    if (translated) {
      if (original === undefined) {
        originalTextMap.set(textNode, currentText);
      }
      const leading = base.match(/^\s*/)?.[0] ?? '';
      const trailing = base.match(/\s*$/)?.[0] ?? '';
      textNode.nodeValue = `${leading}${translated}${trailing}`;
    }
  }
}
