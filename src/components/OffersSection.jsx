import React from 'react';
import { Flame, Percent, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { getOfferProducts } from '../data/products';

export default function OffersSection() {
  const offerProducts = getOfferProducts();

  if (offerProducts.length === 0) return null;

  return (
    <section id="ofertas" className="py-14 sm:py-20 bg-secret-surface border-y border-secret-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 border-b border-secret-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-redaccent-600/20 border border-redaccent-500 text-white mb-2">
              <Flame className="w-3.5 h-3.5 text-redaccent-500 fill-redaccent-500" />
              <span className="text-[11px] font-black uppercase tracking-wider text-redaccent-400">
                Preços Promocionais
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Ofertas Especiais da Semana
            </h2>
            <p className="text-xs sm:text-sm text-secret-muted mt-1 max-w-xl">
              Faróis automotivos selecionados com descontos reais de varejo. Aproveite enquanto durarem os lotes promocionais.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-semibold text-secret-muted bg-secret-card px-3.5 py-2 rounded-xl border border-secret-border">
            <Percent className="w-4 h-4 text-redaccent-500" />
            <span>Condições válidas até o fim do estoque promocional</span>
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {offerProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
