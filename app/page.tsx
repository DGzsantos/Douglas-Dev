import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Problems from "@/components/Problems";
import Solutions from "@/components/Solutions";
import Differentials from "@/components/Differentials";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Problems />
      <Solutions />
      <Differentials />
      <HowItWorks />
      <SocialProof />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
