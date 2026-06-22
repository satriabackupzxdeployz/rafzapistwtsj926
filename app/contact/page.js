import Image from "next/image";
import { CONTACT, SITE } from "@/lib/apiCatalog";
import { IconWhatsapp, IconTelegram, IconMail, IconHeart, IconQr } from "@/components/Icons";

export const metadata = {
  title: "Kontak & Donasi",
  description: `Hubungi tim ${SITE.name} atau dukung pengembangan API lewat donasi QRIS.`,
};

const CONTACT_CARDS = [
  {
    icon: IconWhatsapp,
    label: "WhatsApp",
    value: `+${CONTACT.whatsapp}`,
    href: `https://wa.me/${CONTACT.whatsapp}`,
    gradient: "from-green-400 to-green-600",
    hint: "Balas dalam beberapa jam",
  },
  {
    icon: IconTelegram,
    label: "Telegram",
    value: `@${CONTACT.telegram}`,
    href: `https://t.me/${CONTACT.telegram}`,
    gradient: "from-cyan-400 to-cyan-600",
    hint: "Respons lebih cepat",
  },
  {
    icon: IconMail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    gradient: "from-flame-300 to-flame-500",
    hint: "Untuk laporan bug & kerjasama",
  },
];

const FAQ_ITEMS = [
  {
    q: "Apakah RAFZ API benar-benar gratis?",
    a: "Ya, semua endpoint tersedia gratis tanpa biaya, tanpa API key, dan tanpa perlu mendaftar.",
  },
  {
    q: "Apakah ada batas penggunaan per hari?",
    a: "Saat ini belum ada rate limit yang ketat. Namun penggunaan yang wajar sangat dianjurkan agar layanan tetap stabil untuk semua pengguna.",
  },
  {
    q: "Endpoint tidak merespons, apa yang harus dilakukan?",
    a: "Coba lagi beberapa saat kemudian. Jika masalah berlanjut, hubungi kami lewat WhatsApp atau Telegram agar dapat segera ditangani.",
  },
  {
    q: "Apakah bisa request endpoint baru?",
    a: "Tentu. Kirimkan permintaanmu lewat WhatsApp atau Telegram dan kami akan mempertimbangkan untuk menambahkannya.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Header ───────────────────────────────────────────── */}
      <section className="border-b border-cyan-900/5 bg-gradient-to-b from-cyan-50/60 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-wider text-cyan-500">Hubungi Kami</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            Kontak & Donasi
          </h1>
          <p className="mt-2 max-w-xl text-ink/55">
            Ada pertanyaan, laporan bug, atau ingin request endpoint baru? Jangan ragu untuk menghubungi kami.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">

          {/* ── Left: Contact + FAQ ──────────────────────────── */}
          <div className="space-y-12">
            {/* Contact cards */}
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Hubungi Kami</h2>
              <p className="mt-1 text-sm text-ink/50">Pilih platform yang paling nyaman untukmu.</p>

              <div className="mt-5 space-y-3">
                {CONTACT_CARDS.map((card) => {
                  const CardIcon = card.icon;
                  return (
                    <a
                      key={card.label}
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-cyan-900/5 bg-white p-4 shadow-clay-sm transition hover:shadow-clay"
                    >
                      <span
                        className={`inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-clay-sm`}
                      >
                        <CardIcon size={20} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-display text-sm font-semibold text-ink">{card.label}</p>
                        <p className="truncate font-mono text-xs text-ink/55">{card.value}</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-cyan-50 px-2.5 py-1 text-xs text-cyan-600">
                        {card.hint}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">Pertanyaan Umum</h2>
              <div className="mt-5 space-y-4">
                {FAQ_ITEMS.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-2xl border border-cyan-900/5 bg-white p-5 shadow-clay-sm"
                  >
                    <p className="font-display text-sm font-semibold text-ink">{item.q}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Donasi ────────────────────────────────── */}
          <div>
            <div className="sticky top-24">
              <div className="overflow-hidden rounded-3xl border border-cyan-900/5 bg-white shadow-clay">
                {/* Header */}
                <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 p-6 text-white">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl bg-white/15 text-white">
                    <IconHeart size={20} />
                  </span>
                  <h2 className="mt-3 font-display text-xl font-bold">Dukung RAFZ API</h2>
                  <p className="mt-1.5 text-sm text-cyan-100/80 leading-relaxed">
                    RAFZ API dibuat dan dirawat secara sukarela. Donasi kecilmu sangat berarti untuk menjaga server dan terus menambah fitur baru.
                  </p>
                </div>

                {/* QRIS */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm font-medium text-ink">
                    <IconQr size={16} className="text-cyan-500" />
                    Scan QRIS untuk donasi
                  </div>

                  <div className="mt-4 flex justify-center">
                    <div className="relative overflow-hidden rounded-2xl border-2 border-dashed border-cyan-200 bg-cyan-50/50 p-3">
                      <Image
                        src="/images/qris-donasi.png"
                        alt="QRIS Donasi RAFZ API"
                        width={240}
                        height={240}
                        className="rounded-xl"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                      {/* Placeholder shown until image loads */}
                      <div className="flex h-60 w-60 flex-col items-center justify-center gap-2 rounded-xl bg-cyan-50">
                        <IconQr size={48} className="text-cyan-300" />
                        <p className="text-center text-xs text-ink/35">
                          Letakkan{" "}
                          <code className="font-mono">qris-donasi.png</code>
                          <br />
                          di folder{" "}
                          <code className="font-mono">/public/images/</code>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2.5">
                    {[
                      "Donasi berapa pun sangat dihargai",
                      "Tidak ada jumlah minimum",
                      "Membantu biaya server & pengembangan",
                    ].map((text) => (
                      <div key={text} className="flex items-start gap-2 text-sm text-ink/55">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
