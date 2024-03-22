import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
  extend: {
    backgroundImage: {
      'hero': "url('/images/blackbackground.png')",
    },
}
} satisfies Config