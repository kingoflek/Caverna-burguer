import React, { useState } from 'react';
import { Plus, Check, Eye, Flame, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export default function ProductCard({ product }) {
  const { addToCart, openProductModal } = useCart();
  const [isAddedAnim, setIsAddedAnim] = useState(false);

  const isAvailable = product.available !== false;
  const isPriced = product.price && product.price > 0;

  const handleQuickAdd = (e) => {
    e.stopPropagation();
    if (!isAvailable) return;
    
    addToCart(product, 1, '');
    setIsAddedAnim(true);
    setTimeout(() => setIsAddedAnim(false), 1200);
  };

  const handleCardClick = () => {
    openProductModal(product);
  };

  return (
    <article
      onClick={handleCardClick}
      className={`group relative flex flex-col justify-between bg-caverna-850 hover:bg-caverna-800/90 rounded-2xl overflow-hidden border border-caverna-700/60 hover:border-redaccent-800/60 shadow-caverna-card transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
        !isAvailable ? 'opacity-60 grayscale' : ''
      }`}
    >
      <div>
        {/* PRODUCT IMAGE CONTAINER */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-caverna-900">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/products/caverna-burguer.jpg';
            }}
          />

          {/* GRADIENT OVERLAY ON HOVER */}
          <div className="absolute inset-0 bg-gradient-to-t from-caverna-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* BADGES */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            {product.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-redaccent-700/90 text-white backdrop-blur-sm shadow-md border border-redaccent-600/40">
                <Flame className="w-3 h-3 fill-white" />
                Favorito
              </span>
            )}
            {!isAvailable && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-caverna-700/90 text-caverna-300 backdrop-blur-sm shadow-md border border-caverna-600">
                <AlertCircle className="w-3 h-3" />
                Indisponível
              </span>
            )}
          </div>

          {/* QUICK VIEW ICON OVERLAY ON HOVER */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-caverna-950/80 text-white border border-white/10 shadow-lg">
            <Eye className="w-4 h-4 text-caverna-200" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-4 sm:p-5 flex flex-col space-y-2">
          {/* TITLE */}
          <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-redaccent-400 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-xs sm:text-sm text-caverna-400 font-normal line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>

      {/* FOOTER: PRICE & ADD BUTTON */}
      <div className="p-4 sm:p-5 pt-0 mt-3 flex items-center justify-between gap-3 border-t border-caverna-750/60">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-semibold text-caverna-500 tracking-wider">
            Preço
          </span>
          <span className={`font-display font-extrabold text-base sm:text-lg ${isPriced ? 'text-white' : 'text-caverna-400 font-medium italic text-sm'}`}>
            {formatPrice(product.price)}
          </span>
        </div>

        {isAvailable ? (
          <button
            type="button"
            onClick={handleQuickAdd}
            aria-label={`Adicionar ${product.name} à comanda`}
            className={`flex items-center justify-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-redaccent-500 ${
              isAddedAnim
                ? 'bg-emerald-700 text-white'
                : 'bg-redaccent-700 hover:bg-redaccent-600 text-white active:scale-95'
            }`}
          >
            {isAddedAnim ? (
              <>
                <Check className="w-4 h-4 animate-cart-pop" />
                <span className="hidden xs:inline">Adicionado</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Adicionar</span>
              </>
            )}
          </button>
        ) : (
          <span className="text-xs font-semibold text-caverna-500 px-3 py-1.5 rounded-lg bg-caverna-800 border border-caverna-700">
            Esgotado
          </span>
        )}
      </div>
    </article>
  );
}
