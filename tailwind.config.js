/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      minWidth:{
        "mobile-sm":"330px"
      },
      width: {
        "256":"256px",
        "180":"180px",
        'pc':'1280px',
        "mobile-sm":"330px",
      },
      maxWidth:{
        "tablet":"768px"
      },
      height: {
        "max":"100svh"
      }
    },
  },
  plugins: [],
}
