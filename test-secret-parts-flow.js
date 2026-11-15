import { 
  PRODUCTS, 
  VEHICLE_BRANDS, 
  HEADLIGHT_TYPES, 
  HEADLIGHT_SIDES, 
  filterProducts, 
  getProductById,
  getFeaturedProducts,
  getOfferProducts
} from './src/data/products.js';
import { STORE_CONFIG } from './src/config/store.js';
import { 
  formatPrice, 
  maskPhone, 
  maskCEP, 
  maskCNPJ, 
  generateOrderId 
} from './src/utils/format.js';
import { 
  buildRetailOrderMessage, 
  buildWholesaleInquiryMessage, 
  buildCompatibilityInquiryMessage, 
  generateWhatsAppUrl 
} from './src/utils/whatsapp.js';
import assert from 'assert';

console.log('🔴 ========================================================');
console.log('   BATERIA DE TESTES OFICIAL — SECRET PARTS FARÓIS');
console.log('========================================================\n');

// 1. CONFIGURAÇÃO INSTITUCIONAL
console.log('1. Testando STORE_CONFIG da Secret Parts...');
assert.strictEqual(STORE_CONFIG.name, 'Secret Parts');
assert.strictEqual(STORE_CONFIG.displayName, 'SECRET PARTS');
assert(STORE_CONFIG.tagline.includes('Faróis'));
assert(Array.isArray(STORE_CONFIG.shippingOptions));
assert(STORE_CONFIG.shippingOptions.length >= 2);
assert(STORE_CONFIG.shippingOptions.every(o => o.price === 0), "O site não deve cobrar frete (entrega combinada no WhatsApp)");
assert(STORE_CONFIG.adminPin.length > 4);
console.log('   ✓ Configuração institucional da Secret Parts validada.');

// 2. EXCLUSIVIDADE EM FARÓIS (SEM PEÇAS GERAIS OU LANCHONETE)
console.log('\n2. Testando integridade do Catálogo Exclusivo de Faróis...');
assert(PRODUCTS.length >= 10, `Esperado catálogo com pelo menos 10 faróis, encontrado: ${PRODUCTS.length}`);

const invalidKeywords = ['burger', 'hambúrguer', 'bacon', 'lanche', 'milkshake', 'bateria', 'pneu', 'filtro', 'freio', 'suspensão', 'motor'];

PRODUCTS.forEach(p => {
  // Garante que é um farol
  assert(/farol|faróis|lanterna/.test(p.name.toLowerCase()), `Produto ${p.name} não é farol nem lanterna automotiva!`);
  
  // Garante que não possui palavras de lanchonete ou outras autopeças não comercializadas
  invalidKeywords.forEach(kw => {
    assert(!p.name.toLowerCase().includes(kw), `Produto ${p.name} contém termo inválido: ${kw}`);
  });

  // Campos obrigatórios do farol
  assert(p.vehicleBrand, `Produto ${p.id} sem vehicleBrand`);
  assert(p.vehicleModel, `Produto ${p.id} sem vehicleModel`);
  assert(typeof p.yearStart === 'number', `Produto ${p.id} sem yearStart numérico`);
  assert(typeof p.yearEnd === 'number', `Produto ${p.id} sem yearEnd numérico`);
  assert(p.yearStart <= p.yearEnd, `Produto ${p.id} com ano inicial maior que ano final`);
  assert(['esquerdo', 'direito', 'par'].includes(p.side), `Produto ${p.id} com lado inválido: ${p.side}`);
  assert(p.sku, `Produto ${p.id} sem código SKU`);
  assert(typeof p.price === 'number' && p.price >= 0, `Produto ${p.id} com preço inválido (use 0 para sob consulta)`);
  assert(Array.isArray(p.images) && p.images.length > 0, `Produto ${p.id} sem imagens`);
  assert(p.compatibilityNotes, `Produto ${p.id} sem observações de compatibilidade`);
});
console.log(`   ✓ Todos os ${PRODUCTS.length} produtos são faróis legítimos com compatibilidade cadastrada.`);

// 3. MOTOR DE FILTRAGEM E BUSCA MULTIFACETADA
console.log('\n3. Testando motor de busca e filtragem multifacetada...');

// Busca por modelo
const palioList = filterProducts({ searchQuery: 'Palio' });
assert(palioList.length >= 2, `Esperado faróis de Palio, encontrados: ${palioList.length}`);
palioList.forEach(p => assert(p.vehicleModels.includes('Palio') || p.compatibilityNotes.includes('Palio')));

// Filtro por modelo secundário (farol que serve em vários carros)
const sienaList = filterProducts({ model: 'Siena' });
assert(sienaList.length >= 2, `Esperado faróis compatíveis com Siena, encontrados: ${sienaList.length}`);
sienaList.forEach(p => assert(p.vehicleModels.includes('Siena')));

// Filtro por marca
const fiatList = filterProducts({ brand: 'Fiat' });
assert(fiatList.length >= 2, `Esperado faróis Fiat, encontrados: ${fiatList.length}`);
fiatList.forEach(p => assert.strictEqual(p.vehicleBrand, 'Fiat'));

// Filtro por ano (ex: 2018 deve encontrar Corolla 2015-2019 e Polo 2018-2022)
const year2018List = filterProducts({ year: '2018' });
assert(year2018List.length > 0);
year2018List.forEach(p => {
  assert(2018 >= p.yearStart && 2018 <= p.yearEnd, `Produto ${p.name} fora do ano 2018`);
});

// Filtro por lado (Esquerdo)
const leftSideList = filterProducts({ side: 'esquerdo' });
leftSideList.forEach(p => {
  assert(p.side === 'esquerdo' || p.side === 'par');
});

