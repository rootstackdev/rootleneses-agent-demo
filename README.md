# RootLenses — AI Voice Agents Demo

> A live demonstration platform for [RootLenses](https://rootlenses.com) showcasing ElevenLabs Conversational AI voice agents embedded in a real-world use case.

---

## What It Does

This project is a bilingual (🇪🇸 Spanish / 🇺🇸 English) demo site that lets visitors have a **real voice conversation** with an AI agent directly from the browser — no downloads, no sign-up required.

The current demo features **Rootstack Bank**, a first-line customer support agent that:

- Answers FAQs about balances, transfers, and cards
- Guides users step by step through common banking tasks
- Creates support tickets for complex issues
- Detects and escalates potential fraud cases
- Speaks naturally in both **English and Spanish** (`eleven_multilingual_v2`)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Inline styles (dark theme, `#F1E104` yellow accent) |
| Voice AI | [ElevenLabs Conversational AI](https://elevenlabs.io) |
| SDK | `@elevenlabs/react` — `useConversation` hook |
| Transport | WebSocket (`connectionType: "websocket"`) |
| i18n | Custom React Context + localStorage persistence |
| Deployment | [Netlify](https://netlify.com) |

---

## Project Structure

```
rootlenses-demo/
├── app/
│   ├── page.tsx                        # Landing page (hero + demo card)
│   ├── layout.tsx                      # Root layout with providers
│   ├── providers.tsx                   # Client-side context wrapper
│   ├── globals.css                     # Base styles + animations
│   ├── translations.ts                 # All EN/ES strings
│   ├── context/
│   │   └── LanguageContext.tsx         # Language state + localStorage
│   ├── components/
│   │   ├── Nav.tsx                     # Sticky nav with lang toggle
│   │   └── VoiceAgentCard.tsx          # Live call card component
│   └── agents/
│       └── rootstack-bank/
│           └── page.tsx                # Agent detail page
├── public/
│   └── rootlenses-logo.svg             # Brand logo
├── .env.local                          # Local environment variables
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- An [ElevenLabs](https://elevenlabs.io) account with a Conversational AI agent created

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd rootlenses-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root of the project:

```env
NEXT_PUBLIC_AGENT_ID_ROOTSTACK=your_agent_id_here
```

You can find your agent ID in the ElevenLabs dashboard under **Conversational AI → Agents**.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How the Voice Call Works

1. User clicks **"Iniciar llamada" / "Start call"**
2. Browser requests microphone permission
3. A WebSocket session is opened with the ElevenLabs agent
4. The agent responds in real time using the configured voice and language model
5. User clicks **"Finalizar llamada" / "End call"** to disconnect

> The ElevenLabs API key is **never exposed** in the client. The browser connects directly to ElevenLabs using only the public Agent ID.

---

## Deploying to Netlify

### Environment Variables

Add the following in **Netlify → Site Settings → Environment variables**:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_AGENT_ID_ROOTSTACK` | Your ElevenLabs agent ID |

### Build Settings

Netlify should auto-detect Next.js. If not, set manually:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `.next` |

---

## Adding a New Agent

1. Create a new agent in the [ElevenLabs dashboard](https://elevenlabs.io/app/conversational-ai)
2. Add its ID to `.env.local` as a new `NEXT_PUBLIC_AGENT_ID_*` variable
3. Create a new route under `app/agents/your-agent-name/page.tsx`
4. Drop in a `<VoiceAgentCard>` with the new agent's props

---

## License

Private demo — © RootLenses. All rights reserved.
