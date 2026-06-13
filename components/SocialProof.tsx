"use client";

import { useReveal } from "@/hooks/useReveal";
import { Quote, Utensils } from "lucide-react";

const featured = {
  quote:
    "Hoje o cliente abre o WhatsApp, vê o cardápio completo, monta o pedido, escolhe a forma de pagamento — e o pedido já cai pronto na cozinha. Virou o nosso próprio 'iFood', sem taxa de marketplace e sem perder pedido no meio da bagunça.",
  author: "Delícias da Jandy",
  segment: "Restaurante",
  result: "Pedidos 100% automatizados pelo WhatsApp",
};

const metrics = [
  { value: "< 7 dias", label: "Da conversa ao sistema rodando" },
  { value: "3 nichos", label: "Empresas, assistências e provedores" },
  { value: "1 contato", label: "Suporte direto sem intermediários" },
  { value: "100%", label: "Foco no seu negócio" },
];

export default function SocialProof() {
  const ref = useReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="py-20 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="text-center mb-12 reveal">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-1.5 rounded-full mb-4">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            O que muda quando você{" "}
            <span className="gradient-text">para de improvisar</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Um exemplo real do impacto que um sistema simples e bem feito causa no dia a dia das empresas.
          </p>
        </header>

        {/* Featured testimonial */}
        <article
          className="reveal flex flex-col rounded-2xl p-8 sm:p-10 relative overflow-hidden mb-10"
          style={{
            background: "linear-gradient(135deg, #064e3b 0%, #0f172a 55%, #022c22 100%)",
            border: "1px solid rgba(16,185,129,0.15)",
          }}
        >
          <Quote className="absolute -top-6 -right-6 w-36 h-36 text-emerald-500/[0.07] pointer-events-none" />

          <Utensils className="w-6 h-6 text-emerald-400 mb-5 relative z-10" />

          <p className="text-slate-200 text-lg sm:text-xl leading-relaxed italic relative z-10 max-w-2xl">
            &ldquo;{featured.quote}&rdquo;
          </p>

          <p className="text-sm font-bold mt-6 relative z-10 text-emerald-400">
            {featured.result}
          </p>

          <div className="border-t border-white/5 mt-6 pt-5 relative z-10">
            <p className="text-white text-sm font-semibold">{featured.author}</p>
            <p className="text-slate-500 text-xs mt-0.5">{featured.segment}</p>
          </div>
        </article>

        {/* Metrics bar */}
        <div className="reveal reveal-d2 bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-cyan-950/40 border border-slate-800/60 rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-black gradient-text mb-2">
                  {m.value}
                </p>
                <p className="text-slate-400 text-sm">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
