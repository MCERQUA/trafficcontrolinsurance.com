'use client'
import { QuoteForm, type LegacyQuestion } from '@/components/quote/QuoteForm'

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=trafficcontrolinsurance.com`

const TRAFFIC_TYPES = ['Traffic Control Company', 'Flagging Contractor', 'Both']

// Pre-port field names with no canonical twin: still posted under their own names (optional).
const LEGACY: LegacyQuestion[] = [
  { name: 'numberOfFlaggers', label: 'Number of flaggers', type: 'number' },
  { name: 'yearsInBusiness', label: 'Years in business', type: 'number' },
]

// Pre-port names that mirror a canonical answer the shared form already asks: derived, never asked twice.
const deriveLegacy = (d: Record<string, string>): Record<string, string> => ({
  streetAddress: d.address ?? '',
  annualRevenue: d.lastGrossSales ?? '',
  largestProjectValue: d.lastLargestJobAmount ?? '',
})

export default function TrafficQuoteForm() {
  return (
    <QuoteForm
      formName="quote"
      tradeName="Traffic Control"
      endpoint={WEBHOOK_URL}
      format="json"
      netlifyFallback="/__forms.html"
      extraFields={{ form_name: 'quote', source: 'trafficcontrolinsurance.com' }}
      options={{ yn: true }}
      tradeTypeOptions={TRAFFIC_TYPES}
      defaults={{ coverageTypes: 'General Liability' }}
      legacyQuestions={LEGACY}
      deriveLegacy={deriveLegacy}
      onSuccess={() => { window.location.href = '/quote/thank-you' }}
      classes={{
        input: 'w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange',
        label: 'block text-sm font-semibold text-brand-asphalt mb-1',
        legend: 'block text-sm font-semibold text-brand-asphalt mb-1',
        heading: 'font-heading text-lg font-bold text-brand-asphalt border-b border-gray-200 pb-2',
        button: 'w-full rounded-md bg-brand-orange px-6 py-3 font-heading text-base font-bold text-white hover:bg-orange-600 transition-colors disabled:opacity-50',
      }}
    />
  )
}
