'use client'
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=trafficcontrolinsurance.com`

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [failed, setFailed] = useState(false)
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
    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/quote/thank-you" onSubmit={async (e) => {
      e.preventDefault()
      // A lead is captured if a delivery channel ACCEPTED it. fetch() does not reject
      // on a 4xx/5xx, so each response status has to be inspected explicitly.
      let captured = false;
      const form = e.currentTarget
      const formData = Object.fromEntries(new FormData(form).entries()) as Record<string, string>
      try {
        captured = (await fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ form_name: 'contact', source: 'trafficcontrolinsurance.com', ...formData }) })).ok || captured
      } catch {}
      try {
        captured = (await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(formData).toString() })).ok || captured
      } catch {}
      setFailed(!captured);
      setSubmitted(captured);
    }} className="grid gap-4">
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
      {failed && (
        <div role="alert" className="sm:col-span-2 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
          That did not send &mdash; your details are still here, nothing was lost. Please try
          again, or call us at{" "}
          <a href="tel:8449675247" className="font-semibold underline">844-967-5247</a>.
        </div>
      )}

      <button type="submit" className="rounded-md bg-brand-orange px-6 py-3 font-heading font-bold text-white hover:bg-orange-600 transition-colors">Send Message</button>
    </form>
  )
}
