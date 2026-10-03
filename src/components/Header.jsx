import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Flame, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_CONFIG } from '../config/store';
import { formatPrice } from '../utils/format';

export default function Header() {
  const { totalItems, subtotal, hasUnpricedItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Favoritos', href: '#destaques' },
    { label: 'Como Pedir', href: '#como-pedir' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3 shadow-lg shadow-black/50'
          : 'bg-gradient-to-b from-caverna-950/95 via-caverna-950/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border border-redaccent-800/40 bg-caverna-900 shadow-md group-hover:border-redaccent-600 transition-colors">
              <img
                src="./images/logo.png"
                alt="Logo Caverna Burger"
                className="w-full h-full object-contain p-0.5"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = './images/logo.jpeg';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-white uppercase group-hover:text-redaccent-400 transition-colors">
                CAVERNA
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-redaccent-500 uppercase -mt-1">
                BURGER DELIVERY
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-caverna-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-redaccent-600 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* CART / COMANDA BUTTON */}
            <button
              type="button"
              onClick={openCart}
              aria-label="Abrir comanda"
              className="relative flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-caverna-850 hover:bg-caverna-800 border border-caverna-700/80 hover:border-redaccent-700/60 text-white transition-all shadow-sm group focus:outline-none focus:ring-2 focus:ring-redaccent-600"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-caverna-300 group-hover:text-redaccent-400 transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-redaccent-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-cart-pop shadow-md">
                    {totalItems}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[11px] uppercase tracking-wider text-caverna-400 font-semibold leading-tight">
                  Comanda
                </span>
                <span className="text-xs font-bold text-white leading-tight">
                  {totalItems === 0
                    ? 'Vazia'
                    : hasUnpricedItems || subtotal === 0
                    ? `${totalItems} ${totalItems === 1 ? 'item' : 'itens'}`
                    : formatPrice(subtotal)}
                </span>
              </div>
            </button>

            {/* CTA FAZER PEDIDO (DESKTOP) */}
            <a
              href="#cardapio"
              onClick={(e) => handleNavClick(e, '#cardapio')}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-redaccent-600/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-redaccent-500"
            >
              <Flame className="w-4 h-4 fill-white" />
              <span>Fazer Pedido</span>
            </a>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="md:hidden p-2 rounded-lg bg-caverna-850 border border-caverna-700 text-caverna-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-caverna border-b border-caverna-700/80 px-4 pt-4 pb-6 mt-2 animate-fade-in shadow-2xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium text-caverna-200 hover:text-white hover:bg-caverna-800 transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-caverna-500" />
              </a>
            ))}
            <div className="pt-3 border-t border-caverna-800 mt-2">
              <a
                href="#cardapio"
                onClick={(e) => handleNavClick(e, '#cardapio')}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-redaccent-600 hover:bg-redaccent-500 text-white text-sm font-bold uppercase tracking-wider shadow-md transition-colors"
              >
                <Flame className="w-4 h-4 fill-white" />
                <span>Ver Cardápio Completo</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
