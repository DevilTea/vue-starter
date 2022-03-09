module.exports = {
  extends: [
    '@deviltea/eslint-config-vue-ts',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.ts', '.d.ts'],
      },
    },
  },
  rules: {
    'vue/no-unregistered-components': [
      'error',
      {
        ignorePatterns: [
          'router-view',
          'router-link',
          'transition',
          'icon-*',
        ],
      },
    ],
    'import/extensions': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.*'],
      rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      },
    },
  ],
}
