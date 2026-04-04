"use client";

import { motion } from "framer-motion";
import { MessageSquare, Code2, Rocket, HeartHandshake } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const steps = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Entendimento da necessidade",
    description:
      "Você me conta como funciona sua empresa hoje, quais são os maiores problemas e o que seria ideal para você. Sem tecnicismos — só uma conversa direta.",
    detail: "Conversa via WhatsApp ou videochamada",
  },
  {
    step: "02",
    icon: Code2,
    title: "Desenvolvimento e configuração",
    description:
      "Com base no que você precisa, desenvolvo ou configuro o sistema. Você acompanha o progresso e dá feedbacks durante o processo.",
    detail: "Prazo médio de 3 a 7 dias úteis",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Entrega e treinamento",
    description:
      "Sistema no ar e treinamento da sua equipe incluído. Não entrego um manual — mostro como usar na prática, no seu contexto.",
    detail: "Treinamento prático e documentação simples",
  },
  {
    step: "04",
    icon: HeartHandshake,
    title: "Suporte contínuo",
    description:
      "Depois da entrega, continuo disponível. Se surgir alguma dúvida, problema ou necessidade de ajuste, é só me chamar.",
    detail: "Suporte direto via WhatsApp",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400 bg-violet-400/10 border border-violet-400/20 px-4 py-1.5 rounded-full mb-4">
            Como funciona
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Do problema ao{" "}
            <span className="gradient-text">sistema rodando</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Um processo simples e transparente. Sem surpresas, sem reuniões
            intermináveis, sem espera de meses.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-500/20 via-cyan-500/40 to-blue-500/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                {/* Step number + icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-xl shadow-blue-500/25 glow-blue">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-slate-950 border border-blue-500/40 rounded-full text-xs font-black text-blue-400 flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
                <span className="inline-block text-xs font-medium text-blue-400 bg-blue-400/10 border border-blue-400/20 px-3 py-1 rounded-full">
                  {step.detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-300 mb-6 text-lg">
            Pronto para começar? A primeira conversa é gratuita.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-xl shadow-green-500/30 hover:shadow-green-400/40 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quero começar agora
          </a>
        </motion.div>
      </div>
    </section>
  );
}
