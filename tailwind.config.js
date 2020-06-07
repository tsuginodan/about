// https://github.com/tailwindcss/tailwindcss/issues/654
const makeNeumorphism = (name, lightRgb, shadowRgb, distance = 5) => {
  const shadows = {};
  const intensity = distance * 3;

  shadows[
    `${name}--top-left`
  ] = `${distance}px ${distance}px ${intensity}px ${shadowRgb}, ${distance * -1}px ${distance *
    -1}px ${intensity}px ${lightRgb}`;
  shadows[
    `${name}--pressed--top-left`
  ] = `inset ${distance}px ${distance}px ${intensity}px ${shadowRgb}, inset ${distance *
    -1}px ${distance * -1}px ${intensity}px ${lightRgb}`;

  shadows[`${name}--top-right`] = `${distance *
    -1}px ${distance}px ${intensity}px ${shadowRgb}, ${distance}px ${distance *
    -1}px ${intensity}px ${lightRgb}`;
  shadows[`${name}--pressed--top-right`] = `inset ${distance *
    -1}px ${distance}px ${intensity}px ${shadowRgb}, inset ${distance}px ${distance *
    -1}px ${intensity}px ${lightRgb}`;

  shadows[`${name}--bottom-left`] = `${distance}px ${distance *
    -1}px ${intensity}px ${shadowRgb}, ${distance * -1}px ${distance}px ${intensity}px ${lightRgb}`;
  shadows[`${name}--pressed--bottom-left`] = `inset ${distance}px ${distance *
    -1}px ${intensity}px ${shadowRgb}, inset ${distance *
    -1}px ${distance}px ${intensity}px ${lightRgb}`;

  shadows[`${name}--bottom-right`] = `${distance * -1}px ${distance *
    -1}px ${intensity}px ${shadowRgb}, ${distance}px ${distance}px ${intensity}px ${lightRgb}`;
  shadows[`${name}--pressed--bottom-right`] = `inset ${distance * -1}px ${distance *
    -1}px ${intensity}px ${shadowRgb}, inset ${distance}px ${distance}px ${intensity}px ${lightRgb}`;

  return shadows;
};

module.exports = {
  purge: {
    content: [ './src/**/*.html' ],
  },
  theme: {
    extend: {
      boxShadow: {
        ...makeNeumorphism('lg', '#90cdf4', '#4299e1', 20), // name - color below used - color above used
        ...makeNeumorphism('sm', '#90cdf4', '#4299e1', 10), // name - color below used - color above used
      },
    },
  },
  variants: {},
  plugins: [],
};
