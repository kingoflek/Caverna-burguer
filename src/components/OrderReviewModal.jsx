import React, { useState } from 'react';
import { 
  X, 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  AlertCircle, 
  ShoppingBag, 
  MapPin, 
  Store, 
  User, 
  Phone, 
  Car,
  FileText,
  ShieldAlert,
  Truck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { formatPrice, generateOrderId } from '../utils/format';
import { buildRetailOrderMessage, generateWhatsAppUrl } from '../utils/whatsapp';
import { STORE_CONFIG } from '../config/store';

export default function OrderReviewModal() {
  const {
    items,
    totalItems,
    subtotal,
    shippingCost,
    total,
    selectedShippingOption,
    hasUnpricedItems,
    isReviewOpen,
    closeReview,
    openCheckout,
    customer,
  } = useCart();

  const [isSending, setIsSending] = useState(false);
  const [orderId] = useState(() => generateOrderId());

  if (!isReviewOpen) return null;

  const isDelivery = customer.orderType === 'delivery';

  const handleSendToWhatsApp = () => {
    setIsSending(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#F20D25', '#FFFFFF', '#111317']
      });
    } catch (e) {
      // Confetti opcional
    }

    const orderData = {
      orderId,
      items,
      customer,
      subtotal,
      shippingOption: STORE_CONFIG.shippingOptions.find(
        opt => opt.id === (isDelivery ? 'local_delivery' : 'pickup')
      ) || selectedShippingOption,
      total,
      hasUnpricedItems
    };

    const message = buildRetailOrderMessage(orderData);
    const whatsappUrl = generateWhatsAppUrl(message, false);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSending(false);
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      
      {/* BACKDROP */}
      <div
        onClick={closeReview}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* MODAL DIALOG */}
      <div className="relative w-full max-w-xl bg-secret-surface rounded-3xl overflow-hidden border border-secret-border shadow-secret-modal my-auto z-10 animate-fade-in flex flex-col max-h-[92vh]">
        
        {/* HEADER */}
        <div className="p-5 sm:p-6 bg-secret-card border-b border-secret-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                closeReview();
                openCheckout();
              }}
              aria-label="Voltar para editar formulário"
              className="p-2 rounded-xl bg-secret-surface hover:bg-secret-border text-secret-muted hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                Revisão do Pedido
              </h3>
              <span className="text-xs text-secret-muted font-mono">
                Identificador: #{orderId} • Pronto para envio
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeReview}
            aria-label="Fechar resumo"
            className="p-2 rounded-xl text-secret-subtle hover:text-white hover:bg-secret-surface transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SCROLLABLE SUMMARY */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-5 flex-1">
          
          {/* TICKET / RECIBO STYLE */}
          <div className="p-5 rounded-2xl bg-secret-card border border-secret-border space-y-4">
            
            <div className="flex items-center justify-between pb-3 border-b border-secret-border text-xs font-bold uppercase tracking-wider text-secret-subtle">
              <span>Faróis Selecionados ({totalItems})</span>
              <span>Subtotal</span>
            </div>

            <div className="divide-y divide-secret-border/70 py-1">
              {items.map((item) => {
                const itemPrice = (item.wholesalePrice && item.quantity >= (item.wholesaleMinQty || 4))
                  ? item.wholesalePrice
                  : item.price;

                return (
                  <div key={item.id} className="py-2.5 flex items-start justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-sm font-bold text-white block">
                        {item.quantity}x {item.name}
                      </span>
                      <span className="text-xs text-secret-muted block">
                        {item.sideLabel} {item.sku ? `• Cód: ${item.sku}` : ''} {item.oemCode ? `• OEM: ${item.oemCode}` : ''}
                      </span>
                      {item.observation && (
                        <span className="text-xs text-redaccent-400 italic block">
                          Obs: {item.observation}
                        </span>
                      )}
                    </div>

                    <span className="text-sm font-bold text-white flex-shrink-0">
                      {formatPrice(itemPrice * item.quantity)}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* FRETE & TOTAL */}
            <div className="pt-3 border-t border-secret-border space-y-1.5 text-xs text-secret-muted">
              <div className="flex items-center justify-between">
                <span>Subtotal dos Faróis:</span>
                <span className="font-semibold text-white">{formatPrice(subtotal)}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span>Entrega:</span>
                <span className="font-semibold text-emerald-400">
                  {STORE_CONFIG.shippingLabel}
                </span>
              </div>

              <div className="pt-2 border-t border-secret-border flex items-center justify-between font-display font-black text-lg sm:text-xl text-white">
                <span>Total Estimado:</span>
                <span className="text-white">{formatPrice(total)}</span>
              </div>
            </div>

          </div>

          {/* DADOS DO CLIENTE & VEÍCULO */}
          <div className="p-5 rounded-2xl bg-secret-card border border-secret-border space-y-2.5 text-xs sm:text-sm">
            <h4 className="font-display font-bold uppercase tracking-wider text-xs text-secret-subtle border-b border-secret-border pb-2">
              Dados do Destinatário & Conferência
            </h4>

            <div className="space-y-1.5 text-secret-muted">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-secret-subtle" />
                <span><strong>Nome:</strong> {customer.name}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secret-subtle" />
                <span><strong>WhatsApp:</strong> {customer.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-redaccent-400" />
                <span><strong>Veículo:</strong> {customer.vehicleDetails}</span>
              </div>

              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-secret-subtle" />
                <span>
                  <strong>Modalidade:</strong> {isDelivery ? 'Entrega no Endereço' : 'Retirada no Centro de Distribuição'}
                </span>
              </div>

              {isDelivery && (
                <div className="pl-6 space-y-0.5 text-secret-subtle text-xs border-l border-secret-border mt-1">
                  <p>CEP: {customer.cep} • {customer.street}, Nº {customer.number}</p>
                  <p>{customer.neighborhood} — {customer.cityState}</p>
                  {customer.complement && <p>Compl: {customer.complement}</p>}
                </div>
              )}

              {customer.generalNotes && (
                <div className="pt-2 border-t border-secret-border text-xs">
                  <span className="font-bold text-secret-subtle block mb-0.5">Observações:</span>
                  <p className="text-white italic bg-secret-surface p-2 rounded-lg border border-secret-border">
                    "{customer.generalNotes}"
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* AVISO IMPORTANTE (ITEM 9 DO PROMPT) */}
          <div className="p-4 rounded-2xl bg-redaccent-950/40 border border-redaccent-800/60 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-redaccent-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-secret-muted">
              <span className="font-bold text-white block">
                Aviso Importante sobre o Pedido
              </span>
              <p>
                O envio da mensagem pelo WhatsApp abre o canal direto com nossa equipe. O pedido será <strong>efetivamente confirmado e separado</strong> após o envio da mensagem e conferência técnica com nosso atendente. Não realizamos cobranças automáticas no site.
              </p>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="p-5 sm:p-6 bg-secret-card border-t border-secret-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              closeReview();
              openCheckout();
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-secret-border text-secret-muted hover:text-white hover:bg-secret-surface text-xs uppercase tracking-wider font-bold transition-colors"
          >
            Voltar e Editar
          </button>

          <button
            type="button"
            onClick={handleSendToWhatsApp}
            disabled={isSending}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/60 transition-all transform hover:-translate-y-0.5"
          >
            <Send className="w-4 h-4" />
            <span>{isSending ? 'Abrindo WhatsApp...' : 'Enviar Pedido pelo WhatsApp'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
