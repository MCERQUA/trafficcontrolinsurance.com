import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#1A3A5C',
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
