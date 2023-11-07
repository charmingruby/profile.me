import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '300': '#1F1F1F',
          '400': '#151515',
          '500': '#0A0A0A',
          '600': '#0D0D0D',
        },
        secondary: {
          light: '#3BC1E2',
          main: '#2D93AD',
          dark: '#1B5564',
          darker: '#164450',
        },
        border: '#333333',
        'gray-palette': {
          0: '#f7fafc',
          50: '#F0F6F9',
          100: '#D6D6D6',
          200: '#CCCCCC',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#1f1f23',
          800: '#18181b',
          900: ' #121215',
          950: '#09090B',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
