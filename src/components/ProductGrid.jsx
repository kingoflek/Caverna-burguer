import React from 'react';
import ProductCard from './ProductCard';
import { CATEGORIES } from '../data/products';

export default function ProductGrid({ products, activeCategory }) {
  if (!products || products.length === 0) {
    return (
      <div className="py-16 text-center bg-caverna-900/40 rounded-2xl border border-caverna-800 p-8">
        <p className="text-caverna-400 text-lg">Nenhum produto encontrado nesta categoria.</p>
      </div>
    );
  }

  // Se uma categoria específica estiver selecionada
  if (activeCategory !== 'all') {
    const currentCat = CATEGORIES.find(c => c.id === activeCategory);

    return (
      <div className="space-y-6">
        {currentCat && (
          <div className="border-b border-caverna-800 pb-4">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              {currentCat.name}
            </h3>
            <p className="text-sm text-caverna-400 mt-1">
              {currentCat.description}
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }

  // Quando "Todos" está selecionado, agrupamos por categoria para organizar a leitura
  return (
    <div className="space-y-12">
      {CATEGORIES.map((cat) => {
        const catProducts = products.filter(p => p.category === cat.id);
        if (catProducts.length === 0) return null;

        return (
          <div key={cat.id} className="space-y-6">
            <div className="border-b border-caverna-800/80 pb-3 flex items-end justify-between">
              <div>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-caverna-400 mt-0.5">
                  {cat.description}
                </p>
              </div>
              <span className="text-xs font-semibold text-caverna-500 bg-caverna-850 px-2.5 py-1 rounded-md border border-caverna-800">
                {catProducts.length} {catProducts.length === 1 ? 'item' : 'itens'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {catProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
