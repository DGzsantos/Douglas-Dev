"use client";

import { useReveal } from "@/hooks/useReveal";
import {
  Headphones,
  Bot,
  Repeat2,
  Globe,
  Link2,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const cards = [
  {
    icon: Headphones,
    tag: "Sistema de chamados",
    tagClass: "text-blue-300 bg-blue-500/10 border-blue-500/25",
    headline: "Sistemas sob medida para total controle das atividades",
    description:
      "Help desk, gestão de TI ou ordem de serviço, o sistema certo para que nenhum chamado, equipamento ou atendimento se perca.",
    benefits: [
      "Chamados abertos direto pelo WhatsApp",
      "Painel de status em tempo real",
      "Histórico completo de cada cliente",
    ],
    gradient: "from-blue-600/18 to-blue-900/8",
    border: "border-blue-500/25",
    iconClass: "bg-blue-500/12 border-blue-500/25 text-blue-400",
    ctaClass: "text-blue-400",
    highlight: true,
    cta: "Quero controle total",
  },
  {
    icon: Repeat2,
    tag: "Automação",
    tagClass: "text-green-300 bg-green-500/10 border-green-500/25",
    headline: "Ideia que elimina o trabalho repetitivo do seu time",
    description:
      "Fluxos que rodam sozinhos, notificações automáticas e processos que não dependem mais de uma pessoa lembrando de fazer.",
    benefits: [
      "Tarefas recorrentes no automático",
      "Notificações e alertas sem intervenção",
      "Mais tempo para o que gera valor",
    ],
    gradient: "from-green-600/18 to-green-900/8",
    border: "border-green-500/25",
    iconClass: "bg-green-500/12 border-green-500/25 text-green-400",
    ctaClass: "text-green-400",
    highlight: false,
    cta: "Quero automatizar",
  },
  {
    icon: Bot,
    tag: "Atendimento 24h",
    tagClass: "text-violet-300 bg-violet-500/10 border-violet-500/25",
    headline: "Bots que atendem seus clientes enquanto você dorme",
    description:
      "WhatsApp e Instagram com respostas automáticas, triagem de chamados e coleta de dados sem custo de funcionário.",
    benefits: [
      "Bot para WhatsApp e Instagram",
      "Triagem e resposta automática",
      "Integração com seu sistema",
    ],
    gradient: "from-violet-600/18 to-violet-900/8",
    border: "border-violet-500/25",
    iconClass: "bg-violet-500/12 border-violet-500/25 text-violet-400",
    ctaClass: "text-violet-400",
    highlight: false,
    cta: "Quero um bot",
  },
  {
    icon: Globe,
    tag: "Presença online",
    tagClass: "text-cyan-300 bg-cyan-500/10 border-cyan-500/25",
    headline: "Site profissional que gera credibilidade e novos clientes",
    description:
      "Sua empresa na internet com um site rápido, responsivo e focado em converter visitantes em contatos reais.",
    benefits: [
      "Design moderno e responsivo",
      "Otimizado para aparecer no Google",
      "Integração com WhatsApp e Instagram",
    ],
    gradient: "from-cyan-600/18 to-cyan-900/8",
    border: "border-cyan-500/25",
    iconClass: "bg-cyan-500/12 border-cyan-500/25 text-cyan-400",
    ctaClass: "text-cyan-400",
    highlight: false,
    cta: "Quero meu site",
  },
  {
    icon: Link2,
    tag: "Fim do retrabalho",
    tagClass: "text-orange-300 bg-orange-500/10 border-orange-500/25",
    headline: "Integrações que conectam tudo que você já usa",
    description:
      "WhatsApp, planilhas, e-mail, ERPs e sistemas legados trabalhando juntos, sem copiar e colar informações entre ferramentas.",
    benefits: [
      "Conexão entre sistemas existentes",
      "Eliminação de entradas duplicadas",
      "Scripts e APIs sob medida",
    ],
    gradient: "from-orange-600/18 to-orange-900/8",
    border: "border-orange-500/25",
    iconClass: "bg-orange-500/12 border-orange-500/25 text-orange-400",
    ctaClass: "text-orange-400",
    highlight: false,
    cta: "Quero integrar",
  },
  {
    icon: Lightbulb,
    tag: "Ideia específica?",
    tagClass: "text-green-300 bg-green-500/10 border-green-500/25",
    headline: "Podemos transformar e ideia em realidade",
    description:
      "Se você tem uma ideia, eu tenho a solução, a gente conversa e cria do zero sem enrolação.",
    benefits: [
      "Levantamento da sua necessidade real",
      "Solução criada do zero para o seu caso",
      "Prazo e custo definidos na primeira conversa",
    ],
    gradient: "from-green-600/18 to-rose-900/8",
    border: "border-green-500/25",
    iconClass: "bg-green-500/12 border-green-500/25 text-green-400",
    ctaClass: "text-green-400",
    highlight: false,
    cta: "Vamos conversar",
  },
];

const delayClass = ["", "reveal-d1", "reveal-d2", "reveal-d3", "reveal-d4", "reveal-d5"];

export default function Solucoes() {
  const ref = useReveal();

  return (
    <section
      id="solucoes"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full mb-4">
            Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            O que você ganha quando{" "}
            <span className="gradient-text">para de improvisar</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Cada solução foi pensada para resolver um problema real, não para
            impressionar, mas para funcionar.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <article
              key={card.headline}
              className={`reveal ${delayClass[i]} flex flex-col bg-gradient-to-b ${card.gradient} border ${card.border} rounded-2xl p-7 hover:scale-[1.015] transition-transform duration-300 ${
                card.highlight ? "ring-1 ring-blue-500/40 shadow-xl shadow-blue-500/10" : ""
              }`}
            >
              {/* Tag */}
              <span className={`self-start text-xs font-semibold border px-3 py-1 rounded-full mb-5 ${card.tagClass}`}>
                {card.tag}
              </span>

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${card.iconClass}`}>
                <card.icon className="w-5 h-5" />
              </div>

              {/* Headline */}
              <h3 className="text-white font-bold text-base sm:text-lg leading-snug mb-3">
                {card.headline}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-5">
                {card.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 flex-1 mb-7">
                {card.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${card.iconClass.split(" ").pop()}`} />
                    <span className="text-slate-300">{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-sm font-semibold ${card.ctaClass} hover:opacity-75 transition-opacity group`}
              >
                {card.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
