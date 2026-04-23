import Link from 'next/link'
import { Scale, FileText, UserCheck, AlertTriangle, Ban, Gavel, Mail, ArrowRight } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const UPDATED = 'April 2026'

const SECTIONS = [
  {
    id: 'acceptance',
    icon: FileText,
    title: '1. Acceptance of Terms',
    body: [
      'By creating an account, saving a bookmark, or otherwise using Cooltapas, you agree to these Terms of Service.',
      'If you do not agree with any part of the terms, you may not use the platform.',
    ],
  },
  {
    id: 'account',
    icon: UserCheck,
    title: '2. Your Account',
    body: [
      'You must be at least 13 years old to use Cooltapas.',
      'You are responsible for keeping your password secure and for all activity that happens under your account.',
      'Notify us immediately if you suspect unauthorized access at security@cooltapas.com.',
    ],
  },
  {
    id: 'content',
    icon: FileText,
    title: '3. Your Content',
    body: [
      'You retain full ownership of the bookmarks, collections, notes, and comments you create.',
      'By making content public, you grant Cooltapas a non-exclusive license to display it on the platform.',
      'You are responsible for having the right to share the links and descriptions you publish.',
    ],
  },
  {
    id: 'acceptable',
    icon: AlertTriangle,
    title: '4. Acceptable Use',
    body: [
      'Do not use Cooltapas to share illegal content, malware, spam, or material that infringes others\u2019 rights.',
      'Do not scrape, reverse-engineer, or abuse our infrastructure.',
      'Respect other curators — harassment and hate speech are grounds for immediate suspension.',
    ],
  },
  {
    id: 'termination',
    icon: Ban,
    title: '5. Suspension & Termination',
    body: [
      'We may suspend or terminate accounts that violate these terms or harm the community.',
      'You may delete your account at any time from Settings. Personal data is removed within 30 days.',
    ],
  },
  {
    id: 'disclaimer',
    icon: AlertTriangle,
    title: '6. Disclaimers',
    body: [
      'Cooltapas is provided "as is" without warranties of any kind.',
      'We do our best to keep the service fast and available, but we cannot guarantee uninterrupted access.',
      'Links saved by users are their responsibility; we do not endorse third-party content.',
    ],
  },
  {
    id: 'liability',
    icon: Scale,
    title: '7. Limitation of Liability',
    body: [
      'To the extent permitted by law, Cooltapas is not liable for indirect, incidental, or consequential damages.',
      'Our total liability for any claim will not exceed what you paid us in the preceding 12 months, or $50 if free.',
    ],
  },
  {
    id: 'law',
    icon: Gavel,
    title: '8. Governing Law',
    body: [
      'These terms are governed by the laws of Delaware, USA, without regard to conflict of law principles.',
      'Any disputes will be resolved in the courts of Delaware, unless applicable law requires otherwise.',
    ],
  },
  {
    id: 'changes',
    icon: FileText,
    title: '9. Changes to These Terms',
    body: [
      'We may update these terms from time to time. Material changes will be announced by email or in-app notice.',
      'Continued use of Cooltapas after changes take effect means you accept the updated terms.',
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="relative overflow-hidden bg-[#0f1c4d] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur">
            <Scale className="h-3.5 w-3.5" /> Terms of Service
          </span>
          <h1 className="mt-5 text-5xl font-bold tracking-tight">The rules we all agree to.</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
            These are the terms that govern your use of Cooltapas. They're written in plain language so everyone knows where they stand.
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-blue-200">Last updated: {UPDATED}</p>
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

          <div className="space-y-8">
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
            <h3 className="mt-4 text-2xl font-bold tracking-tight">Need legal clarification?</h3>
            <p className="mt-2 text-blue-100">
              Email <a className="underline" href="mailto:legal@cooltapas.com">legal@cooltapas.com</a> with any questions about these terms.
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
