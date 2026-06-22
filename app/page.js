import Link from "next/link";
import { SITE, CATEGORIES, ENDPOINTS } from "@/lib/apiCatalog";
import CategoryIcon from "@/components/CategoryIcon";
import {
  IconArrowRight,
  IconShield,
  IconClock,
  IconLock,
  IconGauge,
  IconLayers,
  IconDownload,
  IconUpload,
  IconSpark,
  IconSearch,
  IconTool,
} from "@/components/Icons";

export const metadata = {
  title: "Dashboard",
  description: SITE.tagline,
};

const STATS = [
  { label: "Total Endpoint", value: String(ENDPOINTS.length) },
  { label: "Kategori API", value: String(CATEGORIES.length) },
  { label: "Biaya Akses", value: "Gratis" },
  { label: "Perlu Login", value: "Tidak" },
];

const FEATURES = [
  {
    icon: IconShield,
    title: "Tanpa API Key",
    desc: "Langsung pakai tanpa registrasi. Tidak perlu token, tidak perlu akun.",
  },
  {
    icon: IconGauge,
    title: "Respons Cepat",
    desc: "Setiap endpoint dioptimasi untuk memberikan respons dalam hitungan milidetik.",
  },
  {
    icon: IconLayers,
    title: "Format JSON Konsisten",
    desc: "Setiap respons mengikuti struktur status, success, creator, result yang seragam.",
  },
  {
    icon: IconClock,
    title: "Selalu Diperbarui",
    desc: "Endpoint diuji dan diperbarui secara berkala agar tetap berjalan optimal.",
  },
  {
    icon: IconLock,
    title: "HTTPS & CORS",
    desc: "Semua endpoint mendukung HTTPS dan header CORS agar aman dipakai dari browser.",
  },
  {
    icon: IconArrowRight,
    title: "Dokumentasi Lengkap",
    desc: "Setiap endpoint disertai parameter, contoh curl, respons JSON, dan live tester.",
  },
];

const CAT_ICONS = {
  d: IconDownload,
  u: IconUpload,
  ai: IconSpark,
  s: IconSearch,
  t: IconTool,
};

const CAT_GRADIENTS = {
  d: "from-cyan-400 to-cyan-600",
  u: "from-flame-300 to-flame-500",
  ai: "from-violet-400 to-violet-600",
  s: "from-teal-400 to-teal-600",
  t: "from-slate-400 to-slate-600",
};

export default function HomePage() {
  const endpointCountByCategory = Object.fromEntries(
    CATEGORIES.map((cat) => [cat.slug, ENDPOINTS.filter((ep) => ep.category === cat.slug).length])
  );

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-mesh bg-grain py-20 sm:py-28">
        {/* Decorative blobs */}
        <span
          aria-hidden
          className="animate-blob absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl"
        />
        <span
          aria-hidden
          className="animate-blob absolute -right-24 top-10 h-80 w-80 rounded-full bg-flame-300/15 blur-3xl [animation-delay:4s]"
        />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1.5 text-xs font-medium text-cyan-700 shadow-clay-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500" />
            Free · No Login · CORS Ready
          </div>

          {/* Headline */}
          <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl text-balance">
            REST API Gratis untuk{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-cyan-700 bg-clip-text text-transparent">
              Developer Indonesia
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/60">
            {SITE.tagline} Pakai langsung tanpa registrasi, tanpa API key, tanpa batas.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/docs"
              className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-clay transition-transform hover:-translate-y-0.5"
            >
              Lihat Dokumentasi
              <IconArrowRight size={16} />
            </Link>
            <Link
              href="/apis"
              className="flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-6 py-3 text-sm font-semibold text-cyan-700 shadow-clay-sm transition-transform hover:-translate-y-0.5"
            >
              Jelajahi API
            </Link>
          </div>

          {/* Base URL chip */}
          <div className="mt-8 flex items-center gap-2">
            <span className="text-xs text-ink/40">Base URL</span>
            <code className="rounded-lg border border-cyan-200/60 bg-white px-3 py-1.5 font-mono text-xs text-cyan-700 shadow-clay-sm">
              {SITE.baseUrl}
            </code>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <section className="border-y border-cyan-900/5 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-cyan-900/5 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="px-6 py-6 text-center">
              <p className="font-display text-3xl font-bold text-ink">{stat.value}</p>
              <p className="mt-0.5 text-sm text-ink/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Category cards ────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-wider text-cyan-500">Kategori API</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">
              5 Kategori, {ENDPOINTS.length} Endpoint
            </h2>
            <p className="mt-2 text-ink/55">
              Semua tersedia gratis dan siap diintegrasikan ke proyek apa pun.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat, index) => {
              const CatIcon = CAT_ICONS[cat.slug] || IconTool;
              const gradient = CAT_GRADIENTS[cat.slug] || "from-slate-400 to-slate-600";
              return (
                <Link
                  key={cat.slug}
                  href={`/docs#${cat.slug}`}
                  className="group animate-fade-up relative overflow-hidden rounded-3xl border border-cyan-900/5 bg-white p-6 shadow-clay-sm transition-shadow hover:shadow-clay"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <span
                    aria-hidden
                    className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br opacity-[0.07] blur-xl"
                  />
                  <div
                    className={`inline-grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-clay-sm`}
                  >
                    <CatIcon size={20} />
                  </div>
                  <h3 className="mt-3.5 font-display text-lg font-semibold text-ink">{cat.label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/55">{cat.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-0.5 text-xs font-medium text-cyan-700">
                      {endpointCountByCategory[cat.slug]} endpoint
                    </span>
                    <span className="text-cyan-500 transition-transform group-hover:translate-x-1">
                      <IconArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────── */}
      <section className="bg-ink py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">Kenapa RAFZ API?</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-white">
              Dirancang buat developer
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feat) => {
              const FeatIcon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/15 text-cyan-400">
                    <FeatIcon size={20} />
                  </span>
                  <h3 className="mt-3.5 font-display text-base font-semibold text-white">{feat.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/50">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quick example ─────────────────────────────────────── */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-200/60 shadow-glow">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-cyan-500">Contoh pemakaian</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                  Dua baris kode sudah cukup
                </h2>
                <p className="mt-3 text-ink/55">
                  Cukup kirim request GET ke endpoint yang kamu butuhkan dan RAFZ API akan memberikan respons JSON yang bersih dan konsisten.
                </p>
                <Link
                  href="/docs"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Lihat semua endpoint
                  <IconArrowRight size={15} />
                </Link>
              </div>

              <div className="overflow-hidden rounded-2xl bg-ink shadow-clay">
                <div className="border-b border-white/10 px-4 py-2.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">javascript</span>
                </div>
                <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed text-cyan-100">
{`const res = await fetch(
  "${SITE.baseUrl}/d/ttmp4?url=https://tiktok.com/@user/video/123"
);
const data = await res.json();

console.log(data.result.download);
// → https://cdn.tiktok.com/...`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-700 py-14">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Siap mulai integrasi?
          </h2>
          <p className="mt-3 text-cyan-100/80">
            Semua endpoint bisa langsung dipakai. Tidak ada pendaftaran, tidak ada tagihan.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/docs"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-cyan-700 shadow-clay transition-transform hover:-translate-y-0.5"
            >
              Mulai dari Dokumentasi
              <IconArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
