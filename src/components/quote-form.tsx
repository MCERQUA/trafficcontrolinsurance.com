'use client'
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

export default function QuoteForm({ formName = 'quote' }: { formName?: string }) {
  const [submitted, setSubmitted] = useState(false)
  const fields = [
    { name: 'name', label: 'Full Name', type: 'text', required: true },
    { name: 'businessName', label: 'Business Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'tel', required: true },
  ]

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 font-heading text-2xl font-bold text-brand-navy">Request Received</h3>
        <p className="mt-2 text-brand-dark">
          Thanks. A licensed CCA specialist will reach out within one business hour with your traffic control insurance quote.
        </p>
      </div>
    )
  }

  return (
    <form
      name={formName}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={() => setSubmitted(true)}
      action="/quote/thank-you"
      className="grid gap-4 sm:grid-cols-2"
    >
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>Don&apos;t fill this out: <input name="bot-field" /></label>
      </p>
      {fields.map((f) => (
        <div key={f.name} className={f.name === 'message' ? 'sm:col-span-2' : ''}>
          <label className="block text-sm font-semibold text-brand-navy mb-1">{f.label}</label>
          <input
            type={f.type}
            name={f.name}
            required={f.required}
            className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
          />
        </div>
      ))}
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-1">State</label>
        <input type="text" name="state" required className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-1">Company Type</label>
        <select name="companyType" className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange">
          <option>Traffic Control Company</option>
          <option>Flagging Contractor</option>
          <option>Both</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-1">Number of Flaggers</label>
        <input type="number" name="numberOfFlaggers" min="0" className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange" />
      </div>
      <div>
        <label className="block text-sm font-semibold text-brand-navy mb-1">Years in Business</label>
        <input type="number" name="yearsInBusiness" min="0" className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange" />
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-brand-navy mb-1">Tell us about your operation</label>
        <textarea name="message" rows={4} className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange" />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" className="w-full rounded-md bg-brand-orange px-6 py-3 font-heading text-base font-bold text-white hover:bg-orange-600 transition-colors">
          Get My Free Quote
        </button>
        <p className="mt-2 text-xs text-gray-500 text-center">No obligation. A licensed specialist responds within one business hour.</p>
      </div>
    </form>
  )
}
