import pluginReact from 'eslint-plugin-react';

export default [
  {files: ['**/*.{jsx,tsx}']},
  pluginReact.configs.flat.recommended,
  {
    settings: {settings: {react: {version: 'detect'}}},
    rules: {
      // React向けルール
      'react/jsx-boolean-value': [
        'error',
        'never',
      ], // JSXのブール値は暗示
      'react/jsx-no-duplicate-props': ['error'], // JSXでプロパティの重複を禁止
      'react/jsx-curly-spacing': [
        'error',
        {
          when: 'never',
          children: true,
        },
      ], // JSX内の中括弧にスペースを禁止
      'react/self-closing-comp': 'error', // 空の要素には自己終了タグを使用
    },
  },
];
