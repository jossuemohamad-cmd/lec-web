export type Lang = 'pt' | 'en';

export const DICTIONARY: Record<string, { pt: string; en: string }> = {
  // Navigation
  'Home': { pt: 'Início', en: 'Home' },
  'Início': { pt: 'Início', en: 'Home' },
  'About': { pt: 'Sobre Nós', en: 'About Us' },
  'About Us': { pt: 'Sobre Nós', en: 'About Us' },
  'Sobre': { pt: 'Sobre Nós', en: 'About Us' },
  'Sobre Nós': { pt: 'Sobre Nós', en: 'About Us' },
  'Service': { pt: 'Serviços', en: 'Services' },
  'Services': { pt: 'Serviços', en: 'Services' },
  'Serviço': { pt: 'Serviços', en: 'Services' },
  'Serviços': { pt: 'Serviços', en: 'Services' },
  'Project': { pt: 'Projetos', en: 'Projects' },
  'Projects': { pt: 'Projetos', en: 'Projects' },
  'Projeto': { pt: 'Projetos', en: 'Projects' },
  'Projetos': { pt: 'Projetos', en: 'Projects' },
  'Contact': { pt: 'Contacto', en: 'Contact' },
  'Contact Us': { pt: 'Contacte-nos', en: 'Contact Us' },
  'Contacto': { pt: 'Contacto', en: 'Contact' },
  'Contacte-nos': { pt: 'Contacte-nos', en: 'Contact Us' },
  'Pricing / Packages': { pt: 'Preços / Pacotes', en: 'Pricing / Packages' },
  'Preços / Pacotes': { pt: 'Preços / Pacotes', en: 'Pricing / Packages' },
  'FAQ': { pt: 'Perguntas Frequentes', en: 'FAQ' },
  'Perguntas Frequentes': { pt: 'Perguntas Frequentes', en: 'FAQ' },
  'Blog': { pt: 'Blog', en: 'Blog' },

  // Buttons & CTAs
  'Request a Proposal': { pt: 'Solicitar Proposta', en: 'Request a Proposal' },
  'Solicitar Proposta': { pt: 'Solicitar Proposta', en: 'Request a Proposal' },
  'View Projects': { pt: 'Ver Projetos', en: 'View Projects' },
  'Ver Projetos': { pt: 'Ver Projetos', en: 'View Projects' },
  'Learn More': { pt: 'Saber Mais', en: 'Learn More' },
  'Saber Mais': { pt: 'Saber Mais', en: 'Learn More' },
  'Fale Connosco': { pt: 'Fale Connosco', en: 'Contact Us' },
  'Read More': { pt: 'Ler Mais', en: 'Read More' },
  'Ler Mais': { pt: 'Ler Mais', en: 'Read More' },
  'Read Article': { pt: 'Ler Artigo', en: 'Read Article' },
  'Ler Artigo': { pt: 'Ler Artigo', en: 'Read Article' },
  'Send Message': { pt: 'Enviar Mensagem', en: 'Send Message' },
  'Enviar Mensagem': { pt: 'Enviar Mensagem', en: 'Send Message' },
  'Send Another Message': { pt: 'Enviar Outra Mensagem', en: 'Send Another Message' },
  'Enviar Outra Mensagem': { pt: 'Enviar Outra Mensagem', en: 'Send Another Message' },
  'Solar Simulator →': { pt: 'Simulador Solar →', en: 'Solar Simulator →' },
  'Simulador Solar →': { pt: 'Simulador Solar →', en: 'Solar Simulator →' },
  'Solar Simulator &rarr;': { pt: 'Simulador Solar &rarr;', en: 'Solar Simulator &rarr;' },

  // Hero Section
  'Energia que faz diferença': {
    pt: 'Energia que faz diferença',
    en: 'Energy that makes a difference'
  },
  'Energy that makes a difference': {
    pt: 'Energia que faz diferença',
    en: 'Energy that makes a difference'
  },
  'Acreditamos que a energia pode transformar vidas. Por isso, trabalhamos para levar soluções energéticas a empresas, famílias e comunidades, contribuindo para novas oportunidades e um futuro mais digno.': {
    pt: 'Acreditamos que a energia pode transformar vidas. Por isso, trabalhamos para levar soluções energéticas a empresas, famílias e comunidades, contribuindo para novas oportunidades e um futuro mais digno.',
    en: 'We believe energy can transform lives. That is why we work to bring energy solutions to businesses, families, and communities, contributing to new opportunities and a more dignified future.'
  },
  'We believe energy can transform lives. That is why we work to bring energy solutions to businesses, families, and communities, contributing to new opportunities and a more dignified future.': {
    pt: 'Acreditamos que a energia pode transformar vidas. Por isso, trabalhamos para levar soluções energéticas a empresas, famílias e comunidades, contribuindo para novas oportunidades e um futuro mais digno.',
    en: 'We believe energy can transform lives. That is why we work to bring energy solutions to businesses, families, and communities, contributing to new opportunities and a more dignified future.'
  },
  'Projects Delivered': { pt: 'Projetos Entregues', en: 'Projects Delivered' },
  'Projetos Entregues': { pt: 'Projetos Entregues', en: 'Projects Delivered' },
  'Hybrid & Off-Grid Specialists': { pt: 'Especialistas Híbridos & Off-Grid', en: 'Hybrid & Off-Grid Specialists' },
  'Especialistas Híbridos & Off-Grid': { pt: 'Especialistas Híbridos & Off-Grid', en: 'Hybrid & Off-Grid Specialists' },
  'Operations Across Mozambique': { pt: 'Operações em Moçambique', en: 'Operations Across Mozambique' },
  'Operações em Moçambique': { pt: 'Operações em Moçambique', en: 'Operations Across Mozambique' },

  // Quem Somos Section
  'Quem Somos': { pt: 'Quem Somos', en: 'About Us' },
  'Company Overview': { pt: 'Quem Somos', en: 'Company Overview' },
  'Somos uma empresa de engenharia que acredita no valor de fazer bem as coisas.': {
    pt: 'Somos uma empresa de engenharia que acredita no valor de fazer bem as coisas.',
    en: 'We are an engineering company that believes in the value of doing things right.'
  },
  'We are an engineering company that believes in the value of doing things right.': {
    pt: 'Somos uma empresa de engenharia que acredita no valor de fazer bem as coisas.',
    en: 'We are an engineering company that believes in the value of doing things right.'
  },
  'A LECASU é uma empresa moçambicana dedicada ao desenvolvimento de soluções de energia e engenharia eléctrica para clientes residenciais, comerciais, industriais e institucionais.': {
    pt: 'A LECASU é uma empresa moçambicana dedicada ao desenvolvimento de soluções de energia e engenharia eléctrica para clientes residenciais, comerciais, industriais e institucionais.',
    en: 'LECASU is a Mozambican company dedicated to the development of energy and electrical engineering solutions for residential, commercial, industrial and institutional clients.'
  },
  'Trabalhamos em cada projecto com um objectivo claro: compreender as necessidades do cliente e encontrar uma solução técnica que seja segura, viável e duradoura.': {
    pt: 'Trabalhamos em cada projecto com um objectivo claro: compreender as necessidades do cliente e encontrar uma solução técnica que seja segura, viável e duradoura.',
    en: 'We work on each project with a clear goal: to understand client needs and find a technical solution that is safe, viable, and durable.'
  },
  'A nossa actividade abrange estudos e projectos de engenharia, sistemas solares fotovoltaicos, soluções híbridas, instalações eléctricas, manutenção e assistência técnica.': {
    pt: 'A nossa actividade abrange estudos e projectos de engenharia, sistemas solares fotovoltaicos, soluções híbridas, instalações eléctricas, manutenção e assistência técnica.',
    en: 'Our activity spans engineering studies and designs, solar photovoltaic systems, hybrid solutions, electrical installations, maintenance, and technical assistance.'
  },
  'Acreditamos que um bom projecto não termina com a entrega dos equipamentos. É preciso acompanhar, resolver problemas e garantir que o investimento continua a produzir resultados.': {
    pt: 'Acreditamos que um bom projecto não termina com a entrega dos equipamentos. É preciso acompanhar, resolver problemas e garantir que o investimento continua a produzir resultados.',
    en: 'We believe a good project does not end with equipment delivery. It requires follow-through, problem-solving, and ensuring the investment continues producing results.'
  },
  'É assim que queremos construir a nossa história: um projecto, um cliente e uma relação de confiança de cada vez.': {
    pt: 'É assim que queremos construir a nossa história: um projecto, um cliente e uma relação de confiança de cada vez.',
    en: 'This is how we want to build our history: one project, one client, and one relationship of trust at a time.'
  },
  'Engenharia': { pt: 'Engenharia', en: 'Engineering' },
  'Solar & Híbrido': { pt: 'Solar & Híbrido', en: 'Solar & Hybrid' },

  // Soluções / What We Deliver Section
  'What We Deliver': { pt: 'O Que Oferecemos', en: 'What We Deliver' },
  'O Que Oferecemos': { pt: 'O Que Oferecemos', en: 'What We Deliver' },
  'Conceived for Africa: Engineered for Maximum Energy Reliability': {
    pt: 'Concebido para África: Engenharia para Máxima Confiabilidade Energética',
    en: 'Conceived for Africa: Engineered for Maximum Energy Reliability'
  },
  'Concebido para África: Engenharia para Máxima Confiabilidade Energética': {
    pt: 'Concebido para África: Engenharia para Máxima Confiabilidade Energética',
    en: 'Conceived for Africa: Engineered for Maximum Energy Reliability'
  },
  'Decarbonization requires balance between legacy systems and emerging technologies. Between the environment and business economies.': {
    pt: 'A descarbonização exige equilíbrio entre sistemas legados e tecnologias emergentes. Entre o meio ambiente e a economia empresarial.',
    en: 'Decarbonization requires balance between legacy systems and emerging technologies. Between the environment and business economies.'
  },
  'Residential Solar': { pt: 'Solar Residencial', en: 'Residential Solar' },
  'Solar Residencial': { pt: 'Solar Residencial', en: 'Residential Solar' },
  'Advanced solar arrays tailored for modern homeowners who prioritize sustainability and economic independence.': {
    pt: 'Sistemas solares avançados concebidos para residências modernas que priorizam sustentabilidade e independência económica.',
    en: 'Advanced solar arrays tailored for modern homeowners who prioritize sustainability and economic independence.'
  },
  'Commercial Solar': { pt: 'Energia Solar e Sistemas Híbridos', en: 'Solar Energy & Hybrid Systems' },
  'Energia Solar e Sistemas Híbridos': {
    pt: 'Energia Solar e Sistemas Híbridos',
    en: 'Solar Energy & Hybrid Systems'
  },
  'Solar Energy & Hybrid Systems': {
    pt: 'Energia Solar e Sistemas Híbridos',
    en: 'Solar Energy & Hybrid Systems'
  },
  'Ajudamos famílias e empresas a produzir e gerir a sua própria energia, com soluções solares e híbridas adaptadas às suas necessidades.': {
    pt: 'Ajudamos famílias e empresas a produzir e gerir a sua própria energia, com soluções solares e híbridas adaptadas às suas necessidades.',
    en: 'We help families and businesses produce and manage their own power, with solar and hybrid solutions tailored to their needs.'
  },
  'Para as empresas, procuramos transformar os custos de energia numa oportunidade de poupança, eficiência e maior competitividade.': {
    pt: 'Para as empresas, procuramos transformar os custos de energia numa oportunidade de poupança, eficiência e maior competitividade.',
    en: 'For businesses, we seek to transform energy expenses into an opportunity for savings, efficiency, and enhanced competitiveness.'
  },
  'O nosso objectivo é oferecer soluções que façam sentido, tanto do ponto de vista técnico como económico.': {
    pt: 'O nosso objectivo é oferecer soluções que façam sentido, tanto do ponto de vista técnico como económico.',
    en: 'Our goal is to deliver solutions that make sense, both from an engineering and an economic perspective.'
  },
  '03 — Financing': { pt: '03 — Financiamento', en: '03 — Financing' },
  '03 — Financiamento': { pt: '03 — Financiamento', en: '03 — Financing' },
  'Energy-as-a-Service (PPA)': { pt: 'Energia como Serviço (PPA)', en: 'Energy-as-a-Service (PPA)' },
  'Energia como Serviço (PPA)': { pt: 'Energia como Serviço (PPA)', en: 'Energy-as-a-Service (PPA)' },
  'No upfront capital investment required. Pay only for the clean kilowatt-hours you consume with guaranteed availability and covered maintenance.': {
    pt: 'Sem investimento inicial de capital. Pague apenas pelos quilowatts-hora limpos consumidos, com disponibilidade garantida e manutenção incluída.',
    en: 'No upfront capital investment required. Pay only for the clean kilowatt-hours you consume with guaranteed availability and covered maintenance.'
  },

  // Benefícios / Commercial & Industrial Section
  'Commercial & Industrial Solutions': {
    pt: 'Soluções Comerciais & Industriais',
    en: 'Commercial & Industrial Solutions'
  },
  'Soluções Comerciais & Industriais': {
    pt: 'Soluções Comerciais & Industriais',
    en: 'Commercial & Industrial Solutions'
  },
  'Cut diesel generator costs & ensure continuous operation': {
    pt: 'Reduza os custos com geradores a diesel e garanta operação contínua',
    en: 'Cut diesel generator costs & ensure continuous operation'
  },
  'Reduza os custos com geradores a diesel e garanta operação contínua': {
    pt: 'Reduza os custos com geradores a diesel e garanta operação contínua',
    en: 'Cut diesel generator costs & ensure continuous operation'
  },
  'Grid instability and surging fuel expenses directly reduce business profitability in Mozambique. LECASU engineers hybrid rooftop systems synchronised with your diesel generators.': {
    pt: 'A instabilidade da rede e os custos crescentes de combustível reduzem diretamente a rentabilidade das empresas em Moçambique. A LECASU projeta sistemas híbridos de cobertura sincronizados com geradores a diesel.',
    en: 'Grid instability and surging fuel expenses directly reduce business profitability in Mozambique. LECASU engineers hybrid rooftop systems synchronised with your diesel generators.'
  },
  'Generator Fuel Displacement:': {
    pt: 'Substituição de Combustível do Gerador:',
    en: 'Generator Fuel Displacement:'
  },
  'Reduce generator run-hours and cut monthly diesel consumption by up to 60-80% during daylight operating hours.': {
    pt: 'Reduza as horas de funcionamento dos geradores e diminua o consumo mensal de diesel em até 60-80% durante o dia.',
    en: 'Reduce generator run-hours and cut monthly diesel consumption by up to 60-80% during daylight operating hours.'
  },
  'Live Telemetry & Monitoring:': {
    pt: 'Telemetria & Monitorização em Tempo Real:',
    en: 'Live Telemetry & Monitoring:'
  },
  'Real-time digital supervision of production, load consumption, battery storage, and fuel savings via centralized dashboards.': {
    pt: 'Supervisão digital em tempo real da produção, consumo de cargas, armazenamento em baterias e poupança de combustível através de painéis centralizados.',
    en: 'Real-time digital supervision of production, load consumption, battery storage, and fuel savings via centralized dashboards.'
  },

  // Impacto Social Section
  'Social Impact & Remote Electrification': {
    pt: 'Impacto Social & Eletrificação Remota',
    en: 'Social Impact & Remote Electrification'
  },
  'Impacto Social & Eletrificação Remota': {
    pt: 'Impacto Social & Eletrificação Remota',
    en: 'Social Impact & Remote Electrification'
  },
  'Solar infrastructure for remote education and enterprise': {
    pt: 'Infraestrutura solar para educação remota e empreendedorismo',
    en: 'Solar infrastructure for remote education and enterprise'
  },
  'Infraestrutura solar para educação remota e empreendedorismo': {
    pt: 'Infraestrutura solar para educação remota e empreendedorismo',
    en: 'Solar infrastructure for remote education and enterprise'
  },
  'LECASU installed 11 standalone solar PV systems powering modular training cabins (INCUBOX 2) across Cabo Delgado, Nampula and Niassa. These systems provide uninterrupted power for computers, satellite connectivity, digital equipment, and lighting in remote areas, enabling youth entrepreneurship and community development without relying on the national grid.': {
    pt: 'A LECASU instalou 11 sistemas solares fotovoltaicos autónomos para alimentar cabines de formação modulares (INCUBOX 2) em Cabo Delgado, Nampula e Niassa. Estes sistemas garantem energia ininterrupta para computadores, conectividade via satélite, equipamentos digitais e iluminação em áreas remotas, capacitando o empreendedorismo jovem e o desenvolvimento comunitário sem depender da rede nacional.',
    en: 'LECASU installed 11 standalone solar PV systems powering modular training cabins (INCUBOX 2) across Cabo Delgado, Nampula and Niassa. These systems provide uninterrupted power for computers, satellite connectivity, digital equipment, and lighting in remote areas, enabling youth entrepreneurship and community development without relying on the national grid.'
  },

  // How It Works Section
  'How It Works': { pt: 'Como Funciona', en: 'How It Works' },
  'Como Funciona': { pt: 'Como Funciona', en: 'How It Works' },
  "From consultation to activation. Together, our customers are reshaping the region's energy footprint.": {
    pt: 'Da consulta à ativação. Juntos, os nossos clientes estão a transformar a matriz energética da região.',
    en: "From consultation to activation. Together, our customers are reshaping the region's energy footprint."
  },
  'Consultation': { pt: 'Consulta', en: 'Consultation' },
  'Expert evaluation of your energy needs and site potential.': {
    pt: 'Avaliação especializada das suas necessidades energéticas e potencial do local.',
    en: 'Expert evaluation of your energy needs and site potential.'
  },
  'Custom Design': { pt: 'Projeto Personalizado', en: 'Custom Design' },
  'Precision engineering blueprints tailored to your property.': {
    pt: 'Projetos de engenharia de precisão adaptados às características da sua propriedade.',
    en: 'Precision engineering blueprints tailored to your property.'
  },
  'Professional Install': { pt: 'Instalação Profissional', en: 'Professional Install' },
  'Rapid, clean deployment by our certified master technicians.': {
    pt: 'Execução rápida e de alta qualidade pelos nossos técnicos certificados.',
    en: 'Rapid, clean deployment by our certified master technicians.'
  },
  'Activation': { pt: 'Ativação', en: 'Activation' },
  'System testing, utility interconnection, and live monitoring.': {
    pt: 'Testes do sistema, ligação à rede e monitorização em tempo real.',
    en: 'System testing, utility interconnection, and live monitoring.'
  },

  // Porquê a LECASU Section
  'Porquê a LECASU': { pt: 'Porquê a LECASU', en: 'Why LECASU' },
  'Why LECASU': { pt: 'Porquê a LECASU', en: 'Why LECASU' },
  'Engenharia Confiável Feita Para África': {
    pt: 'Engenharia Confiável Feita Para África',
    en: 'Reliable Engineering Built for Africa'
  },
  'Reliable Engineering Built for Africa': {
    pt: 'Engenharia Confiável Feita Para África',
    en: 'Reliable Engineering Built for Africa'
  },
  'Combinamos capacidade técnica avançada, execução rápida e acompanhamento operacional contínuo para garantir estabilidade energética duradoura.': {
    pt: 'Combinamos capacidade técnica avançada, execução rápida e acompanhamento operacional contínuo para garantir estabilidade energética duradoura.',
    en: 'We combine advanced technical capacity, fast execution, and ongoing operational support to ensure lasting energy reliability.'
  },
  'African Expertise': { pt: 'Experiência Africana', en: 'African Expertise' },
  'Experiência Africana': { pt: 'Experiência Africana', en: 'African Expertise' },
  'Profundo conhecimento das normas elétricas de Moçambique, da rede da EDM e dos desafios climáticos locais de alta temperatura e poeira.': {
    pt: 'Profundo conhecimento das normas elétricas de Moçambique, da rede da EDM e dos desafios climáticos locais de alta temperatura e poeira.',
    en: 'Deep knowledge of Mozambican electrical standards, the EDM grid, and local climatic challenges of extreme heat and dust.'
  },
  'Hybrid Systems Capability': { pt: 'Capacidade em Sistemas Híbridos', en: 'Hybrid Systems Capability' },
  'Capacidade em Sistemas Híbridos': { pt: 'Capacidade em Sistemas Híbridos', en: 'Hybrid Systems Capability' },
  'Integração perfeita entre energia solar fotovoltaica, bancos de baterias e geradores a diesel, reduzindo combustível em até 60-80%.': {
    pt: 'Integração perfeita entre energia solar fotovoltaica, bancos de baterias e geradores a diesel, reduzindo combustível em até 60-80%.',
    en: 'Seamless integration between solar PV, battery banks, and diesel generators, reducing fuel consumption by up to 60-80%.'
  },
  'Fast Execution': { pt: 'Execução Rápida', en: 'Fast Execution' },
  'Execução Rápida': { pt: 'Execução Rápida', en: 'Fast Execution' },
  'Aprovisionamento direto com fabricantes Tier-1, equipas de montagem certificadas em Moçambique e comissionamento sem atrasos.': {
    pt: 'Aprovisionamento direto com fabricantes Tier-1, equipas de montagem certificadas em Moçambique e comissionamento sem atrasos.',
    en: 'Direct procurement from Tier-1 manufacturers, certified installation crews in Mozambique, and commissioning without delays.'
  },
  'Strong Engineering Team': { pt: 'Equipa de Engenharia Sólida', en: 'Strong Engineering Team' },
  'Equipa de Engenharia Sólida': { pt: 'Equipa de Engenharia Sólida', en: 'Strong Engineering Team' },
  'Engenheiros eletrotécnicos e técnicos de campo baseados em Maputo fornecendo monitorização SCADA e manutenção preventiva contínua.': {
    pt: 'Engenheiros eletrotécnicos e técnicos de campo baseados em Maputo fornecendo monitorização SCADA e manutenção preventiva contínua.',
    en: 'Electrical engineers and field technicians based in Maputo providing SCADA monitoring and ongoing preventive maintenance.'
  },

  // Main CTA Banner
  'Power your facility with reliable energy infrastructure': {
    pt: 'Alimente a sua instalação com infraestrutura energética fiável',
    en: 'Power your facility with reliable energy infrastructure'
  },
  'Alimente a sua instalação com infraestrutura energética fiável': {
    pt: 'Alimente a sua instalação com infraestrutura energética fiável',
    en: 'Power your facility with reliable energy infrastructure'
  },

  // Blog & Insights Section
  'Selected Case Studies & Insights': {
    pt: 'Casos de Estudo Selecionados & Artigos',
    en: 'Selected Case Studies & Insights'
  },
  'Casos de Estudo Selecionados & Artigos': {
    pt: 'Casos de Estudo Selecionados & Artigos',
    en: 'Selected Case Studies & Insights'
  },
  'Engineering Insights & Projects': {
    pt: 'Conhecimento de Engenharia & Projetos',
    en: 'Engineering Insights & Projects'
  },
  'Conhecimento de Engenharia & Projetos': {
    pt: 'Conhecimento de Engenharia & Projetos',
    en: 'Engineering Insights & Projects'
  },
  'Proven deployments, hybrid strategies, and technical milestones from Mozambique.': {
    pt: 'Implementações comprovadas, estratégias híbridas e marcos técnicos em Moçambique.',
    en: 'Proven deployments, hybrid strategies, and technical milestones from Mozambique.'
  },
  'Stay informed on the latest solar engineering trends, hybrid innovations, and clean energy developments across Africa.': {
    pt: 'Mantenha-se informado sobre as últimas tendências em engenharia solar, inovações híbridas e energia limpa em África.',
    en: 'Stay informed on the latest solar engineering trends, hybrid innovations, and clean energy developments across Africa.'
  },
  'SKM Engineering Maputo: 80 kWp Grid-Tied Solar with Generator Sync': {
    pt: 'SKM Engineering Maputo: 80 kWp Solar Conectado à Rede com Sincronismo de Geradores',
    en: 'SKM Engineering Maputo: 80 kWp Grid-Tied Solar with Generator Sync'
  },
  'Installation of an 80 kWp C&I system at an office/warehouse in Maputo, including advanced monitoring and diesel generator synchronisation.': {
    pt: 'Instalação de sistema C&I de 80 kWp em escritório/armazém em Maputo, incluindo monitorização avançada e sincronismo com geradores a diesel.',
    en: 'Installation of an 80 kWp C&I system at an office/warehouse in Maputo, including advanced monitoring and diesel generator synchronisation.'
  },
  'INCUBOX 2 (GAPI): 11 Solar PV Cabins in Northern Mozambique': {
    pt: 'INCUBOX 2 (GAPI): 11 Cabines Solares Fotovoltaicas no Norte de Moçambique',
    en: 'INCUBOX 2 (GAPI): 11 Solar PV Cabins in Northern Mozambique'
  },
  'INCUBOX 2 (GAPI): 11 Cabines Solares Fotovoltaicas no Norte de Moçambique': {
    pt: 'INCUBOX 2 (GAPI): 11 Cabines Solares Fotovoltaicas no Norte de Moçambique',
    en: 'INCUBOX 2 (GAPI): 11 Solar PV Cabins in Northern Mozambique'
  },
  'Implementation of 11 off-grid solar systems in Cabo Delgado, Nampula and Niassa, empowering youth modular training centers.': {
    pt: 'Implementação de 11 sistemas solares isolados da rede pública em Cabo Delgado, Nampula e Niassa, capacitando centros modulares de formação de jovens.',
    en: 'Implementation of 11 off-grid solar systems in Cabo Delgado, Nampula and Niassa, empowering youth modular training centers.'
  },
  'Implementação de 11 sistemas solares isolados da rede pública em Cabo Delgado, Nampula e Niassa, capacitando centros modulares de formação de jovens.': {
    pt: 'Implementação de 11 sistemas solares isolados da rede pública em Cabo Delgado, Nampula e Niassa, capacitando centros modulares de formação de jovens.',
    en: 'Implementation of 11 off-grid solar systems in Cabo Delgado, Nampula and Niassa, empowering youth modular training centers.'
  },
  'Energy-as-a-Service (PPA): Solar Energy with Zero Upfront Investment': {
    pt: 'Energy-as-a-Service (PPA): Energia Solar Sem Investimento Inicial',
    en: 'Energy-as-a-Service (PPA): Solar Energy with Zero Upfront Investment'
  },
  'Energy-as-a-Service (PPA): Energia Solar Sem Investimento Inicial': {
    pt: 'Energy-as-a-Service (PPA): Energia Solar Sem Investimento Inicial',
    en: 'Energy-as-a-Service (PPA): Solar Energy with Zero Upfront Investment'
  },
  'Discover how C&I enterprises in Mozambique cut operational energy costs with zero capital expenditure (Zero Capex) and complete O&M.': {
    pt: 'Descubra como empresas comerciais e industriais em Moçambique reduzem custos operacionais com zero despesa de capital (Zero Capex) e O&M integral.',
    en: 'Discover how C&I enterprises in Mozambique cut operational energy costs with zero capital expenditure (Zero Capex) and complete O&M.'
  },
  'Descubra como empresas comerciais e industriais em Moçambique reduzem custos operacionais com zero despesa de capital (Zero Capex) e O&M integral.': {
    pt: 'Descubra como empresas comerciais e industriais em Moçambique reduzem custos operacionais com zero despesa de capital (Zero Capex) e O&M integral.',
    en: 'Discover how C&I enterprises in Mozambique cut operational energy costs with zero capital expenditure (Zero Capex) and complete O&M.'
  },

  // Quote Modal System Types
  'EPC (Engineering, Procurement & Construction)': {
    pt: 'EPC (Engenharia, Aprovisionamento & Construção)',
    en: 'EPC (Engineering, Procurement & Construction)'
  },
  'Hybrid Systems (Solar + Battery + Diesel)': {
    pt: 'Sistemas Híbridos (Solar + Baterias + Diesel)',
    en: 'Hybrid Systems (Solar + Battery + Diesel)'
  },
  'Energy-as-a-Service (PPA — Zero Capex)': {
    pt: 'Energia como Serviço (PPA — Zero Capex)',
    en: 'Energy-as-a-Service (PPA — Zero Capex)'
  },
  'Commercial & Industrial (C&I) Rooftops': {
    pt: 'Coberturas Comerciais & Industriais (C&I)',
    en: 'Commercial & Industrial (C&I) Rooftops'
  },
  'Off-Grid & Rural Solar Micro-Grids': {
    pt: 'Microrredes Solares Rurais & Isoladas',
    en: 'Off-Grid & Rural Solar Micro-Grids'
  },
  'Operations & Maintenance (O&M)': {
    pt: 'Operações & Manutenção (O&M)',
    en: 'Operations & Maintenance (O&M)'
  },

  // Footer
  'LECASU delivers resilient solar and hybrid energy infrastructure engineered for African conditions. Turnkey EPC, C&I solar, microgrids, and 24/7 telemetry monitoring across Mozambique.': {
    pt: 'A LECASU fornece infraestrutura de energia solar e híbrida resiliente concebida para as condições africanas. EPC chave-na-mão, solar C&I, microrredes e monitorização telemétrica 24/7 em Moçambique.',
    en: 'LECASU delivers resilient solar and hybrid energy infrastructure engineered for African conditions. Turnkey EPC, C&I solar, microgrids, and 24/7 telemetry monitoring across Mozambique.'
  },
  'Contact Info': { pt: 'Informações de Contacto', en: 'Contact Info' },
  'Informações de Contacto': { pt: 'Informações de Contacto', en: 'Contact Info' },
  'Quick Links': { pt: 'Links Rápidos', en: 'Quick Links' },
  'Links Rápidos': { pt: 'Links Rápidos', en: 'Quick Links' },
  'Working Hours': { pt: 'Horário de Funcionamento', en: 'Working Hours' },
  'Horário de Funcionamento': { pt: 'Horário de Funcionamento', en: 'Working Hours' },
  'Mon – Fri': { pt: 'Seg – Sex', en: 'Mon – Fri' },
  'Sat – Sun': { pt: 'Sáb – Dom', en: 'Sat – Sun' },
  'Closed': { pt: 'Encerrado', en: 'Closed' },
  'Encerrado': { pt: 'Encerrado', en: 'Closed' },
  'Engineered for African energy growth. All Rights Reserved.': {
    pt: 'Desenvolvido para o crescimento energético de África. Todos os direitos reservados.',
    en: 'Engineered for African energy growth. All Rights Reserved.'
  },
  'Terms and Conditions': { pt: 'Termos e Condições', en: 'Terms and Conditions' },
  'Termos e Condições': { pt: 'Termos e Condições', en: 'Terms and Conditions' },
  'Privacy Policy': { pt: 'Política de Privacidade', en: 'Privacy Policy' },
  'Política de Privacidade': { pt: 'Política de Privacidade', en: 'Privacy Policy' },

  // Quote Modal
  'Fast & Free': { pt: 'Rápido & Gratuito', en: 'Fast & Free' },
  'Request a Project Proposal': { pt: 'Solicitar Proposta de Projeto', en: 'Request a Project Proposal' },
  'Our engineers will calculate your custom savings in less than 24 hours.': {
    pt: 'Os nossos engenheiros calcularão as suas poupanças personalizadas em menos de 24 horas.',
    en: 'Our engineers will calculate your custom savings in less than 24 hours.'
  },
  'Full Name': { pt: 'Nome Completo', en: 'Full Name' },
  'Nome Completo': { pt: 'Nome Completo', en: 'Full Name' },
  'Email Address': { pt: 'Endereço de Email', en: 'Email Address' },
  'Endereço de Email': { pt: 'Endereço de Email', en: 'Email Address' },
  'Phone Number': { pt: 'Número de Telefone', en: 'Phone Number' },
  'Número de Telefone': { pt: 'Número de Telefone', en: 'Phone Number' },
  'System Type': { pt: 'Tipo de Sistema', en: 'System Type' },
  'Tipo de Sistema': { pt: 'Tipo de Sistema', en: 'System Type' },
  'Submit Request': { pt: 'Enviar Pedido', en: 'Submit Request' },
  'Enviar Pedido': { pt: 'Enviar Pedido', en: 'Submit Request' },

  // About Page Specifics
  'Our Value': { pt: 'O Nosso Valor', en: 'Our Value' },
  'O Nosso Valor': { pt: 'O Nosso Valor', en: 'Our Value' },
  'Aligning technology with business strategy.': {
    pt: 'Alinhar tecnologia com estratégia de negócio.',
    en: 'Aligning technology with business strategy.'
  },
  "LECASU was founded to bridge Africa's energy deficit through robust engineering. We design systems that withstand demanding climates, grid volatility, and remote terrain, providing long-term reliability for enterprises and communities.": {
    pt: 'A LECASU foi fundada para superar o défice energético em África através de engenharia robusta. Projetamos sistemas que resistem a climas exigentes, volatilidade da rede e terrenos remotos, proporcionando confiabilidade duradoura para empresas e comunidades.',
    en: "LECASU was founded to bridge Africa's energy deficit through robust engineering. We design systems that withstand demanding climates, grid volatility, and remote terrain, providing long-term reliability for enterprises and communities."
  },
  'Become a leading energy infrastructure company in Africa, powering sustainable industrialization and community resilience.': {
    pt: 'Tornar-se uma empresa líder em infraestrutura de energia em África, impulsionando a industrialização sustentável e a resiliência comunitária.',
    en: 'Become a leading energy infrastructure company in Africa, powering sustainable industrialization and community resilience.'
  },
  'Deliver reliable and sustainable energy solutions tailored for African conditions through one accountable engineering partner.': {
    pt: 'Entregar soluções de energia confiáveis e sustentáveis adaptadas às condições africanas através de um parceiro de engenharia responsável.',
    en: 'Deliver reliable and sustainable energy solutions tailored for African conditions through one accountable engineering partner.'
  },
  'Engineering Excellence, Reliability & Performance, Innovation, and Uncompromising Commitment to Africa.': {
    pt: 'Excelência em Engenharia, Confiabilidade & Desempenho, Inovação e Compromisso Inabalável com África.',
    en: 'Engineering Excellence, Reliability & Performance, Innovation, and Uncompromising Commitment to Africa.'
  },
  'Operations in Mozambique': { pt: 'Operações em Moçambique', en: 'Operations in Mozambique' },
  'Active operations and deployed infrastructure in Maputo, Cabo Delgado, Nampula, and Niassa provinces.': {
    pt: 'Operações ativas e infraestruturas implementadas nas províncias de Maputo, Cabo Delgado, Nampula e Niassa.',
    en: 'Active operations and deployed infrastructure in Maputo, Cabo Delgado, Nampula, and Niassa provinces.'
  },
  'Engineering Rigor': { pt: 'Rigor de Engenharia', en: 'Engineering Rigor' },
  'Full single-line design, protective relays, live telemetry, and proactive preventative maintenance.': {
    pt: 'Projetos unifilares completos, relés de proteção, telemetria em tempo real e manutenção preventiva contínua.',
    en: 'Full single-line design, protective relays, live telemetry, and proactive preventative maintenance.'
  },
  'Completed turnkey C&I installations, off-grid systems, and hybrid micro-grids across Mozambique.': {
    pt: 'Instalações C&I chave-na-mão concluídas, sistemas off-grid e microrredes híbridas em Moçambique.',
    en: 'Completed turnkey C&I installations, off-grid systems, and hybrid micro-grids across Mozambique.'
  },
  'Dedicated engineering team specialized in solar PV, battery storage, and diesel generator synchronisation.': {
    pt: 'Equipa de engenharia dedicada e especializada em solar FV, armazenamento em baterias e sincronismo com geradores.',
    en: 'Dedicated engineering team specialized in solar PV, battery storage, and diesel generator synchronisation.'
  },
  'Specialists in C&I solar projects, microgrids and hybrid systems in Mozambique.': {
    pt: 'Especialistas em projetos solares C&I, microrredes e sistemas híbridos em Moçambique.',
    en: 'Specialists in C&I solar projects, microgrids and hybrid systems in Mozambique.'
  },
  'Especialistas em projetos solares C&I, microrredes e sistemas híbridos em Moçambique.': {
    pt: 'Especialistas em projetos solares C&I, microrredes e sistemas híbridos em Moçambique.',
    en: 'Specialists in C&I solar projects, microgrids and hybrid systems in Mozambique.'
  },
  'Fornecer soluções energéticas confiáveis, sustentáveis e eficientes, concebidas com rigor de engenharia para impulsionar o crescimento de África.': {
    pt: 'Fornecer soluções energéticas confiáveis, sustentáveis e eficientes, concebidas com rigor de engenharia para impulsionar o crescimento de África.',
    en: 'Provide reliable, sustainable, and efficient energy solutions, engineered with rigor to power Africa’s growth.'
  },
  'Tornar-se uma empresa líder em infraestrutura energética em África, sendo a parceira de referência para a transição energética sustentável.': {
    pt: 'Tornar-se uma empresa líder em infraestrutura energética em África, sendo a parceira de referência para a transição energética sustentável.',
    en: 'Become a leading energy infrastructure company in Africa, serving as the benchmark partner for sustainable energy transition.'
  },
  'Excelência em Engenharia, Confiabilidade & Desempenho, Inovação Prática e Compromisso Inabalável com o Desenvolvimento de África.': {
    pt: 'Excelência em Engenharia, Confiabilidade & Desempenho, Inovação Prática e Compromisso Inabalável com o Desenvolvimento de África.',
    en: 'Engineering Excellence, Reliability & Performance, Practical Innovation, and Uncompromising Commitment to Africa’s Development.'
  },
  'A Nossa Visão, Missão e Valores': { pt: 'A Nossa Visão, Missão e Valores', en: 'Our Vision, Mission & Values' },
  'Missão': { pt: 'Missão', en: 'Mission' },
  'Visão': { pt: 'Visão', en: 'Vision' },
  'Valores': { pt: 'Valores', en: 'Values' },
  'Engenharia e Compromisso': { pt: 'Engenharia e Compromisso', en: 'Engineering & Commitment' },
  'Equipa de Engenharia LECASU': { pt: 'Equipa de Engenharia LECASU', en: 'LECASU Engineering Team' },
  'The LECASU 4-Step Process': { pt: 'O Processo em 4 Passos da LECASU', en: 'The LECASU 4-Step Process' },
  'Our seamless transition to clean energy, delivering robust and certified energy infrastructure across Mozambique.': {
    pt: 'A nossa transição para energia limpa, fornecendo infraestrutura energética robusta e certificada em Moçambique.',
    en: 'Our seamless transition to clean energy, delivering robust and certified energy infrastructure across Mozambique.'
  },
  'Proven Deployments Across Mozambique': { pt: 'Implementações Comprovadas em Moçambique', en: 'Proven Deployments Across Mozambique' },
  'Watch how our sustainable energy installations transform homes, businesses, and rural districts with dependable zero-carbon electricity.': {
    pt: 'Veja como as nossas instalações de energia transformam residências, empresas e distritos rurais com eletricidade confiável.',
    en: 'Watch how our sustainable energy installations transform homes, businesses, and rural districts with dependable zero-carbon electricity.'
  },
  'Have a specific question?': { pt: 'Tem uma pergunta específica?', en: 'Have a specific question?' },
  'Need help with something? Our engineering team is here to assist you every step of the way. Don’t hesitate to reach out.': {
    pt: 'Precisa de ajuda? A nossa equipa de engenharia está aqui para ajudar em cada etapa. Não hesite em contactar.',
    en: 'Need help with something? Our engineering team is here to assist you every step of the way. Don’t hesitate to reach out.'
  },
  'Monthly': { pt: 'Mensal', en: 'Monthly' },
  'Yearly': { pt: 'Anual', en: 'Yearly' },
  'Choose Plan': { pt: 'Escolher Plano', en: 'Choose Plan' },
  'Contact Sales': { pt: 'Falar com Vendas', en: 'Contact Sales' },

  // Service Page Specifics
  'Our Services': { pt: 'Os Nossos Serviços', en: 'Our Services' },
  'Os Nossos Serviços': { pt: 'Os Nossos Serviços', en: 'Our Services' },
  'Conceived for Africa: Reliable Energy Infrastructure': {
    pt: 'Concebido para África: Infraestrutura Energética Fiável',
    en: 'Conceived for Africa: Reliable Energy Infrastructure'
  },
  'From first assessment to long-term operation, we deliver resilient energy infrastructure through one accountable engineering partner across Mozambique.': {
    pt: 'Desde a avaliação inicial até à operação a longo prazo, fornecemos infraestrutura energética resiliente através de um único parceiro de engenharia em Moçambique.',
    en: 'From first assessment to long-term operation, we deliver resilient energy infrastructure through one accountable engineering partner across Mozambique.'
  },
  'EPC — Engineering, Procurement & Construction': {
    pt: 'EPC — Engenharia, Aprovisionamento & Construção',
    en: 'EPC — Engineering, Procurement & Construction'
  },
  'Turnkey solar delivery: engineering design, Tier-1 equipment procurement, certified construction, and grid/generator commissioning.': {
    pt: 'Fornecimento solar chave-na-mão: estudos de engenharia, aquisição de equipamentos Tier-1, construção certificada e comissionamento de ligação à rede/gerador.',
    en: 'Turnkey solar delivery: engineering design, Tier-1 equipment procurement, certified construction, and grid/generator commissioning.'
  },
  'Zero upfront capital investment. Pay only for the clean kilowatt-hours you consume with guaranteed availability and covered maintenance.': {
    pt: 'Sem investimento inicial de capital. Pague apenas pelos quilowatts-hora limpos consumidos, com disponibilidade garantida e manutenção incluída.',
    en: 'Zero upfront capital investment. Pay only for the clean kilowatt-hours you consume with guaranteed availability and covered maintenance.'
  },
  'Proactive solar panel cleaning, thermal imaging inspections, SCADA telemetry monitoring, inverter diagnostics, and regular reporting.': {
    pt: 'Limpeza proativa de painéis solares, inspeções termográficas, monitorização telemétrica SCADA, diagnósticos de inversores e relatórios regulares.',
    en: 'Proactive solar panel cleaning, thermal imaging inspections, SCADA telemetry monitoring, inverter diagnostics, and regular reporting.'
  },
  'High-yield rooftop solar arrays for factories, warehouses, logistics centers, and office headquarters across Mozambique.': {
    pt: 'Sistemas solares de alta rentabilidade em coberturas de fábricas, armazéns, centros logísticos e escritórios em Moçambique.',
    en: 'High-yield rooftop solar arrays for factories, warehouses, logistics centers, and office headquarters across Mozambique.'
  },
  'Off-Grid & Rural Electrification': {
    pt: 'Eletrificação Rural & Off-Grid',
    en: 'Off-Grid & Rural Electrification'
  },
  'Independent micro-grids and modular solar units (like INCUBOX 2) powering education hubs, remote clinics, and agricultural enterprises.': {
    pt: 'Microrredes autónomas e unidades solares modulares (como o INCUBOX 2) para centros de formação, clínicas remotas e agroindústrias.',
    en: 'Independent micro-grids and modular solar units (like INCUBOX 2) powering education hubs, remote clinics, and agricultural enterprises.'
  },
  'Free Site Analysis': { pt: 'Análise Gratuita do Local', en: 'Free Site Analysis' },
  'Custom 3D Engineering': { pt: 'Engenharia 3D Personalizada', en: 'Custom 3D Engineering' },
  'Flawless Installation': { pt: 'Instalação de Rigor', en: 'Flawless Installation' },
  'Grid Activation': { pt: 'Ligação à Rede & Ativação', en: 'Grid Activation' },
  'We handle the utility company grid connection and activate.': {
    pt: 'Gerimos o processo de ligação à rede com a concessionária e ativamos o sistema.',
    en: 'We handle the utility company grid connection and activate.'
  },
  'Commercial Solar PV (SKM Engineering)': {
    pt: 'Solar Fotovoltaico Comercial (SKM Engineering)',
    en: 'Commercial Solar PV (SKM Engineering)'
  },
  'Off-Grid Modular Systems (INCUBOX 2)': {
    pt: 'Sistemas Modulares Off-Grid (INCUBOX 2)',
    en: 'Off-Grid Modular Systems (INCUBOX 2)'
  },
  'Industrial Rooftop PV Installation': {
    pt: 'Instalação Solar em Cobertura Industrial',
    en: 'Industrial Rooftop PV Installation'
  },

  // Contact Page Specifics
  "Let's turn your vision into reality": {
    pt: 'Vamos transformar a sua visão em realidade',
    en: "Let's turn your vision into reality"
  },
  'Let’s build something meaningful together by combining creativity, strategy, and innovation to create impactful clean energy solutions that drive growth, strengthen homes, and deliver lasting value.': {
    pt: 'Vamos construir algo com impacto combinando criatividade, estratégia e inovação para criar soluções de energia limpa que impulsionam o crescimento, fortalecem lares e geram valor duradouro.',
    en: 'Let’s build something meaningful together by combining creativity, strategy, and innovation to create impactful clean energy solutions that drive growth, strengthen homes, and deliver lasting value.'
  },
  'Our Address': { pt: 'O Nosso Endereço', en: 'Our Address' },
  'Get In Touch': { pt: 'Entre em Contacto', en: 'Get In Touch' },
  'Thank You!': { pt: 'Obrigado!', en: 'Thank You!' },
  'Your inquiry has been received. Our renewable energy team will get back to you within 24 hours.': {
    pt: 'O seu pedido foi recebido com sucesso. A nossa equipa entrará em contacto consigo no prazo de 24 horas.',
    en: 'Your inquiry has been received. Our renewable energy team will get back to you within 24 hours.'
  },
  'Your Full Name *': { pt: 'O Seu Nome Completo *', en: 'Your Full Name *' },
  'Enter your name': { pt: 'Introduza o seu nome', en: 'Enter your name' },
  'Email Address *': { pt: 'Endereço de Email *', en: 'Email Address *' },
  'Your Phone': { pt: 'O Seu Telefone', en: 'Your Phone' },
  'Service Type': { pt: 'Tipo de Serviço', en: 'Service Type' },
  'Select inquiry type...': { pt: 'Selecione o tipo de pedido...', en: 'Select inquiry type...' },
  'Residential Solar Solutions': { pt: 'Soluções Solares Residenciais', en: 'Residential Solar Solutions' },
  'Commercial Solar Arrays': { pt: 'Sistemas Solares Comerciais', en: 'Commercial Solar Arrays' },
  'Battery Energy Storage': { pt: 'Armazenamento de Energia em Baterias', en: 'Battery Energy Storage' },
  'EV Charging Infrastructure': { pt: 'Infraestrutura de Carregamento VE', en: 'EV Charging Infrastructure' },
  'Maintenance & Inspection': { pt: 'Manutenção & Inspeção', en: 'Maintenance & Inspection' },
  'Message': { pt: 'Mensagem', en: 'Message' },
  'Tell us about your roof, current energy consumption, or goals...': {
    pt: 'Conte-nos sobre o seu telhado, consumo atual de energia ou objetivos...',
    en: 'Tell us about your roof, current energy consumption, or goals...'
  },
  'Our Headquarters in Matola-Rio': { pt: 'A Nossa Sede em Matola-Rio', en: 'Our Headquarters in Matola-Rio' },
  'Visit our headquarters and regional energy technology laboratories at Rua da Mozal, Matola-Rio, 1115 to consult directly with certified engineers and discover cutting-edge photovoltaic hardware.': {
    pt: 'Visite a nossa sede e laboratórios de tecnologia energética na Rua da Mozal, Matola-Rio, 1115 para consultar diretamente os nossos engenheiros certificados e conhecer equipamentos fotovoltaicos de ponta.',
    en: 'Visit our headquarters and regional energy technology laboratories at Rua da Mozal, Matola-Rio, 1115 to consult directly with certified engineers and discover cutting-edge photovoltaic hardware.'
  },

  // Packages Page Specifics
  'Pricing': { pt: 'Preços', en: 'Pricing' },
  'Pricing Plans': { pt: 'Planos & Pacotes', en: 'Pricing Plans' },
  'Commercial & Enterprise Solutions': { pt: 'Soluções Comerciais & Empresariais', en: 'Commercial & Enterprise Solutions' },
  'Choose the level of support you need — whether you want everything handled for you or prefer a more hands-on approach.': {
    pt: 'Escolha o nível de apoio ideal — desde soluções chave-na-mão integrais a configurações personalizadas para o seu negócio.',
    en: 'Choose the level of support you need — whether you want everything handled for you or prefer a more hands-on approach.'
  },
  'GET ESTIMATE': { pt: 'SOLICITAR ESTIMATIVA', en: 'GET ESTIMATE' },
  'REQUEST QUOTE': { pt: 'SOLICITAR PROPOSTA', en: 'REQUEST QUOTE' },
  'CONTACT US': { pt: 'CONTACTE-NOS', en: 'CONTACT US' },
  'Starter Plan': { pt: 'Plano Inicial', en: 'Starter Plan' },
  'Recommended Plan': { pt: 'Plano Recomendado', en: 'Recommended Plan' },
  'Premium Plan': { pt: 'Plano Premium', en: 'Premium Plan' },
  'Up to 4.5 kW System': { pt: 'Sistema até 4.5 kW', en: 'Up to 4.5 kW System' },
  'Up to 8.5 kW System': { pt: 'Sistema até 8.5 kW', en: 'Up to 8.5 kW System' },
  '12+ kW Scalable System + Battery': { pt: 'Sistema Escalável 12+ kW + Baterias', en: '12+ kW Scalable System + Battery' },
  'Flexible Monthly Financing': { pt: 'Financiamento Mensal Flexível', en: 'Flexible Monthly Financing' },
  'Most Popular Choice for Homeowners': { pt: 'Opção Mais Popular', en: 'Most Popular Choice for Homeowners' },
  'Complete Energy Security Setup': { pt: 'Solução Completa de Segurança Energética', en: 'Complete Energy Security Setup' },
  'Billed Annually (Save 25%)': { pt: 'Faturado Anualmente (Poupe 25%)', en: 'Billed Annually (Save 25%)' },
  'Save 25%': { pt: 'Poupe 25%', en: 'Save 25%' },

  // Vision, Mission & Motto
  'Our Vision': { pt: 'A Nossa Visão', en: 'Our Vision' },
  'Our Mission': { pt: 'A Nossa Missão', en: 'Our Mission' },
  'Our Motto': { pt: 'O Nosso Lema', en: 'Our Motto' },
  'A Nossa Visão': { pt: 'A Nossa Visão', en: 'Our Vision' },
  'A Nossa Missão': { pt: 'A Nossa Missão', en: 'Our Mission' },
  'O Nosso Lema': { pt: 'O Nosso Lema', en: 'Our Motto' },

  // Footer & Specifics
  '. All Rights Reserved.': {
    pt: '. Todos os direitos reservados.',
    en: '. All Rights Reserved.'
  },
  'All Rights Reserved.': {
    pt: 'Todos os direitos reservados.',
    en: 'All Rights Reserved.'
  },
  'All Rights Reserved': {
    pt: 'Todos os direitos reservados.',
    en: 'All Rights Reserved'
  },
  'Turnkey engineering, tier-1 solar hardware, and proactive O&M. Powering businesses, industries, and rural communities across Mozambique.': {
    pt: 'Engenharia chave-na-mão, tecnologia solar Tier-1 e O&M proativo. Levando energia a empresas, indústrias e comunidades em Moçambique.',
    en: 'Turnkey engineering, tier-1 solar hardware, and proactive O&M. Powering businesses, industries, and rural communities across Mozambique.'
  },
  '. Engineered for African energy growth. All Rights Reserved.': {
    pt: '. Todos os direitos reservados.',
    en: '. All Rights Reserved.'
  },
  'Projects powering real places in Mozambique.': {
    pt: 'Projetos que levam energia a locais reais em Moçambique.',
    en: 'Projects powering real places in Mozambique.'
  },
  'LECASU Engineering': {
    pt: 'Engenharia LECASU',
    en: 'LECASU Engineering'
  },
  'Engenharia LECASU': {
    pt: 'Engenharia LECASU',
    en: 'LECASU Engineering'
  },

  // FAQ Page Specifics
  'Frequently Asked Questions': { pt: 'Perguntas Frequentes', en: 'Frequently Asked Questions' },
  'Everything you need to know about our solar engineering, installation process, and energy solutions in Mozambique.': {
    pt: 'Tudo o que precisa de saber sobre engenharia solar, processos de instalação e soluções de energia em Moçambique.',
    en: 'Everything you need to know about our solar engineering, installation process, and energy solutions in Mozambique.'
  },
  'General Inquiries': { pt: 'Perguntas Gerais', en: 'General Inquiries' },
  'Technical & Installation': { pt: 'Técnica & Instalação', en: 'Technical & Installation' },
  'Finance & Guarantees': { pt: 'Financiamento & Garantias', en: 'Finance & Guarantees' },
  'Explore our featured installations across our international network, highlighting how our seamless technology delivers reliable power.': {
    pt: 'Explore as nossas instalações de referência em Moçambique, demonstrando como a nossa tecnologia de engenharia entrega energia confiável.',
    en: 'Explore our featured installations across our international network, highlighting how our seamless technology delivers reliable power.'
  }
};

export function t(key: string, lang: Lang): string {
  if (!key) return '';
  const trimmed = key.trim().replace(/\s+/g, ' ');
  const entry = DICTIONARY[trimmed] || DICTIONARY[key];
  if (entry) {
    return entry[lang] || key;
  }
  return key;
}
