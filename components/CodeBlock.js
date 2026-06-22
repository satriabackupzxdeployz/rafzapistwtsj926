"use client";

import { useState } from "react";
import { IconCopy, IconCheck } from "./Icons";

export default function CodeBlock({ code, language = "json" }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-ink shadow-clay">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">{language}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
        >
          {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
          {copied ? "Tersalin" : "Salin"}
        </button>
      </div>
      <pre className="scrollbar-thin overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed text-cyan-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
