export type Lang = "es" | "en";

export const t = {
  nav: {
    cta: { es: "Solicitar demo", en: "Request demo" },
  },
  hero: {
    eyebrow: {
      es: "IA que analiza, automatiza y acelera cada interacción",
      en: "AI that analyzes, automates and accelerates every interaction",
    },
    heading1: { es: "Agentes de voz con IA", en: "AI Voice Agents" },
    heading2: { es: "que suenan humanos", en: "That Sound Human" },
    description: {
      es: "Rootlenses Voice reúne agentes de voz con IA en un solo ecosistema. Despliega agentes inteligentes para soporte, ventas y operaciones — bilingüe, disponible 24/7.",
      en: "Rootlenses Voice brings AI voice agents into one ecosystem. Deploy intelligent agents for support, sales, and operations — bilingual, available 24/7.",
    },
    cta1: { es: "Contáctanos", en: "Contact us" },
    cta2: { es: "Ver demo en vivo →", en: "See live demo →" },
  },
  demo: {
    poweredBy: { es: "Impulsado por", en: "Powered by" },
  },
  card: {
    status: {
      idle: { es: "Listo para conectar", en: "Ready to connect" },
      connecting: { es: "Conectando…", en: "Connecting…" },
      speaking: { es: "El agente está hablando…", en: "Agent is speaking…" },
      listening: { es: "Escuchando…", en: "Listening…" },
    },
    startCall: { es: "Iniciar llamada", en: "Start Call" },
    endCall: { es: "Finalizar llamada", en: "End Call" },
    micError: {
      es: "Se requiere acceso al micrófono para iniciar la llamada.",
      en: "Microphone access is required to start the call.",
    },
    connError: {
      es: "Error de conexión. Inténtalo de nuevo.",
      en: "Connection error. Please try again.",
    },
    seeDetails: { es: "Ver detalles del agente →", en: "See agent details →" },
  },
  footer: {
    rights: { es: "© 2026 Rootlenses. Todos los derechos reservados.", en: "© 2026 Rootlenses. All rights reserved." },
    env: { es: "Entorno de demostración", en: "Demo environment" },
  },
  agentPage: {
    back: { es: "← Volver al inicio", en: "← Back to home" },
    badge: { es: "Demostración en vivo", en: "Live Demo" },
    subtitle: { es: "Banca · Soporte al Cliente", en: "Banking · Customer Support" },
    title: { es: "Rootstack Bank", en: "Rootstack Bank" },
    description: {
      es: "Agente de soporte de primera línea para Rootstack Bank. Responde preguntas frecuentes, guía a los clientes paso a paso, crea tickets de soporte para casos complejos y detecta posibles fraudes — en inglés o español.",
      en: "A first-line support agent for Rootstack Bank. Answers FAQs, guides customers step by step, creates support tickets for complex issues, and detects potential fraud — in English or Spanish.",
    },
    capabilitiesTitle: { es: "¿Qué puede hacer este agente?", en: "What can this agent do?" },
    capabilities: {
      es: [
        "Consultar saldo y movimientos de cuenta",
        "Guiar el proceso de restablecimiento de contraseña",
        "Ayudar con tarjetas rechazadas o bloqueadas",
        "Reportar tarjetas perdidas o robadas",
        "Informar tiempos de transferencia",
        "Actualizar datos de contacto",
        "Activar nuevas tarjetas de débito",
        "Explicar transacciones pendientes",
        "Orientar para abrir nuevas cuentas",
        "Gestionar disputas de transacciones",
        "Detectar y escalar casos de fraude",
        "Crear tickets de soporte para casos complejos",
      ],
      en: [
        "Check account balance and transactions",
        "Guide password reset process",
        "Help with declined or blocked cards",
        "Report lost or stolen cards",
        "Inform about transfer timelines",
        "Update contact information",
        "Activate new debit cards",
        "Explain pending transactions",
        "Guide new account opening",
        "Manage transaction disputes",
        "Detect and escalate fraud cases",
        "Create support tickets for complex issues",
      ],
    },
    questionsTitle: { es: "Preguntas que puedes hacerle", en: "Questions you can ask" },
    questions: {
      es: [
        { q: "¿Cómo verifico mi saldo?", category: "Cuenta" },
        { q: "Olvidé mi contraseña de banca en línea, ¿qué hago?", category: "Acceso" },
        { q: "Mi tarjeta fue rechazada en el supermercado", category: "Tarjetas" },
        { q: "Perdí mi tarjeta de débito, ¿cómo la bloqueo?", category: "Tarjetas" },
        { q: "¿Cuánto tiempo tarda una transferencia a otro banco?", category: "Transferencias" },
        { q: "¿Cuáles son los horarios de atención al cliente?", category: "General" },
        { q: "¿Cómo activo mi nueva tarjeta?", category: "Tarjetas" },
        { q: "Veo un cobro que no reconozco en mi cuenta", category: "Fraude" },
        { q: "¿Cómo puedo aumentar mi límite de retiro en cajero?", category: "Cuenta" },
        { q: "Quiero abrir una cuenta de ahorros", category: "Productos" },
        { q: "No puedo iniciar sesión en la banca en línea", category: "Acceso" },
        { q: "Creo que alguien accedió a mi cuenta sin permiso", category: "Fraude" },
      ],
      en: [
        { q: "How do I check my account balance?", category: "Account" },
        { q: "I forgot my online banking password", category: "Access" },
        { q: "My card was declined at the store", category: "Cards" },
        { q: "I lost my debit card, how do I block it?", category: "Cards" },
        { q: "How long does a transfer to another bank take?", category: "Transfers" },
        { q: "What are your customer service hours?", category: "General" },
        { q: "How do I activate my new card?", category: "Cards" },
        { q: "I see a charge I don't recognize on my account", category: "Fraud" },
        { q: "How can I increase my ATM withdrawal limit?", category: "Account" },
        { q: "I want to open a savings account", category: "Products" },
        { q: "I can't log into online banking", category: "Access" },
        { q: "I think someone accessed my account without permission", category: "Fraud" },
      ],
    },
    howItWorksTitle: { es: "¿Cómo funciona?", en: "How does it work?" },
    steps: {
      es: [
        { n: "01", title: "Inicia la llamada", desc: "Presiona el botón y permite el acceso al micrófono." },
        { n: "02", title: "Habla naturalmente", desc: "El agente te escucha y responde en el idioma que uses, inglés o español." },
        { n: "03", title: "Resuelve tu caso", desc: "Obtén respuestas al instante o se crea un ticket si tu caso lo requiere." },
      ],
      en: [
        { n: "01", title: "Start the call", desc: "Press the button and allow microphone access." },
        { n: "02", title: "Speak naturally", desc: "The agent listens and responds in whatever language you use — English or Spanish." },
        { n: "03", title: "Get it resolved", desc: "Get instant answers or a support ticket is created if your case requires it." },
      ],
    },
    callTitle: { es: "Pruébalo ahora", en: "Try it now" },
    callDesc: {
      es: "El agente está disponible en este momento. Haz clic en el botón e inicia la conversación.",
      en: "The agent is available right now. Click the button and start the conversation.",
    },
    safetyNote: {
      es: "El agente nunca solicitará números de tarjeta, PIN ni contraseñas.",
      en: "The agent will never ask for card numbers, PIN, or passwords.",
    },
  },
} as const;

export function tr(key: { es: string; en: string }, lang: Lang): string {
  return key[lang];
}
