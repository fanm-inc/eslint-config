import basicRules from './rules/basic.mjs';
import prettierRules from './rules/prettier.mjs';
import typescriptRules from './rules/typescript.mjs';
import reactRules from './rules/react.mjs';
import nextRules from './rules/next.mjs';

export const typeScriptRecommended = [
  ...basicRules,
  ...prettierRules,
  ...typescriptRules,
  {
    rules: {
      // prettier/prettierと競合するため無効化
      '@stylistic/indent': 'off',
      '@stylistic/indent-binary-ops': 'off',
      '@stylistic/brace-style': 'off',
      'object-curly-newline': 'off',
      '@stylistic/object-curly-newline': 'off',
      '@stylistic/jsx-curly-newline': 'off',
      '@stylistic/operator-linebreak': 'off',
      '@stylistic/arrow-parens': 'off',
      '@stylistic/multiline-ternary': 'off',
    },
  },
];

export const reactRecommended = [...typeScriptRecommended, ...reactRules];

export const nextRecommended = [...reactRecommended, ...nextRules];

export default nextRecommended;
