"use client";

import { useReveal } from "@/hooks/useReveal";
import {
  ClipboardX,
  FileSpreadsheet,
  AlertTriangle,
  Clock,
  Shuffle,
  UserX,
} from "lucide-react";

const points = [
  {
    icon: ClipboardX,
    title: "Processos sem organização",
    text: "Tarefas, pedidos e chamados espalhados em papel, caderno e grupos de WhatsApp — ninguém sabe o que está pendente.",
  },
  {
    icon: FileSpreadsheet,
    title: "Controle em papel ou planilha",
    text: "Planilhas desatualizadas, papéis que somem e informações que vivem na cabeça de uma pessoa só.",
  },
  {
    icon: AlertTriangle,
    title: "Histórico que se perde",
    text: "Quando alguém sai da empresa, o conhecimento vai junto. Clientes precisam explicar o problema toda vez.",
  },
  {
    icon: Clock,
    title: "Atendimento lento",
    text: "Clientes esperando resposta, equipe sem prioridade definida, tempo desperdiçado em tarefa errada.",
  },
  {
    icon: Shuffle,
    title: "Sistemas que não se comunicam",
    text: "Informação copiada manualmente de um sistema para outro, gerando erros e retrabalho todos os dias.",
  },
  {
    icon: UserX,
    title: "Equipe sobrecarregada com o manual",
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
              className={`reveal ${delayClass[i]} flex gap-4 bg-red-500/5 border border-red-500/15 rounded-xl p-5 hover:border-red-500/30 transition-colors duration-300`}
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900/70 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <p.icon className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1.5">
                  {p.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{p.text}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bridge */}
        <p className="reveal reveal-d3 mt-10 text-center text-slate-300 text-lg font-medium">
          Todos esses problemas têm solução com{" "}
          <span className="text-blue-400 font-bold">automação e sistemas certos</span>.
        </p>
      </div>
    </section>
  );
}
