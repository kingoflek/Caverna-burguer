import { STORE_CONFIG } from '../config/store.js';

/**
 * Formata um valor numérico para o padrão de moeda brasileiro (R$ 00,00).
 * Se o preço for 0, nulo ou não definido, retorna "Sob consulta".
 */
export function formatPrice(price) {
  if (price === undefined || price === null || price === 0 || price === "0") {
    return STORE_CONFIG.priceConsultLabel || "Sob consulta";
  }

  const numeric = typeof price === 'number' ? price : parseFloat(price);
  if (isNaN(numeric) || numeric === 0) {
    return STORE_CONFIG.priceConsultLabel || "Sob consulta";
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

/**
 * Aplica máscara de CEP brasileiro: XXXXX-XXX
 */
export function maskCEP(value) {
  if (!value) return '';
  const cleaned = value.replace(/\D/g, '').slice(0, 8);
  if (cleaned.length <= 5) return cleaned;
  return `${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
}

/**
 * Aplica máscara de CNPJ brasileiro: XX.XXX.XXX/XXXX-XX
 */
export function maskCNPJ(value) {
  if (!value) return '';
  const cleaned = value.replace(/\D/g, '').slice(0, 14);
  if (cleaned.length <= 2) return cleaned;
  if (cleaned.length <= 5) return `${cleaned.slice(0, 2)}.${cleaned.slice(2)}`;
  if (cleaned.length <= 8) return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5)}`;
  if (cleaned.length <= 12) return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5, 8)}/${cleaned.slice(8)}`;
  return `${cleaned.slice(0, 2)}.${cleaned.slice(2, 5)}.${cleaned.slice(5, 8)}/${cleaned.slice(8, 12)}-${cleaned.slice(12)}`;
}

/**
 * Gera um identificador único e profissional para o pedido
 */
export function generateOrderId() {
  const timestamp = Date.now().toString().slice(-4);
  const random = Math.floor(1000 + Math.random() * 9000);
  return `SP-${timestamp}${random}`;
}
