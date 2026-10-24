/**
 * =============================================================================
 * SECRET PARTS — CATÁLOGO EXCLUSIVO DE FARÓIS AUTOMOTIVOS
 * =============================================================================
 * 
 * Este arquivo centraliza todo o banco de dados de produtos da Secret Parts.
 * Ele foi estruturado para máxima facilidade de manutenção e atualização com o Antigravity.
 * 
 * CAMPOS DE CADA PRODUTO:
 * - id: Identificador único e permanente (ex: "farol-onix-2012-2019-esq")
 * - name: Nome comercial claro do farol
 * - slug: URL amigável
 * - sku: Código de referência comercial (ex: "SP-CHV-0101")
 * - oemCode: Código original da montadora (ex: "52064893")
 * - vehicleBrand: Marca do veículo (ex: "Chevrolet")
 * - vehicleModel: Modelo do veículo (ex: "Onix")
 * - yearStart: Ano inicial de compatibilidade (ex: 2012)
 * - yearEnd: Ano final de compatibilidade (ex: 2019)
 * - version: Versões compatíveis (ex: "Joy, LT, LTZ, Effect, Activ")
 * - side: Lado de instalação: "esquerdo" (motorista), "direito" (passageiro) ou "par"
 * - type: Tipo óptico ("mascara-negra", "led-drl", "foco-duplo", "foco-simples", "projetor")
 * - manufacturer: Fabricante da peça (Arteb, Valeo, Magneti Marelli, Depo, TYC, Orgus)
 * - condition: Condição da peça ("Novo na caixa com garantia")
 * - price: Preço unitário de varejo em reais (ex: 389.90)
 * - wholesalePrice: Preço promocional para atacado/distribuição (ex: 299.00)
 * - wholesaleMinQty: Quantidade mínima para preço de atacado (ex: 4)
 * - originalPrice: Preço anterior para itens em promoção (ex: 449.00)
 * - isOffer: true para aparecer na seção de Ofertas
 * - featured: true para aparecer nos destaques da Página Inicial
 * - stockStatus: "disponivel", "poucas_unidades", "sob_consulta", "indisponivel"
 * - stockQuantity: Quantidade em estoque real
 * - published: true para exibir no site
 * - images: Array com caminhos das fotos do produto
 * - specifications: Especificações técnicas detalhadas
 * - compatibilityNotes: Observações essenciais de encaixe
 * =============================================================================
 */

export const VEHICLE_BRANDS = [
  "Chevrolet",
  "Volkswagen",
  "Fiat",
  "Toyota",
  "Honda",
  "Hyundai",
  "Jeep",
  "Ford",
  "Renault",
  "Nissan"
];

export const HEADLIGHT_TYPES = [
  { id: "all", name: "Todos os Tipos" },
  { id: "mascara-negra", name: "Máscara Negra" },
  { id: "led-drl", name: "LED / DRL Integrado" },
  { id: "foco-duplo", name: "Foco Duplo" },
  { id: "foco-simples", name: "Foco Simples" },
  { id: "projetor", name: "Com Projetor" },
];

export const HEADLIGHT_SIDES = [
  { id: "all", name: "Todos os Lados" },
  { id: "esquerdo", name: "Esquerdo (Motorista)" },
  { id: "direito", name: "Direito (Passageiro)" },
  { id: "par", name: "Par Completo (Esq + Dir)" },
];

export const STOCK_STATUS_CONFIG = {
  disponivel: { label: "Disponível em Estoque", color: "text-emerald-400", bg: "bg-emerald-950/60 border-emerald-800/60" },
  poucas_unidades: { label: "Poucas Unidades", color: "text-amber-400", bg: "bg-amber-950/60 border-amber-800/60" },
  sob_consulta: { label: "Sob Consulta", color: "text-sky-400", bg: "bg-sky-950/60 border-sky-800/60" },
  indisponivel: { label: "Indisponível no Momento", color: "text-zinc-400", bg: "bg-zinc-900 border-zinc-700" }
};

