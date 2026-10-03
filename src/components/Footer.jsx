import React from 'react';
import { Flame, MessageCircle, Instagram, ArrowUp } from 'lucide-react';
import { STORE_CONFIG } from '../config/store';
import { useCart } from '../context/CartContext';

export default function Footer() {
  const { openCart, totalItems } = useCart();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Favoritos', href: '#destaques' },
    { label: 'Como Pedir', href: '#como-pedir' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const cleanWhatsapp = (STORE_CONFIG.whatsapp || '').replace(/\D/g, '');
  const instagramUrl = STORE_CONFIG.instagram?.startsWith('http')
    ? STORE_CONFIG.instagram
    : `https://instagram.com/${STORE_CONFIG.instagram?.replace('@', '')}`;

  return (
    <footer className="bg-caverna-950 border-t border-caverna-800 text-caverna-300 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* TOP ROW */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-caverna-900 border border-redaccent-800/50 p-1">
                <img
                  src="./images/logo.png"
                  alt="Logo Caverna Burger"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = './images/logo.jpeg';
                  }}
                />
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-white tracking-wider uppercase block">
                  {STORE_CONFIG.displayName}
                </span>
                <span className="text-xs text-redaccent-400 font-semibold tracking-widest uppercase">
                  BURGER DELIVERY
                </span>
              </div>
            </div>

            <p className="text-sm text-caverna-400 max-w-sm">
              Hambúrguer artesanal. Muito sabor. Ingredientes selecionados e preparados com dedicação em cada detalhe.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 pt-1">
              {STORE_CONFIG.whatsapp ? (
                <a
                  href={`https://api.whatsapp.com/send?phone=${cleanWhatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Caverna Burger"
                  className="p-2.5 rounded-xl bg-caverna-900 hover:bg-emerald-600 hover:text-white text-caverna-300 border border-caverna-800 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              ) : null}

              {STORE_CONFIG.instagram ? (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Caverna Burger"
                  className="p-2.5 rounded-xl bg-caverna-900 hover:bg-pink-600 hover:text-white text-caverna-300 border border-caverna-800 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              ) : null}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Navegação Rápida
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-caverna-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA / ACTIONS */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Seu Pedido
            </h4>
            <p className="text-xs text-caverna-400">
              Pronto para saborear o verdadeiro hambúrguer artesanal?
            </p>
            <button
              type="button"
              onClick={openCart}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-redaccent-700 hover:bg-redaccent-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              <Flame className="w-4 h-4 fill-white" />
              <span>Ver Comanda ({totalItems})</span>
            </button>
          </div>

        </div>

        {/* BOTTOM ROW */}
        <div className="pt-8 border-t border-caverna-850 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-caverna-500">
          <p>
            © {new Date().getFullYear()} {STORE_CONFIG.name}. Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-caverna-400 hover:text-white transition-colors"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
