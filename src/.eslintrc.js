module.exports = {
  extends: [
    'eslint:recommended',
  ],
  env: {
    "es6": true,
    "node": true,
    "browser": true,
  },
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": 2019 // for async/await
  },
  plugins: [
    "svelte3"
  ],
  rules: {
    "semi": ["warn", "always"],
    "no-extra-semi": ["warn"],
    "no-cond-assign": ["error", "always"],
    "no-unused-vars": ["warn", { "vars": "local", "args": "none" }],
    "no-dupe-keys": ["warn"],
    "no-console": "off",
    "no-mixed-spaces-and-tabs": "off",
    "no-useless-escape": "off",
    "no-constant-condition": "off",
  },
  globals: {
    chrome: false
  }
}
