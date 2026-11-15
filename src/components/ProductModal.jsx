import React, { useState, useEffect } from 'react';
import { 
  X, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  HelpCircle, 
  Truck, 
  RotateCcw, 
  Check, 
  AlertCircle,
  Building2,
  Calendar,
  Layers,
  Sparkles,
  Info
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import { STORE_CONFIG } from '../config/store';
import { STOCK_STATUS_CONFIG, getProductModels } from '../data/products';
import { buildCompatibilityInquiryMessage, generateWhatsAppUrl } from '../utils/whatsapp';

export default function ProductModal() {
  const { 
    selectedProduct, 
    closeProductModal, 
    addToCart, 
    openCheckout,
    openCompatibilityModal 
  } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [observation, setObservation] = useState('');
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      setQuantity(1);
      setActiveImageIndex(0);
      setObservation('');
      setIsAddedFeedback(false);
    }
  }, [selectedProduct]);

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

  const isAvailable = selectedProduct.stockStatus !== 'indisponivel';
  const isPriced = selectedProduct.price && selectedProduct.price > 0;
  const statusInfo = STOCK_STATUS_CONFIG[selectedProduct.stockStatus] || STOCK_STATUS_CONFIG.disponivel;
  const images = selectedProduct.images?.length > 0 ? selectedProduct.images : ['./images/products/farol-onix.jpg'];

  const handleAddToCart = () => {
    if (!isAvailable) return;
    addToCart(selectedProduct, quantity, observation);
    setIsAddedFeedback(true);
    setTimeout(() => {
      setIsAddedFeedback(false);
      closeProductModal();
    }, 900);
  };

  const handleDirectWhatsAppBuy = () => {
    if (!isAvailable) return;
    addToCart(selectedProduct, quantity, observation);
    closeProductModal();
    openCheckout();
  };

  const handleDirectCompatibilityQuestion = () => {
    closeProductModal();
    openCompatibilityModal(selectedProduct);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      
      {/* BACKDROP */}
      <div
        onClick={closeProductModal}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* MODAL CONTAINER */}
      <div className="relative w-full max-w-4xl bg-secret-surface rounded-3xl overflow-hidden border border-secret-border shadow-secret-modal my-auto z-10 animate-fade-in flex flex-col max-h-[92vh]">
        
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={closeProductModal}
          aria-label="Fechar detalhes do farol"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-secret-dark/80 text-secret-muted hover:text-white border border-white/10 hover:border-white/20 transition-all focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* SCROLLABLE BODY */}
        <div className="overflow-y-auto overflow-x-hidden flex-1 p-5 sm:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* PHOTO GALLERY (LEFT 5 COLS) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-secret-dark border border-secret-border shadow-md">
                <img
                  src={images[activeImageIndex] || images[0]}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = './images/products/farol-onix.jpg';
                  }}
                />
                
                {selectedProduct.isOffer && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-redaccent-600 text-white shadow-md">
                    Oferta Especial
                  </span>
                )}
              </div>

              {/* THUMBNAILS IF MULTIPLE */}
              {images.length > 1 && (
                <div className="flex gap-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border transition-all ${
                        activeImageIndex === idx ? 'border-redaccent-500 scale-105' : 'border-secret-border opacity-60'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* STOCK STATUS BOX */}
              <div className="p-3.5 rounded-xl bg-secret-card border border-secret-border flex items-center justify-between text-xs">
                <span className="text-secret-muted font-semibold">Disponibilidade:</span>
                <span className={`inline-flex items-center gap-1.5 font-bold ${statusInfo.color}`}>
                  <span className="w-2 h-2 rounded-full bg-current" />
                  {statusInfo.label}
                </span>
              </div>

              {/* TRUST BOXES */}
              <div className="space-y-2 pt-2 text-xs text-secret-muted">
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-secret-card/60 border border-secret-border/50">
                  <RotateCcw className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{STORE_CONFIG.returnPolicy}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-lg bg-secret-card/60 border border-secret-border/50">
                  <Truck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Entrega local sem custo, combinada no WhatsApp</span>
                </div>
              </div>
            </div>

            {/* PRODUCT DETAILS (RIGHT 7 COLS) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* HEADER TAGS */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-redaccent-400 bg-redaccent-950/60 px-2.5 py-1 rounded border border-redaccent-800/60">
                    {selectedProduct.vehicleBrand} • {getProductModels(selectedProduct).join(' / ')}
                  </span>
                  <span className="text-[11px] font-semibold text-secret-muted bg-secret-card px-2.5 py-1 rounded border border-secret-border">
                    Anos: {selectedProduct.yearStart} a {selectedProduct.yearEnd}
                  </span>
                  <span className="text-[11px] font-semibold text-secret-muted bg-secret-card px-2.5 py-1 rounded border border-secret-border">
                    {selectedProduct.sideLabel}
                  </span>
                </div>

                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight">
                  {selectedProduct.name}
                </h2>
              </div>

              {/* CODES & MANUFACTURER */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3 rounded-xl bg-secret-card border border-secret-border text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-secret-subtle block">
                    Cód. Secret Parts
                  </span>
                  <span className="font-mono font-bold text-white">
                    {selectedProduct.sku || 'SP-FAROL'}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-secret-subtle block">
                    Cód. Original (OEM)
                  </span>
                  <span className="font-mono font-bold text-white">
                    {selectedProduct.oemCode || 'Consulte'}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-secret-subtle block">
                    Fabricante
                  </span>
                  <span className="font-semibold text-white">
                    {selectedProduct.manufacturer || 'Consulte'}
                  </span>
                </div>
              </div>

              {/* PRICE HIGHLIGHT */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-secret-card to-secret-surface border border-secret-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-secret-subtle block">
                    Preço de Varejo Unitário
                  </span>
                  <div className="flex items-baseline gap-2">
                    {selectedProduct.originalPrice && selectedProduct.isOffer && (
                      <span className="text-sm text-secret-subtle line-through">
                        {formatPrice(selectedProduct.originalPrice)}
                      </span>
                    )}
                    <span className="font-display font-black text-2xl sm:text-3xl text-white">
                      {formatPrice(selectedProduct.price)}
                    </span>
                  </div>
                </div>

                {selectedProduct.wholesalePrice && (
                  <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-secret-border pt-3 sm:pt-0 sm:pl-4">
                    <span className="text-[11px] font-bold uppercase text-redaccent-400 block flex items-center sm:justify-end gap-1">
                      <Building2 className="w-3.5 h-3.5" /> Condição Atacado:
                    </span>
                    <span className="text-base font-extrabold text-white">
                      {formatPrice(selectedProduct.wholesalePrice)}
                    </span>
                    <span className="text-[11px] text-secret-subtle block">
                      A partir de {selectedProduct.wholesaleMinQty || 4} unidades
                    </span>
                  </div>
                )}
              </div>

              {/* COMPATIBILITY NOTICE & VEHICLE CHECK */}
              <div className="p-4 rounded-2xl bg-secret-card border border-secret-border space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                  <Info className="w-4 h-4 text-redaccent-400" />
                  <span>Compatibilidade Confirmada</span>
                </div>
                <p className="text-xs text-secret-muted leading-relaxed">
                  {selectedProduct.compatibilityNotes}
                </p>
                {selectedProduct.version && (
                  <p className="text-xs text-secret-subtle pt-1">
                    <strong>Versões:</strong> {selectedProduct.version}
                  </p>
                )}
              </div>

              {/* TECHNICAL SPECS TABLE */}
              {selectedProduct.specifications && (
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-secret-subtle block">
                    Especificações Técnicas
                  </span>
                  <div className="divide-y divide-secret-border rounded-xl bg-secret-card border border-secret-border text-xs">
                    {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                      <div key={key} className="p-2.5 flex items-start justify-between gap-4">
                        <span className="font-semibold text-secret-muted capitalize">
                          {key}:
                        </span>
                        <span className="text-right text-white font-medium">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DESCRIPTION */}
              {selectedProduct.description && (
                <div className="text-xs sm:text-sm text-secret-muted leading-relaxed">
                  <p>{selectedProduct.description}</p>
                </div>
              )}

              {/* OPTIONAL NOTES INPUT */}
              <div>
                <label htmlFor="product-notes" className="text-xs font-bold uppercase tracking-wider text-secret-subtle block mb-1.5">
                  Observações ou Modelo Exato do seu Carro (opcional):
                </label>
                <input
                  id="product-notes"
                  type="text"
                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}
                  placeholder="Ex.: Onix 2017 LTZ 1.4 Manual com motor elétrico..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-secret-card border border-secret-border text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500"
                />
              </div>

            </div>

          </div>

        </div>

        {/* MODAL FOOTER WITH 3 MANDATORY BUTTONS (ITEM 8) */}
        <div className="p-4 sm:p-6 bg-secret-card border-t border-secret-border flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* QUANTITY CONTROL */}
          <div className="flex items-center justify-between w-full sm:w-auto gap-3">
            <span className="text-xs font-bold uppercase text-secret-subtle sm:hidden">
              Qtd:
            </span>
            <div className="inline-flex items-center rounded-xl bg-secret-surface border border-secret-border p-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Diminuir quantidade"
                className="p-1.5 rounded-lg text-secret-muted hover:text-white hover:bg-secret-card transition-colors disabled:opacity-40"
                disabled={quantity <= 1}
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-9 text-center font-bold text-white text-sm">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Aumentar quantidade"
                className="p-1.5 rounded-lg text-secret-muted hover:text-white hover:bg-secret-card transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ACTION BUTTONS GROUP */}
          <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto flex-1 sm:justify-end">
            
            {/* BUTTON 1: TIRAR DÚVIDAS SOBRE COMPATIBILIDADE */}
            <button
              type="button"
              onClick={handleDirectCompatibilityQuestion}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-secret-surface hover:bg-secret-border border border-secret-border text-secret-muted hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <HelpCircle className="w-4 h-4 text-amber-400" />
              <span>Dúvidas de Encaixe</span>
            </button>

            {/* BUTTON 2: COMPRAR DIRETO PELO WHATSAPP */}
            <button
              type="button"
              onClick={handleDirectWhatsAppBuy}
              disabled={!isAvailable}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Finalizar Pedido</span>
            </button>

            {/* BUTTON 3: ADICIONAR AO CARRINHO */}
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!isAvailable}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md ${
                isAddedFeedback
                  ? 'bg-emerald-600 text-white'
                  : 'bg-redaccent-600 hover:bg-redaccent-500 text-white'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isAddedFeedback ? (
                <>
                  <Check className="w-4 h-4 animate-cart-pop" />
                  <span>Adicionado!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Adicionar ao Carrinho</span>
                  {isPriced && (
                    <span className="font-extrabold pl-1">
                      • {formatPrice(selectedProduct.price * quantity)}
                    </span>
                  )}
                </>
              )}
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
