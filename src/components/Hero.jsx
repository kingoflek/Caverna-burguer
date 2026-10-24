import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Tag, 
  Truck, 
  Sparkles, 
  Layers, 
  Users, 
  CheckCircle2, 
  Headphones,
  Award,
  Building2
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { STORE_CONFIG } from '../config/store';

export default function Hero() {
  const { openWholesaleModal } = useCart();

  const handleScrollToCatalog = (e) => {
    e.preventDefault();
    const element = document.querySelector('#catalogo');
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

  const handleScrollToWholesale = (e) => {
    e.preventDefault();
    const element = document.querySelector('#distribuidores');
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      openWholesaleModal();
    }
  };

  return (
    <section id="inicio" className="relative pt-28 pb-12 lg:pt-32 lg:pb-16 overflow-hidden bg-secret-bg">
      
      {/* BACKGROUND AMBIENT RED LIGHTING */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-redaccent-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-[400px] h-[400px] bg-redaccent-700/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 subtle-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* HERO CONTAINER WITH REFERENCE SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* MAIN HERO BANNER (LEFT 8 COLS) */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden border border-secret-border bg-gradient-to-br from-secret-surface via-secret-card to-secret-dark shadow-2xl flex flex-col justify-between min-h-[480px] sm:min-h-[520px] p-6 sm:p-10 lg:p-12">
            
            {/* BACKGROUND HIGH-END HEADLIGHT IMAGE */}
            <div className="absolute right-0 top-0 bottom-0 w-full sm:w-3/5 lg:w-2/3 pointer-events-none z-0 overflow-hidden">
              <img
                src="./images/hero-headlight-clean.png"
                alt="Farol automotivo LED de alta tecnologia"
                className="w-full h-full object-cover object-right-center opacity-75 sm:opacity-90 transform hover:scale-105 transition-transform duration-1000"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = './images/products/farol-polo-virtus.jpg';
                }}
              />
              {/* GRADIENT MASK FOR TEXT READABILITY */}
              <div className="absolute inset-0 bg-gradient-to-r from-secret-surface via-secret-surface/90 to-transparent sm:via-secret-surface/75" />
              <div className="absolute inset-0 bg-gradient-to-t from-secret-dark via-transparent to-transparent sm:hidden" />
            </div>

            {/* TOP BRANDING & BADGE */}
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secret-bg/80 border border-secret-border shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-redaccent-500 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-secret-muted">
                  Especialista Exclusiva em Faróis
                </span>
              </div>

              {/* LOGO SYMBOL WATERMARK IN BANNER */}
              <div className="pt-2">
                <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white tracking-tight uppercase leading-[1.05]">
                  SECRET <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-redaccent-500 via-redaccent-400 to-white">
                    PARTS
                  </span>
                </h1>
                
                <p className="font-display font-bold text-lg sm:text-2xl text-white mt-3 italic tracking-wide">
                  "Faróis automotivos com preço de verdade."
                </p>
              </div>

              {/* SUBTITLE */}
              <p className="max-w-lg text-xs sm:text-sm md:text-base text-secret-muted font-normal leading-relaxed pt-1">
                Encontre o farol certo para seu veículo, com preços competitivos e entrega rápida na região atendida. Atendimento especializado para consumidor final e distribuidor.
              </p>
            </div>

            {/* THREE TRUST PILLS (DIRECTLY FROM REFERENCE IMAGE) */}
            <div className="relative z-10 pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-xl pb-6">
                
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-secret-bg/70 border border-secret-border/80 backdrop-blur-sm">
                  <div className="p-1.5 rounded-lg bg-redaccent-950/80 border border-redaccent-800/40 text-redaccent-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-[11px]">
                    <span className="font-bold text-white block">Qualidade</span>
                    <span className="text-secret-subtle text-[10px]">Garantida</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-secret-bg/70 border border-secret-border/80 backdrop-blur-sm">
                  <div className="p-1.5 rounded-lg bg-redaccent-950/80 border border-redaccent-800/40 text-redaccent-400">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div className="text-[11px]">
                    <span className="font-bold text-white block">Preços</span>
                    <span className="text-secret-subtle text-[10px]">Competitivos</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-secret-bg/70 border border-secret-border/80 backdrop-blur-sm">
                  <div className="p-1.5 rounded-lg bg-redaccent-950/80 border border-redaccent-800/40 text-redaccent-400">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div className="text-[11px]">
                    <span className="font-bold text-white block">Entrega Rápida</span>
                    <span className="text-secret-subtle text-[10px]">na sua região</span>
                  </div>
                </div>

              </div>

              {/* ACTION BUTTONS (MANDATORY IN ITEM 6) */}
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <a
                  href="#catalogo"
                  onClick={handleScrollToCatalog}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-500 hover:from-redaccent-600 hover:to-redaccent-400 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-redaccent-950/60 hover:shadow-redaccent-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>VER CATÁLOGO DE FARÓIS</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#distribuidores"
                  onClick={handleScrollToWholesale}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-secret-bg/90 hover:bg-secret-surface border border-secret-border hover:border-redaccent-600/60 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all"
                >
                  <Building2 className="w-4 h-4 text-redaccent-500" />
                  <span>COMPRAR PARA DISTRIBUIÇÃO</span>
                </a>
              </div>

            </div>

          </div>

          {/* SIDEBAR BENEFIT CARD (RIGHT 4 COLS - FROM REFERENCE DESIGN) */}
          <div className="lg:col-span-4 rounded-3xl border border-secret-border bg-gradient-to-b from-secret-card to-secret-surface p-6 sm:p-7 flex flex-col justify-between shadow-2xl space-y-6">
            
            <div>
              <div className="border-b border-secret-border pb-4 mb-5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-secret-subtle block">
                  Por que comprar na
                </span>
                <h3 className="font-display font-black text-xl text-redaccent-500 uppercase tracking-tight">
                  SECRET PARTS?
                </h3>
              </div>

              {/* 4 BENÉFICIOS COMERCIAIS REAIS */}
              <div className="space-y-4">
                
                {/* 1. Preços competitivos */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-redaccent-950/60 border border-redaccent-800/40 flex items-center justify-center text-redaccent-400 flex-shrink-0 mt-0.5">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Preços competitivos
                    </h4>
                    <p className="text-xs text-secret-muted leading-relaxed">
                      Condições justas direto do distribuidor para você economizar.
                    </p>
                  </div>
                </div>

                {/* 2. Variedade de faróis */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-redaccent-950/60 border border-redaccent-800/40 flex items-center justify-center text-redaccent-400 flex-shrink-0 mt-0.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Grande variedade
                    </h4>
                    <p className="text-xs text-secret-muted leading-relaxed">
                      Modelos máscara negra, projetor e LED para as principais montadoras.
                    </p>
                  </div>
                </div>

                {/* 3. Entrega rápida */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-redaccent-950/60 border border-redaccent-800/40 flex items-center justify-center text-redaccent-400 flex-shrink-0 mt-0.5">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Entrega rápida regional
                    </h4>
                    <p className="text-xs text-secret-muted leading-relaxed">
                      Agilidade de envio na região para você não ficar com o carro parado.
                    </p>
                  </div>
                </div>

                {/* 4. Atendimento especializado */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-redaccent-950/60 border border-redaccent-800/40 flex items-center justify-center text-redaccent-400 flex-shrink-0 mt-0.5">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Atendimento especializado
                    </h4>
                    <p className="text-xs text-secret-muted leading-relaxed">
                      Conferência técnica de ano e lado antes do envio para zero erros.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* BOTTOM HIGHLIGHT PILL */}
            <div 
              onClick={openWholesaleModal}
              className="p-3.5 rounded-2xl border border-redaccent-800/60 bg-gradient-to-r from-redaccent-950/40 to-secret-card hover:border-redaccent-500 cursor-pointer transition-colors flex items-center gap-3 group"
            >
              <div className="p-2 rounded-xl bg-redaccent-600 text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                <Users className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase font-bold text-redaccent-400 block tracking-wider">
                  Varejo e Atacado
                </span>
                <span className="text-xs font-semibold text-white truncate block">
                  Condições especiais para compras em quantidade!
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
