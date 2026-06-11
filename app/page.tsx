import Header               from "@/components/Header";
import Hero                 from "@/components/Hero";
import Solucoes             from "@/components/Solucoes";
import Problemas            from "@/components/Problemas";
import ComoTrabalho         from "@/components/ComoTrabalho";
import SobreMim             from "@/components/SobreMim";
import Projetos             from "@/components/Projetos";
import ProcessoDiferenciais from "@/components/ProcessoDiferenciais";
import SocialProof          from "@/components/SocialProof";
import FAQ                  from "@/components/FAQ";
import Footer               from "@/components/Footer";
import WhatsAppFloat        from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Solucoes />
      <Problemas />
      <ComoTrabalho />
      <SobreMim />
      <Projetos />
      <ProcessoDiferenciais />
      <SocialProof />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
