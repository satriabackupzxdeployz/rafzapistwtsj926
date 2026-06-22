import Link from "next/link";
import { SITE } from "@/lib/apiCatalog";
import { IconArrowRight, IconTool } from "@/components/Icons";

export const metadata = { title: "404 — Halaman Tidak Ditemukan" };

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 py-20">
      <div className="text-center">
        <span className="inline-grid h-16 w-16 place-items-center rounded-3xl bg-cyan-50 text-cyan-400 shadow-clay">
          <IconTool size={28} />
        </span>
        <h1 className="mt-6 font-display text-5xl font-bold text-ink">404</h1>
        <p className="mt-2 font-display text-xl font-semibold text-ink/60">Halaman tidak ditemukan</p>
        <p className="mt-3 max-w-sm text-sm text-ink/45">
          Alamat yang kamu tuju tidak tersedia. Mungkin endpoint yang kamu cari ada di halaman dokumentasi.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-clay-sm transition hover:-translate-y-0.5"
          >
            Ke Dashboard
          </Link>
          <Link
            href="/docs"
            className="flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-5 py-2.5 text-sm font-semibold text-cyan-700 shadow-clay-sm transition hover:-translate-y-0.5"
          >
            Dokumentasi
            <IconArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