export const PRODUCTS = [
  // ===========================================================================
  // 1. CHEVROLET ONIX / PRISMA — ESQUERDO
  // ===========================================================================
  {
    id: "farol-onix-2012-2019-esq",
    name: "Farol Chevrolet Onix / Prisma Máscara Negra Foco Duplo - Lado Esquerdo",
    slug: "farol-chevrolet-onix-prisma-mascara-negra-esquerdo",
    sku: "SP-CHV-1011",
    oemCode: "52064893",
    vehicleBrand: "Chevrolet",
    vehicleModel: "Onix",
    yearStart: 2012,
    yearEnd: 2019,
    version: "Joy, LT, LTZ, Effect, Activ (Compatível também com Prisma 2013 a 2019)",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "mascara-negra",
    typeLabel: "Máscara Negra / Foco Duplo",
    manufacturer: "Arteb / Orgus",
    condition: "Novo com garantia de fábrica",
    price: 389.90,
    wholesalePrice: 299.00,
    wholesaleMinQty: 4,
    originalPrice: 449.90,
    isOffer: true,
    featured: true,
    stockStatus: "disponivel",
    stockQuantity: 18,
    published: true,
    images: [
      "./images/products/farol-onix.jpg"
    ],
    specifications: {
      lente: "Policarbonato liso de alta resistência térmica e raios UV",
      carcaca: "Plástico ABS injetado preto de alta densidade",
      foco: "Duplo com regulagem manual (suporta motor elétrico)",
      lampadas: "H4 e H1 (não inclusas)",
      encaixe: "Padrão original montadora sem adaptações"
    },
    compatibilityNotes: "Aplica-se perfeitamente aos modelos Onix 2012 a 2019 e Prisma 2013 a 2019. Não compatível com o Novo Onix Plus Geração 2 (2020+).",
    description: "Farol principal de reposição padrão original com acabamento esportivo em máscara negra e foco duplo. Garante iluminação potente e alinhamento milimétrico."
  },

  // ===========================================================================
  // 2. CHEVROLET ONIX / PRISMA — DIREITO
  // ===========================================================================
  {
    id: "farol-onix-2012-2019-dir",
    name: "Farol Chevrolet Onix / Prisma Máscara Negra Foco Duplo - Lado Direito",
    slug: "farol-chevrolet-onix-prisma-mascara-negra-direito",
    sku: "SP-CHV-1012",
    oemCode: "52064892",
    vehicleBrand: "Chevrolet",
    vehicleModel: "Onix",
    yearStart: 2012,
    yearEnd: 2019,
    version: "Joy, LT, LTZ, Effect (Compatível com Prisma 2013 a 2019)",
    side: "direito",
    sideLabel: "Lado Direito (Passageiro)",
    type: "mascara-negra",
    typeLabel: "Máscara Negra / Foco Duplo",
    manufacturer: "Arteb / Orgus",
    condition: "Novo com garantia de fábrica",
    price: 389.90,
    wholesalePrice: 299.00,
    wholesaleMinQty: 4,
    originalPrice: 449.90,
    isOffer: false,
    featured: false,
    stockStatus: "disponivel",
    stockQuantity: 14,
    published: true,
    images: [
      "./images/products/farol-onix.jpg"
    ],
    specifications: {
      lente: "Policarbonato liso anti-amarelamento",
      carcaca: "ABS reforçado padrão original",
      foco: "Duplo com regulagem precisa",
      lampadas: "H4 e H1",
      encaixe: "100% plug & play"
    },
    compatibilityNotes: "Encaixe original nos chicotes e fixações de fábrica da GM.",
    description: "Farol lado passageiro com lente em policarbonato ultratransparente e carcaça robusta. Ideal para reposição após colisões ou renovação estética."
  },

  // ===========================================================================
  // 3. VOLKSWAGEN POLO / VIRTUS — PROJETOR COM DRL LED
  // ===========================================================================
  {
    id: "farol-polo-virtus-led-esq",
    name: "Farol Volkswagen Polo / Virtus Projetor com DRL em LED - Lado Esquerdo",
    slug: "farol-volkswagen-polo-virtus-projetor-led-esquerdo",
    sku: "SP-VW-2021",
    oemCode: "2G1941005",
    vehicleBrand: "Volkswagen",
    vehicleModel: "Polo",
    yearStart: 2018,
    yearEnd: 2022,
    version: "MSI, TSI, Comfortline, Highline, GTS (Compatível com Virtus)",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "led-drl",
    typeLabel: "Projetor com Barra LED DRL",
    manufacturer: "Valeo / Linha Original",
    condition: "Novo original",
    price: 1190.00,
    wholesalePrice: 890.00,
    wholesaleMinQty: 2,
    originalPrice: 1350.00,
    isOffer: true,
    featured: true,
    stockStatus: "disponivel",
    stockQuantity: 8,
    published: true,
    images: [
      "./images/products/farol-polo-virtus.jpg"
    ],
    specifications: {
      lente: "Policarbonato óptico cristal com tratamento UV",
      tecnologia: "Luz Diurna (DRL) integrada em LED de alta luminosidade",
      projetor: "Canhão elíptico para feixe de corte nítido sem ofuscamento",
      lampadas: "H7 / LED",
      regulagem: "Compatível com motor elétrico original"
    },
    compatibilityNotes: "Compatível com todas as versões Polo e Virtus de 2018 até 2022. Não necessita de codificação VCDS em substituições diretas.",
    description: "Farol de alta tecnologia com projetor elíptico e barra guia DRL em LED contínua. Design agressivo e moderno com iluminação superior em rodovias."
  },

  // ===========================================================================
  // 4. VOLKSWAGEN GOL G5 / VOYAGE / SAVEIRO — MÁSCARA NEGRA
  // ===========================================================================
  {
    id: "farol-gol-g5-mascara-negra-esq",
    name: "Farol Volkswagen Gol G5 / Voyage / Saveiro Máscara Negra - Lado Esquerdo",
    slug: "farol-volkswagen-gol-g5-mascara-negra-esquerdo",
    sku: "SP-VW-2011",
    oemCode: "5U1941007E",
    vehicleBrand: "Volkswagen",
    vehicleModel: "Gol",
    yearStart: 2008,
    yearEnd: 2012,
    version: "Trend, Power, Rallye (Gol, Voyage e Saveiro G5)",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "mascara-negra",
    typeLabel: "Máscara Negra / Foco Duplo",
    manufacturer: "Arteb Original",
    condition: "Novo com garantia de 90 dias",
    price: 349.00,
    wholesalePrice: 265.00,
    wholesaleMinQty: 4,
    originalPrice: 399.00,
    isOffer: false,
    featured: true,
    stockStatus: "disponivel",
    stockQuantity: 22,
    published: true,
    images: [
      "./images/products/farol-gol-g5.jpg"
    ],
    specifications: {
      lente: "Policarbonato liso",
      foco: "Foco Duplo H7 (baixo) + H1 (alto)",
      acabamento: "Máscara negra esportiva",
      regulagem: "Manual integrada"
    },
    compatibilityNotes: "Aplica-se em toda a linha Gol G5, Saveiro G5 e Voyage G5 anos 2008 a 2012.",
    description: "Farol clássico com máscara negra de alto padrão Arteb. Encaixe firme e vedação reforçada contra infiltração de água e poeira."
  },

  // ===========================================================================
  // 5. TOYOTA COROLLA — TRIPLE LED PROJETOR DRL
  // ===========================================================================
  {
    id: "farol-corolla-led-drl-esq",
    name: "Farol Toyota Corolla LED DRL com Projetor - Lado Esquerdo",
    slug: "farol-toyota-corolla-led-drl-projetor-esquerdo",
    sku: "SP-TOY-3011",
    oemCode: "81150-02K40",
    vehicleBrand: "Toyota",
    vehicleModel: "Corolla",
    yearStart: 2015,
    yearEnd: 2019,
    version: "GLi, XEi, Altis, Dynamic",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "led-drl",
    typeLabel: "LED DRL com Projetor",
    manufacturer: "Depo / Koito Quality",
    condition: "Novo com garantia",
    price: 890.00,
    wholesalePrice: 680.00,
    wholesaleMinQty: 2,
    originalPrice: 1050.00,
    isOffer: true,
    featured: true,
    stockStatus: "disponivel",
    stockQuantity: 9,
    published: true,
    images: [
      "./images/products/farol-corolla.jpg"
    ],
    specifications: {
      lente: "Policarbonato de alta transparência com verniz protetor",
      assinatura: "Assinatura luminosa DRL em LED embutida na parte superior",
      acabamento: "Cromado com detalhes em black piano",
      lampadas: "Projetor para lâmpada HIR2 / LED"
    },
    compatibilityNotes: "Compatível com a reestilização do Corolla de 2015 até 2019. Conector e fixação 100% compatíveis com o padrão Toyota.",
    description: "Farol refinado com projetores nítidos e barra de LED de alto impacto visual. Mantém o padrão de sofisticação e segurança do sedan médio mais vendido."
  },

  // ===========================================================================
  // 6. TOYOTA COROLLA — LADO DIREITO
  // ===========================================================================
  {
    id: "farol-corolla-led-drl-dir",
    name: "Farol Toyota Corolla LED DRL com Projetor - Lado Direito",
    slug: "farol-toyota-corolla-led-drl-projetor-direito",
    sku: "SP-TOY-3012",
    oemCode: "81110-02K40",
    vehicleBrand: "Toyota",
    vehicleModel: "Corolla",
    yearStart: 2015,
    yearEnd: 2019,
    version: "GLi, XEi, Altis, Dynamic",
    side: "direito",
    sideLabel: "Lado Direito (Passageiro)",
    type: "led-drl",
    typeLabel: "LED DRL com Projetor",
    manufacturer: "Depo / Koito Quality",
    condition: "Novo com garantia",
    price: 890.00,
    wholesalePrice: 680.00,
    wholesaleMinQty: 2,
    originalPrice: 1050.00,
    isOffer: false,
    featured: false,
    stockStatus: "disponivel",
    stockQuantity: 7,
    published: true,
    images: [
      "./images/products/farol-corolla.jpg"
    ],
    specifications: {
      lente: "Policarbonato resistente a impactos de pedras em rodovias",
      assinatura: "LED DRL diurno integrado",
      foco: "Canhão projetor com ajuste de foco"
    },
    compatibilityNotes: "Aplica-se em todas as versões do Corolla 2015 a 2019.",
    description: "Farol lado direito para Toyota Corolla. Peça com acabamento impecável, alinhamento perfeito com o para-lama e para-choque."
  },

  // ===========================================================================
  // 7. HONDA CIVIC G10 — FULL LED TOURING STYLE
  // ===========================================================================
  {
    id: "farol-civic-g10-led-touring-esq",
    name: "Farol Honda Civic G10 Full LED Jewel Eye Touring - Lado Esquerdo",
    slug: "farol-honda-civic-g10-full-led-touring-esquerdo",
    sku: "SP-HND-4011",
    oemCode: "33150-TBA-A01",
    vehicleBrand: "Honda",
    vehicleModel: "Civic",
    yearStart: 2017,
    yearEnd: 2021,
    version: "Sport, EX, EXL, Touring (Civic Geração 10)",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "led-drl",
    typeLabel: "Full LED Jewel Eye com DRL",
    manufacturer: "Depo / Stanley Tech",
    condition: "Novo completo",
    price: 1150.00,
    wholesalePrice: 890.00,
    wholesaleMinQty: 2,
    originalPrice: 1390.00,
    isOffer: true,
    featured: true,
    stockStatus: "poucas_unidades",
    stockQuantity: 3,
    published: true,
    images: [
      "./images/products/farol-civic-g10.jpg"
    ],
    specifications: {
      blocos: "Módulos Jewel Eye multi-LED com lentes condensadoras",
      drl: "Barra contínua ultra branca em formato boomerang",
      seta: "Indicador de direção integrado",
      estrutura: "Carcaça selada impermeável IP67"
    },
    compatibilityNotes: "Compatível com toda a linha Civic G10 anos 2017 a 2021. Nas versões Touring é plug & play direto; nas demais versões encaixa perfeitamente na lataria.",
    description: "O farol mais cobiçado da décima geração do Honda Civic. Módulos multi-LED individuais que oferecem iluminação de padrão premium e visual esportivo incomparável."
  },

  // ===========================================================================
  // 8. JEEP RENEGADE — ANGEL EYE LED HALO
  // ===========================================================================
  {
    id: "farol-jeep-renegade-halo-led-esq",
    name: "Farol Jeep Renegade Projetor com DRL Angel Eye Halo LED - Lado Esquerdo",
    slug: "farol-jeep-renegade-halo-angel-eye-led-esquerdo",
    sku: "SP-JEP-5011",
    oemCode: "51953114",
    vehicleBrand: "Jeep",
    vehicleModel: "Renegade",
    yearStart: 2015,
    yearEnd: 2021,
    version: "Sport, Longitude, Limited, Trailhawk (Flex e Diesel)",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "projetor",
    typeLabel: "Projetor com Anel Halo LED (Angel Eye)",
    manufacturer: "Magneti Marelli / Linha Especial",
    condition: "Novo na caixa com suporte",
    price: 740.00,
    wholesalePrice: 560.00,
    wholesaleMinQty: 2,
    originalPrice: 880.00,
    isOffer: false,
    featured: true,
    stockStatus: "disponivel",
    stockQuantity: 11,
    published: true,
    images: [
      "./images/products/farol-jeep-renegade.jpg"
    ],
    specifications: {
      formato: "Circular clássico Jeep com moldura técnica moderna",
      halo: "Anel de LED DRL brilhante 6000K",
      projetor: "Canhão bi-halogênio/LED com foco concentrado",
      suporte: "Garras de fixação reforçadas para suportar vibrações off-road"
    },
    compatibilityNotes: "Compatível com todas as versões de Jeep Renegade 2015 a 2021.",
    description: "Farol circular com canhão óptico de alta eficiência e halo circular em LED brilhante. Visual aventureiro e iluminação densa para estrada e trilha."
  },

  // ===========================================================================
  // 9. JEEP RENEGADE — LADO DIREITO
  // ===========================================================================
  {
    id: "farol-jeep-renegade-halo-led-dir",
    name: "Farol Jeep Renegade Projetor com DRL Angel Eye Halo LED - Lado Direito",
    slug: "farol-jeep-renegade-halo-angel-eye-led-direito",
    sku: "SP-JEP-5012",
    oemCode: "51953115",
    vehicleBrand: "Jeep",
    vehicleModel: "Renegade",
    yearStart: 2015,
    yearEnd: 2021,
    version: "Sport, Longitude, Limited, Trailhawk (Flex e Diesel)",
    side: "direito",
    sideLabel: "Lado Direito (Passageiro)",
    type: "projetor",
    typeLabel: "Projetor com Anel Halo LED (Angel Eye)",
    manufacturer: "Magneti Marelli / Linha Especial",
    condition: "Novo na caixa com suporte",
    price: 740.00,
    wholesalePrice: 560.00,
    wholesaleMinQty: 2,
    originalPrice: 880.00,
    isOffer: false,
    featured: false,
    stockStatus: "disponivel",
    stockQuantity: 10,
    published: true,
    images: [
      "./images/products/farol-jeep-renegade.jpg"
    ],
    specifications: {
      formato: "Circular Jeep com tecnologia ótica moderna",
      halo: "Anel de LED DRL contínuo",
      foco: "Projetor integrado"
    },
    compatibilityNotes: "Encaixe original nas bases dianteiras do Renegade.",
    description: "Farol lado direito para Jeep Renegade. Excelente qualidade ótica, sem trepidação do feixe e vedação técnica padrão original."
  },

  // ===========================================================================
  // 10. FIAT STRADA / ARGO / CRONOS — FOCO DUPLO COM GUIA LED
  // ===========================================================================
  {
    id: "farol-fiat-strada-drl-esq",
    name: "Farol Fiat Nova Strada / Argo Máscara Negra com Guia LED - Lado Esquerdo",
    slug: "farol-fiat-nova-strada-argo-mascara-negra-led-esquerdo",
    sku: "SP-FIA-6011",
    oemCode: "52084711",
    vehicleBrand: "Fiat",
    vehicleModel: "Strada",
    yearStart: 2020,
    yearEnd: 2024,
    version: "Endurance, Freedom, Volcano, Ranch (Nova Strada)",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "mascara-negra",
    typeLabel: "Máscara Negra com Guia LED",
    manufacturer: "Magneti Marelli Original",
    condition: "Novo na embalagem",
    price: 689.00,
    wholesalePrice: 520.00,
    wholesaleMinQty: 4,
    originalPrice: 790.00,
    isOffer: true,
    featured: true,
    stockStatus: "disponivel",
    stockQuantity: 16,
    published: true,
    images: [
      "./images/products/farol-fiat-strada.jpg"
    ],
    specifications: {
      lente: "Policarbonato anti-risco",
      drl: "Sobrancelha luminosa com LED guia de posicionamento",
      refletor: "Foco duplo cromado esportivo com fundo máscara negra",
      lampadas: "H7 / H1"
    },
    compatibilityNotes: "Perfeita aplicação na Nova Fiat Strada geração atual (2020 a 2024).",
    description: "Farol para o utilitário mais vendido do Brasil. Linhas dinâmicas, refletor geométrico e guia em LED superior que conferem aspecto moderno e agressivo."
  },

  // ===========================================================================
  // 11. HYUNDAI HB20 — COM DRL LED
  // ===========================================================================
  {
    id: "farol-hb20-led-drl-esq",
    name: "Farol Hyundai HB20 / HB20S com DRL em LED e Máscara Negra - Lado Esquerdo",
    slug: "farol-hyundai-hb20-drl-led-mascara-negra-esquerdo",
    sku: "SP-HYU-7011",
    oemCode: "92101-R1000",
    vehicleBrand: "Hyundai",
    vehicleModel: "HB20",
    yearStart: 2020,
    yearEnd: 2022,
    version: "Evolution, Diamond, Diamond Plus, Platinum (Hatch e Sedan)",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "led-drl",
    typeLabel: "Máscara Negra com DRL LED",
    manufacturer: "Mobis / Arteb",
    condition: "Novo com nota e garantia",
    price: 789.00,
    wholesalePrice: 599.00,
    wholesaleMinQty: 3,
    originalPrice: 920.00,
    isOffer: true,
    featured: true,
    stockStatus: "disponivel",
    stockQuantity: 12,
    published: true,
    images: [
      "./images/products/farol-hb20-led.jpg"
    ],
    specifications: {
      lente: "Policarbonato cristal reforçado",
      foco: "Projetor central com acabamento fume / mascara negra",
      drl: "Fita guia DRL em LED embutida de alto contraste"
    },
    compatibilityNotes: "Compatível com a geração HB20 2020 a 2022. Fixação e chicotes originais.",
    description: "Farol de reposição de primeira linha para Hyundai HB20. Acabamento primoroso com canhão projetor e iluminação diurna em LED."
  },

  // ===========================================================================
  // 12. TOYOTA HILUX — FULL LED PROJETOR
  // ===========================================================================
  {
    id: "farol-hilux-full-led-esq",
    name: "Farol Toyota Hilux SRV / SRX Full LED Projetor - Lado Esquerdo",
    slug: "farol-toyota-hilux-full-led-projetor-esquerdo",
    sku: "SP-TOY-3031",
    oemCode: "81110-0KP00",
    vehicleBrand: "Toyota",
    vehicleModel: "Hilux",
    yearStart: 2016,
    yearEnd: 2020,
    version: "SRV, SRX, GR-Sport",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "projetor",
    typeLabel: "Full LED Projetor com DRL",
    manufacturer: "Koito / Depo",
    condition: "Novo garantido",
    price: 1590.00,
    wholesalePrice: 1250.00,
    wholesaleMinQty: 2,
    originalPrice: 1850.00,
    isOffer: false,
    featured: true,
    stockStatus: "poucas_unidades",
    stockQuantity: 4,
    published: true,
    images: [
      "./images/products/farol-hilux.jpg"
    ],
    specifications: {
      otica: "Sistema bi-LED com dissipador de calor ativo em alumínio",
      lente: "Policarbonato endurecido contra choques e cascalho",
      drl: "LED DRL com regulador eletrônico integrado"
    },
    compatibilityNotes: "Aplicação nas versões Hilux 2016 a 2020.",
    description: "O farol mais robusto da categoria pickup média. Feixe de luz de altíssimo alcance para viagens noturnas e trabalho pesado."
  },

  // ===========================================================================
  // 13. FIAT PALIO FIRE / SIENA / STRADA G3 — FOCO DUPLO
  // ===========================================================================
  {
    id: "farol-palio-fire-mascara-negra-esq",
    name: "Farol Fiat Palio Fire / Siena / Strada G3 Máscara Negra - Lado Esquerdo",
    slug: "farol-fiat-palio-fire-siena-strada-g3-esquerdo",
    sku: "SP-FIA-6021",
    oemCode: "51714349",
    vehicleBrand: "Fiat",
    vehicleModel: "Palio",
    yearStart: 2004,
    yearEnd: 2014,
    version: "Palio Fire, Siena G3, Strada G3, Palio Weekend",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "mascara-negra",
    typeLabel: "Máscara Negra / Foco Duplo",
    manufacturer: "Magneti Marelli",
    condition: "Novo com garantia",
    price: 289.00,
    wholesalePrice: 219.00,
    wholesaleMinQty: 4,
    originalPrice: 330.00,
    isOffer: false,
    featured: false,
    stockStatus: "disponivel",
    stockQuantity: 25,
    published: true,
    images: [
      "./images/products/farol-palio-fire.jpg"
    ],
    specifications: {
      lente: "Policarbonato liso",
      foco: "Foco Duplo H7 / H1",
      mascara: "Negra com cúpula prateada"
    },
    compatibilityNotes: "Aplica-se em Palio G3 de 2004 a 2014, Siena 2004 a 2012 e Strada Fire.",
    description: "Campeão de vendas em frotas e oficinas mecânicas. Preço altamente competitivo com durabilidade comprovada."
  },

  // ===========================================================================
  // 14. FORD KA / KA+ SEDAN — MÁSCARA NEGRA
  // ===========================================================================
  {
    id: "farol-ford-ka-mascara-negra-esq",
    name: "Farol Ford Ka / Ka+ Sedan Máscara Negra Foco Simples - Lado Esquerdo",
    slug: "farol-ford-ka-sedan-mascara-negra-esquerdo",
    sku: "SP-FOR-8011",
    oemCode: "E3B5-13W030-AE",
    vehicleBrand: "Ford",
    vehicleModel: "Ka",
    yearStart: 2015,
    yearEnd: 2021,
    version: "SE, SE Plus, SEL, Titanium, Freestyle",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "mascara-negra",
    typeLabel: "Foco Simples Máscara Negra",
    manufacturer: "Arteb / Orgus",
    condition: "Novo na caixa",
    price: 429.00,
    wholesalePrice: 330.00,
    wholesaleMinQty: 4,
    originalPrice: 489.00,
    isOffer: false,
    featured: false,
    stockStatus: "disponivel",
    stockQuantity: 15,
    published: true,
    images: [
      "./images/products/farol-ford-ka.jpg"
    ],
    specifications: {
      lente: "Policarbonato transparente de alta resistência",
      lampada: "H4 biluz",
      acabamento: "Máscara negra padrão esportivo"
    },
    compatibilityNotes: "Compatível com Ford Ka Hatch e Ford Ka+ Sedan anos 2015 a 2021.",
    description: "Farol para o compacto Ford Ka. Ótimo feixe de luz e encaixe preciso nos para-choques originais."
  },

  // ===========================================================================
  // 15. NISSAN KICKS — MÁSCARA NEGRA COM ASSINATURA LED
  // ===========================================================================
  {
    id: "farol-nissan-kicks-led-esq",
    name: "Farol Nissan Kicks com Assinatura LED DRL e Máscara Negra - Lado Esquerdo",
    slug: "farol-nissan-kicks-led-drl-mascara-negra-esquerdo",
    sku: "SP-NIS-9011",
    oemCode: "26010-5RB0A",
    vehicleBrand: "Nissan",
    vehicleModel: "Kicks",
    yearStart: 2017,
    yearEnd: 2021,
    version: "S, SV, SL, Special Edition",
    side: "esquerdo",
    sideLabel: "Lado Esquerdo (Motorista)",
    type: "led-drl",
    typeLabel: "Máscara Negra com DRL LED",
    manufacturer: "Valeo / TYC",
    condition: "Novo com garantia",
    price: 890.00,
    wholesalePrice: 690.00,
    wholesaleMinQty: 2,
    originalPrice: 1020.00,
    isOffer: false,
    featured: true,
    stockStatus: "disponivel",
    stockQuantity: 8,
    published: true,
    images: [
      "./images/products/farol-kicks.jpg"
    ],
    specifications: {
      assinatura: "Barra luminosa Boomerang em LED contínuo",
      projetor: "Foco duplo com projetor de luz baixa",
      lente: "Policarbonato com proteção solar"
    },
    compatibilityNotes: "Compatível com Nissan Kicks anos 2017 até 2021.",
    description: "Farol imponente com a assinatura óptica V-Motion em LED da Nissan. Foco cirúrgico e design refinado."
  },

  // ===========================================================================
  // 16. CHEVROLET TRACKER — PAR COMPLETO FULL LED
  // ===========================================================================
  {
    id: "farol-par-tracker-full-led",
    name: "Par de Faróis Chevrolet Novo Tracker Full LED Premier (Esq + Dir)",
    slug: "par-farois-chevrolet-novo-tracker-full-led-premier",
    sku: "SP-CHV-1090-PAR",
    oemCode: "26279140-PAR",
    vehicleBrand: "Chevrolet",
    vehicleModel: "Tracker",
    yearStart: 2020,
    yearEnd: 2024,
    version: "Premier, RS, Midnight, LTZ",
    side: "par",
    sideLabel: "Par Completo (Esquerdo + Direito)",
    type: "led-drl",
    typeLabel: "Par Full LED com DRL e Projetores",
    manufacturer: "Magna / Original GM",
    condition: "Par novo na caixa original",
    price: 2450.00,
    wholesalePrice: 1950.00,
    wholesaleMinQty: 1,
    originalPrice: 2890.00,
    isOffer: true,
    featured: true,
    stockStatus: "poucas_unidades",
    stockQuantity: 2,
    published: true,
    images: [
      "./images/products/farol-tracker.jpg"
    ],
    specifications: {
      incluso: "1 Farol Lado Esquerdo + 1 Farol Lado Direito",
      tecnologia: "Full LED inteligente com comutação automática e DRL dinâmico",
      conector: "Chicote original Chevrolet"
    },
    compatibilityNotes: "Compatível com Nova Tracker 2020 a 2024. Ideal para reposição completa de frente ou upgrade em oficinas de funilaria.",
    description: "Kit com o par completo de faróis Full LED para o Novo Chevrolet Tracker. A solução definitiva com preço promocional para o par montado."
  }
];

