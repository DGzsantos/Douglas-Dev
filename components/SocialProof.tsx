"use client";

import { useReveal } from "@/hooks/useReveal";
import { Quote, TrendingDown, RefreshCw, Clock } from "lucide-react";

const testimonials = [
  {
    quote:
      "Saímos do papel e do WhatsApp bagunçado para um sistema onde todo chamado tem dono e prazo. A equipe parou de perguntar 'quem vai fazer isso?' e os clientes pararam de ligar para saber o status.",
    author: "Assistência técnica de celulares",
    location: "São Paulo, SP",
    result: "70% menos tempo perdido em organização",
    icon: TrendingDown,
    accent: "blue" as const,
  },
  {
    quote:
      "Antes, quando um técnico saía da empresa, a gente perdia todo o histórico de clientes e equipamentos. Agora tudo fica salvo no sistema. Foi um antes e depois real para nós.",
    author: "Provedor de internet regional",
    location: "Interior de MG",
    result: "Zero perda de histórico de clientes",
    icon: RefreshCw,
    accent: "green" as const,
  },
  {
    quote:
      "O cliente consegue abrir chamado pelo WhatsApp e a gente recebe no painel. Simples assim. Nunca imaginei que seria tão prático — e minha equipe adotou sem resistência nenhuma.",
    author: "Empresa de suporte de TI",
    location: "Rio de Janeiro, RJ",
    result: "Adoção da equipe em menos de 1 dia",
    icon: Clock,
    accent: "cyan" as const,
  },
];

const palette: Record<string, { metric: string; wm: string; gradient: string; border: string }> = {
  blue:  { metric: "text-blue-400",  wm: "text-blue-500/[0.07]",  gradient: "linear-gradient(135deg, #1a2a52 0%, #0f172a 55%, #0b3340 100%)", border: "rgba(59,130,246,0.12)" },
  green: { metric: "text-green-400", wm: "text-green-500/[0.07]", gradient: "linear-gradient(135deg, #15352c 0%, #0f172a 55%, #0b2e1f 100%)", border: "rgba(34,197,94,0.12)" },
  cyan:  { metric: "text-cyan-400",  wm: "text-cyan-500/[0.07]",  gradient: "linear-gradient(135deg, #133a47 0%, #0f172a 55%, #0b2333 100%)", border: "rgba(6,182,212,0.12)" },
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Exemplos reais do impacto que um sistema simples e bem feito causa no dia a dia das empresas.
          </p>
        </header>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {testimonials.map((t, i) => {
            const acc = palette[t.accent];
            return (
              <article
                key={t.author}
                className={`reveal reveal-d${i + 1} flex flex-col rounded-2xl p-6 relative overflow-hidden`}
                style={{
                  background: acc.gradient,
                  border: `1px solid ${acc.border}`,
                }}
              >
                <Quote className={`absolute -top-4 -right-4 w-28 h-28 ${acc.wm} pointer-events-none`} />

                <t.icon className={`w-5 h-5 ${acc.metric} mb-4 relative z-10`} />

                <p className="text-slate-300 text-sm leading-relaxed flex-1 italic relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <p className={`text-sm font-bold mt-5 relative z-10 ${acc.metric}`}>
                  {t.result}
                </p>

                <div className="border-t border-white/5 mt-4 pt-4 relative z-10">
                  <p className="text-white text-xs font-semibold">{t.author}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{t.location}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Metrics bar */}
        <div className="reveal reveal-d4 bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-cyan-950/40 border border-slate-800/60 rounded-2xl p-8">
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

        {/* Disclaimer */}
        <p className="text-center text-slate-600 text-xs mt-4 reveal reveal-d5">
          * Relatos baseados em resultados típicos de empresas similares após implementação de sistemas de gestão.
        </p>
      </div>
    </section>
  );
}
