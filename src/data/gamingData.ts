import { ConsoleItem, GameItem, AccessoryItem } from '../types';

export const CONSOLES_DATA: ConsoleItem[] = [
  {
    id: 'ps5-pro',
    name: 'PlayStation 5 Pro',
    tagline: 'O ápice dos jogos em 4K a 60FPS com Ray Tracing avançado e PSSR',
    price: 6999,
    installments: '10x de R$ 699,90 sem juros',
    generation: 'PS5',
    edition: 'Pro Edition',
    highlightBadge: 'Mais Poderoso do Mundo',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=80',
    features: [
      'PlayStation Spectral Super Resolution (PSSR) orientada por IA',
      'GPU aprimorada com 67% mais unidades de computação',
      'Ray Tracing avançado até 3x mais veloz',
      'Armazenamento SSD ultrarrápido de 2TB',
      'Suporte para telas de 8K e taxas de 120Hz com VRR'
    ],
    specs: {
      resolution: 'Até 4K Nativo / 8K com PSSR',
      targetFps: 'Até 120 FPS c/ VRR',
      storage: '2 TB SSD Integrado',
      storageType: 'Custom NVMe PCIe Gen4 (5.5 GB/s)',
      rayTracing: 'Ray Tracing Avançado de 3ª Geração',
      audio: 'Tempest 3D AudioTech',
      discDrive: 'Opcional / Removível',
      backwardCompatibility: 'Mais de 8.500 jogos de PS4 com Game Boost',
      weight: '3.1 kg'
    },
    colors: ['Branco Neve com Preto Obsidian']
  },
  {
    id: 'ps5-slim-disc',
    name: 'PlayStation 5 (PS5)',
    tagline: 'A experiência completa de nova geração com SSD ultrarrápido e gráficos em 4K',
    price: 2500,
    installments: '10x de R$ 250,00 sem juros',
    generation: 'PS5',
    edition: 'Standard Edition',
    highlightBadge: 'Mais Vendido',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Leitor de disco Ultra HD Blu-ray 4K integrado',
      'Gatilhos adaptáveis e resposta tátil com DualSense',
      'Armazenamento SSD interno de 1TB de alta velocidade',
      'Tempest 3D AudioTech imersivo',
      'Design modular com tampas removíveis intercambiáveis'
    ],
    specs: {
      resolution: '4K Ultra HD HDR',
      targetFps: 'Até 120 FPS',
      storage: '1 TB SSD',
      storageType: 'Custom NVMe PCIe Gen4 (5.5 GB/s)',
      rayTracing: 'Aceleração por Hardware dedicada',
      audio: 'Tempest 3D AudioTech',
      discDrive: 'Incluso',
      backwardCompatibility: 'Compatível com 99% da biblioteca do PS4',
      weight: '3.2 kg'
    },
    colors: ['Branco Clássico', 'Midnight Black', 'Volcanic Red']
  },
  {
    id: 'ps5-slim-digital',
    name: 'PlayStation 5 Slim Digital',
    tagline: 'Mergulhe direto no universo digital sem perder nenhum detalhe de performance',
    price: 2500,
    installments: '10x de R$ 250,00 sem juros',
    generation: 'PS5',
    edition: 'All-Digital Edition',
    highlightBadge: 'Melhor Custo Next-Gen',
    image: 'https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?auto=format&fit=crop&w=1000&q=80',
    features: [
      '100% digital com suporte para acoplar leitor físico depois',
      'Mesmo desempenho gráfico e SSD de 1TB da versão com disco',
      'Acesso instantâneo a milhares de jogos na PlayStation Store',
      'Design minimalista e mais leve',
      'Perfeito para assinantes do PlayStation Plus'
    ],
    specs: {
      resolution: '4K Ultra HD HDR',
      targetFps: 'Até 120 FPS',
      storage: '1 TB SSD',
      storageType: 'Custom NVMe PCIe Gen4 (5.5 GB/s)',
      rayTracing: 'Aceleração por Hardware dedicada',
      audio: 'Tempest 3D AudioTech',
      discDrive: 'Sem leitor (Digital)',
      backwardCompatibility: 'Compatível com biblioteca digital do PS4',
      weight: '2.6 kg'
    },
    colors: ['Branco Clássico']
  },
  {
    id: 'ps4-slim',
    name: 'PlayStation 4 (PS4)',
    tagline: 'O console clássico mais amado do mundo com mais de 4.000 títulos disponíveis',
    price: 1400,
    installments: '10x de R$ 140,00 sem juros',
    generation: 'PS4',
    edition: 'Slim 1TB',
    highlightBadge: 'Excelente Entrada',
    image: 'https://images.unsplash.com/photo-1507457379470-08b800bebc67?auto=format&fit=crop&w=1000&q=80',
    features: [
      'Acesso a uma biblioteca monumental de obras-primas',
      'Compatível com fones e acessórios da geração PlayStation',
      'Consumo energético reduzido e operação silenciosa',
      'Controle DualShock 4 ergonômico consagrado',
      'Suporte a streaming via Netflix, YouTube, Twitch e mais'
    ],
    specs: {
      resolution: '1080p Full HD com HDR',
      targetFps: '30 a 60 FPS',
      storage: '1 TB HDD',
      storageType: 'SATA HDD 2.5 polegadas',
      rayTracing: 'Não suportado',
      audio: 'Áudio Estéreo / 5.1 / 7.1 Virtual',
      discDrive: 'Leitor Blu-ray 1080p',
      backwardCompatibility: 'Biblioteca nativa PS4',
      weight: '2.1 kg'
    },
    colors: ['Jet Black']
  }
];

