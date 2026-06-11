import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { EMAIL, WHATSAPP_NUMBER_DISPLAY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidade | CouderLab",
  description: "Política de Privacidade da CouderLab — como coletamos, usamos e protegemos seus dados, em conformidade com a LGPD.",
};

const sections = [
  {
    title: "1. Quem somos",
    body: (
      <>
        A CouderLab é uma operação independente, conduzida por Douglas, que
        desenvolve sistemas, automações, bots e integrações sob medida para
        pequenas e médias empresas. Esta política explica como tratamos os
        dados pessoais coletados através do site, do WhatsApp e dos sistemas
        desenvolvidos para clientes.
      </>
    ),
  },
  {
    title: "2. Quais dados coletamos",
    body: (
      <>
        Ao entrar em contato pelo site, WhatsApp ou e-mail, podemos coletar
        nome, telefone, e-mail e informações sobre a sua empresa e o que você
        precisa. Em sistemas desenvolvidos sob contrato, os dados tratados são
        aqueles definidos junto com o cliente, sempre limitados ao necessário
        para o funcionamento da solução (por exemplo: dados de chamados,
        equipamentos, clientes finais e atendimentos).
      </>
    ),
  },
  {
    title: "3. Como usamos seus dados",
    body: (
      <>
        Usamos os dados coletados para responder seu contato, elaborar
        propostas, desenvolver e dar suporte aos sistemas contratados, e
        cumprir obrigações legais. Não usamos seus dados para fins diferentes
        dos informados no momento da coleta.
      </>
    ),
  },
  {
    title: "4. Compartilhamento de dados",
    body: (
      <>
        Não vendemos nem compartilhamos seus dados com terceiros para fins de
        marketing. Dados podem ser processados por provedores de
        infraestrutura (hospedagem, banco de dados, mensageria) estritamente
        para viabilizar o funcionamento dos sistemas, sempre com práticas de
        segurança adequadas.
      </>
    ),
  },
  {
    title: "5. Seus direitos (LGPD)",
    body: (
      <>
        Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você
        pode solicitar a qualquer momento: confirmação de tratamento, acesso,
        correção, anonimização, eliminação ou portabilidade dos seus dados, e
        a revogação de consentimentos dados anteriormente. Para exercer
        qualquer um desses direitos, basta entrar em contato pelos canais
        abaixo.
      </>
    ),
  },
  {
    title: "6. Segurança",
    body: (
      <>
        Adotamos medidas técnicas razoáveis para proteger os dados contra
        acessos não autorizados, perda, alteração ou vazamento, incluindo
        controle de acesso e armazenamento em provedores de banco de dados
        seguros.
      </>
    ),
  },
  {
    title: "7. Cookies",
    body: (
      <>
        O site pode utilizar cookies e tecnologias similares para melhorar a
        experiência de navegação e entender como os visitantes utilizam as
        páginas. Você pode desativar cookies nas configurações do seu
        navegador a qualquer momento.
      </>
    ),
  },
  {
    title: "8. Alterações nesta política",
    body: (
      <>
        Esta política pode ser atualizada periodicamente para refletir
        melhorias ou exigências legais. A versão mais recente estará sempre
        disponível nesta página.
      </>
    ),
  },
  {
    title: "9. Contato",
    body: (
      <>
        Para dúvidas sobre esta política ou para exercer seus direitos
        relacionados aos seus dados pessoais, entre em contato pelo e-mail{" "}
        <a href={`mailto:${EMAIL}`} className="text-blue-400 hover:underline">
          {EMAIL}
        </a>{" "}
        ou pelo WhatsApp{" "}
        <span className="text-slate-300">{WHATSAPP_NUMBER_DISPLAY}</span>.
      </>
    ),
  },
];

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-dark-900 text-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o site
        </Link>

        <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
          Política de <span className="gradient-text">Privacidade</span>
        </h1>
        <p className="text-slate-500 text-sm mb-12">
          Última atualização: {new Date().toLocaleDateString("pt-BR", { year: "numeric", month: "long" })}
        </p>

        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-white font-bold text-lg mb-2">{s.title}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
