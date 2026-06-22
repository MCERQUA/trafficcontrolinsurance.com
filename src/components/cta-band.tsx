import Link from 'next/link'
import { Phone } from 'lucide-react'
import { SITE } from '@/lib/utils'

export default function CtaBand() {
  return (
    <section className="bg-brand-navy">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance">
          Protect Your Crew, Fleet &amp; Contracts
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Get a tailored traffic control insurance quote from specialists who understand work-zone risk. Fast, no-obligation, all 50 states.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/quote" className="rounded-md bg-brand-orange px-8 py-3.5 font-heading text-base font-bold text-white hover:bg-orange-600 transition-colors">
            Get Free Quote
          </Link>
          <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-2 rounded-md border-2 border-white px-8 py-3 font-heading text-base font-bold text-white hover:bg-white hover:text-brand-navy transition-colors">
            <Phone className="h-5 w-5" /> {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
