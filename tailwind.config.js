module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'orange': '#f0460a',
      },
      fontFamily: {
        'display': '"Young Serif", ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.indigo.600'),
            },
          h1: {
              color: theme('colors.gray.700'),
            },
            h2: {
              color: theme('colors.gray.700'),
            },
            h3: {
              color: theme('colors.gray.700'),
            },
            h4: {
              color: theme('colors.gray.700'),    
            },
            h5: {
              color: theme('colors.gray.700'),      
            },
            h6: {
              color: theme('colors.gray.700'),  
            },     
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
