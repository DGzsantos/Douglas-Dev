"use client";

import { motion } from "framer-motion";
import { Bot, Globe, Settings2, Link2, Repeat2 } from "lucide-react";

const services = [
  {
    emoji: "🤖",
    icon: Bot,
    title: "Automação de Processos",
    description:
      "Tarefas repetitivas que tomam horas do seu time passam a acontecer automaticamente, sem erro e sem custo de mão de obra extra.",
    highlight: "Economize horas por semana",
    color: "from-blue-500/15 to-blue-600/5",
    border: "border-blue-500/25",
    iconColor: "text-blue-400",
    badgeBg: "bg-blue-500/10 text-blue-300",
  },
  {
    emoji: "💬",
    icon: Repeat2,
    title: "Bots para WhatsApp e Instagram",
    description:
      "Seu negócio atendendo clientes 24h por dia, respondendo dúvidas, coletando dados e enviando mensagens — sem você precisar estar online.",
    highlight: "Atendimento 24h sem custo fixo",
    color: "from-green-500/15 to-green-600/5",
    border: "border-green-500/25",
    iconColor: "text-green-400",
    badgeBg: "bg-green-500/10 text-green-300",
  },
  {
    emoji: "🌐",
    icon: Globe,
    title: "Criação de Sites Profissionais",
    description:
      "Presença online que transmite credibilidade e converte visitantes em clientes. Rápido, bonito e otimizado para aparecer no Google.",
    highlight: "Sua empresa no mundo digital",
    color: "from-cyan-500/15 to-cyan-600/5",
    border: "border-cyan-500/25",
    iconColor: "text-cyan-400",
    badgeBg: "bg-cyan-500/10 text-cyan-300",
  },
  {
    emoji: "⚙️",
    icon: Settings2,
    title: "Sistemas Personalizados",
    description:
      "Sistema feito sob medida para o jeito que a sua empresa funciona. Nenhum software genérico — só o que você realmente precisa.",
    highlight: "100% adaptado ao seu negócio",
    color: "from-violet-500/15 to-violet-600/5",
    border: "border-violet-500/25",
    iconColor: "text-violet-400",
    badgeBg: "bg-violet-500/10 text-violet-300",
  },
  {
    emoji: "🔗",
    icon: Link2,
    title: "Integração entre Ferramentas",
    description:
      "Conecte os sistemas que você já usa — WhatsApp, planilhas, e-mail, ERPs — e elimine o retrabalho de copiar informações de um lugar para o outro.",
    highlight: "Fim do retrabalho manual",
    color: "from-orange-500/15 to-orange-600/5",
    border: "border-orange-500/25",
    iconColor: "text-orange-400",
    badgeBg: "bg-orange-500/10 text-orange-300",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full mb-4">
            O que eu faço
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Soluções em tecnologia para{" "}
            <span className="gradient-text">automatizar seu negócio</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            De bots e automações a sistemas completos — entrego o que sua empresa
            precisa para parar de fazer manual o que pode ser automático.
          </p>
        </motion.div>

        {/* Cards grid: 2 cols sm, 3 cols lg — 5 cards = 3+2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className={`relative bg-gradient-to-b ${service.color} border ${service.border} rounded-2xl p-6 flex flex-col gap-4 group hover:scale-[1.02] transition-all duration-300`}
            >
              {/* Emoji + Icon */}
              <div className="flex items-center gap-3">
                <span className="text-3xl leading-none">{service.emoji}</span>
                <div
                  className={`w-10 h-10 rounded-xl border ${service.border} bg-slate-900/60 flex items-center justify-center`}
                >
                  <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-lg leading-snug">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Benefit badge */}
              <span
                className={`self-start text-xs font-semibold px-3 py-1.5 rounded-full ${service.badgeBg}`}
              >
                ✓ {service.highlight}
              </span>
            </motion.div>
          ))}

          {/* Filler card for symmetry on large screens (5 cards → 3+2, add a CTA card) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 5 * 0.09 }}
            className="relative bg-gradient-to-b from-slate-800/40 to-slate-900/20 border border-slate-700/40 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center gap-4 text-center"
          >
            <span className="text-3xl">💡</span>
            <h3 className="text-slate-300 font-bold text-base">
              Tem uma ideia específica?
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Me conta o problema. Se existe uma forma de automatizar, eu acho.
            </p>
            <a
              href="#contato"
              className="text-blue-400 hover:text-blue-300 text-sm font-semibold underline underline-offset-4 transition-colors"
            >
              Vamos conversar →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
