import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Bookmark, Flame, Tag, TrendingUp, Users, Star, Plus, Filter, Compass } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

const CATEGORIES = [
  { name: 'Technology', count: 1240 },
  { name: 'Design', count: 980 },
  { name: 'Business', count: 712 },
  { name: 'Marketing', count: 654 },
  { name: 'Productivity', count: 580 },
  { name: 'Lifestyle', count: 440 },
  { name: 'Travel', count: 360 },
  { name: 'Food', count: 310 },
  { name: 'Science', count: 265 },
  { name: 'Education', count: 248 },
  { name: 'Finance', count: 219 },
  { name: 'Health', count: 201 },
]

const PLACEHOLDER_POSTS = [
  { title: 'The Ultimate Guide to Reading More Online', summary: 'How to build a distraction-free reading queue that actually gets read.', category: 'Productivity', author: 'Lena Vasquez', upvotes: 248, img: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80' },
  { title: 'Why Tagging Beats Folders Every Time', summary: 'A case for tag-first organization in a folder-first world.', category: 'Workflow', author: 'Marcus Reed', upvotes: 192, img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80' },
  { title: 'Curating a Design Inspiration Shelf', summary: 'How to collect references without drowning in them.', category: 'Design', author: 'Aiko Tanaka', upvotes: 168, img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80' },
  { title: 'Research Bookmarks for Long-Form Writers', summary: 'A peek into the bookmark systems of working essayists.', category: 'Writing', author: 'Samuel Okafor', upvotes: 141, img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80' },
  { title: 'Save First, Read Later: An Honest Retrospective', summary: 'What two years of save-first browsing taught me.', category: 'Reflection', author: 'Priya Shah', upvotes: 129, img: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80' },
  { title: 'The Best Bookmarklets of 2026', summary: 'A handful of tiny tools that make saving the web painless.', category: 'Tools', author: 'Derek Hill', upvotes: 118, img: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&q=80' },
  { title: 'Building a Reading Shelf That Gets Read', summary: 'Shelves beat queues when you plan for your future self.', category: 'Reading', author: 'Jules Martin', upvotes: 96, img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80' },
  { title: 'How Curators Find New Curators', summary: 'The quiet art of following people who follow things.', category: 'Community', author: 'Hannah Park', upvotes: 82, img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80' },
  { title: 'Why Your Bookmark Bar Is Failing You', summary: 'Browser bookmarks stopped scaling. Here is what replaced mine.', category: 'Tech', author: 'Evan Cole', upvotes: 74, img: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&q=80' },
]

type Card = {
  title: string
  summary: string
  category: string
  author: string
  upvotes: number
  img: string
  href?: string
}

function normalize(posts: any[], limit: number): Card[] {
  const mapped: Card[] = posts.slice(0, limit).map((p, i) => ({
    title: p.title || 'Untitled bookmark',
    summary: p.summary || (typeof p.content === 'object' && (p.content as any)?.description) || 'A saved resource worth returning to.',
    category: (Array.isArray(p.tags) && p.tags[0]) || (typeof p.content === 'object' && (p.content as any)?.category) || 'General',
    author: p.author?.name || 'Community Curator',
    upvotes: p.upvotes || p.saves || Math.max(20, 200 - i * 12),
    img:
      (Array.isArray(p.media) && p.media[0]?.url) ||
      (typeof p.content === 'object' && Array.isArray((p.content as any)?.images) && (p.content as any).images[0]) ||
      PLACEHOLDER_POSTS[i % PLACEHOLDER_POSTS.length].img,
    href: `/sbm/${p.slug}`,
  }))
  if (mapped.length >= limit) return mapped
  const need = limit - mapped.length
  return [...mapped, ...PLACEHOLDER_POSTS.slice(0, need)]
}

export async function TaskListPageOverride({ task, category }: { task: TaskKey; category?: string }) {
  const raw = await fetchTaskPosts(task, 24).catch(() => [] as any[])
  const all = normalize(raw as any[], 12)
  const filtered = category ? all.filter((c) => c.category.toLowerCase() === category.toLowerCase()) : all
  const featured = filtered.slice(0, 1)[0]
  const trending = filtered.slice(1, 4)
  const rest = filtered.slice(4)

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      <section className="relative overflow-hidden bg-[#0f1c4d] text-white">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80')", backgroundSize: 'cover' }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur">
            <Bookmark className="h-3.5 w-3.5" /> Community Bookmarks
          </span>
          <h1 className="mt-5 text-5xl font-bold tracking-tight">
            {category ? `${category} Bookmarks` : 'Explore the web, curated by real people.'}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
            Hand-picked links from curators across {CATEGORIES.length}+ topics. Save what sparks you. Follow who inspires you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/sbm/submit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0f1c4d] hover:bg-slate-100">
              <Plus className="h-4 w-4" /> Submit a Link
            </Link>
            <a href="#trending" className="inline-flex items-center gap-2 rounded-full bg-[#1d3aa6] px-6 py-3 text-sm font-bold text-white hover:bg-[#162d80]">
              <Flame className="h-4 w-4" /> See Trending
            </a>
          </div>
        </div>
      </section>

      <section id="categories" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Browse Categories</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Find your niche</h2>
          </div>
          <span className="hidden text-sm font-semibold text-slate-500 sm:inline">{CATEGORIES.length} active topics</span>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((c) => {
            const active = category?.toLowerCase() === c.name.toLowerCase()
            return (
              <Link
                key={c.name}
                href={active ? '/sbm' : `/sbm?category=${encodeURIComponent(c.name.toLowerCase())}`}
                className={`group rounded-2xl border p-4 shadow-sm transition hover:-translate-y-0.5 ${active ? 'border-[#1d3aa6] bg-[#1d3aa6] text-white' : 'border-slate-200 bg-white hover:border-[#1d3aa6]'}`}
              >
                <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${active ? 'bg-white/15' : 'bg-[#1d3aa6]/10 text-[#1d3aa6] group-hover:bg-[#1d3aa6] group-hover:text-white'}`}>
                  <Tag className="h-4 w-4" />
                </div>
                <p className={`mt-3 text-sm font-bold ${active ? 'text-white' : 'text-slate-900'}`}>{c.name}</p>
                <p className={`text-xs ${active ? 'text-blue-100' : 'text-slate-500'}`}>{c.count.toLocaleString()} saves</p>
              </Link>
            )
          })}
        </div>
      </section>

      {featured ? (
        <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="grid gap-6 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200 lg:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-[320px]">
              <Image src={featured.img} alt={featured.title} fill className="object-cover" unoptimized />
              <span className="absolute left-5 top-5 inline-flex items-center gap-1 rounded-full bg-[#1d3aa6] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                <Star className="h-3.5 w-3.5" /> Editor's Pick
              </span>
            </div>
            <div className="p-8 lg:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">{featured.category}</p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">{featured.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{featured.summary}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-2"><Users className="h-4 w-4 text-[#1d3aa6]" /> by {featured.author}</span>
                <span className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-[#1d3aa6]" /> {featured.upvotes} saves</span>
              </div>
              <Link href={featured.href || '#'} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1d3aa6] px-5 py-3 text-sm font-bold text-white hover:bg-[#162d80]">
                Open bookmark <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section id="trending" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">
              <Flame className="h-4 w-4" /> Trending this week
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">What the community is saving</h2>
          </div>
          <button className="hidden items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#1d3aa6] md:inline-flex">
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {trending.map((c, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image src={c.img} alt={c.title} fill className="object-cover transition group-hover:scale-105" unoptimized />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#1d3aa6]">
                  <Flame className="h-3 w-3" /> #{i + 1} Trending
                </span>
              </div>
              <div className="p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1d3aa6]">{c.category}</p>
                <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-slate-900 group-hover:text-[#1d3aa6]">{c.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600">{c.summary}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span>by {c.author}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#1d3aa6]"><TrendingUp className="h-3.5 w-3.5" /> {c.upvotes}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Latest</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Fresh bookmarks</h2>
          </div>
          <Link href="/sbm/submit" className="hidden items-center gap-2 rounded-full bg-[#1d3aa6] px-4 py-2 text-sm font-bold text-white hover:bg-[#162d80] sm:inline-flex">
            <Plus className="h-4 w-4" /> Add yours
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((c, i) => (
            <Link key={i} href={c.href || '#'} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#1d3aa6] hover:shadow-lg">
              <div className="relative h-36 overflow-hidden">
                <Image src={c.img} alt={c.title} fill className="object-cover transition group-hover:scale-105" unoptimized />
              </div>
              <div className="p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1d3aa6]">{c.category}</p>
                <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-snug text-slate-900 group-hover:text-[#1d3aa6]">{c.title}</h3>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                  <span className="truncate">by {c.author}</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#1d3aa6]"><TrendingUp className="h-3 w-3" /> {c.upvotes}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#1d3aa6] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Got a great link to share?</h2>
            <p className="mt-1 text-blue-100">Submit a bookmark and help the community discover it.</p>
          </div>
          <Link href="/sbm/submit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#0f1c4d] hover:bg-slate-100">
            <Plus className="h-4 w-4" /> Submit a Link
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
