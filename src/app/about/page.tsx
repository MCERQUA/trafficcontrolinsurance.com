import type { Metadata } from 'next'
import Image from 'next/image'
import Reveal from '@/components/reveal'
import CtaBand from '@/components/cta-band'
import { Award, Users, ShieldCheck, HeartHandshake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Our Traffic Control Insurance Specialists',
  description: 'Contractors Choice Agency provides specialized insurance for traffic control and flagging contractors. Former-contractor expertise, A-rated carriers, licensed in all 50 states.',
  alternates: { canonical: 'https://trafficcontrolinsurance.com/about' },
}

export default function Page() {
  const values = [
    { icon: ShieldCheck, title: 'We Know Work-Zone Risk', desc: 'We were founded by a former contractor. We understand live-traffic exposure, taper math, and DOT requirements because we have lived the work.' },
    { icon: Award, title: 'A-Rated Carriers Only', desc: 'We place your coverage with financially strong carriers who actually underwrite road, highway, and traffic safety contractors.' },
    { icon: Users, title: '298+ Contractors Served', desc: 'We protect hundreds of specialty contractors nationwide, with deep roots in the trades that work alongside live traffic.' },
    { icon: HeartHandshake, title: 'We Answer the Phone', desc: 'Two-hour claims response and a real person who knows your account. No call centers, no runaround.' },
  ]
  return (
    <>
      <section className="bg-brand-navy py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">About Us</span>
          <h1 className="mt-2 font-heading text-4xl sm:text-5xl font-bold text-white max-w-3xl text-balance">Insurance Specialists Who Understand Traffic Control</h1>
          <p className="mt-5 text-lg text-gray-200 max-w-2xl">Traffic Control Insurance is powered by Contractors Choice Agency, a contractor-founded insurance firm protecting specialty trades for over two decades.</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image src="/images/training.jpg" alt="Traffic control safety training" fill className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="font-heading text-3xl font-bold text-brand-navy">Built by a Contractor, for Contractors</h2>
              <p className="mt-4 text-lg text-brand-dark/85">Our founder, Josh Cotner, spent years in the field before becoming an insurance specialist. That insider perspective is why we get the things generic agents miss, the difference between a flagger and a pilot car operator, why your experience mod spiked after one struck-by claim, and exactly which endorsements a state DOT contract demands.</p>
              <p className="mt-4 text-lg text-brand-dark/85">We have spent more than 20 years building insurance programs for the highest-risk specialty trades. Today we are licensed in all 50 states and serve nearly 300 contractors, with a focus on the road and highway trades where getting coverage right is a matter of safety, compliance, and survival.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-xl border border-gray-200 bg-white p-7">
                  <v.icon className="h-10 w-10 flex-shrink-0 text-brand-orange" />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-brand-navy">{v.title}</h3>
                    <p className="mt-2 text-brand-dark/80">{v.desc}</p>
                  </div>
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
