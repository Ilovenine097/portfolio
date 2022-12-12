
module.exports = {
  content: [
    './*.html'
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 2s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(5deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-5deg)',
          }
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#1E40AF',
        nuetral: '#F1F5F9',
        secondary: '#1e293b',
        cscgreen: '#8dad16',
        cscred: '#e91e63',
        ojtnavyblue: '#2c3e50',
        ojtcyan: '#18bc9c',
        darkcyan: '#64ffda',
        darkbg: '#0a192f',
        darktext: '#ccd6f6',
        darkbglight: '#112240',
        darkwhite: '#152b51',
        info: '#2750ce',
        purple: '#7F00FF'
      },
      translate: ['dark']
    }
  },
  plugins: [],
}
