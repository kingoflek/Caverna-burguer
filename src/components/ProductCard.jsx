import React, { useState } from 'react';
import { 
  Plus, 
  Check, 
  Eye, 
  Heart, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  HelpCircle,
  Truck,
  Sparkles,
  Building2
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import { STOCK_STATUS_CONFIG, getProductModels } from '../data/products';

export default function ProductCard({ product }) {
  const { 
    addToCart, 
    openProductModal, 
    toggleFavorite, 
    isFavorite,
    openCompatibilityModal 
  } = useCart();
  
  const [isAddedAnim, setIsAddedAnim] = useState(false);

  const isAvailable = product.stockStatus !== 'indisponivel';
  const isPriced = product.price && product.price > 0;
  const statusInfo = STOCK_STATUS_CONFIG[product.stockStatus] || STOCK_STATUS_CONFIG.disponivel;
  const favorite = isFavorite(product.id);

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

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite(product.id);
  };

  return (
    <article
      onClick={handleCardClick}
      className={`group relative flex flex-col justify-between bg-secret-card hover:bg-secret-cardHover rounded-2xl overflow-hidden border border-secret-border hover:border-redaccent-800/80 shadow-secret-card transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer ${
        !isAvailable ? 'opacity-65 grayscale' : ''
      }`}
    >
      <div>
        
        {/* PRODUCT IMAGE CONTAINER */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-secret-dark">
          <img
            src={product.images?.[0] || './images/products/farol-onix.jpg'}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = './images/products/farol-onix.jpg';
            }}
          />

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-secret-card via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

          {/* TOP BADGES */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.isOffer && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-redaccent-600 text-white shadow-md">
                Oferta Especial
              </span>
            )}
            {product.featured && !product.isOffer && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-secret-surface/90 text-white border border-secret-border shadow-md backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-redaccent-500" />
                Destaque
              </span>
            )}
            {product.sideLabel && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-semibold bg-secret-dark/85 text-secret-muted border border-secret-border/70 backdrop-blur-sm">
                {product.sideLabel}
              </span>
            )}
          </div>

          {/* TOP RIGHT ICONS: FAVORITE & QUICK VIEW */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
            <button
              type="button"
              onClick={handleFavoriteClick}
              aria-label={favorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
              className="p-2 rounded-full bg-secret-dark/80 hover:bg-secret-dark text-secret-muted hover:text-white border border-white/10 transition-colors shadow-md"
            >
              <Heart className={`w-3.5 h-3.5 ${favorite ? 'text-redaccent-500 fill-redaccent-500' : ''}`} />
            </button>

            <div className="p-2 rounded-full bg-secret-dark/80 text-secret-muted border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity shadow-md hidden sm:block">
              <Eye className="w-3.5 h-3.5 text-secret-muted" />
            </div>
          </div>

          {/* STOCK STATUS PILL (BOTTOM OF IMAGE) */}
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] z-10">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold border ${statusInfo.bg} ${statusInfo.color} backdrop-blur-md`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {statusInfo.label}
            </span>

            {product.sku && (
              <span className="text-[10px] font-mono text-secret-subtle bg-secret-dark/80 px-1.5 py-0.5 rounded border border-secret-border/50">
                {product.sku}
              </span>
            )}
          </div>

        </div>

        {/* CONTENT */}
        <div className="p-4 sm:p-5 flex flex-col space-y-2.5">
          
          {/* VEHICLE COMPATIBILITY TAG */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-redaccent-400 truncate">
              {product.vehicleBrand} {getProductModels(product).join(' / ')} ({product.yearStart} - {product.yearEnd})
            </span>
            {product.manufacturer && (
              <span className="text-[10px] font-semibold text-secret-subtle flex-shrink-0">
                {product.manufacturer}
              </span>
            )}
          </div>

          {/* TITLE */}
          <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-redaccent-400 transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* TECHNICAL DETAILS CHIPS */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {product.typeLabel && (
              <span className="text-[10px] px-2 py-0.5 rounded bg-secret-surface border border-secret-border text-secret-muted">
                {product.typeLabel}
              </span>
            )}
            {product.oemCode && (
              <span className="text-[10px] px-2 py-0.5 rounded bg-secret-surface border border-secret-border text-secret-subtle font-mono">
                OEM: {product.oemCode}
              </span>
            )}
          </div>

        </div>
      </div>

      {/* FOOTER: PRICING & CALL TO ACTION */}
      <div className="p-4 sm:p-5 pt-2 border-t border-secret-border/80 flex flex-col space-y-3">
        
        {/* PRICE BLOCK */}
        <div className="flex items-baseline justify-between">
          <div>
            {product.originalPrice && product.isOffer && (
              <span className="text-xs text-secret-subtle line-through block">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <div className="flex items-baseline gap-1.5">
              <span className="text-[10px] uppercase font-bold text-secret-subtle">
                {isPriced ? 'Varejo:' : 'Preço:'}
              </span>
              <span className="font-display font-black text-lg sm:text-xl text-white">
                {formatPrice(product.price)}
              </span>
            </div>
          </div>

          {product.wholesalePrice && (
            <div className="text-right">
              <span className="text-[10px] uppercase font-bold text-redaccent-400 block flex items-center justify-end gap-1">
                <Building2 className="w-3 h-3" /> No Atacado:
              </span>
              <span className="text-xs font-bold text-secret-muted">
                {formatPrice(product.wholesalePrice)} <span className="text-[10px] font-normal text-secret-subtle">({product.wholesaleMinQty || 4}+ un.)</span>
              </span>
            </div>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-2 gap-2">
          
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openProductModal(product);
            }}
            className="w-full py-2.5 px-3 rounded-xl bg-secret-surface hover:bg-secret-border border border-secret-border text-white text-xs font-bold uppercase tracking-wider transition-colors text-center"
          >
            Ver Detalhes
          </button>

          {isAvailable ? (
            <button
              type="button"
              onClick={handleQuickAdd}
              aria-label={`Adicionar ${product.name} ao carrinho`}
              className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-sm focus:outline-none ${
                isAddedAnim
                  ? 'bg-emerald-600 text-white'
                  : 'bg-redaccent-600 hover:bg-redaccent-500 text-white active:scale-95'
              }`}
            >
              {isAddedAnim ? (
                <>
                  <Check className="w-4 h-4 animate-cart-pop" />
                  <span>No Carrinho</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Comprar</span>
                </>
              )}
            </button>
          ) : (
            <button
              type="button"
              disabled
              className="w-full py-2.5 px-3 rounded-xl bg-secret-dark text-secret-subtle text-xs font-semibold border border-secret-border cursor-not-allowed"
            >
              Esgotado
            </button>
          )}

        </div>

      </div>
    </article>
  );
}
