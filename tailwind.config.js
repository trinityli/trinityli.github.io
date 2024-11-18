/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // spacing: {
      //   'screen-offset': 'calc(20px)',
      // },
      backgroundImage: {
        'gradient-pastel': 'radial-gradient(at right bottom, rgb(255, 228, 230), rgb(255, 255, 255), rgb(186, 230, 253))',
        'gradient-indigo': 'radial-gradient(at right bottom, rgb(192, 132, 252), rgb(49, 46, 129), rgb(0, 0, 0))',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],

  daisyui: {
    themes: ["pastel","dark"], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },

};
