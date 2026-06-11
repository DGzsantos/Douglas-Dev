"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo leva para o sistema ficar pronto?",
    a: "Para a maioria das soluções, em até 7 dias após alinharmos o escopo. Projetos maiores ou com integrações específicas podem levar um pouco mais — isso fica claro já na proposta, sem surpresas no meio do caminho.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "O valor é definido conforme a complexidade do projeto e combinado antes de começar, sem letras miúdas. Não trabalho com contratos longos ou fidelidade obrigatória — você usa enquanto fizer sentido para o seu negócio.",
  },
  {
    q: "Funciona para o meu tipo de negócio?",
    a: "Sim. Não importa o ramo — se a sua empresa tem processos manuais, planilhas, atendimento bagunçado ou tarefas repetitivas, dá para resolver. Já desenvolvi soluções para assistências técnicas, provedores de internet e empresas de TI, mas a lógica se aplica a qualquer operação.",
  },
  {
    q: "E se eu precisar de ajustes depois da entrega?",
    a: "Após a entrega, acompanho de perto para ajustes finos sem custo. Depois disso, sigo disponível para evoluções e suporte contínuo, direto comigo pelo WhatsApp — sem ticket, sem fila de atendimento.",
  },
  {
    q: "Preciso entender de tecnologia para usar o sistema?",
    a: "Não. Os sistemas são pensados para o dia a dia da sua equipe, com interfaces simples — muitas vezes integradas ao próprio WhatsApp, que todo mundo já usa. A adoção costuma acontecer no primeiro dia.",
  },
  {
    q: "Meus dados e os dos meus clientes ficam seguros?",
    a: "Sim. Os dados ficam em bancos seguros, com acesso restrito, e não são compartilhados com terceiros. Você pode conferir os detalhes na nossa política de privacidade.",
  },
];

export default function FAQ() {
  const ref = useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-24 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="text-center mb-12 reveal">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full mb-4">
            Perguntas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Ainda com{" "}
            <span className="gradient-text">dúvidas?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Se a sua pergunta não estiver aqui, é só chamar no WhatsApp.
          </p>
        </header>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`reveal ${i > 0 ? `reveal-d${Math.min(i, 6)}` : ""} rounded-xl border border-slate-800/60 bg-slate-900/40 overflow-hidden`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                >
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="text-slate-400 text-sm leading-relaxed px-5 pb-4">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
