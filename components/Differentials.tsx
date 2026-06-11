"use client";

import { motion } from "framer-motion";
import {
  Zap,
  MessageCircle,
  UserCheck,
  Settings,
  Shield,
  LayoutDashboard,
} from "lucide-react";

const differentials = [
  {
    icon: LayoutDashboard,
    title: "Simples de usar",
    description:
      "Nenhum treinamento complexo. Se a sua equipe usa WhatsApp, ela aprende o sistema em uma tarde.",
  },
  {
    icon: Zap,
    title: "Entrega em menos de 7 dias",
    description:
      "Nada de meses esperando. Implemento rápido porque uso soluções testadas e adaptadas para você.",
  },
  {
    icon: MessageCircle,
    title: "Integração com WhatsApp",
    description:
      "Seus clientes podem abrir chamados, receber notificações e laudos diretamente no WhatsApp — sem precisar baixar app.",
  },
  {
    icon: UserCheck,
    title: "Suporte direto comigo",
    description:
      "Sem tickets de suporte ou atendentes. Você fala diretamente com quem desenvolveu o sistema.",
  },
  {
    icon: Settings,
    title: "Sistema evolui com seu negócio",
    description:
      "Conforme sua empresa cresce, o sistema cresce junto. Adicionamos funcionalidades quando você precisar.",
  },
  {
    icon: Shield,
    title: "Segurança e confiabilidade",
    description:
      "Seus dados protegidos com backup automático. Nada se perde — nunca mais.",
  },
];

export default function Differentials() {
  return (
    <section
      id="diferenciais"
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-transparent to-cyan-950/20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full mb-4">
              Por que eu?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Não sou uma empresa de TI.{" "}
              <span className="gradient-text">Sou o Douglas Santos.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Trabalho diretamente com você para entender o seu negócio, não
              para vender um sistema genérico. Cada cliente recebe atenção real,
              não um ticket de suporte.
            </p>
            <p className="text-slate-300 text-base leading-relaxed">
              Se algo não funcionar ou precisar mudar,{" "}
              <strong className="text-white">você me chama no WhatsApp</strong>{" "}
              e resolvemos juntos — sem burocracia, sem espera.
            </p>

            {/* WhatsApp highlight */}
            <div className="mt-8 flex items-start gap-4 bg-green-500/10 border border-green-500/20 rounded-2xl p-5">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-green-300 font-bold text-sm mb-1">
                  WhatsApp no centro de tudo
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Seus clientes abrem chamados pelo WhatsApp. Você recebe alertas
                  no WhatsApp. O suporte acontece no WhatsApp. Sem apps novos para
                  aprender.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {differentials.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-dark p-5 hover:border-slate-700/60 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <d.icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">
                  {d.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {d.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
