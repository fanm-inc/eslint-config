import basicRules from './rules/basic.mjs';
import prettierRules from './rules/prettier.mjs';
import typescriptRules from './rules/typescript.mjs';
import reactRules from './rules/react.mjs';

export default [
  ...basicRules,
  ...prettierRules,
  ...typescriptRules,
  ...reactRules,
];
