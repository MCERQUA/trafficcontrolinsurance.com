import type { Metadata } from 'next'
import ServiceLayout from '@/components/service-layout'

export const metadata: Metadata = {
  title: 'Equipment Insurance for Traffic Control Companies',
  description: 'Contractors equipment insurance for traffic control firms. Covers arrow boards, portable traffic signals, message boards, sign trailers, and cones against theft and damage.',
  alternates: { canonical: 'https://trafficcontrolinsurance.com/services/equipment' },
}

export default function Page() {
  return (
    <ServiceLayout
      eyebrow="Asset Protection"
      title="Equipment Insurance for Traffic Control Companies"
      intro="Your arrow boards, signals, and sign trailers are expensive, mobile, and constantly exposed. Contractors equipment coverage protects your traffic control gear against theft, vandalism, and damage, wherever it sits."
      image="/images/equipment.jpg"
      imageAlt="Traffic control equipment, cones and arrow boards"
      bullets={[
        'Arrow boards and message boards',
        'Portable traffic signals',
        'Sign trailers and stands',
        'Attenuators and crash cushions',
        'Cones, barrels, and channelizers',
        'Coverage on-site, in transit, and in storage',
      ]}
      sections={[
        {
          heading: 'Traffic control equipment is a high-theft, high-loss asset class',
          body: [
            'A single solar arrow board or portable traffic signal can cost tens of thousands of dollars, and a well-equipped traffic control company may have hundreds of thousands of dollars of gear deployed across multiple job sites at any given time. That equipment lives outdoors, often overnight, on public roadways with no fence and no guard. It is a constant target for theft and an easy victim of vandalism, vehicle strikes, and severe weather.',
            'Standard general liability does nothing to repair or replace your own damaged equipment, and a basic property policy usually only covers gear at a fixed business address. Contractors equipment coverage (also called inland marine) is the policy built specifically for mobile tools and machinery that travel from site to site, which is exactly how traffic control gear operates.',
          ],
        },
        {
          heading: 'What equipment coverage protects against',
          body: [
            'A good equipment policy covers your scheduled and unscheduled traffic control assets against theft, vandalism, collision and overturn in transit, fire, and weather events like wind and flood. Whether an arrow board is stolen off a shoulder overnight, a sign trailer is destroyed when a motorist plows into it, or a message board is damaged hauling between projects, your equipment coverage pays to repair or replace it so you are not financing new gear out of pocket.',
            'Coverage follows the equipment, on the job site, in transit on your trucks, and in your yard or storage. For traffic control firms that mobilize gear daily across a wide region, that mobility is the entire point. We can schedule high-value items individually and provide blanket coverage for the cones, barrels, and channelizers that get damaged or lost in the ordinary course of work.',
          ],
        },
        {
          heading: 'Building the right equipment program',
          body: [
            'We start by inventorying your fleet of traffic control equipment and its replacement cost, then structure a policy with the right limits, deductibles, and valuation (replacement cost versus actual cash value) for how you operate. We also help you document serial numbers and implement loss-control practices, GPS tracking on arrow boards, locked storage, and overnight retrieval policies, that reduce both claims and premium.',
            'Equipment coverage rounds out a complete traffic control insurance program alongside your liability, auto, and workers comp. Keeping your gear protected means a theft or a wreck never stops you from showing up to the next job fully equipped. Request a free quote and we will price coverage for your full equipment list.',
          ],
        },
      ]}
    />
  )
}
