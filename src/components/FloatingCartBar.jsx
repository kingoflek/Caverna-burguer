import React from 'react';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export default function FloatingCartBar() {
  const { totalItems, subtotal, hasUnpricedItems, openCart, isCartOpen, isCheckoutOpen, isReviewOpen } = useCart();

  // Se o carrinho estiver vazio ou se algum modal/drawer já estiver aberto, não mostra a barra flutuante
  if (totalItems === 0 || isCartOpen || isCheckoutOpen || isReviewOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-30 sm:hidden animate-fade-in">
      <button
        type="button"
        onClick={openCart}
        className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl bg-gradient-to-r from-redaccent-700 via-redaccent-600 to-redaccent-700 text-white shadow-2xl shadow-black/80 border border-redaccent-500/50 glow-subtle active:scale-[0.98] transition-transform"
      >
        <div className="flex items-center gap-3">
          <div className="relative p-2 rounded-xl bg-caverna-950/40 text-white">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 bg-white text-redaccent-700 text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] uppercase font-bold tracking-wider text-redaccent-200">
              Ver Comanda
            </span>
            <span className="text-sm font-extrabold text-white">
              {totalItems} {totalItems === 1 ? 'item' : 'itens'}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-black text-white">
            {hasUnpricedItems || subtotal === 0 ? 'Consultar' : formatPrice(subtotal)}
          </span>
          <ChevronRight className="w-5 h-5 text-redaccent-200" />
        </div>
      </button>
    </div>
  );
}
