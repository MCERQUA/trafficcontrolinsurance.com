import type { Metadata } from 'next'
import ServiceLayout from '@/components/service-layout'

export const metadata: Metadata = {
  title: 'Umbrella & Excess Liability for Traffic Control Contractors',
  description: 'Umbrella and excess liability insurance for traffic control and flagging contractors. Meet $2M–$10M DOT and prime-contractor requirements. Licensed in all 50 states.',
  alternates: { canonical: 'https://trafficcontrolinsurance.com/services/umbrella' },
}

export default function Page() {
  return (
    <ServiceLayout
      eyebrow="Higher Limits"
      title="Umbrella & Excess Liability for Traffic Control Contractors"
      intro="The big DOT and design-build contracts require big limits. Umbrella coverage stacks on top of your liability policies so you can satisfy high insurance minimums and protect your company from catastrophic claims."
      image="/images/work-zone.jpg"
      imageAlt="Large road construction work zone"
      bullets={[
        'Excess limits from $1M up to $10M+',
        'Sits over general liability and auto',
        'Sits over employer liability (workers comp)',
        'Satisfies DOT and GC contract minimums',
        'Protects against catastrophic work-zone claims',
        'Often required for interstate and bridge work',
      ]}
      sections={[
        {
          heading: 'Why traffic control work demands higher limits',
          body: [
            'A standard $1 million general liability limit feels like a lot, until you consider what a single catastrophic work-zone event can cost. A multi-vehicle collision in your lane closure that seriously injures several motorists can produce claims well into the millions, far beyond a primary policy. Umbrella (or excess) liability provides an additional layer of coverage that sits on top of your general liability, commercial auto, and employer liability policies and pays once those underlying limits are exhausted.',
            'For traffic control contractors, umbrella coverage is rarely optional. State DOTs, toll authorities, and large prime contractors routinely require $2 million, $5 million, or even $10 million in combined limits before awarding interstate, bridge, or design-build work. The umbrella is how you reach those numbers affordably without buying enormous primary policies.',
          ],
        },
        {
          heading: 'How umbrella coverage actually works',
          body: [
            'Think of your insurance as layers. Your primary general liability and auto policies are the first layer. When a covered claim exceeds those limits, the umbrella drops down and covers the excess, up to its own limit. So a $1 million GL policy plus a $4 million umbrella gives you $5 million of total protection for a single catastrophic claim, at a fraction of what a standalone $5 million primary policy would cost.',
            'The umbrella also broadens protection in some cases, picking up certain claims that pierce the underlying limits across multiple policies. For a traffic control company exposed to severe-injury liability every single shift, that extra capacity is the difference between a survivable claim and a company-ending one.',
          ],
        },
        {
          heading: 'Matching limits to your contracts',
          body: [
            'The right umbrella limit is a moving target that depends on the contracts you bid. We review your project pipeline and the insurance requirements buried in each contract, then structure an umbrella that satisfies your largest opportunities without overpaying on smaller jobs. As you grow into bigger DOT and interstate work, we scale your limits with you.',
            'Because the umbrella sits over your underlying policies, the carriers want clean, properly placed primary coverage beneath it. That is where our full-program approach pays off: we build your GL, auto, and comp correctly so your umbrella prices well and responds when you need it. Request a free quote and we will identify exactly what limits your next contract requires.',
          ],
        },
      ]}
    />
  )
}