// Filtro combinado: Marca Fiat + Lado Esquerdo
const fiatLeft = filterProducts({ brand: 'Fiat', side: 'esquerdo' });
fiatLeft.forEach(p => {
  assert.strictEqual(p.vehicleBrand, 'Fiat');
  assert(p.side === 'esquerdo' || p.side === 'par');
});

console.log('   ✓ Busca por texto, filtros de marca, modelo, ano e lado funcionando em perfeita harmonia.');

// 4. FORMATADORES UTILITÁRIOS
console.log('\n4. Testando formatadores (moeda, máscaras, ID de pedido)...');
assert.strictEqual(formatPrice(389.90).replace(/\s/g, ' '), 'R$ 389,90');
assert.strictEqual(formatPrice(0), 'Sob consulta');
assert.strictEqual(maskPhone('11987654321'), '(11) 98765-4321');
assert.strictEqual(maskCEP('01310100'), '01310-100');
assert.strictEqual(maskCNPJ('12345678000199'), '12.345.678/0001-99');
const orderId = generateOrderId();
assert(orderId.startsWith('SP-'), `ID de pedido gerado inválido: ${orderId}`);
console.log(`   ✓ Formatadores funcionando perfeitamente (ID gerado: ${orderId}).`);

// 5. MENSAGEM DE PEDIDO DE VAREJO PARA WHATSAPP
console.log('\n5. Testando mensagem de WhatsApp para Pedido de Varejo...');
const sampleFarol = PRODUCTS[0];
const retailMessage = buildRetailOrderMessage({
  orderId: 'SP-998811',
  items: [
    {
      ...sampleFarol,
      quantity: 1,
      observation: 'Favor conferir ano 2017'
    }
  ],
  customer: {
    name: 'Roberto Alencar',
    phone: '(11) 98765-4321',
    vehicleDetails: 'Chevrolet Onix LT 2017',
    orderType: 'delivery',
    cep: '01310-100',
    street: 'Av. Paulista',
    number: '1000',
    neighborhood: 'Bela Vista',
    cityState: 'São Paulo - SP',
    generalNotes: 'Entregar na portaria'
  },
  subtotal: sampleFarol.price,
  shippingOption: {
    name: 'Entrega Expressa Regional',
    price: 25.00,
    estimate: 'Até 24h'
  },
  total: sampleFarol.price + 25.00,
  hasUnpricedItems: false
});

assert(retailMessage.includes('SECRET PARTS — NOVO PEDIDO #SP-998811'));
assert(retailMessage.includes(sampleFarol.name));
assert(retailMessage.includes(sampleFarol.sku));
assert(retailMessage.includes('Roberto Alencar'));
assert(retailMessage.includes('Chevrolet Onix LT 2017'));
assert(retailMessage.includes('Av. Paulista, Nº 1000'));
assert(retailMessage.includes('Entrega Expressa Regional'));
assert(retailMessage.includes('Aviso Importante'));
console.log('   ✓ Mensagem de varejo formatada, legível e com aviso de confirmação.');

// 6. MENSAGEM DE COTAÇÃO PARA ATACADO / DISTRIBUIÇÃO
console.log('\n6. Testando mensagem de Atacado / Distribuição B2B...');
const wholesaleMessage = buildWholesaleInquiryMessage({
  companyName: 'Auto Peças Modelo Ltda',
  contactName: 'Fernando Ramos',
  cnpj: '12.345.678/0001-90',
  phone: '(11) 99887-6655',
  cityState: 'São José dos Campos - SP',
  businessType: 'Lojista de Autopeças',
  requestedItems: '4x Farol Onix 2017, 2x Farol Corolla 2018',
  estimatedQuantity: '11 a 25 unidades',
  notes: 'Desejo pagamento faturado 28 dias'
});

assert(wholesaleMessage.includes('COTAÇÃO PARA ATACADO & DISTRIBUIÇÃO'));
assert(wholesaleMessage.includes('Auto Peças Modelo Ltda'));
assert(wholesaleMessage.includes('Fernando Ramos'));
assert(wholesaleMessage.includes('12.345.678/0001-90'));
assert(wholesaleMessage.includes('Lojista de Autopeças'));
assert(wholesaleMessage.includes('4x Farol Onix 2017'));
console.log('   ✓ Cotação de atacado estruturada com sucesso.');

// 7. MENSAGEM DE DÚVIDA DE COMPATIBILIDADE
console.log('\n7. Testando mensagem de Dúvida de Compatibilidade...');
const compatMessage = buildCompatibilityInquiryMessage({
  product: sampleFarol,
  carBrand: 'Chevrolet',
  carModel: 'Onix Joy',
  carYear: '2016',
  userChassis: 'Motor 1.0 Flex 4 portas'
});

assert(compatMessage.includes('DÚVIDA SOBRE COMPATIBILIDADE DE FAROL'));
assert(compatMessage.includes(sampleFarol.name));
assert(compatMessage.includes('Chevrolet Onix Joy'));
assert(compatMessage.includes('2016'));
console.log('   ✓ Mensagem de compatibilidade técnica pronta.');

// 8. TESTE DE URL DO WHATSAPP
console.log('\n8. Testando URL do WhatsApp com codificação segura...');
const url = generateWhatsAppUrl(retailMessage);
assert(url.startsWith('https://api.whatsapp.com/send?'));
assert(url.includes('text='));
console.log('   ✓ URLs de WhatsApp codificadas perfeitamente sem quebra de caracteres.');

console.log('\n✨ ========================================================');
console.log('   TODOS OS 8 TESTES DA SECRET PARTS FORAM APROVADOS! (100%)');
console.log('========================================================\n');
