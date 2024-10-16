import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  stylistic.configs.customize({
    blockSpacing: 'never',
    quotes: 'single',
    semi: true,
    jsx: true,
  }),
  {
    rules: {
      // ベーシックなコーディングルール
      'quotes': [
        'error',
        'single',
      ],
      'semi': [
        'error',
        'always',
      ],
      'object-curly-spacing': [
        'error',
        'never',
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'never',
      ],
      'array-bracket-spacing': [
        'error',
        'never',
      ],
      'key-spacing': [
        'error',
        {
          beforeColon: false, // コロンの前にスペースを許可しない
          afterColon: true, // コロンの後にスペースを必須にする
        },
      ],
      'no-unused-vars': 'warn',
      'no-console': 'warn',

      // 厳密なルール
      'comma-dangle': [
        'error',
        'always-multiline',
      ], // マルチラインの最後にカンマを強制
      'indent': [
        'error',
        2,
      ], // インデントは2スペース
      'no-trailing-spaces': 'error', // 行末の空白を禁止
      'eol-last': [
        'error',
        'always',
      ], // ファイルの最後に改行を必須
      'prefer-const': 'error', // 変更されない変数にはconstを使用
      'arrow-parens': [
        'error',
        'always',
      ], // アロー関数の引数に括弧を必須

      // 横に長い文章の改行ルール
      'newline-per-chained-call': [
        'error',
        {ignoreChainWithDepth: 2},
      ], // チェーンメソッドごとに改行
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 2,
          },
          ObjectPattern: {multiline: true},
          ImportDeclaration: {
            multiline: true,
            minProperties: 2,
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 2,
          },
        },
      ],
      'object-property-newline': [
        'error',
        {allowAllPropertiesOnSameLine: false},
      ],
      'array-element-newline': [
        'error',
        {
          multiline: true,
          minItems: 2,
        },
      ],
      'array-bracket-newline': [
        'error',
        {multiline: true},
      ],

      // TypeScript向けルール（@typescript-eslintを使用）
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-function-return-type': ['error'],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',

      // React向けルール
      'react/jsx-boolean-value': [
        'error',
        'always',
      ], // JSXのブール値は明示
      'react/jsx-no-duplicate-props': ['error'], // JSXでプロパティの重複を禁止
      'react/jsx-curly-spacing': [
        'error',
        {
          when: 'always',
          children: true,
        },
      ], // JSX内の中括弧にスペースを強制
      'react/self-closing-comp': 'error', // 空の要素には自己終了タグを使用
    },
  },
];
