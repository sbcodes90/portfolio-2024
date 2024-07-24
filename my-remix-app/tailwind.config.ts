import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', "./node_modules/flowbite/**/*.js"],
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
    require('flowbite/plugin')
  ],

} satisfies Config