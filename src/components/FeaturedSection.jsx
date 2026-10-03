import React from 'react';
import { Flame, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';

export default function FeaturedSection() {
  const featured = getFeaturedProducts().slice(0, 4);

  if (featured.length === 0) return null;

  return (
    <section id="destaques" className="py-16 sm:py-20 bg-caverna-900/60 relative border-t border-b border-caverna-800/60">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-redaccent-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER OF SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-redaccent-900/40 border border-redaccent-700/50 text-redaccent-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Flame className="w-3.5 h-3.5 fill-redaccent-400" />
              Seleção Especial
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
              Os Favoritos da Caverna
            </h2>
            <p className="text-caverna-400 text-sm sm:text-base mt-1">
              Os hambúrgueres mais pedidos da nossa chapa para você não errar na escolha.
            </p>
          </div>

          <a
            href="#cardapio"
            className="inline-flex items-center gap-2 text-sm font-bold text-redaccent-400 hover:text-redaccent-300 transition-colors group self-start sm:self-auto"
          >
            <span>Ver cardápio completo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* GRID OF FEATURED ITEMS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
