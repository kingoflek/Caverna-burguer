# 🔴 SECRET PARTS — Loja Virtual Especializada em Faróis Automotivos

Plataforma de e-commerce automotiva de alta performance, desenvolvida especialmente para a **SECRET PARTS**, especializada **EXCLUSIVAMENTE em FARÓIS AUTOMOTIVOS**, com fluxo integrado para **Varejo** (consumidor final) e **Atacado / Distribuição** (lojistas, oficinas e revendedores).

---

## 🚀 Como Iniciar e Executar o Projeto

### 1. Iniciar em Modo de Desenvolvimento
No terminal, dentro da pasta do projeto:
```bash
npm run dev
```
O site estará disponível imediatamente em: `http://localhost:3000`

### 2. Gerar Versão de Produção (Build)
```bash
npm run build
```
Os arquivos otimizados e prontos para publicação serão gerados na pasta `dist/`.

### 3. Publicar no GitHub Pages
```bash
npm run deploy
```

---

## 🚗 Arquitetura Comercial da Secret Parts

### 1. Varejo (Consumidor Final)
- Exibição de preços unitários em reais com alinhamento visual moderno.
- Busca multifacetada por **Marca, Modelo, Ano e Lado (Esquerdo/Direito/Par)**.
- Conferência técnica do veículo do cliente antes da finalização.
- Envio estruturado do pedido para o WhatsApp oficial com código OEM e SKU.

### 2. Atacado & Distribuição B2B
- Modal e formulário dedicado para cotação em quantidade (`WholesaleSection` e `WholesaleModal`).
- Preços escalonados por volume a partir de quantidade mínima configurável (`wholesalePrice` e `wholesaleMinQty`).
- Geração de proposta comercial estruturada com dados da empresa (Razão Social, CNPJ, Cidade/UF, volume e códigos desejados).

