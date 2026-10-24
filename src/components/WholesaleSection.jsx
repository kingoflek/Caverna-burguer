import React, { useState } from 'react';
import { 
  Building2, 
  Send, 
  CheckCircle2, 
  Truck, 
  Tag, 
  Users, 
  Briefcase, 
  MessageSquare, 
  ShieldCheck,
  FileText
} from 'lucide-react';
import { STORE_CONFIG } from '../config/store';
import { maskPhone, maskCNPJ } from '../utils/format';
import { buildWholesaleInquiryMessage, generateWhatsAppUrl } from '../utils/whatsapp';

export default function WholesaleSection() {
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

  const [errors, setErrors] = useState({});
  const [isSent, setIsSent] = useState(false);

  const businessTypes = [
    'Lojista de Autopeças',
    'Oficina de Funilaria e Pintura',
    'Concessionária / Concessionário',
    'Auto Elétrica e Acessórios',
    'Distribuidor Regional',
    'Frotista / Locadora de Veículos',
    'Outro Segmento Automotivo'
  ];

  const quantityRanges = [
    '4 a 10 unidades (Lote Inicial)',
    '11 a 25 unidades',
    '26 a 50 unidades',
    'Mais de 50 unidades (Distribuição Contínua)',
  ];

  const handleChange = (field, value) => {
    let finalVal = value;
    if (field === 'phone') finalVal = maskPhone(value);
    if (field === 'cnpj') finalVal = maskCNPJ(value);

    setFormData(prev => ({ ...prev, [field]: finalVal }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.companyName.trim()) errs.companyName = 'Informe a Razão Social ou Nome Fantasia da empresa.';
    if (!formData.contactName.trim()) errs.contactName = 'Informe o nome do responsável comercial.';
    
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) errs.phone = 'Informe um WhatsApp comercial válido com DDD.';
    if (!formData.cityState.trim()) errs.cityState = 'Informe sua Cidade e Estado (ex: Curitiba - PR).';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = buildWholesaleInquiryMessage(formData);
    const whatsappUrl = generateWhatsAppUrl(message, true);

    setIsSent(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSent(false);
    }, 500);
  };

  return (
    <section id="distribuidores" className="py-16 sm:py-24 bg-secret-surface border-t border-secret-border relative overflow-hidden">
      
      {/* AMBIENT LIGHT */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-redaccent-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-redaccent-950/80 border border-redaccent-800/60 shadow-sm">
            <Building2 className="w-4 h-4 text-redaccent-400" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-redaccent-300">
              Canal Exclusivo B2B
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            {STORE_CONFIG.wholesale.distributorPageTitle}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-secret-muted leading-relaxed">
            {STORE_CONFIG.wholesale.distributorPageSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 5 COLS: BENEFITS & WHOLESALE POLICY */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-3xl bg-secret-card border border-secret-border space-y-5 shadow-lg">
              <h3 className="font-display font-extrabold text-lg text-white border-b border-secret-border pb-3">
                Vantagens para Parceiros Comerciais
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-redaccent-950/60 border border-redaccent-800/40 text-redaccent-400 flex-shrink-0 mt-0.5">
                    <Tag className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Margens Competitivas</h4>
                    <p className="text-secret-muted text-xs leading-relaxed">
                      Preços escalonados no atacado para proporcionar lucratividade à sua revenda ou oficina.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-redaccent-950/60 border border-redaccent-800/40 text-redaccent-400 flex-shrink-0 mt-0.5">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Logística Regional Prioritária</h4>
                    <p className="text-secret-muted text-xs leading-relaxed">
                      Despacho rápido com embalagens reforçadas para evitar quebras de lentes em trânsito.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-redaccent-950/60 border border-redaccent-800/40 text-redaccent-400 flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Garantia com Troca Ágil</h4>
                    <p className="text-secret-muted text-xs leading-relaxed">
                      Suporte pós-venda direto e descomplicado para assegurar a reputação da sua empresa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-redaccent-950/60 border border-redaccent-800/40 text-redaccent-400 flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Atendimento Dedicado por WhatsApp</h4>
                    <p className="text-secret-muted text-xs leading-relaxed">
                      Cotações rápidas e envio de fotos/especificações por consultores especializados em faróis.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* CALLOUT BANNER */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-redaccent-950/60 to-secret-card border border-redaccent-900/60 text-xs text-secret-muted space-y-2">
              <span className="font-bold text-white block uppercase tracking-wider text-[11px]">
                Você é lojista ou revendedor?
              </span>
              <p>
                Consulte nossa tabela especial de atacado a partir de <strong>{STORE_CONFIG.wholesale.minItemsForWholesale} unidades</strong> ou solicite cotação para abastecimento contínuo de estoque.
              </p>
            </div>

          </div>

          {/* RIGHT 7 COLS: FORMULÁRIO PARA ATACADO (ITEM 11) */}
          <div className="lg:col-span-7 bg-secret-card rounded-3xl border border-secret-border p-6 sm:p-8 shadow-xl">
            
            <div className="border-b border-secret-border pb-4 mb-6">
              <h3 className="font-display font-extrabold text-xl text-white">
                Solicitar Cotação para Atacado
              </h3>
              <p className="text-xs text-secret-muted mt-1">
                Preencha os dados abaixo para receber nossa proposta comercial formal diretamente no seu WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* NOME DA EMPRESA */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                    Nome da Empresa / Razão Social *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => handleChange('companyName', e.target.value)}
                    placeholder="Ex.: Auto Peças São Jorge Ltda"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-secret-surface border ${
                      errors.companyName ? 'border-red-500' : 'border-secret-border'
                    } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500`}
                  />
                  {errors.companyName && <p className="text-[10px] text-red-400 mt-1">{errors.companyName}</p>}
                </div>

                {/* RESPONSÁVEL */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                    Nome do Responsável *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={(e) => handleChange('contactName', e.target.value)}
                    placeholder="Ex.: Carlos Mendes"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-secret-surface border ${
                      errors.contactName ? 'border-red-500' : 'border-secret-border'
                    } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500`}
                  />
                  {errors.contactName && <p className="text-[10px] text-red-400 mt-1">{errors.contactName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* CNPJ */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                    CNPJ (se houver)
                  </label>
                  <input
                    type="text"
                    value={formData.cnpj}
                    onChange={(e) => handleChange('cnpj', e.target.value)}
                    placeholder="00.000.000/0000-00"
                    maxLength={18}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-secret-surface border border-secret-border text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500"
                  />
                </div>

                {/* WHATSAPP */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                    WhatsApp Comercial *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="(XX) XXXXX-XXXX"
                    maxLength={15}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-secret-surface border ${
                      errors.phone ? 'border-red-500' : 'border-secret-border'
                    } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500`}
                  />
                  {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>}
                </div>

                {/* CIDADE E ESTADO */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                    Cidade / UF *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cityState}
                    onChange={(e) => handleChange('cityState', e.target.value)}
                    placeholder="Ex.: Campinas - SP"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-secret-surface border ${
                      errors.cityState ? 'border-red-500' : 'border-secret-border'
                    } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500`}
                  />
                  {errors.cityState && <p className="text-[10px] text-red-400 mt-1">{errors.cityState}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* TIPO DE NEGÓCIO */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                    Tipo de Negócio
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => handleChange('businessType', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-secret-surface border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
                  >
                    {businessTypes.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* QUANTIDADE ESTIMADA */}
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                    Quantidade Estimada
                  </label>
                  <select
                    value={formData.estimatedQuantity}
                    onChange={(e) => handleChange('estimatedQuantity', e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-secret-surface border border-secret-border text-white text-xs focus:outline-none focus:border-redaccent-500"
                  >
                    {quantityRanges.map(q => (
                      <option key={q} value={q}>{q}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* FARÓIS OU CÓDIGOS DESEJADOS */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                  Faróis ou Códigos Desejados
                </label>
                <textarea
                  rows={2}
                  value={formData.requestedItems}
                  onChange={(e) => handleChange('requestedItems', e.target.value)}
                  placeholder="Ex.: 4x Farol Onix 2017 (2 Esq / 2 Dir), 2x Farol Corolla 2018..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-secret-surface border border-secret-border text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500"
                />
              </div>

              {/* OBSERVAÇÕES */}
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                  Observações Adicionais
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  placeholder="Ex.: Preferência por envio via transportadora conveniada, necessidade urgente..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-secret-surface border border-secret-border text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSent}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-redaccent-900/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="w-4 h-4" />
                <span>{isSent ? 'Preparando Orçamento...' : 'Solicitar Orçamento no Atacado'}</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
