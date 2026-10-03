/**
 * =============================================================================
 * CAVERNA BURGER - CARDÁPIO E PRODUTOS CENTRALIZADOS
 * =============================================================================
 * 
 * GUIA RÁPIDO PARA O PROPRIETÁRIO:
 * 
 * 1. COMO ALTERAR O PREÇO DE UM PRODUTO:
 *    Localize o produto abaixo e troque o valor de `price: 0` para o valor em reais.
 *    Exemplo: price: 32.90
 *    Enquanto o preço estiver 0 ou não definido, o site exibirá "Consultar".
 * 
 * 2. COMO ADICIONAR UM NOVO PRODUTO:
 *    Copie um bloco de produto existente, cole no final da lista e preencha:
 *    {
 *      id: "nome-do-novo-burger",
 *      name: "Nome do Novo Burger",
 *      category: "burgers", // "burgers", "smash", "milkshakes" ou uma nova categoria
 *      description: "Ingredientes deliciosos do lanche...",
 *      price: 34.90, // ou 0 para 'Consultar'
 *      image: "/images/products/nome-da-foto.jpg",
 *      featured: false, // se true, aparece nos destaques da Home
 *      available: true  // se false, aparece como 'Indisponível'
 *    }
 * 
 * 3. COMO ALTERAR AS FOTOS:
 *    Coloque a foto dentro da pasta `public/images/products/`
 *    e certifique-se de que o nome no campo `image:` corresponda ao arquivo.
 * 
 * 4. COMO CRIAR UMA NOVA CATEGORIA:
 *    Basta adicionar um novo item no array `CATEGORIES` abaixo e usar o mesmo `id`
 *    no campo `category` dos produtos.
 * =============================================================================
 */

export const CATEGORIES = [
  {
    id: "burgers",
    name: "BURGERS 150G",
    shortName: "Burgers 150g",
    description: "Hambúrguer artesanal de 150g grelhado na brasa, macio e suculento.",
    icon: "Flame"
  },
  {
    id: "smash",
    name: "SMASH BURGERS",
    shortName: "Smash Burgers",
    description: "Burgers prensados na chapa ultracroquente, com crosta crocante caramelizada.",
    icon: "Zap"
  },
  {
    id: "milkshakes",
    name: "MILKSHAKES",
    shortName: "Milkshakes",
    description: "Cremosos, refrescantes e preparados com Creme Americano premium.",
    icon: "CupSoda"
  },
  // CATEGORIAS PREPARADAS PARA EXPANSÃO FUTURA (Basta descomentar ou adicionar produtos nelas):
  /*
  {
    id: "porcoes",
    name: "PORÇÕES",
    shortName: "Porções",
    description: "Batatas crocantes, anéis de cebola e acompanhamentos perfeitos.",
    icon: "Utensils"
  },
  {
    id: "bebidas",
    name: "BEBIDAS",
    shortName: "Bebidas",
    description: "Refrigerantes, sucos naturais e água gelada.",
    icon: "Wine"
  },
  {
    id: "combos",
    name: "COMBOS",
    shortName: "Combos",
    description: "Burger + Batata + Bebida com valor especial.",
    icon: "Layers"
  },
  {
    id: "sobremesas",
    name: "SOBREMESAS",
    shortName: "Sobremesas",
    description: "Doces irresistíveis para finalizar.",
    icon: "Heart"
  },
  {
    id: "novidades",
    name: "NOVIDADES",
    shortName: "Novidades",
    description: "Lançamentos e criações exclusivas da Caverna.",
    icon: "Sparkles"
  }
  */
];

