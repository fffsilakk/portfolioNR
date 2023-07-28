/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["nr.html"],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
      extend: {
        colors: {
            primary: '#14b8a6',
            dark: '#334155',
        },
        screens: {
            '2xl': '1320px',
        },
      },
    },
  }