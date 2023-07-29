/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'new-collection': "url('/images/new-collection.png')",
      },
      height: {
        '582': '582px',
      },
    },
  },
  plugins: [],
};