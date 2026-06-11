"use client";

import { RefObject, useState, useEffect, useRef, useCallback } from "react";
import { useReveal } from "@/hooks/useReveal";
import {
  Headphones, Bot, Repeat2, Globe, Link2, Lightbulb,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

const cards = [
  {
    icon: Headphones,
    tag: "Sistema de chamados",
    tagClass: "text-blue-300 bg-blue-500/10 border-blue-500/25",
    headline: "Sistemas sob medida para total controle das atividades",
    description: "Help desk, gestão de TI ou ordem de serviço — nenhum chamado, equipamento ou atendimento se perde.",
    benefits: ["Chamados abertos direto pelo WhatsApp", "Painel de status em tempo real", "Histórico completo de cada cliente"],
    border: "border-blue-900/60",
    iconClass: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    ctaClass: "text-blue-400",
    dot: "bg-blue-400",
    code: "SAC",
    cta: "Quero controle total",
    bg: "from-blue-950 to-slate-900",
  },
  {
    icon: Repeat2,
    tag: "Automação",
    tagClass: "text-green-300 bg-green-500/10 border-green-500/25",
    headline: "Elimine o trabalho repetitivo do seu time",
    description: "Fluxos que rodam sozinhos, notificações automáticas e processos sem depender de alguém lembrando.",
    benefits: ["Tarefas recorrentes no automático", "Notificações e alertas sem intervenção", "Mais tempo para o que gera valor"],
    border: "border-slate-700",
    iconClass: "bg-green-500/10 border-green-500/20 text-green-400",
    ctaClass: "text-green-400",
    dot: "bg-green-400",
    code: "AUTO",
    cta: "Quero automatizar",
    bg: "from-slate-800 to-slate-900",
  },
  {
    icon: Bot,
    tag: "Atendimento 24h",
    tagClass: "text-violet-300 bg-violet-500/10 border-violet-500/25",
    headline: "Bots que atendem seus clientes enquanto você dorme",
    description: "WhatsApp e Instagram com respostas automáticas, triagem de chamados e coleta de dados.",
    benefits: ["Bot para WhatsApp e Instagram", "Triagem e resposta automática", "Integração com seu sistema"],
    border: "border-slate-700",
    iconClass: "bg-violet-500/10 border-violet-500/20 text-violet-400",
    ctaClass: "text-violet-400",
    dot: "bg-violet-400",
    code: "BOT",
    cta: "Quero um bot",
    bg: "from-slate-800 to-slate-900",
  },
  {
    icon: Globe,
    tag: "Presença online",
    tagClass: "text-cyan-300 bg-cyan-500/10 border-cyan-500/25",
    headline: "Site profissional que gera credibilidade e novos clientes",
    description: "Rápido, responsivo e focado em converter visitantes em contatos reais.",
    benefits: ["Design moderno e responsivo", "Otimizado para aparecer no Google", "Integração com WhatsApp e Instagram"],
    border: "border-slate-700",
    iconClass: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    ctaClass: "text-cyan-400",
    dot: "bg-cyan-400",
    code: "WEB",
    cta: "Quero meu site",
    bg: "from-slate-800 to-slate-900",
  },
  {
    icon: Link2,
    tag: "Fim do retrabalho",
    tagClass: "text-orange-300 bg-orange-500/10 border-orange-500/25",
    headline: "Integrações que conectam tudo que você já usa",
    description: "WhatsApp, planilhas, e-mail, ERPs e sistemas legados trabalhando juntos — sem copiar e colar.",
    benefits: ["Conexão entre sistemas existentes", "Eliminação de entradas duplicadas", "Scripts e APIs sob medida"],
    border: "border-slate-700",
    iconClass: "bg-orange-500/10 border-orange-500/20 text-orange-400",
    ctaClass: "text-orange-400",
    dot: "bg-orange-400",
    code: "INT",
    cta: "Quero integrar",
    bg: "from-slate-800 to-slate-900",
  },
  {
    icon: Lightbulb,
    tag: "Ideia específica?",
    tagClass: "text-yellow-300 bg-yellow-500/10 border-yellow-500/25",
    headline: "Podemos transformar sua ideia em realidade",
    description: "Se você tem uma ideia, eu tenho a solução. Criamos do zero, sem enrolação.",
    benefits: ["Levantamento da sua necessidade real", "Solução criada do zero para o seu caso", "Prazo e custo na primeira conversa"],
    border: "border-slate-700",
    iconClass: "bg-yellow-500/10 border-yellow-500/20 text-yellow-400",
    ctaClass: "text-yellow-400",
    dot: "bg-yellow-400",
    code: "IDEIA",
    cta: "Vamos conversar",
    bg: "from-slate-800 to-slate-900",
  },
];

const N = cards.length;

function getStyle(offset: number, cardWidth: number) {
  // offset: distância do card ativo (-2, -1, 0, 1, 2...)
  const abs = Math.abs(offset);
  if (abs > 2) return { display: "none" };

  const scale    = abs === 0 ? 1 : abs === 1 ? 0.88 : 0.75;
  const translateX = offset * cardWidth * 0.94;
  const translateZ = abs === 0 ? 0 : abs === 1 ? -100 : -200;
  const zIndex   = 10 - abs;

  return {
    transform: `perspective(1100px) translateX(${translateX}px) translateZ(${translateZ}px) scale(${scale})`,
    opacity: 1,
    zIndex,
    willChange: "transform",
    backfaceVisibility: "hidden" as const,
    transition: "transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)",
  };
}

export default function Solucoes() {
  const ref = useReveal();
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [paused, setPaused] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1280);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Card width adapta ao viewport: nunca passa de 360px nem estoura a tela
  const cardWidth = Math.min(360, Math.max(240, viewportWidth * 0.78));
  const cardHeight = Math.round(cardWidth * 1.444); // mantém proporção ~360x520
  const containerHeight = cardHeight + 60;

  const next = useCallback(() => setActive((a) => (a + 1) % N), []);
  const prev = useCallback(() => setActive((a) => (a - 1 + N) % N), []);

  // auto-play
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 3000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  return (
    <section
      id="solucoes"
      ref={ref as RefObject<HTMLElement>}
      className="py-20 sm:py-28 overflow-hidden relative bg-slate-300"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <header className="text-center reveal">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-100 border border-blue-500 px-4 py-1.5 rounded-full mb-4">
            Soluções
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            O que você ganha quando{" "}
            <span className="text-blue-600">para de improvisar</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Cada solução foi pensada para resolver um problema real, não para impressionar, mas para funcionar.
          </p>
        </header>
      </div>

      {/* Coverflow */}
      <div
        className="relative flex items-center justify-center px-4"
        style={{ height: containerHeight }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {cards.map((card, i) => {
          const offset = ((i - active + N + Math.floor(N / 2)) % N) - Math.floor(N / 2);
          const style = getStyle(offset, cardWidth);
          if (style.display === "none") return null;
          const isActive = offset === 0;

          return (
            <div
              key={i}
              className="absolute"
              style={{ ...style, width: cardWidth }}
              onClick={() => setActive(i)}
            >
              <article
                className={`w-full flex flex-col rounded-2xl p-7 cursor-pointer relative overflow-hidden transition-all duration-300`}
                style={{
                  height: cardHeight,
                  background: "linear-gradient(135deg, #1a2a52 0%, #0f172a 55%, #0b3340 100%)",
                  border: isActive ? `1px solid rgba(255,255,255,0.1)` : "1px solid rgba(255,255,255,0.04)",
                  boxShadow: isActive ? "0 25px 60px rgba(0,0,0,0.35)" : "0 4px 20px rgba(0,0,0,0.15)",
                }}
              >
                {/* Número-marca d'água */}
                <span
                  className="absolute -top-3 right-3 font-black leading-none select-none pointer-events-none"
                  style={{ fontSize: "5.5rem", color: "rgba(255,255,255,0.04)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Selo — bolinha + rótulo + código da área, bem pequeno */}
                <span className="inline-flex items-center gap-2 mb-5 relative z-10">
                  <span className={`w-1.5 h-1.5 rounded-full ${card.dot}`} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {card.tag}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${card.ctaClass} opacity-60`}>
                    · {card.code}
                  </span>
                </span>

                {/* Headline — o "gancho", tipografia como protagonista */}
                <h3 className="text-white font-extrabold text-2xl leading-[1.15] tracking-tight mb-4 relative z-10 max-w-[92%]">
                  {card.headline}
                </h3>

                {/* Texto curto contando do que se trata o card */}
                <p className="text-slate-400 text-xs leading-relaxed mb-4 max-w-[90%] relative z-10">
                  {card.description}
                </p>

                {/* Um único benefício em destaque, no lugar da lista de checkbox */}
                <p className={`text-sm font-medium leading-relaxed flex-1 relative z-10 ${card.ctaClass}`}>
                  {card.benefits[0]}
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm font-bold ${card.ctaClass} hover:gap-3 transition-all group relative z-10 self-start mt-6`}
                  onClick={(e) => e.stopPropagation()}
                >
                  {card.cta}
                  <span className="transition-transform">→</span>
                </a>
              </article>
            </div>
          );
        })}

        {/* Setas */}
        <button
          onClick={prev}
          className="absolute left-1 sm:left-10 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-md"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-1 sm:right-10 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-50 transition-colors shadow-md"
          aria-label="Próximo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all duration-300 ${
              active === i ? "w-6 h-2 bg-blue-500" : "w-2 h-2 bg-slate-600"
            }`}
            aria-label={`Card ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
