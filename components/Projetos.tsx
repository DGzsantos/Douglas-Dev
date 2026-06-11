"use client";

import { useState, useEffect, useCallback } from "react";
import { useReveal } from "@/hooks/useReveal";
import {
  ExternalLink, ImageIcon, X, ZoomIn,
  MonitorCheck, Bot, Package, Bell,
  ArrowRight, Sparkles,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import GradientText from "@/components/GradientText";

/* ─── Dados das imagens ──────────────────────────────────────────── */
const previewImages = [
  {
    src: "/homeGerenciadorTi.png",
    alt: "Dashboard Principal",
    caption: "Painel com visão geral dos equipamentos e alertas ativos",
  },
  {
    src: "/infraGerenciadorTi.png",
    alt: "Infraestrutura Completa",
    caption: "Infraestrutura e controle completo de todos os equipamentos de TI",
  },
  {
    src: "/infoEquiamentoGerenciadorTi.png",
    alt: "Informações do Equipamento",
    caption: "Todas as informações de cada equipamento",
  },
  {
    src: "/relatorioGerenciadorTi.png",
    alt: "Dashboard de Relatórios",
    caption: "Exportação de Dashboard de relatórios",
  },

];

type PreviewImage = (typeof previewImages)[0];

/* ─── Lightbox ───────────────────────────────────────────────────── */
function Lightbox({ img, onClose }: { img: PreviewImage; onClose: () => void }) {
  const handleBackdrop = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Zoom: ${img.alt}`}
      onClick={handleBackdrop}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(10px)" }}
    >
      <button
        onClick={onClose}
        aria-label="Fechar zoom"
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>
      <figure
        className="flex flex-col items-center gap-4 max-w-[95vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          loading="lazy"
          decoding="async"
          className="max-w-full max-h-[82vh] w-auto h-auto object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
        />
        <figcaption className="text-white/40 text-sm text-center">{img.caption}</figcaption>
      </figure>
    </div>
  );
}

/* ─── Modal grid ─────────────────────────────────────────────────── */
function PreviewModal({ onClose }: { onClose: () => void }) {
  const [zoomedImg, setZoomedImg] = useState<PreviewImage | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (zoomedImg) setZoomedImg(null);
      else onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, zoomedImg]);

  const handleBackdrop = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Pré-visualização do Gerenciador de TI"
        onClick={handleBackdrop}
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto px-4 py-8 sm:py-12"
        style={{ background: "rgba(2,6,23,0.88)", backdropFilter: "blur(8px)" }}
      >
        <div
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
            <div>
              <h3 className="text-white font-bold text-lg">Gerenciador de TI</h3>
              <p className="text-slate-500 text-xs mt-0.5">Clique em uma imagem para ampliar</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Fechar modal"
              className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {previewImages.map((img, i) => (
              <figure key={img.alt} className="flex flex-col gap-2">
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`Ampliar: ${img.alt}`}
                  onClick={() => setZoomedImg(img)}
                  onKeyDown={(e) => e.key === "Enter" && setZoomedImg(img)}
                  className="relative overflow-hidden rounded-xl border border-slate-800 bg-slate-950 cursor-zoom-in group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-colors duration-300">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </div>
                <figcaption className="text-slate-500 text-xs px-1">
                  <span className="text-slate-600 font-medium mr-1">{String(i + 1).padStart(2, "0")}.</span>
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between">
            <p className="text-slate-600 text-xs">Clique em qualquer imagem para ampliar · Esc para fechar</p>
            <button onClick={onClose} className="text-slate-500 hover:text-white text-xs font-medium transition-colors">
              Fechar
            </button>
          </div>
        </div>
      </div>
      {zoomedImg && <Lightbox img={zoomedImg} onClose={() => setZoomedImg(null)} />}
    </>
  );
}

/* ─── Dados dos projetos ─────────────────────────────────────────── */
type ProjectStatus = "live" | "dev" | "soon";

interface Project {
  icon: React.ElementType;
  title: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  statusLabel: string;
  metric: string;
  metricLabel: string;
  color: string;          // tailwind color key: blue | green | cyan | violet
  hasPreview?: boolean;
}

const projects: Project[] = [
  {
    icon: MonitorCheck,
    title: "Gerenciador de TI",
    description:
      "Gerenciamento de Operações de TI de alto nível, projetado para centralizar e visualizar ambientes tecnológicos complexos.",
    stack: ["FastAPI", "Supabase", "WhatsApp API"],
    status: "dev",
    statusLabel: "Em desenvolvimento",
    metric: "100+",
    metricLabel: "equipamentos rastreados",
    color: "blue",
    hasPreview: true,
  },
  {
    icon: Bot,
    title: "Bot de Triagem para Assistência",
    description:
      "Bot no WhatsApp que recebe aparelhos, coleta dados do cliente, gera protocolo e avisa quando o laudo fica pronto.",
    stack: ["Node.js", "Baileys", "PostgreSQL"],
    status: "dev",
    statusLabel: "Em desenvolvimento",
    metric: "24h",
    metricLabel: "atendimento automático",
    color: "green",
  },
  {
    icon: Package,
    title: "Painel de Gestão de Equipamentos",
    description:
      "Controle de inventário, manutenções preventivas e alertas automáticos para provedores. Com relatórios simples e exportação.",
    stack: ["React", "Node.js", "MySQL"],
    status: "soon",
    statusLabel: "Em breve",
    metric: "0h",
    metricLabel: "de retrabalho manual",
    color: "cyan",
  },
  {
    icon: Bell,
    title: "Automação de Cobranças e Avisos",
    description:
      "Disparo automático de lembretes de vencimento, boletos e confirmações de pagamento via WhatsApp — sem intervenção manual.",
    stack: ["Python", "WhatsApp API", "Cron"],
    status: "soon",
    statusLabel: "Em breve",
    metric: "15h",
    metricLabel: "semanais economizadas",
    color: "violet",
  },
];

/* ─── Paleta por cor ─────────────────────────────────────────────── */
const palette: Record<string, {
  metric: string; wm: string; gradient: string; border: string;
}> = {
  blue: {
    metric:   "text-blue-400",
    wm:       "text-blue-500/[0.07]",
    gradient: "linear-gradient(135deg, #1a2a52 0%, #0f172a 55%, #0b3340 100%)",
    border:   "rgba(59,130,246,0.12)",
  },
  green: {
    metric:   "text-green-400",
    wm:       "text-green-500/[0.07]",
    gradient: "linear-gradient(135deg, #15352c 0%, #0f172a 55%, #0b2e1f 100%)",
    border:   "rgba(34,197,94,0.12)",
  },
  cyan: {
    metric:   "text-cyan-400",
    wm:       "text-cyan-500/[0.07]",
    gradient: "linear-gradient(135deg, #133a47 0%, #0f172a 55%, #0b2333 100%)",
    border:   "rgba(6,182,212,0.12)",
  },
  violet: {
    metric:   "text-violet-400",
    wm:       "text-violet-500/[0.07]",
    gradient: "linear-gradient(135deg, #2a1f52 0%, #0f172a 55%, #260b3a 100%)",
    border:   "rgba(139,92,246,0.12)",
  },
};

const statusDot: Record<ProjectStatus, string> = {
  live: "bg-emerald-400 animate-pulse",
  dev:  "bg-blue-400 animate-pulse",
  soon: "bg-slate-500",
};

const delayClass = ["", "reveal-d1", "reveal-d2", "reveal-d3"];

/* ─── Seção principal ────────────────────────────────────────────── */
export default function Projetos() {
  const ref = useReveal();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="projetos"
        ref={ref as React.RefObject<HTMLElement>}
        className="py-20 sm:py-24 relative bg-slate-300"
      >

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Cabeçalho */}
          <header className="text-center mb-12 reveal">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-100 border border-blue-500 px-4 py-1.5 rounded-full mb-4">
              Projetos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
              O que está{" "}
              <GradientText colors={["#3b82f6", "#2563eb", "#60a5fa"]} animationSpeed={8}>sendo construído</GradientText>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Projetos em andamento e próximas entregas. Cada solução nasce de um
              problema real de um cliente real.
            </p>
          </header>

          {/* Grid 2×2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((p, i) => {
              const pal = palette[p.color];
              const Icon = p.icon;
              const isPreview = p.hasPreview;

              return (
                <article
                  key={p.title}
                  onClick={isPreview ? () => setModalOpen(true) : undefined}
                  className={`reveal ${delayClass[i]} group flex flex-col rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isPreview ? "cursor-pointer" : ""}`}
                  style={{ background: pal.gradient, border: `1px solid ${pal.border}` }}
                >
                  {/* Ícone como marca d'água */}
                  <Icon className={`absolute -top-4 -right-4 w-28 h-28 ${pal.wm} pointer-events-none`} />

                  {/* Status — bolinha + rótulo */}
                  <span className="inline-flex items-center gap-2 mb-4 relative z-10">
                    <span className={`w-1.5 h-1.5 rounded-full ${statusDot[p.status]}`} />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {p.statusLabel}
                    </span>
                  </span>

                  {/* Métrica em destaque */}
                  <div className="mb-4 relative z-10">
                    <span className={`text-4xl font-black leading-none ${pal.metric}`}>{p.metric}</span>
                    <p className="text-slate-500 text-xs mt-2 max-w-[85%]">{p.metricLabel}</p>
                  </div>

                  <h3 className="text-white font-extrabold text-xl leading-snug mb-2 relative z-10 max-w-[90%]">
                    {p.title}
                  </h3>

                  <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-5 max-w-[92%] relative z-10">
                    {p.description}
                  </p>

                  {/* Stack + preview */}
                  <div className="flex items-end justify-between gap-3 mt-auto relative z-10">
                    <p className="text-slate-600 text-[11px] tracking-wide">
                      {p.stack.join("  ·  ")}
                    </p>

                    {isPreview && (
                      <span className={`flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap ${pal.metric} group-hover:gap-2 transition-all`}>
                        <ImageIcon className="w-3.5 h-3.5" />
                        Ver preview
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA de rodapé */}
          <div className="reveal reveal-d4 mt-12 text-center">
            <p className="text-slate-700 text-lg font-medium mb-6">
              Tem um projeto em mente?{" "}
              <span className="text-blue-600 font-bold">Vamos tirá-lo do papel.</span>
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 group"
            >
              <Sparkles className="w-4 h-4" />
              Quero construir minha solução
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-4 text-slate-500 text-sm flex items-center justify-center gap-2">
              <ExternalLink className="w-3.5 h-3.5" />
              Portfólio completo disponível mediante solicitação no WhatsApp
            </p>
          </div>
        </div>
      </section>

      {modalOpen && <PreviewModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
