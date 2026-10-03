import { PRODUCTS, CATEGORIES, getProductsByCategory, getFeaturedProducts, getProductById } from './src/data/products.js';
import { STORE_CONFIG } from './src/config/store.js';
import { formatPrice, maskPhone } from './src/utils/format.js';
import { buildWhatsAppMessage, generateWhatsAppUrl } from './src/utils/whatsapp.js';
import assert from 'assert';

console.log('🍔 ========================================');
console.log('   INICIANDO BATERIA DE TESTES CAVERNA BURGER');
console.log('========================================\n');

// 1. Verificar configuração da loja
console.log('1. Testando STORE_CONFIG...');
assert.strictEqual(STORE_CONFIG.name, 'Caverna Burger');
assert.strictEqual(typeof STORE_CONFIG.whatsapp, 'string');
assert.strictEqual(typeof STORE_CONFIG.instagram, 'string');
assert.strictEqual(typeof STORE_CONFIG.address, 'string');
assert.strictEqual(typeof STORE_CONFIG.openingHours, 'string');
console.log('   ✓ Configuração da loja validada com sucesso.');

// 2. Verificar produtos e categorias
console.log('\n2. Testando PRODUCTS e CATEGORIES...');
assert.strictEqual(PRODUCTS.length, 18, `Esperado 18 produtos, encontrado ${PRODUCTS.length}`);

const expectedCategories = ['burgers', 'smash', 'milkshakes'];
const actualCategoryIds = CATEGORIES.map(c => c.id);
expectedCategories.forEach(cat => {
  assert(actualCategoryIds.includes(cat), `Categoria ${cat} não encontrada.`);
});

// Verifica contagem por categoria
const burgers150g = PRODUCTS.filter(p => p.category === 'burgers');
const smashBurgers = PRODUCTS.filter(p => p.category === 'smash');
const milkshakes = PRODUCTS.filter(p => p.category === 'milkshakes');

assert.strictEqual(burgers150g.length, 9, `Esperado 9 burgers 150g, encontrado ${burgers150g.length}`);
assert.strictEqual(smashBurgers.length, 5, `Esperado 5 smash burgers, encontrado ${smashBurgers.length}`);
assert.strictEqual(milkshakes.length, 4, `Esperado 4 milkshakes, encontrado ${milkshakes.length}`);

console.log(`   ✓ 18 produtos cadastrados: ${burgers150g.length} Burgers 150g, ${smashBurgers.length} Smash, ${milkshakes.length} Milkshakes.`);

// 3. Verificar que nenhum produto tem preço inventado (preço padrão deve ser 0)
console.log('\n3. Testando regra de preços (não inventar preços)...');
PRODUCTS.forEach(p => {
  assert.strictEqual(p.price, 0, `Produto ${p.name} possui preço diferente de 0!`);
  assert(p.image.startsWith('/images/products/'), `Produto ${p.name} imagem fora do padrão: ${p.image}`);
});
console.log('   ✓ Todos os 18 produtos iniciam com price: 0 conforme especificação.');

// 4. Testar formatPrice
console.log('\n4. Testando formatador de preços (formatPrice)...');
assert.strictEqual(formatPrice(0), 'Consultar');
assert.strictEqual(formatPrice(null), 'Consultar');
assert.strictEqual(formatPrice(undefined), 'Consultar');
assert.strictEqual(formatPrice(32.50).replace(/\s/g, ' '), 'R$ 32,50');
console.log('   ✓ formatPrice retorna "Consultar" para 0 e formata corretamente em R$ para valores numéricos.');

// 5. Testar máscara de telefone
console.log('\n5. Testando máscara de telefone...');
assert.strictEqual(maskPhone('11999998888'), '(11) 99999-8888');
assert.strictEqual(maskPhone('1133334444'), '(11) 3333-4444');
console.log('   ✓ Máscara de telefone aplicada perfeitamente.');

