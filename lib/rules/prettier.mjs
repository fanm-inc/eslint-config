import prettierEslintPlugin from 'eslint-plugin-prettier/recommended';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  prettierEslintPlugin,
  eslintConfigPrettier,
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          printWidth: 80, // 1行の最大文字数80
          tabWidth: 2, // インデント幅
          singleQuote: true, // シングルクォートを使用
          trailingComma: 'all', // 末尾のカンマを常に付ける
          bracketSpacing: false, // オブジェクトのブラケットの前後にスペースを付けない
        },
        {
          usePrettierrc: false, // 外部の.prettierrcファイルを無視する
        },
      ],
    },
  },
];
