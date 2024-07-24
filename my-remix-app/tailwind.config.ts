import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
      colors: { 
        'cyan': '#d3b00c',
      
    },
    fontFamily: {
      Bebas: ['"Bebas Neue"', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [
  ],

} satisfies Config