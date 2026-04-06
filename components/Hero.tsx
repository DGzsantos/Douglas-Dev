"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg grid-pattern pt-16">
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          Tecnologia para sua Empresa
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6"
        >
          Sistemas que trabalham por você{" "}
          <span className="gradient-text">automatize o processo</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Transformo processos lentos em fluxos{" "}
          <strong className="text-slate-200">digitais eficientes. </strong>
          Menos trabalho manual, <strong className="text-slate-200">o que importa</strong>
          mais tempo para no seu negócio.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#servicos"
            className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base sm:text-lg transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Ver soluções
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Social proof micro-stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-slate-400"
        >
          {[
            { value: "< 7 dias", label: "Da ideia ao sistema rodando" },
            { value: "Diversas soluções", label: "Sistemas, bots, sites e automações" },
            { value: "Suporte direto", label: "Sem fila de atendimento" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-white font-bold text-lg sm:text-xl">{stat.value}</p>
              <p className="text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
