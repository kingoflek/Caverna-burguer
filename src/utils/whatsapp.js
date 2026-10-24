import { STORE_CONFIG } from '../config/store.js';
import { formatPrice } from './format.js';

/**
 * Constrói a mensagem formatada para envio do Pedido de Varejo ao WhatsApp
 */
export function buildRetailOrderMessage({
  orderId,
  items,
  customer,
  subtotal,
  shippingOption,
  total,
  hasUnpricedItems
}) {
  const lines = [];

  lines.push(`🔴 *SECRET PARTS — NOVO PEDIDO #${orderId || 'SP-SITE'}*`);
  lines.push(`_Especialista Exclusiva em Faróis Automotivos_`);
  lines.push('');
  lines.push(`Olá! Gostaria de confirmar a disponibilidade e finalizar o pedido do site:`);
  lines.push('');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('📦 *FARÓIS SOLICITADOS*');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  items.forEach((item, index) => {
    const itemPriceText = item.price > 0 ? formatPrice(item.price) : 'Sob consulta';
    const subtotalText = item.price > 0 ? formatPrice(item.price * item.quantity) : 'A calcular';
    
    lines.push(`*${index + 1}. ${item.name}*`);
    if (item.sku) lines.push(`   • Cód. Secret Parts: \`${item.sku}\``);
    if (item.oemCode) lines.push(`   • Código Original (OEM): \`${item.oemCode}\``);
    if (item.vehicleBrand && item.vehicleModel) {
      lines.push(`   • Aplicação: ${item.vehicleBrand} ${item.vehicleModel} (${item.yearStart} a ${item.yearEnd})`);
    }
    if (item.sideLabel) lines.push(`   • Posição: ${item.sideLabel}`);
    lines.push(`   • Qtd: ${item.quantity} un. x ${itemPriceText} = *${subtotalText}*`);

    if (item.observation && item.observation.trim()) {
      lines.push(`   • _Nota técnica: ${item.observation.trim()}_`);
    }
    lines.push('');
  });

  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('💰 *VALORES ESTIMADOS*');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push(`Subtotal dos Faróis: ${hasUnpricedItems ? 'Sob consulta' : formatPrice(subtotal)}`);
  
  if (shippingOption) {
    const shippingPrice = shippingOption.price > 0 ? formatPrice(shippingOption.price) : 'Grátis / A combinar';
    lines.push(`Opção de Envio: ${shippingOption.name} (${shippingPrice})`);
    if (shippingOption.estimate) {
      lines.push(`Prazo Estimado: ${shippingOption.estimate}`);
    }
  }

  const finalTotalText = hasUnpricedItems || total === 0 ? 'A confirmar com a equipe' : formatPrice(total);
  lines.push(`*TOTAL DO PEDIDO: ${finalTotalText}*`);
  lines.push('');

  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('👤 *DADOS DO COMPRADOR & ENTREGA*');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push(`Nome: ${customer.name || 'Não informado'}`);
  lines.push(`WhatsApp: ${customer.phone || 'Não informado'}`);
  
  if (customer.vehicleDetails && customer.vehicleDetails.trim()) {
    lines.push(`Veículo do Cliente: ${customer.vehicleDetails.trim()}`);
  }

  const isDelivery = customer.orderType === 'delivery';
  lines.push(`Modalidade: ${isDelivery ? 'Entrega no Endereço' : 'Retirada no Centro de Distribuição'}`);

  if (isDelivery) {
    if (customer.cep) lines.push(`CEP: ${customer.cep}`);
    lines.push(`Endereço: ${customer.street || ''}${customer.number ? `, Nº ${customer.number}` : ''}`);
    if (customer.neighborhood) lines.push(`Bairro: ${customer.neighborhood}`);
    if (customer.cityState) lines.push(`Cidade/UF: ${customer.cityState}`);
    if (customer.complement) lines.push(`Complemento: ${customer.complement}`);
    if (customer.reference) lines.push(`Ponto de Referência: ${customer.reference}`);
  }

  if (customer.generalNotes && customer.generalNotes.trim()) {
    lines.push('');
    lines.push('📝 *OBSERVAÇÕES:*');
    lines.push(`"${customer.generalNotes.trim()}"`);
  }

  lines.push('');
  lines.push('⚠️ *Aviso Importante:* _Mensagem gerada pelo site. O pedido será confirmado após conferência de estoque e dados de pagamento com o atendente._');

  return lines.join('\n');
}