// =============================================================================
// FUNÇÕES UTILITÁRIAS DE CONSULTA E FILTRAGEM
// =============================================================================

export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

export function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured && p.published !== false);
}

export function getOfferProducts() {
  return PRODUCTS.filter(p => p.isOffer && p.published !== false);
}

export function getAllBrands() {
  const brands = new Set(PRODUCTS.map(p => p.vehicleBrand));
  return Array.from(brands).sort();
}

export function getModelsByBrand(brand) {
  if (!brand || brand === "all") {
    const models = new Set(PRODUCTS.map(p => p.vehicleModel));
    return Array.from(models).sort();
  }
  const filtered = PRODUCTS.filter(p => p.vehicleBrand.toLowerCase() === brand.toLowerCase());
  const models = new Set(filtered.map(p => p.vehicleModel));
  return Array.from(models).sort();
}

export function getYearsForModel(model) {
  let minYear = 2000;
  let maxYear = 2025;
  const prods = model && model !== "all" 
    ? PRODUCTS.filter(p => p.vehicleModel.toLowerCase() === model.toLowerCase())
    : PRODUCTS;

  if (prods.length > 0) {
    minYear = Math.min(...prods.map(p => p.yearStart));
    maxYear = Math.max(...prods.map(p => p.yearEnd));
  }

  const years = [];
  for (let y = maxYear; y >= minYear; y--) {
    years.push(y);
  }
  return years;
}

