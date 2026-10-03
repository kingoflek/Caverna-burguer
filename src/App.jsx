import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedSection from './components/FeaturedSection';
import MenuSection from './components/MenuSection';
import HowToOrderSection from './components/HowToOrderSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import OrderReviewModal from './components/OrderReviewModal';
import FloatingCartBar from './components/FloatingCartBar';
import { CheckCircle2 } from 'lucide-react';

function AppContent() {
  const { lastAddedItem } = useCart();

  return (
    <div className="flex flex-col min-h-screen bg-caverna-950 text-caverna-100 selection:bg-redaccent-600 selection:text-white">
      {/* HEADER */}
      <Header />

      {/* MAIN SECTIONS */}
      <main className="flex-1">
        <Hero />
        <FeaturedSection />
        <MenuSection />
        <HowToOrderSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* MODALS AND DRAWERS */}
      <ProductModal />
      <CartDrawer />
      <CheckoutModal />
      <OrderReviewModal />

      {/* MOBILE FLOATING CART BAR */}
      <FloatingCartBar />

      {/* TOAST FEEDBACK WHEN ITEM IS ADDED */}
      {lastAddedItem && (
        <div className="fixed top-24 right-4 z-50 animate-fade-in pointer-events-none">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-caverna-900 border border-emerald-600/50 shadow-2xl text-white">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="text-xs">
              <span className="font-bold text-white block">{lastAddedItem}</span>
              <span className="text-caverna-300">adicionado à comanda com sucesso!</span>
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
