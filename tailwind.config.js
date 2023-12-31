/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/scripts/main.js"],
  theme: {
    extend: {
      colors: {
        // Primary
        "light-red": "hsl(0, 100%, 67%)",
        "orangey-yellow": "hsl(39, 100%, 56%)",
        "green-teal": "hsl(166, 100%, 37%)",
        "cobalt-blue": "hsl(234, 85%, 45%)",

        // Gradients Background
        "light-slate-blue": "hsl(252, 100%, 67%)",
        "light-royal-blue": "hsl(241, 81%, 54%)",

        // Gradients Circle
        "violet-blue": "hsla(256, 72%, 46%, 1)",
        "persian-blue": "hsla(241, 72%, 46%, 0)",

        //Neutral
        "pale-blue": "hsl(221, 100%, 96%)",
        "light-lavender": "hsl(241, 100%, 89%)",
        "dark-gray-blue": "hsl(224, 30%, 27%)",

        // Footer
        "footer-link-color": "hsl(228, 45%, 44%)",
      },
      fontFamily: {
        HankenGrotesk: ["HankenGrotesk", "serif"],
      },
    },
  },
  plugins: [],
};
