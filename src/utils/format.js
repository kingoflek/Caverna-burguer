import { STORE_CONFIG } from '../config/store.js';

/**
 * Formata um valor numérico para o padrão de moeda brasileiro (R$ 00,00).
 * Se o preço for 0, nulo ou não definido, retorna "Consultar".
 */
export function formatPrice(price) {
  if (price === undefined || price === null || price === 0 || price === "0") {
    return STORE_CONFIG.priceConsultLabel || "Consultar";
  }

  const numeric = typeof price === 'number' ? price : parseFloat(price);
  if (isNaN(numeric) || numeric === 0) {
    return STORE_CONFIG.priceConsultLabel || "Consultar";
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numeric);
}

/**
 * Aplica máscara de telefone brasileiro: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
 */
export function maskPhone(value) {
  if (!value) return '';
  const cleaned = value.replace(/\D/g, '');
  if (cleaned.length <= 2) return `(${cleaned}`;
  if (cleaned.length <= 6) return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
  if (cleaned.length <= 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7, 11)}`;
}
