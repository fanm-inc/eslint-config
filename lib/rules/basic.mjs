import globals from 'globals';
import pluginJs from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  stylistic.configs.customize({
    blockSpacing: false,
    quotes: 'single',
    semi: true,
    jsx: true,
  }),
  {
    rules: {
      // ベーシックなコーディングルール
      quotes: 'off', // @stylistic/quotesルールを使用
      '@stylistic/quotes': ['error', 'single'], // シングルクォートを使用
      'quote-props': ['off'], // @stylistic/quote-propsルールを使用
      '@stylistic/quote-props': ['error', 'as-needed'], // オブジェクトのキーのクォートを必要に応じて
      semi: ['error', 'always'], // セミコロンを必須にする
      curly: ['error', 'multi-line'], // ブロックの中括弧を複数行のみにする
      'object-curly-spacing': ['error', 'never'], // オブジェクトの中括弧にスペースを禁止
      '@stylistic/object-curly-spacing': ['error', 'never'], // オブジェクトの中括弧にスペースを禁止
      '@stylistic/block-spacing': ['error', 'never'],
      // 'array-bracket-spacing': ['error', 'never'],
      // 'key-spacing': [
      //   'error',
      //   {
      //     beforeColon: false, // コロンの前にスペースを許可しない
      //     afterColon: true, // コロンの後にスペースを必須にする
      //   },
      // ],
      // 'no-var': 'error',
      // 'no-unused-vars': 'warn',
      // 'no-console': 'warn',
      // // 厳密なルール
      // 'comma-dangle': ['error', 'always-multiline'], // マルチラインの最後にカンマを強制
      // indent: 'off', // @stylistic/indentを使用
      // '@stylistic/indent': ['error', 2],
      // 'no-trailing-spaces': 'error', // 行末の空白を禁止
      // 'eol-last': ['error', 'always'], // ファイルの最後に改行を必須
      // 'prefer-const': 'error', // 変更されない変数にはconstを使用
      // 'consistent-this': ['error', 'self'], // thisの名前を指定
      // 'no-lonely-if': 'error', // else内のifを禁止し、else ifを使用
      // 'no-else-return': [
      //   'error',
      //   {
      //     allowElseIf: false,
      //   },
      // ], // elseブロック内でのreturnを禁止、不要なインデントを削除
      // // 分割代入のルール
      // 'prefer-destructuring': [
      //   'error',
      //   {
      //     object: true,
      //     array: false,
      //   },
      // ], // オブジェクトの分割代入を推奨
      // 'default-case': 'error', // switch文でのdefaultを必須にする
      // // 横に長い文章の改行ルール
      // 'newline-per-chained-call': [
      //   'error',
      //   {
      //     ignoreChainWithDepth: 2,
      //   },
      // ], // チェーンメソッドごとに改行
      // 'object-property-newline': [
      //   'error',
      //   {
      //     allowAllPropertiesOnSameLine: false,
      //   },
      // ],
      // 'array-element-newline': [
      //   'error',
      //   {
      //     multiline: true,
      //     minItems: 2,
      //   },
      // ],
      // 'array-bracket-newline': [
      //   'error',
      //   {
      //     multiline: true,
      //   },
      // ],
      // // 関数のルールルール
      // 'func-style': [
      //   'error',
      //   'declaration',
      //   {
      //     allowArrowFunctions: true,
      //   },
      // ],
      // 'prefer-arrow-callback': 'error', // コールバックにはアロー関数を推奨
      // 'no-return-await': 'error', // 不必要なreturn awaitを禁止
      // 'max-params': ['warn', 3], // 関数の引数を3つまでに制限
      // // モジュールのルール
      // 'no-duplicate-imports': 'error', // 重複するimportを禁止
    },
  },
];
