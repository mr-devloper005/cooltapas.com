export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 's9edg61w6f',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Cooltapas',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Social Bookmarking platform',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A social bookmarking platform for curated links, saved resources, and organized discovery.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'cooltapas.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://cooltapas.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const

