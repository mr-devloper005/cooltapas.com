import Link from 'next/link'
import {
  Phone,
  ArrowRight,
  Check,
  Bookmark,
  Layers,
  Tag,
  Compass,
  Users,
  Star,
  Search,
  Globe2,
  Sparkles,
  ShieldCheck,
  Quote,
  ChevronDown,
  MapPin,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const PHONE = '(234) 345-4574'

const SERVICES = [
  { name: 'Curated Bookmarks', icon: Bookmark, desc: 'Hand-picked links across the web you can rely on.' },
  { name: 'Topic Collections', icon: Layers, desc: 'Group resources into shelves and revisit them anytime.' },
  { name: 'Smart Tagging', icon: Tag, desc: 'Auto-tagging so you find saved links the moment you need them.' },
  { name: 'Discover Trending', icon: Compass, desc: 'See what the community is saving right now.' },
]

const STATS = [
  { value: '10+', label: 'Years of Curation Experience' },
  { value: '6,000+', label: 'Active Curators & Readers' },
  { value: '98%', label: 'Member Satisfaction Score' },
]

const STEPS = [
  { n: '01', title: 'Save', body: 'Drop any URL with one click from your browser or phone.' },
  { n: '02', title: 'Organize', body: 'Auto-sorted into collections, tags, and reading shelves.' },
  { n: '03', title: 'Discover', body: 'Browse trending bookmarks and follow expert curators.' },
  { n: '04', title: 'Share', body: 'Publish your shelves and grow an audience around them.' },
]

const CATEGORIES = [
  'Technology', 'Design', 'Business', 'Marketing', 'Productivity', 'Lifestyle', 'Travel', 'Food',
]

const FAQS = [
  {
    q: 'What is Cooltapas and how does it work?',
    a: 'Cooltapas is a social bookmarking platform where you save, organize, and share interesting links. You can build collections, follow curators, and discover what others are saving in your areas of interest.',
  },
  {
    q: 'Is creating an account free?',
    a: 'Yes. Creating an account is completely free. You can save unlimited bookmarks and build as many collections as you like.',
  },
  {
    q: 'Can I import bookmarks from my browser?',
    a: 'Absolutely. We support importing from Chrome, Firefox, Safari, and standard HTML bookmark exports.',
  },
  {
    q: 'Are my private bookmarks really private?',
    a: 'Yes. Every bookmark and collection is private by default. You choose what to publish to the public feed.',
  },
  {
    q: 'How do I follow other curators?',
    a: 'Open any curator profile and click Follow. New saves from the people you follow appear in your personalized feed.',
  },
]


const TESTIMONIAL = {
  quote:
    'Cooltapas changed the way I save research. Tagging is instant, my collections sync everywhere, and the trending feed is genuinely useful. I deleted three other bookmark apps after switching.',
  name: 'Marcus Reed',
  role: 'Independent Researcher',
  avatar: 'https://i.pravatar.cc/120?img=15',
}

const LOGOS = ['Curators', 'ReadStack', 'Linkly', 'Pocketly', 'Markit', 'Saveio']

export async function HomePageOverride() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(15,28,77,0.85) 0%, rgba(29,58,166,0.7) 100%), url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1600&q=80')",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-3xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              Social bookmarking, reimagined
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Social
              <br />
              Bookmarking
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-100 sm:text-lg">
              Save the links you love, organize them into beautiful collections, and discover what the world is reading right now.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/sbm"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#0f1c4d] shadow-lg hover:bg-slate-100"
              >
                Get a Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#1d3aa6] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#162d80]"
              >
                <Phone className="h-4 w-4" />
                Call Us Today
              </a>
              <a
                href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10"
              >
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMMITMENT CARD */}
      <section className="relative -mt-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 lg:grid-cols-2">
          <div className="relative min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80"
              alt="Curated bookmarks"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="p-8 lg:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">About Cooltapas</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Commitment to Safe and Effective Bookmarking
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              We are a small team of readers and engineers who believe the open web is worth saving. Cooltapas is private by default, fast on every device, and built to make your bookmarks actually useful.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Private by default — you control what goes public',
                'Lightning fast search across every saved link',
                'Auto-tagging so collections stay organized',
                'Sync seamlessly across browser, mobile, and desktop',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1d3aa6] text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#1d3aa6] px-5 py-3 text-sm font-bold text-white hover:bg-[#162d80]"
              >
                <Phone className="h-4 w-4" />
                {PHONE}
              </a>
              <a
                href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-900 hover:bg-slate-50"
              >
                <Phone className="h-4 w-4" />
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">What We Offer</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Professional Bookmarking Solutions
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Everything you need to save, organize, and rediscover the best of the web — in one calm, fast workspace.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.name}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#1d3aa6] hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1d3aa6]/10 text-[#1d3aa6] group-hover:bg-[#1d3aa6] group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{s.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
                <Link href="/sbm" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1d3aa6] hover:gap-2">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      {/* SERVICE GUARANTEE - DARK BLUE STATS */}
      <section className="bg-[#0f1c4d] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-300">Service Guarantee</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A Community You Can Rely On
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                Backed by a global community of curators and powered by lightning-fast infrastructure, Cooltapas keeps your saved web alive and accessible whenever you need it.
              </p>
              <Link
                href="/register"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0f1c4d] hover:bg-slate-100"
              >
                Join the Community <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl bg-[#1d3aa6] p-6 text-center shadow-lg">
                  <p className="text-4xl font-bold text-white">{s.value}</p>
                  <p className="mt-2 text-xs leading-5 text-blue-100">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS / SYSTEM */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Process for You</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Proven Bookmarking System
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="text-4xl font-bold text-[#1d3aa6]/15">{s.n}</span>
              <h3 className="mt-2 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE / TESTIMONIAL */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Why Curators Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Customers Choose Cooltapas
            </h2>
          </div>

          <div className="mt-12 rounded-3xl bg-white p-8 shadow-md ring-1 ring-slate-200 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[auto_1fr]">
              <img
                src={TESTIMONIAL.avatar}
                alt={TESTIMONIAL.name}
                className="h-32 w-32 rounded-full object-cover ring-4 ring-[#1d3aa6]/10"
              />
              <div>
                <Quote className="h-8 w-8 text-[#1d3aa6]/30" />
                <p className="mt-3 text-lg leading-8 text-slate-700">"{TESTIMONIAL.quote}"</p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900">{TESTIMONIAL.name}</p>
                    <p className="text-sm text-slate-500">{TESTIMONIAL.role}</p>
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-60">
            {LOGOS.map((l) => (
              <span key={l} className="text-lg font-bold tracking-wider text-slate-400">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PHONE BAND */}
      <section className="bg-[#1d3aa6] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 py-6 sm:px-6 sm:flex-row lg:px-8">
          <a href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-3 text-xl font-bold hover:text-blue-100">
            <Phone className="h-5 w-5" />
            {PHONE}
          </a>
          <span className="hidden h-6 w-px bg-white/30 sm:block" />
          <a href={`tel:${PHONE.replace(/[^0-9+]/g, '')}`} className="inline-flex items-center gap-2 text-lg font-semibold hover:text-blue-100">
            <Phone className="h-4 w-4" /> Call Us Today
          </a>
        </div>
      </section>

      {/* CATEGORIES / "SERVICE AREAS" */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="categories">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">Topic Areas</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Bookmark Categories Near You
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Whatever you're into, there's a community of curators saving the best of it. Pick a category and dive in.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <Link
                  key={c}
                  href="/sbm"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-[#1d3aa6] hover:bg-[#1d3aa6] hover:text-white"
                >
                  <Tag className="h-3.5 w-3.5" />
                  {c}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative h-[360px] overflow-hidden rounded-3xl bg-slate-100 shadow-md ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
              alt="Global community map"
              className="h-full w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0f1c4d]/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
              <div className="flex items-center gap-2 text-[#1d3aa6]">
                <MapPin className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Global Community</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-slate-900">Curators in 80+ countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d3aa6]">FAQs</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm open:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#1d3aa6] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      
      <Footer />
    </div>
  )
}