### 3. Logística e Entrega Regional
- Simulador de CEP e opções de envio regional configuradas em [`src/config/store.js`](file:///C:/Users/delta/.gemini/antigravity/scratch/caverna-burger/src/config/store.js):
  - **Entrega Expressa Regional:** envio rápido por motoboy / utilitário.
  - **Transportadora / Rodoviário:** embalagens reforçadas contra impactos.
  - **Retirada no Centro de Distribuição:** balcão de peças com separação ágil.

---

## 🛠️ Guia do Proprietário (Onde e Como Alterar)

### 📍 1. Configurações da Loja e WhatsApp
**Arquivo:** [`src/config/store.js`](file:///C:/Users/delta/.gemini/antigravity/scratch/caverna-burger/src/config/store.js)

```javascript
export const STORE_CONFIG = {
  name: "Secret Parts",
  tagline: "Faróis automotivos com preço de verdade.",
  
  // 👉 WhatsApp oficial (apenas números com DDD, ex: "5511999999999")
  whatsapp: "", 

  // 👉 WhatsApp específico de atacado (opcional)
  whatsappWholesale: "",

  // 👉 E-mail comercial e redes sociais
  email: "contato@secretparts.com.br",
  instagram: "secretparts.farois",

  // 👉 Senha de acesso ao Painel Administrativo Interno
  adminPin: "secretparts2026",
};
```

---

### 💡 2. Como Cadastrar e Atualizar Faróis com o Antigravity
**Arquivo:** [`src/data/products.js`](file:///C:/Users/delta/.gemini/antigravity/scratch/caverna-burger/src/data/products.js)

Todo o catálogo de faróis está centralizado neste arquivo com estrutura rica e tipada:

```javascript
{
  id: "farol-onix-2012-2019-esq",
  name: "Farol Chevrolet Onix / Prisma Máscara Negra Foco Duplo - Lado Esquerdo",
  slug: "farol-chevrolet-onix-prisma-mascara-negra-esquerdo",
  sku: "SP-CHV-1011",
  oemCode: "52064893",
  vehicleBrand: "Chevrolet",
  vehicleModel: "Onix",
  yearStart: 2012,
  yearEnd: 2019,
  side: "esquerdo", // "esquerdo", "direito" ou "par"
  sideLabel: "Lado Esquerdo (Motorista)",
  type: "mascara-negra", // "mascara-negra", "led-drl", "foco-duplo", "foco-simples", "projetor"
  manufacturer: "Arteb / Orgus",
  price: 389.90,          // Preço de varejo
  wholesalePrice: 299.00, // Preço de atacado
  wholesaleMinQty: 4,     // Quantidade mínima para atacado
  originalPrice: 449.90,  // Preço anterior (se em oferta)
  isOffer: true,          // true para aparecer nas Ofertas da Semana
  featured: true,         // true para aparecer nos Destaques
  stockStatus: "disponivel", // "disponivel", "poucas_unidades", "sob_consulta", "indisponivel"
  images: ["./images/products/farol-onix.jpg"],
  specifications: {
    lente: "Policarbonato liso de alta resistência UV",
    foco: "Duplo com regulagem precisa",
    lampadas: "H4 e H1"
  },
  compatibilityNotes: "Aplica-se em Onix 2012 a 2019 e Prisma 2013 a 2019."
}
```

> **Dica Antigravity:** Você pode simplesmente pedir no chat:
> *"Antigravity, altere o preço do Farol Onix para R$ 399,90 e marque como Poucas Unidades"* ou *"Antigravity, cadastre estes 5 novos faróis de Corolla"* que a alteração é feita instantaneamente de forma segura.

---

### 📸 3. Onde Colocar Novas Fotos de Faróis
**Pasta:** `public/images/products/`
- Guarde fotos com fundo escuro ou neutro no formato JPG ou PNG (resolução recomendada: 800x600 ou 1000x750).
- Insira o caminho relativo no campo `images: ["./images/products/nome-do-farol.jpg"]`.

---

### 🔒 4. Painel Administrativo Integrado
O site possui um painel administrativo acessível pelo rodapé no link **"Painel do Gestor"** (senha padrão: `secretparts2026`).
Pelo painel você pode:
- Alternar status de estoque de qualquer farol (Disponível, Poucas Unidades, Sob Consulta, Indisponível).
- Ativar ou desativar promoções com um clique.
- Ocultar ou exibir produtos do catálogo.
- Exportar backup completo do catálogo em JSON.

---

## 📁 Estrutura de Arquivos do Projeto

```text
secret-parts/
├── public/
│   ├── images/
│   │   ├── logo.svg                   # Logotipo vetorial oficial Secret Parts
│   │   ├── logo-light.svg             # Logotipo versão fundo claro
│   │   ├── logo-icon.svg              # Ícone quadrado do logotipo
│   │   ├── logo-header.png            # Logo rasterizado transparente do header
│   │   ├── favicon.png                # Favicon automotivo
│   │   ├── hero-headlight-clean.png   # Fotografia de alta resolução do farol hero
│   │   └── products/                  # Fotografias de catálogo dos faróis automotivos
│   ├── robots.txt                     # Indexação e SEO
│   └── sitemap.xml                    # Mapa do site para mecanismos de busca
├── src/
│   ├── components/
│   │   ├── Header.jsx                 # Cabeçalho com busca, carrinho, favoritos e B2B
│   │   ├── Hero.jsx                   # Banner principal inspirado no design de referência
│   │   ├── VehicleSelector.jsx        # Seletor rápido de faróis (Marca, Modelo, Ano, Lado)
│   │   ├── FeaturedSection.jsx        # Seção de faróis em destaque
│   │   ├── OffersSection.jsx          # Seção de ofertas com preço anterior e promocional
│   │   ├── CatalogSection.jsx         # Catálogo completo com busca e filtros multifacetados
│   │   ├── WholesaleSection.jsx       # Seção e formulário comercial para distribuidores B2B
│   │   ├── RegionalDeliverySection.jsx# Simulador de CEP e opções de entrega rápida
│   │   ├── HowToBuySection.jsx        # Passo a passo de compra segura
│   │   ├── ProductCard.jsx            # Card do farol com badges técnicas e preços
│   │   ├── ProductModal.jsx           # Detalhes completos, especificações e compatibilidade
│   │   ├── CartDrawer.jsx             # Carrinho lateral com seletor de frete
│   │   ├── CheckoutModal.jsx          # Coleta de dados de entrega e veículo do cliente
│   │   ├── OrderReviewModal.jsx       # Revisão final e envio formatado ao WhatsApp
│   │   ├── WholesaleModal.jsx         # Modal de cotação rápida para lojistas
│   │   ├── CompatibilityModal.jsx     # Modal para tirar dúvidas de compatibilidade
│   │   ├── FavoritesModal.jsx         # Modal de faróis salvos
│   │   ├── AdminModal.jsx             # Painel do gestor protegido por senha
│   │   ├── FloatingCartBar.jsx        # Barra inferior de carrinho flutuante no celular
│   │   └── Footer.jsx                 # Rodapé institucional completo
│   ├── config/
│   │   └── store.js                   # Configurações centrais da loja e canais de contato
│   ├── context/
│   │   └── CartContext.jsx            # Gerenciamento global de carrinho, frete e modais
│   ├── data/
│   │   └── products.js                # Banco de dados e motor de filtragem de faróis
│   ├── styles/
│   │   └── index.css                  # Cores e estilização com efeitos luminosos
│   ├── utils/
│   │   ├── format.js                  # Máscaras de telefone, CEP, CNPJ e formatação R$
│   │   └── whatsapp.js                # Gerador de mensagens estruturadas para WhatsApp
│   ├── App.jsx                        # Componente raiz montando a estrutura completa
│   └── main.jsx                       # Ponto de entrada React 18
├── index.html                         # Metadados de SEO, OpenGraph e fontes Google
├── tailwind.config.js                 # Paleta oficial Secret Parts (#08090B, #F20D25, etc.)
└── vite.config.js                     # Configuração do Vite
```
