"use client";

import Nav from "../../components/Nav";
import VoiceAgentCard from "../../components/VoiceAgentCard";
import { useLanguage } from "../../context/LanguageContext";
import { t, tr } from "../../translations";

const AGENT_ID = process.env.NEXT_PUBLIC_AGENT_ID_ROOTSTACK!;

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
    <div style={{ backgroundColor: "#0d0d0d", minHeight: "100vh", color: "#fff" }}>
      <Nav />

      {/* ── Hero / Header ── */}
      <section style={{
        background: "linear-gradient(180deg, #0f1f0f 0%, #0d0d0d 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "56px 24px 48px",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none", display: "inline-block", marginBottom: 28 }}>
            {tr(t.agentPage.back, lang)}
          </a>

          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
            <div style={{ maxWidth: 560 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <span style={{ fontSize: 40 }}>🏦</span>
                <div>
                  <p style={{ color: "#07F1DA", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>
                    {tr(t.agentPage.subtitle, lang)}
                  </p>
                  <h1 style={{ color: "#fff", fontSize: 32, fontWeight: 800, lineHeight: 1.15 }}>
                    {tr(t.agentPage.title, lang)}
                  </h1>
                </div>
              </div>

              <span style={{
                display: "inline-block", marginBottom: 20,
                backgroundColor: "rgba(241,225,4,0.1)", color: "#F1E104",
                border: "1px solid rgba(241,225,4,0.25)",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "4px 12px", borderRadius: 20,
              }}>
                {tr(t.agentPage.badge, lang)}
              </span>

              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7 }}>
                {tr(t.agentPage.description, lang)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "56px 24px 80px", display: "flex", flexDirection: "column", gap: 72 }}>

        {/* ── Two-col: capabilities + call card ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 48, alignItems: "start" }}>

          {/* Capabilities */}
          <div>
            <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 24 }}>
              {tr(t.agentPage.capabilitiesTitle, lang)}
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {capabilities.map((cap, i) => (
                <div key={i} style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10, padding: "14px 16px",
                  display: "flex", alignItems: "flex-start", gap: 10,
                }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: "50%", flexShrink: 0, marginTop: 1,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 800,
                    backgroundColor: "rgba(241,225,4,0.12)", color: "#F1E104",
                    border: "1px solid rgba(241,225,4,0.3)",
                  }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 13.5, lineHeight: 1.45 }}>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call card — sticky */}
          <div style={{ position: "sticky", top: 80 }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, marginBottom: 12, fontWeight: 600 }}>
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
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 11, marginTop: 10, lineHeight: 1.5, textAlign: "center" }}>
              🔒 {tr(t.agentPage.safetyNote, lang)}
            </p>
          </div>
        </div>

        {/* ── Sample questions ── */}
        <div>
          <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
            {tr(t.agentPage.questionsTitle, lang)}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, marginBottom: 28 }}>
            {lang === "es" ? "Estas son algunas cosas que puedes decirle al agente:" : "Here are some things you can say to the agent:"}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 12 }}>
            {questions.map((item, i) => {
              const c = categoryColors[item.category] ?? categoryColors["General"];
              return (
                <div key={i} style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10, padding: "14px 16px",
                  display: "flex", flexDirection: "column", gap: 8,
                }}>
                  <span style={{
                    alignSelf: "flex-start",
                    backgroundColor: c.bg, color: c.text,
                    border: `1px solid ${c.border}`,
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                    padding: "3px 8px", borderRadius: 20,
                  }}>{item.category}</span>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, lineHeight: 1.45, margin: 0 }}>
                    "{item.q}"
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── How it works ── */}
        <div>
          <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 800, marginBottom: 32 }}>
            {tr(t.agentPage.howItWorksTitle, lang)}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {steps.map((step) => (
              <div key={step.n} style={{
                backgroundColor: "#1a1a1a",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12, padding: "24px",
              }}>
                <span style={{ color: "#F1E104", fontSize: 28, fontWeight: 900, display: "block", marginBottom: 12, opacity: 0.9 }}>
                  {step.n}
                </span>
                <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>{tr(t.footer.rights, lang)}</span>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>{tr(t.footer.env, lang)}</span>
        </div>
      </footer>
    </div>
  );
}
