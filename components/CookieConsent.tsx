"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "couderlab_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function accept() {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-[60] animate-fade-up"
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
    >
      <div
        className="rounded-2xl p-5 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a2a52 0%, #0f172a 55%, #0b3340 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
        }}
      >
        <Cookie className="absolute -top-4 -right-4 w-24 h-24 text-blue-500/[0.07] pointer-events-none" />

        <div className="relative z-10">
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Usamos cookies para melhorar sua experiência de navegação. Ao continuar, você concorda com a nossa{" "}
            <Link href="/politica-de-privacidade" className="text-blue-400 hover:underline font-medium">
              Política de Privacidade
            </Link>
            .
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={accept}
              className="bg-blue-500 hover:bg-blue-400 active:scale-95 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
            >
              Aceitar
            </button>
            <Link
              href="/politica-de-privacidade"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