/**
 * Motor de busca e filtragem multifacetada do catálogo
 */
export function filterProducts({
  searchQuery = '',
  brand = 'all',
  model = 'all',
  year = 'all',
  side = 'all',
  type = 'all',
  stockStatus = 'all',
  onlyOffers = false,
  minPrice = 0,
  maxPrice = Infinity,
  sortBy = 'featured'
}) {
  return PRODUCTS.filter(product => {
    if (product.published === false) return false;

    // Busca textual flexível por termos (nome, marca, modelo, ano, código da peça, código OEM, fabricante)
    if (searchQuery && searchQuery.trim()) {
      const terms = searchQuery.toLowerCase().trim().split(/\s+/);
      const searchableText = `
        ${product.name} 
        ${product.vehicleBrand} 
        ${product.vehicleModel} 
        ${product.sku} 
        ${product.oemCode} 
        ${product.manufacturer} 
        ${product.version} 
        ${product.yearStart} 
        ${product.yearEnd} 
        ${product.typeLabel}
        ${product.sideLabel}
        ${product.description}
      `.toLowerCase();

      const matchesAllTerms = terms.every(term => searchableText.includes(term));
      if (!matchesAllTerms) return false;
    }

    // Filtro por Marca
    if (brand && brand !== 'all') {
      if (product.vehicleBrand.toLowerCase() !== brand.toLowerCase()) return false;
    }

    // Filtro por Modelo
    if (model && model !== 'all') {
      if (product.vehicleModel.toLowerCase() !== model.toLowerCase()) return false;
    }

    // Filtro por Ano
    if (year && year !== 'all') {
      const numericYear = parseInt(year, 10);
      if (numericYear < product.yearStart || numericYear > product.yearEnd) return false;
    }

    // Filtro por Lado
    if (side && side !== 'all') {
      if (product.side !== side && product.side !== 'par') return false;
    }

    // Filtro por Tipo de Farol
    if (type && type !== 'all') {
      if (product.type !== type) return false;
    }

    // Filtro por Disponibilidade
    if (stockStatus && stockStatus !== 'all') {
      if (product.stockStatus !== stockStatus) return false;
    }

    // Filtro apenas Ofertas
    if (onlyOffers && !product.isOffer) {
      return false;
    }

    // Filtro de Preço
    if (product.price < minPrice || product.price > maxPrice) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    if (sortBy === 'price_asc') return a.price - b.price;
    if (sortBy === 'price_desc') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'year_desc') return b.yearEnd - a.yearEnd;
    // Padrão: Destaques primeiro
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
}
