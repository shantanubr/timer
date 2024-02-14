module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'lf',
            trailingComma: 'all',
            semi: true,
            doubleQuote: true,
            jsxSingleQuote: true,
            singleQuote: true,
            useTabs: false,
            tabWidth: 2,
            arrowParens: 'avoid',
            bracketSameLine: true,
            bracketSpacing: true,
            quoteProps: 'consistent',
          },
        ],
      },
    },
  ],
};
