module.exports = {
  extends: [
    '@deviltea/eslint-config-vue',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',
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