// 6. Testar geração de mensagem de WhatsApp - FLUXO ENTREGA
console.log('\n6. Testando WhatsApp com Entrega...');
const cartWithDelivery = {
  items: [
    {
      id: 'item-1',
      name: 'Caverna Burguer',
      price: 0,
      quantity: 1,
      observation: '',
    },
    {
      id: 'item-2',
      name: 'Caverna Bacon',
      price: 0,
      quantity: 2,
      observation: 'Sem cebola',
    },
    {
      id: 'item-3',
      name: 'Milkshake de Oreo',
      price: 0,
      quantity: 1,
      observation: '',
    }
  ],
  customer: {
    name: 'João',
    phone: '(11) 99999-8888',
    orderType: 'delivery',
    street: 'Rua Exemplo',
    number: '123',
    neighborhood: 'Centro',
    complement: 'Casa',
    reference: 'Próximo à praça',
  },
  generalNotes: 'Sem cebola no Caverna Bacon.',
  subtotal: 0,
  hasUnpricedItems: true,
};

const msgDelivery = buildWhatsAppMessage(cartWithDelivery);
console.log('--- MENSAGEM GERADA (ENTREGA) ---');
console.log(msgDelivery);
console.log('---------------------------------');

assert(msgDelivery.includes('1x Caverna Burguer'));
assert(msgDelivery.includes('2x Caverna Bacon'));
assert(msgDelivery.includes('Obs: Sem cebola'));
assert(msgDelivery.includes('1x Milkshake de Oreo'));
assert(msgDelivery.includes('Nome: João'));
assert(msgDelivery.includes('(11) 99999-8888'));
assert(msgDelivery.includes('*TIPO DE PEDIDO:*\nEntrega'));
assert(msgDelivery.includes('Rua Exemplo, 123'));
assert(msgDelivery.includes('Bairro: Centro'));
assert(msgDelivery.includes('Complemento: Casa'));
assert(msgDelivery.includes('Referência: Próximo à praça'));
assert(msgDelivery.includes('Sem cebola no Caverna Bacon.'));
console.log('   ✓ Mensagem de entrega corresponde 100% ao modelo exigido!');

// 7. Testar geração de mensagem de WhatsApp - FLUXO RETIRADA
console.log('\n7. Testando WhatsApp com Retirada no Local...');
const cartWithPickup = {
  items: [
    {
      id: 'item-1',
      name: 'Smash Caverna Bacon',
      price: 25.00,
      quantity: 2,
      observation: 'Molho separado',
    }
  ],
  customer: {
    name: 'Maria',
    phone: '(11) 98888-7777',
    orderType: 'pickup',
    street: '',
    number: '',
    neighborhood: '',
  },
  generalNotes: '',
  subtotal: 50.00,
  hasUnpricedItems: false,
};

const msgPickup = buildWhatsAppMessage(cartWithPickup);
console.log('--- MENSAGEM GERADA (RETIRADA) ---');
console.log(msgPickup);
console.log('----------------------------------');

const normalizedMsgPickup = msgPickup.replace(/\u00A0/g, ' ');
assert(normalizedMsgPickup.includes('2x Smash Caverna Bacon - R$ 50,00'));
assert(normalizedMsgPickup.includes('Obs: Molho separado'));
assert(normalizedMsgPickup.includes('*TOTAL: R$ 50,00*'));
assert(msgPickup.includes('Nome: Maria'));
assert(msgPickup.includes('*TIPO DE PEDIDO:*\nRetirada no Local'));
assert(!msgPickup.includes('*ENDEREÇO:*'), 'Retirada NÃO deve conter seção de endereço!');
console.log('   ✓ Retirada no local validada (sem endereço exigido).');

// 8. Testar geração da URL do WhatsApp
console.log('\n8. Testando URL do WhatsApp...');
const url = generateWhatsAppUrl(cartWithDelivery);
assert(url.startsWith('https://api.whatsapp.com/send?'));
assert(url.includes('text='));
console.log('   ✓ URL do WhatsApp codificada com sucesso.');

console.log('\n🎉 TODOS OS TESTES PASSARAM COM 100% DE SUCESSO!\n');
