import Link from 'next/link'
import { ShieldCheck, Lock, Eye, Database, Cookie, UserCheck, Globe2, Mail, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const UPDATED = 'April 2026'

const PRINCIPLES = [
  { icon: ShieldCheck, title: 'Private by default', body: 'Every bookmark and collection starts private. You choose what to publish.' },
  { icon: Lock, title: 'Encrypted in transit & at rest', body: 'Industry-standard TLS, encrypted databases, and hashed credentials.' },
  { icon: Eye, title: 'No selling your data', body: 'We never sell your bookmarks, reading history, or any personal data to third parties.' },
  { icon: UserCheck, title: 'You own your data', body: 'Export everything or delete your account at any time — no lock-in, no guilt trips.' },
]

const SECTIONS = [
  {
    id: 'collect',
    icon: Database,
    title: '1. Information We Collect',
    body: [
      'Account information you provide: name, email, password hash, and optional profile details.',
      'Content you create: bookmarks, collections, tags, notes, and comments.',
      'Technical data: IP address, device type, browser, and basic analytics events to keep the product healthy.',
    ],
  },
  {
    id: 'use',
    icon: Eye,
    title: '2. How We Use Information',
    body: [
      'To operate and improve Cooltapas — from syncing your bookmarks to powering the trending feed.',
      'To send essential service emails (password resets, security alerts, product updates you opt into).',
      'To detect fraud, abuse, and violations of our Terms of Service.',
    ],
  },
  {
    id: 'cookies',
    icon: Cookie,
    title: '3. Cookies & Tracking',
    body: [
      'We use a small number of first-party cookies to keep you signed in and remember your preferences.',
      'We do not use third-party advertising trackers. Anonymous analytics help us understand usage trends.',
    ],
  },
  {
    id: 'sharing',
    icon: Globe2,
    title: '4. Sharing & Disclosure',
    body: [
      'We share data with service providers (hosting, email delivery) bound by strict confidentiality.',
      'We disclose data to authorities only when required by a valid legal request.',
      'We never sell your personal data to advertisers, brokers, or any other third party.',
    ],
  },
  {
    id: 'rights',
    icon: UserCheck,
    title: '5. Your Rights',
    body: [
      'Access, correct, export, or delete your data at any time from Settings.',
      'If you are in the EU, UK, or California, you have additional rights under GDPR and CCPA.',
      'Submit any privacy request through our contact page — we respond within 30 days.',
    ],
  },
  {
    id: 'retention',
    icon: Database,
    title: '6. Data Retention',
    body: [
      'We keep your data for as long as your account is active.',
      'When you delete your account, all personal data is removed within 30 days from production systems.',
      'Minimal backups may be retained up to 90 days for disaster recovery.',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="relative overflow-hidden bg-[#0f1c4d] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5" /> Privacy Policy
          </span>
          <h1 className="mt-5 text-5xl font-bold tracking-tight">Your privacy, written plainly.</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
            No dark patterns. No hidden trackers. Here's exactly what we collect, why, and how you stay in control.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-blue-200">Last updated: {UPDATED}</p>
        </div>
      </section>

      <section className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PRINCIPLES.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1d3aa6]/10 text-[#1d3aa6]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{p.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">On this page</p>
            <ul className="mt-4 space-y-2 text-sm">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="block rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-[#1d3aa6]">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-10">
            {SECTIONS.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.id} id={s.id} className="scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1d3aa6]/10 text-[#1d3aa6]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900">{s.title}</h2>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {s.body.map((b, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1d3aa6]" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1d3aa6] p-10 text-white shadow-xl">
            <Mail className="h-8 w-8" />
            <h3 className="mt-4 text-2xl font-bold tracking-tight">Questions about your data?</h3>
            <p className="mt-2 text-blue-100">
              Use our contact page for data questions. You can also export or delete your account any time from Settings.
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0f1c4d] hover:bg-slate-100">
              Contact the team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
