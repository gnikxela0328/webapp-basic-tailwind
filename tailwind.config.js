/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        //fontFamily: {
        //  sans: ['Lora', 'serif']
        //}
      },
      
    },
    plugins: [require("daisyui")],
  }