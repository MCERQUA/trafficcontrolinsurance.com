import Image from 'next/image'
import Link from 'next/link'
import {
  Shield, HardHat, Truck, Umbrella, Cone, Wrench, Phone, CheckCircle2,
  AlertTriangle, ClipboardCheck, FileSearch, Star, MapPin, Clock, Award, Users,
} from 'lucide-react'
import Reveal from '@/components/reveal'
import CtaBand from '@/components/cta-band'
import QuoteForm from '@/components/quote-form'
import { SITE } from '@/lib/utils'

const SERVICES = [
  { icon: Shield, title: 'General Liability', href: '/services/general-liability', desc: 'Third-party bodily injury and property damage protection for incidents in active work zones.' },
  { icon: HardHat, title: 'Workers Compensation', href: '/services/workers-comp', desc: 'Coverage built for flaggers, who face one of the highest injury rates in all of construction.' },
  { icon: Truck, title: 'Commercial Auto', href: '/services/commercial-auto', desc: 'Protect pilot cars, arrow board trucks, sign vehicles, and crew vans on and off the road.' },
  { icon: Umbrella, title: 'Umbrella / Excess', href: '/services/umbrella', desc: 'Meet high DOT and prime-contractor insurance minimums with $2M–$10M of excess limits.' },
  { icon: Wrench, title: 'Equipment Coverage', href: '/services/equipment', desc: 'Insure arrow boards, portable signals, message boards, and sign trailers against loss.' },
  { icon: Cone, title: 'Occupational Accident', href: '/quote', desc: 'Flexible injury coverage for 1099 flaggers and subcontracted traffic control crews.' },
]

const COVERS = [
  'Bodily injury to motorists, pedestrians, and other contractors in your work zone',
  'Property damage to vehicles, road equipment, and adjacent property',
  'Flagger injuries from being struck by vehicles entering the work zone',
  'Vehicle accidents involving pilot cars, sign trucks, and crew transport',
  'Theft or damage to arrow boards, cones, signs, and traffic signals',
  'Excess liability to satisfy state DOT and prime-contractor requirements',
  'Completed-operations claims after a project wraps',
  'Defense costs and legal fees from work-zone lawsuits',
]

const STEPS = [
  { icon: FileSearch, title: 'Tell Us About Your Operation', desc: 'Share your crew size, equipment, vehicles, and the DOT contracts you bid on. Takes two minutes.' },
  { icon: ClipboardCheck, title: 'We Match You to the Right Carriers', desc: 'Our specialists shop A-rated carriers that actually understand traffic control and flagging risk.' },
  { icon: CheckCircle2, title: 'Get Covered & Win More Bids', desc: 'Receive your certificate fast, hit DOT insurance minimums, and qualify for bigger projects.' },
]

const STATS = [
  { icon: Users, value: '298+', label: 'Contractors Insured' },
  { icon: MapPin, value: '50', label: 'States Licensed' },
  { icon: Award, value: '20+', label: 'Years Experience' },
  { icon: Clock, value: '15 min', label: 'Quote Turnaround' },
]

const TESTIMONIALS = [
  { name: 'Marcus D.', role: 'Owner, Highway TC Services', quote: 'CCA understood our work-zone exposure better than any agent we had used. They got our GL and umbrella limits up to DOT spec so we could finally bid the big interstate jobs.' },
  { name: 'Renee P.', role: 'Operations Manager, Flagging Co.', quote: 'Our workers comp was killing us until CCA reclassed our flaggers correctly and shopped real traffic control carriers. The savings paid for two new arrow boards.' },
  { name: 'Tyler S.', role: 'President, Roadway Safety LLC', quote: 'A pilot car got rear-ended on a state job. Claim was handled in days, not weeks. These folks know flaggers and they answer the phone.' },
]

