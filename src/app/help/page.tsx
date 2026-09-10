'use client';

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  Search,
  Bookmark,
  Users,
  ShieldCheck,
  Tag,
  Compass,
  Settings,
  HelpCircle,
  MessageCircle,
  Book,
  Rocket,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const TOPICS = [
  { icon: Rocket, title: 'Getting Started', count: 12, color: 'text-[#1d3aa6]' },
  { icon: Bookmark, title: 'Bookmarks & Collections', count: 18 },
  { icon: Tag, title: 'Tags & Organization', count: 9 },
  { icon: Users, title: 'Community & Following', count: 7 },
  { icon: ShieldCheck, title: 'Privacy & Security', count: 11 },
  { icon: Settings, title: 'Account Settings', count: 14 },
  { icon: Compass, title: 'Discovery & Trending', count: 6 },
  { icon: Book, title: 'API & Integrations', count: 8 },
]

const ALL_ARTICLES = [
  { cat: 'Getting Started', q: 'How do I create my first bookmark?', a: 'Paste any URL into the submit form, add a title and tags, and save. You can also install our browser extension to save in one click.' },
  { cat: 'Getting Started', q: 'Is Cooltapas really free?', a: 'Yes. The core experience is free forever with unlimited bookmarks. We offer a Pro plan for power users who want advanced analytics and team features.' },
  { cat: 'Bookmarks & Collections', q: 'How do I group bookmarks into a collection?', a: 'Open any bookmark, click "Add to collection", and choose an existing collection or create a new one.' },
  { cat: 'Bookmarks & Collections', q: 'Can I import from Chrome or Firefox?', a: 'Absolutely. Export your browser bookmarks as HTML and upload the file under Settings → Import.' },
  { cat: 'Tags & Organization', q: 'What is auto-tagging?', a: 'When you save a link, we analyze the page content and suggest tags you can accept with one click.' },
  { cat: 'Tags & Organization', q: 'Can I rename or merge tags?', a: 'Yes. Go to Settings → Tags to rename, merge, or delete any tag across your library.' },
  { cat: 'Privacy & Security', q: 'Are my bookmarks private by default?', a: 'Every bookmark and every collection starts private. You explicitly choose to publish or share.' },
  { cat: 'Privacy & Security', q: 'How do I delete my account?', a: 'Open Settings → Account → Delete account. All data is removed within 30 days.' },
  { cat: 'Community & Following', q: 'How do I follow another curator?', a: 'Open their profile and click Follow. Their latest saves appear in your personalized feed.' },
  { cat: 'Discovery & Trending', q: 'How does Trending work?', a: 'Trending surfaces the links getting the most saves and engagement from the community in the last 24–72 hours.' },
  { icon: Settings, cat: 'Account Settings', q: 'How do I change my email?', a: 'Settings → Profile → Email. We send a confirmation link to the new address.' },
  { cat: 'API & Integrations', q: 'Do you have an API?', a: 'Yes. Public beta REST API docs live at /developers. Requests are rate-limited per account.' },
]

export default function HelpPage() {
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const n = q.trim().toLowerCase()
    if (!n) return ALL_ARTICLES
    return ALL_ARTICLES.filter((a) => a.q.toLowerCase().includes(n) || a.a.toLowerCase().includes(n) || a.cat.toLowerCase().includes(n))
  }, [q])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="relative overflow-hidden bg-[#0f1c4d] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur">
              <HelpCircle className="h-3.5 w-3.5" /> Help Center
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight">How can we help?</h1>
            <p className="mt-4 text-lg leading-8 text-slate-200">
              Search the knowledge base or browse by topic. Still stuck? Our team is a message away.
            </p>
            <div className="mt-8">
              <div className="mx-auto flex max-w-2xl items-center gap-3 rounded-full bg-white px-5 py-3 shadow-xl">
                <Search className="h-5 w-5 text-slate-400" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search for articles, guides, how-to..."
                  className="flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                />
                {q && (
                  <button onClick={() => setQ('')} className="rounded-full px-3 py-1 text-xs font-semibold text-slate-500 hover:bg-slate-100">
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {!q && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Browse by topic</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Popular categories</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TOPICS.map((t) => {
              const Icon = t.icon
              return (
                <div key={t.title} className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#1d3aa6] hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1d3aa6]/10 text-[#1d3aa6] group-hover:bg-[#1d3aa6] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-slate-900">{t.title}</h3>
                </div>
              )
            })}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900">
          {q ? `Results for "${q}"` : 'Top articles'}
        </h2>
        {filtered.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
            <p className="text-slate-600">No articles match your search.</p>
            <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#1d3aa6] hover:underline">
              Contact support <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {filtered.map((a, i) => (
              <details key={i} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-md">
                <summary className="flex cursor-pointer items-start justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1d3aa6]">{a.cat}</p>
                    <p className="mt-1 text-base font-semibold text-slate-900">{a.q}</p>
                  </div>
                  <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-[#1d3aa6] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{a.a}</p>
              </details>
            ))}
          </div>
        )}
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#1d3aa6] p-10 text-white shadow-xl lg:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <MessageCircle className="h-10 w-10" />
                <h3 className="mt-5 text-3xl font-bold tracking-tight">Still need a hand?</h3>
                <p className="mt-3 text-base leading-8 text-blue-100">
                  Our support team replies within 24 hours. Tell us what's going on and we'll sort it out together.
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0f1c4d] hover:bg-slate-100">
                  Contact support <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