export const GAMES_DATA: GameItem[] = [
  {
    id: 'spiderman-2',
    title: "Marvel's Spider-Man 2",
    developer: 'Insomniac Games',
    publisher: 'PlayStation Studios',
    platforms: ['PS5'],
    price: 299.9,
    originalPrice: 349.9,
    rating: 4.9,
    metascore: 90,
    genre: 'Ação / Aventura',
    releaseYear: 2023,
    image: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1400&q=80',
    description: 'Peter Parker e Miles Morales retornam em uma aventura espetacular! Alterne quase que instantaneamente entre os dois heróis em uma Nova York expandida e enfrente o vilão Venom e Kraven.',
    isExclusive: true,
    isFeatured: true,
    ps5Enhancements: [
      'Carregamento em menos de 1 segundo',
      'Modo Fidelidade 4K com Ray Tracing ativo',
      'Modo Desempenho com suporte a 60 e 120 FPS / VRR'
    ],
    dualSenseFeatures: [
      'Resistência dinâmica nos gatilhos ao disparar teias',
      'Resposta tátil sentindo o poder do Simbionte',
      'Efeitos sonoros pelo alto-falante integrado'
    ],
    tags: ['Exclusivo PS5', 'Ray Tracing', 'DualSense', 'Dublado em PT-BR']
  },
  {
    id: 'god-of-war-ragnarok',
    title: 'God of War Ragnarök',
    developer: 'Santa Monica Studio',
    publisher: 'PlayStation Studios',
    platforms: ['PS5', 'PS4'],
    price: 249.9,
    originalPrice: 299.9,
    rating: 5.0,
    metascore: 94,
    genre: 'Ação / Mitologia / Aventura',
    releaseYear: 2022,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1400&q=80',
    description: 'Kratos e Atreus embarcam em uma jornada mítica pelos Nove Reinos nórdicos em busca de respostas enquanto as forças asgardianas se preparam para o Ragnarök anunciado.',
    isExclusive: true,
    isFeatured: true,
    ps5Enhancements: [
      'Opção de 4K Nativo a 30 FPS ou 4K dinâmico a 60 FPS',
      'Áudio 3D Tempest para rastrear inimigos com precisão',
      'Tempos de recarga praticamente nulos'
    ],
    dualSenseFeatures: [
      'Sensação do impacto do Machado Leviatã e das Lâminas do Caos',
      'Feedback tátil direcional para golpes e habilidades'
    ],
    tags: ['Exclusivo PlayStation', 'PS5 & PS4', 'GotY Vencedor', 'Dublado em PT-BR']
  },
  {
    id: 'the-last-of-us-part-1',
    title: 'The Last of Us Part I',
    developer: 'Naughty Dog',
    publisher: 'PlayStation Studios',
    platforms: ['PS5'],
    price: 269.9,
    originalPrice: 349.9,
    rating: 4.9,
    metascore: 89,
    genre: 'Sobrevivência / Drama / Ação',
    releaseYear: 2022,
    image: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1400&q=80',
    description: 'Reconstruído do zero para o console PlayStation 5 com fidelidade visual impressionante, iluminação fotorrealista e mecânicas de combate aprimoradas.',
    isExclusive: true,
    isFeatured: false,
    ps5Enhancements: [
      'Renderização fotorrealista de personagens e iluminação',
      'Modo Desempenho 60FPS fixo e 4K desbloqueado com VRR',
      'Inteligência Artificial de inimigos e parceiros retrabalhada'
    ],
    dualSenseFeatures: [
      'Gatilhos adaptáveis para cada calibre de arma de fogo e arco',
      'Percepção tátil da chuva caindo e estalos dos estaladores'
    ],
    tags: ['Exclusivo PS5', 'Remake Oficial', 'Fidelidade 4K', 'Áudio 3D']
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    platforms: ['PS5', 'PS4'],
    price: 229.9,
    originalPrice: 299.9,
    rating: 4.9,
    metascore: 96,
    genre: 'RPG de Ação / Soulslike',
    releaseYear: 2022,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1400&q=80',
    description: 'Eleito Jogo do Ano (GotY). Desvende as Terras Intermédias e ascenda como o Lorde Prístino nesta obra-prima monumental de Hidetaka Miyazaki e George R. R. Martin.',
    isExclusive: false,
    isFeatured: true,
    ps5Enhancements: [
      'Modo Desempenho a 60 FPS com resolução dinâmica',
      'Suporte a Ray Tracing opcional',
      'Carregamento veloz de áreas gigantescas'
    ],
    dualSenseFeatures: [
      'Feedback sutil durante conjuração de magias e defesas'
    ],
    tags: ['Jogo do Ano GotY', 'Mundo Aberto', 'PS5 & PS4']
  },
  {
    id: 'gran-turismo-7',
    title: 'Gran Turismo 7',
    developer: 'Polyphony Digital',
    publisher: 'PlayStation Studios',
    platforms: ['PS5', 'PS4'],
    price: 199.9,
    originalPrice: 299.9,
    rating: 4.8,
    metascore: 87,
    genre: 'Simulação de Corrida',
    releaseYear: 2022,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1400&q=80',
    description: 'O verdadeiro simulador de direção. Mais de 400 carros modelados com fidelidade milimétrica e 90 traçados em condições climáticas dinâmicas.',
    isExclusive: true,
    isFeatured: false,
    ps5Enhancements: [
      'Compatibilidade total com PlayStation VR2 em 4K HDR a 120Hz',
      'Ray Tracing com reflexos perfeitos na lataria dos veículos',
      'Suporte a 120 FPS em monitores compatíveis'
    ],
    dualSenseFeatures: [
      'Sensação do ABS pulsando no gatilho esquerdo',
      'Vibração tátil diferenciando asfalto, zebra e grama'
    ],
    tags: ['Exclusivo PS', 'Compatível PS VR2', 'Simulação Real']
  },
  {
    id: 'horizon-forbidden-west',
    title: 'Horizon Forbidden West',
    developer: 'Guerrilla Games',
    publisher: 'PlayStation Studios',
    platforms: ['PS5', 'PS4'],
    price: 199.9,
    originalPrice: 279.9,
    rating: 4.8,
    metascore: 88,
    genre: 'Ação / RPG de Mundo Aberto',
    releaseYear: 2022,
    image: 'https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=80',
    description: 'Junte-se a Aloy enquanto ela desbrava o Oeste Proibido, uma fronteira majestosa e perigosa repleta de novas máquinas misteriosas e tribos fascinantes.',
    isExclusive: true,
    isFeatured: false,
    ps5Enhancements: [
      'Vegetação e água renderizadas em ultra fidelidade',
      'Tempos de viagem rápida em menos de 2 segundos',
      'Modo Desempenho refinado em 60 FPS'
    ],
    dualSenseFeatures: [
      'Tensão ajustável na corda do arco ao mirar',
      'Sensação de raspar em grama alta ou mergulhar na água'
    ],
    tags: ['Exclusivo PS', 'Visual Deslumbrante', 'Dublado em PT-BR']
  },
  {
    id: 'astro-bot',
    title: 'Astro Bot',
    developer: 'Team ASOBI',
    publisher: 'PlayStation Studios',
    platforms: ['PS5'],
    price: 299.9,
    rating: 5.0,
    metascore: 94,
    genre: 'Plataforma 3D / Diversão para Família',
    releaseYear: 2024,
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=80',
    description: 'Uma celebração mágica de 30 anos de história PlayStation! Embarque em mais de 50 planetas cheios de criatividade, desafios e homenagens a ícones gamers.',
    isExclusive: true,
    isFeatured: true,
    ps5Enhancements: [
      'Uso revolucionário e criativo de todas as funções do DualSense',
      '60 FPS com gráficos coloridos e física fluida de partículas',
      'Nenhum tempo de carregamento perceptível'
    ],
    dualSenseFeatures: [
      'Sinta cada tipo de superfície: lama, vidro, metal e água',
      'Uso de sensor de movimento e giroscópio de alta precisão'
    ],
    tags: ['Aclamação da Crítica', 'Exclusivo PS5', 'Para Toda a Família']
  },
  {
    id: 'ghost-of-tsushima',
    title: 'Ghost of Tsushima Director’s Cut',
    developer: 'Sucker Punch Productions',
    publisher: 'PlayStation Studios',
    platforms: ['PS5', 'PS4'],
    price: 179.9,
    originalPrice: 249.9,
    rating: 4.9,
    metascore: 87,
    genre: 'Ação / Samurai / Mundo Aberto',
    releaseYear: 2021,
    image: 'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=800&q=80',
    bannerImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=80',
    description: 'No final do século XIII, o império mongol invade Tsushima. Jin Sakai deve deixar de lado as tradições samurai para se tornar o Fantasma e libertar seu povo.',
    isExclusive: true,
    isFeatured: false,
    ps5Enhancements: [
      '4K dinâmico a 60 FPS cravados',
      'Sincronia labial nativa para dublagem em japonês',
      'Áudio 3D 7.1 posicional de ventos e combate'
    ],
    dualSenseFeatures: [
      'O choque de lâminas de aço katana transmitido com precisão tátil',
      'Gatilhos que resistem ao disparo do arco longo'
    ],
    tags: ['Exclusivo PS', 'Cultura Samurai', 'Versão do Diretor']
  }
];

