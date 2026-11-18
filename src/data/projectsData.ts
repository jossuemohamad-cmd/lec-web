export interface ProjectGalleryItem {
  src: string;
  caption: string;
  captionEn: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  tag: string;
  tagEn: string;
  location: string;
  locationEn: string;
  client: string;
  year: string;
  category: string;
  categoryEn: string;
  coverImage: string;
  stat1Value: string;
  stat1Label: string;
  stat1LabelEn: string;
  stat2Value: string;
  stat2Label: string;
  stat2LabelEn: string;
  stat3Value: string;
  stat3Label: string;
  stat3LabelEn: string;
  overview: {
    pt: string;
    en: string;
  };
  challenge: {
    pt: string;
    en: string;
  };
  solution: {
    pt: string;
    en: string;
  };
  results: {
    pt: string[];
    en: string[];
  };
  technicalSpecs: {
    label: string;
    labelEn: string;
    value: string;
    valueEn: string;
  }[];
  gallery: ProjectGalleryItem[];
}

export const projectsData: Record<string, ProjectDetail> = {
  'skm-engineering': {
    id: 'skm-engineering',
    title: 'SKM Engineering',
    tag: 'Solar C&I ligado à rede',
    tagEn: 'Grid-tied C&I Solar',
    location: 'Maputo, Moçambique',
    locationEn: 'Maputo, Mozambique',
    client: 'SKM Engineering',
    year: '2025 - 2026',
    category: 'Comercial & Industrial (C&I)',
    categoryEn: 'Commercial & Industrial (C&I)',
    coverImage: '/lecasu/official-project-skm.jpg',
    stat1Value: '80 kWp',
    stat1Label: 'Capacidade Fotovoltaica',
    stat1LabelEn: 'Solar PV Capacity',
    stat2Value: 'Sincronismo Diesel',
    stat2Label: 'Integração com Gerador',
    stat2LabelEn: 'Generator Integration',
    stat3Value: '65%',
    stat3Label: 'Poupança de Combustível',
    stat3LabelEn: 'Fuel Displacement',
    overview: {
      pt: 'A LECASU concebeu, forneceu e comissionou com sucesso um sistema solar fotovoltaico de 80 kWp instalado na cobertura das instalações da SKM Engineering em Maputo. O sistema foi especificamente concebido para resolver o problema crítico das interrupções de energia da rede pública e mitigar o elevado consumo de gasóleo dos geradores auxiliares.',
      en: 'LECASU engineered, procured, and commissioned an 80 kWp rooftop solar PV installation at SKM Engineering facilities in Maputo. Designed specifically to tackle grid unreliability and drastically lower generator diesel consumption during daytime operations.'
    },
    challenge: {
      pt: 'As frequentes oscilações e falhas na rede eléctrica nacional forçavam a SKM Engineering a operar geradores a diesel durante horas prolongadas, gerando elevados custos operacionais de combustível e manutenção mecânica frequente, além de emissões de ruído e gases poluentes.',
      en: 'Frequent utility outages forced prolonged diesel generator run-hours, resulting in exorbitant monthly fuel bills, heavy engine wear, noise pollution, and substantial carbon emissions.'
    },
    solution: {
      pt: 'Implementámos uma central solar fotovoltaica na cobertura metálica com controladores avançados de sincronismo solar-diesel (Fuel Save Controller). A tecnologia permite que a energia solar complemente e substitua a queima de gasóleo em tempo real, limitando a injecção na rede pública e mantendo o gerador no seu ponto óptimo de carga sem riscos de retorno de corrente.',
      en: 'We deployed a high-efficiency rooftop PV array integrated with an advanced Fuel Save Controller synchronizing seamlessly with existing diesel generators. This prioritizes solar energy while maintaining minimum generator loading without backfeeding risks.'
    },
    results: {
      pt: [
        'Redução imediata superior a 65% nos custos mensais de gasóleo durante horas de sol.',
        'Extensão substancial da vida útil dos grupos geradores através da diminuição de horas de operação contínua.',
        'Monitorização em tempo real 24/7 através de plataforma telemétrica SCADA da LECASU.',
        'Alimentação contínua e sem quebras para as máquinas industriais e gabinetes de engenharia.'
      ],
      en: [
        'Immediate reduction of over 65% in daytime diesel consumption and monthly fuel expenses.',
        'Extended lifespan of diesel generator sets through reduced operating hours and thermal stress.',
        '24/7 real-time telemetry and energy yield tracking via LECASU SCADA cloud dashboard.',
        'Continuous, clean, and flicker-free power delivery for precision engineering machinery.'
      ]
    },
    technicalSpecs: [
      {
        label: 'Potência de Pico (DC)',
        labelEn: 'Peak DC Capacity',
        value: '80 kWp (Módulos Tier-1 de Alta Eficiência)',
        valueEn: '80 kWp (Tier-1 High-Efficiency Modules)'
      },
      {
        label: 'Topologia do Sistema',
        labelEn: 'System Topology',
        value: 'Solar Fotovoltaico C&I com Sincronismo Diesel',
        valueEn: 'C&I Solar PV with Diesel Synchronization'
      },
      {
        label: 'Estrutura de Montagem',
        labelEn: 'Mounting Structure',
        value: 'Fixação coplanar em alumínio anodizado marítimo',
        valueEn: 'Marine-grade anodized aluminium coplanar brackets'
      },
      {
        label: 'Sistema de Controlo',
        labelEn: 'Control System',
        value: 'Fuel Save Controller com protecção anti-ilhamento',
        valueEn: 'Fuel Save Controller with anti-islanding protection'
      },
      {
        label: 'Telemetria',
        labelEn: 'Telemetry & SCADA',
        value: 'Supervisão remota com sensores de irradiação e temperatura',
        valueEn: 'Remote monitoring with pyranometer & temp sensors'
      }
    ],
    gallery: [
      {
        src: '/lecasu/official-project-skm.jpg',
        caption: 'Central fotovoltaica de 80 kWp na cobertura industrial da SKM Engineering',
        captionEn: '80 kWp industrial rooftop solar array at SKM Engineering'
      },
      {
        src: '/lecasu/solar-site.jpeg',
        caption: 'Alinhamento dos módulos e inspecção técnica da instalação',
        captionEn: 'PV module layout and technical system inspection'
      },
      {
        src: '/lecasu/engineering-procurement-construction.jpeg',
        caption: 'Estrutura metálica de fixação e gestão de cablagem DC',
        captionEn: 'Structural mounting system and organized DC cabling runs'
      },
      {
        src: '/lecasu/project-inhambane.jpg',
        caption: 'Testes de sincronismo com geradores e comissionamento final',
        captionEn: 'Generator synchronization testing and final commissioning'
      }
    ]
  },

  'incubox-2': {
    id: 'incubox-2',
    title: 'INCUBOX 2 (GAPI)',
    tag: 'Híbrido isolado da rede',
    tagEn: 'Off-grid Hybrid Solar',
    location: 'Cabo Delgado, Nampula & Niassa',
    locationEn: 'Cabo Delgado, Nampula & Niassa',
    client: 'GAPI / Programa INCUBOX',
    year: '2024 - 2026',
    category: 'Electrificação Rural & Impacto Social',
    categoryEn: 'Rural Electrification & Social Impact',
    coverImage: '/lecasu/official-project-incubox.jpeg',
    stat1Value: '68.2 kWp',
    stat1Label: 'Capacidade Total Instalada',
    stat1LabelEn: 'Total Solar Capacity',
    stat2Value: '11 Cabines',
    stat2Label: 'Unidades Modulares Autónomas',
    stat2LabelEn: 'Modular Autonomous Units',
    stat3Value: '100%',
    stat3Label: 'Autonomia Fora da Rede',
    stat3LabelEn: 'Off-Grid Energy Autonomy',
    overview: {
      pt: 'No âmbito do programa INCUBOX 2 promovido pela GAPI, a LECASU implementou 11 sistemas solares fotovoltaicos híbridos e autónomos (off-grid) para electrificar cabines modulares de formação e incubação de jovens empreendedores em zonas rurais e semi-urbanas das províncias de Cabo Delgado, Nampula e Niassa.',
      en: 'As part of the INCUBOX 2 initiative promoted by GAPI, LECASU engineered and installed 11 standalone hybrid solar systems to electrify modular digital learning and youth incubation hubs across rural areas in Cabo Delgado, Nampula, and Niassa.'
    },
    challenge: {
      pt: 'As localidades seleccionadas situam-se em áreas remotas onde a rede pública de energia (EDM) é inexistente ou altamente instável. Era necessário assegurar eletricidade ininterrupta 24 horas por dia para alimentar salas de computadores, iluminação LED, sistemas de conectividade por satélite e equipamentos de climatização, sem qualquer dependência de combustível.',
      en: 'Project sites are located in remote areas lacking EDM utility grid access. Uninterrupted 24/7 power was required to run computer labs, LED lighting, satellite internet connectivity, and ventilation systems with zero fuel dependence.'
    },
    solution: {
      pt: 'Projectámos unidades solares modulares com acumuladores de baterias de ciclo profundo de lítio/gel e inversores-carregadores industriais. Cada cabine funciona como uma micro-rede inteligente independente, com protecções contra surtos atmosféricos, climatização passiva e quadro eléctrico de distribuição totalmente certificado.',
      en: 'We designed modular standalone solar units with deep-cycle energy storage and industrial hybrid inverter-chargers. Each cabin acts as an independent smart microgrid equipped with surge suppressors, passive cooling, and certified distribution boards.'
    },
    results: {
      pt: [
        '100% de autonomia e disponibilidade de energia limpa sem custos recorrentes de combustível.',
        'Electrificação contínua de 11 centros de capacitação tecnológica no norte de Moçambique.',
        'Impacto directo em milhares de jovens que acedem diariamente a formação digital e conectividade.',
        'Design robusto e resistente a intempéries com garantia de durabilidade e manutenção preventiva agendada.'
      ],
      en: [
        '100% clean energy autonomy with zero recurring generator fuel expenditures.',
        'Uninterrupted electrification across 11 youth entrepreneurship training hubs in northern Mozambique.',
        'Direct social impact enabling thousands of young Mozambicans to access digital literacy and connectivity.',
        'Rugged, weather-resistant installation built for remote operational resilience.'
      ]
    },
    technicalSpecs: [
      {
        label: 'Capacidade Global Instalada',
        labelEn: 'Total Installed Capacity',
        value: '68.2 kWp divididos por 11 centrais modulares (6.2 kWp por cabine)',
        valueEn: '68.2 kWp across 11 modular sites (6.2 kWp per cabin)'
      },
      {
        label: 'Armazenamento de Energia',
        labelEn: 'Energy Storage Bank',
        value: 'Bancos de baterias de alto ciclo para autonomia contínua dia e noite',
        valueEn: 'High-cycle battery banks for reliable day & night autonomy'
      },
      {
        label: 'Conversão de Potência',
        labelEn: 'Inverter Technology',
        value: 'Inversores-carregadores solares com gestão inteligente de carga',
        valueEn: 'Industrial hybrid solar inverters with intelligent load control'
      },
      {
        label: 'Aplicações Alimentadas',
        labelEn: 'Powered Loads',
        value: 'Salas de computadores, antenas de satélite, climatização e iluminação',
        valueEn: 'Computer workstations, satellite receivers, ventilation & lighting'
      },
      {
        label: 'Localizações Geográficas',
        labelEn: 'Project Locations',
        value: 'Comunidades selecionadas em Cabo Delgado, Nampula e Niassa',
        valueEn: 'Selected rural communities in Cabo Delgado, Nampula & Niassa'
      }
    ],
    gallery: [
      {
        src: '/lecasu/official-project-incubox.jpeg',
        caption: 'Jovens beneficiários no interior de uma cabine solar INCUBOX 2 totalmente operacional',
        captionEn: 'Students inside a fully powered INCUBOX 2 solar training cabin'
      },
      {
        src: '/lecasu/incubox-site.jpeg',
        caption: 'Sala de aula tecnológica alimentada exclusivamente por energia solar da LECASU',
        captionEn: 'Digital learning classroom powered 100% by LECASU solar energy'
      },
      {
        src: '/lecasu/incubox-inverter.jpeg',
        caption: 'Inversores híbridos e protecções elétricas instalados no interior da cabine',
        captionEn: 'Hybrid inverters and electrical protection switchgear inside the cabin'
      },
      {
        src: '/lecasu/incubox-system.jpeg',
        caption: 'Sistema de armazenamento e distribuição de energia de alta resiliência',
        captionEn: 'High-resilience energy storage and distribution board system'
      }
    ]
  }
};
