/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    future: {
      hoverOnlyWhenSupported: true,
    },
    extend: {
      backgroundImage: {
        'new-collection': "url('/images/new-collection.png')",
        'shop': "url('/images/shop.png')"
      },
      height: {
        '582': '582px',
      },
      screens: {
        'hover-hover': {'raw': '(hover: hover)'},
      },
    },
  },
  plugins: [],
};
