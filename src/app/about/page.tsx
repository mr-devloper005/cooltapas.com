import Link from 'next/link'
import { ArrowRight, Bookmark, Compass, Users, Sparkles, Heart, ShieldCheck, Target } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const STATS = [
  { value: '12k+', label: 'Creators onboarded' },
  { value: '180k', label: 'Bookmarks shared' },
  { value: '4.2k', label: 'Public collections' },
  { value: '80+', label: 'Countries' },
]

const VALUES = [
  { icon: Heart, title: 'Curated by people', body: 'Trusted recommendations beat endless algorithmic feeds every time.' },
  { icon: Target, title: 'Designed for focus', body: 'A calm, clean UI that helps you find the next resource fast.' },
  { icon: ShieldCheck, title: 'Private by default', body: 'You decide what stays personal and what gets shared with the world.' },
  { icon: Users, title: 'Built to share', body: 'Collections make collaboration and knowledge flow effortless.' },
]

const TIMELINE = [
  { year: '2022', title: 'The spark', body: 'Started as a side-project to save research links that kept getting lost in chat.' },
  { year: '2023', title: 'First 1,000 curators', body: 'Opened to a small community of writers, students, and designers.' },
  { year: '2024', title: 'Public launch', body: 'Shipped public collections, tagging, and the trending discovery feed.' },
  { year: '2026', title: 'Global community', body: 'Curators across 80+ countries, millions of saves, one calm workspace.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="relative overflow-hidden bg-[#0f1c4d] text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> About {SITE_CONFIG.name}
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
            A calmer home for the links you love.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Cooltapas is a social bookmarking platform built for people who still believe the open web is worth saving. We help you collect, organize, and share the resources that shape your work.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/register" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0f1c4d] hover:bg-slate-100">
              Join the community <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10">
              Say hello
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <p className="text-4xl font-bold text-[#1d3aa6]">{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative h-96 overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="Our team" className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Our Mission</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Save the web that actually matters to you.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Search is loud. Feeds are louder. Cooltapas gives you a quiet place to keep the pages you want to remember — and a community of curators doing the same in their own corners of the internet.
            </p>
            <p className="mt-3 text-base leading-8 text-slate-600">
              Whether you're researching a thesis, building a reading shelf, or collecting inspiration for a product, we believe your bookmarks deserve a better home than a tab you'll never open again.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Values</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">What we stand for</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1d3aa6]/10 text-[#1d3aa6]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{v.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Our Journey</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">From side-project to global community</h2>
        </div>
        <div className="relative mt-12 border-l-2 border-[#1d3aa6]/20 pl-8">
          {TIMELINE.map((t) => (
            <div key={t.year} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-[#1d3aa6] text-xs font-bold text-white">
                {t.year.slice(-2)}
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-[#1d3aa6]">{t.year}</p>
              <h3 className="mt-1 text-xl font-bold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{t.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1d3aa6] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-14 sm:px-6 lg:flex-row lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Ready to save your corner of the web?</h2>
            <p className="mt-2 text-blue-100">Free forever. No credit card. Start curating in 30 seconds.</p>
          </div>
          <Link href="/register" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0f1c4d] hover:bg-slate-100">
            Create a free account <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
