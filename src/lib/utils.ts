import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const SITE = {
  name: 'Traffic Control Insurance',
  domain: 'trafficcontrolinsurance.com',
  url: 'https://trafficcontrolinsurance.com',
  phone: '844-967-5247',
  phoneRaw: '+18449675247',
  email: 'josh@contractorschoiceagency.com',
  agency: 'Contractors Choice Agency',
}
