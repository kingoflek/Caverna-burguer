import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import { STORE_CONFIG } from '../config/store';

export default function CartDrawer() {
  const {
    items,
    totalItems,
    subtotal,
    shippingCost,
    total,
    selectedShippingId,
    setSelectedShippingId,
    selectedShippingOption,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    openCheckout,
    customer,
    setCustomer,
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      
      {/* BACKDROP */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-secret-surface border-l border-secret-border shadow-2xl flex flex-col z-10 animate-fade-in">
          
          {/* DRAWER HEADER */}
          <div className="p-5 sm:p-6 bg-secret-card border-b border-secret-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-secret-surface border border-secret-border text-redaccent-400">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-white">
                  Seu Carrinho
                </h3>
                <span className="text-xs text-secret-muted">
                  {totalItems === 0
                    ? '0 itens'
                    : `${totalItems} ${totalItems === 1 ? 'farol selecionado' : 'faróis selecionados'}`}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={closeCart}
              aria-label="Fechar carrinho"
              className="p-2 rounded-xl text-secret-subtle hover:text-white hover:bg-secret-surface transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* DRAWER BODY */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            
            {/* EMPTY STATE */}
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-20 h-20 rounded-full bg-secret-card border border-secret-border flex items-center justify-center text-secret-subtle">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-white">
                    Seu carrinho está vazio
                  </h4>
                  <p className="text-xs sm:text-sm text-secret-muted max-w-xs">
                    Navegue pelo catálogo e escolha os faróis ideais para o seu veículo.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Ver Catálogo de Faróis
                </button>
              </div>
            ) : (
              /* LIST OF CART ITEMS */
              <div className="space-y-4">
                {items.map((item) => {
                  const isWholesaleApplied = item.wholesalePrice && item.quantity >= (item.wholesaleMinQty || 4);
                  const activePrice = isWholesaleApplied ? item.wholesalePrice : item.price;
                  const itemSubtotal = activePrice * item.quantity;

                  return (
                    <div
                      key={item.id}
                      className="p-4 rounded-2xl bg-secret-card border border-secret-border flex flex-col space-y-3"
                    >
                      <div className="flex items-start gap-3">
                        {/* THUMB */}
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-secret-dark border border-secret-border flex-shrink-0">
                          <img
                            src={item.image || './images/products/farol-onix.jpg'}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = './images/products/farol-onix.jpg';
                            }}
                          />
                        </div>

                        {/* INFO */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-display font-bold text-xs sm:text-sm text-white truncate">
                              {item.name}
                            </h4>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              aria-label={`Remover ${item.name}`}
                              className="text-secret-subtle hover:text-redaccent-400 transition-colors p-1"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex flex-wrap items-center gap-1.5 mt-1 text-[11px] text-secret-muted">
                            {item.sideLabel && (
                              <span className="bg-secret-surface px-1.5 py-0.5 rounded border border-secret-border">
                                {item.sideLabel}
                              </span>
                            )}
                            {item.sku && (
                              <span className="font-mono text-secret-subtle">
                                {item.sku}
                              </span>
                            )}
                          </div>

                          <div className="flex items-baseline gap-2 mt-1.5">
                            <span className="text-xs font-bold text-white">
                              {formatPrice(activePrice)}
                            </span>
                            {isWholesaleApplied && (
                              <span className="text-[10px] text-redaccent-400 font-bold bg-redaccent-950/60 px-1.5 py-0.5 rounded border border-redaccent-800/60">
                                Preço de Atacado Aplicado!
                              </span>
                            )}
                          </div>

                          {item.observation && (
                            <p className="text-[11px] text-secret-subtle italic bg-secret-surface px-2 py-1 rounded-md mt-2 border border-secret-border">
                              Nota: {item.observation}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* QUANTITY CONTROLS & SUBTOTAL */}
                      <div className="flex items-center justify-between pt-2 border-t border-secret-border">
                        <div className="inline-flex items-center rounded-lg bg-secret-surface border border-secret-border p-0.5">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded text-secret-muted hover:text-white transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-7 text-center font-bold text-xs text-white">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded text-secret-muted hover:text-white transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-white">
                          {formatPrice(itemSubtotal)}
                        </span>
                      </div>
                    </div>
                  );
                })}

              </div>
            )}

          </div>

          {/* DRAWER FOOTER */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 bg-secret-card border-t border-secret-border space-y-4">
              
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-secret-muted">
                  <span>Subtotal das Peças:</span>
                  <span className="font-semibold text-white">{formatPrice(subtotal)}</span>
                </div>

                <div className="flex items-center justify-between text-secret-muted">
                  <span>Entrega:</span>
                  <span className="font-semibold text-emerald-400">
                    {STORE_CONFIG.shippingLabel}
                  </span>
                </div>

                <div className="pt-2 border-t border-secret-border flex items-center justify-between text-base font-bold">
                  <span className="text-white font-display">Total das Peças:</span>
                  <span className="font-display font-black text-xl text-white">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-2">
                <button
                  type="button"
                  onClick={openCheckout}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-redaccent-900/40 transition-all transform hover:-translate-y-0.5"
                >
                  <span>Continuar para Dados de Envio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full py-2 text-center text-xs font-semibold text-secret-subtle hover:text-white transition-colors"
                >
                  Continuar escolhendo faróis
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
