import React from 'react';
import { MenuSquare, ShoppingBag, Send, Smile } from 'lucide-react';

export default function HowToOrderSection() {
  const steps = [
    {
      number: '01',
      icon: <MenuSquare className="w-6 h-6 text-redaccent-400" />,
      title: 'Escolha seus lanches',
      description: 'Navegue pelo cardápio, escolha seus burgers artesanais, smash ou milkshakes favoritos.',
    },
    {
      number: '02',
      icon: <ShoppingBag className="w-6 h-6 text-redaccent-400" />,
      title: 'Monte sua comanda',
      description: 'Defina as quantidades, adicione observações de preparo e informe seus dados de entrega.',
    },
    {
      number: '03',
      icon: <Send className="w-6 h-6 text-emerald-400" />,
      title: 'Envie pelo WhatsApp',
      description: 'Com um clique, seu pedido formatado é enviado diretamente para a nossa equipe.',
    },
    {
      number: '04',
      icon: <Smile className="w-6 h-6 text-amberaccent-400" />,
      title: 'Confirmação e sabor',
      description: 'A Caverna Burger confirma seu pedido e prepara seu hambúrguer artesanal quentinho!',
    },
  ];

  return (
    <section id="como-pedir" className="py-16 sm:py-20 bg-caverna-950 relative border-t border-caverna-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-redaccent-400 block mb-2">
            Simples e Rápido
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Como fazer seu pedido
          </h2>
          <p className="text-caverna-400 text-sm sm:text-base mt-2">
            Em poucos passos sua comanda é montada e enviada diretamente para a nossa cozinha.
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-6 rounded-2xl bg-caverna-900/80 border border-caverna-800 hover:border-caverna-700 transition-colors flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-caverna-850 border border-caverna-700/80 group-hover:border-redaccent-800/80 transition-colors">
                  {step.icon}
                </div>
                <span className="font-display font-black text-2xl text-caverna-750 group-hover:text-caverna-650 transition-colors">
                  {step.number}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-display font-bold text-base text-white">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-caverna-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
