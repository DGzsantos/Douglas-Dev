"use client";

import { useReveal } from "@/hooks/useReveal";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_URL, WHATSAPP_NUMBER_DISPLAY, EMAIL } from "@/lib/constants";

const WA_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

function WaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d={WA_PATH} />
    </svg>
  );
}

export default function Footer() {
  const ref = useReveal();

  return (
    <footer
      id="contato"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
    >
      {/* ── CTA block ── */}
      <div className="relative bg-gradient-to-br from-blue-950/50 via-slate-950 to-cyan-950/30 border-t border-slate-800/60">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[180px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Pronto para parar de{" "}
              <span className="gradient-text">improvisar?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
              Me conta o maior problema da sua empresa hoje. Em uma conversa, já te mostro como resolver.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 active:scale-95 text-white font-black px-10 py-5 rounded-2xl text-lg transition-all duration-200 shadow-2xl shadow-green-500/35 hover:shadow-green-400/40 hover:-translate-y-0.5"
            >
              <WaIcon className="w-6 h-6" />
              Falar no WhatsApp
            </a>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-5 text-slate-500 text-sm">
              {["Resposta em até 1h", "Todos os dias disponíveis", "Projeto na primeira conversa"].map((label) => (
                <span key={label} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer bar ── */}
      <div className="bg-slate-950 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            {/* Brand */}
            <a href="#" className="flex items-center gap-2">
              <Image src="/logo.png" alt="CouderLab" width={28} height={28} />
              <span className="font-bold text-white text-sm">
                Couder<span className="text-blue-400">Lab</span>
              </span>
            </a>

            {/* Contacts */}
            <nav className="flex items-center gap-6" aria-label="Contatos">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors text-sm"
              >
                <WaIcon className="w-4 h-4 text-green-400" />
                {WHATSAPP_NUMBER_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-blue-400" aria-hidden="true" />
                {EMAIL}
              </a>
            </nav>

            {/* Copyright + links legais */}
            <div className="flex items-center gap-4 text-slate-600 text-xs">
              <p>© {new Date().getFullYear()} CouderLab</p>
              <Link href="/politica-de-privacidade" className="hover:text-slate-400 transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
