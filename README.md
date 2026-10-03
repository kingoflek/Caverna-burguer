# 🍔 Caverna Burger — Cardápio Digital & Comanda Online

Aplicação web completa, moderna, responsiva e de alta performance desenvolvida sob medida para a **Caverna Burger**, integrando **Cardápio Digital**, **Comanda/Carrinho com Observações** e **Envio Automático do Pedido pelo WhatsApp**.

---

## 🚀 Como Iniciar o Projeto

### 1. Iniciar em modo de desenvolvimento
No terminal, dentro da pasta do projeto:
```bash
npm run dev
```
O site estará disponível em: `http://localhost:3000`

### 2. Iniciar pelo atalho da Área de Trabalho (Windows)
Basta dar dois cliques no arquivo:
**`Iniciar Caverna Burger.bat`** presente na Área de Trabalho.

---

## 🛠️ Guia Rápido de Manutenção (Onde Alterar)

Este projeto foi estruturado para ser extremamente fácil de atualizar sem precisar mexer em códigos complexos.

### 📍 1. Configurações da Loja (WhatsApp, Instagram, Horários, Endereço)
**Arquivo:** [`src/config/store.js`](file:///C:/Users/delta/.gemini/antigravity/scratch/caverna-burger/src/config/store.js)

```javascript
export const STORE_CONFIG = {
  name: "Caverna Burger",
  displayName: "CAVERNA BURGER",
  tagline: "O sabor que sai da Caverna.",
  
  // 👉 Coloque aqui o número do WhatsApp com DDD (somente dígitos)
  // Exemplo para São Paulo: "5511999999999"
  whatsapp: "", 

  // 👉 Coloque o usuário do Instagram (sem @)
  instagram: "",

  // 👉 Endereço da loja
  address: "",

  // 👉 Horários de atendimento
  openingHours: "",
};
```

---

### 🍔 2. Produtos e Preços do Cardápio
**Arquivo:** [`src/data/products.js`](file:///C:/Users/delta/.gemini/antigravity/scratch/caverna-burger/src/data/products.js)

Todos os produtos estão centralizados neste arquivo:

#### Para alterar o preço de um lanche:
Basta alterar o campo `price: 0` para o valor desejado em reais:
```javascript
{
  id: "caverna-burguer",
  name: "Caverna Burguer",
  price: 28.50, // 👈 Altere aqui
  // ...
}
```
> *Nota: Enquanto o preço estiver `0`, o cardápio exibirá automaticamente **"Consultar"**, sem inventar valores.*

#### Para adicionar um novo lanche ou sobremesa:
Basta copiar e colar um bloco de produto na lista:
```javascript
{
  id: "novo-burger",
  name: "Novo Burger Caverna",
  category: "burgers", // "burgers", "smash" ou "milkshakes"
  description: "Descrição dos ingredientes selecionados...",
  price: 32.00,
  image: "/images/products/novo-burger.jpg",
  featured: false, // se true, aparece nos destaques da Home
  available: true  // se false, aparece como "Indisponível"
}
```

---

### 📸 3. Como Substituir ou Adicionar Fotos dos Produtos
**Pasta:** `public/images/products/`

- As imagens ficam salvas diretamente dentro da pasta `public/images/products/`.
- Se você substituir qualquer imagem mantendo o mesmo nome (exemplo: `caverna-bacon.jpg`), o site atualizará a foto imediatamente.
- Se usar uma foto com outro nome, basta atualizar o campo `image: "/images/products/novo-nome.jpg"` no produto dentro de `src/data/products.js`.

---

### 📁 4. Estrutura Organizada do Projeto

```text
caverna-burger/
├── public/
│   ├── images/
│   │   ├── logo.png               # Logo oficial Caverna Burger
│   │   ├── logo.jpeg              # Logo oficial Caverna Burger
│   │   └── products/              # Fotos individuais de cada produto
├── src/
│   ├── components/                # Componentes modulares reutilizáveis
│   │   ├── Header.jsx             # Header responsivo com logo e carrinho
│   │   ├── Hero.jsx               # Hero banner com iluminação e destaque
│   │   ├── FeaturedSection.jsx    # "Os Favoritos da Caverna"
│   │   ├── CategoryNavigation.jsx # Abas e filtros de categorias
│   │   ├── ProductCard.jsx        # Card moderno com imagem, preço e botão adicionar
│   │   ├── ProductGrid.jsx        # Grade responsiva de produtos
│   │   ├── ProductModal.jsx       # Modal detalhado do produto com observações
│   │   ├── CartDrawer.jsx         # Comanda lateral com resumo e controle de quantidades
│   │   ├── FloatingCartBar.jsx    # Botão flutuante mobile ("🛒 Ver Pedido")
│   │   ├── CheckoutModal.jsx      # Formulário de Entrega (Delivery) ou Retirada
│   │   ├── OrderReviewModal.jsx   # Revisão final estilo recibo antes de enviar
│   │   ├── HowToOrderSection.jsx  # Passo a passo de como pedir
│   │   ├── AboutSection.jsx       # Informações institucionais sobre a marca
│   │   ├── ContactSection.jsx     # Seção de contato oficial
│   │   └── Footer.jsx             # Rodapé completo
│   ├── config/
│   │   └── store.js               # Central de configurações e contatos
│   ├── context/
│   │   └── CartContext.jsx        # Estado global do carrinho com persistência (localStorage)
│   ├── data/
│   │   └── products.js            # Cardápio centralizado com todos os 18 produtos
│   ├── styles/
│   │   └── index.css              # Tema Dark sofisticado, glassmorphism e cores Caverna
│   ├── utils/
│   │   ├── format.js              # Formatação de preços (R$) e máscaras de telefone
│   │   └── whatsapp.js            # Geração da mensagem oficial e link do WhatsApp
│   ├── App.jsx                    # Aplicação principal
│   └── main.jsx                   # Ponto de entrada
├── index.html                     # HTML com SEO e tags semânticas
├── package.json                   # Dependências React + Vite + Tailwind
├── tailwind.config.js             # Paleta escura (grafite, carvão, vinho sutil)
└── vite.config.js                 # Configuração do Vite
```

---

## 📱 Fluxo Completo do Pedido

1. **Cliente entra no site** e visualiza o visual marcante da Caverna Burger.
2. **Navega pelo cardápio** por categorias (Burgers 150g, Smash Burgers, Milkshakes).
3. **Clica em um produto** para ver detalhes, foto grande e ingredientes.
4. **Define a quantidade e adiciona observações específicas** (ex: *"sem cebola"*, *"molho separado"*).
5. **Adiciona à comanda**.
6. **No carrinho**, revisa os itens e pode adicionar observações gerais para o pedido.
7. **No checkout**, seleciona **Entrega** (informa rua, número, bairro, complemento) ou **Retirada no Local** (dispensa endereço).
8. **Revisa o pedido** em uma tela limpa e clara.
9. **Clica em "Enviar Pedido pelo WhatsApp"**: o WhatsApp abre automaticamente com a mensagem estruturada pronta para envio!
