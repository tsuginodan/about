module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    content: [ './src/**/*.pug' ],
  },
  theme: {
    fontFamily: {
      display: [ 'Poppins' ],
    },
  },
  variants: {},
  plugins: [],
};
