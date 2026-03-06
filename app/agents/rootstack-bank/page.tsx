"use client";

import Nav from "../../components/Nav";
import VoiceAgentCard from "../../components/VoiceAgentCard";
import { useLanguage } from "../../context/LanguageContext";
import { t, tr } from "../../translations";

const AGENT_ID = process.env.NEXT_PUBLIC_AGENT_ID_ROOTSTACK!;

// Dynamic category colors stay as inline styles — values depend on runtime data
const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Cuenta:        { bg: "rgba(241,225,4,0.08)",   text: "#F1E104", border: "rgba(241,225,4,0.25)" },
  Account:       { bg: "rgba(241,225,4,0.08)",   text: "#F1E104", border: "rgba(241,225,4,0.25)" },
  Acceso:        { bg: "rgba(7,241,218,0.08)",   text: "#07F1DA", border: "rgba(7,241,218,0.25)" },
  Access:        { bg: "rgba(7,241,218,0.08)",   text: "#07F1DA", border: "rgba(7,241,218,0.25)" },
  Tarjetas:      { bg: "rgba(99,102,241,0.1)",   text: "#a5b4fc", border: "rgba(99,102,241,0.3)" },
  Cards:         { bg: "rgba(99,102,241,0.1)",   text: "#a5b4fc", border: "rgba(99,102,241,0.3)" },
  Transferencias:{ bg: "rgba(34,197,94,0.08)",   text: "#86efac", border: "rgba(34,197,94,0.25)" },
  Transfers:     { bg: "rgba(34,197,94,0.08)",   text: "#86efac", border: "rgba(34,197,94,0.25)" },
  Fraude:        { bg: "rgba(239,68,68,0.08)",   text: "#fca5a5", border: "rgba(239,68,68,0.25)" },
  Fraud:         { bg: "rgba(239,68,68,0.08)",   text: "#fca5a5", border: "rgba(239,68,68,0.25)" },
  General:       { bg: "rgba(255,255,255,0.05)", text: "rgba(255,255,255,0.6)", border: "rgba(255,255,255,0.12)" },
  Productos:     { bg: "rgba(251,146,60,0.08)",  text: "#fdba74", border: "rgba(251,146,60,0.25)" },
  Products:      { bg: "rgba(251,146,60,0.08)",  text: "#fdba74", border: "rgba(251,146,60,0.25)" },
};

export default function RootstackBankPage() {
  const { lang } = useLanguage();
  const questions = t.agentPage.questions[lang];
  const capabilities = t.agentPage.capabilities[lang];
  const steps = t.agentPage.steps[lang];

  return (
    <div className="bg-dark min-h-screen text-white">
      <Nav />

      {/* ── Hero / Header ── */}
      <section className="bg-[linear-gradient(180deg,#0f1f0f_0%,#0d0d0d_100%)] border-b border-white/[0.08] pt-14 pb-12 px-6">
        <div className="max-w-[1120px] mx-auto">
          <a href="/" className="text-white/40 text-[13px] no-underline inline-block mb-7">
            {tr(t.agentPage.back, lang)}
          </a>

          <div className="flex items-start justify-between flex-wrap gap-8">
            <div className="max-w-[560px]">
              <div className="flex items-center gap-[10px] mb-4">
                <span className="text-[40px]">🏦</span>
                <div>
                  <p className="text-brand-teal text-[11px] font-bold tracking-[0.1em] uppercase mb-0.5">
                    {tr(t.agentPage.subtitle, lang)}
                  </p>
                  <h1 className="text-white text-[32px] font-extrabold leading-[1.15]">
                    {tr(t.agentPage.title, lang)}
                  </h1>
                </div>
              </div>

              <span className="inline-block mb-5 bg-[rgba(241,225,4,0.1)] text-accent border border-[rgba(241,225,4,0.25)] text-[11px] font-bold tracking-[0.08em] uppercase py-1 px-3 rounded-[20px]">
                {tr(t.agentPage.badge, lang)}
              </span>

              <p className="text-white/60 text-[15px] leading-[1.7]">
                {tr(t.agentPage.description, lang)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1120px] mx-auto px-6 pt-14 pb-20 flex flex-col gap-[72px]">

        {/* ── Two-col: capabilities + call card ── */}
        <div className="grid grid-cols-[1fr_400px] gap-12 items-start">

          {/* Capabilities */}
          <div>
            <h2 className="text-white text-[22px] font-extrabold mb-6">
              {tr(t.agentPage.capabilitiesTitle, lang)}
            </h2>
            <div className="grid grid-cols-2 gap-[10px]">
              {capabilities.map((cap, i) => (
                <div key={i} className="bg-surface border border-white/[0.08] rounded-[10px] py-[14px] px-4 flex items-start gap-[10px]">
                  <span className="w-5 h-5 rounded-full shrink-0 mt-[1px] flex items-center justify-center text-[10px] font-extrabold bg-[rgba(241,225,4,0.12)] text-accent border border-[rgba(241,225,4,0.3)]">
                    ✓
                  </span>
                  <span className="text-white/80 text-[13.5px] leading-[1.45]">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call card — sticky */}
          <div className="sticky top-20">
            <p className="text-white/50 text-[13px] mb-3 font-semibold">
              {tr(t.agentPage.callTitle, lang)}
            </p>
            <VoiceAgentCard
              agentId={AGENT_ID}
              lang={lang}
              icon="🏦"
              subtitle={lang === "es" ? "Banca · Soporte al Cliente" : "Banking · Customer Support"}
              title="Rootstack Bank"
              description={tr(t.agentPage.callDesc, lang)}
              capabilities={[]}
            />
            <p className="text-white/25 text-[11px] mt-[10px] leading-[1.5] text-center">
              🔒 {tr(t.agentPage.safetyNote, lang)}
            </p>
          </div>
        </div>

        {/* ── Sample questions ── */}
        <div>
          <h2 className="text-white text-[22px] font-extrabold mb-2">
            {tr(t.agentPage.questionsTitle, lang)}
          </h2>
          <p className="text-white/40 text-sm mb-7">
            {lang === "es" ? "Estas son algunas cosas que puedes decirle al agente:" : "Here are some things you can say to the agent:"}
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-3">
            {questions.map((item, i) => {
              const c = categoryColors[item.category] ?? categoryColors["General"];
              return (
                <div key={i} className="bg-surface border border-white/[0.08] rounded-[10px] py-[14px] px-4 flex flex-col gap-2">
                  <span
                    className="self-start text-[10px] font-bold tracking-[0.06em] uppercase py-[3px] px-2 rounded-[20px]"
                    style={{ backgroundColor: c.bg, color: c.text, border: `1px solid ${c.border}` }}
                  >
                    {item.category}
                  </span>
                  <p className="text-white/85 text-sm leading-[1.45] m-0">
                    &ldquo;{item.q}&rdquo;
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── How it works ── */}
        <div>
          <h2 className="text-white text-[22px] font-extrabold mb-8">
            {tr(t.agentPage.howItWorksTitle, lang)}
          </h2>
          <div className="grid grid-cols-3 gap-5">
            {steps.map((step) => (
              <div key={step.n} className="bg-surface border border-white/[0.08] rounded-xl p-6">
                <span className="text-accent text-[28px] font-black block mb-3 opacity-90">
                  {step.n}
                </span>
                <h3 className="text-white text-base font-bold mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-[1.6]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.08]">
        <div className="max-w-[1120px] mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-white/25 text-xs">{tr(t.footer.rights, lang)}</span>
          <span className="text-white/25 text-xs">{tr(t.footer.env, lang)}</span>
        </div>
      </footer>
    </div>
  );
}
