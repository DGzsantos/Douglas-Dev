"use client";

import { useReveal } from "@/hooks/useReveal";
import { WHATSAPP_URL } from "@/lib/constants";
import {
  ClipboardX,
  FileSpreadsheet,
  AlertTriangle,
  Clock,
  Shuffle,
  UserX,
  ArrowRight,
} from "lucide-react";

const points = [
  {
    icon: ClipboardX,
    title: "Processos sem organização",
    stat: "68%",
    statLabel: "das PMEs não têm processos documentados",
    text: "Tarefas, pedidos e chamados espalhados em papel, caderno e grupos de WhatsApp — ninguém sabe o que está pendente.",
  },
  {
    icon: FileSpreadsheet,
    title: "Controle em papel ou planilha",
    stat: "3x",
    statLabel: "mais lento que um sistema automatizado",
    text: "Planilhas desatualizadas, papéis que somem e informações que vivem na cabeça de uma pessoa só.",
  },
  {
    icon: AlertTriangle,
    title: "Histórico que se perde",
    stat: "40%",
    statLabel: "dos clientes trocam de fornecedor por mal atendimento",
    text: "Quando alguém sai da empresa, o conhecimento vai junto. Clientes precisam explicar o problema toda vez.",
  },
  {
    icon: Clock,
    title: "Atendimento lento",
    stat: "2h+",
    statLabel: "de espera afasta o cliente definitivamente",
    text: "Clientes esperando resposta, equipe sem prioridade definida, tempo desperdiçado em tarefa errada.",
  },
  {
    icon: Shuffle,
    title: "Sistemas que não se comunicam",
    stat: "30%",
    statLabel: "do tempo é gasto em retrabalho por falta de integração",
    text: "Informação copiada manualmente de um sistema para outro, gerando erros e retrabalho todos os dias.",
  },
  {
    icon: UserX,
    title: "Equipe sobrecarregada com o manual",
    stat: "15h",
    statLabel: "semanais perdidas em tarefas que poderiam ser automáticas",
    text: "Horas gastas em tarefas repetitivas que poderiam ser automáticas — tempo que deveria ir para o cliente.",
  },
];

const delayClass = [
  "", "reveal-d1", "reveal-d2",
  "reveal-d3", "reveal-d4", "reveal-d5",
];

export default function Problemas() {
  const ref = useReveal();

  return (
    <section
      id="problemas"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-24 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="text-center mb-12 reveal">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-1.5 rounded-full mb-4">
            Pontos de dor
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Você se identifica{" "}
            <span className="text-red-400">com algum desses?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            São os problemas mais comuns que vejo. Se qualquer um soa familiar,
            a solução está logo aqui.
          </p>
        </header>

        {/* Pain point grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {points.map((p, i) => (
            <article
              key={p.title}
              className={`reveal ${delayClass[i]} group flex flex-col rounded-2xl p-6 relative overflow-hidden hover:-translate-y-1 transition-all duration-300`}
              style={{
                background: "linear-gradient(135deg, #2a131c 0%, #170c12 55%, #140a0d 100%)",
                border: "1px solid rgba(239,68,68,0.1)",
              }}
            >
              {/* Ícone como marca d'água */}
              <p.icon className="absolute -top-4 -right-4 w-28 h-28 text-red-500/[0.06] pointer-events-none" />

              {/* Estatística em destaque */}
              <div className="mb-4 relative z-10">
                <span className="text-4xl font-black text-red-400 leading-none">{p.stat}</span>
                <p className="text-slate-500 text-xs mt-2 leading-snug max-w-[85%]">{p.statLabel}</p>
              </div>

              <h3 className="text-white font-extrabold text-lg leading-snug mb-2 relative z-10">
                {p.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed flex-1 relative z-10">{p.text}</p>
            </article>
          ))}
        </div>

        {/* Bridge CTA */}
        <div className="reveal reveal-d3 mt-12 text-center">
          <p className="text-slate-300 text-lg font-medium mb-6">
            Todos esses problemas têm solução com{" "}
            <span className="text-blue-400 font-bold">automação e sistemas certos</span>.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-red-500/25 hover:shadow-red-500/40 group"
          >
            Quero resolver esses problemas
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
