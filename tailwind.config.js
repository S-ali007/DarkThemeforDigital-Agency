/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['Manrope'],
        roboto: ['Roboto'],
        Inter:['Inter'],
        Jost:['Jost'],
        kumbh:['Kumbh Sans'],
        saira:['Saira'],
        Nunito:['Nunito'],
      
      },
      fontSize: {
        clamp: "clamp(1rem, 4vw, 72px)",
      },
      backgroundImage: {
        'hero-pattern': "url('/public/assets/hero-backgroung.svg')",

      },
      animation: {
        shake: "shake 0.5s infinite",
        floating: "floating 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}

