const config = {
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  printWidth: 80,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'lf',
  bracketSpacing: true,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};

export default config;
