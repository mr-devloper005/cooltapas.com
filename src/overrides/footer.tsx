import Link from 'next/link'
import { Bookmark, Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

const PHONE = '(234) 345-4574'
const EMAIL = 'hello@cooltapas.com'

export function FooterOverride() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#0f1c4d] text-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt={`${SITE_CONFIG.name} logo`}
                className="h-12 w-12 rounded-xl bg-white object-contain p-1"
              />
              <div>
                <p className="text-xl font-bold text-white">{SITE_CONFIG.name}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-300">Social Bookmarking</p>
              </div>
            </Link>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              The fastest way to save, organize, and share the links and resources you actually want to come back to.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20" aria-label="social">
                  <Icon className="h-4 w-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ['Home', '/'],
                ['Bookmarks', '/sbm'],
                ['Categories', '/sbm#categories'],
                ['Submit a Link', '/sbm/submit'],
                ['Trending', '/sbm'],
              ].map(([n, h]) => (
                <li key={n}>
                  <Link href={h} className="text-slate-300 hover:text-white">{n}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ['About Us', '/about'],
                ['Contact', '/contact'],
                ['Help Center', '/help'],
                ['Privacy Policy', '/privacy'],
                ['Terms of Service', '/terms'],
              ].map(([n, h]) => (
                <li key={n}>
                  <Link href={h} className="text-slate-300 hover:text-white">{n}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get In Touch</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-slate-300" />
                <a href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`} className="text-slate-300 hover:text-white">{PHONE}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-slate-300" />
                <a href={`mailto:${EMAIL}`} className="text-slate-300 hover:text-white">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-slate-300" />
                <span className="text-slate-300">Available worldwide, online 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {year} {SITE_CONFIG.name}. All rights reserved.</p>
          <p>Built for curators, readers, and link lovers.</p>
        </div>
      </div>
    </footer>
  )
}
