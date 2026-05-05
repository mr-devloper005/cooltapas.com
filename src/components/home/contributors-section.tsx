'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProfileCard } from '@/components/shared/cards'
import { fetchTaskPosts } from '@/lib/task-data'
import { useState, useEffect } from 'react'

export function ContributorsSection() {
  const [contributors, setContributors] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadContributors = async () => {
      try {
        // Fetch posts from different task types to extract unique authors
        const [listings, articles, classifieds] = await Promise.all([
          fetchTaskPosts('listing', 100),
          fetchTaskPosts('article', 100),
          fetchTaskPosts('classified', 100)
        ])
        
        // Extract unique authors from real posts
        const allPosts = [...listings, ...articles, ...classifieds]
        const authorMap = new Map()
        
        allPosts.forEach(post => {
          const authorName = post.authorName || 'Anonymous'
          if (!authorMap.has(authorName)) {
            authorMap.set(authorName, {
              id: authorName.toLowerCase().replace(/\s+/g, '-'),
              name: authorName,
              avatar: `/placeholder-avatar-${authorName.length}.jpg`,
              isVerified: true,
              postsCount: 0
            })
          }
          authorMap.get(authorName).postsCount++
        })
        
        const contributorsList = Array.from(authorMap.values())
          .sort((a, b) => b.postsCount - a.postsCount)
          .slice(0, 4) // Top 4 contributors
          
        setContributors(contributorsList)
      } catch (error) {
        console.error('Failed to load contributors:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadContributors()
  }, [])

  if (loading) {
    return <div>Loading contributors...</div>
  }

  if (contributors.length === 0) {
    return null
  }

  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Top Contributors
            </h2>
            <p className="mt-2 text-muted-foreground">
              Meet the voices shaping our community
            </p>
          </div>
          <Button variant="ghost" asChild className="hidden sm:flex">
            <Link href="/community">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contributors.map((user: any) => (
            <ProfileCard key={user.id} user={user} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link href="/community">
              View All Contributors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
