import type { Metadata } from 'next'
import ContactForm from '@/components/contact-form'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { SITE } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact Our Traffic Control Insurance Team',
  description: 'Contact Contractors Choice Agency for traffic control and flagging contractor insurance. Call 844-967-5247 or send us a message. Licensed in all 50 states.',
  alternates: { canonical: 'https://trafficcontrolinsurance.com/contact' },
}

export default function Page() {
  const items = [
    { icon: Phone, label: 'Phone', value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
    { icon: Mail, label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
    { icon: MapPin, label: 'Office', value: '12220 E Riggs Rd, Chandler, AZ 85249' },
    { icon: Clock, label: 'Claims', value: '24/7 reporting, 2-hour response' },
  ]
  return (
    <section className="bg-brand-light py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid gap-10 lg:grid-cols-2">
        <div>
          <span className="font-heading text-sm font-bold uppercase tracking-wider text-brand-orange">Contact</span>
          <h1 className="mt-2 font-heading text-4xl font-bold text-brand-navy text-balance">Talk to a Traffic Control Insurance Specialist</h1>
          <p className="mt-4 text-lg text-brand-dark/85">Have a question about coverage, a certificate request, or a renewal? Reach out and a real specialist will help, no call centers.</p>
          <ul className="mt-8 space-y-5">
            {items.map((it) => (
              <li key={it.label} className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy text-white"><it.icon className="h-5 w-5" /></div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wide text-brand-orange">{it.label}</div>
                  {it.href ? <a href={it.href} className="text-brand-navy font-semibold hover:text-brand-orange break-all">{it.value}</a> : <div className="text-brand-navy font-semibold">{it.value}</div>}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
