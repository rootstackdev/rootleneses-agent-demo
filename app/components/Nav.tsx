"use client";

import { useLanguage } from "../context/LanguageContext";
import { t, tr } from "../translations";

export default function Nav() {
  const { lang, setLang } = useLanguage();

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      backgroundColor: "rgba(13,13,13,0.80)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    }}>
      <div style={{
        maxWidth: 1120, margin: "0 auto", padding: "0 24px",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <a href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/rootlenses-logo.svg" alt="Rootlenses" style={{ height: 30, width: "auto" }} />
        </a>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Language toggle */}
          <div style={{
            display: "flex", alignItems: "center",
            backgroundColor: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 8, overflow: "hidden",
          }}>
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: "6px 14px",
                  fontSize: 12, fontWeight: 700,
                  border: "none", cursor: "pointer",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "all 0.15s",
                  backgroundColor: lang === l ? "#F1E104" : "transparent",
                  color: lang === l ? "#0d0d0d" : "rgba(255,255,255,0.5)",
                }}
              >
                {l}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#demo"
            style={{
              backgroundColor: "#F1E104", color: "#0d0d0d",
              fontWeight: 700, fontSize: 13,
              padding: "8px 20px", borderRadius: 8,
              textDecoration: "none", letterSpacing: "0.01em",
            }}
          >
            {tr(t.nav.cta, lang)}
          </a>
        </div>
      </div>
    </header>
  );
}
