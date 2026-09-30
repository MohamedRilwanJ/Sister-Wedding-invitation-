/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#FAF6EF',
        'parchment-warm': '#FFFDF8',
        'paper-border': '#EFE7DA',
        'rose-card': '#B85D67',
        'rose-deep': '#9E444E',
        'rose-petal': '#C77A82',
        'powder-blue': '#7A9FB3',
        'powder-blue-light': '#9DBBC8',
        'soft-blue-dark': '#50758B',
        'charcoal-ink': '#262326',
        'gold-filigree': '#C5A059',
        'gold-soft': '#DFC788',
        'gold-antique': '#B08D47',
        'sage-leaf': '#8A9A84',
        'sage-muted': '#A8B59F'
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        tamil: ['"Noto Serif Tamil"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        brush: ['"Alex Brush"', 'cursive'],
        cinzel: ['"Cinzel"', 'serif'],
        playfair: ['"Playfair Display"', 'serif']
      }
    },
  },
  plugins: [],
}
