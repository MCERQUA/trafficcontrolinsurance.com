'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, Cone } from 'lucide-react'
import { SITE } from '@/lib/utils'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/services/general-liability', label: 'General Liability' },
  { href: '/services/workers-comp', label: 'Workers Comp' },
  { href: '/services/commercial-auto', label: 'Commercial Auto' },
  { href: '/services/umbrella', label: 'Umbrella' },
  { href: '/services/equipment', label: 'Equipment' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-heading text-xl font-bold text-brand-navy">
            <Cone className="h-7 w-7 text-brand-orange" />
            <span>Traffic Control<span className="text-brand-orange">Insurance</span></span>
          </Link>
          <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold text-brand-dark">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-brand-orange transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="flex items-center gap-1.5 text-sm font-bold text-brand-navy">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
            <Link href="/quote" className="rounded-md bg-brand-orange px-4 py-2 text-sm font-bold text-white hover:bg-orange-600 transition-colors">
              Get Free Quote
            </Link>
          </div>
          <button className="lg:hidden text-brand-navy" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-sm font-semibold text-brand-dark">
              {n.label}
            </Link>
          ))}
          <Link href="/quote" onClick={() => setOpen(false)} className="block rounded-md bg-brand-orange px-4 py-2 text-center text-sm font-bold text-white">
            Get Free Quote
          </Link>
          <a href={`tel:${SITE.phoneRaw}`} className="block text-center text-sm font-bold text-brand-navy">{SITE.phone}</a>
        </div>
      )}
    </header>
  )
}
