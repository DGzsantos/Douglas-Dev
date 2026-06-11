import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["400","600","700"] });
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const SITE_URL = "https://couderlab.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  title: "CouderLab | Sistemas e Automação para Empresas",
  description:
    "Sistemas, automações, bots e integrações para pequenas empresas, assistências técnicas e provedores de internet. Help desk, ordens de serviço, bots para WhatsApp e muito mais.",
  keywords:
    "CouderLab, sistema de chamados, help desk, ordem de serviço, automação, bot whatsapp, assistência técnica, sistema para provedor, TI para empresas",
  openGraph: {
    title: "CouderLab | Sistemas e Automação para Empresas",
    description:
      "Transformo processos manuais e planilhas em sistemas profissionais. Atendo pequenas empresas, assistências técnicas e provedores de internet.",
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "CouderLab",
  },
  twitter: {
    card: "summary_large_image",
    title: "CouderLab | Sistemas e Automação para Empresas",
    description:
      "Transformo processos manuais e planilhas em sistemas profissionais. Atendo pequenas empresas, assistências técnicas e provedores de internet.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CouderLab",
  image: `${SITE_URL}/logo.png`,
  url: SITE_URL,
  telephone: "+5571993439408",
  email: "douglas@couderlab.com.br",
  description:
    "Sistemas, automações, bots e integrações sob medida para pequenas e médias empresas, assistências técnicas e provedores de internet.",
  areaServed: "BR",
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.className} bg-dark-900 text-slate-100 antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
