module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-restricted-globals': 'off',
  },
};
