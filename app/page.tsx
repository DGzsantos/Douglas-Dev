import Header               from "@/components/Header";
import Hero                 from "@/components/Hero";
import Solucoes             from "@/components/Solucoes";
import Problemas            from "@/components/Problemas";
import Projetos             from "@/components/Projetos";
import ProcessoDiferenciais from "@/components/ProcessoDiferenciais";
import Footer               from "@/components/Footer";
import WhatsAppFloat        from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Solucoes />
      <Problemas />
      <Projetos />
      <ProcessoDiferenciais />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
