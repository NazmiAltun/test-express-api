module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        printWidth: 100,
        proseWrap: 'preserve',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
      {
        usePrettierrc: false,
      },
    ],
    quotes: [
      1,
      'single',
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    // Disabling because this rule is extremely slow.
    'import/no-cycle': 'off',
    // Disabling because this rule is slow and not a common violation.
    'import/no-named-as-default': 'off',
    // Disabling because this rule is slow and not a common violation.
    'import/no-named-as-default-member': 'off',
    // This rule is already covered by the TypeScript compiler.
    'import/default': 'off',
    // This rule is already covered by the TypeScript compiler.
    'import/no-unresolved': 'off',
  },
};
