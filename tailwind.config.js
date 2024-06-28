/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        "very-dark-gray" : "hsl(0, 0%, 17%)",
        "dark-gray" : "hsl(0, 0%, 59%)"
      },
      backgroundImage: {
        'custom-desk': "url('/pattern-bg-desktop.png')",
        'custom-mobile': "url('/pattern-bg-mobile.png')",

      },
    },
  },
  plugins: [],
};
