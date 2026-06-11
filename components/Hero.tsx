"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import GradientText from "@/components/GradientText";
import TiltedCard from "@/components/TiltedCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut", delay },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mesh-bg pt-20">
      {/* Glow blob */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* ── Texto (esquerda) ── */}
          <div className="w-full lg:w-1/2 text-left">
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6 sm:mb-8"
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#3b82f6", boxShadow: "0 0 6px 2px #3b82f6" }} />
              Tecnologia para sua Empresa
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] sm:leading-[1.1] tracking-tight mb-5 sm:mb-6"
            >
              Sistemas que trabalham por você{" "}
              <GradientText colors={["#3b82f6", "#2563eb", "#60a5fa"]} animationSpeed={8}>automatize o processo</GradientText>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
              className="text-base sm:text-lg text-slate-400 max-w-xl mb-8 sm:mb-10 leading-relaxed"
            >
              Transformo processos lentos em fluxos{" "}
              <strong className="text-slate-200">digitais eficientes.</strong>{" "}
              Menos trabalho manual,{" "}
              <strong className="text-slate-200">o que importa</strong> mais tempo para o seu negócio.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.3}
              className="flex flex-col sm:flex-row items-start gap-4 mb-10 sm:mb-16"
            >
              <a
                href="#solucoes"
                className="group inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 w-full sm:w-auto justify-center"
              >
                Ver soluções
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={0.4}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-10 text-slate-400"
            >
              {[
                { value: "< 7 dias",          label: "Da ideia ao sistema rodando" },
                { value: "Diversas soluções",  label: "Sistemas, bots, sites e automações" },
                { value: "Suporte direto",     label: "Sem fila de atendimento" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-white font-bold text-base sm:text-xl">{stat.value}</p>
                  <p className="text-xs sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Phone (direita) ── */}
          <motion.div
            variants={fadeIn} initial="hidden" animate="visible"
            className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0"
          >
            <TiltedCard
              imageSrc="https://couderlab.com.br/storage/cell.png"
              altText="App mockup"
              containerHeight="calc(min(72vw, 400px) * 2.05)"
              containerWidth="min(72vw, 400px)"
              imageHeight="calc(min(72vw, 400px) * 2.05)"
              imageWidth="min(72vw, 400px)"
              rotateAmplitude={12}
              scaleOnHover={1.04}
              showMobileWarning={false}
              showTooltip={false}
            />
          </motion.div>

        </div>
      </div>

      <a
        href="#solucoes"
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </section>
  );
}
