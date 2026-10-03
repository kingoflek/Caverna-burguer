import React, { useState } from 'react';
import { X, ArrowLeft, Send, CheckCircle2, MessageSquare, AlertCircle, ShoppingBag, MapPin, Store, User, Phone, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';
import { generateWhatsAppUrl } from '../utils/whatsapp';
import { STORE_CONFIG } from '../config/store';

export default function OrderReviewModal() {
  const {
    items,
    totalItems,
    subtotal,
    hasUnpricedItems,
    isReviewOpen,
    closeReview,
    openCheckout,
    customer,
  } = useCart();

  const [isSending, setIsSending] = useState(false);

  if (!isReviewOpen) return null;

  const isDelivery = customer.orderType === 'delivery';

  const handleSendToWhatsApp = () => {
    setIsSending(true);

    // Celebração discreta de envio de pedido
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#b31e26', '#d97706', '#ffffff']
      });
    } catch (e) {
      // Confetti opcional
    }

    const orderData = {
      items,
      customer,
      generalNotes: customer.generalNotes,
      subtotal,
      hasUnpricedItems,
    };

    const whatsappUrl = generateWhatsAppUrl(orderData);

    // Pequeno delay para feedback visual antes de abrir
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSending(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      
      {/* BACKDROP */}
      <div
        onClick={closeReview}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* MODAL DIALOG */}
      <div className="relative w-full max-w-xl bg-caverna-900 rounded-3xl overflow-hidden border border-caverna-700 shadow-caverna-modal my-auto z-10 animate-fade-in flex flex-col max-h-[92vh]">
        
        {/* HEADER */}
        <div className="p-5 sm:p-6 bg-caverna-950 border-b border-caverna-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                closeReview();
                openCheckout();
              }}
              aria-label="Voltar e editar"
              className="p-2 rounded-lg bg-caverna-850 hover:bg-caverna-800 text-caverna-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                Revisão do Pedido
              </h3>
              <span className="text-xs text-caverna-400">
                Passo 2 de 2 • Tudo pronto para enviar
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeReview}
            aria-label="Fechar resumo"
            className="p-2 rounded-lg text-caverna-400 hover:text-white hover:bg-caverna-850 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SCROLLABLE SUMMARY */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1">
          
          {/* TICKET / RECIBO STYLE */}
          <div className="p-5 rounded-2xl bg-caverna-950 border border-caverna-800 space-y-4">
            
            {/* ITENS DO PEDIDO */}
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-caverna-800 text-xs font-bold uppercase tracking-wider text-caverna-400">
                <span>Itens Selecionados</span>
                <span>Subtotal</span>
              </div>

              <div className="divide-y divide-caverna-850 py-1">
                {items.map((item) => (
                  <div key={item.id} className="py-2.5 flex items-start justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-sm font-bold text-white block">
                        {item.quantity}x {item.name}
                      </span>
                      {item.observation && (
                        <span className="text-xs text-redaccent-300 italic block">
                          Obs: {item.observation}
                        </span>
                      )}
                    </div>

                    <span className="text-sm font-semibold text-caverna-200 flex-shrink-0">
                      {item.price > 0 ? formatPrice(item.price * item.quantity) : 'Consultar'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TOTAL */}
            <div className="pt-3 border-t border-caverna-800 flex items-center justify-between">
              <span className="font-display font-extrabold text-sm sm:text-base uppercase text-caverna-300">
                Total Estimado
              </span>
              <span className="font-display font-black text-xl sm:text-2xl text-white">
                {hasUnpricedItems || subtotal === 0 ? 'A consultar' : formatPrice(subtotal)}
              </span>
            </div>

          </div>

          {/* DADOS DO CLIENTE & ENTREGA */}
          <div className="p-5 rounded-2xl bg-caverna-850/70 border border-caverna-750 space-y-3 text-xs sm:text-sm">
            <h4 className="font-display font-bold uppercase tracking-wider text-xs text-caverna-400 border-b border-caverna-800 pb-2">
              Dados do Destinatário
            </h4>

            <div className="space-y-2 text-caverna-200">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-caverna-500" />
                <span><strong>Nome:</strong> {customer.name}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-caverna-500" />
                <span><strong>Telefone:</strong> {customer.phone}</span>
              </div>

              <div className="flex items-center gap-2">
                {isDelivery ? (
                  <MapPin className="w-4 h-4 text-redaccent-400" />
                ) : (
                  <Store className="w-4 h-4 text-redaccent-400" />
                )}
                <span>
                  <strong>Tipo de Pedido:</strong> {isDelivery ? 'Entrega no Endereço' : 'Retirada no Balcão'}
                </span>
              </div>

              {isDelivery && (
                <div className="pl-6 space-y-1 text-caverna-300 text-xs border-l-2 border-caverna-700 mt-2">
                  <p><strong>Rua:</strong> {customer.street}, Nº {customer.number}</p>
                  <p><strong>Bairro:</strong> {customer.neighborhood}</p>
                  {customer.complement && <p><strong>Complemento:</strong> {customer.complement}</p>}
                  {customer.reference && <p><strong>Ponto de Ref.:</strong> {customer.reference}</p>}
                </div>
              )}

              {customer.generalNotes && (
                <div className="pt-2 border-t border-caverna-800 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-caverna-400 mb-1">
                    <FileText className="w-3.5 h-3.5 text-caverna-500" />
                    <span>Observações do Pedido:</span>
                  </div>
                  <p className="text-caverna-300 italic bg-caverna-900/60 p-2 rounded-lg border border-caverna-800">
                    "{customer.generalNotes}"
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* AVISO IMPORTANTE DE CONFIRMAÇÃO (ITEM 51 DO PROMPT) */}
          <div className="p-4 rounded-2xl bg-caverna-950 border border-caverna-800/80 flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-caverna-300">
              <span className="font-bold text-white block">
                Envio Direto pelo WhatsApp
              </span>
              <p>
                Seu pedido será enviado pelo WhatsApp. A confirmação do pedido, tempo de preparo e formas de pagamento serão feitas diretamente pela <strong>{STORE_CONFIG.name}</strong>.
              </p>
            </div>
          </div>

        </div>

        {/* MODAL FOOTER */}
        <div className="p-5 sm:p-6 bg-caverna-950 border-t border-caverna-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => {
              closeReview();
              openCheckout();
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-caverna-700 text-caverna-300 hover:text-white hover:bg-caverna-850 text-xs uppercase tracking-wider font-bold transition-colors"
          >
            Voltar e Editar
          </button>

          <button
            type="button"
            onClick={handleSendToWhatsApp}
            disabled={isSending}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="w-4 h-4" />
            <span>{isSending ? 'Abrindo WhatsApp...' : 'Enviar Pedido pelo WhatsApp'}</span>
          </button>
        </div>

      </div>
    </div>
  );
}
