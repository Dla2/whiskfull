/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#E58D30",
        "secondary": "#E6BD30",
        "accent": "#E64E30"
      },
      borderRadius: {
        '5xl': "2rem"
      },
      boxShadow: {
        "custom": "12px 16px 0px 0px"
      }
    },
    fontSize : {
      "H1-D": "3.5rem",
      "H2-D": "3rem",
      "H3-D": "2.5rem",
      "H4-D": "2rem",
      "H5-D": "1.5rem",
      "H6-D": "1.25rem",
      "H1-M": "2.5rem",
      "H2-M": "2.25rem",
      "H3-M": "2rem",
      "H4-M": "1.5rem",
      "H5-M": "1.25rem",
      "H6-M": "1.125rem",
    },
    fontFamily: {
      'headings': ['"Yeseva One"', 'sans-serif'],
      'body': ['"Josefin Sans"', 'sans-serif']
    }
  },
  plugins: [],
}
