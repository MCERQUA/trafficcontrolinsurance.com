import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Phone } from 'lucide-react'
import Reveal from '@/components/reveal'
import CtaBand from '@/components/cta-band'
import { SITE } from '@/lib/utils'

type Section = { heading: string; body: string[] }

export default function ServiceLayout({
  eyebrow, title, intro, image, imageAlt, bullets, sections,
}: {
  eyebrow: string
  title: string
  intro: string
  image: string
  imageAlt: string
  bullets: string[]
  sections: Section[]
}) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy">
        <Image src={image} alt={imageAlt} fill className="object-cover -z-10 opacity-25" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
          <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">{eyebrow}</span>
          <h1 className="mt-2 font-heading text-4xl sm:text-5xl font-bold text-white text-balance max-w-3xl">{title}</h1>
          <p className="mt-5 text-lg text-gray-200 max-w-2xl">{intro}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/quote" className="rounded-md bg-brand-orange px-8 py-3.5 text-center font-heading font-bold text-white hover:bg-orange-600 transition-colors">Get Free Quote</Link>
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-3 font-heading font-bold text-white hover:bg-white hover:text-brand-navy transition-colors"><Phone className="h-5 w-5" /> {SITE.phone}</a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-xl border border-gray-200 bg-brand-light p-7">
              <h2 className="font-heading text-2xl font-bold text-brand-navy">What This Coverage Includes</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand-orange mt-0.5" />
                    <span className="text-brand-dark/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="mt-12 space-y-10">
            {sections.map((s, i) => (
              <Reveal key={s.heading} delay={i * 0.05}>
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brand-navy">{s.heading}</h2>
                  {s.body.map((p, j) => (
                    <p key={j} className="mt-4 text-lg leading-relaxed text-brand-dark/85">{p}</p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
