import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
      colors: { 
        'cyan': '#d3b00c',
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],

} satisfies Config