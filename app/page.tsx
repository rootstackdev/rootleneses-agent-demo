"use client";

import Nav from "./components/Nav";
import VoiceAgentCard from "./components/VoiceAgentCard";
import { useLanguage } from "./context/LanguageContext";
import { t, tr } from "./translations";

const AGENT_ID = process.env.NEXT_PUBLIC_AGENT_ID_ROOTSTACK!;

export default function Home() {
  const { lang } = useLanguage();

  return (
    <div style={{ backgroundColor: "#0d0d0d", minHeight: "100vh", color: "#fff" }}>
      <Nav />

      {/* ── Hero ── */}
      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "80px 24px 60px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}>
          {/* Left: copy */}
          <div>
            <p className="fade-in-up" style={{ color: "#F1E104", fontWeight: 700, fontSize: 13, marginBottom: 20, letterSpacing: "0.02em" }}>
              {tr(t.hero.eyebrow, lang)}
            </p>
            <h1
              className="fade-in-up delay-100"
              style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-1px", marginBottom: 24, color: "#fff" }}
            >
              {tr(t.hero.heading1, lang)}<br />
              <span style={{ color: "#F1E104" }}>{tr(t.hero.heading2, lang)}</span>
            </h1>
            <p
              className="fade-in-up delay-200"
              style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, marginBottom: 36, maxWidth: 440 }}
            >
              {tr(t.hero.description, lang)}
            </p>
            <div className="fade-in-up delay-300" style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
              <a
                href="#demo"
                style={{
                  backgroundColor: "#F1E104", color: "#0d0d0d",
                  fontWeight: 700, fontSize: 15,
                  padding: "13px 28px", borderRadius: 8,
                  textDecoration: "none", display: "inline-block",
                }}
              >
                {tr(t.hero.cta1, lang)}
              </a>
              <a
                href="#demo"
                style={{
                  color: "#fff", fontWeight: 600, fontSize: 15,
                  padding: "12px 24px", borderRadius: 8,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.2)",
                  display: "inline-block",
                }}
              >
                {tr(t.hero.cta2, lang)}
              </a>
            </div>
          </div>

          {/* Right: demo card */}
          <div id="demo" style={{ display: "flex", justifyContent: "center" }}>
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

      {/* ── Powered by strip ── */}
      <section style={{ borderTop: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#161616", padding: "48px 24px" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24 }}>
            {tr(t.demo.poweredBy, lang)}
          </p>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
            {["ElevenLabs", "WebRTC", "Next.js", "TypeScript"].map((tech) => (
              <span key={tech} style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, fontWeight: 600 }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>{tr(t.footer.rights, lang)}</span>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>{tr(t.footer.env, lang)}</span>
        </div>
      </footer>
    </div>
  );
}
