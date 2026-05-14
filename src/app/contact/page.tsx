'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, HelpCircle, Sparkles, Check } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContactLeadForm } from "@/components/shared/contact-lead-form";

const PHONE = '(234) 345-4574'
const EMAIL = 'hello@cooltapas.com'

const CHANNELS = [
  { icon: Mail, label: 'Email us', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: 'Call us', value: PHONE, href: `tel:${PHONE.replace(/[^0-9+]/g, '')}` },
  { icon: MessageSquare, label: 'Live chat', value: 'Mon-Fri · 9am-6pm', href: '#' },
  { icon: Clock, label: 'Response time', value: 'Within 24 hours', href: '#' },
]

const REASONS = ['General question', 'Partnership', 'Press', 'Bug report', 'Feature request', 'Something else']

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [reason, setReason] = useState('General question')

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="relative overflow-hidden bg-[#0f1c4d] text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Get in touch
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            We'd love to hear from you.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
            Questions, feedback, partnership ideas, or just saying hi — pick a channel below or drop us a note.
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c) => {
            const Icon = c.icon
            return (
              <a key={c.label} href={c.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1d3aa6]/10 text-[#1d3aa6] group-hover:bg-[#1d3aa6] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-slate-500">{c.label}</p>
                <p className="mt-1 text-base font-bold text-slate-900">{c.value}</p>
              </a>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Send us a message</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Tell us what's on your mind</h2>

            {sent ? (
              <div className="mt-8 rounded-2xl bg-emerald-50 p-8 text-center ring-1 ring-emerald-200">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-emerald-900">Message sent!</h3>
                <p className="mt-2 text-sm text-emerald-800">Thanks for reaching out. We'll reply within 24 hours.</p>
              </div>
            ) : (
              <ContactLeadForm />
            )}
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl shadow-md ring-1 ring-slate-200">
              <div className="relative h-64">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80" alt="Global community" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c4d]/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow">
                  <MapPin className="h-4 w-4 text-[#1d3aa6]" />
                  <span className="text-xs font-bold text-slate-900">Remote-first · Worldwide</span>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#0f1c4d] p-8 text-white shadow-md">
              <HelpCircle className="h-7 w-7" />
              <h3 className="mt-4 text-xl font-bold">Looking for quick answers?</h3>
              <p className="mt-2 text-sm leading-7 text-slate-200">
                Our Help Center covers the most common questions about accounts, bookmarks, collections, and privacy.
              </p>
              <a href="/help" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0f1c4d] hover:bg-slate-100">
                Visit Help Center
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
