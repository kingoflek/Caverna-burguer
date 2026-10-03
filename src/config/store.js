/**
 * =============================================================================
 * CAVERNA BURGER - CONFIGURAÇÃO CENTRAL DA LOJA
 * =============================================================================
 * 
 * Este arquivo centraliza todas as informações institucionais e canais de contato.
 * Qualquer alteração feita aqui reflete automaticamente em todo o site:
 * Header, Rodapé, Seção Sobre, Seção de Contato e Link do WhatsApp.
 * 
 * INSTRUÇÕES PARA O PROPRIETÁRIO:
 * 1. whatsapp: Coloque o número do WhatsApp da Caverna Burger no formato internacional
 *    (código do país + DDD + número, apenas dígitos).
 *    Exemplo: "5511999999999" (55 = Brasil, 11 = DDD, 999999999 = celular)
 * 
 * 2. instagram: Coloque o usuário do Instagram sem o '@' ou o link completo.
 *    Exemplo: "cavernaburger" ou "https://instagram.com/cavernaburger"
 * 
 * 3. address: Coloque o endereço oficial da hamburgueria.
 *    Exemplo: "Av. Principal, 123 - Centro"
 * 
 * 4. openingHours: Coloque os dias e horários de atendimento.
 *    Exemplo: "Terça a Domingo: 18:00 às 23:30"
 * =============================================================================
 */

export const STORE_CONFIG = {
  // Nome da marca
  name: "Caverna Burger",
  displayName: "CAVERNA BURGER",
  
  // Chamada de destaque
  tagline: "O sabor que sai da Caverna.",
  subTagline: "Hambúrguer artesanal, ingredientes selecionados e muito sabor.",
  
  // NÚMERO DO WHATSAPP
  // IMPORTANTE: Insira apenas números, com código do país (55 para Brasil) e DDD.
  // Exemplo: "5511999999999"
  whatsapp: "", 

  // INSTAGRAM
  // Exemplo: "cavernaburger"
  instagram: "",

  // ENDEREÇO DA HAMBURGUERIA
  // Exemplo: "Rua Exemplo, 123 - Bairro - Cidade/UF"
  address: "",

  // HORÁRIOS DE ATENDIMENTO
  // Exemplo: "Terça a Domingo das 18h00 às 23h30"
  openingHours: "",

  // Ano de fundação presente na logo da marca
  foundedYear: 2021,

  // Moeda
  currencySymbol: "R$",

  // Texto padrão quando o preço não foi informado
  priceConsultLabel: "Consultar",
};
