module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [ './tsconfig.json' ],
  },
  plugins: [
    'react',
  ],
  rules: {
    "array-bracket-spacing": [ "error", "always" ],
    "object-curly-spacing": [ "error", "always" ],
    "react/no-unescaped-entities": "off",
    "react/react-in-jsx-scope": "off",
    "semi": [ "error", "always" ],
    "comma-dangle": [ "error", "always-multiline" ],
    "no-multiple-empty-lines": [ "error", { "max": 1, "maxEOF": 0 } ],
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  settings: {
    react: {
      version: 'latest',
    },
  },
};
