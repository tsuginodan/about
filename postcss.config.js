module.exports = {
  theme: {},
  variants: {},
  plugins: [
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('autoprefixer'),
          require('cssnano')({
            preset: 'default',
          }),
        ]
      : []),
  ],
};
