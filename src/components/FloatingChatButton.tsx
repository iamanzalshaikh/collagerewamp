"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

/** Decorative — click shows “coming soon” only; no backend. */
export default function FloatingChatButton() {
  const [note, setNote] = useState<string | null>(null);

  useEffect(() => {
    if (!note) return;
    const t = window.setTimeout(() => setNote(null), 2800);
    return () => window.clearTimeout(t);
  }, [note]);

  return (
    <div
      data-floating-chat-root
      className="pointer-events-none bottom-6 right-6 flex flex-col items-end gap-2 sm:bottom-8 sm:right-8"
    >
      {note ? (
        <div
          role="status"
          className="pointer-events-auto max-w-[min(100vw-2rem,280px)] rounded-xl border border-[var(--line)] bg-[#fafaf9] px-4 py-3 text-center text-sm font-medium text-primary shadow-lg"
        >
          {note}
        </div>
      ) : null}
      <button
        type="button"
        aria-label="Open AI assistant"
        title="AI assistant"
        className="pointer-events-auto flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-white/20 bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-transform duration-300 hover:scale-105 hover:shadow-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        onClick={() => setNote("AI assistant — coming soon")}
      >
        <MessageCircle className="h-6 w-6" strokeWidth={1.75} aria-hidden />
      </button>
      <span className="pointer-events-none rounded-full bg-primary px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-primary-foreground shadow-md">
        AI
      </span>
    </div>
  );
}