const FAQS = [
  { q: 'What states require traffic control companies to carry insurance?', a: 'Effectively all of them. Every state DOT and nearly every prime contractor requires traffic control and flagging subcontractors to carry general liability (often $1M–$2M per occurrence), workers compensation, and commercial auto before you can step onto a job site. Many large interstate contracts also require $2M–$5M in umbrella/excess coverage.' },
  { q: 'Do individual flaggers need their own coverage?', a: 'If flaggers are W-2 employees, they are covered under your workers compensation and general liability policies. If you use 1099 subcontractors, each crew may need its own coverage or occupational accident insurance, and you should require certificates of insurance from any subcontracted flagging crews to avoid gaps.' },
  { q: 'Why is workers comp so expensive for traffic control?', a: 'Flagging is statistically one of the most dangerous jobs in construction because workers stand in live traffic. That drives higher comp class codes and rates. The fix is proper classification, documented safety programs, and shopping carriers that specialize in road and highway work, which is exactly what we do.' },
  { q: 'Does general liability cover a motorist who crashes in my work zone?', a: 'Your general liability responds to third-party bodily injury and property damage claims that arise from your operations, including incidents involving motorists in a work zone you set up. Coverage specifics depend on fault and policy terms, which is why proper limits and an experienced agent matter.' },
  { q: 'Can you cover my arrow boards and traffic equipment?', a: 'Yes. Inland marine / contractors equipment coverage protects arrow boards, portable traffic signals, message boards, sign trailers, and cones against theft, vandalism, and damage, on the job site, in transit, and in storage.' },
  { q: 'How fast can I get a certificate of insurance?', a: 'We turn most quotes around in about 15 minutes and can issue certificates of insurance quickly so you never lose a bid waiting on paperwork. Call us at ' + SITE.phone + ' and we will get moving.' },
]

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. HERO */}
      <section className="relative isolate overflow-hidden">
        <Image src="/images/hero.jpg" alt="Traffic control flaggers working in a road construction zone" fill priority className="object-cover -z-10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/55" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-28 sm:py-36">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-orange/20 px-4 py-1.5 text-sm font-semibold text-brand-yellow ring-1 ring-brand-orange/40">
              <Cone className="h-4 w-4" /> Built for traffic control &amp; flagging contractors
            </span>
            <h1 className="mt-5 font-heading text-4xl sm:text-6xl font-bold text-white text-balance">
              Traffic Control Contractor Insurance
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-200">
              Protect your flaggers, fleet, and company from the industry&apos;s highest-risk exposures, with coverage built by people who understand live-traffic work zones.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="rounded-md bg-brand-orange px-8 py-3.5 text-center font-heading text-base font-bold text-white hover:bg-orange-600 transition-colors">
                Get Free Quote
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="flex items-center justify-center gap-2 rounded-md border-2 border-white px-8 py-3 font-heading text-base font-bold text-white hover:bg-white hover:text-brand-navy transition-colors">
                <Phone className="h-5 w-5" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-brand-navy border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 grid grid-cols-2 md:grid-cols-5 gap-4 text-center text-sm font-semibold text-gray-200">
          {['20+ Years Experience', 'All 50 States Licensed', 'A-Rated Carriers', 'Former Contractor Expertise', '2-Hour Claims Response'].map((t) => (
            <div key={t} className="flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-orange" /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY DIFFERENT */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-3xl">
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">The Difference</span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-brand-navy text-balance">Why Traffic Control Insurance Is Different</h2>
              <p className="mt-4 text-lg text-brand-dark/80">
                Generic contractor policies were never written for crews who stand in live traffic. The risk profile is unique, and so should be your coverage.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: AlertTriangle, title: 'Live-Traffic Exposure', desc: 'Your people work inches from moving vehicles. A single struck-by incident can trigger a seven-figure claim, so your liability and comp limits must be built for it.' },
              { icon: ClipboardCheck, title: 'DOT Compliance Requirements', desc: 'State DOTs and prime contractors mandate specific limits, additional-insured endorsements, and certificates. Miss one and you lose the bid.' },
              { icon: Shield, title: 'High-Frequency Small Claims', desc: 'Damaged signs, sideswiped pilot cars, and minor injuries add up. The right program controls frequency without pricing you out of work.' },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="h-full rounded-xl border border-gray-200 bg-brand-light p-7 hover:border-brand-orange transition-colors">
                  <c.icon className="h-10 w-10 text-brand-orange" />
                  <h3 className="mt-4 font-heading text-xl font-bold text-brand-navy">{c.title}</h3>
                  <p className="mt-2 text-brand-dark/80">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">Coverages</span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-brand-navy">Insurance Built for Your Operation</h2>
              <p className="mt-4 text-lg text-brand-dark/80">Every coverage a traffic control or flagging contractor needs to work, bid, and grow with confidence.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <Link href={s.href} className="group block h-full rounded-xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-md hover:border-brand-orange transition-all">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-navy text-white group-hover:bg-brand-orange transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-2 text-brand-dark/80">{s.desc}</p>
                  <span className="mt-4 inline-block font-semibold text-brand-orange">Learn more →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT WE COVER */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src="/images/work-zone.jpg" alt="Road construction work zone with traffic control" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">What We Cover</span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-brand-navy">Protection Across Every Work-Zone Risk</h2>
              <ul className="mt-6 space-y-3">
                {COVERS.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand-orange mt-0.5" />
                    <span className="text-brand-dark/90">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. PROCESS */}
      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">Simple Process</span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-brand-navy">Three Steps to Getting Covered</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative rounded-xl bg-white border border-gray-200 p-7 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <div className="mt-3 font-heading text-sm font-bold text-brand-orange">STEP {i + 1}</div>
                  <h3 className="mt-1 font-heading text-xl font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-2 text-brand-dark/80">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. STATS */}
      <section className="bg-brand-navy py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div>
                <s.icon className="mx-auto h-8 w-8 text-brand-orange" />
                <div className="mt-3 font-heading text-4xl font-bold text-white">{s.value}</div>
                <div className="mt-1 text-sm text-gray-300">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">Client Results</span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-brand-navy">Trusted by Traffic Control Owners</h2>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <figure className="h-full rounded-xl border border-gray-200 bg-brand-light p-7">
                  <div className="flex gap-1 text-brand-yellow">
                    {Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="h-4 w-4 fill-current" />))}
                  </div>
                  <blockquote className="mt-4 text-brand-dark/90">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="mt-4 font-semibold text-brand-navy">{t.name}<span className="block text-sm font-normal text-brand-dark/70">{t.role}</span></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="text-center">
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">FAQ</span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-brand-navy">Traffic Control Insurance Questions</h2>
            </div>
          </Reveal>
          <div className="mt-10 space-y-4">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group rounded-xl border border-gray-200 bg-white p-6">
                  <summary className="flex cursor-pointer items-center justify-between font-heading text-lg font-semibold text-brand-navy">
                    {f.q}
                    <span className="ml-4 text-brand-orange group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                  </summary>
                  <p className="mt-3 text-brand-dark/80">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA + FORM */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div>
              <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">Get Started</span>
              <h2 className="mt-2 font-heading text-3xl sm:text-4xl font-bold text-brand-navy text-balance">Get Your Free Traffic Control Insurance Quote</h2>
              <p className="mt-4 text-lg text-brand-dark/80">
                Tell us about your crew and equipment. A licensed specialist will build a tailored program and get you a certificate fast, so you never lose a bid to a paperwork delay.
              </p>
              <div className="mt-6 relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image src="/images/cta.jpg" alt="Specialist reviewing traffic control insurance documents" fill className="object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-gray-200 bg-brand-light p-8 shadow-sm">
              <QuoteForm formName="quote" />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
