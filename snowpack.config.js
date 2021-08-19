// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: '/',
    public: { url: '/', static: true },
  },
  plugins: ['@marlonmarcello/snowpack-plugin-pug', '@snowpack/plugin-postcss', '@snowpack/plugin-sass'],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    out: 'dist',
  },
};
