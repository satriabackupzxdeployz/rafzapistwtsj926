import EndpointDoc from "@/components/EndpointDoc";
import CategoryIcon from "@/components/CategoryIcon";
import { CATEGORIES, ENDPOINTS, getEndpointsByCategory, SITE } from "@/lib/apiCatalog";
import { IconLayers } from "@/components/Icons";

export const metadata = {
  title: "Dokumentasi API",
  description: `Referensi lengkap semua endpoint ${SITE.name} beserta parameter, contoh curl, dan live tester.`,
};

const CAT_GRADIENTS = {
  d: "from-cyan-400 to-cyan-600",
  u: "from-flame-300 to-flame-500",
  ai: "from-violet-400 to-violet-600",
  s: "from-teal-400 to-teal-600",
  t: "from-slate-400 to-slate-600",
};

function SidebarLink({ href, label, count, icon, gradient }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm text-ink/60 transition hover:bg-cyan-50 hover:text-cyan-700"
    >
      <span
        className={`inline-grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${gradient} text-white`}
      >
        <CategoryIcon icon={icon} size={12} />
      </span>
      <span className="flex-1 font-medium">{label}</span>
      <span className="rounded-full bg-cyan-50 px-1.5 py-0 text-[10px] font-medium text-cyan-600 group-hover:bg-cyan-100">
        {count}
      </span>
    </a>
  );
}

export default function DocsPage() {
  return (
    <div className="mx-auto flex max-w-[1400px] gap-0 px-0">
      {/* ── Sidebar ──────────────────────────────────────────── */}
      <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 overflow-y-auto border-r border-cyan-900/5 bg-white py-8 pl-6 pr-4 xl:block scrollbar-thin">
        <div className="flex items-center gap-2 px-2">
          <IconLayers size={16} className="text-ink/40" />
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-ink/40">
            Dokumentasi
          </p>
        </div>

        <nav className="mt-5 space-y-1">
          <a
            href="#intro"
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-ink/60 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Pengantar
          </a>
          <a
            href="#format"
            className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-ink/60 transition hover:bg-cyan-50 hover:text-cyan-700"
          >
            Format Respons
          </a>
        </nav>

        <div className="mt-4 border-t border-cyan-900/5 pt-4">
          <p className="mb-2 px-3 font-mono text-[10px] uppercase tracking-wider text-ink/35">
            Kategori
          </p>
          <nav className="space-y-0.5">
            {CATEGORIES.map((cat) => (
              <SidebarLink
                key={cat.slug}
                href={`#${cat.slug}`}
                label={cat.label}
                count={getEndpointsByCategory(cat.slug).length}
                icon={cat.icon}
                gradient={CAT_GRADIENTS[cat.slug] || "from-slate-400 to-slate-600"}
              />
            ))}
          </nav>
        </div>
      </aside>

      {/* ── Main content ─────────────────────────────────────── */}
      <div className="min-w-0 flex-1 px-5 py-10 sm:px-8 sm:py-12">
        {/* Header */}
        <div className="mb-10 border-b border-cyan-900/5 pb-8">
          <p className="font-mono text-xs uppercase tracking-wider text-cyan-500">Referensi</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Dokumentasi API
          </h1>
          <p className="mt-2 max-w-2xl text-ink/55">
            Panduan lengkap semua endpoint {SITE.name}. Setiap endpoint dilengkapi parameter, contoh curl, contoh respons, dan live tester langsung dari halaman ini.
          </p>
        </div>

        {/* Intro section */}
        <section id="intro" className="mb-12 scroll-mt-24">
          <h2 className="font-display text-xl font-semibold text-ink">Pengantar</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
            Semua endpoint {SITE.name} dapat diakses secara publik tanpa autentikasi. Gunakan base URL berikut sebagai awalan setiap permintaan:
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl bg-ink shadow-clay">
            <div className="border-b border-white/10 px-4 py-2.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">base url</span>
            </div>
            <pre className="px-4 py-4 font-mono text-sm text-cyan-300">{SITE.baseUrl}</pre>
          </div>
        </section>

        {/* Response format */}
        <section id="format" className="mb-12 scroll-mt-24">
          <h2 className="font-display text-xl font-semibold text-ink">Format Respons</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
            Setiap respons JSON mengikuti struktur yang konsisten di semua endpoint:
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl bg-ink shadow-clay">
            <div className="border-b border-white/10 px-4 py-2.5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/40">json</span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 font-mono text-[12.5px] leading-relaxed text-cyan-100">{`{
  "status": 200,
  "success": true,
  "creator": "RAFZ API",
  "result": { ... }
}

// Jika terjadi error:
{
  "status": 400,
  "success": false,
  "creator": "RAFZ API",
  "message": "Parameter 'url' is required"
}`}</pre>
          </div>
        </section>

        {/* Endpoint sections per category */}
        {CATEGORIES.map((cat) => {
          const endpoints = getEndpointsByCategory(cat.slug);
          if (endpoints.length === 0) return null;
          return (
            <section key={cat.slug} id={cat.slug} className="mb-14 scroll-mt-24">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className={`inline-grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br ${CAT_GRADIENTS[cat.slug] || "from-slate-400 to-slate-600"} text-white shadow-clay-sm`}
                >
                  <CategoryIcon icon={cat.icon} size={18} />
                </span>
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink">{cat.label}</h2>
                  <p className="text-sm text-ink/50">{cat.description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {endpoints.map((ep) => (
                  <EndpointDoc key={`${ep.category}-${ep.slug}`} endpoint={ep} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
