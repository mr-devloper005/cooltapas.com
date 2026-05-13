'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ListingCard } from '@/components/shared/cards'
import { useMemo } from 'react'
import { loadFromStorage, storageKeys } from '@/lib/local-storage'
import type { Listing } from '@/types'

export function FeaturedListings() {
  const featuredListings = useMemo(
    () => loadFromStorage<Listing[]>(storageKeys.listings, []).slice(0, 4),
    []
  )
  if (!featuredListings.length) return null

  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Featured Listings
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discover top-rated businesses and services
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link href="/listings">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link href="/listings">
              View All Listings
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
