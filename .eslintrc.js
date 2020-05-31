module.exports = {
  env: {
    commonjs: true,
    es6: true,
    es2017: true,
      node: true,
    mocha: true
  },
  extends: [
    'eslint:recommended',
    'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
