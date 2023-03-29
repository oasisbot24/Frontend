/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Noto Sans KR', 'ui-sans-serif', 'system-ui'],
        'viga': ['Viga'],
      },
      colors: {
        background: '#010101',
        green: '#007521',
        red: '#FD2020',
        'red-hover': '#a20000',
        yellow: '#FDFF82',
        
        'pink': '#FF4FF8',
        'pink-hover': '#cc3fc6',

        'blue-100': '#D7E3F0',
        'blue-150': "#a2d3ed",
        'blue-200': '#4EAFE3',
        'blue-300': '#3A6FF8',
        'blue-200-hover': '#3e8cb5',
        'blue-300-hover': '#2e58c6',

        'gradient-100': '#6D09FF',
        'gradient-200': '#725af9',
        'gradient-300': '#646efd',
        'gradient-400': '#4f7cf9',
        'gradient-500': '#446dff',
        'gradient-600': '#3AB4F2',
        'indigo-100': '#02396c',
        'indigo-200': '#012c55',
        
        'gray-100': '#EDEDED',
        'gray-200': '#D7D7D7',
        'gray-300': '#BDBDBD',
        'gray-400': '#8C8C8C',
        'gray-500': '#3F3F3F',

        'gray-border': '#A1A1A1',
        'admin-nav-background': '#333333',
        'admin-nav-hover': '#3D3D69',
        'admin-nav-selected': '#6277F6',

        card: '#000000CC',
      },
      fontSize: {
        '2xs': '0.6rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      lineHeight: {
        '11': '3rem',
        '12': '4rem',
        '13': '5rem',
        '14': '6rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
