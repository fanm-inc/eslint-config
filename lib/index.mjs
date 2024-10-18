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
      'object-curly-newline': 'off', // prettierと競合するため無効化
      '@stylistic/object-curly-newline': 'off', // prettierと競合するため無効化
      '@stylistic/operator-linebreak': 'off', // prettierと競合するため無効化
    },
  },
];
