module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 11
  },
  plugins: ['prettier'],
  rules: {
    'class-methods-use-this': 'off',
    'no-console': 'off',
    'prettier/prettier': 'error'
  }
};
