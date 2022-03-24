module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/typescript/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['vue', 'prettier'],
  // add your custom rules here
  rules: {
    'vue/require-default-prop': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
