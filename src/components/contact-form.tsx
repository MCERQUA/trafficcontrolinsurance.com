'use client'
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 font-heading text-2xl font-bold text-brand-navy">Message Sent</h3>
        <p className="mt-2 text-brand-dark">We will be in touch shortly.</p>
      </div>
    )
  }
  return (
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/quote/thank-you" onSubmit={() => setSubmitted(true)} className="grid gap-4">
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden"><label>Skip: <input name="bot-field" /></label></p>
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-1">Name</label>
        <input type="text" name="name" required className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-1">Email</label>
        <input type="email" name="email" required className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-1">Phone</label>
        <input type="tel" name="phone" className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-1">Message</label>
        <textarea name="message" rows={5} required className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange" />
      </div>
      <button type="submit" className="rounded-md bg-brand-orange px-6 py-3 font-heading font-bold text-white hover:bg-orange-600 transition-colors">Send Message</button>
    </form>
  )
}
