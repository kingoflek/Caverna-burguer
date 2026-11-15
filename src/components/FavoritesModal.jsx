import React from 'react';
import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, getProductModels } from '../data/products';
import { formatPrice } from '../utils/format';

export default function FavoritesModal() {
  const { 
    isFavoritesOpen, 
    closeFavorites, 
    favorites, 
    toggleFavorite, 
    addToCart,
    openProductModal 
  } = useCart();

  if (!isFavoritesOpen) return null;

  const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div
        onClick={closeFavorites}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl bg-secret-surface rounded-3xl overflow-hidden border border-secret-border shadow-secret-modal my-auto z-10 animate-fade-in flex flex-col max-h-[85vh]">
        
        {/* HEADER */}
        <div className="p-5 bg-secret-card border-b border-secret-border flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-redaccent-950/80 border border-redaccent-800/60 text-redaccent-400">
              <Heart className="w-5 h-5 fill-redaccent-500" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-white">
                Faróis Favoritos
              </h3>
              <span className="text-xs text-secret-muted">
                {favoriteProducts.length} {favoriteProducts.length === 1 ? 'farol salvo' : 'faróis salvos'}
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeFavorites}
            className="p-1.5 rounded-lg text-secret-subtle hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* BODY */}
        <div className="overflow-y-auto p-5 space-y-3 flex-1">
          {favoriteProducts.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <div className="w-16 h-16 rounded-full bg-secret-card border border-secret-border flex items-center justify-center text-secret-subtle mx-auto">
                <Heart className="w-7 h-7" />
              </div>
              <h4 className="font-display font-bold text-white text-base">
                Você ainda não salvou faróis favoritos
              </h4>
              <p className="text-xs text-secret-muted max-w-xs mx-auto">
                Clique no coração nos cards dos produtos para salvá-los e comparar mais tarde.
              </p>
            </div>
          ) : (
            favoriteProducts.map(product => (
              <div
                key={product.id}
                className="p-3.5 rounded-2xl bg-secret-card border border-secret-border flex items-center justify-between gap-3 hover:border-secret-borderLight transition-colors"
              >
                <div 
                  onClick={() => {
                    closeFavorites();
                    openProductModal(product);
                  }}
                  className="flex items-center gap-3 min-w-0 flex-1 cursor-pointer"
                >
                  <img
                    src={product.images?.[0] || './images/products/farol-onix.jpg'}
                    alt=""
                    className="w-14 h-14 rounded-xl object-cover bg-secret-dark flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1 text-xs">
                    <span className="text-[10px] uppercase font-bold text-redaccent-400 block truncate">
                      {product.vehicleBrand} {getProductModels(product).join(' / ')} ({product.yearStart}-{product.yearEnd})
                    </span>
                    <h5 className="font-bold text-white truncate text-sm">
                      {product.name}
                    </h5>
                    <span className="font-display font-extrabold text-sm text-white block mt-0.5">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product, 1);
                      closeFavorites();
                    }}
                    className="p-2 rounded-xl bg-redaccent-600 hover:bg-redaccent-500 text-white"
                    title="Adicionar ao Carrinho"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleFavorite(product.id)}
                    className="p-2 rounded-xl bg-secret-surface text-secret-subtle hover:text-redaccent-400"
                    title="Remover"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
