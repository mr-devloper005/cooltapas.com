'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Monitor,
  Palette,
  Briefcase,
  Heart,
  UtensilsCrossed,
  Wrench,
  Smartphone,
  Home,
  Bike,
  Building
} from 'lucide-react'
import { fetchTaskPosts } from '@/lib/task-data'
import { useState, useEffect } from 'react'

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Palette,
  Briefcase,
  Heart,
  UtensilsCrossed,
  Wrench,
  Smartphone,
  Home,
  Bike,
  Building
}

export function CategorySection() {
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadCategories = async () => {
      try {
        // For categories, we'll fetch from different task types to build a real category list
        const [listings, articles, classifieds] = await Promise.all([
          fetchTaskPosts('listing', 100),
          fetchTaskPosts('article', 100),
          fetchTaskPosts('classified', 100)
        ])
        
        // Extract unique categories from real posts
        const allPosts = [...listings, ...articles, ...classifieds]
        const categoryMap = new Map()
        
        allPosts.forEach(post => {
          const category = post.content?.category || 'General'
          if (categoryMap.has(category)) {
            categoryMap.set(category, categoryMap.get(category) + 1)
          } else {
            categoryMap.set(category, 1)
          }
        })
        
        const categoryList = Array.from(categoryMap.entries())
          .map(([name, count], index) => ({
            id: index.toString(),
            name,
            slug: name.toLowerCase().replace(/\s+/g, '-'),
            count,
            icon: 'Monitor' // Default icon
          }))
          .slice(0, 10) // Limit to 10 categories
          
        setCategories(categoryList)
      } catch (error) {
        console.error('Failed to load categories:', error)
      } finally {
        setLoading(false)
      }
    }
    
    loadCategories()
  }, [])

  if (loading) {
    return <div>Loading categories...</div>
  }

  if (categories.length === 0) {
    return null
  }
  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Explore Categories
          </h2>
          <p className="mt-2 text-muted-foreground">
            Browse through our diverse range of content and listings
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((category: any, index: number) => {
            const Icon = iconMap[category.icon] || Monitor
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={`/search?category=${category.slug}`}
                  className="group flex flex-col items-center rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:bg-secondary"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-accent/10">
                    <Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {category.name}
                  </span>
                  <span className="mt-1 text-xs text-muted-foreground">
                    {category.count} items
                  </span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
