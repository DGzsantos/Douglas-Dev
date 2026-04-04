"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardX,
  FileSpreadsheet,
  AlertTriangle,
  Clock,
} from "lucide-react";

const problems = [
  {
    icon: ClipboardX,
    title: "Sem organização",
    description:
      "Pedidos, chamados e tarefas espalhados em papel, caderno ou grupos de WhatsApp — ninguém sabe o que está pendente.",
    color: "from-red-500/20 to-red-600/5",
    iconColor: "text-red-400",
    borderColor: "border-red-500/20",
  },
  {
    icon: FileSpreadsheet,
    title: "Controle no papel ou planilha",
    description:
      "Planilhas que ninguém atualiza, papéis que somem e informações que ficam na cabeça de uma pessoa só.",
    color: "from-orange-500/20 to-orange-600/5",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20",
  },
  {
    icon: AlertTriangle,
    title: "Perda de informações",
    description:
      "Histórico de clientes, equipamentos e atendimentos que se perdem. Quando alguém sai da empresa, o conhecimento vai junto.",
    color: "from-yellow-500/20 to-yellow-600/5",
    iconColor: "text-yellow-400",
    borderColor: "border-yellow-500/20",
  },
  {
    icon: Clock,
    title: "Demora no atendimento",
    description:
      "Clientes esperando resposta, técnicos sem rota definida, equipe sem saber qual chamado atender primeiro.",
    color: "from-rose-500/20 to-rose-600/5",
    iconColor: "text-rose-400",
    borderColor: "border-rose-500/20",
  },
];

function ProblemCard({
  problem,
  index,
}: {
  problem: (typeof problems)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-gradient-to-b ${problem.color} border ${problem.borderColor} rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300`}
    >
      <div
        className={`w-12 h-12 rounded-xl bg-slate-900/80 border ${problem.borderColor} flex items-center justify-center`}
      >
        <problem.icon className={`w-6 h-6 ${problem.iconColor}`} />
      </div>
      <div>
        <h3 className="text-white font-bold text-lg mb-2">{problem.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          {problem.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Problems() {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="problemas" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-1.5 rounded-full mb-4">
            Você se identifica?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Sua empresa ainda perde tempo{" "}
            <span className="text-red-400">com o que pode ser automático?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Esses são os problemas mais comuns que vejo nas empresas que chegam
            até mim. Se algum soa familiar, você está no lugar certo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((problem, i) => (
            <ProblemCard key={problem.title} problem={problem} index={i} />
          ))}
        </div>

        {/* Bridge to solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <p className="text-slate-300 text-xl font-medium">
            Tudo isso tem solução com automação —{" "}
            <span className="text-blue-400 font-bold">
              simples, rápida e acessível.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
