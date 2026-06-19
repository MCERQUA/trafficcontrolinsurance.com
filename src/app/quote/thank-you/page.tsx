import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your traffic control insurance request has been received.',
  robots: { index: false },
}

export default function Page() {
  return (
    <section className="bg-brand-light py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-6 font-heading text-4xl font-bold text-brand-navy">Request Received</h1>
        <p className="mt-4 text-lg text-brand-dark/85">Thank you. A licensed traffic control insurance specialist will reach out shortly with your tailored quote. If you need coverage today, call us at 844-967-5247.</p>
        <Link href="/" className="mt-8 inline-block rounded-md bg-brand-orange px-8 py-3 font-heading font-bold text-white hover:bg-orange-600 transition-colors">Back to Home</Link>
      </div>
    </section>
  )
}
