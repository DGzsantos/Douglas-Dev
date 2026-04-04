"use client";

import { motion } from "framer-motion";
import {
  Headphones,
  Monitor,
  Wrench,
  Puzzle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const solutions = [
  {
    icon: Headphones,
    tag: "Mais popular",
    tagColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    title: "Sistema de Chamados (Help Desk)",
    description:
      "Registre, acompanhe e resolva chamados de suporte de forma organizada. Sua equipe sabe exatamente o que fazer, e seus clientes sabem o status do atendimento.",
    benefits: [
      "Abertura de chamado via WhatsApp ou formulário",
      "Painel com status em tempo real",
      "Histórico completo de atendimentos",
      "Notificações automáticas",
    ],
    gradient: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-500/30",
    iconBg: "bg-blue-500/15 border-blue-500/30",
    iconColor: "text-blue-400",
    highlight: true,
  },
  {
    icon: Monitor,
    tag: "Para provedores",
    tagColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    title: "Gerenciador de TI",
    description:
      "Controle de equipamentos, contratos, manutenções preventivas e inventário. Saiba exatamente onde está cada ativo e quando precisa de atenção.",
    benefits: [
      "Cadastro de equipamentos e clientes",
      "Controle de manutenção preventiva",
      "Alertas de vencimento de garantia",
      "Relatórios simples e claros",
    ],
    gradient: "from-cyan-600/20 to-cyan-900/10",
    border: "border-cyan-500/30",
    iconBg: "bg-cyan-500/15 border-cyan-500/30",
    iconColor: "text-cyan-400",
    highlight: false,
  },
  {
    icon: Wrench,
    tag: "Para assistências",
    tagColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    title: "Sistema para Assistência Técnica",
    description:
      "Ordem de serviço digital, controle de peças, entrega de laudos e comunicação com clientes — tudo em um único sistema simples de usar.",
    benefits: [
      "Ordens de serviço com foto do aparelho",
      "Controle de peças e estoque",
      "Envio de laudo e orçamento por WhatsApp",
      "Histórico por cliente e aparelho",
    ],
    gradient: "from-violet-600/20 to-violet-900/10",
    border: "border-violet-500/30",
    iconBg: "bg-violet-500/15 border-violet-500/30",
    iconColor: "text-violet-400",
    highlight: false,
  },
  {
    icon: Puzzle,
    tag: "Sob medida",
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    title: "Solução Personalizada",
    description:
      "Tem uma necessidade específica que não se encaixa em nenhum sistema pronto? Desenvolvemos juntos exatamente o que sua empresa precisa.",
    benefits: [
      "Levantamento das suas necessidades",
      "Sistema feito do zero para seu negócio",
      "Integração com ferramentas que você já usa",
      "Suporte e evolução contínua",
    ],
    gradient: "from-emerald-600/20 to-emerald-900/10",
    border: "border-emerald-500/30",
    iconBg: "bg-emerald-500/15 border-emerald-500/30",
    iconColor: "text-emerald-400",
    highlight: false,
  },
];

function SolutionCard({
  solution,
  index,
}: {
  solution: (typeof solutions)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className={`relative flex flex-col bg-gradient-to-b ${solution.gradient} border ${solution.border} rounded-2xl p-7 hover:scale-[1.02] transition-all duration-300 ${
        solution.highlight ? "ring-1 ring-blue-500/40 shadow-xl shadow-blue-500/10" : ""
      }`}
    >
      {/* Tag */}
      <span
        className={`self-start text-xs font-semibold border px-3 py-1 rounded-full mb-5 ${solution.tagColor}`}
      >
        {solution.tag}
      </span>

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${solution.iconBg}`}
      >
        <solution.icon className={`w-6 h-6 ${solution.iconColor}`} />
      </div>

      {/* Title & desc */}
      <h3 className="text-white font-bold text-xl mb-3">{solution.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {solution.description}
      </p>

      {/* Benefits */}
      <ul className="space-y-2 flex-1">
        {solution.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2.5 text-sm">
            <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${solution.iconColor}`} />
            <span className="text-slate-300">{b}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold ${solution.iconColor} hover:opacity-80 transition-opacity group`}
      >
        Quero esse sistema
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
}

export default function Solutions() {
  return (
    <section id="solucoes" className="py-20 sm:py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full mb-4">
            Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Sistemas que{" "}
            <span className="gradient-text">resolvem de verdade</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Não vendo tecnologia complicada. Entrego ferramentas que a sua
            equipe vai usar, entender e depender — desde o primeiro dia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {solutions.map((s, i) => (
            <SolutionCard key={s.title} solution={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
