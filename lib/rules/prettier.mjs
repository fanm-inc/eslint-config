import prettierEslintPlugin from 'eslint-plugin-prettier/recommended';

export default [
  prettierEslintPlugin,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80, // 1行の最大文字数80
          singleQuote: true, // シングルクォートを使用
          bracketSpacing: false, // オブジェクトのブラケットの前後にスペースを付けない
        },
        {
          usePrettierrc: false, // 外部の.prettierrcファイルを無視する
        },
      ],
    },
  },
];
