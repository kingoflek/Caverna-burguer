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

  // ENTREGA: o site não cobra frete. Entrega local sem custo (fidelização);
  // prazo e detalhes são combinados com o cliente no WhatsApp.
  shippingLabel: "A combinar no WhatsApp",
  shippingOptions: [
    {
      id: "local_delivery",
      name: "Entrega Local",
      description: "Entregamos na região sem custo adicional. Prazo combinado no WhatsApp.",
      estimate: "Combinado no atendimento",
      price: 0,
      active: true,
    },
    {
      id: "pickup",
      name: "Retirada no Local",
      description: "Retire a peça após a confirmação do pedido pelo WhatsApp.",
      estimate: "Após confirmação",
      price: 0,
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
