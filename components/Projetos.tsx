"use client";

import { useState, useEffect, useCallback } from "react";
import { useReveal } from "@/hooks/useReveal";
import { ExternalLink, ImageIcon, X, ZoomIn } from "lucide-react";

/* ─── Dados das imagens ──────────────────────────────────────────── */
const previewImages = [
  {
    src: "https://polymnwucqlgvxaasedb.supabase.co/storage/v1/object/public/projetos/image.png",
    alt: "Dashboard Principal",
    caption: "Painel com visão geral dos equipamentos e alertas ativos",
  },
  {
    src: "https://polymnwucqlgvxaasedb.supabase.co/storage/v1/object/public/projetos/painelInfraestrutura.png",
    alt: "Infraestrutura Completa",
    caption: "Infraestrutura e controle completo de todos os equipamentos de TI",
  },
  {
    src: "https://polymnwucqlgvxaasedb.supabase.co/storage/v1/object/public/projetos/painelInfoEquipamentos.png",
    alt: "Informações do Equipamento",
    caption: "Todas as informações de cada equipamento",
  },
  {
    src: "https://polymnwucqlgvxaasedb.supabase.co/storage/v1/object/public/projetos/painelRelatorios.png",
    alt: "Dashboard de Relatórios",
    caption: "Exportação de Dashboard de relatórios",
  },
];

type PreviewImage = (typeof previewImages)[0];

/* ─── Lightbox (segundo overlay — z-[200]) ───────────────────────── */
function Lightbox({
  img,
  onClose,
}: {
  img: PreviewImage;
  onClose: () => void;
}) {
  /* Fecha ao clicar no backdrop (fora da imagem) */
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
      style={{
        background: "rgba(0, 0, 0, 0.95)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Botão X — canto superior direito do overlay */}
      <button
        onClick={onClose}
        aria-label="Fechar zoom"
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-150 z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Imagem + caption — stopPropagation evita fechar ao clicar nela */}
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
        <figcaption className="text-white/40 text-sm text-center">
          {img.caption}
        </figcaption>
      </figure>
    </div>
  );
}

/* ─── Modal grid (primeiro overlay — z-[100]) ────────────────────── */
function PreviewModal({ onClose }: { onClose: () => void }) {
  const [zoomedImg, setZoomedImg] = useState<PreviewImage | null>(null);

  /* Bloqueia scroll do body enquanto o modal estiver aberto */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* Escape: fecha o lightbox primeiro; se não tiver, fecha o modal */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (zoomedImg) {
        setZoomedImg(null);
      } else {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, zoomedImg]);

  /* Fecha o modal ao clicar no backdrop */
  const handleBackdrop = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  return (
    <>
      {/* Backdrop do modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Pré-visualização do Gerenciador de TI"
        onClick={handleBackdrop}
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto px-4 py-8 sm:py-12"
        style={{
          background: "rgba(2, 6, 23, 0.88)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Painel do modal */}
        <div
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Cabeçalho */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
            <div>
              <h3 className="text-white font-bold text-lg">Gerenciador de TI</h3>
              <p className="text-slate-500 text-xs mt-0.5">
                Clique em uma imagem para ampliar
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Fechar modal"
              className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors duration-150"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Grid de imagens */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {previewImages.map((img, i) => (
              <figure key={img.alt} className="flex flex-col gap-2">
                {/* Container da imagem com overlay de zoom no hover */}
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
                  {/* Overlay com ícone de zoom — aparece no hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-colors duration-300">
                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                  </div>
                </div>

                <figcaption className="text-slate-500 text-xs px-1">
                  <span className="text-slate-600 font-medium mr-1">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Rodapé */}
          <div className="px-6 py-4 border-t border-slate-800 flex items-center justify-between">
            <p className="text-slate-600 text-xs">
              Clique em qualquer imagem para ampliar · Esc para fechar
            </p>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-white text-xs font-medium transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox — renderizado sobre o modal, fora do painel */}
      {zoomedImg && (
        <Lightbox img={zoomedImg} onClose={() => setZoomedImg(null)} />
      )}
    </>
  );
}

/* ─── Tipos e dados dos projetos ─────────────────────────────────── */
type ProjectStatus = "live" | "dev" | "soon";

