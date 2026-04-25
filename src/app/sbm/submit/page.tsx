'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Sparkles, Link2, Tag as TagIcon, ShieldCheck, Check, FileText, Eye } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { mockBookmarks } from '@/data/mock-data'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'
import { loadFromStorage, saveToStorage, storageKeys } from '@/lib/local-storage'
import type { Bookmark as BookmarkType } from '@/types'

export default function SubmitBookmarkPage() {
  const router = useRouter()
  const { user } = useAuth()
  const { toast } = useToast()
  const categoryOptions = useMemo(
    () => Array.from(new Set(mockBookmarks.map((bookmark) => bookmark.category))),
    []
  )
  const [statusMessage, setStatusMessage] = useState('')
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [tagsInput, setTagsInput] = useState('')

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (!user) {
      toast({
        title: 'Sign in required',
        description: 'Please sign in to submit a bookmark.',
      })
      router.push('/login')
      return
    }

    if (!url || !title || !description) {
      setStatusMessage('Please complete the required fields before submitting.')
      return
    }

    let domain = 'link'
    try {
      const parsed = new URL(url)
      domain = parsed.hostname.replace('www.', '')
    } catch {
      setStatusMessage('Please enter a valid URL.')
      return
    }

    const tags = tagsInput
      .split(',')
      .map((tag) => tag.trim())
      .filter(Boolean)

    const nextBookmark: BookmarkType = {
      id: `user-bookmark-${Date.now()}`,
      title,
      slug: title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .slice(0, 60),
      url,
      description,
      image: '/placeholder.svg?height=720&width=1280',
      domain,
      tags: tags.length > 0 ? tags : ['New'],
      category: category || 'General',
      createdAt: new Date().toISOString(),
      author: user,
      upvotes: 0,
      saves: 0,
      commentsCount: 0,
      isUpvoted: false,
      isSaved: false,
    }

    const stored = loadFromStorage<BookmarkType[]>(storageKeys.bookmarks, [])
    const next = [nextBookmark, ...stored]
    saveToStorage(storageKeys.bookmarks, next)

    setStatusMessage('Bookmark submitted! It will appear in your feed.')
    toast({
      title: 'Bookmark submitted',
      description: 'Your link has been added to the feed.',
    })
    setUrl('')
    setTitle('')
    setDescription('')
    setCategory('')
    setTagsInput('')
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <main>
        <section className="relative overflow-hidden bg-[#0f1c4d] text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Submit a Link
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Share a link with the community</h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Add a clear title, a short description, and a couple of tags. Your bookmark will appear in the feed for other curators to discover.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200 lg:p-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Bookmark details</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Tell us about the link</h2>
              <form
                className="mt-6 space-y-5 [&_input]:h-12 [&_input]:w-full [&_input]:rounded-xl [&_input]:border [&_input]:border-slate-300 [&_input]:bg-white [&_input]:px-4 [&_input]:text-sm [&_input]:outline-none [&_input:focus]:border-[#1d3aa6] [&_input:focus]:ring-2 [&_input:focus]:ring-[#1d3aa6]/20 [&_textarea]:w-full [&_textarea]:rounded-xl [&_textarea]:border [&_textarea]:border-slate-300 [&_textarea]:bg-white [&_textarea]:p-4 [&_textarea]:text-sm [&_textarea]:outline-none [&_textarea:focus]:border-[#1d3aa6] [&_textarea:focus]:ring-2 [&_textarea:focus]:ring-[#1d3aa6]/20"
                onSubmit={handleSubmit}
              >
                <label className="block">
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-700"><Link2 className="h-4 w-4 text-[#1d3aa6]" /> URL</span>
                  <Input placeholder="https://example.com/great-article" value={url} onChange={(event) => setUrl(event.target.value)} />
                </label>
                <label className="block">
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-700"><FileText className="h-4 w-4 text-[#1d3aa6]" /> Title</span>
                  <Input placeholder="Give this link a clear title" value={title} onChange={(event) => setTitle(event.target.value)} />
                </label>
                <label className="block">
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-700"><Eye className="h-4 w-4 text-[#1d3aa6]" /> Description</span>
                  <Textarea placeholder="Why is this link useful? One or two sentences is plenty." className="min-h-[140px]" value={description} onChange={(event) => setDescription(event.target.value)} />
                </label>
                <label className="block">
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-700"><TagIcon className="h-4 w-4 text-[#1d3aa6]" /> Category</span>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="mt-2 h-12 rounded-xl border-slate-300">
                      <SelectValue placeholder="Choose a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categoryOptions.map((categoryOption) => (
                        <SelectItem key={categoryOption} value={categoryOption}>
                          {categoryOption}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </label>
                <label className="block">
                  <span className="flex items-center gap-2 text-sm font-semibold text-slate-700"><TagIcon className="h-4 w-4 text-[#1d3aa6]" /> Tags</span>
                  <Input placeholder="design, productivity, ai" value={tagsInput} onChange={(event) => setTagsInput(event.target.value)} />
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Design', 'Productivity', 'AI', 'Frontend', 'Research'].map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        onClick={() => setTagsInput((prev) => (prev ? `${prev}, ${tag.toLowerCase()}` : tag.toLowerCase()))}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:border-[#1d3aa6] hover:bg-[#1d3aa6] hover:text-white"
                      >
                        + {tag}
                      </button>
                    ))}
                  </div>
                </label>

                <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5">
                  <Button type="submit" className="rounded-full bg-[#1d3aa6] px-6 py-3 text-sm font-bold text-white hover:bg-[#162d80]">
                    Submit Bookmark
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full border-slate-300 text-slate-700 hover:border-[#1d3aa6]"
                    onClick={() => {
                      setStatusMessage('Draft saved locally.')
                      toast({ title: 'Draft saved', description: 'Your bookmark draft is saved on this device.' })
                    }}
                  >
                    Save Draft
                  </Button>
                </div>
                {statusMessage && (
                  <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200">
                    {statusMessage}
                  </div>
                )}
              </form>
            </motion.div>

            <aside className="space-y-5">
              <div className="rounded-3xl bg-[#0f1c4d] p-7 text-white shadow-md">
                <Sparkles className="h-6 w-6" />
                <h3 className="mt-4 text-lg font-bold">Submission Tips</h3>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200">
                  {[
                    'Keep titles short and descriptive.',
                    'Explain the main takeaway in one sentence.',
                    'Add 3-5 tags to improve discoverability.',
                    'Private bookmarks stay off the public feed.',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1d3aa6]/10 text-[#1d3aa6]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="mt-4 text-base font-bold text-slate-900">Safe & respectful</h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  No spam, no affiliate dumps, no NSFW without tags. Community first.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
