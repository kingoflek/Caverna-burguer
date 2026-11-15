import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Search, 
  Truck, 
  Heart, 
  User, 
  MessageCircle, 
  ChevronRight,
  ShieldCheck,
  Building2,
  Lock
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_CONFIG } from '../config/store';
import { formatPrice } from '../utils/format';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export default function Header({ onSearchSubmit }) {
  const { 
    totalItems, 
    subtotal, 
    openCart, 
    favorites, 
    openFavorites,
    openWholesaleModal,
    openAdmin
  } = useCart();
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerSearch, setHeaderSearch] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Catálogo de Faróis', href: '#catalogo' },
    { label: 'Faróis por Veículo', href: '#seletor-veiculo' },
    { label: 'Ofertas', href: '#ofertas' },
    { label: 'Venda para Distribuidores', href: '#distribuidores' },
    { label: 'Como Comprar', href: '#como-comprar' },
    { label: 'Entrega Regional', href: '#entrega-regional' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(headerSearch);
    }
    const catElement = document.querySelector('#catalogo');
    if (catElement) {
      const headerOffset = 90;
      const elementPosition = catElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppContact = () => {
    const defaultMsg = "Olá Secret Parts! Gostaria de consultar a disponibilidade de um farol automotivo.";
    const url = generateWhatsAppUrl(defaultMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-2.5 shadow-2xl shadow-black/80'
          : 'bg-secret-bg/95 border-b border-secret-border py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: LOGO, SEARCH BAR, USER ACTIONS */}
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          
          {/* LOGO */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-2 flex-shrink-0 group focus:outline-none"
            aria-label="Secret Parts Home"
          >
            <img
              src="./images/logo-header.png"
              alt="SECRET PARTS - Faróis Automotivos"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = './images/logo.svg';
              }}
            />
          </a>

          {/* BROAD SEARCH BAR (DESKTOP) */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden md:flex flex-1 max-w-xl relative"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={headerSearch}
                onChange={(e) => {
                  setHeaderSearch(e.target.value);
                  if (onSearchSubmit) onSearchSubmit(e.target.value);
                }}
                placeholder="Busque por peça, modelo (ex: Gol, Palio, Celta), marca ou código OEM..."
                className="w-full pl-10 pr-24 py-2.5 rounded-full bg-secret-surface border border-secret-border text-white placeholder-secret-subtle text-xs sm:text-sm focus:outline-none focus:border-redaccent-500 focus:ring-1 focus:ring-redaccent-500 transition-colors shadow-inner"
              />
              <Search className="w-4 h-4 text-secret-subtle absolute left-3.5 top-3" />
              <button
                type="submit"
                className="absolute right-1.5 top-1 bottom-1 px-4 rounded-full bg-redaccent-600 hover:bg-redaccent-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Buscar
              </button>
            </div>
          </form>

          {/* RIGHT ACTION BUTTONS */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            
            {/* WHATSAPP DIRECT ACTION */}
            <button
              type="button"
              onClick={handleWhatsAppContact}
              className="hidden xl:inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-800/60 text-emerald-300 text-xs font-semibold transition-colors"
              title="Fale direto com nossos especialistas no WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Atendimento</span>
            </button>

            {/* WHOLESALE BADGE BUTTON */}
            <button
              type="button"
              onClick={openWholesaleModal}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-secret-card hover:bg-secret-cardHover border border-secret-border text-secret-muted hover:text-white text-xs font-semibold transition-colors"
            >
              <Building2 className="w-3.5 h-3.5 text-redaccent-500" />
              <span>Atacado B2B</span>
            </button>

            {/* FAVORITES BUTTON */}
            <button
              type="button"
              onClick={openFavorites}
              aria-label="Ver produtos favoritos"
              className="relative p-2.5 rounded-xl bg-secret-card hover:bg-secret-cardHover border border-secret-border text-secret-muted hover:text-white transition-colors"
              title="Faróis Favoritos"
            >
              <Heart className={`w-4 h-4 ${favorites.length > 0 ? 'text-redaccent-500 fill-redaccent-500' : ''}`} />
              {favorites.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-redaccent-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* CART / COMANDA BUTTON */}
            <button
              type="button"
              onClick={openCart}
              aria-label="Abrir carrinho de compras"
              className="relative flex items-center gap-2.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl bg-secret-card hover:bg-secret-cardHover border border-secret-border hover:border-redaccent-600 text-white transition-all shadow-sm group focus:outline-none"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-secret-muted group-hover:text-redaccent-500 transition-colors" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-redaccent-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-cart-pop shadow-md">
                    {totalItems}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-wider text-secret-subtle font-bold leading-tight">
                  Carrinho
                </span>
                <span className="text-xs font-bold text-white leading-tight">
                  {totalItems === 0
                    ? '0 itens'
                    : formatPrice(subtotal)}
                </span>
              </div>
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="md:hidden p-2.5 rounded-xl bg-secret-card border border-secret-border text-secret-muted hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* MOBILE SEARCH BAR */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="mt-3 md:hidden relative"
        >
          <input
            type="text"
            value={headerSearch}
            onChange={(e) => {
              setHeaderSearch(e.target.value);
              if (onSearchSubmit) onSearchSubmit(e.target.value);
            }}
            placeholder="Buscar por veículo (ex: Gol, Palio, Celta) ou código..."
            className="w-full pl-9 pr-20 py-2 rounded-full bg-secret-surface border border-secret-border text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500"
          />
          <Search className="w-3.5 h-3.5 text-secret-subtle absolute left-3 top-2.5" />
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 px-3 rounded-full bg-redaccent-600 text-white font-bold text-[11px] uppercase tracking-wider"
          >
            Buscar
          </button>
        </form>

        {/* LOWER BAR: MAIN NAVIGATION & REGIONAL BADGE (DESKTOP) */}
        <div className="hidden md:flex items-center justify-between border-t border-secret-border/60 mt-2.5 pt-2">
          <nav className="flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs lg:text-sm font-medium text-secret-muted hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-redaccent-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* REGIONAL DELIVERY BADGE */}
          <a
            href="#entrega-regional"
            onClick={(e) => handleNavClick(e, '#entrega-regional')}
            className="flex items-center gap-2 text-xs font-semibold text-secret-muted hover:text-white transition-colors group cursor-pointer"
          >
            <Truck className="w-4 h-4 text-redaccent-500 group-hover:scale-110 transition-transform" />
            <span>Entrega Rápida na sua Região</span>
          </a>
        </div>

      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-secret border-b border-secret-border px-4 pt-3 pb-6 mt-2 animate-fade-in shadow-2xl">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium text-secret-muted hover:text-white hover:bg-secret-surface transition-colors"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-secret-subtle" />
              </a>
            ))}

            <div className="pt-3 border-t border-secret-border mt-2 space-y-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWholesaleModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secret-card border border-redaccent-900/60 text-white text-xs font-bold uppercase tracking-wider"
              >
                <Building2 className="w-4 h-4 text-redaccent-500" />
                <span>Cotação para Atacado / Lojistas</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppContact();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Atendimento no WhatsApp</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
