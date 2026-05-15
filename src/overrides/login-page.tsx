'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Bookmark, Loader2, Sparkles, Check } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    if (!email || !password) {
      setError('Please enter your email and password.')
      return
    }
    try {
      await login(email, password)
      setSuccess(true)
      setTimeout(() => router.push('/'), 700)
    } catch (err: any) {
      setError(err?.message || 'Unable to sign in. Try again.')
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="rounded-3xl bg-[#0f1c4d] p-10 text-white shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
              <Bookmark className="h-7 w-7 text-[#1d3aa6]" fill="#1d3aa6" />
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight">Welcome back to Cooltapas</h1>
            <p className="mt-4 text-sm leading-8 text-slate-200">
              Sign in to access your bookmarks, collections, and the curators you follow.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'All your saved links, in one fast workspace',
                'Sync across browser, mobile, and desktop',
                'Discover what your community is reading',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-100">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1d3aa6]">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-md ring-1 ring-slate-200">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Sign In</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Access your account</h2>

            <form className="mt-8 grid gap-4" onSubmit={onSubmit}>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Email address</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none focus:border-[#1d3aa6] focus:ring-2 focus:ring-[#1d3aa6]/20"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Password</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm outline-none focus:border-[#1d3aa6] focus:ring-2 focus:ring-[#1d3aa6]/20"
                  placeholder="••••••••"
                />
              </label>

              {error ? (
                <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
                  {error}
                </div>
              ) : null}
              {success ? (
                <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
                  Signed in successfully. Redirecting…
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isLoading || success}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1d3aa6] px-6 text-sm font-bold text-white shadow-sm hover:bg-[#162d80] disabled:opacity-60"
              >
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                {isLoading ? 'Signing in…' : 'Sign In'}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
              <Link href="/forgot-password" className="hover:underline">
                Forgot password?
              </Link>
              <Link href="/register" className="inline-flex items-center gap-2 font-semibold text-[#1d3aa6] hover:underline">
                <Sparkles className="h-4 w-4" />
                Create account
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