export const PRODUCTS = [
  // ===========================================================================
  // BURGERS 150G
  // ===========================================================================
  {
    id: "caverna-burguer",
    name: "Caverna Burguer",
    category: "burgers",
    description: "Pão Brioche, hambúrguer artesanal 150g, queijo cheddar e maionese da casa.",
    price: 0, // Altere de 0 para o preço desejado (ex: 28.00)
    image: "/images/products/caverna-burguer.jpg",
    featured: true,
    available: true,
    // Estrutura pronta para expansões futuras:
    extras: [],
    withoutIngredients: ["queijo cheddar", "maionese da casa"],
  },
  {
    id: "caverna-bacon",
    name: "Caverna Bacon",
    category: "burgers",
    description: "Pão Brioche, hambúrguer artesanal 150g, Bacon em tiras, cebola caramelizada, queijo cheddar e maionese da casa.",
    price: 0,
    image: "/images/products/caverna-bacon.jpg",
    featured: true,
    available: true,
    extras: [],
    withoutIngredients: ["Bacon em tiras", "cebola caramelizada", "queijo cheddar", "maionese da casa"],
  },
  {
    id: "caverna-salada",
    name: "Caverna Salada",
    category: "burgers",
    description: "Pão com gergelim, hambúrguer artesanal 150g, queijo prato, alface americana, cebola roxa, picles artesanal e maionese da casa.",
    price: 0,
    image: "/images/products/caverna-salada.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: ["queijo prato", "alface americana", "cebola roxa", "picles artesanal", "maionese da casa"],
  },
  {
    id: "caverna-cheddar-bacon",
    name: "Caverna Cheddar Bacon",
    category: "burgers",
    description: "Pão Brioche, hambúrguer artesanal 150g, molho cheddar feito na casa, Bacon e maionese da casa.",
    price: 0,
    image: "/images/products/caverna-cheddar-bacon.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: ["molho cheddar feito na casa", "Bacon", "maionese da casa"],
  },
  {
    id: "caverna-chef",
    name: "Caverna Chef",
    category: "burgers",
    description: "Pão australiano, hambúrguer artesanal 150g, catupiry original, farofa de bacon e maionese da casa.",
    price: 0,
    image: "/images/products/caverna-chef.jpg",
    featured: true,
    available: true,
    extras: [],
    withoutIngredients: ["catupiry original", "farofa de bacon", "maionese da casa"],
  },
  {
    id: "caverna-chicken",
    name: "Caverna Chicken",
    category: "burgers",
    description: "Pão com gergelim, frango cremoso, queijo prato, alface americana, tomate, cebola roxa, picles artesanal e maionese da casa.",
    price: 0,
    image: "/images/products/caverna-chicken.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: ["queijo prato", "alface americana", "tomate", "cebola roxa", "picles artesanal", "maionese da casa"],
  },
  {
    id: "top-caverna",
    name: "Top Caverna",
    category: "burgers",
    description: "Pão Brioche, 2 hambúrgueres artesanais de 150g, duplo queijo cheddar, bacon em tiras, ovo, alface americana, tomate e maionese da casa.",
    price: 0,
    image: "/images/products/top-caverna.jpg",
    featured: true,
    available: true,
    extras: [],
    withoutIngredients: ["duplo queijo cheddar", "bacon em tiras", "ovo", "alface americana", "tomate", "maionese da casa"],
  },
  {
    id: "caverna-surprise",
    name: "Caverna Surprise",
    category: "burgers",
    description: "Pão Brioche, hambúrguer artesanal 150g, costela desfiada com catupiry empanado, queijo prato e maionese da casa.",
    price: 0,
    image: "/images/products/caverna-surprise.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: ["costela desfiada com catupiry empanado", "queijo prato", "maionese da casa"],
  },
  {
    id: "caverna-nachos",
    name: "Caverna Nachos",
    category: "burgers",
    description: "Pão Brioche, hambúrguer artesanal 150g, queijo prato, nachos (Doritos) e maionese da casa.",
    price: 0,
    image: "/images/products/caverna-nachos.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: ["queijo prato", "nachos (Doritos)", "maionese da casa"],
  },

  // ===========================================================================
  // SMASH BURGERS
  // ===========================================================================
  {
    id: "smash-caverna",
    name: "Smash Caverna",
    category: "smash",
    description: "Pão Brioche, Smash Burger 80g, queijo cheddar e maionese da casa.",
    price: 0,
    image: "/images/products/smash-caverna.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: ["queijo cheddar", "maionese da casa"],
  },
  {
    id: "smash-caverna-bacon",
    name: "Smash Caverna Bacon",
    category: "smash",
    description: "Pão Brioche, Smash Burger 80g, queijo cheddar, bacon em tiras e maionese da casa.",
    price: 0,
    image: "/images/products/smash-caverna-bacon.jpg",
    featured: true,
    available: true,
    extras: [],
    withoutIngredients: ["queijo cheddar", "bacon em tiras", "maionese da casa"],
  },
  {
    id: "smash-caverna-salada",
    name: "Smash Caverna Salada",
    category: "smash",
    description: "Pão com gergelim, Smash Burger 80g, queijo prato, alface americana, cebola roxa, picles artesanal, tomate e maionese da casa.",
    price: 0,
    image: "/images/products/smash-caverna-salada.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: ["queijo prato", "alface americana", "cebola roxa", "picles artesanal", "tomate", "maionese da casa"],
  },
  {
    id: "duplo-smash-caverna",
    name: "Duplo Smash Caverna",
    category: "smash",
    description: "Pão Brioche, 2 Smash Burgers de 80g, queijo cheddar e maionese da casa.",
    price: 0,
    image: "/images/products/duplo-smash-caverna.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: ["queijo cheddar", "maionese da casa"],
  },
  {
    id: "triplo-smash-caverna",
    name: "Triplo Smash Caverna",
    category: "smash",
    description: "Pão australiano, 3 Smash Burgers de 80g, queijo cheddar, bacon em tiras, picles artesanal e maionese da casa.",
    price: 0,
    image: "/images/products/triplo-smash-caverna.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: ["queijo cheddar", "bacon em tiras", "picles artesanal", "maionese da casa"],
  },

  // ===========================================================================
  // MILKSHAKES
  // ===========================================================================
  {
    id: "milkshake-morango",
    name: "Milkshake de Morango",
    category: "milkshakes",
    description: "Creme Americano e geleia de morango feita na casa.",
    price: 0,
    image: "/images/products/milkshake-morango.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: [],
  },
  {
    id: "milkshake-oreo",
    name: "Milkshake de Oreo",
    category: "milkshakes",
    description: "Creme Americano e Oreo.",
    price: 0,
    image: "/images/products/milkshake-oreo.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: [],
  },
  {
    id: "milkshake-pacoca",
    name: "Milkshake de Paçoca",
    category: "milkshakes",
    description: "Creme Americano e Paçoca.",
    price: 0,
    image: "/images/products/milkshake-pacoca.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: [],
  },
  {
    id: "milkshake-ovomaltine",
    name: "Milkshake de Ovomaltine",
    category: "milkshakes",
    description: "Creme Americano e Ovomaltine.",
    price: 0,
    image: "/images/products/milkshake-ovomaltine.jpg",
    featured: false,
    available: true,
    extras: [],
    withoutIngredients: [],
  }
];

/**
 * Função utilitária para buscar um produto pelo ID
 */
export function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

/**
 * Função utilitária para filtrar produtos por categoria
 */
export function getProductsByCategory(categoryId) {
  if (!categoryId || categoryId === "all") return PRODUCTS;
  return PRODUCTS.filter(p => p.category === categoryId);
}

/**
 * Função utilitária para retornar produtos em destaque (featured: true)
 */
export function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.featured);
}
