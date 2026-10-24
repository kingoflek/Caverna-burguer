import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  MessageCircle, 
  Mail, 
  Instagram, 
  Lock, 
  Building2, 
  ChevronRight,
  HelpCircle,
  FileText
} from 'lucide-react';
import { STORE_CONFIG } from '../config/store';
import { useCart } from '../context/CartContext';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  const { openAdmin, openWholesaleModal } = useCart();
  const [modalPolicy, setModalPolicy] = useState(null);

  const handleWhatsAppContact = () => {
    const msg = `Olá Secret Parts! Gostaria de falar com o suporte ao cliente sobre faróis automotivos.`;
    window.open(generateWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-secret-dark border-t border-secret-border text-secret-muted pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: BRAND & COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* BRAND COLUMN (2 COLS ON LG) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#inicio" className="inline-block">
              <img
                src="./images/logo-header.png"
                alt="SECRET PARTS - Faróis Automotivos"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = './images/logo.svg';
                }}
              />
            </a>

            <p className="text-xs sm:text-sm text-secret-muted leading-relaxed max-w-sm">
              A <strong>SECRET PARTS</strong> é a sua loja especializada exclusivamente na comercialização e distribuição de faróis automotivos. Atendimento técnico para reposição no varejo e fornecimento em quantidade para o atacado.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={handleWhatsAppContact}
                className="p-2 rounded-xl bg-secret-card hover:bg-emerald-950 border border-secret-border hover:border-emerald-600 text-emerald-400 transition-colors"
                title="Atendimento no WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </button>

              {STORE_CONFIG.email && (
                <a
                  href={`mailto:${STORE_CONFIG.email}`}
                  className="p-2 rounded-xl bg-secret-card hover:bg-secret-surface border border-secret-border text-secret-subtle hover:text-white transition-colors"
                  title="Contato por E-mail"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}

              {STORE_CONFIG.instagram && (
                <a
                  href={`https://instagram.com/${STORE_CONFIG.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-secret-card hover:bg-secret-surface border border-secret-border text-secret-subtle hover:text-white transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* COLUMN 1: NAVEGAÇÃO */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#catalogo" onClick={(e) => handleNavClick(e, '#catalogo')} className="hover:text-white transition-colors">
                  Catálogo de Faróis
                </a>
              </li>
              <li>
                <a href="#seletor-veiculo" onClick={(e) => handleNavClick(e, '#seletor-veiculo')} className="hover:text-white transition-colors">
                  Faróis por Veículo
                </a>
              </li>
              <li>
                <a href="#ofertas" onClick={(e) => handleNavClick(e, '#ofertas')} className="hover:text-white transition-colors">
                  Ofertas Especiais
                </a>
              </li>
              <li>
                <a href="#entrega-regional" onClick={(e) => handleNavClick(e, '#entrega-regional')} className="hover:text-white transition-colors">
                  Entrega Regional
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: ATACADO & DISTRIBUIÇÃO */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Varejo & Distribuição
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={openWholesaleModal}
                  className="text-left hover:text-white transition-colors text-redaccent-400 font-semibold"
                >
                  Venda para Distribuidores
                </button>
              </li>
              <li>
                <a href="#distribuidores" onClick={(e) => handleNavClick(e, '#distribuidores')} className="hover:text-white transition-colors">
                  Condições para Lojistas e Oficinas
                </a>
              </li>
              <li>
                <a href="#como-comprar" onClick={(e) => handleNavClick(e, '#como-comprar')} className="hover:text-white transition-colors">
                  Como Comprar no Site
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleWhatsAppContact}
                  className="text-left hover:text-white transition-colors"
                >
                  Consultar Peça no WhatsApp
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: POLÍTICAS & SEGURANÇA */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Políticas & Termos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => setModalPolicy('trocas')}
                  className="text-left hover:text-white transition-colors"
                >
                  Política de Troca e Devolução
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalPolicy('privacidade')}
                  className="text-left hover:text-white transition-colors"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setModalPolicy('termos')}
                  className="text-left hover:text-white transition-colors"
                >
                  Termos de Uso
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openAdmin}
                  className="inline-flex items-center gap-1.5 text-secret-subtle hover:text-white transition-colors pt-2"
                >
                  <Lock className="w-3 h-3 text-redaccent-500" />
                  <span>Painel do Gestor</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT & DISCLOSURES */}
        <div className="pt-8 border-t border-secret-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-secret-subtle">
          <p>
            © {new Date().getFullYear()} <strong>SECRET PARTS</strong> — Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Especialista Exclusiva em Faróis</span>
            <span>•</span>
            <span>Varejo e Atacado</span>
          </div>
        </div>

      </div>

      {/* MODAL INSTITUCIONAL DE POLÍTICAS */}
      {modalPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-secret-surface border border-secret-border rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-secret-border pb-3">
              <h3 className="font-display font-bold text-base text-white">
                {modalPolicy === 'trocas' && 'Política de Troca e Devolução'}
                {modalPolicy === 'privacidade' && 'Política de Privacidade'}
                {modalPolicy === 'termos' && 'Termos de Uso'}
              </h3>
              <button onClick={() => setModalPolicy(null)} className="text-secret-subtle hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs text-secret-muted space-y-3 max-h-72 overflow-y-auto leading-relaxed">
              {modalPolicy === 'trocas' && (
                <>
                  <p>
                    A <strong>Secret Parts</strong> garante o direito de troca e devolução no prazo de até 7 (sete) dias corridos a partir do recebimento, conforme o Código de Defesa do Consumidor.
                  </p>
                  <p>
                    A peça deve estar sem marcas de instalação forçada, com chicotes e soquetes intactos e na embalagem protetora original.
                  </p>
                  <p>
                    Garantia legal de 90 dias contra defeitos de fabricação ou infiltração.
                  </p>
                </>
              )}

              {modalPolicy === 'privacidade' && (
                <>
                  <p>
                    Seus dados fornecidos no momento do pedido (nome, telefone e endereço) são utilizados estritamente para o processamento da entrega e atendimento comercial via WhatsApp.
                  </p>
                  <p>
                    Não comercializamos nem compartilhamos suas informações com terceiros não envolvidos na logística da entrega.
                  </p>
                </>
              )}

              {modalPolicy === 'termos' && (
                <>
                  <p>
                    As imagens, códigos e referências de modelos de veículos presentes no catálogo têm a finalidade estrita de orientar o consumidor e reparador automotivo quanto à correta aplicação da peça.
                  </p>
                  <p>
                    Todos os pedidos gerados no site dependem de conferência e confirmação de estoque antes do faturamento final.
                  </p>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={() => setModalPolicy(null)}
              className="w-full py-2.5 rounded-xl bg-secret-card border border-secret-border text-white text-xs font-bold uppercase"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
