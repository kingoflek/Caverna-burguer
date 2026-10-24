import React, { useState } from 'react';
import { X, Building2, Send } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { maskPhone, maskCNPJ } from '../utils/format';
import { buildWholesaleInquiryMessage, generateWhatsAppUrl } from '../utils/whatsapp';

export default function WholesaleModal() {
  const { isWholesaleModalOpen, closeWholesaleModal } = useCart();

  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    cnpj: '',
    phone: '',
    cityState: '',
    businessType: 'Lojista de Autopeças',
    requestedItems: '',
    estimatedQuantity: '4 a 10 unidades',
    notes: '',
  });

  const [isSent, setIsSent] = useState(false);

  if (!isWholesaleModalOpen) return null;

  const handleChange = (field, value) => {
    let finalVal = value;
    if (field === 'phone') finalVal = maskPhone(value);
    if (field === 'cnpj') finalVal = maskCNPJ(value);
    setFormData(prev => ({ ...prev, [field]: finalVal }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = buildWholesaleInquiryMessage(formData);
    const url = generateWhatsAppUrl(msg, true);
    setIsSent(true);

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setIsSent(false);
      closeWholesaleModal();
    }, 450);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div
        onClick={closeWholesaleModal}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg bg-secret-surface rounded-3xl overflow-hidden border border-secret-border shadow-secret-modal my-auto z-10 animate-fade-in p-6 sm:p-8 space-y-5 max-h-[92vh] overflow-y-auto">
        
        <div className="flex items-center justify-between border-b border-secret-border pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-redaccent-950/80 border border-redaccent-800/60 text-redaccent-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-base sm:text-lg text-white">
                Cotação para Atacado / Distribuição
              </h3>
              <span className="text-xs text-secret-muted">
                Preços especiais para pedidos a partir de 4 unidades
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeWholesaleModal}
            className="p-1.5 rounded-lg text-secret-subtle hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
              Empresa / Razão Social *
            </label>
            <input
              type="text"
              required
              value={formData.companyName}
              onChange={(e) => handleChange('companyName', e.target.value)}
              placeholder="Ex.: Auto Peças Central Ltda"
              className="w-full px-3 py-2 rounded-xl bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                Nome do Responsável *
              </label>
              <input
                type="text"
                required
                value={formData.contactName}
                onChange={(e) => handleChange('contactName', e.target.value)}
                placeholder="Ex.: Carlos Souza"
                className="w-full px-3 py-2 rounded-xl bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                WhatsApp Comercial *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="(XX) XXXXX-XXXX"
                className="w-full px-3 py-2 rounded-xl bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                Cidade e Estado *
              </label>
              <input
                type="text"
                required
                value={formData.cityState}
                onChange={(e) => handleChange('cityState', e.target.value)}
                placeholder="Ex.: São Paulo - SP"
                className="w-full px-3 py-2 rounded-xl bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
              />
            </div>

            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                CNPJ (se houver)
              </label>
              <input
                type="text"
                value={formData.cnpj}
                onChange={(e) => handleChange('cnpj', e.target.value)}
                placeholder="00.000.000/0000-00"
                className="w-full px-3 py-2 rounded-xl bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
              Faróis Desejados & Volume Estimado
            </label>
            <textarea
              rows={2}
              value={formData.requestedItems}
              onChange={(e) => handleChange('requestedItems', e.target.value)}
              placeholder="Ex.: Farol Onix 2018 (5 unidades), Farol Gol G5 (4 unidades)..."
              className="w-full px-3 py-2 rounded-xl bg-secret-card border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSent}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            <Send className="w-4 h-4" />
            <span>{isSent ? 'Abrindo WhatsApp Comercial...' : 'Solicitar Orçamento no Atacado'}</span>
          </button>
        </form>

      </div>
    </div>
  );
}
