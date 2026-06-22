import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { getAllPosts } from '@/lib/blog'
import Reveal from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Traffic Control Insurance Blog & Resources',
  description: 'Expert guidance on traffic control and flagging contractor insurance: DOT requirements, flagger liability, workers compensation, and more.',
  alternates: { canonical: 'https://trafficcontrolinsurance.com/blog' },
}

export default function Page() {
  const posts = getAllPosts()
  return (
    <section className="bg-brand-light py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">Resources</span>
        <h1 className="mt-2 font-heading text-4xl font-bold text-brand-navy">Traffic Control Insurance Insights</h1>
        <p className="mt-4 text-lg text-brand-dark/85 max-w-2xl">Practical guidance on coverage, compliance, and protecting your crew, written for traffic control and flagging contractors.</p>
        <div className="mt-12 grid gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <Link href={`/blog/${p.slug}`} className="group block rounded-xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-md hover:border-brand-orange transition-all">
                <div className="flex flex-wrap items-center gap-4 text-sm text-brand-dark/60">
                  <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{p.readingTime}</span>
                </div>
                <h2 className="mt-3 font-heading text-2xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors">{p.title}</h2>
                <p className="mt-2 text-brand-dark/80">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-semibold text-brand-orange">Read article <ArrowRight className="h-4 w-4" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
