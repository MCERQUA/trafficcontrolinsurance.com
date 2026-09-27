import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          asphalt: '#2B2622', // was navy; renamed so the markup stops reading as navy
          orange: '#E67E22',
          yellow: '#F1C40F',
          dark: '#212529',
          light: '#F8F9FA',
        }
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-opensans)', 'sans-serif'],
      }
    }
  },
  plugins: []
}
export default config
