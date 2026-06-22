"use client";

import { useState } from "react";
import Link from "next/link";
import { CATEGORIES, ENDPOINTS, SITE } from "@/lib/apiCatalog";
import CategoryIcon from "@/components/CategoryIcon";
import MethodBadge from "@/components/MethodBadge";
import { IconArrowRight, IconSearch } from "@/components/Icons";

const CAT_GRADIENTS = {
  d: "from-cyan-400 to-cyan-600",
  u: "from-flame-300 to-flame-500",
  ai: "from-violet-400 to-violet-600",
  s: "from-teal-400 to-teal-600",
  t: "from-slate-400 to-slate-600",
};

export default function ApisPage() {
  const [activeSlug, setActiveSlug] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = ENDPOINTS.filter((ep) => {
    const matchCat = activeSlug === "all" || ep.category === activeSlug;
    const matchQuery =
      !query ||
      ep.name.toLowerCase().includes(query.toLowerCase()) ||
      ep.path.toLowerCase().includes(query.toLowerCase()) ||
      ep.description.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <>
      {/* ── Header ─────────────────────────────────────────── */}
      <section className="border-b border-cyan-900/5 bg-gradient-to-b from-cyan-50/60 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-cyan-500">REST API</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Daftar Endpoint
          </h1>
          <p className="mt-2 max-w-xl text-ink/55">
            {ENDPOINTS.length} endpoint tersedia di {CATEGORIES.length} kategori. Semua gratis, tanpa API key.
          </p>

          {/* Search */}
          <div className="mt-6 flex max-w-sm items-center gap-2 rounded-2xl border border-cyan-100 bg-white px-4 py-2.5 shadow-clay-sm">
            <IconSearch size={17} className="shrink-0 text-ink/35" />
            <input
              type="text"
              placeholder="Cari endpoint..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink/35"
            />
          </div>
        </div>
      </section>

      {/* ── Category tabs + grid ──────────────────────────── */}
      <section className="py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Tabs */}
          <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveSlug("all")}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeSlug === "all"
                  ? "bg-ink text-white shadow-clay-sm"
                  : "border border-cyan-100 bg-white text-ink/60 hover:border-cyan-300 hover:text-ink"
              }`}
            >
              Semua
              <span className="rounded-full bg-white/20 px-1.5 py-0 text-xs">
                {ENDPOINTS.length}
              </span>
            </button>

            {CATEGORIES.map((cat) => {
              const count = ENDPOINTS.filter((ep) => ep.category === cat.slug).length;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setActiveSlug(cat.slug)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeSlug === cat.slug
                      ? "bg-ink text-white shadow-clay-sm"
                      : "border border-cyan-100 bg-white text-ink/60 hover:border-cyan-300 hover:text-ink"
                  }`}
                >
                  <CategoryIcon icon={cat.icon} size={14} />
                  {cat.label}
                  <span className="rounded-full bg-white/20 px-1.5 py-0 text-xs">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Results count */}
          <p className="mt-5 text-xs text-ink/40">
            Menampilkan {filtered.length} dari {ENDPOINTS.length} endpoint
          </p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="mt-16 text-center text-ink/40">
              <p className="text-base">Tidak ada endpoint yang cocok dengan pencarian.</p>
            </div>
          ) : (
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((ep) => {
                const gradient = CAT_GRADIENTS[ep.category] || "from-slate-400 to-slate-600";
                const cat = CATEGORIES.find((c) => c.slug === ep.category);
                return (
                  <Link
                    key={`${ep.category}-${ep.slug}`}
                    href={`/docs#${ep.category}-${ep.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-cyan-900/5 bg-white p-5 shadow-clay-sm transition-shadow hover:shadow-clay"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div
                          className={`inline-grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-clay-sm`}
                        >
                          <CategoryIcon icon={cat?.icon || "tool"} size={16} />
                        </div>
                        <MethodBadge method={ep.method} />
                      </div>

                      <h3 className="mt-3 font-display text-[15px] font-semibold text-ink leading-snug">
                        {ep.name}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-ink/50 line-clamp-2">
                        {ep.description}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <code className="font-mono text-[11px] text-ink/40">{SITE.baseUrl}{ep.path}</code>
                      <span className="text-cyan-500 transition-transform group-hover:translate-x-1">
                        <IconArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
