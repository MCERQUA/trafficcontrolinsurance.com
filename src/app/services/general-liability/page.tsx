import type { Metadata } from 'next'
import ServiceLayout from '@/components/service-layout'

export const metadata: Metadata = {
  title: 'General Liability Insurance for Traffic Control Companies',
  description: 'General liability insurance for traffic control and flagging contractors. Covers third-party bodily injury, property damage, and work-zone claims. Licensed in all 50 states.',
  alternates: { canonical: 'https://trafficcontrolinsurance.com/services/general-liability' },
}

export default function Page() {
  return (
    <ServiceLayout
      eyebrow="Core Coverage"
      title="General Liability Insurance for Traffic Control Companies"
      intro="The foundation of every traffic control program. General liability protects your company when a third party is injured or their property is damaged because of your work-zone operations."
      image="/images/general-liability.jpg"
      imageAlt="Insurance documents on a desk"
      bullets={[
        'Third-party bodily injury in your work zone',
        'Property damage to vehicles and structures',
        'Completed-operations claims after a project',
        'Personal and advertising injury',
        'Legal defense costs and settlements',
        'Additional-insured endorsements for GCs and DOTs',
      ]}
      sections={[
        {
          heading: 'Why traffic control contractors need general liability',
          body: [
            'General liability (GL) is the single most requested policy on any road or highway project. Before a state DOT, municipality, or prime contractor lets your crew set a single cone, they require proof of GL coverage, typically $1 million per occurrence and $2 million aggregate, with the project owner and general contractor named as additional insureds. Without it, you simply cannot bid the work.',
            'But for traffic control and flagging contractors, GL is far more than a paperwork requirement. Your crews create and manage the conditions that thousands of motorists drive through every day. When a driver clips a sign you placed, a pedestrian trips on a channelizing device, or a motorist claims your lane closure caused a collision, the resulting bodily injury and property damage claims land on your general liability policy.',
          ],
        },
        {
          heading: 'What work-zone claims actually look like',
          body: [
            'A typical traffic control GL claim is rarely simple. Consider a nighttime lane closure on a state highway: a motorist enters the taper too fast, strikes an attenuator truck, and is seriously injured. The driver sues everyone on the project, including your company, alleging the taper was too short or the signs were poorly placed. Defending that claim, even when you did everything right, can cost tens of thousands of dollars in legal fees alone. Your GL policy pays those defense costs and any covered settlement, up to your limits.',
            'Property damage claims are even more common. Vehicles sideswipe arrow boards, run over cones, or back into sign trailers. Adjacent businesses claim your setup blocked access and cost them revenue. Each of these is a potential GL claim, and the high frequency of small incidents in this trade is exactly why you need a carrier that understands traffic control rather than a generic contractor policy.',
          ],
        },
        {
          heading: 'How we build the right GL program',
          body: [
            'Generic contractor GL policies frequently contain exclusions that gut coverage for traffic control work, such as exclusions for work performed on public roadways, for injury to the motoring public, or for operations at height. Our team reviews every quote for these landmines before you sign. We place coverage with A-rated carriers who specifically underwrite road, highway, and traffic safety contractors and who will not deny a claim because flagging falls outside their appetite.',
            'We also make sure your limits and endorsements match the contracts you bid. Many DOT and design-build projects now require $2 million per occurrence, primary and non-contributory wording, and waivers of subrogation. We handle all of it and issue certificates of insurance fast, so a missing endorsement never costs you a job. Get a free quote today and we will benchmark your current GL against the contracts you are chasing.',
          ],
        },
      ]}
    />
  )
}
