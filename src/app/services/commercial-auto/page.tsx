import type { Metadata } from 'next'
import ServiceLayout from '@/components/service-layout'

export const metadata: Metadata = {
  title: 'Commercial Auto Insurance for Traffic Control Fleets',
  description: 'Commercial auto insurance for traffic control companies. Covers pilot cars, arrow board trucks, sign vehicles, crew vans, and hired/non-owned auto. All 50 states.',
  alternates: { canonical: 'https://trafficcontrolinsurance.com/services/commercial-auto' },
}

export default function Page() {
  return (
    <ServiceLayout
      eyebrow="Fleet Coverage"
      title="Commercial Auto Insurance for Traffic Control Fleets"
      intro="Your vehicles are rolling work zones. Commercial auto protects the pilot cars, arrow board trucks, sign vehicles, and crew vans that keep your traffic control operation moving."
      image="/images/commercial-auto.jpg"
      imageAlt="Fleet of traffic control company trucks"
      bullets={[
        'Pilot and escort vehicle coverage',
        'Arrow board and attenuator trucks',
        'Sign trucks and message-board vehicles',
        'Crew vans and pickup transport',
        'Hired and non-owned auto liability',
        'Physical damage, collision, and comprehensive',
      ]}
      sections={[
        {
          heading: 'Traffic control vehicles carry unusual risk',
          body: [
            'A traffic control fleet is unlike a typical contractor fleet. Your vehicles do not just drive to the job, they often are the job. Pilot cars lead motorists through active work zones. Attenuator and arrow board trucks park directly in the line of traffic specifically to absorb impacts and protect the crew behind them. Sign trucks make frequent stops on shoulders and in live lanes. Each of these operations dramatically increases the odds of a collision compared to ordinary commercial driving.',
            'Because these vehicles spend so much time stationary in or near traffic, they are struck far more often than they strike. A rear-ended attenuator truck, a sideswiped pilot car, or a sign vehicle clipped on the shoulder can generate both expensive physical-damage claims and serious liability exposure if your driver or passengers are injured. Commercial auto coverage responds to all of it.',
          ],
        },
        {
          heading: 'What your commercial auto policy should cover',
          body: [
            'A complete traffic control auto program includes liability for bodily injury and property damage you cause to others, physical damage (collision and comprehensive) to repair or replace your own specialized vehicles, and uninsured/underinsured motorist coverage, which is critical given how often work-zone crashes involve at-fault drivers with minimal insurance. Specialized vehicles like attenuator trucks can be expensive to replace, so agreed-value or properly stated limits matter.',
            'Just as important is hired and non-owned auto coverage. When your employees run to the supply yard in their own truck, or you rent a vehicle for a big project, hired and non-owned auto protects your company from liability arising out of those vehicles. Many traffic control firms discover this gap only after an employee causes an accident in a personal vehicle while on company business, when it is too late.',
          ],
        },
        {
          heading: 'How we keep fleet premiums under control',
          body: [
            'Commercial auto is one of the hardest insurance markets in the country right now, and traffic control fleets feel it acutely. We control your cost by placing coverage with carriers that understand work-zone operations, structuring deductibles intelligently, and helping you implement the fleet-safety practices underwriters reward: telematics, driver vetting, defensive-driving training, and documented vehicle maintenance.',
            'We also make sure your auto limits satisfy DOT and prime-contractor requirements, which frequently demand $1 million combined single limit and sometimes more on larger jobs. Combined with an umbrella policy, your commercial auto coverage keeps you compliant and competitive on every bid. Contact us for a free fleet review and quote.',
          ],
        },
      ]}
    />
  )
}
