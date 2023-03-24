module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['prettier', 'jsx-a11y', 'better-styled-components'],
  rules: {
    'react/display-name': 'off',
    'react/prop-types': 'off',
    quotes: [2, 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    semi: [2, 'never'],
    'better-styled-components/sort-declarations-alphabetically': 2,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        endOfLine: 'auto',

        semi: false,
        tabWidth: 2,
        useTabs: false,
      },
    ],
  },
}
