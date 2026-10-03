import React from 'react';
import { Flame, CheckCircle, Sparkles } from 'lucide-react';
import { STORE_CONFIG } from '../config/store';

export default function AboutSection() {
  const highlights = [
    {
      title: "Hambúrguer 100% Artesanal",
      desc: "Blends suculentos de 150g e smash burgers de 80g grelhados na temperatura ideal."
    },
    {
      title: "Ingredientes Selecionados",
      desc: "Pães frescos artesanais (brioche, australiano e gergelim) e maionese especial da casa."
    },
    {
      title: "Preparo Cuidadoso",
      desc: "Cada burger é montado com atenção a cada detalhe, do ponto da carne ao queijo derretido."
    },
    {
      title: "Milkshakes Cremosos",
      desc: "Feitos com Creme Americano premium e caldas artesanais para acompanhar sua refeição."
    }
  ];

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-caverna-900/50 relative border-t border-caverna-800/80">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-redaccent-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* IMAGE / EMBLEM COLUMN */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-md p-6 rounded-3xl bg-caverna-950 border border-caverna-800 shadow-2xl flex flex-col items-center text-center space-y-6">
              
              {/* LOGO */}
              <div className="w-36 h-36 rounded-2xl overflow-hidden border border-redaccent-800/60 p-2 bg-caverna-900 shadow-lg">
                <img
                  src="./images/logo.png"
                  alt="Logo Caverna Burger"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = './images/logo.jpeg';
                  }}
                />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-redaccent-400 font-bold">
                  Identidade & Tradição
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  {STORE_CONFIG.name}
                </h3>
                <p className="text-xs sm:text-sm text-caverna-400 italic">
                  "{STORE_CONFIG.tagline}"
                </p>
              </div>

              <div className="w-full pt-4 border-t border-caverna-850 flex items-center justify-center gap-6 text-xs text-caverna-400 font-semibold">
                <span>🔥 Burgers Artesanais</span>
                <span>•</span>
                <span>⚡ Smash</span>
                <span>•</span>
                <span>🥤 Milkshakes</span>
              </div>
            </div>
          </div>

          {/* TEXT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-caverna-800 border border-caverna-700 text-caverna-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-redaccent-400" />
              Nossa Proposta
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Sobre a Caverna
            </h2>

            <p className="text-base sm:text-lg text-caverna-200 leading-relaxed font-normal">
              Na <strong>{STORE_CONFIG.name}</strong>, o foco é transformar ingredientes selecionados e hambúrguer artesanal em uma experiência cheia de sabor.
            </p>

            <p className="text-sm sm:text-base text-caverna-400 leading-relaxed">
              Combinamos carnes nobres grelhadas na chapa bem quente, queijos especialmente derretidos, pães artesanais selecionados e molhos autênticos feitos na casa. Seja para pedir os tradicionais <strong>Burgers de 150g</strong>, nossos crocantes <strong>Smash Burgers</strong> ou se deliciar com os <strong>Milkshakes artesanais</strong>, cada pedido é preparado na hora especialmente para você.
            </p>

            {/* HIGHLIGHTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-caverna-850/60 border border-caverna-750 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-redaccent-500 flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-caverna-400 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
