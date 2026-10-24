import React, { useState } from 'react';
import { X, HelpCircle, Send, Car, CheckCircle2, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { buildCompatibilityInquiryMessage, generateWhatsAppUrl } from '../utils/whatsapp';

export default function CompatibilityModal() {
  const { 
    isCompatibilityModalOpen, 
    closeCompatibilityModal, 
    compatibilityProduct 
  } = useCart();

  const [carBrand, setCarBrand] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [userChassis, setUserChassis] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!isCompatibilityModalOpen || !compatibilityProduct) return null;

  const handleSendQuestion = (e) => {
    e.preventDefault();
    const msg = buildCompatibilityInquiryMessage({
      product: compatibilityProduct,
      carBrand: carBrand || compatibilityProduct.vehicleBrand,
      carModel: carModel || compatibilityProduct.vehicleModel,
      carYear,
      userChassis
    });

    const url = generateWhatsAppUrl(msg);
    setIsSent(true);

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsSent(false);
      closeCompatibilityModal();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div
        onClick={closeCompatibilityModal}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg bg-secret-surface rounded-3xl overflow-hidden border border-secret-border shadow-secret-modal my-auto z-10 animate-fade-in p-6 sm:p-8 space-y-5">
        
        <div className="flex items-center justify-between border-b border-secret-border pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-800/40 text-amber-400">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base sm:text-lg text-white">
                Dúvida de Compatibilidade
              </h3>
              <span className="text-xs text-secret-muted">
                Fale com nossos especialistas antes de comprar
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCompatibilityModal}
            className="p-1.5 rounded-lg text-secret-subtle hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PRODUTO SELECIONADO */}
        <div className="p-3.5 rounded-xl bg-secret-card border border-secret-border flex items-center gap-3">
          <img
            src={compatibilityProduct.images?.[0] || './images/products/farol-onix.jpg'}
            alt=""
            className="w-12 h-12 rounded-lg object-cover bg-secret-dark"
          />
          <div className="min-w-0 flex-1 text-xs">
            <span className="font-bold text-white block truncate">
              {compatibilityProduct.name}
            </span>
            <span className="text-secret-subtle">
              {compatibilityProduct.sideLabel} • Cód: {compatibilityProduct.sku}
            </span>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSendQuestion} className="space-y-3.5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                Marca / Modelo do seu Carro
              </label>
              <input
                type="text"
                value={carModel}
                onChange={(e) => setCarModel(e.target.value)}
                placeholder={`Ex.: ${compatibilityProduct.vehicleModel}`}
                className="w-full px-3 py-2 rounded-xl bg-secret-card border border-secret-border text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                Ano do Carro
              </label>
              <input
                type="text"
                value={carYear}
                onChange={(e) => setCarYear(e.target.value)}
                placeholder="Ex.: 2018"
                className="w-full px-3 py-2 rounded-xl bg-secret-card border border-secret-border text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
              Chassi ou Versão Específica (opcional)
            </label>
            <input
              type="text"
              value={userChassis}
              onChange={(e) => setUserChassis(e.target.value)}
              placeholder="Ex.: Motor 1.4 LTZ com regulagem elétrica..."
              className="w-full px-3 py-2 rounded-xl bg-secret-card border border-secret-border text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500"
            />
          </div>

          <p className="text-[11px] text-secret-muted leading-relaxed">
            Ao clicar, abriremos o WhatsApp comercial com as informações do farol pré-preenchidas para nosso time técnico responder rapidamente.
          </p>

          <button
            type="submit"
            disabled={isSent}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isSent ? 'Abrindo WhatsApp...' : 'Perguntar no WhatsApp'}</span>
          </button>
        </form>

      </div>
    </div>
  );
}
