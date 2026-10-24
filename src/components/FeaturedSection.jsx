import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';

export default function FeaturedSection() {
  const featuredProducts = getFeaturedProducts();

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

  if (featuredProducts.length === 0) return null;

  return (
    <section id="destaques" className="py-14 sm:py-20 bg-secret-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 border-b border-secret-border pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-redaccent-950/80 border border-redaccent-800/60 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-redaccent-400" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-redaccent-300">
                Mais Procurados
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
              Faróis em Destaque
            </h2>
            <p className="text-xs sm:text-sm text-secret-muted mt-1 max-w-xl">
              Seleção dos faróis automotivos mais vendidos com pronta entrega e preços competitivos de varejo e atacado.
            </p>
          </div>

          <a
            href="#catalogo"
            onClick={handleScrollToCatalog}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-redaccent-400 hover:text-redaccent-300 uppercase tracking-wider transition-colors self-start sm:self-auto group"
          >
            <span>Ver Catálogo Completo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 8).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
