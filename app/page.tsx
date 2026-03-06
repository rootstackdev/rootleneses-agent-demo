"use client";

import Nav from "./components/Nav";
import VoiceAgentCard from "./components/VoiceAgentCard";
import { useLanguage } from "./context/LanguageContext";
import { t, tr } from "./translations";

const AGENT_ID = process.env.NEXT_PUBLIC_AGENT_ID_ROOTSTACK!;

export default function Home() {
  const { lang } = useLanguage();

  const contactUrl = lang === "es"
    ? "https://rootlenses.com/es/contactanos"
    : "https://rootlenses.com/en/contact-us";

  return (
    <div className="bg-dark min-h-screen text-white">
      <Nav />

      {/* ── Hero ── */}
      <section className="max-w-[1120px] mx-auto px-6 pt-20 pb-[60px]">
        <div className="grid grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <p className="fade-in-up text-accent font-bold text-[13px] mb-5 tracking-[0.02em]">
              {tr(t.hero.eyebrow, lang)}
            </p>
            <h1 className="fade-in-up delay-100 text-[48px] font-extrabold leading-[1.1] tracking-[-1px] mb-6 text-white">
              {tr(t.hero.heading1, lang)}<br />
              <span className="text-accent">{tr(t.hero.heading2, lang)}</span>
            </h1>
            <p className="fade-in-up delay-200 text-white/60 text-base leading-[1.7] mb-9 max-w-[440px]">
              {tr(t.hero.description, lang)}
            </p>
            <div className="fade-in-up delay-300 flex gap-3 items-center flex-wrap">
              <a
                href={contactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-dark font-bold text-[15px] py-[13px] px-7 rounded-lg no-underline inline-block"
              >
                {tr(t.hero.cta1, lang)}
              </a>
              <a
                href="#demo"
                className="text-white font-semibold text-[15px] py-3 px-6 rounded-lg no-underline border border-white/20 inline-block"
              >
                {tr(t.hero.cta2, lang)}
              </a>
            </div>
          </div>

          {/* Right: demo card */}
          <div id="demo" className="flex justify-center">
            <VoiceAgentCard
              agentId={AGENT_ID}
              lang={lang}
              icon="🏦"
              subtitle={lang === "es" ? "Banca · Soporte al Cliente" : "Banking · Customer Support"}
              title="Rootstack Bank"
              description={
                lang === "es"
                  ? "Agente de soporte de primera línea para Rootstack Bank. Responde preguntas frecuentes, guía a los clientes paso a paso y crea tickets — en inglés o español."
                  : "A first-line support agent for Rootstack Bank. Answers FAQs, guides customers step by step, and creates support tickets — in English or Spanish."
              }
              capabilities={
                lang === "es"
                  ? ["Responde FAQs (saldo, transferencias, tarjetas)", "Bilingüe: inglés y español", "Crea tickets de soporte para casos complejos", "Sigue reglas de seguridad y escalamiento"]
                  : ["Answers FAQs (balance, transfers, cards)", "Bilingual: English & Spanish", "Creates support tickets for complex issues", "Follows safety & escalation rules"]
              }
              detailsUrl="/agents/rootstack-bank"
            />
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.08]">
        <div className="max-w-[1120px] mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-white/25 text-xs">{tr(t.footer.rights, lang)}</span>
          <span className="text-white/25 text-xs">{tr(t.footer.env, lang)}</span>
        </div>
      </footer>
    </div>
  );
}
