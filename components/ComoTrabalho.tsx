"use client";

import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";

export default function ComoTrabalho() {
  const ref = useReveal();

  return (
    <section
      id="como-trabalho"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative h-[60vh] sm:h-[70vh] lg:h-screen w-full overflow-hidden"
    >
      <Image
        src="/notebook.png"
        alt="Notebook com o ambiente de desenvolvimento"
        fill
        sizes="100vw"
        className="object-cover"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/40 pointer-events-none" />

      <div className="relative z-10 h-full flex items-end sm:items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-0">
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full mb-4">
            Como eu trabalho
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight max-w-2xl">
            Sem intermediários,{" "}
            <span className="gradient-text">sem enrolação</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-xl mt-4">
            Cada sistema nasce de uma conversa direta com quem vai usá-lo —
            eu desenvolvo, acompanho e ajusto pessoalmente, do primeiro
            rascunho até o sistema rodando no seu dia a dia.
          </p>
        </div>
      </div>
    </section>
  );
}
