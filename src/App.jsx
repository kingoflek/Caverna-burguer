import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import VehicleSelector from './components/VehicleSelector';
import FeaturedSection from './components/FeaturedSection';
import OffersSection from './components/OffersSection';
import CatalogSection from './components/CatalogSection';
import WholesaleSection from './components/WholesaleSection';
import RegionalDeliverySection from './components/RegionalDeliverySection';
import HowToBuySection from './components/HowToBuySection';
import Footer from './components/Footer';

// Modals
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderReviewModal from './components/OrderReviewModal';
import WholesaleModal from './components/WholesaleModal';
import CompatibilityModal from './components/CompatibilityModal';
import FavoritesModal from './components/FavoritesModal';
import AdminModal from './components/AdminModal';
import FloatingCartBar from './components/FloatingCartBar';

import { CheckCircle2 } from 'lucide-react';

function AppContent() {
  const { lastAddedItem } = useCart();
  
  // Estado compartilhado de busca e filtros de veículo para conectar Header, VehicleSelector e CatalogSection
  const [searchQuery, setSearchQuery] = useState('');
  const [vehicleFilters, setVehicleFilters] = useState({
    brand: 'all',
    model: 'all',
    year: 'all',
    side: 'all'
  });

  const handleHeaderSearch = (query) => {
    setSearchQuery(query);
  };

  const handleVehicleFilterSelect = (filters) => {
    setVehicleFilters(filters);
  };

  return (
    <div className="flex flex-col min-h-screen bg-secret-bg text-secret-text selection:bg-redaccent-600 selection:text-white">
      {/* 1. CABEÇALHO E NAVEGAÇÃO */}
      <Header onSearchSubmit={handleHeaderSearch} />

      {/* 2. CONTEÚDO PRINCIPAL */}
      <main className="flex-1">
        {/* HERO BANNER INSPIRADO NA IMAGEM DE REFERÊNCIA */}
        <Hero />

        {/* SELETOR RÁPIDO DE FARÓIS POR VEÍCULO */}
        <VehicleSelector 
          onSelectVehicleFilter={handleVehicleFilterSelect}
          currentFilters={vehicleFilters}
        />

        {/* SEÇÃO DE PRODUTOS EM DESTAQUE */}
        <FeaturedSection />

        {/* SEÇÃO DE OFERTAS ESPECIAIS */}
        <OffersSection />

        {/* CATÁLOGO EXCLUSIVO DE FARÓIS COM BUSCA E FILTROS */}
        <CatalogSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          vehicleFilters={vehicleFilters}
          setVehicleFilters={setVehicleFilters}
        />

        {/* SEÇÃO EXCLUSIVA PARA DISTRIBUIDORES E ATACADO */}
        <WholesaleSection />

        {/* SEÇÃO DE ENTREGA RÁPIDA REGIONAL */}
        <RegionalDeliverySection />

        {/* COMO COMPRAR NA SECRET PARTS */}
        <HowToBuySection />
      </main>

      {/* 3. RODAPÉ */}
      <Footer />

      {/* 4. MODAIS E DRAWERS */}
      <ProductModal />
      <CartDrawer />
      <CheckoutModal />
      <OrderReviewModal />
      <WholesaleModal />
      <CompatibilityModal />
      <FavoritesModal />
      <AdminModal />

      {/* 5. BARRA FLUTUANTE DE CARRINHO PARA CELULAR */}
      <FloatingCartBar />

      {/* 6. TOAST FEEDBACK VISUAL AO ADICIONAR ITEM */}
      {lastAddedItem && (
        <div className="fixed top-24 right-4 z-50 animate-fade-in pointer-events-none">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-secret-card border border-emerald-500/60 shadow-2xl text-white">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-white block line-clamp-1">{lastAddedItem}</span>
              <span className="text-secret-muted">adicionado ao carrinho com sucesso!</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
