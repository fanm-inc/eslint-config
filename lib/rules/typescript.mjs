import tseslint from 'typescript-eslint';

export default [
  {files: ['**/*.{ts,mts}']},
  ...tseslint.configs.recommended,
  {
    rules: {
      // TypeScript向けルール（@typescript-eslintを使用）
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': ['warn'], // 推論ができない場合に警告
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },
];
