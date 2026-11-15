import React, { useState } from 'react';
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Truck, 
  Store, 
  MapPin, 
  Phone, 
  User, 
  Car, 
  AlertCircle, 
  ShoppingBag,
  FileText 
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice, maskPhone, maskCEP } from '../utils/format';

export default function CheckoutModal() {
  const {
    items,
    totalItems,
    subtotal,
    shippingCost,
    total,
    selectedShippingOption,
    isCheckoutOpen,
    closeCheckout,
    openCart,
    openReview,
    customer,
    setCustomer,
  } = useCart();

  const [errors, setErrors] = useState({});

  if (!isCheckoutOpen) return null;

  const handleInputChange = (field, value) => {
    let finalVal = value;
    if (field === 'phone') finalVal = maskPhone(value);
    if (field === 'cep') finalVal = maskCEP(value);

    setCustomer(prev => ({
      ...prev,
      [field]: finalVal
    }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!customer.name || customer.name.trim().length < 2) {
      newErrors.name = 'Por favor, informe seu nome completo.';
    }

    const cleanPhone = (customer.phone || '').replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = 'Informe um WhatsApp com DDD válido.';
    }

    if (!customer.vehicleDetails || customer.vehicleDetails.trim().length < 3) {
      newErrors.vehicleDetails = 'Informe o modelo e ano do seu carro para conferência técnica (ex: Onix 2017 LT).';
    }

    if (customer.orderType === 'delivery') {
      const cleanCep = (customer.cep || '').replace(/\D/g, '');
      if (!cleanCep || cleanCep.length < 8) {
        newErrors.cep = 'Informe o CEP para entrega.';
      }
      if (!customer.street || customer.street.trim().length < 3) {
        newErrors.street = 'Informe a rua / avenida.';
      }
      if (!customer.number || customer.number.trim().length < 1) {
        newErrors.number = 'Informe o número.';
      }
      if (!customer.neighborhood || customer.neighborhood.trim().length < 2) {
        newErrors.neighborhood = 'Informe o bairro.';
      }
      if (!customer.cityState || customer.cityState.trim().length < 3) {
        newErrors.cityState = 'Informe Cidade / UF.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToReview = (e) => {
    e.preventDefault();
    if (validateForm()) {
      openReview();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
      
      {/* BACKDROP */}
      <div
        onClick={closeCheckout}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* MODAL CONTAINER */}
      <div className="relative w-full max-w-2xl bg-secret-surface rounded-3xl overflow-hidden border border-secret-border shadow-secret-modal my-auto z-10 animate-fade-in flex flex-col max-h-[92vh]">
        
        {/* HEADER */}
        <div className="p-5 sm:p-6 bg-secret-card border-b border-secret-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                closeCheckout();
                openCart();
              }}
              aria-label="Voltar para o carrinho"
              className="p-2 rounded-xl bg-secret-surface hover:bg-secret-border text-secret-muted hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                Dados para Atendimento & Envio
              </h3>
              <span className="text-xs text-secret-muted">
                Passo 1 de 2 • Informações do comprador e veículo
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCheckout}
            aria-label="Fechar checkout"
            className="p-2 rounded-xl text-secret-subtle hover:text-white hover:bg-secret-surface transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SCROLLABLE BODY */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1">
          
          {/* QUICK ORDER RECAP */}
          <div className="p-4 rounded-2xl bg-secret-card border border-secret-border space-y-3">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-secret-subtle">
              <span className="flex items-center gap-1.5 text-white">
                <ShoppingBag className="w-3.5 h-3.5 text-redaccent-400" />
                Resumo dos Faróis ({totalItems})
              </span>
              <button
                type="button"
                onClick={() => {
                  closeCheckout();
                  openCart();
                }}
                className="text-redaccent-400 hover:underline lowercase font-semibold text-xs"
              >
                editar itens
              </button>
            </div>

            <div className="divide-y divide-secret-border text-xs sm:text-sm">
              {items.map(item => (
                <div key={item.id} className="py-2 flex items-center justify-between gap-3">
                  <span className="text-secret-muted">
                    <strong className="text-white">{item.quantity}x</strong> {item.name}
                    {item.sideLabel && (
                      <span className="block text-[11px] text-secret-subtle">
                        {item.sideLabel} {item.sku ? `• Cód: ${item.sku}` : ''}
                      </span>
                    )}
                  </span>
                  <span className="font-bold text-white flex-shrink-0">
                    {formatPrice((item.wholesalePrice && item.quantity >= (item.wholesaleMinQty || 4) ? item.wholesalePrice : item.price) * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-secret-border flex items-center justify-between font-bold text-xs sm:text-sm">
              <span className="text-secret-muted">Total das Peças (entrega a combinar):</span>
              <span className="text-white text-base font-display">
                {formatPrice(total)}
              </span>
            </div>
          </div>

          {/* FORM */}
          <form id="checkout-form" onSubmit={handleProceedToReview} className="space-y-5">
            
            {/* TIPO DE RECEBIMENTO: ENTREGA OU RETIRADA */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-2">
                Como deseja receber as peças? *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleInputChange('orderType', 'delivery')}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all ${
                    customer.orderType === 'delivery'
                      ? 'bg-secret-card border-redaccent-500 text-white shadow-md'
                      : 'bg-secret-surface border-secret-border text-secret-muted hover:text-white'
                  }`}
                >
                  <Truck className={`w-5 h-5 mb-1 ${customer.orderType === 'delivery' ? 'text-redaccent-400' : 'text-secret-subtle'}`} />
                  <span className="font-bold text-xs sm:text-sm">Envio / Entrega</span>
                  <span className="text-[10px] text-secret-subtle">Sem custo na região</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleInputChange('orderType', 'pickup')}
                  className={`flex flex-col items-center justify-center p-3.5 rounded-2xl border text-center transition-all ${
                    customer.orderType === 'pickup'
                      ? 'bg-secret-card border-redaccent-500 text-white shadow-md'
                      : 'bg-secret-surface border-secret-border text-secret-muted hover:text-white'
                  }`}
                >
                  <Store className={`w-5 h-5 mb-1 ${customer.orderType === 'pickup' ? 'text-redaccent-400' : 'text-secret-subtle'}`} />
                  <span className="font-bold text-xs sm:text-sm">Retirada no Local</span>
                  <span className="text-[10px] text-secret-subtle">Direto no balcão</span>
                </button>
              </div>
            </div>

            {/* DADOS BÁSICOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                  Seu Nome Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-secret-subtle absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={customer.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Ex.: Marcelo Souza"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-secret-card border ${
                      errors.name ? 'border-red-500' : 'border-secret-border'
                    } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500`}
                  />
                </div>
                {errors.name && <p className="text-[10px] text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                  WhatsApp com DDD *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-secret-subtle absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={customer.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(XX) XXXXX-XXXX"
                    maxLength={15}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-secret-card border ${
                      errors.phone ? 'border-red-500' : 'border-secret-border'
                    } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500`}
                  />
                </div>
                {errors.phone && <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* VEÍCULO DO CLIENTE (CONFERÊNCIA TÉCNICA) */}
            <div className="p-3.5 rounded-2xl bg-secret-card border border-secret-border space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-wider text-redaccent-400 flex items-center gap-1.5">
                <Car className="w-4 h-4" />
                <span>Veículo de Aplicação (Marca, Modelo e Ano) *</span>
              </label>
              <input
                type="text"
                required
                value={customer.vehicleDetails}
                onChange={(e) => handleInputChange('vehicleDetails', e.target.value)}
                placeholder="Ex.: Chevrolet Onix 2017 LT 1.4 Manual 4 portas"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-secret-surface border ${
                  errors.vehicleDetails ? 'border-red-500' : 'border-secret-border'
                } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500`}
              />
              <span className="text-[10px] text-secret-subtle block">
                Nossos consultores usam essa informação para fazer a conferência técnica antes de embalar o farol.
              </span>
              {errors.vehicleDetails && <p className="text-[10px] text-red-400 mt-0.5">{errors.vehicleDetails}</p>}
            </div>

            {/* SE ENTREGA: CAMPOS DE ENDEREÇO */}
            {customer.orderType === 'delivery' && (
              <div className="p-4 rounded-2xl bg-secret-card border border-secret-border space-y-4 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
                  <MapPin className="w-4 h-4 text-redaccent-400" />
                  <span>Endereço para Envio</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                      CEP *
                    </label>
                    <input
                      type="text"
                      required
                      value={customer.cep}
                      onChange={(e) => handleInputChange('cep', e.target.value)}
                      placeholder="00000-000"
                      maxLength={9}
                      className={`w-full px-3 py-2 rounded-xl bg-secret-surface border ${
                        errors.cep ? 'border-red-500' : 'border-secret-border'
                      } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500 font-mono`}
                    />
                    {errors.cep && <p className="text-[10px] text-red-400 mt-1">{errors.cep}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                      Rua / Avenida *
                    </label>
                    <input
                      type="text"
                      required
                      value={customer.street}
                      onChange={(e) => handleInputChange('street', e.target.value)}
                      placeholder="Ex.: Av. Brasil"
                      className={`w-full px-3 py-2 rounded-xl bg-secret-surface border ${
                        errors.street ? 'border-red-500' : 'border-secret-border'
                      } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500`}
                    />
                    {errors.street && <p className="text-[10px] text-red-400 mt-1">{errors.street}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                      Número *
                    </label>
                    <input
                      type="text"
                      required
                      value={customer.number}
                      onChange={(e) => handleInputChange('number', e.target.value)}
                      placeholder="123"
                      className={`w-full px-3 py-2 rounded-xl bg-secret-surface border ${
                        errors.number ? 'border-red-500' : 'border-secret-border'
                      } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500`}
                    />
                    {errors.number && <p className="text-[10px] text-red-400 mt-1">{errors.number}</p>}
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                      Bairro *
                    </label>
                    <input
                      type="text"
                      required
                      value={customer.neighborhood}
                      onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                      placeholder="Centro"
                      className={`w-full px-3 py-2 rounded-xl bg-secret-surface border ${
                        errors.neighborhood ? 'border-red-500' : 'border-secret-border'
                      } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500`}
                    />
                    {errors.neighborhood && <p className="text-[10px] text-red-400 mt-1">{errors.neighborhood}</p>}
                  </div>

                  <div className="col-span-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                      Cidade / UF *
                    </label>
                    <input
                      type="text"
                      required
                      value={customer.cityState}
                      onChange={(e) => handleInputChange('cityState', e.target.value)}
                      placeholder="Ex.: Curitiba - PR"
                      className={`w-full px-3 py-2 rounded-xl bg-secret-surface border ${
                        errors.cityState ? 'border-red-500' : 'border-secret-border'
                      } text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500`}
                    />
                    {errors.cityState && <p className="text-[10px] text-red-400 mt-1">{errors.cityState}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                      Complemento (opcional)
                    </label>
                    <input
                      type="text"
                      value={customer.complement}
                      onChange={(e) => handleInputChange('complement', e.target.value)}
                      placeholder="Galpão, Loja 2, Bloco B..."
                      className="w-full px-3 py-2 rounded-xl bg-secret-surface border border-secret-border text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                      Ponto de Referência
                    </label>
                    <input
                      type="text"
                      value={customer.reference}
                      onChange={(e) => handleInputChange('reference', e.target.value)}
                      placeholder="Próximo ao posto, oficina parceira..."
                      className="w-full px-3 py-2 rounded-xl bg-secret-surface border border-secret-border text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* OBSERVAÇÕES ADICIONAIS */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-secret-subtle block mb-1">
                Observações do Pedido (opcional):
              </label>
              <textarea
                rows={2}
                value={customer.generalNotes}
                onChange={(e) => handleInputChange('generalNotes', e.target.value)}
                placeholder="Ex.: Preferência por farol da marca Arteb, urgência na entrega para oficina..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-secret-card border border-secret-border text-white placeholder-secret-subtle text-xs focus:outline-none focus:border-redaccent-500"
              />
            </div>

          </form>

        </div>

        {/* FOOTER */}
        <div className="p-5 sm:p-6 bg-secret-card border-t border-secret-border flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              closeCheckout();
              openCart();
            }}
            className="px-4 py-3 rounded-xl border border-secret-border text-secret-muted hover:text-white hover:bg-secret-surface text-xs uppercase tracking-wider font-bold transition-colors"
          >
            Voltar
          </button>

          <button
            type="button"
            onClick={handleProceedToReview}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-redaccent-900/30 transition-all"
          >
            <span>Revisar e Gerar Pedido</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
