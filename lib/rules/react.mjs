import pluginReact from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  {files: ['**/*.{jsx,tsx}']},
  // React
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // React向けルール
      'react/jsx-boolean-value': ['error', 'never'], // JSXのブール値は暗示
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
  // React Hooks
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },
];
