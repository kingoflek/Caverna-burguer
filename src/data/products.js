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
 * - vehicleModel: Modelo principal do veículo (ex: "Palio")
 * - vehicleModels: Todos os modelos compatíveis (ex: ["Palio", "Siena", "Strada"])
 * - category: "farol" ou "lanterna"
 * - yearStart: Ano inicial de compatibilidade (ex: 2012)
 * - yearEnd: Ano final de compatibilidade (ex: 2019)
 * - version: Versões compatíveis (ex: "Joy, LT, LTZ, Effect, Activ")
 * - side: Lado de instalação: "esquerdo" (motorista), "direito" (passageiro) ou "par"
 * - type: Tipo ("mascara-negra", "cromado", "foco-duplo", "monoparabola", "padrao", "lanterna-traseira")
 * - manufacturer: Fabricante da peça (Arteb, Valeo, Magneti Marelli, Depo, TYC, Orgus)
 * - condition: Condição da peça ("Novo na caixa com garantia")
 * - price: Preço unitário de varejo em reais (ex: 389.90). Use 0 para "Sob consulta"
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
  "Fiat",
  "Volkswagen"
];

export const HEADLIGHT_TYPES = [
  { id: "all", name: "Todos os Tipos" },
  { id: "mascara-negra", name: "Máscara Negra" },
  { id: "cromado", name: "Cromado" },
  { id: "foco-duplo", name: "Foco Duplo" },
  { id: "monoparabola", name: "Monoparábola" },
  { id: "padrao", name: "Padrão Original" },
  { id: "lanterna-traseira", name: "Lanterna Traseira" },
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

// =============================================================================
// CATÁLOGO AN ACTION (edição 2026) — 40 modelos x 2 lados = 80 produtos.
// Preço sob consulta (price: 0). Fotos provisórias tiradas do PDF do catálogo:
// photoPending: true -> trocar pela foto definitiva em public/images/products/<SKU>.jpg
// catalogReview: true -> o catálogo pede "conferir cadastro" (lado/código divergente)
// yearEstimated: true -> o catálogo só informa o ano inicial; ano final estimado
// =============================================================================
export const PRODUCTS = [
  {
    "id": "on0169d",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada / Weekend G3 (Zoião) Cromado Aro Preto - Lado Direito",
    "slug": "farol-dianteiro-palio-siena-strada-weekend-g3-zoiao-cromado-aro-preto-direito-on0169d",
    "sku": "ON0169D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada",
      "Weekend"
    ],
    "yearStart": 2004,
    "yearEnd": 2014,
    "version": "Palio, Siena, Strada e Weekend G3 2004 a 2014",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0169D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio, Siena, Strada e Weekend G3 2004 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP PALIO / SIENA / STRADA / WEEKEND 04>14 G3 (ZOIÃO) - CROMADO ARO PRETO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena, Strada e Weekend G3 2004 a 2014. Peça nova, código ON0169D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0169e",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada / Weekend G3 (Zoião) Cromado Aro Preto - Lado Esquerdo",
    "slug": "farol-dianteiro-palio-siena-strada-weekend-g3-zoiao-cromado-aro-preto-esquerdo-on0169e",
    "sku": "ON0169E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada",
      "Weekend"
    ],
    "yearStart": 2004,
    "yearEnd": 2014,
    "version": "Palio, Siena, Strada e Weekend G3 2004 a 2014",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0169E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio, Siena, Strada e Weekend G3 2004 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP PALIO / SIENA / STRADA / WEEKEND 04>14 G3 (ZOIÃO) - CROMADO ARO PRETO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena, Strada e Weekend G3 2004 a 2014. Peça nova, código ON0169E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0170d",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada G3 (Zoião) Cromado - Lado Direito",
    "slug": "farol-dianteiro-palio-siena-strada-g3-zoiao-cromado-direito-on0170d",
    "sku": "ON0170D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada"
    ],
    "yearStart": 2004,
    "yearEnd": 2014,
    "version": "Palio, Siena e Strada G3 2004 a 2014",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0170D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio, Siena e Strada G3 2004 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP PALIO / SIENA / STRADA 04>14 G3 (ZOIÃO) - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena e Strada G3 2004 a 2014. Peça nova, código ON0170D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0170e",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada G3 (Zoião) Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-palio-siena-strada-g3-zoiao-cromado-esquerdo-on0170e",
    "sku": "ON0170E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada"
    ],
    "yearStart": 2004,
    "yearEnd": 2014,
    "version": "Palio, Siena e Strada G3 2004 a 2014",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0170E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio, Siena e Strada G3 2004 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP PALIO / SIENA / STRADA 04>14 G3 (ZOIÃO) - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena e Strada G3 2004 a 2014. Peça nova, código ON0170E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0160d",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada / Weekend 1996 a 2001 - Lado Direito",
    "slug": "farol-dianteiro-palio-siena-strada-weekend-1996-a-2001-direito-on0160d",
    "sku": "ON0160D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada",
      "Weekend"
    ],
    "yearStart": 1996,
    "yearEnd": 2001,
    "version": "Palio, Siena e Strada 1996 a 2001; Weekend 1997 a 2000",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "padrao",
    "typeLabel": "Padrão Original",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0160D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio, Siena e Strada 1996 a 2001; Weekend 1997 a 2000. Descrição original do catálogo: \"FAROL DIANT COMP PALIO / SIENA / STRADA 96>01 / WEEKEND 97>00\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena e Strada 1996 a 2001; Weekend 1997 a 2000. Peça nova, código ON0160D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0160e",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada / Weekend 1996 a 2001 - Lado Esquerdo",
    "slug": "farol-dianteiro-palio-siena-strada-weekend-1996-a-2001-esquerdo-on0160e",
    "sku": "ON0160E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada",
      "Weekend"
    ],
    "yearStart": 1996,
    "yearEnd": 2001,
    "version": "Palio, Siena e Strada 1996 a 2001; Weekend 1997 a 2000",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "padrao",
    "typeLabel": "Padrão Original",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0160E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio, Siena e Strada 1996 a 2001; Weekend 1997 a 2000. Descrição original do catálogo: \"FAROL DIANT COMP PALIO / SIENA / STRADA 96>01 / WEEKEND 97>00\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena e Strada 1996 a 2001; Weekend 1997 a 2000. Peça nova, código ON0160E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "lw4024",
    "name": "Farol Dianteiro Fiat Uno Fire / Fiorino Cromado - Lado Direito",
    "slug": "farol-dianteiro-uno-fire-fiorino-cromado-direito-lw4024",
    "sku": "LW4024",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Uno",
    "vehicleModels": [
      "Uno",
      "Fiorino"
    ],
    "yearStart": 2004,
    "yearEnd": 2013,
    "version": "Uno Fire e Fiorino 2004 a 2013",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/LW4024.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Uno Fire e Fiorino 2004 a 2013. Descrição original do catálogo: \"FAROL DIANT COMP UNO FIRE / FIORINO 04>13 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Uno Fire e Fiorino 2004 a 2013. Peça nova, código LW4024. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "lw4025",
    "name": "Farol Dianteiro Fiat Uno Fire / Fiorino Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-uno-fire-fiorino-cromado-esquerdo-lw4025",
    "sku": "LW4025",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Uno",
    "vehicleModels": [
      "Uno",
      "Fiorino"
    ],
    "yearStart": 2004,
    "yearEnd": 2013,
    "version": "Uno Fire e Fiorino 2004 a 2013",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/LW4025.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Uno Fire e Fiorino 2004 a 2013. Descrição original do catálogo: \"FAROL DIANT COMP UNO FIRE / FIORINO 04>13 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Uno Fire e Fiorino 2004 a 2013. Peça nova, código LW4025. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "lw4030",
    "name": "Farol Dianteiro Fiat Uno Fire / Fiorino Máscara Negra - Lado Direito",
    "slug": "farol-dianteiro-uno-fire-fiorino-mascara-negra-direito-lw4030",
    "sku": "LW4030",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Uno",
    "vehicleModels": [
      "Uno",
      "Fiorino"
    ],
    "yearStart": 2004,
    "yearEnd": 2013,
    "version": "Uno Fire e Fiorino 2004 a 2013",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/LW4030.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Uno Fire e Fiorino 2004 a 2013. Descrição original do catálogo: \"FAROL DIANT COMP UNO FIRE / FIORINO 04>13 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Uno Fire e Fiorino 2004 a 2013. Peça nova, código LW4030. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "lw4031",
    "name": "Farol Dianteiro Fiat Uno Fire / Fiorino Máscara Negra - Lado Esquerdo",
    "slug": "farol-dianteiro-uno-fire-fiorino-mascara-negra-esquerdo-lw4031",
    "sku": "LW4031",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Uno",
    "vehicleModels": [
      "Uno",
      "Fiorino"
    ],
    "yearStart": 2004,
    "yearEnd": 2013,
    "version": "Uno Fire e Fiorino 2004 a 2013",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/LW4031.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Uno Fire e Fiorino 2004 a 2013. Descrição original do catálogo: \"FAROL DIANT COMP UNO FIRE / FIORINO 04>13 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Uno Fire e Fiorino 2004 a 2013. Peça nova, código LW4031. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0165d",
    "name": "Farol Dianteiro Fiat Uno Vivace / Fiorino Máscara Negra - Lado Direito",
    "slug": "farol-dianteiro-uno-vivace-fiorino-mascara-negra-direito-on0165d",
    "sku": "ON0165D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Uno",
    "vehicleModels": [
      "Uno",
      "Fiorino"
    ],
    "yearStart": 2010,
    "yearEnd": 2021,
    "version": "Uno Vivace e Fiorino 2010 a 2021",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0165D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Uno Vivace e Fiorino 2010 a 2021. Descrição original do catálogo: \"MASCARA NEGRA FAROL DIANT COMP UNO VIVACE/FIORINO 2010/21 - MASCARA NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Uno Vivace e Fiorino 2010 a 2021. Peça nova, código ON0165D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0165e",
    "name": "Farol Dianteiro Fiat Uno Vivace / Fiorino Máscara Negra - Lado Esquerdo",
    "slug": "farol-dianteiro-uno-vivace-fiorino-mascara-negra-esquerdo-on0165e",
    "sku": "ON0165E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Uno",
    "vehicleModels": [
      "Uno",
      "Fiorino"
    ],
    "yearStart": 2010,
    "yearEnd": 2021,
    "version": "Uno Vivace e Fiorino 2010 a 2021",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0165E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Uno Vivace e Fiorino 2010 a 2021. Descrição original do catálogo: \"MASCARA NEGRA FAROL DIANT COMP UNO VIVACE/FIORINO 2010/21 - MASCARA NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Uno Vivace e Fiorino 2010 a 2021. Peça nova, código ON0165E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0164d",
    "name": "Farol Dianteiro Fiat Uno Vivace / Fiorino Cromado - Lado Direito",
    "slug": "farol-dianteiro-uno-vivace-fiorino-cromado-direito-on0164d",
    "sku": "ON0164D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Uno",
    "vehicleModels": [
      "Uno",
      "Fiorino"
    ],
    "yearStart": 2010,
    "yearEnd": 2021,
    "version": "Uno Vivace e Fiorino 2010 a 2021",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0164D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Uno Vivace e Fiorino 2010 a 2021. Descrição original do catálogo: \"FAROL DIANT COMP UNO VIVACE/FIORINO 2010/21 -CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Uno Vivace e Fiorino 2010 a 2021. Peça nova, código ON0164D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0164e",
    "name": "Farol Dianteiro Fiat Uno Vivace / Fiorino Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-uno-vivace-fiorino-cromado-esquerdo-on0164e",
    "sku": "ON0164E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Uno",
    "vehicleModels": [
      "Uno",
      "Fiorino"
    ],
    "yearStart": 2010,
    "yearEnd": 2021,
    "version": "Uno Vivace e Fiorino 2010 a 2021",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0164E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Uno Vivace e Fiorino 2010 a 2021. Descrição original do catálogo: \"FAROL DIANT COMP UNO VIVACE/FIORINO 2010/21 -CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Uno Vivace e Fiorino 2010 a 2021. Peça nova, código ON0164E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0166d",
    "name": "Farol Dianteiro Fiat Palio G4 / Siena / Strada Monoparábola - Lado Direito",
    "slug": "farol-dianteiro-palio-g4-siena-strada-monoparabola-direito-on0166d",
    "sku": "ON0166D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada"
    ],
    "yearStart": 2008,
    "yearEnd": 2020,
    "version": "Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "monoparabola",
    "typeLabel": "Monoparábola",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0166D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020. Descrição original do catálogo: \"FAROL DIANT COMP PALIO G4 08>12 / SIENA 08>17 / STRADA 08>20 - MONOPARABOLA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020. Peça nova, código ON0166D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0166e",
    "name": "Farol Dianteiro Fiat Palio G4 / Siena / Strada Monoparábola - Lado Esquerdo",
    "slug": "farol-dianteiro-palio-g4-siena-strada-monoparabola-esquerdo-on0166e",
    "sku": "ON0166E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada"
    ],
    "yearStart": 2008,
    "yearEnd": 2020,
    "version": "Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "monoparabola",
    "typeLabel": "Monoparábola",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0166E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020. Descrição original do catálogo: \"FAROL DIANT COMP PALIO G4 08>12 / SIENA 08>17 / STRADA 08>20 - MONOPARABOLA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020. Peça nova, código ON0166E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0168d",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada / Weekend G3 Máscara Negra Aro Cromado - Lado Direito",
    "slug": "farol-dianteiro-palio-siena-strada-weekend-g3-mascara-negra-aro-cromado-direito-on0168d",
    "sku": "ON0168D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada",
      "Weekend"
    ],
    "yearStart": 2004,
    "yearEnd": 2014,
    "version": "Palio, Siena, Strada e Weekend G3 2004 a 2014",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0168D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio, Siena, Strada e Weekend G3 2004 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP PALIO / SIENA / STRADA / WEEKEND 04>14 G3 - MASC NEGRA ARO CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena, Strada e Weekend G3 2004 a 2014. Peça nova, código ON0168D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0168e",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada / Weekend G3 Máscara Negra Aro Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-palio-siena-strada-weekend-g3-mascara-negra-aro-cromado-esquerdo-on0168e",
    "sku": "ON0168E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada",
      "Weekend"
    ],
    "yearStart": 2004,
    "yearEnd": 2014,
    "version": "Palio, Siena, Strada e Weekend G3 2004 a 2014",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0168E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio, Siena, Strada e Weekend G3 2004 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP PALIO / SIENA / STRADA / WEEKEND 04>14 G3 - MASC NEGRA ARO CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena, Strada e Weekend G3 2004 a 2014. Peça nova, código ON0168E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0171d",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada / Weekend G3 Negro Aro Preto - Lado Direito",
    "slug": "farol-dianteiro-palio-siena-strada-weekend-g3-negro-aro-preto-direito-on0171d",
    "sku": "ON0171D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada",
      "Weekend"
    ],
    "yearStart": 2004,
    "yearEnd": 2014,
    "version": "Palio, Siena, Strada e Weekend G3 2004 a 2014",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0171D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio, Siena, Strada e Weekend G3 2004 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP PALIO / SIENA / STRADA / WEEKEND 04>14 G3 - NEGRO ARO PRETO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena, Strada e Weekend G3 2004 a 2014. Peça nova, código ON0171D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0171e",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada / Weekend G3 Negro Aro Preto - Lado Esquerdo",
    "slug": "farol-dianteiro-palio-siena-strada-weekend-g3-negro-aro-preto-esquerdo-on0171e",
    "sku": "ON0171E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada",
      "Weekend"
    ],
    "yearStart": 2004,
    "yearEnd": 2014,
    "version": "Palio, Siena, Strada e Weekend G3 2004 a 2014",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0171E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio, Siena, Strada e Weekend G3 2004 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP PALIO / SIENA / STRADA / WEEKEND 04>14 G3 - NEGRO ARO PRETO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena, Strada e Weekend G3 2004 a 2014. Peça nova, código ON0171E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0172d",
    "name": "Farol Dianteiro Fiat Palio G4 / Siena / Strada Monoparábola Aro Negro - Lado Direito",
    "slug": "farol-dianteiro-palio-g4-siena-strada-monoparabola-aro-negro-direito-on0172d",
    "sku": "ON0172D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada"
    ],
    "yearStart": 2008,
    "yearEnd": 2020,
    "version": "Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "monoparabola",
    "typeLabel": "Monoparábola",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0172D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020. Descrição original do catálogo: \"FAROL DIANT COMP PALIO G4 08>12 / SIENA 08>17 / STRADA 08>20 - MONOPARABOLA ARO NEGRO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020. Peça nova, código ON0172D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0172e",
    "name": "Farol Dianteiro Fiat Palio G4 / Siena / Strada Monoparábola Aro Negro - Lado Esquerdo",
    "slug": "farol-dianteiro-palio-g4-siena-strada-monoparabola-aro-negro-esquerdo-on0172e",
    "sku": "ON0172E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada"
    ],
    "yearStart": 2008,
    "yearEnd": 2020,
    "version": "Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "monoparabola",
    "typeLabel": "Monoparábola",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0172E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020. Descrição original do catálogo: \"FAROL DIANT COMP PALIO G4 08>12 / SIENA 08>17 / STRADA 08>20 - MONOPARABOLA ARO NEGRO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio G4 2008 a 2012, Siena 2008 a 2017 e Strada 2008 a 2020. Peça nova, código ON0172E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "yh050005d",
    "name": "Lanterna Traseira Fiat Fastback (Canto) - Lado Direito",
    "slug": "lanterna-traseira-fastback-canto-direito-yh050005d",
    "sku": "YH050005D",
    "oemCode": null,
    "category": "lanterna",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Fastback",
    "vehicleModels": [
      "Fastback"
    ],
    "yearStart": 2022,
    "yearEnd": 2026,
    "version": "Fastback 2022 em diante",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "lanterna-traseira",
    "typeLabel": "Lanterna Traseira",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/YH050005D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Fastback 2022 em diante. Descrição original do catálogo: \"LANTERNA TRASEIRA FASTBACK 2022/ CANTO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Lanterna Traseira Fiat para Fastback 2022 em diante. Peça nova, código YH050005D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "yh050005e",
    "name": "Lanterna Traseira Fiat Fastback (Canto) - Lado Esquerdo",
    "slug": "lanterna-traseira-fastback-canto-esquerdo-yh050005e",
    "sku": "YH050005E",
    "oemCode": null,
    "category": "lanterna",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Fastback",
    "vehicleModels": [
      "Fastback"
    ],
    "yearStart": 2022,
    "yearEnd": 2026,
    "version": "Fastback 2022 em diante",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "lanterna-traseira",
    "typeLabel": "Lanterna Traseira",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/YH050005E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Fastback 2022 em diante. Descrição original do catálogo: \"LANTERNA TRASEIRA FASTBACK 2022/ CANTO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Lanterna Traseira Fiat para Fastback 2022 em diante. Peça nova, código YH050005E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg01538d",
    "name": "Farol Dianteiro Fiat Palio 2012 em diante Cromado - Lado Direito",
    "slug": "farol-dianteiro-palio-2012-em-diante-cromado-direito-mg01538d",
    "sku": "MG01538D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio"
    ],
    "yearStart": 2012,
    "yearEnd": 2017,
    "version": "Palio 2012 em diante",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG01538D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Palio 2012 em diante. Descrição original do catálogo: \"FAROL DIANT COMP PALIO 2012/ CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio 2012 em diante. Peça nova, código MG01538D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg01538e",
    "name": "Farol Dianteiro Fiat Palio 2012 em diante Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-palio-2012-em-diante-cromado-esquerdo-mg01538e",
    "sku": "MG01538E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio"
    ],
    "yearStart": 2012,
    "yearEnd": 2017,
    "version": "Palio 2012 em diante",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG01538E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Palio 2012 em diante. Descrição original do catálogo: \"FAROL DIANT COMP PALIO 2012/ CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio 2012 em diante. Peça nova, código MG01538E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg01351cd",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada 2008 Cromado - Lado Direito",
    "slug": "farol-dianteiro-palio-siena-strada-2008-cromado-direito-mg01351cd",
    "sku": "MG01351CD",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada"
    ],
    "yearStart": 2008,
    "yearEnd": 2020,
    "version": "Palio, Siena e Strada 2008 em diante",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG01351CD.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Palio, Siena e Strada 2008 em diante. Descrição original do catálogo: \"FAROL DIANT COMP PALIO SIENA STRADA 2008 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena e Strada 2008 em diante. Peça nova, código MG01351CD. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg01351ce",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada 2008 Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-palio-siena-strada-2008-cromado-esquerdo-mg01351ce",
    "sku": "MG01351CE",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada"
    ],
    "yearStart": 2008,
    "yearEnd": 2020,
    "version": "Palio, Siena e Strada 2008 em diante",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG01351CE.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Palio, Siena e Strada 2008 em diante. Descrição original do catálogo: \"FAROL DIANT COMP PALIO SIENA STRADA 2008 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena e Strada 2008 em diante. Peça nova, código MG01351CE. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg01351fd",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada 2008 Máscara Negra - Lado Direito",
    "slug": "farol-dianteiro-palio-siena-strada-2008-mascara-negra-direito-mg01351fd",
    "sku": "MG01351FD",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada"
    ],
    "yearStart": 2008,
    "yearEnd": 2020,
    "version": "Palio, Siena e Strada 2008 em diante",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG01351FD.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Palio, Siena e Strada 2008 em diante. Descrição original do catálogo: \"FAROL DIANT COMP PALIO SIENA STRADA 2008 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena e Strada 2008 em diante. Peça nova, código MG01351FD. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg01351fe",
    "name": "Farol Dianteiro Fiat Palio / Siena / Strada 2008 Máscara Negra - Lado Esquerdo",
    "slug": "farol-dianteiro-palio-siena-strada-2008-mascara-negra-esquerdo-mg01351fe",
    "sku": "MG01351FE",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Fiat",
    "vehicleModel": "Palio",
    "vehicleModels": [
      "Palio",
      "Siena",
      "Strada"
    ],
    "yearStart": 2008,
    "yearEnd": 2020,
    "version": "Palio, Siena e Strada 2008 em diante",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG01351FE.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Palio, Siena e Strada 2008 em diante. Descrição original do catálogo: \"FAROL DIANT COMP PALIO SIENA STRADA 2008 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Fiat para Palio, Siena e Strada 2008 em diante. Peça nova, código MG01351FE. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1043d",
    "name": "Farol Dianteiro Chevrolet Corsa / Classic Lente Lisa Cromado - Lado Direito",
    "slug": "farol-dianteiro-corsa-classic-lente-lisa-cromado-direito-on1043d",
    "sku": "ON1043D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Corsa",
    "vehicleModels": [
      "Corsa",
      "Classic"
    ],
    "yearStart": 1994,
    "yearEnd": 2009,
    "version": "Corsa 1994 a 2002 e Classic 1996 a 2009",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1043D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Corsa 1994 a 2002 e Classic 1996 a 2009. Descrição original do catálogo: \"FAROL DIANT COMP CORSA 94>02 / CLASSIC 96>09 - LENTE LISA - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Corsa 1994 a 2002 e Classic 1996 a 2009. Peça nova, código ON1043D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1043e",
    "name": "Farol Dianteiro Chevrolet Corsa / Classic Lente Lisa Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-corsa-classic-lente-lisa-cromado-esquerdo-on1043e",
    "sku": "ON1043E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Corsa",
    "vehicleModels": [
      "Corsa",
      "Classic"
    ],
    "yearStart": 1994,
    "yearEnd": 2009,
    "version": "Corsa 1994 a 2002 e Classic 1996 a 2009",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1043E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Corsa 1994 a 2002 e Classic 1996 a 2009. Descrição original do catálogo: \"FAROL DIANT COMP CORSA 94>02 / CLASSIC 96>09 - LENTE LISA - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Corsa 1994 a 2002 e Classic 1996 a 2009. Peça nova, código ON1043E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1044d",
    "name": "Farol Dianteiro Chevrolet Corsa / Classic Lente Lisa Máscara Negra - Lado Direito",
    "slug": "farol-dianteiro-corsa-classic-lente-lisa-mascara-negra-direito-on1044d",
    "sku": "ON1044D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Corsa",
    "vehicleModels": [
      "Corsa",
      "Classic"
    ],
    "yearStart": 1994,
    "yearEnd": 2009,
    "version": "Corsa 1994 a 2002 e Classic 1996 a 2009",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1044D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Corsa 1994 a 2002 e Classic 1996 a 2009. Descrição original do catálogo: \"FAROL DIANT COMP CORSA 94>02 / CLASSIC 96>09 - LENTE LISA - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Corsa 1994 a 2002 e Classic 1996 a 2009. Peça nova, código ON1044D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1044e",
    "name": "Farol Dianteiro Chevrolet Corsa / Classic Lente Lisa Máscara Negra - Lado Esquerdo",
    "slug": "farol-dianteiro-corsa-classic-lente-lisa-mascara-negra-esquerdo-on1044e",
    "sku": "ON1044E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Corsa",
    "vehicleModels": [
      "Corsa",
      "Classic"
    ],
    "yearStart": 1994,
    "yearEnd": 2009,
    "version": "Corsa 1994 a 2002 e Classic 1996 a 2009",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1044E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Corsa 1994 a 2002 e Classic 1996 a 2009. Descrição original do catálogo: \"FAROL DIANT COMP CORSA 94>02 / CLASSIC 96>09 - LENTE LISA - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Corsa 1994 a 2002 e Classic 1996 a 2009. Peça nova, código ON1044E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1055d",
    "name": "Farol Dianteiro Chevrolet Celta / Prisma Cromado - Lado Direito",
    "slug": "farol-dianteiro-celta-prisma-cromado-direito-on1055d",
    "sku": "ON1055D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Celta",
    "vehicleModels": [
      "Celta",
      "Prisma"
    ],
    "yearStart": 2006,
    "yearEnd": 2015,
    "version": "Celta 2007 a 2015 e Prisma 2006 a 2012",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1055D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Celta 2007 a 2015 e Prisma 2006 a 2012. Descrição original do catálogo: \"FAROL DIANT COMP CELTA 07>15 / PRISMA 06>12 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Celta 2007 a 2015 e Prisma 2006 a 2012. Peça nova, código ON1055D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1055e",
    "name": "Farol Dianteiro Chevrolet Celta / Prisma Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-celta-prisma-cromado-esquerdo-on1055e",
    "sku": "ON1055E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Celta",
    "vehicleModels": [
      "Celta",
      "Prisma"
    ],
    "yearStart": 2006,
    "yearEnd": 2015,
    "version": "Celta 2007 a 2015 e Prisma 2006 a 2012",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1055E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Celta 2007 a 2015 e Prisma 2006 a 2012. Descrição original do catálogo: \"FAROL DIANT COMP CELTA 07>15 / PRISMA 06>12 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Celta 2007 a 2015 e Prisma 2006 a 2012. Peça nova, código ON1055E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1056d",
    "name": "Farol Dianteiro Chevrolet Celta / Prisma Máscara Negra - Lado Direito",
    "slug": "farol-dianteiro-celta-prisma-mascara-negra-direito-on1056d",
    "sku": "ON1056D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Celta",
    "vehicleModels": [
      "Celta",
      "Prisma"
    ],
    "yearStart": 2006,
    "yearEnd": 2015,
    "version": "Celta 2007 a 2015 e Prisma 2006 a 2012",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1056D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Celta 2007 a 2015 e Prisma 2006 a 2012. Descrição original do catálogo: \"FAROL DIANT COMP CELTA 07>15 / PRISMA 06>12 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Celta 2007 a 2015 e Prisma 2006 a 2012. Peça nova, código ON1056D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1056e",
    "name": "Farol Dianteiro Chevrolet Celta / Prisma Máscara Negra - Lado Esquerdo",
    "slug": "farol-dianteiro-celta-prisma-mascara-negra-esquerdo-on1056e",
    "sku": "ON1056E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Celta",
    "vehicleModels": [
      "Celta",
      "Prisma"
    ],
    "yearStart": 2006,
    "yearEnd": 2015,
    "version": "Celta 2007 a 2015 e Prisma 2006 a 2012",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1056E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Celta 2007 a 2015 e Prisma 2006 a 2012. Descrição original do catálogo: \"FAROL DIANT COMP CELTA 07>15 / PRISMA 06>12 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Celta 2007 a 2015 e Prisma 2006 a 2012. Peça nova, código ON1056E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1061d",
    "name": "Farol Dianteiro Chevrolet Classic Cromado - Lado Direito",
    "slug": "farol-dianteiro-classic-cromado-direito-on1061d",
    "sku": "ON1061D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Classic",
    "vehicleModels": [
      "Classic"
    ],
    "yearStart": 2011,
    "yearEnd": 2016,
    "version": "Classic 2011 a 2016",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1061D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Classic 2011 a 2016. Descrição original do catálogo: \"FAROL DIANT COMP CLASSIC 11>16 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Classic 2011 a 2016. Peça nova, código ON1061D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1062e",
    "name": "Farol Dianteiro Chevrolet Classic Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-classic-cromado-esquerdo-on1062e",
    "sku": "ON1062E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Classic",
    "vehicleModels": [
      "Classic"
    ],
    "yearStart": 2011,
    "yearEnd": 2016,
    "version": "Classic 2011 a 2016",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1062E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Classic 2011 a 2016. Descrição original do catálogo: \"FAROL DIANT COMP CLASSIC 11>16 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Classic 2011 a 2016. Peça nova, código ON1062E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1063d",
    "name": "Farol Dianteiro Chevrolet Classic Máscara Negra - Lado Direito",
    "slug": "farol-dianteiro-classic-mascara-negra-direito-on1063d",
    "sku": "ON1063D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Classic",
    "vehicleModels": [
      "Classic"
    ],
    "yearStart": 2011,
    "yearEnd": 2016,
    "version": "Classic 2011 a 2016",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1063D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Classic 2011 a 2016. Descrição original do catálogo: \"FAROL DIANT COMP CLASSIC 11>16 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Classic 2011 a 2016. Peça nova, código ON1063D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on1063e",
    "name": "Farol Dianteiro Chevrolet Classic Máscara Negra - Lado Esquerdo",
    "slug": "farol-dianteiro-classic-mascara-negra-esquerdo-on1063e",
    "sku": "ON1063E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Classic",
    "vehicleModels": [
      "Classic"
    ],
    "yearStart": 2011,
    "yearEnd": 2016,
    "version": "Classic 2011 a 2016",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON1063E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Classic 2011 a 2016. Descrição original do catálogo: \"FAROL DIANT COMP CLASSIC 11>16 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Classic 2011 a 2016. Peça nova, código ON1063E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg30027fd",
    "name": "Farol Dianteiro Chevrolet Astra Máscara Negra - Lado Direito",
    "slug": "farol-dianteiro-astra-mascara-negra-direito-mg30027fd",
    "sku": "MG30027FD",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Astra",
    "vehicleModels": [
      "Astra"
    ],
    "yearStart": 2003,
    "yearEnd": 2011,
    "version": "Astra 2003 em diante",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG30027FD.jpg"
    ],
    "photoPending": true,
    "catalogReview": true,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Astra 2003 em diante. Descrição original do catálogo: \"FAROL DIANT COMP ASTRA 2003/ MASCARA NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Astra 2003 em diante. Peça nova, código MG30027FD. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg30027fe",
    "name": "Farol Dianteiro Chevrolet Astra Máscara Negra - Lado Esquerdo",
    "slug": "farol-dianteiro-astra-mascara-negra-esquerdo-mg30027fe",
    "sku": "MG30027FE",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Astra",
    "vehicleModels": [
      "Astra"
    ],
    "yearStart": 2003,
    "yearEnd": 2011,
    "version": "Astra 2003 em diante",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG30027FE.jpg"
    ],
    "photoPending": true,
    "catalogReview": true,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Astra 2003 em diante. Descrição original do catálogo: \"FAROL DIANT COMP ASTRA 2003/ MASCARA NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Astra 2003 em diante. Peça nova, código MG30027FE. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg30027cd",
    "name": "Farol Dianteiro Chevrolet Astra Cromado - Lado Direito",
    "slug": "farol-dianteiro-astra-cromado-direito-mg30027cd",
    "sku": "MG30027CD",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Astra",
    "vehicleModels": [
      "Astra"
    ],
    "yearStart": 2003,
    "yearEnd": 2011,
    "version": "Astra 2003 em diante",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG30027CD.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Astra 2003 em diante. Descrição original do catálogo: \"FAROL DIANT COMP ASTRA 2003 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Astra 2003 em diante. Peça nova, código MG30027CD. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg30027ce",
    "name": "Farol Dianteiro Chevrolet Astra Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-astra-cromado-esquerdo-mg30027ce",
    "sku": "MG30027CE",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Astra",
    "vehicleModels": [
      "Astra"
    ],
    "yearStart": 2003,
    "yearEnd": 2011,
    "version": "Astra 2003 em diante",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG30027CE.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Astra 2003 em diante. Descrição original do catálogo: \"FAROL DIANT COMP ASTRA 2003 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Astra 2003 em diante. Peça nova, código MG30027CE. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg30059d",
    "name": "Farol Dianteiro Chevrolet Agile / Montana Máscara Cromada - Lado Direito",
    "slug": "farol-dianteiro-agile-montana-mascara-cromada-direito-mg30059d",
    "sku": "MG30059D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Agile",
    "vehicleModels": [
      "Agile",
      "Montana"
    ],
    "yearStart": 2009,
    "yearEnd": 2021,
    "version": "Agile 2009 a 2013 e Montana 2011 a 2021",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG30059D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Agile 2009 a 2013 e Montana 2011 a 2021. Descrição original do catálogo: \"FAROL AGILE 09/13 MONTANA 11/21 MASCARA CROMADA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Agile 2009 a 2013 e Montana 2011 a 2021. Peça nova, código MG30059D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg30059e",
    "name": "Farol Dianteiro Chevrolet Agile / Montana Máscara Cromada - Lado Esquerdo",
    "slug": "farol-dianteiro-agile-montana-mascara-cromada-esquerdo-mg30059e",
    "sku": "MG30059E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Agile",
    "vehicleModels": [
      "Agile",
      "Montana"
    ],
    "yearStart": 2009,
    "yearEnd": 2021,
    "version": "Agile 2009 a 2013 e Montana 2011 a 2021",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG30059E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Agile 2009 a 2013 e Montana 2011 a 2021. Descrição original do catálogo: \"FAROL AGILE 09/13 MONTANA 11/21 MASCARA CROMADA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Agile 2009 a 2013 e Montana 2011 a 2021. Peça nova, código MG30059E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg20097d",
    "name": "Farol Dianteiro Chevrolet Corsa / Montana Cromado - Lado Direito",
    "slug": "farol-dianteiro-corsa-montana-cromado-direito-mg20097d",
    "sku": "MG20097D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Corsa",
    "vehicleModels": [
      "Corsa",
      "Montana"
    ],
    "yearStart": 2008,
    "yearEnd": 2012,
    "version": "Corsa 2008 em diante e Montana",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG20097D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Corsa 2008 em diante e Montana. Descrição original do catálogo: \"FAROL CORSA 2008/ MONTANA CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Corsa 2008 em diante e Montana. Peça nova, código MG20097D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg20097e",
    "name": "Farol Dianteiro Chevrolet Corsa / Montana Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-corsa-montana-cromado-esquerdo-mg20097e",
    "sku": "MG20097E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Corsa",
    "vehicleModels": [
      "Corsa",
      "Montana"
    ],
    "yearStart": 2008,
    "yearEnd": 2012,
    "version": "Corsa 2008 em diante e Montana",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG20097E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Corsa 2008 em diante e Montana. Descrição original do catálogo: \"FAROL CORSA 2008/ MONTANA CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Corsa 2008 em diante e Montana. Peça nova, código MG20097E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg20097fe",
    "name": "Farol Dianteiro Chevrolet Corsa / Montana Máscara Negra - Lado Direito",
    "slug": "farol-dianteiro-corsa-montana-mascara-negra-direito-mg20097fe",
    "sku": "MG20097FE",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Corsa",
    "vehicleModels": [
      "Corsa",
      "Montana"
    ],
    "yearStart": 2008,
    "yearEnd": 2012,
    "version": "Corsa 2008 em diante e Montana",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG20097FE.jpg"
    ],
    "photoPending": true,
    "catalogReview": true,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Corsa 2008 em diante e Montana. Descrição original do catálogo: \"FAROL CORSA 2008/ MONTANA (MASCARA NEGRA)\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Corsa 2008 em diante e Montana. Peça nova, código MG20097FE. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg20097fd",
    "name": "Farol Dianteiro Chevrolet Corsa / Montana Máscara Negra - Lado Esquerdo",
    "slug": "farol-dianteiro-corsa-montana-mascara-negra-esquerdo-mg20097fd",
    "sku": "MG20097FD",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Corsa",
    "vehicleModels": [
      "Corsa",
      "Montana"
    ],
    "yearStart": 2008,
    "yearEnd": 2012,
    "version": "Corsa 2008 em diante e Montana",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG20097FD.jpg"
    ],
    "photoPending": true,
    "catalogReview": true,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Corsa 2008 em diante e Montana. Descrição original do catálogo: \"FAROL CORSA 2008/ MONTANA (MASCARA NEGRA)\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Corsa 2008 em diante e Montana. Peça nova, código MG20097FD. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg20056bd",
    "name": "Farol Dianteiro Chevrolet Vectra Máscara Negra (Manual/Elétrico) - Lado Direito",
    "slug": "farol-dianteiro-vectra-mascara-negra-manual-eletrico-direito-mg20056bd",
    "sku": "MG20056BD",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Vectra",
    "vehicleModels": [
      "Vectra"
    ],
    "yearStart": 2000,
    "yearEnd": 2005,
    "version": "Vectra 2000 em diante, regulagem manual ou elétrica",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG20056BD.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Vectra 2000 em diante, regulagem manual ou elétrica. Descrição original do catálogo: \"FAROL VECTRA 2000/ MASC NEGRA (MANUAL/ELETRICO)\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Vectra 2000 em diante, regulagem manual ou elétrica. Peça nova, código MG20056BD. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg20056be",
    "name": "Farol Dianteiro Chevrolet Vectra Máscara Negra (Manual/Elétrico) - Lado Esquerdo",
    "slug": "farol-dianteiro-vectra-mascara-negra-manual-eletrico-esquerdo-mg20056be",
    "sku": "MG20056BE",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Chevrolet",
    "vehicleModel": "Vectra",
    "vehicleModels": [
      "Vectra"
    ],
    "yearStart": 2000,
    "yearEnd": 2005,
    "version": "Vectra 2000 em diante, regulagem manual ou elétrica",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG20056BE.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Vectra 2000 em diante, regulagem manual ou elétrica. Descrição original do catálogo: \"FAROL VECTRA 2000/ MASC NEGRA (MANUAL/ELETRICO)\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Chevrolet para Vectra 2000 em diante, regulagem manual ou elétrica. Peça nova, código MG20056BE. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0848d",
    "name": "Farol Dianteiro Volkswagen Gol / Parati / Saveiro G3 com Difusor - Lado Direito",
    "slug": "farol-dianteiro-gol-parati-saveiro-g3-com-difusor-direito-on0848d",
    "sku": "ON0848D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Parati",
      "Saveiro"
    ],
    "yearStart": 1999,
    "yearEnd": 2005,
    "version": "Gol e Parati G3 1999 a 2005 e Saveiro 2000 a 2005",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "padrao",
    "typeLabel": "Padrão Original",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0848D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol e Parati G3 1999 a 2005 e Saveiro 2000 a 2005. Descrição original do catálogo: \"FAROL DIANT COMP GOL / PARATI 99>05 G3 / SAVEIRO 00>05 COM DIFUSOR\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol e Parati G3 1999 a 2005 e Saveiro 2000 a 2005. Peça nova, código ON0848D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0848e",
    "name": "Farol Dianteiro Volkswagen Gol / Parati / Saveiro G3 com Difusor - Lado Esquerdo",
    "slug": "farol-dianteiro-gol-parati-saveiro-g3-com-difusor-esquerdo-on0848e",
    "sku": "ON0848E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Parati",
      "Saveiro"
    ],
    "yearStart": 1999,
    "yearEnd": 2005,
    "version": "Gol e Parati G3 1999 a 2005 e Saveiro 2000 a 2005",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "padrao",
    "typeLabel": "Padrão Original",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0848E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol e Parati G3 1999 a 2005 e Saveiro 2000 a 2005. Descrição original do catálogo: \"FAROL DIANT COMP GOL / PARATI 99>05 G3 / SAVEIRO 00>05 COM DIFUSOR\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol e Parati G3 1999 a 2005 e Saveiro 2000 a 2005. Peça nova, código ON0848E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0849d",
    "name": "Farol Dianteiro Volkswagen Gol / Saveiro G4 Cromado - Lado Direito",
    "slug": "farol-dianteiro-gol-saveiro-g4-cromado-direito-on0849d",
    "sku": "ON0849D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Saveiro"
    ],
    "yearStart": 2006,
    "yearEnd": 2014,
    "version": "Gol e Saveiro G4 2006 a 2014",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0849D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol e Saveiro G4 2006 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP GOL / SAVEIRO 06>14 G4 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol e Saveiro G4 2006 a 2014. Peça nova, código ON0849D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0849e",
    "name": "Farol Dianteiro Volkswagen Gol / Saveiro G4 Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-gol-saveiro-g4-cromado-esquerdo-on0849e",
    "sku": "ON0849E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Saveiro"
    ],
    "yearStart": 2006,
    "yearEnd": 2014,
    "version": "Gol e Saveiro G4 2006 a 2014",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0849E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol e Saveiro G4 2006 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP GOL / SAVEIRO 06>14 G4 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol e Saveiro G4 2006 a 2014. Peça nova, código ON0849E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0854d",
    "name": "Farol Dianteiro Volkswagen Gol G5 / Saveiro / Voyage Cromado - Lado Direito",
    "slug": "farol-dianteiro-gol-g5-saveiro-voyage-cromado-direito-on0854d",
    "sku": "ON0854D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Saveiro",
      "Voyage"
    ],
    "yearStart": 2008,
    "yearEnd": 2013,
    "version": "Gol G5 Trend 2008 a 2012, Saveiro 2011 a 2013 e Voyage 2009 a 2012",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0854D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol G5 Trend 2008 a 2012, Saveiro 2011 a 2013 e Voyage 2009 a 2012. Descrição original do catálogo: \"FAROL DIANT COMP GOL G5 TREND 08>12 / SAVEIRO 11>13 / VOYAGE 09>12 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol G5 Trend 2008 a 2012, Saveiro 2011 a 2013 e Voyage 2009 a 2012. Peça nova, código ON0854D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0854e",
    "name": "Farol Dianteiro Volkswagen Gol G5 / Saveiro / Voyage Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-gol-g5-saveiro-voyage-cromado-esquerdo-on0854e",
    "sku": "ON0854E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Saveiro",
      "Voyage"
    ],
    "yearStart": 2008,
    "yearEnd": 2013,
    "version": "Gol G5 Trend 2008 a 2012, Saveiro 2011 a 2013 e Voyage 2009 a 2012",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0854E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol G5 Trend 2008 a 2012, Saveiro 2011 a 2013 e Voyage 2009 a 2012. Descrição original do catálogo: \"FAROL DIANT COMP GOL G5 TREND 08>12 / SAVEIRO 11>13 / VOYAGE 09>12 - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol G5 Trend 2008 a 2012, Saveiro 2011 a 2013 e Voyage 2009 a 2012. Peça nova, código ON0854E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0856d",
    "name": "Farol Dianteiro Volkswagen Gol Trend G6 Foco Duplo - Lado Direito",
    "slug": "farol-dianteiro-gol-trend-g6-foco-duplo-direito-on0856d",
    "sku": "ON0856D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol"
    ],
    "yearStart": 2013,
    "yearEnd": 2016,
    "version": "Gol Trend G6 2013 a 2016",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "foco-duplo",
    "typeLabel": "Foco Duplo",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0856D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol Trend G6 2013 a 2016. Descrição original do catálogo: \"FAROL DIANT COMP GOL TREND G6 13>16 - FOCO DUPLO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol Trend G6 2013 a 2016. Peça nova, código ON0856D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0856e",
    "name": "Farol Dianteiro Volkswagen Gol Trend G6 Foco Duplo - Lado Esquerdo",
    "slug": "farol-dianteiro-gol-trend-g6-foco-duplo-esquerdo-on0856e",
    "sku": "ON0856E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol"
    ],
    "yearStart": 2013,
    "yearEnd": 2016,
    "version": "Gol Trend G6 2013 a 2016",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "foco-duplo",
    "typeLabel": "Foco Duplo",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0856E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol Trend G6 2013 a 2016. Descrição original do catálogo: \"FAROL DIANT COMP GOL TREND G6 13>16 - FOCO DUPLO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol Trend G6 2013 a 2016. Peça nova, código ON0856E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0857d",
    "name": "Farol Dianteiro Volkswagen Gol / Saveiro G3 Máscara Negra sem Difusor - Lado Direito",
    "slug": "farol-dianteiro-gol-saveiro-g3-mascara-negra-sem-difusor-direito-on0857d",
    "sku": "ON0857D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Saveiro"
    ],
    "yearStart": 1999,
    "yearEnd": 2005,
    "version": "Gol e Saveiro G3 1999 a 2005",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0857D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol e Saveiro G3 1999 a 2005. Descrição original do catálogo: \"FAROL DIANT COMP GOL / SAVEIRO 99>05 G3 MASC NEGRA SEM DIFUSOR\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol e Saveiro G3 1999 a 2005. Peça nova, código ON0857D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0857e",
    "name": "Farol Dianteiro Volkswagen Gol / Saveiro G3 Máscara Negra sem Difusor - Lado Esquerdo",
    "slug": "farol-dianteiro-gol-saveiro-g3-mascara-negra-sem-difusor-esquerdo-on0857e",
    "sku": "ON0857E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Saveiro"
    ],
    "yearStart": 1999,
    "yearEnd": 2005,
    "version": "Gol e Saveiro G3 1999 a 2005",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0857E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol e Saveiro G3 1999 a 2005. Descrição original do catálogo: \"FAROL DIANT COMP GOL / SAVEIRO 99>05 G3 MASC NEGRA SEM DIFUSOR\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol e Saveiro G3 1999 a 2005. Peça nova, código ON0857E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0858d",
    "name": "Farol Dianteiro Volkswagen Gol G5 / Saveiro / Voyage Máscara Negra - Lado Direito",
    "slug": "farol-dianteiro-gol-g5-saveiro-voyage-mascara-negra-direito-on0858d",
    "sku": "ON0858D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Saveiro",
      "Voyage"
    ],
    "yearStart": 2008,
    "yearEnd": 2013,
    "version": "Gol G5 Trend 2008 a 2012, Saveiro 2009 a 2013 e Voyage 2009 a 2012",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0858D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol G5 Trend 2008 a 2012, Saveiro 2009 a 2013 e Voyage 2009 a 2012. Descrição original do catálogo: \"FAROL DIANT COMP GOL G5 TREND 08>12 / SAVEIRO 09>13 / VOYAGE 09>12 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol G5 Trend 2008 a 2012, Saveiro 2009 a 2013 e Voyage 2009 a 2012. Peça nova, código ON0858D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0858e",
    "name": "Farol Dianteiro Volkswagen Gol G5 / Saveiro / Voyage Máscara Negra - Lado Esquerdo",
    "slug": "farol-dianteiro-gol-g5-saveiro-voyage-mascara-negra-esquerdo-on0858e",
    "sku": "ON0858E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Saveiro",
      "Voyage"
    ],
    "yearStart": 2008,
    "yearEnd": 2013,
    "version": "Gol G5 Trend 2008 a 2012, Saveiro 2009 a 2013 e Voyage 2009 a 2012",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0858E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol G5 Trend 2008 a 2012, Saveiro 2009 a 2013 e Voyage 2009 a 2012. Descrição original do catálogo: \"FAROL DIANT COMP GOL G5 TREND 08>12 / SAVEIRO 09>13 / VOYAGE 09>12 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol G5 Trend 2008 a 2012, Saveiro 2009 a 2013 e Voyage 2009 a 2012. Peça nova, código ON0858E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0859d",
    "name": "Farol Dianteiro Volkswagen Gol / Saveiro G4 Máscara Negra - Lado Direito",
    "slug": "farol-dianteiro-gol-saveiro-g4-mascara-negra-direito-on0859d",
    "sku": "ON0859D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Saveiro"
    ],
    "yearStart": 2006,
    "yearEnd": 2014,
    "version": "Gol e Saveiro G4 2006 a 2014",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0859D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol e Saveiro G4 2006 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP GOL / SAVEIRO 06>14 G4 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol e Saveiro G4 2006 a 2014. Peça nova, código ON0859D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "on0859e",
    "name": "Farol Dianteiro Volkswagen Gol / Saveiro G4 Máscara Negra - Lado Esquerdo",
    "slug": "farol-dianteiro-gol-saveiro-g4-mascara-negra-esquerdo-on0859e",
    "sku": "ON0859E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol",
      "Saveiro"
    ],
    "yearStart": 2006,
    "yearEnd": 2014,
    "version": "Gol e Saveiro G4 2006 a 2014",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/ON0859E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Gol e Saveiro G4 2006 a 2014. Descrição original do catálogo: \"FAROL DIANT COMP GOL / SAVEIRO 06>14 G4 - MASC NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol e Saveiro G4 2006 a 2014. Peça nova, código ON0859E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "yh080019d",
    "name": "Lanterna Traseira Volkswagen Gol G7 Cristal - Lado Direito",
    "slug": "lanterna-traseira-gol-g7-cristal-direito-yh080019d",
    "sku": "YH080019D",
    "oemCode": null,
    "category": "lanterna",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol"
    ],
    "yearStart": 2016,
    "yearEnd": 2023,
    "version": "Gol G7 2016 em diante",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "lanterna-traseira",
    "typeLabel": "Lanterna Traseira",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/YH080019D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Gol G7 2016 em diante. Descrição original do catálogo: \"LANTERNA TRASEIRA GOL G7 2016 > CRISTAL\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Lanterna Traseira Volkswagen para Gol G7 2016 em diante. Peça nova, código YH080019D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "yh080019e",
    "name": "Lanterna Traseira Volkswagen Gol G7 Cristal - Lado Esquerdo",
    "slug": "lanterna-traseira-gol-g7-cristal-esquerdo-yh080019e",
    "sku": "YH080019E",
    "oemCode": null,
    "category": "lanterna",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol"
    ],
    "yearStart": 2016,
    "yearEnd": 2023,
    "version": "Gol G7 2016 em diante",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "lanterna-traseira",
    "typeLabel": "Lanterna Traseira",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/YH080019E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Gol G7 2016 em diante. Descrição original do catálogo: \"LANTERNA TRASEIRA GOL G7 2016 > CRISTAL\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Lanterna Traseira Volkswagen para Gol G7 2016 em diante. Peça nova, código YH080019E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "yh080116d",
    "name": "Lanterna Traseira Volkswagen Polo - Lado Direito",
    "slug": "lanterna-traseira-polo-direito-yh080116d",
    "sku": "YH080116D",
    "oemCode": null,
    "category": "lanterna",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Polo",
    "vehicleModels": [
      "Polo"
    ],
    "yearStart": 2018,
    "yearEnd": 2026,
    "version": "Polo 2018 em diante",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "lanterna-traseira",
    "typeLabel": "Lanterna Traseira",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/YH080116D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Polo 2018 em diante. Descrição original do catálogo: \"LANTERNA TRASEIRA POLO 2018\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Lanterna Traseira Volkswagen para Polo 2018 em diante. Peça nova, código YH080116D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "yh080116e",
    "name": "Lanterna Traseira Volkswagen Polo - Lado Esquerdo",
    "slug": "lanterna-traseira-polo-esquerdo-yh080116e",
    "sku": "YH080116E",
    "oemCode": null,
    "category": "lanterna",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Polo",
    "vehicleModels": [
      "Polo"
    ],
    "yearStart": 2018,
    "yearEnd": 2026,
    "version": "Polo 2018 em diante",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "lanterna-traseira",
    "typeLabel": "Lanterna Traseira",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/YH080116E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Polo 2018 em diante. Descrição original do catálogo: \"LANTERNA TRASEIRA POLO 2018\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Lanterna Traseira Volkswagen para Polo 2018 em diante. Peça nova, código YH080116E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "jcv108722",
    "name": "Lanterna Traseira Volkswagen Saveiro Rubi - Lado Direito",
    "slug": "lanterna-traseira-saveiro-rubi-direito-jcv108722",
    "sku": "JCV108722",
    "oemCode": null,
    "category": "lanterna",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Saveiro",
    "vehicleModels": [
      "Saveiro"
    ],
    "yearStart": 2017,
    "yearEnd": 2023,
    "version": "Saveiro 2017 a 2023",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "lanterna-traseira",
    "typeLabel": "Lanterna Traseira",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/JCV108722.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Saveiro 2017 a 2023. Descrição original do catálogo: \"LANTERNA TRASEIRA SAVEIRO 2017/2023 RUBI\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Lanterna Traseira Volkswagen para Saveiro 2017 a 2023. Peça nova, código JCV108722. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "jcv108622",
    "name": "Lanterna Traseira Volkswagen Saveiro Rubi - Lado Esquerdo",
    "slug": "lanterna-traseira-saveiro-rubi-esquerdo-jcv108622",
    "sku": "JCV108622",
    "oemCode": null,
    "category": "lanterna",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Saveiro",
    "vehicleModels": [
      "Saveiro"
    ],
    "yearStart": 2017,
    "yearEnd": 2023,
    "version": "Saveiro 2017 a 2023",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "lanterna-traseira",
    "typeLabel": "Lanterna Traseira",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/JCV108622.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": false,
    "compatibilityNotes": "Aplicação: Saveiro 2017 a 2023. Descrição original do catálogo: \"LANTERNA TRASEIRA SAVEIRO 2017/2023 RUBI\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Lanterna Traseira Volkswagen para Saveiro 2017 a 2023. Peça nova, código JCV108622. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg23031e",
    "name": "Farol Dianteiro Volkswagen Fox Foco Duplo (Double Reflector) - Lado Direito",
    "slug": "farol-dianteiro-fox-foco-duplo-double-reflector-direito-mg23031e",
    "sku": "MG23031E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Fox",
    "vehicleModels": [
      "Fox"
    ],
    "yearStart": 2009,
    "yearEnd": 2014,
    "version": "Fox 2009 em diante",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "foco-duplo",
    "typeLabel": "Foco Duplo",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG23031E.jpg"
    ],
    "photoPending": true,
    "catalogReview": true,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Fox 2009 em diante. Descrição original do catálogo: \"FAROL DIANT COMP FOX 2009 HEAD LAMP DOUBLE REFLECTOR\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Fox 2009 em diante. Peça nova, código MG23031E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg23031d",
    "name": "Farol Dianteiro Volkswagen Fox Foco Duplo (Double Reflector) - Lado Esquerdo",
    "slug": "farol-dianteiro-fox-foco-duplo-double-reflector-esquerdo-mg23031d",
    "sku": "MG23031D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Fox",
    "vehicleModels": [
      "Fox"
    ],
    "yearStart": 2009,
    "yearEnd": 2014,
    "version": "Fox 2009 em diante",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "foco-duplo",
    "typeLabel": "Foco Duplo",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG23031D.jpg"
    ],
    "photoPending": true,
    "catalogReview": true,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Fox 2009 em diante. Descrição original do catálogo: \"FAROL DIANT COMP FOX 2009 HEAD LAMP DOUBLE REFLECTOR\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Fox 2009 em diante. Peça nova, código MG23031D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg23020d",
    "name": "Farol Dianteiro Volkswagen Gol G3 Foco Duplo Cromado - Lado Direito",
    "slug": "farol-dianteiro-gol-g3-foco-duplo-cromado-direito-mg23020d",
    "sku": "MG23020D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol"
    ],
    "yearStart": 1999,
    "yearEnd": 2005,
    "version": "Gol G3",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG23020D.jpg"
    ],
    "photoPending": true,
    "catalogReview": true,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Gol G3. Descrição original do catálogo: \"FAROL DIANT COMPATIVEL GOL G3 FOCO DUPLO - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol G3. Peça nova, código MG23020D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg23020e",
    "name": "Farol Dianteiro Volkswagen Gol G3 Foco Duplo Cromado - Lado Esquerdo",
    "slug": "farol-dianteiro-gol-g3-foco-duplo-cromado-esquerdo-mg23020e",
    "sku": "MG23020E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol"
    ],
    "yearStart": 1999,
    "yearEnd": 2005,
    "version": "Gol G3",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "cromado",
    "typeLabel": "Cromado",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG23020E.jpg"
    ],
    "photoPending": true,
    "catalogReview": true,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Gol G3. Descrição original do catálogo: \"FAROL DIANT COMPATIVEL GOL G3 FOCO DUPLO - CROMADO\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol G3. Peça nova, código MG23020E. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg23019d",
    "name": "Farol Dianteiro Volkswagen Gol G3 com Auxiliar Turbo Foco Duplo Máscara Negra - Lado Direito",
    "slug": "farol-dianteiro-gol-g3-com-auxiliar-turbo-foco-duplo-mascara-negra-direito-mg23019d",
    "sku": "MG23019D",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol"
    ],
    "yearStart": 1999,
    "yearEnd": 2005,
    "version": "Gol 1999 em diante (G3)",
    "side": "direito",
    "sideLabel": "Lado Direito (Passageiro)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG23019D.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Gol 1999 em diante (G3). Descrição original do catálogo: \"FAROL DIANT COMP GOL 1999/ G3 C/AUXILIAR TURBO FOCO DUPLO - MASCARA NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol 1999 em diante (G3). Peça nova, código MG23019D. Preço e disponibilidade sob consulta pelo WhatsApp."
  },
  {
    "id": "mg23019e",
    "name": "Farol Dianteiro Volkswagen Gol G3 com Auxiliar Turbo Foco Duplo Máscara Negra - Lado Esquerdo",
    "slug": "farol-dianteiro-gol-g3-com-auxiliar-turbo-foco-duplo-mascara-negra-esquerdo-mg23019e",
    "sku": "MG23019E",
    "oemCode": null,
    "category": "farol",
    "vehicleBrand": "Volkswagen",
    "vehicleModel": "Gol",
    "vehicleModels": [
      "Gol"
    ],
    "yearStart": 1999,
    "yearEnd": 2005,
    "version": "Gol 1999 em diante (G3)",
    "side": "esquerdo",
    "sideLabel": "Lado Esquerdo (Motorista)",
    "type": "mascara-negra",
    "typeLabel": "Máscara Negra",
    "manufacturer": null,
    "condition": "Novo",
    "price": 0,
    "wholesalePrice": null,
    "wholesaleMinQty": 4,
    "originalPrice": null,
    "isOffer": false,
    "featured": false,
    "stockStatus": "sob_consulta",
    "stockQuantity": null,
    "published": true,
    "images": [
      "./images/products/MG23019E.jpg"
    ],
    "photoPending": true,
    "catalogReview": false,
    "yearEstimated": true,
    "compatibilityNotes": "Aplicação: Gol 1999 em diante (G3). Descrição original do catálogo: \"FAROL DIANT COMP GOL 1999/ G3 C/AUXILIAR TURBO FOCO DUPLO - MASCARA NEGRA\". Confirme ano e versão do seu veículo pelo WhatsApp antes de fechar o pedido.",
    "description": "Farol Dianteiro Volkswagen para Gol 1999 em diante (G3). Peça nova, código MG23019E. Preço e disponibilidade sob consulta pelo WhatsApp."
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

// Todos os modelos atendidos por um produto (um farol pode servir em vários carros)
export function getProductModels(product) {
  return product.vehicleModels?.length ? product.vehicleModels : [product.vehicleModel];
}

function fitsModel(product, model) {
  const m = model.toLowerCase();
  return getProductModels(product).some(pm => pm.toLowerCase() === m);
}

export function getModelsByBrand(brand) {
  const source = (!brand || brand === "all")
    ? PRODUCTS
    : PRODUCTS.filter(p => p.vehicleBrand.toLowerCase() === brand.toLowerCase());
  const models = new Set(source.flatMap(getProductModels));
  return Array.from(models).sort();
}

export function getYearsForModel(model) {
  let minYear = 2000;
  let maxYear = 2025;
  const prods = model && model !== "all" 
    ? PRODUCTS.filter(p => fitsModel(p, model))
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
        ${getProductModels(product).join(' ')} 
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
      if (!fitsModel(product, model)) return false;
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
