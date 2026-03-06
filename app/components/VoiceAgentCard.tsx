"use client";

import { useConversation } from "@elevenlabs/react";
import { useCallback, useState } from "react";
import Link from "next/link";
import { type Lang, t, tr } from "../translations";

interface VoiceAgentCardProps {
  agentId: string;
  lang: Lang;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  icon: string;
  detailsUrl?: string;
}

export default function VoiceAgentCard({
  agentId,
  lang,
  title,
  subtitle,
  description,
  capabilities,
  icon,
  detailsUrl,
}: VoiceAgentCardProps) {
  const [error, setError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => setError(null),
    onDisconnect: () => {},
    onError: (err) =>
      setError(typeof err === "string" ? err : tr(t.card.connError, lang)),
  });

  const { status, isSpeaking } = conversation;
  const isIdle = status === "disconnected" || status === "disconnecting";
  const isConnecting = status === "connecting";
  const isConnected = status === "connected";

  const startCall = useCallback(async () => {
    try {
      setError(null);
      await navigator.mediaDevices.getUserMedia({ audio: true });
      await conversation.startSession({ agentId, connectionType: "websocket" });
    } catch {
      setError(tr(t.card.micError, lang));
    }
  }, [conversation, agentId, lang]);

  const endCall = useCallback(async () => {
    await conversation.endSession();
  }, [conversation]);

  return (
    <div className="bg-surface border border-white/10 rounded-2xl overflow-hidden w-full max-w-[420px] shadow-[0_24px_60px_rgba(0,0,0,0.6)]">

      {/* Header */}
      <div className="bg-gradient-to-br from-[#0f1f0f] via-[#0a1a0a] to-[#0d1a0d] border-b border-[rgba(241,225,4,0.15)] py-5 px-6 relative overflow-hidden">
        <div className="absolute -top-5 -right-5 w-[120px] h-[120px] bg-[radial-gradient(circle,rgba(7,241,218,0.12)_0%,transparent_70%)] rounded-full pointer-events-none" />
        <div className="flex items-center gap-3 relative">
          <span className="text-[32px]">{icon}</span>
          <div>
            <p className="text-brand-teal text-[11px] font-bold tracking-[0.1em] uppercase mb-0.5">
              {subtitle}
            </p>
            <h3 className="text-white text-[18px] font-extrabold leading-tight">{title}</h3>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col gap-[18px]">
        <p className="text-white/55 text-sm leading-[1.65]">
          {description}
        </p>

        {/* Capabilities */}
        {capabilities.length > 0 && (
          <ul className="flex flex-col gap-[9px] list-none p-0 m-0">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-center gap-[10px] text-[13.5px] text-white/85">
                <span className="w-[18px] h-[18px] rounded-full shrink-0 flex items-center justify-center text-[10px] font-extrabold bg-[rgba(241,225,4,0.12)] text-accent border border-[rgba(241,225,4,0.3)]">
                  ✓
                </span>
                {cap}
              </li>
            ))}
          </ul>
        )}

        {/* See details link */}
        {detailsUrl && (
          <Link
            href={detailsUrl}
            className="text-brand-teal text-[13px] font-semibold no-underline tracking-[0.01em]"
          >
            {tr(t.card.seeDetails, lang)}
          </Link>
        )}

        {/* Divider */}
        <div className="border-t border-white/[0.08]" />

        {/* Status */}
        <div className="flex items-center gap-2 h-5">
          {isConnected && (
            <>
              <div className="flex items-center gap-[3px] h-full">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={[
                      "wave-bar w-[3px] h-full rounded-[3px]",
                      isSpeaking
                        ? "bg-accent shadow-[0_0_6px_rgba(241,225,4,0.6)]"
                        : "bg-white/25",
                    ].join(" ")}
                  />
                ))}
              </div>
              <span className="text-white/50 text-xs">
                {isSpeaking ? tr(t.card.status.speaking, lang) : tr(t.card.status.listening, lang)}
              </span>
            </>
          )}
          {isConnecting && (
            <span className="text-white/40 text-xs italic">
              {tr(t.card.status.connecting, lang)}
            </span>
          )}
          {isIdle && (
            <span className="text-white/30 text-xs">
              {tr(t.card.status.idle, lang)}
            </span>
          )}
        </div>

        {/* Error */}
        {error && (
          <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg py-2 px-3">
            {error}
          </p>
        )}

        {/* Button */}
        {isConnected ? (
          <button
            onClick={endCall}
            className="w-full py-[13px] bg-red-500/[0.12] text-red-400 border border-red-500/30 rounded-lg text-sm font-bold cursor-pointer flex items-center justify-center gap-2"
          >
            <span>📵</span> {tr(t.card.endCall, lang)}
          </button>
        ) : (
          <button
            onClick={startCall}
            disabled={isConnecting}
            className={[
              "w-full py-[13px] rounded-lg text-[15px] font-extrabold flex items-center justify-center gap-2",
              isConnecting
                ? "bg-[rgba(241,225,4,0.1)] text-accent border border-[rgba(241,225,4,0.3)] cursor-not-allowed opacity-70"
                : "bg-accent text-dark cursor-pointer shadow-[0_0_24px_rgba(241,225,4,0.25)]",
            ].join(" ")}
          >
            {isConnecting
              ? <><span>⏳</span> {tr(t.card.status.connecting, lang)}</>
              : <><span>📞</span> {tr(t.card.startCall, lang)}</>
            }
          </button>
        )}
      </div>
    </div>
  );
}
