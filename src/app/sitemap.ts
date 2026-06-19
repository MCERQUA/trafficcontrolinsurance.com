import type { MetadataRoute } from 'next'
import { getPostSlugs } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://trafficcontrolinsurance.com'
  const routes = ['', '/about', '/contact', '/quote', '/blog',
    '/services/general-liability', '/services/workers-comp', '/services/commercial-auto',
    '/services/umbrella', '/services/equipment',
  ].map((r) => ({ url: `${base}${r}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: r === '' ? 1 : 0.8 }))
  const posts = getPostSlugs().map((slug) => ({ url: `${base}/blog/${slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 }))
  return [...routes, ...posts]
}
