import React from 'react';
import { Search, HelpCircle, Truck, MessageCircle, ArrowRight } from 'lucide-react';
import { STORE_CONFIG } from '../config/store';

export default function HowToBuySection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Localize o Farol do seu Carro",
      description: "Utilize os filtros de marca, modelo, ano e lado para encontrar a peça exata compatível com seu veículo."
    },
    {
      number: "02",
      icon: HelpCircle,
      title: "Confira a Aplicação Técnica",
      description: "Verifique o código original (OEM) e as fotos reais. Se houver qualquer dúvida, fale com nossos consultores."
    },
    {
      number: "03",
      icon: Truck,
      title: "Escolha Entrega ou Retirada",
      description: "Entregamos na região sem custo adicional ou você retira no local. Prazo combinado pelo WhatsApp."
    },
    {
      number: "04",
      icon: MessageCircle,
      title: "Finalize pelo WhatsApp",
      description: "Envie seu pedido com mensagem organizada. Nossa equipe confere o estoque, emite a nota e combina o pagamento."
    }
  ];

  const handleScrollToCatalog = (e) => {
    e.preventDefault();
    const element = document.querySelector('#catalogo');
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
    <section id="como-comprar" className="py-16 sm:py-24 bg-secret-surface border-t border-secret-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secret-card border border-secret-border">
            <span className="text-[11px] font-bold uppercase tracking-wider text-redaccent-400">
              Processo Simples e Seguro
            </span>
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Como Comprar na Secret Parts
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-secret-muted leading-relaxed">
            Desenvolvemos uma experiência ágil para você encontrar a peça certa, sem surpresas de incompatibilidade ou atrasos.
          </p>
        </div>

        {/* 4 STEPS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative p-6 rounded-3xl bg-secret-card border border-secret-border flex flex-col justify-between shadow-lg hover:border-redaccent-800/80 transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display font-black text-3xl text-secret-border group-hover:text-redaccent-500/40 transition-colors">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-secret-surface border border-secret-border text-redaccent-400 group-hover:bg-redaccent-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-base text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-secret-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-secret-border/50 flex items-center justify-between text-[11px] font-semibold text-secret-subtle">
                  <span>Passo {idx + 1} de 4</span>
                  <span className="w-2 h-2 rounded-full bg-redaccent-500/60" />
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-12 text-center">
          <a
            href="#catalogo"
            onClick={handleScrollToCatalog}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-redaccent-700 to-redaccent-600 hover:from-redaccent-600 hover:to-redaccent-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-redaccent-950/50 transition-all transform hover:-translate-y-0.5"
          >
            <span>Buscar Farol para meu Carro Agora</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
