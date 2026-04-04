import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Douglas Conceição | Sistemas de TI para Empresas",
  description:
    "Desenvolvimento de sistemas de TI personalizados para pequenas empresas, assistências técnicas e provedores de internet. Help desk, ordens de serviço, gestão de equipamentos e muito mais.",
  keywords:
    "sistema de chamados, help desk, ordem de serviço, assistência técnica, sistema para provedor, TI para empresas, Douglas Conceição",
  openGraph: {
    title: "Douglas Conceição | Sistemas de TI para Empresas",
    description:
      "Transformo processos manuais e planilhas em sistemas profissionais. Atendo pequenas empresas, assistências técnicas e provedores de internet.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-900 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
