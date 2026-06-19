import type { Metadata } from 'next'
import { Oswald, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import dynamic from 'next/dynamic'
import { SITE } from '@/lib/utils'

const LenisProvider = dynamic(() => import('@/components/lenis-provider'))

const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-oswald' })
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Traffic Control Insurance | Coverage for Flagging Contractors',
    template: '%s | Traffic Control Insurance',
  },
  description:
    'Specialized insurance for traffic control companies and flagging contractors. General liability, workers comp, commercial auto, umbrella, and equipment coverage. Licensed in all 50 states.',
  keywords: ['traffic control insurance', 'flagging contractor insurance', 'flagger insurance', 'DOT traffic control insurance', 'work zone insurance'],
  openGraph: {
    title: 'Traffic Control Insurance | Coverage for Flagging Contractors',
    description: 'Specialized insurance for traffic control and flagging contractors. Licensed in all 50 states.',
    url: SITE.url,
    siteName: 'Traffic Control Insurance',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1024, height: 1024 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traffic Control Insurance',
    description: 'Specialized insurance for traffic control and flagging contractors.',
    images: ['/images/hero.jpg'],
  },
  alternates: { canonical: SITE.url },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['InsuranceAgency', 'LocalBusiness', 'Organization'],
    name: 'Traffic Control Insurance by Contractors Choice Agency',
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/images/hero.jpg`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '12220 E Riggs Rd',
      addressLocality: 'Chandler',
      addressRegion: 'AZ',
      postalCode: '85249',
      addressCountry: 'US',
    },
    areaServed: 'United States',
    description: 'Specialized insurance for traffic control companies and flagging contractors.',
  }
  return (
    <html lang="en" className={`${oswald.variable} ${openSans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
