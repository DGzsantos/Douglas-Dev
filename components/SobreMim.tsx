"use client";

import { useReveal } from "@/hooks/useReveal";
import { MessageCircle, Code2, Headset } from "lucide-react";

const highlights = [
  {
    icon: MessageCircle,
    title: "Você fala comigo",
    text: "Sem SDR, sem suporte de terceiros. Quem atende é quem desenvolve.",
  },
  {
    icon: Code2,
    title: "Eu desenvolvo",
    text: "Cada sistema é pensado e codado por mim, do zero, para o seu caso.",
  },
  {
    icon: Headset,
    title: "Eu dou suporte",
    text: "Depois da entrega, continuo acompanhando — sem ticket, sem fila.",
  },
];

export default function SobreMim() {
  const ref = useReveal();

  return (
    <section
      id="sobre"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Avatar */}
          <div className="reveal flex-shrink-0">
            <div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full flex items-center justify-center text-4xl sm:text-5xl font-black text-white relative"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
                boxShadow: "0 0 50px rgba(37,99,235,0.35)",
              }}
            >
              DS
              <span className="absolute -bottom-2 -right-2 w-9 h-9 rounded-full bg-slate-950 border-2 border-blue-400/40 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-blue-400" />
              </span>
            </div>
          </div>

          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <span className="reveal inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full mb-4">
              Quem está por trás
            </span>
            <h2 className="reveal reveal-d1 text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Douglas — fundador da{" "}
              <span className="gradient-text">CouderLab</span>
            </h2>
            <p className="reveal reveal-d2 text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8">
              Não sou uma agência com vários níveis de atendimento. Sou eu —
              desenvolvendo, conversando e dando suporte diretamente. Isso
              significa respostas rápidas, sem burocracia, e um sistema
              construído por quem realmente entende o que foi pedido.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  className={`reveal reveal-d${i + 3} flex flex-col items-center lg:items-start text-center lg:text-left gap-2 p-4 rounded-xl border border-slate-800/60 bg-slate-900/40`}
                >
                  <h.icon className="w-5 h-5 text-blue-400" />
                  <p className="text-white font-semibold text-sm">{h.title}</p>
                  <p className="text-slate-500 text-xs leading-relaxed">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
