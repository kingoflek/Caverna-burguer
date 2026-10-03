import React from 'react';
import { ArrowDown, Flame, ShoppingBag, ShieldCheck, Clock, Award } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_CONFIG } from '../config/store';

export default function Hero() {
  const { openCart, totalItems } = useCart();

  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const element = document.querySelector('#cardapio');
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
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-caverna-950">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 bg-caverna-radial opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-redaccent-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-amberaccent-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* TEXT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caverna-850/90 border border-caverna-700/60 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-redaccent-500 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-caverna-300">
                Hamburgueria Artesanal • Desde {STORE_CONFIG.foundedYear}
              </span>
            </div>

            {/* MAIN TITLE */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              O sabor que sai da <br />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-redaccent-400 via-redaccent-500 to-amberaccent-400">
                Caverna.
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="max-w-xl text-base sm:text-lg md:text-xl text-caverna-300 font-normal leading-relaxed">
              Hambúrguer artesanal, ingredientes selecionados e muito sabor.
              Monte sua comanda e envie seu pedido diretamente pelo WhatsApp.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#cardapio"
                onClick={handleScrollToMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-bold text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-redaccent-900/40 hover:shadow-redaccent-600/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Ver Cardápio</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <button
                type="button"
                onClick={() => {
                  if (totalItems > 0) {
                    openCart();
                  } else {
                    const el = document.querySelector('#cardapio');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-caverna-850 hover:bg-caverna-800 border border-caverna-700 text-white font-bold text-sm sm:text-base uppercase tracking-wider transition-all hover:border-caverna-600 shadow-sm"
              >
                <ShoppingBag className="w-5 h-5 text-redaccent-400" />
                <span>{totalItems > 0 ? `Ver Comanda (${totalItems})` : 'Fazer Pedido'}</span>
              </button>
            </div>

            {/* HIGHLIGHT PILLS */}
            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-6 border-t border-caverna-800/80 w-full max-w-lg">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-white font-bold text-base sm:text-lg flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-redaccent-500" /> 150g
                </span>
                <span className="text-xs text-caverna-400">Burgers Altos</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-caverna-800 px-3">
                <span className="text-white font-bold text-base sm:text-lg flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amberaccent-400" /> Artesanal
                </span>
                <span className="text-xs text-caverna-400">Pão & Maionese</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-white font-bold text-base sm:text-lg flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-caverna-300" /> Ágil
                </span>
                <span className="text-xs text-caverna-400">Via WhatsApp</span>
              </div>
            </div>

          </div>

          {/* IMAGE COLUMN */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* AMBIENT GLOW BACKDROP */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-redaccent-900/40 via-redaccent-700/20 to-amberaccent-500/10 blur-2xl pointer-events-none" />
            
            {/* HERO BURGER CONTAINER */}
            <div className="relative group w-full max-w-md sm:max-w-lg aspect-square rounded-3xl overflow-hidden border border-caverna-700/60 bg-caverna-900/90 shadow-2xl p-3">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src="./images/products/hero-burger.jpg"
                  alt="Hambúrguer artesanal Caverna Burger"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = './images/products/caverna-burguer.jpg';
                  }}
                />
                
                {/* OVERLAY GRADIENTS */}
                <div className="absolute inset-0 bg-gradient-to-t from-caverna-950/90 via-transparent to-transparent" />
                
                {/* FLOATING PRODUCT TAG */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-caverna border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-redaccent-400">
                        Burger do Dia
                      </span>
                      <h2 className="text-white font-display font-bold text-sm sm:text-base">
                        Top Caverna Especial
                      </h2>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-caverna-800 text-xs font-semibold text-caverna-200 border border-caverna-700">
                      150g Artesanal
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
