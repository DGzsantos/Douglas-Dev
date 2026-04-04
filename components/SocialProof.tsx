"use client";

import { motion } from "framer-motion";
import { Quote, TrendingDown, RefreshCw, Clock, Users } from "lucide-react";

const testimonials = [
  {
    quote:
      "Saímos do papel e do WhatsApp bagunçado para um sistema onde todo chamado tem dono e prazo. A equipe parou de perguntar 'quem vai fazer isso?' e os clientes pararam de ligar para saber o status.",
    author: "Assistência técnica de celulares",
    location: "São Paulo, SP",
    result: "70% menos tempo perdido em organização",
    resultIcon: TrendingDown,
    resultColor: "text-green-400",
  },
  {
    quote:
      "Antes, quando um técnico saía da empresa, a gente perdia todo o histórico de clientes e equipamentos. Agora tudo fica salvo no sistema. Foi um antes e depois real para nós.",
    author: "Provedor de internet regional",
    location: "Interior de MG",
    result: "Zero perda de histórico de clientes",
    resultIcon: RefreshCw,
    resultColor: "text-blue-400",
  },
  {
    quote:
      "O cliente consegue abrir chamado pelo WhatsApp e a gente recebe no painel. Simples assim. Nunca imaginei que seria tão prático — e minha equipe adotou sem resistência nenhuma.",
    author: "Empresa de suporte de TI",
    location: "Rio de Janeiro, RJ",
    result: "Adoção da equipe em menos de 1 dia",
    resultIcon: Clock,
    resultColor: "text-cyan-400",
  },
];

const metrics = [
  { value: "< 7 dias", label: "Da conversa ao sistema rodando" },
  { value: "3 nichos", label: "Empresas, assistências e provedores" },
  { value: "1 contato", label: "Suporte direto sem intermediários" },
  { value: "100%", label: "Foco no seu negócio" },
];

export default function SocialProof() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-4 py-1.5 rounded-full mb-4">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            O que muda quando você{" "}
            <span className="gradient-text">para de improvisar</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Exemplos reais do impacto que um sistema simples e bem feito causa
            no dia a dia das empresas.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="card-dark p-6 flex flex-col gap-5 hover:border-slate-700/70 transition-all duration-300"
            >
              <Quote className="w-6 h-6 text-blue-400/60 flex-shrink-0" />
              <p className="text-slate-300 text-sm leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Result badge */}
              <div className="flex items-center gap-2 bg-slate-800/80 border border-slate-700/40 rounded-xl px-4 py-2.5">
                <t.resultIcon className={`w-4 h-4 ${t.resultColor} flex-shrink-0`} />
                <span className={`text-xs font-semibold ${t.resultColor}`}>
                  {t.result}
                </span>
              </div>

              <div className="border-t border-slate-800 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">{t.author}</p>
                    <p className="text-slate-500 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Metrics bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-cyan-950/40 border border-slate-800/60 rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((m, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl sm:text-4xl font-black gradient-text mb-2">
                  {m.value}
                </p>
                <p className="text-slate-400 text-sm">{m.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <p className="text-center text-slate-600 text-xs mt-4">
          * Relatos baseados em resultados típicos de empresas similares após implementação de sistemas de gestão.
        </p>
      </div>
    </section>
  );
}
