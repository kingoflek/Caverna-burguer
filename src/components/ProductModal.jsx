import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Flame, AlertCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export default function ProductModal() {
  const { selectedProduct, closeProductModal, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState('');
  const [removedIngredients, setRemovedIngredients] = useState([]);

  // Reseta o estado quando um novo produto é aberto
  useEffect(() => {
    if (selectedProduct) {
      setQuantity(1);
      setObservation('');
      setRemovedIngredients([]);
    }
  }, [selectedProduct]);

  // Tecla ESC para fechar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeProductModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeProductModal]);

  if (!selectedProduct) return null;

  const isAvailable = selectedProduct.available !== false;
  const isPriced = selectedProduct.price && selectedProduct.price > 0;

  const handleAdd = () => {
    if (!isAvailable) return;

    // Combina ingredientes removidos com a observação digitada
    let finalObs = observation.trim();
    if (removedIngredients.length > 0) {
      const removedText = `Sem: ${removedIngredients.join(', ')}`;
      finalObs = finalObs ? `${removedText} | Obs: ${finalObs}` : removedText;
    }

    addToCart(selectedProduct, quantity, finalObs);
    closeProductModal();
  };

  const toggleRemoveIngredient = (ing) => {
    setRemovedIngredients(prev =>
      prev.includes(ing) ? prev.filter(i => i !== ing) : [...prev, ing]
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      
      {/* BACKDROP */}
      <div
        onClick={closeProductModal}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* MODAL DIALOG */}
      <div className="relative w-full max-w-2xl bg-caverna-900 rounded-3xl overflow-hidden border border-caverna-700/80 shadow-caverna-modal my-auto z-10 animate-fade-in flex flex-col max-h-[90vh]">
        
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={closeProductModal}
          aria-label="Fechar detalhes do produto"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-caverna-950/80 text-caverna-300 hover:text-white border border-white/10 hover:border-white/20 transition-all focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* SCROLLABLE CONTENT */}
        <div className="overflow-y-auto overflow-x-hidden flex-1">
          
          {/* PRODUCT IMAGE */}
          <div className="relative w-full h-56 sm:h-72 md:h-80 bg-caverna-950">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = './images/products/caverna-burguer.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-caverna-900 via-transparent to-transparent" />
            
            {selectedProduct.featured && (
              <div className="absolute bottom-4 left-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-redaccent-700 text-white shadow-lg">
                  <Flame className="w-3.5 h-3.5 fill-white" />
                  Destaque da Caverna
                </span>
              </div>
            )}
          </div>

          {/* PRODUCT INFORMATION */}
          <div className="p-5 sm:p-7 space-y-6">
            
            {/* TITLE & PRICE */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-redaccent-400">
                  {selectedProduct.category === 'burgers'
                    ? 'Burger Artesanal 150g'
                    : selectedProduct.category === 'smash'
                    ? 'Smash Burger'
                    : 'Milkshake Premium'}
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-0.5">
                  {selectedProduct.name}
                </h3>
              </div>

              <div className="flex flex-col sm:items-end">
                <span className="text-[11px] uppercase font-semibold text-caverna-400">
                  Preço unitário
                </span>
                <span className={`font-display font-black text-2xl ${isPriced ? 'text-white' : 'text-caverna-400 italic text-lg'}`}>
                  {formatPrice(selectedProduct.price)}
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="bg-caverna-850/80 p-4 rounded-2xl border border-caverna-800">
              <span className="text-xs uppercase font-bold text-caverna-400 block mb-1">
                Ingredientes & Preparo
              </span>
              <p className="text-sm sm:text-base text-caverna-200 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>

            {/* REMOÇÃO RÁPIDA DE INGREDIENTES (PREPARADO PARA EXPANSÃO) */}
            {selectedProduct.withoutIngredients && selectedProduct.withoutIngredients.length > 0 && (
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-caverna-400 block mb-2">
                  Deseja retirar algum ingrediente?
                </label>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.withoutIngredients.map((ingredient) => {
                    const isRemoved = removedIngredients.includes(ingredient);
                    return (
                      <button
                        key={ingredient}
                        type="button"
                        onClick={() => toggleRemoveIngredient(ingredient)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-colors ${
                          isRemoved
                            ? 'bg-redaccent-900/60 border-redaccent-600 text-redaccent-300 line-through'
                            : 'bg-caverna-850 hover:bg-caverna-800 border-caverna-700 text-caverna-300'
                        }`}
                      >
                        {isRemoved ? `✕ Sem ${ingredient}` : ingredient}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CAMPO DE OBSERVAÇÃO */}
            <div>
              <label htmlFor="item-obs" className="text-xs font-bold uppercase tracking-wider text-caverna-400 block mb-2">
                Observações específicas do lanche
              </label>
              <textarea
                id="item-obs"
                rows={2}
                value={observation}
                onChange={(e) => setObservation(e.target.value)}
                placeholder="Ex.: retirar cebola, molho separado, bem passado..."
                className="w-full px-4 py-3 rounded-xl bg-caverna-950 border border-caverna-700/80 focus:border-redaccent-600 text-white placeholder-caverna-500 text-sm focus:outline-none focus:ring-1 focus:ring-redaccent-600 transition-colors"
              />
            </div>

          </div>
        </div>

        {/* MODAL FOOTER */}
        <div className="p-4 sm:p-6 bg-caverna-950 border-t border-caverna-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* QUANTITY CONTROLS */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <span className="text-xs font-bold uppercase text-caverna-400 sm:hidden">
              Quantidade:
            </span>
            <div className="inline-flex items-center rounded-xl bg-caverna-850 border border-caverna-700 p-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Diminuir quantidade"
                className="p-2 rounded-lg text-caverna-300 hover:text-white hover:bg-caverna-800 transition-colors disabled:opacity-40"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-bold text-white text-base">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Aumentar quantidade"
                className="p-2 rounded-lg text-caverna-300 hover:text-white hover:bg-caverna-800 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="button"
            onClick={handleAdd}
            disabled={!isAvailable}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-redaccent-900/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Adicionar à Comanda</span>
            {isPriced && (
              <span className="font-extrabold text-white pl-1">
                • {formatPrice(selectedProduct.price * quantity)}
              </span>
            )}
          </button>

        </div>

      </div>
    </div>
  );
}
