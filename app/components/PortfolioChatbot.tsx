"use client";

import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const welcomeMessage: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Hi! I’m Sahil’s portfolio assistant. Ask me about his skills, projects, internships, resume, or availability.",
};

const suggestions = [
  "What are Sahil’s main skills?",
  "Tell me about Sahil’s projects",
  "Is Sahil open to opportunities?",
];

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export default function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function clearChat() {
    setMessages([welcomeMessage]);
    setInput("");
    setError("");
  }

  async function sendMessage(content: string) {
    const question = content.trim();
    if (!question || loading) return;

    const userMessage: Message = {
      id: createId(),
      role: "user",
      content: question,
    };
    const history = [
      ...messages.filter((message) => message.id !== "welcome"),
      userMessage,
    ];

    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: history.map(({ role, content: messageContent }) => ({
            role,
            content: messageContent,
          })),
        }),
      });

      const result = (await response.json()) as {
        reply?: string;
        error?: string;
      };

      if (!response.ok || !result.reply?.trim()) {
        throw new Error(result.error || "The assistant returned no response.");
      }

      setMessages((current) => [
        ...current,
        {
          id: createId(),
          role: "assistant",
          content: result.reply as string,
        },
      ]);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "The assistant is unavailable. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 right-5 z-60 sm:bottom-7 sm:right-7">
      {open && (
        <section
          aria-label="AI portfolio assistant"
          className="mb-4 flex h-[min(42rem,calc(100vh-8rem))] w-[min(25rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-[1.75rem] border border-cyan-400/20 bg-[#080808]/95 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl"
        >
          <header className="flex items-center justify-between border-b border-white/10 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-500 text-xs font-bold text-black">
                AI
              </span>
              <div>
                <h2 className="text-sm font-semibold text-white">Ask about Sahil</h2>
                <p className="text-xs text-emerald-300">
                  {loading ? "Thinking…" : "Online"}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={clearChat}
                disabled={loading}
                className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/50 hover:text-white disabled:opacity-40"
              >
                Clear
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close portfolio assistant"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xl text-white/60 hover:text-white"
              >
                ×
              </button>
            </div>
          </header>

          <div aria-live="polite" className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[90%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto bg-cyan-400 text-black"
                    : "border border-white/10 bg-white/5 text-white/80"
                }`}
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="inline-flex gap-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3" aria-label="Assistant is thinking">
                <span className="chat-dot" />
                <span className="chat-dot [animation-delay:150ms]" />
                <span className="chat-dot [animation-delay:300ms]" />
              </div>
            )}

            {messages.length === 1 && !loading && (
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => void sendMessage(suggestion)}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 text-left text-xs text-cyan-200 hover:bg-cyan-400/10"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t border-white/10 p-3">
            {error && (
              <p role="alert" className="mb-2 rounded-xl bg-red-400/10 px-3 py-2 text-xs text-red-300">
                {error}
              </p>
            )}

            <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 focus-within:border-cyan-400/40">
              <label htmlFor="portfolio-question" className="sr-only">
                Ask a question about Sahil
              </label>
              <textarea
                id="portfolio-question"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
                rows={1}
                maxLength={600}
                disabled={loading}
                placeholder="Message Sahil’s AI assistant…"
                className="max-h-28 min-h-10 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-white/30 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400 font-bold text-black disabled:cursor-not-allowed disabled:opacity-40"
              >
                →
              </button>
            </div>
            <p className="mt-2 text-center text-[10px] text-white/25">
              AI responses may be inaccurate. Verify important information.
            </p>
          </form>
        </section>
      )}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={open ? "Close AI portfolio assistant" : "Open AI portfolio assistant"}
        className="chat-launcher ml-auto flex h-15 items-center gap-3 rounded-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 px-5 font-semibold text-black shadow-xl shadow-cyan-500/20"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/15 text-xs font-bold">
          AI
        </span>
        <span className="hidden sm:inline">Ask about me</span>
      </button>
    </div>
  );
}