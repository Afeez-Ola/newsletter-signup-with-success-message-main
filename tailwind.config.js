/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./public/**/*.{html,js}'],
 theme: {
  extend: {},
  screens: {
   sm: '375px',
   // => @media (min-width: 576px) { ... }

   md: '960px',
   // => @media (min-width: 960px) { ... }

   lg: '1440px',
   // => @media (min-width: 1440px) { ... }
  },
 },
 plugins: [],
};
