import React from 'react';
import { MessageCircle, Instagram, MapPin, Clock, ExternalLink } from 'lucide-react';
import { STORE_CONFIG } from '../config/store';

export default function ContactSection() {
  const hasWhatsapp = Boolean(STORE_CONFIG.whatsapp && STORE_CONFIG.whatsapp.trim());
  const hasInstagram = Boolean(STORE_CONFIG.instagram && STORE_CONFIG.instagram.trim());
  const hasAddress = Boolean(STORE_CONFIG.address && STORE_CONFIG.address.trim());
  const hasHours = Boolean(STORE_CONFIG.openingHours && STORE_CONFIG.openingHours.trim());

  const cleanWhatsapp = (STORE_CONFIG.whatsapp || '').replace(/\D/g, '');
  const instagramUrl = STORE_CONFIG.instagram?.startsWith('http')
    ? STORE_CONFIG.instagram
    : `https://instagram.com/${STORE_CONFIG.instagram?.replace('@', '')}`;

  return (
    <section id="contato" className="py-16 sm:py-20 bg-caverna-950 relative border-t border-caverna-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-redaccent-400 block mb-2">
            Atendimento e Localização
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Fale com a Caverna
          </h2>
          <p className="text-caverna-400 text-sm sm:text-base mt-2">
            Dúvidas, pedidos especiais ou parcerias? Entre em contato pelos nossos canais oficiais.
          </p>
        </div>

        {/* CONTACT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* WHATSAPP */}
          <div className="p-6 rounded-2xl bg-caverna-900 border border-caverna-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-caverna-850 border border-caverna-700 text-emerald-400 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-white">
                WhatsApp Oficial
              </h3>
              <p className="text-xs text-caverna-400">
                {hasWhatsapp ? 'Atendimento rápido e confirmação de pedidos.' : 'Número a ser configurado em src/config/store.js.'}
              </p>
            </div>

            {hasWhatsapp ? (
              <a
                href={`https://api.whatsapp.com/send?phone=${cleanWhatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Chamar no WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-caverna-500 italic">Disponível em breve</span>
            )}
          </div>

          {/* INSTAGRAM */}
          <div className="p-6 rounded-2xl bg-caverna-900 border border-caverna-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-caverna-850 border border-caverna-700 text-pink-400 flex items-center justify-center">
                <Instagram className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-white">
                Instagram
              </h3>
              <p className="text-xs text-caverna-400">
                {hasInstagram ? `@${STORE_CONFIG.instagram.replace('@', '')}` : 'Perfil a ser configurado em src/config/store.js.'}
              </p>
            </div>

            {hasInstagram ? (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-pink-400 hover:text-pink-300 transition-colors"
              >
                <span>Seguir no Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-caverna-500 italic">Disponível em breve</span>
            )}
          </div>

          {/* ENDEREÇO */}
          <div className="p-6 rounded-2xl bg-caverna-900 border border-caverna-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-caverna-850 border border-caverna-700 text-redaccent-400 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-white">
                Endereço
              </h3>
              <p className="text-xs text-caverna-400 leading-relaxed">
                {hasAddress ? STORE_CONFIG.address : 'Endereço a ser configurado em src/config/store.js.'}
              </p>
            </div>

            <span className="text-xs text-caverna-500">
              {hasAddress ? 'Balcão e Delivery' : 'A definir'}
            </span>
          </div>

          {/* HORÁRIOS */}
          <div className="p-6 rounded-2xl bg-caverna-900 border border-caverna-800 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-caverna-850 border border-caverna-700 text-amberaccent-400 flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-base text-white">
                Horário de Atendimento
              </h3>
              <p className="text-xs text-caverna-400 leading-relaxed">
                {hasHours ? STORE_CONFIG.openingHours : 'Horários a serem configurados em src/config/store.js.'}
              </p>
            </div>

            <span className="text-xs text-caverna-500">
              {hasHours ? 'Delivery ativo' : 'A definir'}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
