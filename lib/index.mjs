import basicRules from './rules/basic.mjs';
import prettierRules from './rules/prettier.mjs';
import typescriptRules from './rules/typescript.mjs';
import reactRules from './rules/react.mjs';

export default [
  ...basicRules,
  ...prettierRules,
  ...typescriptRules,
  ...reactRules,
  {
    rules: {
      '@stylistic/indent': 'off', // prettierと競合するため無効化
      '@stylistic/indent-binary-ops': 'off', // prettierと競合するため無効化
      'object-curly-newline': 'off', // prettierと競合するため無効化
      '@stylistic/object-curly-newline': 'off', // prettierと競合するため無効化
      '@stylistic/operator-linebreak': 'off', // prettierと競合するため無効化
      '@stylistic/arrow-parens': 'off', // prettierと競合するため無効化
    },
  },
];
