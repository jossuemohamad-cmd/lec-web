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
        src: '/lecasu/skm-gallery-rooftop.jpg',
        caption: 'Central solar fotovoltaica instalada na cobertura industrial da SKM Engineering',
        captionEn: 'Industrial rooftop solar PV installation at SKM Engineering'
      },
      {
        src: '/lecasu/skm-gallery-electrical.jpg',
        caption: 'Quadro geral de distribuição e organização da cablagem de potência',
        captionEn: 'Main distribution board and power cabling management'
      },
      {
        src: '/lecasu/skm-gallery-panel.jpg',
        caption: 'Painel de comando, disjuntores e proteções do sistema solar',
        captionEn: 'Control panel, circuit breakers, and solar protection system'
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
  },

  'ijcsud-sistemas-fotovoltaicos': {
    id: 'ijcsud-sistemas-fotovoltaicos',
    title: 'Igreja de Jesus Cristo dos Santos dos Últimos dias - Capela da Machava',
    tag: 'Fotovoltaico com Armazenamento',
    tagEn: 'Solar PV & Battery Storage',
    location: 'Província de Maputo, Moçambique',
    locationEn: 'Maputo Province, Mozambique',
    client: 'Igreja de Jesus Cristo dos Santos dos Últimos Dias',
    year: '2025',
    category: 'Institucional & Comunitário',
    categoryEn: 'Institutional & Community',
    coverImage: '/lecasu/machava-capela-solar-aerial-overview.jpg',
    stat1Value: '3 x 12 kWp',
    stat1Label: 'Capacidade Solar (36 kWp)',
    stat1LabelEn: 'Solar Capacity (36 kWp)',
    stat2Value: '20 kWh',
    stat2Label: 'Armazenamento BESS',
    stat2LabelEn: 'Battery Storage Bank',
    stat3Value: '3 Sistemas',
    stat3Label: 'Unidades Instaladas',
    stat3LabelEn: 'Installed Systems',
    overview: {
      pt: 'Instalação e comissionamento de três sistemas solares fotovoltaicos completos com armazenamento de energia em baterias de 20 kWh para edifícios da Igreja de Jesus Cristo dos Santos dos Últimos Dias na Província de Maputo, assegurando autonomia e continuidade de fornecimento elétrico de alta fiabilidade.',
      en: 'Turnkey installation and commissioning of three complete solar photovoltaic systems with 20 kWh battery energy storage for The Church of Jesus Christ of Latter-day Saints facilities in Maputo Province, ensuring high-reliability clean power and operational resilience.'
    },
    challenge: {
      pt: 'As constantes oscilações e cortes de energia na rede local causavam interrupções frequentes nas atividades, danificavam equipamentos de som e iluminação e forçavam despesas recorrentes com geradores auxiliares.',
      en: 'Recurrent utility grid voltage fluctuations and blackouts interrupted community activities, stressed audio-visual hardware, and caused ongoing fuel expenditures on auxiliary backup generators.'
    },
    solution: {
      pt: 'Dimensionamento e montagem de 3 centrais solares fotovoltaicas de 12 kWp cada, integradas com tecnologia de inversores híbridos inteligentes e banco de armazenamento de 20 kWh, comutação automática e proteção avançada contra descargas atmosféricas.',
      en: 'Engineering and deployment of 3 independent 12 kWp solar arrays integrated with smart hybrid inverters and a 20 kWh battery storage bank, automatic transfer switching, and advanced surge protection.'
    },
    results: {
      pt: [
        'Fornecimento de energia contínua, silenciosa e limpa para todas as dependências das instalações.',
        'Redução imediata superior a 75% no consumo e faturação da rede pública.',
        'Autonomia energética garantida durante cortes e instabilidades prolongadas da rede.',
        'Execução técnica de rigor com garantia de durabilidade e assistência pós-venda da LECASU.'
      ],
      en: [
        'Continuous, clean, and silent electricity delivery across all facility wings.',
        'Immediate reduction of over 75% in utility grid power consumption and billing.',
        'Guaranteed uninterrupted battery autonomy throughout prolonged grid outages.',
        'High-precision installation built with LECASU warranty and preventive maintenance.'
      ]
    },
    technicalSpecs: [
      {
        label: 'Potência Solar Total (DC)',
        labelEn: 'Total Solar DC Power',
        value: '36 kWp divididos em 3 sistemas de 12 kWp (Módulos Tier-1)',
        valueEn: '36 kWp across 3 systems of 12 kWp (Tier-1 Modules)'
      },
      {
        label: 'Capacidade de Armazenamento',
        labelEn: 'Energy Storage Capacity',
        value: '20 kWh (Bancos de baterias de lítio de alta eficiência e ciclo profundo)',
        valueEn: '20 kWh (High-efficiency deep-cycle lithium battery storage)'
      },
      {
        label: 'Arquitetura do Sistema',
        labelEn: 'System Architecture',
        value: 'Híbrido fotovoltaico com comutação automática e backup prioritário',
        valueEn: 'Hybrid solar PV with automatic transfer and critical load backup'
      },
      {
        label: 'Localização Geográfica',
        labelEn: 'Project Location',
        value: 'Instalações na Província de Maputo',
        valueEn: 'Facilities in Maputo Province'
      }
    ],
    gallery: [
      {
        src: '/lecasu/machava-capela-solar-aerial-overview.jpg',
        caption: 'Vista aérea do sistema solar fotovoltaico instalado na Capela da Machava',
        captionEn: 'Aerial overview of the rooftop solar PV installation at Machava Chapel'
      },
      {
        src: '/lecasu/machava-capela-solar-mounting-structure.jpg',
        caption: 'Estruturas de fixação de módulos solares, cablagens e integração técnica na cobertura',
        captionEn: 'Mounting structures, technical cabling, and rooftop HVAC integration'
      },
      {
        src: '/lecasu/machava-capela-solar-installation-work.jpg',
        caption: 'Fase de preparação e montagem dos suportes da central solar pela equipa LECASU',
        captionEn: 'Solar array mounting rails installation stage by the LECASU engineering team'
      }
    ]
  },

  'ijcsud-projectos-residenciais': {
    id: 'ijcsud-projectos-residenciais',
    title: 'Igreja de Jesus Cristo dos Santos dos Últimos dias - Capela de Matola-Gare',
    tag: 'Estudos & Projetos Executivos',
    tagEn: 'Electrical & Solar Executive Design',
    location: 'Cidade de Maputo, Moçambique',
    locationEn: 'Maputo City, Mozambique',
    client: 'Igreja de Jesus Cristo dos Santos dos Últimos Dias',
    year: '2025',
    category: 'Engenharia & Consultoria',
    categoryEn: 'Engineering & Consulting',
    coverImage: '/lecasu/matola-gare-capela-solar-aerial.jpg',
    stat1Value: '10 Residências',
    stat1Label: 'Habitações Estudadas',
    stat1LabelEn: 'Residential Dwellings',
    stat2Value: '100% Executivo',
    stat2Label: 'Projetos de Engenharia',
    stat2LabelEn: 'Executive Engineering Design',
    stat3Value: 'Solar + Rede',
    stat3Label: 'Integração Energética',
    stat3LabelEn: 'Integrated Solar Architecture',
    overview: {
      pt: 'Desenvolvimento de estudo de implantação e projectos executivos completos de electricidade predial e energia solar fotovoltaica para 10 residências associadas à Igreja de Jesus Cristo dos Santos dos Últimos Dias na Cidade de Maputo, assegurando máxima segurança, eficiência e sustentabilidade.',
      en: 'Comprehensive site assessment, detailed electrical layouts, and executive solar PV engineering blueprints for 10 residences associated with The Church of Jesus Christ of Latter-day Saints in Maputo City, tailored for maximum efficiency, safety, and durability.'
    },
    challenge: {
      pt: 'As 10 habitações apresentavam diferentes características de orientação solar, áreas de cobertura e cargas elétricas, exigindo projetos executivos individualizados e otimizados para garantir eficiência sem sobrecustos de construção.',
      en: 'The 10 residences varied in structural orientations, roof spaces, and consumption profiles, requiring bespoke, value-engineered executive blueprints to prevent over-expenditure while ensuring optimal performance.'
    },
    solution: {
      pt: 'Elaboração de estudos de sombreamento 3D, cálculos luminotécnicos, esquemas unifilares de força e iluminação, dimensionamento de quadros elétricos e projetos solares fotovoltaicos dedicados para cada unidade residencial, incluindo listas técnicas de materiais.',
      en: '3D shadow analysis, computerized load calculations, lighting schematics, single-line power diagrams, distribution panel sizing, and customized solar PV blueprints for each dwelling with detailed bills of quantities.'
    },
    results: {
      pt: [
        'Caderno completo de projetos executivos aprovados com conformidade regulatória plena.',
        'Otimização do investimento e custo de materiais para as 10 habitações.',
        'Planeamento elétrico preparado para transição solar fotovoltaica sem necessidade de reformas.',
        'Segurança contra sobrecargas, curto-circuitos e riscos de incêndio.'
      ],
      en: [
        'Full set of approved executive blueprints in total compliance with electrical codes.',
        'Optimized procurement cost and material efficiency across all 10 homes.',
        'Solar-ready electrical designs enabling seamless future PV deployment without retrofits.',
        'Comprehensive protection against overloads, voltage sags, and fire risks.'
      ]
    },
    technicalSpecs: [
      {
        label: 'Escopo de Engenharia',
        labelEn: 'Engineering Scope',
        value: 'Estudo de implantação, projetos executivos elétricos e energia solar',
        valueEn: 'Site implementation study, executive electrical and solar PV blueprints'
      },
      {
        label: 'Dimensão do Projeto',
        labelEn: 'Project Scale',
        value: '10 unidades residenciais na Cidade de Maputo',
        valueEn: '10 residential dwellings in Maputo City'
      },
      {
        label: 'Normas Aplicadas',
        labelEn: 'Compliance Standards',
        value: 'Regulamentos de Segurança de Redes de Distribuição e Normas EDM/IEC',
        valueEn: 'EDM Utility and IEC international electrical safety standards'
      },
      {
        label: 'Localização',
        labelEn: 'Location',
        value: 'Cidade de Maputo, Moçambique',
        valueEn: 'Maputo City, Mozambique'
      }
    ],
    gallery: [
      {
        src: '/lecasu/matola-gare-capela-solar-aerial.jpg',
        caption: 'Vista aérea do sistema solar fotovoltaico instalado na Capela de Matola-Gare',
        captionEn: 'Aerial drone view of rooftop solar PV installation at Matola-Gare Chapel'
      },
      {
        src: '/lecasu/matola-gare-capela-inverter-bess.jpg',
        caption: 'Inversor híbrido SunSynk, quadro de proteções e banco de baterias de lítio montado em parede',
        captionEn: 'SunSynk hybrid inverter, protection switchgear, and wall-mounted lithium battery storage bank'
      },
      {
        src: '/lecasu/matola-gare-capela-sunsynk-monitoring.jpg',
        caption: 'Comissionamento e monitorização em tempo real via plataforma SunSynk Connect',
        captionEn: 'Commissioning and real-time telemetry monitoring via SunSynk Connect platform'
      }
    ]
  },

  'gapi-agrovida-cabo-delgado': {
    id: 'gapi-agrovida-cabo-delgado',
    title: 'GAPI, Sociedade de Investimentos',
    tag: 'Projecto AgroVida / 6,2 kWp',
    tagEn: 'AgroVida Solar Project / 6.2 kWp',
    location: 'Cabo Delgado, Moçambique',
    locationEn: 'Cabo Delgado, Mozambique',
    client: 'GAPI, Sociedade de Investimentos',
    year: '2026',
    category: 'Agrícola & Desenvolvimento',
    categoryEn: 'Agriculture & Community Development',
    coverImage: '/lecasu/gapi-agrovida-cabin-solar.jpg',
    stat1Value: '6.2 kWp',
    stat1Label: 'Potência Solar Fotovoltaica',
    stat1LabelEn: 'Solar PV Capacity',
    stat2Value: 'BESS',
    stat2Label: 'Armazenamento em Baterias',
    stat2LabelEn: 'Battery Energy Storage',
    stat3Value: 'AgroVida',
    stat3Label: 'Programa Agrícola Sustentável',
    stat3LabelEn: 'Sustainable Farming Program',
    overview: {
      pt: 'Fornecimento e instalação completa de sistema solar fotovoltaico com armazenamento de 6,2 kWp no âmbito do projecto AgroVida, promovido pela GAPI — Sociedade de Investimentos em Cabo Delgado, para impulsionar a agricultura local e cadeias de valor rurais.',
      en: 'Complete turnkey supply and installation of a 6.2 kWp solar photovoltaic system with battery energy storage under the AgroVida project, promoted by GAPI — Sociedade de Investimentos in Cabo Delgado to empower local agricultural value chains.'
    },
    challenge: {
      pt: 'As comunidades agrícolas no norte de Cabo Delgado enfrentam carência total de rede elétrica, o que limitava a conservação de produtos, o uso de equipamentos agrícolas mecanizados e gerava custos insustentáveis com geradores a diesel.',
      en: 'Remote agricultural communities in northern Cabo Delgado lacked utility grid access, severely constraining cold preservation, agricultural processing, and incurring unsustainable diesel fuel costs.'
    },
    solution: {
      pt: 'Implementação de central solar de 6,2 kWp com armazenamento de energia, projetada para suportar o ambiente tropical da província, fornecendo eletricidade limpa e estável para operações de conservação, secagem e equipamentos do centro agrícola.',
      en: 'Turnkey deployment of a 6.2 kWp solar array with dedicated battery energy storage engineered for northern tropical climates, supplying clean and reliable electricity for processing and cold storage facilities.'
    },
    results: {
      pt: [
        'Energia solar contínua e fiável para operações agrícolas essenciais do AgroVida.',
        'Eliminação de custos com queima de combustíveis fósseis e manutenção de geradores.',
        'Melhoria na qualidade e conservação de produtos agrícolas na cadeia comunitária.',
        'Formação prática de operadores locais para gestão diária e monitorização da instalação.'
      ],
      en: [
        'Continuous, reliable solar power for key AgroVida agricultural processing activities.',
        'Elimination of recurring diesel fuel purchases and generator mechanical wear.',
        'Improved agricultural product shelf-life and value retention for rural producers.',
        'On-site operator training delivered to local staff for daily system monitoring.'
      ]
    },
    technicalSpecs: [
      {
        label: 'Capacidade Solar (DC)',
        labelEn: 'Solar DC Capacity',
        value: '6.2 kWp com módulos fotovoltaicos Tier-1 de alta eficiência',
        valueEn: '6.2 kWp with high-efficiency Tier-1 solar modules'
      },
      {
        label: 'Armazenamento',
        labelEn: 'Battery Storage',
        value: 'Banco de baterias de ciclo profundo para autonomia contínua',
        valueEn: 'Deep-cycle battery storage bank for continuous autonomy'
      },
      {
        label: 'Programa Promotor',
        labelEn: 'Promoting Program',
        value: 'Projecto AgroVida (GAPI, Sociedade de Investimentos)',
        valueEn: 'AgroVida Project (GAPI, Sociedade de Investimentos)'
      },
      {
        label: 'Localização',
        labelEn: 'Location',
        value: 'Cabo Delgado, Moçambique',
        valueEn: 'Cabo Delgado, Mozambique'
      }
    ],
    gallery: [
      {
        src: '/lecasu/gapi-agrovida-cabin-solar.jpg',
        caption: 'Cabine solar modular com arranjo fotovoltaico na cobertura — Projecto AgroVida',
        captionEn: 'Modular solar cabin with rooftop PV array — AgroVida Project'
      },
      {
        src: '/lecasu/gapi-agrovida-inverter-batteries.jpg',
        caption: 'Inversor solar híbrido, caixa combinadora DC e banco de baterias de armazenamento',
        captionEn: 'Hybrid solar inverter, DC combiner box, and energy storage battery bank'
      },
      {
        src: '/lecasu/gapi-agrovida-control-system.jpg',
        caption: 'Sala técnica interior com sistema de controle, inversores e acumuladores',
        captionEn: 'Interior technical room with control system, inverters, and battery storage'
      }
    ]
  },

  'gapi-aga-khan-agrovida': {
    id: 'gapi-aga-khan-agrovida',
    title: 'GAPI / Fundação Aga Khan',
    tag: 'AgroVida / 6,2 kWp + 400Ah',
    tagEn: 'AgroVida / 6.2 kWp + 400Ah',
    location: 'Montepuez, Cabo Delgado',
    locationEn: 'Montepuez, Cabo Delgado',
    client: 'GAPI / Fundação Aga Khan',
    year: '2023',
    category: 'Desenvolvimento Rural & Agro-Solar',
    categoryEn: 'Rural Development & Agro-Solar',
    coverImage: '/lecasu/project-inhambane.jpg',
    stat1Value: '6.2 kWp',
    stat1Label: 'Potência Fotovoltaica',
    stat1LabelEn: 'Solar PV Capacity',
    stat2Value: '400 Ah',
    stat2Label: 'Armazenamento em Baterias',
    stat2LabelEn: 'Deep-Cycle Battery Bank',
    stat3Value: 'Montepuez',
    stat3Label: 'Distrito Beneficiado',
    stat3LabelEn: 'Target District',
    overview: {
      pt: 'Fornecimento e instalação completa de sistema solar fotovoltaico com armazenamento (6,2 kWp + banco de baterias de 400Ah) no âmbito da parceria entre a GAPI e a Fundação Aga Khan para o projecto AgroVida em Montepuez, Cabo Delgado.',
      en: 'Complete supply and installation of a standalone solar PV system with energy storage (6.2 kWp + 400Ah battery bank) under the partnership between GAPI and the Aga Khan Foundation for the AgroVida project in Montepuez, Cabo Delgado.'
    },
    challenge: {
      pt: 'Condições climáticas rigorosas com elevadas temperaturas em Montepuez, associadas à ausência de rede elétrica pública estável, exigindo um sistema solar robusto com capacidade de absorver picos de consumo agrícola dia e noite.',
      en: 'Demanding semi-arid climatic conditions in Montepuez with high ambient temperatures, requiring a heavy-duty solar system capable of delivering continuous power for agricultural equipment day and night.'
    },
    solution: {
      pt: 'Projeto e montagem de central solar fotovoltaica de 6,2 kWp acoplada a inversor de potência industrial e banco de baterias de 400Ah, com gabinete ventilado e disjuntores de corte rápido para segurança máxima.',
      en: 'Engineering and deployment of a 6.2 kWp solar PV array connected to an industrial-grade inverter and a 400Ah battery bank housed in a ventilated cabinet with comprehensive protective switchgear.'
    },
    results: {
      pt: [
        'Energia autônoma de alta fiabilidade comprovada em operação contínua desde 2023.',
        'Reserva de energia de 400Ah permitindo operação ininterrupta no período noturno.',
        'Apoio direto às atividades produtivas e comunitárias dos beneficiários em Montepuez.',
        'Zero emissões de carbono e custo de combustível eliminado no centro AgroVida.'
      ],
      en: [
        'High-reliability standalone clean power proven in continuous operation since 2023.',
        '400Ah dedicated energy storage enabling smooth nocturnal and cloudy-day operation.',
        'Direct empowerment of local productive and community agricultural activities in Montepuez.',
        'Zero carbon emissions and complete elimination of generator fuel costs at AgroVida hub.'
      ]
    },
    technicalSpecs: [
      {
        label: 'Capacidade Fotovoltaica',
        labelEn: 'Solar PV Capacity',
        value: '6.2 kWp com módulos de alta eficiência térmica',
        valueEn: '6.2 kWp with high-temperature coefficient solar modules'
      },
      {
        label: 'Armazenamento de Energia',
        labelEn: 'Energy Storage Capacity',
        value: 'Banco de baterias de ciclo profundo de 400 Ah',
        valueEn: '400 Ah industrial deep-cycle battery bank'
      },
      {
        label: 'Parceiros Institucionais',
        labelEn: 'Institutional Partners',
        value: 'GAPI, Sociedade de Investimentos / Fundação Aga Khan',
        valueEn: 'GAPI, Sociedade de Investimentos / Aga Khan Foundation'
      },
      {
        label: 'Localização',
        labelEn: 'Location',
        value: 'Distrito de Montepuez, Cabo Delgado',
        valueEn: 'Montepuez District, Cabo Delgado'
      }
    ],
    gallery: [
      {
        src: '/lecasu/project-inhambane.jpg',
        caption: 'Central solar de 6,2 kWp instalada em Montepuez para o projecto AgroVida',
        captionEn: '6.2 kWp solar installation in Montepuez for the AgroVida project'
      },
      {
        src: '/lecasu/incubox-inverter.jpeg',
        caption: 'Inversores e equipamentos de conversão de energia com proteções elétricas',
        captionEn: 'Inverters and power conversion equipment with circuit protections'
      },
      {
        src: '/lecasu/skm-gallery-electrical.jpg',
        caption: 'Quadro elétrico principal e ligação ao banco de baterias de 400Ah',
        captionEn: 'Main distribution board and connection to 400Ah battery storage'
      }
    ]
  },

  'fdc-irrigacao-solar-guija': {
    id: 'fdc-irrigacao-solar-guija',
    title: 'FDC — Fundação para o Desenvolvimento Comunitário',
    tag: 'Irrigação Solar / 2 x 5 kWp',
    tagEn: 'Solar Irrigation / 2 x 5 kWp',
    location: 'Gaza, Distrito de Guijá',
    locationEn: 'Guijá District, Gaza Province',
    client: 'FDC — Fundação para o Desenvolvimento Comunitário',
    year: '2024',
    category: 'Água & Irrigação Solar',
    categoryEn: 'Water & Solar Irrigation',
    coverImage: '/lecasu/project-extra-2.jpeg',
    stat1Value: '2 x 5 kWp',
    stat1Label: 'Potência Solar de Bombeamento',
    stat1LabelEn: 'Solar Pumping Power',
    stat2Value: '2 Sistemas',
    stat2Label: 'Sistemas de Irrigação',
    stat2LabelEn: 'Irrigation Systems',
    stat3Value: '100% Solar',
    stat3Label: 'Operação a Custo Zero',
    stat3LabelEn: 'Zero Operational Fuel Cost',
    overview: {
      pt: 'Instalação de dois sistemas de irrigação solar fotovoltaica (2 x 5 kWp) para dois beneficiários agrícolas no Distrito de Guijá, Província de Gaza, sob iniciativa da FDC — Fundação para o Desenvolvimento Comunitário, assegurando água contínua para a produção alimentar.',
      en: 'Installation of two solar photovoltaic irrigation systems (2 x 5 kWp) for two agricultural producers in Guijá District, Gaza Province, promoted by FDC — Fundação para o Desenvolvimento Comunitário, securing reliable water access for food production.'
    },
    challenge: {
      pt: 'O Distrito de Guijá enfrenta períodos severos de estiagem. O bombeamento de água com geradores a diesel era financeiramente inviável para os pequenos produtores, comprometendo a sustentabilidade das safras e a segurança alimentar.',
      en: 'Guijá District experiences severe dry spells. Diesel-powered water pumping was economically unaffordable for local farmers, threatening crop yields and community food security.'
    },
    solution: {
      pt: 'Dimensionamento e montagem de 2 centrais solares de 5 kWp cada com estruturas de fixação anti-corrosivas, variadores de frequência solares (VFD) e bombas submersíveis dedicadas, automatizando a bombagem direta de água sob a luz do sol.',
      en: 'Design and installation of two 5 kWp solar arrays with corrosion-resistant structures, solar Variable Frequency Drives (VFD), and submersible pumps, automating direct solar water extraction during daylight hours.'
    },
    results: {
      pt: [
        'Irrigação farta e garantida todos os dias com custo zero de combustível.',
        'Aumento substancial da produtividade e diversificação das culturas dos dois produtores beneficiários.',
        'Sistema automatizado de fácil manuseamento com sensores de nível e proteção contra funcionamento a seco.',
        'Impacto direto na segurança alimentar e geração de renda nas comunidades de Guijá.'
      ],
      en: [
        'Abundant daily crop irrigation delivered at zero recurring fuel expense.',
        'Substantial increase in farm yield and crop diversification for the two beneficiary producers.',
        'Automated, user-friendly operation with water level sensors and dry-run pump safety.',
        'Direct positive impact on food security and rural income generation in Guijá communities.'
      ]
    },
    technicalSpecs: [
      {
        label: 'Potência Fotovoltaica',
        labelEn: 'Solar PV Capacity',
        value: '10 kWp total (2 sistemas independentes de 5 kWp)',
        valueEn: '10 kWp total (2 independent 5 kWp arrays)'
      },
      {
        label: 'Tecnologia de Bombeamento',
        labelEn: 'Pumping Technology',
        value: 'Controladores solares VFD com acionamento direto de bombas de água',
        valueEn: 'Solar VFD controllers with direct solar water pumping drive'
      },
      {
        label: 'Entidade Promotora',
        labelEn: 'Promoting Entity',
        value: 'FDC — Fundação para o Desenvolvimento Comunitário',
        valueEn: 'FDC — Fundação para o Desenvolvimento Comunitário'
      },
      {
        label: 'Localização',
        labelEn: 'Location',
        value: 'Distrito de Guijá, Província de Gaza',
        valueEn: 'Guijá District, Gaza Province'
      }
    ],
    gallery: [
      {
        src: '/lecasu/project-extra-2.jpeg',
        caption: 'Sistema de irrigação solar fotovoltaica instalado no Distrito de Guijá',
        captionEn: 'Solar PV irrigation system deployed in Guijá District'
      },
      {
        src: '/lecasu/service-eaas.jpeg',
        caption: 'Módulos solares e estrutura de fixação em campo agrícola',
        captionEn: 'Solar modules and mounting structure in agricultural field'
      },
      {
        src: '/lecasu/solar-site.jpeg',
        caption: 'Inspeção técnica e comissionamento do sistema de bombeamento de água',
        captionEn: 'Technical inspection and commissioning of the solar water pumping system'
      }
    ]
  },

  'quinta-namaacha': {
    id: 'quinta-namaacha',
    title: 'Quinta - Namaacha',
    tag: 'Solar Rural & Armazenamento BESS',
    tagEn: 'Rural Solar PV & Battery Storage',
    location: 'Namaacha, Província de Maputo, Moçambique',
    locationEn: 'Namaacha, Maputo Province, Mozambique',
    client: 'Cliente Privado / Quinta Familiar',
    year: '2025',
    category: 'Residencial & Agro-Rural',
    categoryEn: 'Residential & Agricultural',
    coverImage: '/lecasu/quinta-namaacha-solar-aerial-wide.jpg',
    stat1Value: '8 kWp',
    stat1Label: 'Potência Solar Fotovoltaica',
    stat1LabelEn: 'Solar PV Capacity',
    stat2Value: '15 kWh',
    stat2Label: 'Armazenamento em Baterias',
    stat2LabelEn: 'Lithium Battery Storage',
    stat3Value: '100%',
    stat3Label: 'Autonomia Energética',
    stat3LabelEn: 'Off-Grid Energy Autonomy',
    overview: {
      pt: 'Engenharia, fornecimento e instalação de sistema solar fotovoltaico isolado com armazenamento em baterias de lítio de alta densidade para propriedade rural (Quinta) na Namaacha, Província de Maputo. A solução garante autonomia energética total e ininterrupta para a habitação, bombagem de água e infraestruturas agrícolas.',
      en: 'Turnkey engineering, supply, and commissioning of an off-grid solar photovoltaic system with high-density lithium battery storage for a rural estate (Quinta) in Namaacha, Maputo Province. The solution provides complete, uninterrupted energy independence for residential consumption, water pumping, and agricultural operations.'
    },
    challenge: {
      pt: 'A localização campestre em zona de relevo acidentado e afastada dos centros urbanos sofria com ausência de rede elétrica estável, frequentes apagões e custos elevados de combustível para geradores a diesel.',
      en: 'The rural, high-elevation location away from urban distribution hubs suffered from lack of stable grid access, recurrent blackouts, and unsustainable fuel expenses for diesel generators.'
    },
    solution: {
      pt: 'Implementação de gerador fotovoltaico em cobertura de laje plana com 14 módulos solares monocristalinos de alta eficiência, inversor híbrido inteligente off-grid de onda senoidal pura e banco de baterias de lítio LiFePO4 de 15 kWh com monitorização e proteção integrada contra tempestades e variações climáticas da Namaacha.',
      en: 'Deployment of a rooftop solar array with 14 high-efficiency monocrystalline PV modules on a flat concrete slab, an off-grid pure sine wave smart hybrid inverter, and a 15 kWh LiFePO4 lithium battery bank with integrated environmental protection against Namaacha weather conditions.'
    },
    results: {
      pt: [
        'Independência energética a 100% com eletricidade limpa, estável e silenciosa 24 horas por dia.',
        'Eliminação do consumo de diesel e dos respetivos custos operacionais e ruído.',
        'Alimentação contínua de eletrodomésticos, refrigeração, iluminação perimétrica e bombeamento de água.',
        'Execução técnica de elevada robustez mecânica adaptada aos ventos e humidade característicos da região da Namaacha.'
      ],
      en: [
        '100% off-grid energy independence providing continuous, clean, silent power 24/7.',
        'Complete phase-out of diesel fuel purchases, generator noise, and recurring maintenance costs.',
        'Uninterrupted supply for domestic appliances, cold storage, security lighting, and water boreholes.',
        'Heavy-duty mechanical mounting and weather-proofing engineered for Namaacha high-wind conditions.'
      ]
    },
    technicalSpecs: [
      {
        label: 'Potência Solar Instalada',
        labelEn: 'Installed Solar PV Capacity',
        value: '8 kWp (14 módulos monocristalinos Tier-1 de alta eficiência)',
        valueEn: '8 kWp (14 Tier-1 high-efficiency monocrystalline modules)'
      },
      {
        label: 'Armazenamento de Energia (BESS)',
        labelEn: 'Energy Storage (BESS)',
        value: '15 kWh (Baterias de Lítio LiFePO4 de ciclo profundo e longa vida útil)',
        valueEn: '15 kWh (LiFePO4 deep-cycle long-life lithium battery bank)'
      },
      {
        label: 'Modo de Operação',
        labelEn: 'Operational Mode',
        value: 'Off-Grid Autónomo com inversor híbrido inteligente e gestão de cargas prioritárias',
        valueEn: 'Autonomous Off-Grid with smart hybrid inverter and priority load management'
      },
      {
        label: 'Localização Geográfica',
        labelEn: 'Location',
        value: 'Namaacha, Província de Maputo, Moçambique',
        valueEn: 'Namaacha, Maputo Province, Mozambique'
      }
    ],
    gallery: [
      {
        src: '/lecasu/quinta-namaacha-solar-aerial-wide.jpg',
        caption: 'Vista aérea panorâmica da Quinta na Namaacha com o sistema solar fotovoltaico de cobertura',
        captionEn: 'Panoramic aerial drone view of the Quinta in Namaacha with rooftop solar PV system'
      },
      {
        src: '/lecasu/quinta-namaacha-solar-topdown.jpg',
        caption: 'Vista aérea de topo: disposição e orientação técnica dos módulos solares fotovoltaicos',
        captionEn: 'Overhead top-down aerial view: technical layout and orientation of solar modules'
      },
      {
        src: '/lecasu/quinta-namaacha-solar-rooftop-detail.jpg',
        caption: 'Pormenor do arranjo fotovoltaico montado sobre a cobertura de laje plana',
        captionEn: 'Detail of the photovoltaic array mounted on the flat concrete rooftop slab'
      }
    ]
  }
};
