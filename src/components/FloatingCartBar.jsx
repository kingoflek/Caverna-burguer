import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export default function FloatingCartBar() {
  const { totalItems, subtotal, openCart, isCartOpen, isCheckoutOpen, isReviewOpen } = useCart();

  if (totalItems === 0 || isCartOpen || isCheckoutOpen || isReviewOpen) {
    return null;
  }

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-30 animate-fade-in">
      <button
        type="button"
        onClick={openCart}
        className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-redaccent-700 via-redaccent-600 to-redaccent-500 text-white shadow-2xl shadow-redaccent-950/80 border border-redaccent-400/40"
      >
        <div className="flex items-center gap-3">
          <div className="relative p-2 rounded-xl bg-black/25">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-white text-redaccent-600 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow">
              {totalItems}
            </span>
          </div>
          <div className="text-left">
            <span className="text-[10px] uppercase font-bold text-redaccent-200 block leading-tight">
              Ver Carrinho
            </span>
            <span className="text-sm font-extrabold text-white leading-tight">
              {formatPrice(subtotal)}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-black/20 px-3 py-1.5 rounded-xl">
          <span>Finalizar</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>
    </div>
  );
}