export const ACCESSORIES_DATA: AccessoryItem[] = [
  {
    id: 'dualsense-standard',
    name: 'Controle de PS5 (DualSense)',
    category: 'controles',
    price: 200,
    installments: '10x de R$ 20,00 sem juros',
    compatibility: ['PS5', 'PS4'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Resposta tátil imersiva, gatilhos adaptáveis dinâmicos e microfone embutido.',
    highlights: [
      'Gatilhos que simulam peso e resistência mecânica',
      'Motores de vibração háptica de alta fidelidade',
      'Microfone embutido com botão de mudo rápido',
      'Conexão Bluetooth e USB-C'
    ],
    availableColors: [
      { name: 'Branco Clássico', hex: '#f8fafc' },
      { name: 'Midnight Black', hex: '#0f172a' },
      { name: 'Cosmic Red', hex: '#b91c1c' },
      { name: 'Cobalt Blue', hex: '#1d4ed8' },
      { name: 'Volcanic Red', hex: '#ea580c' }
    ],
    badge: 'Essencial PS5'
  },
  {
    id: 'dualshock-4-standard',
    name: 'Controle de PS4 (DualShock 4)',
    category: 'controles',
    price: 130,
    installments: '10x de R$ 13,00 sem juros',
    compatibility: ['PS4', 'PS5'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Controle icônico de alta precisão com barra de luz, touch pad multitoque e resposta rápida.',
    highlights: [
      'Touch pad capacitivo e barra de iluminação dinâmica',
      'Sensores de movimento Sixaxis altamente responsivos',
      'Bateria interna recarregável com longa autonomia',
      'Compatível com PS4, PC e jogos de PS4 no PS5'
    ],
    availableColors: [
      { name: 'Jet Black', hex: '#0f172a' },
      { name: 'Glacier White', hex: '#f8fafc' },
      { name: 'Magma Red', hex: '#b91c1c' },
      { name: 'Wave Blue', hex: '#1d4ed8' }
    ],
    badge: 'Essencial PS4'
  },
  {
    id: 'dualsense-edge',
    name: 'Controle Sem Fio DualSense Edge',
    category: 'controles',
    price: 1449.9,
    installments: '10x de R$ 144,99 sem juros',
    compatibility: ['PS5'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Controle profissional de alto rendimento com botões traseiros e módulos de analógico substituíveis.',
    highlights: [
      'Capas de controle analógico e botões traseiros personalizáveis',
      'Paradas de gatilho ajustáveis para resposta instantânea em FPS',
      'Módulos de analógico substituíveis vendidos separadamente',
      'Estojo rígido premium para transporte com cabo trançado'
    ],
    badge: 'Pro / E-Sports'
  },
  {
    id: 'pulse-elite',
    name: 'Headset Sem Fio PULSE Elite',
    category: 'audio',
    price: 999.9,
    installments: '10x de R$ 99,99 sem juros',
    compatibility: ['PS5', 'PS4'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Drivers magnéticos planares inspirados em estúdios profissionais com áudio 3D cristalino.',
    highlights: [
      'Drivers magnéticos planares com reprodução sonora ultraprecisa',
      'Tecnologia sem fio PlayStation Link com latência quase nula',
      'Microfone retrátil com rejeição de ruído aprimorada por IA',
      'Bateria com até 30 horas de autonomia e recarga rápida'
    ],
    badge: 'Áudio Audiófilo'
  },
  {
    id: 'pulse-3d',
    name: 'Headset Sem Fio PULSE 3D',
    category: 'audio',
    price: 549.9,
    installments: '6x de R$ 91,65 sem juros',
    compatibility: ['PS5', 'PS4'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Ajustado especificamente para o áudio 3D dos consoles PlayStation 5 com design ergonômico.',
    highlights: [
      'Otimizado para a tecnologia Tempest 3D AudioTech',
      'Dois microfones integrados com cancelamento de ruído',
      'Até 12 horas de jogo sem fio com bateria recarregável',
      'Compatível com PS5, PS4 e computadores'
    ],
    badge: 'Custo-Benefício'
  },
  {
    id: 'ps-portal',
    name: 'Reprodutor Remoto PlayStation Portal',
    category: 'vr-streaming',
    price: 1499.9,
    installments: '10x de R$ 149,99 sem juros',
    compatibility: ['PS5'],
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Jogue seus títulos de PS5 pela sua rede Wi-Fi doméstica com tela LCD de 8 polegadas a 1080p e 60 FPS.',
    highlights: [
      'Sinta a experiência do DualSense direto nas suas mãos',
      'Tela LCD Full HD de 8 polegadas brilhante e vívida',
      'Desempenho fluido de 60 quadros por segundo',
      'Acesse seus jogos instalados mesmo com a TV da sala ocupada'
    ],
    badge: 'Inovação Portátil'
  },
  {
    id: 'ps-vr2',
    name: 'PlayStation VR2 + Horizon Bundle',
    category: 'vr-streaming',
    price: 4199.9,
    installments: '10x de R$ 419,99 sem juros',
    compatibility: ['PS5'],
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Realidade virtual de última geração com telas OLED 4K HDR e rastreamento ocular inteligente.',
    highlights: [
      'Resolução 4K HDR (2000 x 2040 por olho) a até 120Hz',
      'Rastreamento ocular para renderização foveada ultra eficiente',
      'Feedback tátil no próprio headset e nos controles Sense',
      'Conexão simples com um único cabo USB-C'
    ],
    badge: 'Realidade Virtual 4K'
  },
  {
    id: 'charging-station',
    name: 'Base de Carregamento DualSense',
    category: 'energia-suporte',
    price: 189.9,
    installments: '3x de R$ 63,30 sem juros',
    compatibility: ['PS5'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Carregue até dois controles sem fio DualSense simultaneamente sem ocupar portas USB do PS5.',
    highlights: [
      'Encaixe fácil com clique seguro por contato inferior',
      'Carrega tão rápido quanto ligado direto ao console',
      'Design em harmonia estética com o PlayStation 5',
      'Libera as portas USB frontais para outros periféricos'
    ],
    badge: 'Acessório Prático'
  },
  {
    id: 'g29-racing-wheel',
    name: 'Volante Logitech G29 Driving Force',
    category: 'controles',
    price: 1899.9,
    installments: '10x de R$ 189,99 sem juros',
    compatibility: ['PS5', 'PS4'],
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Volante com Force Feedback de dois motores e pedais de aço inoxidável para fãs de simuladores.',
    highlights: [
      'Force Feedback realista que simula perda de tração e aderência',
      'Rotação de 900 graus (2 voltas e meia de batente a batente)',
      'Pedais de acelerador, freio não linear e embreagem',
      'Couro legítimo costurado à mão no aro'
    ],
    badge: 'Simuladores'
  }
];

export const FAQ_DATA = [
  {
    question: 'O PlayStation 5 roda todos os meus jogos de PlayStation 4?',
    answer: 'Sim! Mais de 99% da biblioteca de mais de 4.000 jogos de PS4 é totalmente retrocompatível com o PS5. Além disso, muitos jogos contam com o recurso "Game Boost", rodando com taxas de quadros mais altas e estáveis (muitas vezes a 60 FPS fixos) e tempos de carregamento muito menores graças ao SSD.'
  },
  {
    question: 'Qual a diferença principal entre o PS5 Pro e o PS5 Slim?',
    answer: 'O PS5 Pro conta com uma GPU 67% mais rápida, suporte à tecnologia de upscaling por IA proprietária (PSSR - PlayStation Spectral Super Resolution), Ray Tracing avançado até 3x mais veloz e SSD de 2TB de fábrica. O PS5 Pro é feito para quem não quer escolher entre modo Fidelidade (gráficos máximos) e modo Desempenho (60 FPS).'
  },
  {
    question: 'Ainda vale a pena comprar um PlayStation 4 Slim hoje?',
    answer: 'O PS4 Slim continua sendo uma das opções com melhor custo-benefício para quem quer entrar no mundo dos videogames gastando menos. Ele dá acesso a clássicos inesquecíveis como God of War, The Last of Us, Bloodborne, Red Dead Redemption 2 e GTA V com mídia física barata e suporte a serviços de streaming.'
  },
  {
    question: 'Os controles do PS4 funcionam no PS5?',
    answer: 'O controle DualShock 4 funciona perfeitamente no PS5 ao executar jogos de PlayStation 4. No entanto, para jogos nativos de PlayStation 5, é obrigatório o uso do controle DualSense, pois os jogos utilizam os gatilhos adaptáveis e a resposta háptica de última geração.'
  },
  {
    question: 'O que é o áudio Tempest 3D e preciso de fone especial para usar?',
    answer: 'O Tempest 3D AudioTech é o motor de áudio espacial proprietário do PS5, capaz de simular centenas de fontes sonoras em 360 graus. Ele funciona com qualquer fone estéreo de boa qualidade conectado ao controle ou console, mas brilha com fones dedicados como o PULSE Elite e PULSE 3D.'
  }
];
