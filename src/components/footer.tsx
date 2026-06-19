import Link from 'next/link'
import { Phone, Mail, MapPin, Cone } from 'lucide-react'
import { SITE } from '@/lib/utils'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-200">
      <div className="h-2 chevron-stripe" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-heading text-lg font-bold text-white">
            <Cone className="h-6 w-6 text-brand-orange" /> TrafficControlInsurance
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Specialized insurance for traffic control companies and flagging contractors, powered by {SITE.agency}.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-white font-semibold mb-3">Coverages</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/services/general-liability" className="hover:text-brand-orange">General Liability</Link></li>
            <li><Link href="/services/workers-comp" className="hover:text-brand-orange">Workers Compensation</Link></li>
            <li><Link href="/services/commercial-auto" className="hover:text-brand-orange">Commercial Auto</Link></li>
            <li><Link href="/services/umbrella" className="hover:text-brand-orange">Umbrella / Excess</Link></li>
            <li><Link href="/services/equipment" className="hover:text-brand-orange">Equipment Coverage</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-brand-orange">About</Link></li>
            <li><Link href="/blog" className="hover:text-brand-orange">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-brand-orange">Contact</Link></li>
            <li><Link href="/quote" className="hover:text-brand-orange">Get a Quote</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-orange" /><a href={`tel:${SITE.phoneRaw}`} className="hover:text-brand-orange">{SITE.phone}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-orange" /><a href={`mailto:${SITE.email}`} className="hover:text-brand-orange break-all">{SITE.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-brand-orange mt-0.5" /><span>12220 E Riggs Rd, Chandler, AZ 85249</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} {SITE.agency}. Licensed in all 50 states. NPN 8608479. All rights reserved.
      </div>
    </footer>
  )
}
