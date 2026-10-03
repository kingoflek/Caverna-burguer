import React, { useState } from 'react';
import CategoryNavigation from './CategoryNavigation';
import ProductGrid from './ProductGrid';
import { PRODUCTS, getProductsByCategory } from '../data/products';
import { Utensils } from 'lucide-react';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = getProductsByCategory(activeCategory);

  return (
    <section id="cardapio" className="py-16 sm:py-24 bg-caverna-950 relative">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-redaccent-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-caverna-850 border border-caverna-700/80 text-caverna-300 text-xs font-bold uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5 text-redaccent-400" />
            Cardápio Artesanal
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Nosso Cardápio
          </h2>
          <p className="text-caverna-400 text-sm sm:text-base">
            Hambúrgueres de 150g no ponto certo, smash burgers ultra crocantes e milkshakes cremosos feitos na hora.
          </p>
        </div>

        {/* CATEGORY TABS */}
        <div className="sticky top-20 z-20 pt-2 pb-3 bg-caverna-950/90 backdrop-blur-md">
          <CategoryNavigation
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
        </div>

        {/* PRODUCTS GRID */}
        <ProductGrid
          products={filteredProducts}
          activeCategory={activeCategory}
        />

      </div>
    </section>
  );
}
