import Link from "next/link";
import { IconPlug, IconWhatsapp, IconTelegram, IconMail } from "./Icons";
import { SITE, CATEGORIES, CONTACT } from "@/lib/apiCatalog";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-900/5 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 text-white">
                <IconPlug size={16} />
              </span>
              <span className="font-display text-base font-semibold text-ink">{SITE.name}</span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/55">{SITE.tagline}</p>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-ink">Navigasi</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/55">
              <li><Link href="/" className="hover:text-cyan-600">Dashboard</Link></li>
              <li><Link href="/apis" className="hover:text-cyan-600">List REST API</Link></li>
              <li><Link href="/docs" className="hover:text-cyan-600">Dokumentasi API</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-600">Kontak & Donasi</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-ink">Kategori</p>
            <ul className="mt-3 space-y-2 text-sm text-ink/55">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link href={`/docs#${category.slug}`} className="hover:text-cyan-600">
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-ink">Kontak</p>
            <ul className="mt-3 space-y-2.5 text-sm text-ink/55">
              <li className="flex items-center gap-2">
                <IconWhatsapp size={16} className="text-cyan-600" />
                <a href={`https://wa.me/${CONTACT.whatsapp}`} className="hover:text-cyan-600">+{CONTACT.whatsapp}</a>
              </li>
              <li className="flex items-center gap-2">
                <IconTelegram size={16} className="text-cyan-600" />
                <a href={`https://t.me/${CONTACT.telegram}`} className="hover:text-cyan-600">@{CONTACT.telegram}</a>
              </li>
              <li className="flex items-center gap-2">
                <IconMail size={16} className="text-cyan-600" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-cyan-600">{CONTACT.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-cyan-900/5 pt-6 text-xs text-ink/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Dibangun untuk komunitas developer Indonesia.</p>
          <p className="font-mono">{SITE.baseUrl}</p>
        </div>
      </div>
    </footer>
  );
}
