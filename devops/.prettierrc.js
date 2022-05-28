module.exports = {
  overrides: [
    {
      files: '*.wxss',
      options: {
        parser: 'css'
      }
    },
    {
      files: '*.wxs',
      options: {
        parser: 'babel'
      }
    }
  ],

  endOfLine: 'auto',
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  arrowParens: 'avoid'
}
