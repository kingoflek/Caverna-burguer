import React, { useState } from 'react';
import { X, ArrowLeft, ArrowRight, Bike, Store, MapPin, Phone, User, AlertCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice, maskPhone } from '../utils/format';

export default function CheckoutModal() {
  const {
    items,
    totalItems,
    subtotal,
    hasUnpricedItems,
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
    if (field === 'phone') {
      finalVal = maskPhone(value);
    }
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
      newErrors.phone = 'Informe um telefone com DDD válido.';
    }

    if (customer.orderType === 'delivery') {
      if (!customer.street || customer.street.trim().length < 3) {
        newErrors.street = 'Informe o nome da sua rua / avenida.';
      }
      if (!customer.number || customer.number.trim().length < 1) {
        newErrors.number = 'Informe o número.';
      }
      if (!customer.neighborhood || customer.neighborhood.trim().length < 2) {
        newErrors.neighborhood = 'Informe o bairro para a entrega.';
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
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* MODAL DIALOG */}
      <div className="relative w-full max-w-2xl bg-caverna-900 rounded-3xl overflow-hidden border border-caverna-700 shadow-caverna-modal my-auto z-10 animate-fade-in flex flex-col max-h-[92vh]">
        
        {/* HEADER */}
        <div className="p-5 sm:p-6 bg-caverna-950 border-b border-caverna-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                closeCheckout();
                openCart();
              }}
              aria-label="Voltar para a comanda"
              className="p-2 rounded-lg bg-caverna-850 hover:bg-caverna-800 text-caverna-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
                Confira seu Pedido
              </h3>
              <span className="text-xs text-caverna-400">
                Passo 1 de 2 • Informações de entrega
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeCheckout}
            aria-label="Fechar checkout"
            className="p-2 rounded-lg text-caverna-400 hover:text-white hover:bg-caverna-850 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* SCROLLABLE BODY */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 flex-1">
          
          {/* COMPACT ORDER RECAP */}
          <div className="p-4 rounded-2xl bg-caverna-850/80 border border-caverna-750 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-caverna-400">
              <span className="flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-redaccent-400" />
                Resumo dos itens ({totalItems})
              </span>
              <button
                type="button"
                onClick={() => {
                  closeCheckout();
                  openCart();
                }}
                className="text-redaccent-400 hover:underline lowercase font-semibold"
              >
                editar comanda
              </button>
            </div>

            <div className="divide-y divide-caverna-800 text-xs sm:text-sm">
              {items.map(item => (
                <div key={item.id} className="py-2 flex items-center justify-between">
                  <span className="text-caverna-200">
                    <strong className="text-white">{item.quantity}x</strong> {item.name}
                    {item.observation && (
                      <span className="block text-[11px] text-redaccent-300/80 italic">
                        Obs: {item.observation}
                      </span>
                    )}
                  </span>
                  <span className="font-semibold text-white ml-3">
                    {item.price > 0 ? formatPrice(item.price * item.quantity) : 'Consultar'}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-caverna-800 flex items-center justify-between font-bold">
              <span className="text-caverna-300 text-xs uppercase">Total do Pedido:</span>
              <span className="text-white text-base font-display">
                {hasUnpricedItems || subtotal === 0 ? 'Sob consulta' : formatPrice(subtotal)}
              </span>
            </div>
          </div>

          {/* FORM */}
          <form id="checkout-form" onSubmit={handleProceedToReview} className="space-y-5">
            
            {/* TIPO DE PEDIDO: ENTREGA OU RETIRADA */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-caverna-400 block mb-2">
                Como deseja receber seu pedido? *
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleInputChange('orderType', 'delivery')}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all ${
                    customer.orderType === 'delivery'
                      ? 'bg-caverna-800 border-redaccent-600 text-white shadow-md'
                      : 'bg-caverna-850/60 border-caverna-700/80 text-caverna-400 hover:text-white hover:bg-caverna-800'
                  }`}
                >
                  <Bike className={`w-6 h-6 mb-1.5 ${customer.orderType === 'delivery' ? 'text-redaccent-500' : 'text-caverna-400'}`} />
                  <span className="font-bold text-sm">Entrega (Delivery)</span>
                  <span className="text-[11px] text-caverna-400 mt-0.5">Receba no seu endereço</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleInputChange('orderType', 'pickup')}
                  className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all ${
                    customer.orderType === 'pickup'
                      ? 'bg-caverna-800 border-redaccent-600 text-white shadow-md'
                      : 'bg-caverna-850/60 border-caverna-700/80 text-caverna-400 hover:text-white hover:bg-caverna-800'
                  }`}
                >
                  <Store className={`w-6 h-6 mb-1.5 ${customer.orderType === 'pickup' ? 'text-redaccent-500' : 'text-caverna-400'}`} />
                  <span className="font-bold text-sm">Retirada no Local</span>
                  <span className="text-[11px] text-caverna-400 mt-0.5">Retire direto no balcão</span>
                </button>
              </div>
            </div>

            {/* DADOS BÁSICOS DO CLIENTE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="customer-name" className="text-xs font-bold uppercase tracking-wider text-caverna-400 block mb-1.5">
                  Seu Nome *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-caverna-500 absolute left-3.5 top-3.5" />
                  <input
                    id="customer-name"
                    type="text"
                    required
                    value={customer.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Ex.: João Silva"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-caverna-950 border ${
                      errors.name ? 'border-red-500' : 'border-caverna-700'
                    } focus:border-redaccent-600 text-white placeholder-caverna-500 text-sm focus:outline-none focus:ring-1 focus:ring-redaccent-600`}
                  />
                </div>
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="customer-phone" className="text-xs font-bold uppercase tracking-wider text-caverna-400 block mb-1.5">
                  WhatsApp / Telefone *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-caverna-500 absolute left-3.5 top-3.5" />
                  <input
                    id="customer-phone"
                    type="tel"
                    required
                    value={customer.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(XX) XXXXX-XXXX"
                    maxLength={15}
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-caverna-950 border ${
                      errors.phone ? 'border-red-500' : 'border-caverna-700'
                    } focus:border-redaccent-600 text-white placeholder-caverna-500 text-sm focus:outline-none focus:ring-1 focus:ring-redaccent-600`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* SE ENTREGA: CAMPOS DE ENDEREÇO */}
            {customer.orderType === 'delivery' ? (
              <div className="p-4 rounded-2xl bg-caverna-850/60 border border-caverna-750 space-y-4 animate-fade-in">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-caverna-300">
                  <MapPin className="w-4 h-4 text-redaccent-400" />
                  <span>Endereço de Entrega</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label htmlFor="addr-street" className="text-[11px] font-bold uppercase tracking-wider text-caverna-400 block mb-1">
                      Rua / Avenida *
                    </label>
                    <input
                      id="addr-street"
                      type="text"
                      required
                      value={customer.street}
                      onChange={(e) => handleInputChange('street', e.target.value)}
                      placeholder="Ex.: Rua das Flores"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-caverna-950 border ${
                        errors.street ? 'border-red-500' : 'border-caverna-700'
                      } text-white placeholder-caverna-500 text-sm focus:outline-none focus:ring-1 focus:ring-redaccent-600`}
                    />
                    {errors.street && <p className="text-xs text-red-400 mt-1">{errors.street}</p>}
                  </div>

                  <div>
                    <label htmlFor="addr-number" className="text-[11px] font-bold uppercase tracking-wider text-caverna-400 block mb-1">
                      Número *
                    </label>
                    <input
                      id="addr-number"
                      type="text"
                      required
                      value={customer.number}
                      onChange={(e) => handleInputChange('number', e.target.value)}
                      placeholder="Ex.: 123"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-caverna-950 border ${
                        errors.number ? 'border-red-500' : 'border-caverna-700'
                      } text-white placeholder-caverna-500 text-sm focus:outline-none focus:ring-1 focus:ring-redaccent-600`}
                    />
                    {errors.number && <p className="text-xs text-red-400 mt-1">{errors.number}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="addr-neighborhood" className="text-[11px] font-bold uppercase tracking-wider text-caverna-400 block mb-1">
                      Bairro *
                    </label>
                    <input
                      id="addr-neighborhood"
                      type="text"
                      required
                      value={customer.neighborhood}
                      onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                      placeholder="Ex.: Centro"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-caverna-950 border ${
                        errors.neighborhood ? 'border-red-500' : 'border-caverna-700'
                      } text-white placeholder-caverna-500 text-sm focus:outline-none focus:ring-1 focus:ring-redaccent-600`}
                    />
                    {errors.neighborhood && <p className="text-xs text-red-400 mt-1">{errors.neighborhood}</p>}
                  </div>

                  <div>
                    <label htmlFor="addr-complement" className="text-[11px] font-bold uppercase tracking-wider text-caverna-400 block mb-1">
                      Complemento (opcional)
                    </label>
                    <input
                      id="addr-complement"
                      type="text"
                      value={customer.complement}
                      onChange={(e) => handleInputChange('complement', e.target.value)}
                      placeholder="Apto 42, Bloco B, Casa 2..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-caverna-950 border border-caverna-700 text-white placeholder-caverna-500 text-sm focus:outline-none focus:ring-1 focus:ring-redaccent-600"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="addr-reference" className="text-[11px] font-bold uppercase tracking-wider text-caverna-400 block mb-1">
                    Ponto de Referência (opcional)
                  </label>
                  <input
                    id="addr-reference"
                    type="text"
                    value={customer.reference}
                    onChange={(e) => handleInputChange('reference', e.target.value)}
                    placeholder="Próximo à praça, em frente à padaria..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-caverna-950 border border-caverna-700 text-white placeholder-caverna-500 text-sm focus:outline-none focus:ring-1 focus:ring-redaccent-600"
                  />
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-caverna-850/60 border border-caverna-750 flex items-center gap-3 text-xs sm:text-sm text-caverna-300 animate-fade-in">
                <Store className="w-5 h-5 text-redaccent-400 flex-shrink-0" />
                <span>
                  Você irá retirar o seu pedido quentinho no balcão da hamburgueria. Não é necessário preencher endereço.
                </span>
              </div>
            )}

            {/* OBSERVAÇÕES GERAIS */}
            <div>
              <label htmlFor="checkout-notes" className="text-xs font-bold uppercase tracking-wider text-caverna-400 block mb-1.5">
                Observações adicionais para a equipe da Caverna
              </label>
              <textarea
                id="checkout-notes"
                rows={2}
                value={customer.generalNotes}
                onChange={(e) => handleInputChange('generalNotes', e.target.value)}
                placeholder="Ex.: Troco para R$ 50,00, campainha estragada ligar ao chegar..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-caverna-950 border border-caverna-700 focus:border-redaccent-600 text-white placeholder-caverna-500 text-sm focus:outline-none focus:ring-1 focus:ring-redaccent-600"
              />
            </div>

          </form>

        </div>

        {/* MODAL FOOTER */}
        <div className="p-5 sm:p-6 bg-caverna-950 border-t border-caverna-800 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              closeCheckout();
              openCart();
            }}
            className="px-4 py-3 rounded-xl border border-caverna-700 text-caverna-300 hover:text-white hover:bg-caverna-850 text-xs uppercase tracking-wider font-bold transition-colors"
          >
            Voltar
          </button>

          <button
            type="button"
            onClick={handleProceedToReview}
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-redaccent-900/30 transition-all"
          >
            <span>Revisar Pedido</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
