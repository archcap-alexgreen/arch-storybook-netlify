// The values provided below are the defaults.
// If you don't specify one of these properties,
// the default value will be applied.
// Ref -> https://medium.com/ngconf/ultimate-prettier-angular-cheatsheet-777c9515f4fb

module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'none', // other options `es5` or `all`
  bracketSpacing: true,
  arrowParens: 'avoid', // other option 'always',
  overrides: [
    {
      files: '*.scss',
      options: {
        cursorOffset: -1,
        singleQuote: false
      }
    }
  ]
};
