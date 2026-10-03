import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Utensils } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export default function CartDrawer() {
  const {
    items,
    totalItems,
    subtotal,
    hasUnpricedItems,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    openCheckout,
    customer,
    setCustomer,
  } = useCart();

  if (!isCartOpen) return null;

  const handleGeneralNotesChange = (e) => {
    setCustomer(prev => ({
      ...prev,
      generalNotes: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* BACKDROP */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-caverna-900 border-l border-caverna-700/80 shadow-2xl flex flex-col z-10 animate-fade-in">
          
          {/* DRAWER HEADER */}
          <div className="p-5 sm:p-6 bg-caverna-950 border-b border-caverna-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-caverna-850 border border-caverna-700 text-redaccent-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-white">
                  Sua Comanda
                </h3>
                <span className="text-xs text-caverna-400">
                  {totalItems === 0
                    ? '0 itens'
                    : `${totalItems} ${totalItems === 1 ? 'item adicionado' : 'itens adicionados'}`}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={closeCart}
              aria-label="Fechar comanda"
              className="p-2 rounded-lg text-caverna-400 hover:text-white hover:bg-caverna-850 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* DRAWER BODY */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            
            {/* EMPTY STATE */}
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-20 h-20 rounded-full bg-caverna-850 border border-caverna-700/80 flex items-center justify-center text-caverna-500">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-white">
                    Seu pedido está vazio.
                  </h4>
                  <p className="text-sm text-caverna-400 max-w-xs">
                    Escolha seus favoritos no cardápio e monte seu pedido artesanal.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-4 px-6 py-3 rounded-xl bg-caverna-800 hover:bg-caverna-750 text-white font-bold text-xs uppercase tracking-wider border border-caverna-700 transition-colors"
                >
                  Ver Cardápio
                </button>
              </div>
            ) : (
              /* LIST OF CART ITEMS */
              <div className="space-y-4">
                {items.map((item) => {
                  const isPriced = item.price && item.price > 0;
                  const itemSubtotal = isPriced ? item.price * item.quantity : null;

                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-caverna-850/80 border border-caverna-750 flex flex-col space-y-3"
                    >
                      <div className="flex items-start gap-3">
                        {/* ITEM THUMB */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-caverna-900 border border-caverna-700 flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = './images/products/caverna-burguer.jpg';
                            }}
                          />
                        </div>

                        {/* INFO */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-display font-bold text-sm text-white truncate">
                              {item.name}
                            </h4>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              aria-label={`Remover ${item.name}`}
                              className="text-caverna-500 hover:text-redaccent-400 transition-colors p-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="flex items-baseline gap-2 mt-0.5">
                            <span className="text-xs font-semibold text-caverna-400">
                              {formatPrice(item.price)}
                            </span>
                            {item.quantity > 1 && isPriced && (
                              <span className="text-[11px] text-caverna-500">
                                ({item.quantity}x)
                              </span>
                            )}
                          </div>

                          {/* OBSERVATION IF ANY */}
                          {item.observation && (
                            <p className="text-xs text-redaccent-300/90 italic bg-caverna-900/60 px-2 py-1 rounded-md mt-2 border border-caverna-800">
                              Obs: {item.observation}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* QUANTITY AND SUBTOTAL */}
                      <div className="flex items-center justify-between pt-2 border-t border-caverna-800">
                        {/* CONTROLS */}
                        <div className="inline-flex items-center rounded-lg bg-caverna-900 border border-caverna-700 p-0.5">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Diminuir"
                            className="p-1 rounded text-caverna-400 hover:text-white transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-7 text-center font-bold text-xs text-white">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Aumentar"
                            className="p-1 rounded text-caverna-400 hover:text-white transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* SUBTOTAL */}
                        <div className="text-right">
                          <span className="text-xs font-bold text-white">
                            {isPriced ? formatPrice(itemSubtotal) : 'Sob consulta'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* OBSERVAÇÃO GERAL DO PEDIDO */}
                <div className="pt-2">
                  <label htmlFor="general-order-obs" className="text-xs font-bold uppercase tracking-wider text-caverna-400 block mb-1.5">
                    Observações gerais do pedido
                  </label>
                  <textarea
                    id="general-order-obs"
                    rows={2}
                    value={customer.generalNotes || ''}
                    onChange={handleGeneralNotesChange}
                    placeholder="Ex.: ponto da carne, molho separado, enviar guardanapos..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-caverna-950 border border-caverna-700 focus:border-redaccent-600 text-white placeholder-caverna-500 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-redaccent-600 transition-colors"
                  />
                </div>
              </div>
            )}

          </div>

          {/* DRAWER FOOTER (WHEN ITEMS EXIST) */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 bg-caverna-950 border-t border-caverna-800 space-y-4">
              
              {/* TOTAL ROW */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-caverna-400 uppercase tracking-wider font-semibold">
                    Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'itens'})
                  </span>
                  <span className="font-display font-bold text-lg text-white">
                    {hasUnpricedItems || subtotal === 0 ? 'Sob consulta' : formatPrice(subtotal)}
                  </span>
                </div>
                {hasUnpricedItems && (
                  <p className="text-[11px] text-amberaccent-400/90">
                    * Preços a confirmar diretamente no WhatsApp da loja.
                  </p>
                )}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={openCheckout}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-redaccent-900/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Finalizar Pedido</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full py-2.5 text-center text-xs font-semibold text-caverna-400 hover:text-white transition-colors"
                >
                  Continuar comprando
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
