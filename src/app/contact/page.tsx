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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-950">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-16 lg:py-20">
          <div className="absolute left-[-8%] top-6 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute bottom-0 right-[-6%] h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.32em] text-blue-700">Contact</p>
              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-950 md:text-7xl">
                Let&apos;s talk about your next move.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Use this form to reach {siteName}. Your request will be recorded and shared with the support team for follow-up.
              </p>

              <div className="mt-8 grid gap-4">
                {contactHighlights.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-base font-black text-slate-950">{item.title}</h2>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.copy}</p>
                    </div>
                  </div>
                ))}
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
