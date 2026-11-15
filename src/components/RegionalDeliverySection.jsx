import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Search, 
  Clock, 
  CheckCircle2, 
  PackageCheck, 
  MessageCircle, 
  ShieldCheck,
  Building 
} from 'lucide-react';
import { STORE_CONFIG } from '../config/store';
import { maskCEP, formatPrice } from '../utils/format';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export default function RegionalDeliverySection() {
  const [cep, setCep] = useState('');
  const [simulatedResult, setSimulatedResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCepChange = (e) => {
    setCep(maskCEP(e.target.value));
  };

  const handleSimulateShipping = (e) => {
    e.preventDefault();
    const cleanCep = cep.replace(/\D/g, '');
    if (cleanCep.length < 8) return;

    setLoading(true);
    // Simulação com base na tabela regional oficial de STORE_CONFIG
    setTimeout(() => {
      setLoading(false);
      setSimulatedResult({
        cep: cep,
        options: STORE_CONFIG.shippingOptions,
      });
    }, 400);
  };

  const handleWhatsAppConsult = () => {
    const msg = `Olá Secret Parts! Gostaria de consultar a disponibilidade e prazo exato de entrega para o CEP ${cep || 'da minha região'}.`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="entrega-regional" className="py-16 sm:py-20 bg-secret-bg border-t border-secret-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-redaccent-950/80 border border-redaccent-800/60 shadow-sm">
            <Truck className="w-4 h-4 text-redaccent-400" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-redaccent-300">
              Logística Especializada
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Precisou do Farol? Consulte a Entrega na sua Região.
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-secret-muted leading-relaxed">
            Sabemos que veículo parado gera prejuízo. Por isso, organizamos modalidades de despacho ágil para varejo e distribuição.
          </p>
        </div>

        {/* SIMULATOR CARD */}
        <div className="max-w-3xl mx-auto bg-secret-surface rounded-3xl border border-secret-border p-6 sm:p-8 shadow-2xl space-y-6">
          
          <form onSubmit={handleSimulateShipping} className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="relative flex-1 w-full">
              <MapPin className="w-4 h-4 text-secret-subtle absolute left-4 top-3.5" />
              <input
                type="text"
                value={cep}
                onChange={handleCepChange}
                placeholder="Informe seu CEP (ex: 01310-100)..."
                maxLength={9}
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-secret-card border border-secret-border text-white placeholder-secret-subtle text-xs sm:text-sm focus:outline-none focus:border-redaccent-500 font-mono"
              />
            </div>

            <button
              type="submit"
              disabled={loading || cep.replace(/\D/g, '').length < 8}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-50"
            >
              {loading ? 'Consultando...' : 'Calcular Prazos'}
            </button>
          </form>

          {/* SIMULATION RESULTS */}
          {simulatedResult && (
            <div className="space-y-3 pt-4 border-t border-secret-border animate-fade-in">
              <div className="flex items-center justify-between text-xs text-secret-muted">
                <span>Opções de envio para o CEP <strong>{simulatedResult.cep}</strong>:</span>
                <span className="text-[11px] text-secret-subtle">Regras configuradas</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {simulatedResult.options.map(option => (
                  <div key={option.id} className="p-4 rounded-2xl bg-secret-card border border-secret-border space-y-2">
                    <span className="text-xs font-bold text-white block">
                      {option.name}
                    </span>
                    <p className="text-[11px] text-secret-muted leading-tight">
                      {option.description}
                    </p>
                    <div className="pt-2 border-t border-secret-border/60 flex items-center justify-between">
                      <span className="text-xs font-semibold text-secret-subtle">
                        {option.estimate}
                      </span>
                      <span className="text-sm font-bold text-emerald-400">
                        A combinar
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NOTICE & DIRECT WHATSAPP BUTTON */}
          <div className="p-4 rounded-2xl bg-secret-card/60 border border-secret-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-secret-muted">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Embalagem reforçada sob medida contra danos em transporte.</span>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppConsult}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-redaccent-400 hover:text-redaccent-300 self-start sm:self-auto"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Dúvidas sobre frete no WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
