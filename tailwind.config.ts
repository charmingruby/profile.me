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
          '400': '#1F1F1F',
          '500': '#1A1A1A',
        },
        secondary: {
          light: '#3BC1E2',
          main: '#2D93AD',
          dark: '#1B5564',
        },
        border: '#555555',
      },
    },
  },
  plugins: [],
}
export default config