/**
 * Constrói a mensagem formatada para Cotação de Atacado / Distribuição
 */
export function buildWholesaleInquiryMessage({
  companyName,
  contactName,
  cnpj,
  phone,
  cityState,
  businessType,
  requestedItems,
  estimatedQuantity,
  notes
}) {
  const lines = [];

  lines.push(`🔴 *SECRET PARTS — COTAÇÃO PARA ATACADO & DISTRIBUIÇÃO*`);
  lines.push(`_Abastecimento de Faróis Automotivos em Quantidade_`);
  lines.push('');
  lines.push(`Olá equipe comercial Secret Parts! Gostaria de receber uma proposta especial de atacado:`);
  lines.push('');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('🏢 *DADOS DA EMPRESA / REVENDEDOR*');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push(`Razão Social / Loja: *${companyName || contactName}*`);
  lines.push(`Responsável Comercial: ${contactName}`);
  if (cnpj && cnpj.trim()) lines.push(`CNPJ: ${cnpj}`);
  lines.push(`Segmento: *${businessType || 'Lojista / Oficina'}*`);
  lines.push(`Localidade: ${cityState}`);
  lines.push(`WhatsApp de Contato: ${phone}`);
  lines.push('');

  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push('📋 *FARÓIS DE INTERESSE & VOLUMES*');
  lines.push('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  lines.push(`Peças / Modelos Desejados:\n${requestedItems || 'Grade de faróis sob consulta'}`);
  lines.push(`Volume Estimado: *${estimatedQuantity || 'A combinar'}*`);

  if (notes && notes.trim()) {
    lines.push('');
    lines.push('Observações / Requisitos Especiais:');
    lines.push(`"${notes.trim()}"`);
  }

  lines.push('');
  lines.push('Aguardamos o retorno com a tabela de preços de atacado e condições de frete/pagamento!');

  return lines.join('\n');
}

/**
 * Constrói mensagem direta de Dúvida sobre Compatibilidade Técnica
 */
export function buildCompatibilityInquiryMessage({ product, carBrand, carModel, carYear, userChassis }) {
  const lines = [];

  lines.push(`🔴 *SECRET PARTS — DÚVIDA SOBRE COMPATIBILIDADE DE FAROL*`);
  lines.push('');
  lines.push(`Olá! Gostaria de confirmar se este farol serve perfeitamente no meu veículo antes de comprar:`);
  lines.push('');
  lines.push(`*Farol:* ${product.name}`);
  if (product.sku) lines.push(`*Código SP:* ${product.sku}`);
  if (product.oemCode) lines.push(`*Código OEM:* ${product.oemCode}`);
  lines.push(`*Lado:* ${product.sideLabel || product.side}`);
  lines.push('');
  lines.push(`*MEU CARRO:*`);
  lines.push(`• Marca/Modelo: ${carBrand || 'Não informado'} ${carModel || ''}`);
  lines.push(`• Ano de Fabricação/Modelo: ${carYear || 'Não informado'}`);
  if (userChassis) lines.push(`• Chassi / Versão: ${userChassis}`);
  lines.push('');
  lines.push('Podem confirmar se o encaixe e o chicote são compatíveis? Obrigado!');

  return lines.join('\n');
}

/**
 * Gera URL oficial de envio para o WhatsApp
 */
export function generateWhatsAppUrl(message, isWholesale = false) {
  const encodedText = encodeURIComponent(message);
  
  // Utiliza o número específico de atacado se aplicável, senão o principal
  let targetPhone = isWholesale && STORE_CONFIG.whatsappWholesale
    ? STORE_CONFIG.whatsappWholesale
    : STORE_CONFIG.whatsapp;

  const cleanPhone = (targetPhone || '').replace(/\D/g, '');

  if (cleanPhone) {
    return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedText}`;
  } else {
    // Se o número oficial ainda não foi preenchido, abre o seletor do WhatsApp
    return `https://api.whatsapp.com/send?text=${encodedText}`;
  }
}
