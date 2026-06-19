import type { Metadata } from 'next'
import ServiceLayout from '@/components/service-layout'

export const metadata: Metadata = {
  title: 'Workers Compensation for Traffic Control & Flaggers',
  description: 'Workers compensation insurance for traffic control companies and flaggers, one of the highest-injury trades in construction. Proper class codes, lower rates, all 50 states.',
  alternates: { canonical: 'https://trafficcontrolinsurance.com/services/workers-comp' },
}

export default function Page() {
  return (
    <ServiceLayout
      eyebrow="High Priority Coverage"
      title="Workers Compensation for Traffic Control & Flaggers"
      intro="Flagging is one of the most dangerous jobs in all of construction. Workers compensation protects your crew when the worst happens, and protects your company from the cost of a serious work-zone injury."
      image="/images/workers-comp.jpg"
      imageAlt="Traffic control worker in high-visibility vest"
      bullets={[
        'Medical bills for injured flaggers and crew',
        'Lost-wage replacement during recovery',
        'Struck-by and caught-between injuries',
        'Disability and rehabilitation benefits',
        'Death benefits for fatal work-zone incidents',
        'Employer liability protection',
      ]}
      sections={[
        {
          heading: 'Flaggers face the highest injury exposure in construction',
          body: [
            'A flagger spends the entire shift standing feet away from vehicles traveling at highway speeds, often at night, in bad weather, and around distracted or impaired drivers. The U.S. Department of Labor and roadway safety researchers consistently rank work-zone and flagging operations among the deadliest jobs in the construction industry. Struck-by incidents are the leading cause of work-zone fatalities, and even a non-fatal struck-by injury can mean months of medical treatment and lost wages.',
            'That risk profile is exactly why workers compensation is both legally mandatory in nearly every state and one of the largest line items in a traffic control company budget. When a flagger is injured on the job, workers comp pays their medical bills and a portion of lost wages, and in exchange shields your company from being sued directly by the employee. Without it, a single serious injury could bankrupt a small traffic control firm.',
          ],
        },
        {
          heading: 'Why your workers comp rates may be too high',
          body: [
            'Workers comp premiums are driven by class codes and experience modifiers. Many traffic control companies are misclassified into broad, high-rate construction codes that do not reflect their actual operations, or they carry experience mods inflated by claims that were never properly managed. The result is premiums that quietly cost tens of thousands of dollars more than they should.',
            'Our specialists audit your class codes, payroll allocation, and experience modification factor to make sure you are rated correctly. We then shop carriers that specifically write road, highway, and traffic safety contractors, carriers who understand that a well-run flagging operation with documented safety programs deserves competitive pricing. For many clients, correct classification alone produces immediate savings.',
          ],
        },
        {
          heading: 'Safety programs that lower cost and protect crews',
          body: [
            'The best way to control workers comp cost long term is to reduce claims, and the best way to reduce claims is a real safety culture. We help traffic control clients implement and document the programs carriers reward: flagger certification and refresher training, proper high-visibility apparel, buffer-space and taper standards, internal-traffic-control plans, and post-incident return-to-work procedures. Documented safety is not just good ethics; it is leverage at renewal.',
            'We also coordinate occupational accident coverage for companies that use 1099 subcontracted flaggers who fall outside a standard comp policy, so there are no gaps in protection across your workforce. Whether you run a five-person flagging crew or a multi-state traffic control operation, we will build a comp program that protects your people and your bottom line. Request your free quote and let us benchmark your current rates.',
          ],
        },
      ]}
    />
  )
}
