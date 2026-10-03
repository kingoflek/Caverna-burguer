import { STORE_CONFIG } from '../config/store.js';
import { formatPrice } from './format.js';

/**
 * Constrói a mensagem formatada para envio ao WhatsApp
 */
export function buildWhatsAppMessage({ items, customer, generalNotes, subtotal, hasUnpricedItems }) {
  const lines = [];

  lines.push(`Olá! Quero fazer um pedido na ${STORE_CONFIG.name} 🍔`);
  lines.push('');
  lines.push('*MEU PEDIDO*');
  lines.push('');

  items.forEach(item => {
    const itemPriceText = item.price > 0 ? formatPrice(item.price * item.quantity) : STORE_CONFIG.priceConsultLabel;
    lines.push(`${item.quantity}x ${item.name} - ${itemPriceText}`);
    
    if (item.observation && item.observation.trim()) {
      lines.push(`   _Obs: ${item.observation.trim()}_`);
    }
  });

  lines.push('');

  if (hasUnpricedItems || subtotal === 0) {
    lines.push(`*TOTAL: A consultar / confirmar com a hamburgueria*`);
  } else {
    lines.push(`*TOTAL: ${formatPrice(subtotal)}*`);
  }

  lines.push('');
  lines.push('*DADOS DO CLIENTE*');
  lines.push('');
  lines.push(`Nome: ${customer.name || 'Não informado'}`);
  lines.push(`Telefone: ${customer.phone || 'Não informado'}`);
  lines.push('');
  
  const isDelivery = customer.orderType === 'delivery';
  lines.push(`*TIPO DE PEDIDO:*`);
  lines.push(isDelivery ? 'Entrega' : 'Retirada no Local');

  if (isDelivery) {
    lines.push('');
    lines.push('*ENDEREÇO:*');
    lines.push(`${customer.street || ''}${customer.number ? `, ${customer.number}` : ''}`);
    if (customer.neighborhood) {
      lines.push(`Bairro: ${customer.neighborhood}`);
    }
    if (customer.complement) {
      lines.push(`Complemento: ${customer.complement}`);
    }
    if (customer.reference) {
      lines.push(`Referência: ${customer.reference}`);
    }
  }

  // Observações adicionais
  if (generalNotes && generalNotes.trim()) {
    lines.push('');
    lines.push('*OBSERVAÇÕES DO PEDIDO:*');
    lines.push(generalNotes.trim());
  }

  lines.push('');
  lines.push('Aguardo a confirmação do pedido!');

  return lines.join('\n');
}

/**
 * Gera o link para abrir o WhatsApp com a mensagem pronta
 */
export function generateWhatsAppUrl(orderData) {
  const message = buildWhatsAppMessage(orderData);
  const encodedText = encodeURIComponent(message);
  
  // Limpa caracteres especiais do telefone da loja (se configurado)
  const storePhone = (STORE_CONFIG.whatsapp || '').replace(/\D/g, '');

  if (storePhone) {
    return `https://api.whatsapp.com/send?phone=${storePhone}&text=${encodedText}`;
  } else {
    // Se o dono da loja ainda não preencheu o número, abre o WhatsApp para escolher contato
    return `https://api.whatsapp.com/send?text=${encodedText}`;
  }
}
