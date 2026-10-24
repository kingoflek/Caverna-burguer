/**
 * =============================================================================
 * SECRET PARTS — CONFIGURAÇÃO CENTRAL DA LOJA E ATENDIMENTO
 * =============================================================================
 * 
 * Este arquivo centraliza todas as informações institucionais, regras comerciais,
 * canais de atendimento e parâmetros de entrega da SECRET PARTS.
 * 
 * Todas as alterações feitas aqui são refletidas automaticamente em todo o site:
 * - Cabeçalho, Hero, Rodapé, Modais de Checkout e Orçamento
 * - Link e Mensagens estruturadas do WhatsApp (Varejo e Distribuição)
 * - Tabela regional de frete e prazos
 * 
 * GUIA DE CONFIGURAÇÃO PARA O PROPRIETÁRIO:
 * 1. whatsapp: Coloque o número oficial de WhatsApp da Secret Parts no formato
 *    internacional apenas com dígitos (ex: "5511999999999" onde 55 = Brasil, 11 = DDD).
 * 2. whatsappWholesale: Número específico para atendimento a distribuidores/lojistas
 *    (se vazio, o sistema utiliza o whatsapp principal).
 * 3. email: E-mail comercial para contato institucional e orçamentos.
 * 4. cnpj, address, openingHours: Preencha com os dados reais quando estiverem disponíveis.
 * =============================================================================
 */

export const STORE_CONFIG = {
  // Dados Institucionais
  name: "Secret Parts",
  displayName: "SECRET PARTS",
  tagline: "Faróis automotivos com preço de verdade.",
  subTagline: "Encontre o farol certo para seu veículo, com preços competitivos e entrega rápida na região atendida.",
  
  // NÚMERO OFICIAL DO WHATSAPP (Varejo & Atendimento Geral)
  // IMPORTANTE: Insira apenas números, com código do país (55 para Brasil) e DDD.
  // Exemplo: "5511999999999" (deixe "" para abrir o WhatsApp sem destinatário pré-fixado)
  whatsapp: "", 

  // WHATSAPP EXCLUSIVO PARA ATACADO / DISTRIBUIÇÃO (Opcional)
  // Caso deixe em branco, os pedidos de atacado serão direcionados ao número principal acima.
  whatsappWholesale: "",

  // CANAIS DE CONTATO E REDES SOCIAIS
  email: "contato@secretparts.com.br",
  instagram: "secretparts.farois", // Usuário do Instagram
  phoneDisplay: "(11) 99999-9999",  // Formato visual para exibição nos canais

  // DADOS EMPRESARIAIS (Preencher apenas com informações reais e confirmadas)
  // Se deixados vazios, o site não exibe dados fictícios, mantendo a conformidade e integridade.
  cnpj: "", 
  address: "", // Exemplo: "Av. Automotiva, 1000 - Galpão 4 - São Paulo/SP"
  cityState: "São Paulo - SP",
  openingHours: "Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00",

  // REGRAS DE ATACADO E DISTRIBUIÇÃO
  wholesale: {
    minItemsForWholesale: 4, // Quantidade mínima geral para condições de atacado
    allowDirectInquiry: true,
    discountBadgeText: "Preço especial para Atacado",
    distributorPageTitle: "SECRET PARTS PARA DISTRIBUIDORES",
    distributorPageSubtitle: "Abasteça seu negócio com faróis automotivos e consulte condições comerciais para compras em quantidade.",
  },

  // OPÇÕES REGIONAIS DE ENTREGA (Editável conforme a logística da loja)
  shippingOptions: [
    {
      id: "express_local",
      name: "Entrega Expressa Regional",
      description: "Envio rápido por motoboy / utilitário para a região atendida",
      estimate: "Mesmo dia ou até 24h úteis",
      price: 25.00,
      active: true,
      freeAbove: 500.00, // Frete grátis acima deste valor
    },
    {
      id: "carrier_national",
      name: "Transportadora / Envio Regional Rodoviário",
      description: "Embalagem reforçada anti-impacto especializada para faróis",
      estimate: "2 a 5 dias úteis",
      price: 45.00,
      active: true,
      freeAbove: 1000.00,
    },
    {
      id: "pickup",
      name: "Retirada no Centro de Distribuição",
      description: "Disponível para retirada após confirmação de separação da peça",
      estimate: "Pronto em até 2h após confirmação",
      price: 0.00,
      active: true,
    }
  ],

  // POLÍTICAS COMERCIAIS
  warranty: "Garantia legal de 90 dias contra defeitos de fabricação e encaixe",
  returnPolicy: "Troca garantida em caso de divergência de modelo ou lado",
  currencySymbol: "R$",
  priceConsultLabel: "Sob consulta",

  // SENHA PADRÃO DE ACESSO AO PAINEL ADMINISTRATIVO INTERNO (Antigravity Admin)
  // Pode ser alterada livremente
  adminPin: "secretparts2026",
};