interface Project {
  title: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  statusLabel: string;
  accentClass: string;
  borderClass: string;
  bgClass: string;
  hasPreview?: boolean;
}

const projects: Project[] = [
  {
    title: "Gerenciador de TI",
    description:
      "Gerenciamento de Operações de TI de alto nível, projetado para centralizar e visualizar ambientes tecnológicos complexos.",
    stack: ["FastAPI", "Supabase", "WhatsApp API"],
    status: "dev",
    statusLabel: "Em desenvolvimento",
    accentClass: "text-blue-400",
    borderClass: "border-blue-500/20",
    bgClass: "from-blue-600/10 to-transparent",
    hasPreview: true,
  },
  {
    title: "Bot de Triagem para Assistência",
    description:
      "Bot no WhatsApp que recebe aparelhos, coleta dados do cliente, gera protocolo e avisa quando o laudo fica pronto.",
    stack: ["Node.js", "Baileys", "PostgreSQL"],
    status: "dev",
    statusLabel: "Em desenvolvimento",
    accentClass: "text-green-400",
    borderClass: "border-green-500/20",
    bgClass: "from-green-600/10 to-transparent",
  },
  {
    title: "Painel de Gestão de Equipamentos",
    description:
      "Controle de inventário, manutenções preventivas e alertas automáticos para provedores. Com relatórios simples e exportação.",
    stack: ["React", "Node.js", "MySQL"],
    status: "soon",
    statusLabel: "Em breve",
    accentClass: "text-cyan-400",
    borderClass: "border-cyan-500/20",
    bgClass: "from-cyan-600/10 to-transparent",
  },
  {
    title: "Automação de Cobranças e Avisos",
    description:
      "Disparo automático de lembretes de vencimento, boletos e confirmações de pagamento via WhatsApp — sem intervenção manual.",
    stack: ["Python", "WhatsApp API", "Cron"],
    status: "soon",
    statusLabel: "Em breve",
    accentClass: "text-violet-400",
    borderClass: "border-violet-500/20",
    bgClass: "from-violet-600/10 to-transparent",
  },
];

const statusStyle: Record<ProjectStatus, string> = {
  live: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  dev:  "bg-blue-500/15 text-blue-300 border-blue-500/30",
  soon: "bg-slate-700/60 text-slate-400 border-slate-600/40",
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
        className="py-20 sm:py-24 relative"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Cabeçalho */}
          <header className="text-center mb-12 reveal">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400 bg-violet-400/10 border border-violet-400/20 px-4 py-1.5 rounded-full mb-4">
              Projetos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              O que está{" "}
              <span className="gradient-text">sendo construído</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Projetos em andamento e próximas entregas. Cada solução nasce de um
              problema real de um cliente real.
            </p>
          </header>

          {/* Grid de projetos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((p, i) => {
              const isPreviewCard = p.hasPreview;

              return (
                <article
                  key={p.title}
                  onClick={isPreviewCard ? () => setModalOpen(true) : undefined}
                  className={`reveal ${delayClass[i]} flex flex-col bg-gradient-to-b ${p.bgClass} border ${p.borderClass} rounded-2xl p-7 transition-all duration-300 ${
                    isPreviewCard
                      ? "cursor-pointer hover:scale-[1.02] hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
                      : "hover:scale-[1.01]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-semibold border px-3 py-1 rounded-full ${statusStyle[p.status]}`}>
                      {p.statusLabel}
                    </span>
                    {isPreviewCard && (
                      <span className="flex items-center gap-1.5 text-blue-400 text-xs font-medium">
                        <ImageIcon className="w-3.5 h-3.5" />
                        Ver preview
                      </span>
                    )}
                  </div>

                  <h3 className={`font-bold text-lg mb-3 ${p.accentClass}`}>
                    {p.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-slate-400 bg-slate-800/70 border border-slate-700/50 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <p className="reveal reveal-d4 mt-8 text-center text-slate-600 text-sm flex items-center justify-center gap-2">
            <ExternalLink className="w-3.5 h-3.5" />
            Portfólio completo disponível mediante solicitação no WhatsApp
          </p>
        </div>
      </section>

      {/* Modal — fora da section para evitar conflito de stacking context */}
      {modalOpen && <PreviewModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
