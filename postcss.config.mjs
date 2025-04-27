const config = {
  plugins: {
    'postcss-nesting': {},
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-preset-env': {
      features: {
        'color-functional-notation': false,
        'oklab-function': false, // disables oklch/oklab
      },
    },
  },
};

export default config;