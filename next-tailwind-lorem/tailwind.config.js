/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-gradient": 'radial-gradient(circle, rgba(191,236,238,0.5) 0%, rgba(0,110,122,0.5) 50%, rgba(191,236,238,1) 100%)'
      },
      height: {
        "header": "55px",
        "main-layout": "calc(100vh - 55px)",
        '100': '100px',
        '200': '200px',
        '234': '234px'
      },
      width: {
        "nav": "350px",
        '200': '200px',
        "252": '252px',
        '384': '384px'
      }
    },
  },
  plugins: [],
};
