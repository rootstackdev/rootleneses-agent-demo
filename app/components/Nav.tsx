"use client";

import { useLanguage } from "../context/LanguageContext";
import { t, tr } from "../translations";

export default function Nav() {
  const { lang, setLang } = useLanguage();

  const demoUrl = lang === "es"
    ? "https://rootlenses.com/es/solicitar-demo"
    : "https://rootlenses.com/en/request-a-demo";

  return (
    <header className="sticky top-0 z-50 bg-[rgba(13,13,13,0.80)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] border-b border-white/[0.08]">
      <div className="max-w-[1120px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="flex items-center no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/rootlenses-logo.svg" alt="Rootlenses" className="h-[30px] w-auto" />
        </a>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Language toggle */}
          <div className="flex items-center bg-white/[0.07] border border-white/[0.12] rounded-lg overflow-hidden">
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={[
                  "px-[14px] py-[6px] text-[12px] font-bold border-0 cursor-pointer tracking-[0.05em] uppercase transition-all duration-150",
                  lang === l
                    ? "bg-accent text-dark"
                    : "bg-transparent text-white/50",
                ].join(" ")}
              >
                {l}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-dark font-bold text-[13px] px-5 py-2 rounded-lg no-underline tracking-[0.01em]"
          >
            {tr(t.nav.cta, lang)}
          </a>
        </div>
      </div>
    </header>
  );
}
