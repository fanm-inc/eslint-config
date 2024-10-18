import tseslint from 'typescript-eslint';

export default [
  {files: ['**/*.{ts,mts}']},
  ...tseslint.configs.recommended,
  {
    rules: {
      // TypeScript向けルール（@typescript-eslintを使用）
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': 'error', // anyの使用を禁止
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
];
