import type { Metadata } from 'next'
import QuoteForm from '@/components/quote-form'
import { Phone, Clock, ShieldCheck, MapPin } from 'lucide-react'
import { SITE } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Get a Free Traffic Control Insurance Quote',
  description: 'Request a free, no-obligation traffic control insurance quote. General liability, workers comp, commercial auto, umbrella, and equipment coverage for flagging contractors.',
  alternates: { canonical: 'https://trafficcontrolinsurance.com/quote' },
}

export default function Page() {
  const perks = [
    { icon: Clock, text: '15-minute quote turnaround' },
    { icon: ShieldCheck, text: 'A-rated carriers, no obligation' },
    { icon: MapPin, text: 'Licensed in all 50 states' },
  ]
  return (
    <section className="bg-brand-light py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-10 lg:grid-cols-2">
        <div>
          <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">Free Quote</span>
          <h1 className="mt-2 font-heading text-4xl font-bold text-brand-navy text-balance">Get Your Traffic Control Insurance Quote</h1>
          <p className="mt-4 text-lg text-brand-dark/85">Tell us about your crew, vehicles, and equipment. A licensed specialist will build a tailored program and respond within one business hour, often faster.</p>
          <ul className="mt-6 space-y-3">
            {perks.map((p) => (
              <li key={p.text} className="flex items-center gap-3 text-brand-dark"><p.icon className="h-5 w-5 text-brand-orange" />{p.text}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-xl bg-brand-navy p-6 text-white">
            <p className="font-semibold">Prefer to talk it through?</p>
            <a href={`tel:${SITE.phoneRaw}`} className="mt-2 flex items-center gap-2 font-heading text-2xl font-bold text-brand-orange"><Phone className="h-6 w-6" /> {SITE.phone}</a>
          </div>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <QuoteForm formName="quote" />
        </div>
      </div>
    </section>
  )
}
