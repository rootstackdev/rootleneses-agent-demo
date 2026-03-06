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
    <div style={{
      backgroundColor: "#1a1a1a",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      overflow: "hidden",
      width: "100%",
      maxWidth: 420,
      boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0f1f0f 0%, #0a1a0a 50%, #0d1a0d 100%)",
        borderBottom: "1px solid rgba(241,225,4,0.15)",
        padding: "20px 24px",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -20, right: -20,
          width: 120, height: 120,
          background: "radial-gradient(circle, rgba(7,241,218,0.12) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none",
        }}/>
        <div style={{ display: "flex", alignItems: "center", gap: 12, position: "relative" }}>
          <span style={{ fontSize: 32 }}>{icon}</span>
          <div>
            <p style={{ color: "#07F1DA", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 2 }}>
              {subtitle}
            </p>
            <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 800, lineHeight: 1.2 }}>{title}</h3>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 18 }}>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.65 }}>
          {description}
        </p>

        {/* Capabilities */}
        <ul style={{ display: "flex", flexDirection: "column", gap: 9, listStyle: "none", padding: 0, margin: 0 }}>
          {capabilities.map((cap) => (
            <li key={cap} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "rgba(255,255,255,0.85)" }}>
              <span style={{
                width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 10, fontWeight: 800,
                backgroundColor: "rgba(241,225,4,0.12)",
                color: "#F1E104",
                border: "1px solid rgba(241,225,4,0.3)",
              }}>✓</span>
              {cap}
            </li>
          ))}
        </ul>

        {/* See details link */}
        {detailsUrl && (
          <Link
            href={detailsUrl}
            style={{
              color: "#07F1DA", fontSize: 13, fontWeight: 600,
              textDecoration: "none", letterSpacing: "0.01em",
            }}
          >
            {tr(t.card.seeDetails, lang)}
          </Link>
        )}

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

        {/* Status */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, height: 20 }}>
          {isConnected && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 3, height: "100%" }}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="wave-bar" style={{
                    width: 3, height: "100%", borderRadius: 3,
                    backgroundColor: isSpeaking ? "#F1E104" : "rgba(255,255,255,0.25)",
                    boxShadow: isSpeaking ? "0 0 6px rgba(241,225,4,0.6)" : "none",
                  }}/>
                ))}
              </div>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>
                {isSpeaking ? tr(t.card.status.speaking, lang) : tr(t.card.status.listening, lang)}
              </span>
            </>
          )}
          {isConnecting && (
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontStyle: "italic" }}>
              {tr(t.card.status.connecting, lang)}
            </span>
          )}
          {isIdle && (
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>
              {tr(t.card.status.idle, lang)}
            </span>
          )}
        </div>

        {/* Error */}
        {error && (
          <p style={{
            fontSize: 12, color: "#f87171",
            backgroundColor: "rgba(239,68,68,0.1)",
            border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: 8, padding: "8px 12px",
          }}>{error}</p>
        )}

        {/* Button */}
        {isConnected ? (
          <button onClick={endCall} style={{
            width: "100%", padding: "13px 0",
            backgroundColor: "rgba(239,68,68,0.12)",
            color: "#f87171",
            border: "1px solid rgba(239,68,68,0.3)",
            borderRadius: 8, fontSize: 14, fontWeight: 700,
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <span>📵</span> {tr(t.card.endCall, lang)}
          </button>
        ) : (
          <button onClick={startCall} disabled={isConnecting} style={{
            width: "100%", padding: "13px 0",
            backgroundColor: isConnecting ? "rgba(241,225,4,0.1)" : "#F1E104",
            color: isConnecting ? "#F1E104" : "#0d0d0d",
            border: isConnecting ? "1px solid rgba(241,225,4,0.3)" : "none",
            borderRadius: 8, fontSize: 15, fontWeight: 800,
            cursor: isConnecting ? "not-allowed" : "pointer",
            opacity: isConnecting ? 0.7 : 1,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            boxShadow: isConnecting ? "none" : "0 0 24px rgba(241,225,4,0.25)",
          }}>
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
