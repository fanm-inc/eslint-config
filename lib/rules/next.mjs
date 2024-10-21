import eslintPluginNext from '@next/eslint-plugin-next';

export default [
  {
    ignores: ['.next/**/*', './public/**/*'],
  },
  {
    plugins: {
      '@next/next': eslintPluginNext,
    },
    rules: {
      ...eslintPluginNext.configs.recommended.rules,
      ...eslintPluginNext.configs['core-web-vitals'].rules,
      // PATCH
      '@next/next/no-duplicate-head': 'off',
    },
  },
];
