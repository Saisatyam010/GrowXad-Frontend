/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1920px',
      },
      colors: {
        purple: "#71065b",
        darkPurple: "#39002d",
        gray: {
          10: "#f5f5f5",
          50: "#989898",
          100: "#565656",
        },
      },
      container: {
        width: {
          DEFAULT: '100%',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
          '3xl': '1920px',
        },
       
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '2rem',
          xl: '3rem',
          '2xl': '4rem',
          '3xl': '5rem',
        },
      },
    }
  },
  plugins: [],
}