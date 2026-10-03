import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const STORAGE_KEY = 'caverna_burger_cart_v1';
const CUSTOMER_STORAGE_KEY = 'caverna_burger_customer_v1';

export function CartProvider({ children }) {
  // Carrinho inicial vindo do localStorage
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Erro ao ler carrinho do localStorage:', e);
      return [];
    }
  });

  // Dados do formulário de checkout salvos para conveniência
  const [customer, setCustomer] = useState(() => {
    try {
      const saved = localStorage.getItem(CUSTOMER_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {
        name: '',
        phone: '',
        orderType: 'delivery', // 'delivery' ou 'pickup'
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        reference: '',
        generalNotes: '',
      };
    } catch (e) {
      return {
        name: '',
        phone: '',
        orderType: 'delivery',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        reference: '',
        generalNotes: '',
      };
    }
  });

  // Estados de navegação dos modais
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // Notificação de animação ao adicionar
  const [lastAddedItem, setLastAddedItem] = useState(null);

  // Salva no localStorage quando o carrinho mudar
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Erro ao salvar carrinho no localStorage:', e);
    }
  }, [items]);

  // Salva dados do cliente no localStorage
  useEffect(() => {
    try {
      localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customer));
    } catch (e) {
      console.error('Erro ao salvar dados do cliente:', e);
    }
  }, [customer]);

  /**
   * Adiciona um produto à comanda/carrinho
   */
  const addToCart = (product, quantity = 1, observation = '') => {
    setItems(prevItems => {
      // Cria uma chave única baseada no ID do produto e na observação
      const trimmedObs = (observation || '').trim();
      const existingIndex = prevItems.findIndex(
        item => item.productId === product.id && (item.observation || '').trim() === trimmedObs
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
        };
        return updated;
      } else {
        const newItem = {
          id: `${product.id}_${Date.now()}_${Math.random().toString(36).substring(2, 5)}`,
          productId: product.id,
          name: product.name,
          category: product.category,
          price: product.price || 0,
          image: product.image,
          description: product.description,
          quantity: quantity,
          observation: trimmedObs,
        };
        return [...prevItems, newItem];
      }
    });

    setLastAddedItem(product.name);
    setTimeout(() => setLastAddedItem(null), 2500);
  };

  /**
   * Atualiza a quantidade de um item
   */
  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.id === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  /**
   * Atualiza a observação de um item específico
   */
  const updateItemObservation = (cartItemId, observation) => {
    setItems(prev =>
      prev.map(item =>
        item.id === cartItemId ? { ...item, observation } : item
      )
    );
  };

  /**
   * Remove um item do carrinho
   */
  const removeFromCart = (cartItemId) => {
    setItems(prev => prev.filter(item => item.id !== cartItemId));
  };

  /**
   * Limpa todo o carrinho
   */
  const clearCart = () => {
    setItems([]);
  };

  // Cálculos do carrinho
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  
  const subtotal = items.reduce((acc, item) => {
    return acc + (item.price > 0 ? item.price * item.quantity : 0);
  }, 0);

  const hasUnpricedItems = items.some(item => !item.price || item.price === 0);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        hasUnpricedItems,
        addToCart,
        updateQuantity,
        updateItemObservation,
        removeFromCart,
        clearCart,
        
        // Dados do formulário
        customer,
        setCustomer,

        // Modais e navegação
        isCartOpen,
        setIsCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),

        selectedProduct,
        setSelectedProduct,
        openProductModal: (prod) => setSelectedProduct(prod),
        closeProductModal: () => setSelectedProduct(null),

        isCheckoutOpen,
        setIsCheckoutOpen,
        openCheckout: () => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        },
        closeCheckout: () => setIsCheckoutOpen(false),

        isReviewOpen,
        setIsReviewOpen,
        openReview: () => {
          setIsCheckoutOpen(false);
          setIsReviewOpen(true);
        },
        closeReview: () => setIsReviewOpen(false),

        lastAddedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser utilizado dentro de um CartProvider');
  }
  return context;
}
