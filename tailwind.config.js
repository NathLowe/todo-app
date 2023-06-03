/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
      colors: {
        primary: "hsl(220, 98%, 61%)",
        body:{
          light: "hsl(236, 33%, 92%)",
          dark: "hsl(235, 21%, 11%)"
        },
        card:{
          light: "hsl(0, 0%, 98%)",
          dark: "hsl(237, 14%, 26%)"
        },
        completed:{
          light: "hsl(233, 11%, 84%)",
          dark: "hsl(234, 39%, 85%)"
        },
        footer1:{
          light: "hsl(236, 9%, 61%)",
          dark: "hsl(234, 39%, 85%)"
        },
        todo:{
          light: "hsl(235, 19%, 35%)",
          dark: "hsl(236, 33%, 92%)"
        },
        hover:{
          light: "hsl(235, 19%, 35%)",
          dark: "hsl(236, 33%, 92%)"
        },
        footer2:{
          light: "hsl(236, 9%, 61%)",
          dark: "hsl(233, 14%, 35%)"
        },
      },
    },
  },
  plugins: [],
}
