import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar } from 'lucide-react'
import { getPostSlugs, getAllPosts } from '@/lib/blog'
import CtaBand from '@/components/cta-band'

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getAllPosts().find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://trafficcontrolinsurance.com/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = getAllPosts().find((p) => p.slug === slug)
  if (!meta) notFound()

  let Post: React.ComponentType
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`)
    Post = mod.default
  } catch {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.excerpt,
    datePublished: meta.date,
    author: { '@type': 'Organization', name: 'Contractors Choice Agency' },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:underline"><ArrowLeft className="h-4 w-4" /> All articles</Link>
          <h1 className="mt-5 font-heading text-4xl font-bold text-brand-navy text-balance">{meta.title}</h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-brand-dark/60"><Calendar className="h-4 w-4" />{new Date(meta.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} · {meta.readingTime}</div>
          <div className="prose prose-lg mt-8 max-w-none prose-headings:font-heading prose-headings:text-brand-navy prose-a:text-brand-orange prose-strong:text-brand-navy">
            <Post />
          </div>
        </div>
      </article>
      <CtaBand />
    </>
  )
}
