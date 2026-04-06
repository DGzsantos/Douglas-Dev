"use client";

import { useReveal } from "@/hooks/useReveal";
import {
  MessageSquare,
  FileText,
  Code2,
  Rocket,
  Zap,
  UserCheck,
  MessageCircle,
  ShieldCheck,
  Clock,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Conversa inicial",
    text: "Você me conta o problema. Sem formulários, sem espera direto no WhatsApp.",
  },
  {
    n: "02",
    icon: FileText,
    title: "Proposta e escopo",
    text: "Recebe uma proposta clara com prazo, custo e o que será entregue. Sem surpresa.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Desenvolvimento",
    text: "Você acompanha o progresso. Feedbacks ao longo do caminho, não só no final.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Entrega + suporte",
    text: "Sistema no ar, equipe treinada e suporte contínuo direto comigo.",
  },
];

const differentials = [
  {
    icon: Zap,
    title: "Entrega em até 7 dias",
    text: "Para a maioria das soluções.",
  },
  {
    icon: UserCheck,
    title: "Suporte direto no WhatsApp",
    text: "Sem ticket, sem fila.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp no centro de tudo",
    text: "Seus clientes já usam. A solução também.",
  },
  {
    icon: ShieldCheck,
    title: "Sem contratos longos",
    text: "Pague pelo que precisar.",
  },
  {
    icon: Clock,
    title: "Rápido de adotar",
    text: "Equipe usa desde o primeiro dia.",
  },
  {
    icon: RefreshCw,
    title: "Evolui com seu negócio",
    text: "Ajustes e melhorias quando necessário.",
  },
];

const stepDelay = ["", "reveal-d1", "reveal-d2", "reveal-d3"];
const difDelay  = ["", "reveal-d1", "reveal-d2", "reveal-d3", "reveal-d4", "reveal-d5"];

export default function ProcessoDiferenciais() {
  const ref = useReveal();

  return (
    <section
      id="como-funciona"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/25 via-transparent to-cyan-950/15 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full mb-4">
            Processo &amp; Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Da ideia ao{" "}
            <span className="gradient-text">sistema funcionando</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Simples, transparente e sem enrolação, do primeiro contato ao
            suporte contínuo.
          </p>
        </header>

        {/* Process: horizontal timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`reveal ${stepDelay[i]} relative flex flex-col items-center text-center`}
            >
              {/* Connector (desktop only, all but last) */}
              {i < steps.length - 1 && (
                <span className="hidden lg:block step-connector" aria-hidden="true" />
              )}

              {/* Icon circle */}
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg shadow-blue-500/25 glow-blue">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-slate-950 border border-blue-500/40 rounded-full text-xs font-black text-blue-400 flex items-center justify-center">
                  {i + 1}
                </span>
              </div>

              <h3 className="text-white font-bold text-sm sm:text-base mb-2">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="reveal flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-slate-800/60" />
          <span className="text-slate-600 text-xs font-semibold uppercase tracking-widest px-2">
            Por que comigo
          </span>
          <div className="flex-1 h-px bg-slate-800/60" />
        </div>

        {/* Differentials: 2×3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {differentials.map((d, i) => (
            <div
              key={d.title}
              className={`reveal ${difDelay[i]} flex items-start gap-4 bg-slate-900/50 border border-slate-800/50 rounded-xl p-5 hover:border-slate-700/60 transition-colors duration-300`}
            >
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                <d.icon className="w-4 h-4 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">
                  {d.title}
                </h3>
                <p className="text-slate-500 text-xs">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
