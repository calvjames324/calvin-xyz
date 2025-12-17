/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
	theme: {
    extend: {
      fontFamily: {
        mplus: ['"M PLUS Code Latin"', "sans-serif"],
        body: ['"Spectral"', "serif"],
      },
    },
  },
	plugins: [],
};
