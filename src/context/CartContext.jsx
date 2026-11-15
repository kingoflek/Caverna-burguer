import React, { createContext, useContext, useState, useEffect } from 'react';
import { STORE_CONFIG } from '../config/store.js';

const CartContext = createContext();

const STORAGE_KEY = 'secret_parts_cart_v1';
const CUSTOMER_STORAGE_KEY = 'secret_parts_customer_v1';
const FAVORITES_STORAGE_KEY = 'secret_parts_favorites_v1';

export function CartProvider({ children }) {
  // Carrinho de compras no localStorage
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Erro ao ler carrinho do localStorage:', e);
      return [];
    }
  });

  // Lista de favoritos (IDs dos produtos)
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Opção de frete selecionada
  const [selectedShippingId, setSelectedShippingId] = useState(
    STORE_CONFIG.shippingOptions[0]?.id || 'express_local'
  );

  // Dados do formulário de checkout salvos para conveniência do cliente
  const [customer, setCustomer] = useState(() => {
    try {
      const saved = localStorage.getItem(CUSTOMER_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {
        name: '',
        phone: '',
        cep: '',
        orderType: 'delivery', // 'delivery' ou 'pickup'
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        cityState: '',
        reference: '',
        vehicleDetails: '', // Ex.: Chevrolet Onix 2017 LT 1.4
        generalNotes: '',
      };
    } catch (e) {
      return {
        name: '',
        phone: '',
        cep: '',
        orderType: 'delivery',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        cityState: '',
        reference: '',
        vehicleDetails: '',
        generalNotes: '',
      };
    }
  });

  // Modais e navegações
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isWholesaleModalOpen, setIsWholesaleModalOpen] = useState(false);
  const [isCompatibilityModalOpen, setIsCompatibilityModalOpen] = useState(false);
  const [compatibilityProduct, setCompatibilityProduct] = useState(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  // Feedback toast ao adicionar ao carrinho
  const [lastAddedItem, setLastAddedItem] = useState(null);

  // Salva itens no localStorage
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

  // Salva favoritos no localStorage
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (e) {
      console.error('Erro ao salvar favoritos:', e);
    }
  }, [favorites]);

  /**
   * Adiciona um farol ao carrinho
   */
  const addToCart = (product, quantity = 1, observation = '') => {
    setItems(prevItems => {
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
          sku: product.sku,
          oemCode: product.oemCode,
          vehicleBrand: product.vehicleBrand,
          vehicleModel: product.vehicleModel,
          yearStart: product.yearStart,
          yearEnd: product.yearEnd,
          side: product.side,
          sideLabel: product.sideLabel,
          typeLabel: product.typeLabel,
          price: product.price || 0,
          wholesalePrice: product.wholesalePrice,
          wholesaleMinQty: product.wholesaleMinQty,
          image: product.images?.[0] || './images/products/farol-onix.jpg',
          quantity: quantity,
          observation: trimmedObs,
        };
        return [...prevItems, newItem];
      }
    });

    setLastAddedItem(product.name);
    setTimeout(() => setLastAddedItem(null), 3000);
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
   * Remove um item do carrinho
   */
  const removeFromCart = (cartItemId) => {
    setItems(prev => prev.filter(item => item.id !== cartItemId));
  };

  /**
   * Limpa o carrinho
   */
  const clearCart = () => {
    setItems([]);
  };

  /**
   * Alterna produto nos favoritos
   */
  const toggleFavorite = (productId) => {
    setFavorites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const isFavorite = (productId) => favorites.includes(productId);

  // Cálculos do carrinho
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = items.reduce((acc, item) => {
    // Aplica preço de atacado se a quantidade atingir o mínimo
    const itemPrice = (item.wholesalePrice && item.quantity >= (item.wholesaleMinQty || 4))
      ? item.wholesalePrice
      : (item.price || 0);
    return acc + (itemPrice * item.quantity);
  }, 0);

  const hasUnpricedItems = items.some(item => !item.price || item.price === 0);

  // Frete selecionado
  const selectedShippingOption = STORE_CONFIG.shippingOptions.find(
    opt => opt.id === selectedShippingId
  ) || STORE_CONFIG.shippingOptions[0];

  // O site não cobra frete: entrega é combinada no WhatsApp
  const shippingCost = 0;

  const total = subtotal + shippingCost;

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        subtotal,
        shippingCost,
        selectedShippingOption,
        selectedShippingId,
        setSelectedShippingId,
        total,
        hasUnpricedItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,

        // Favoritos
        favorites,
        toggleFavorite,
        isFavorite,

        // Dados do cliente
        customer,
        setCustomer,

        // Modais de navegação
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

        isWholesaleModalOpen,
        openWholesaleModal: () => setIsWholesaleModalOpen(true),
        closeWholesaleModal: () => setIsWholesaleModalOpen(false),

        isCompatibilityModalOpen,
        openCompatibilityModal: (prod) => {
          setCompatibilityProduct(prod);
          setIsCompatibilityModalOpen(true);
        },
        closeCompatibilityModal: () => {
          setCompatibilityProduct(null);
          setIsCompatibilityModalOpen(false);
        },
        compatibilityProduct,

        isAdminOpen,
        openAdmin: () => setIsAdminOpen(true),
        closeAdmin: () => setIsAdminOpen(false),

        isFavoritesOpen,
        openFavorites: () => setIsFavoritesOpen(true),
        closeFavorites: () => setIsFavoritesOpen(false),

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
