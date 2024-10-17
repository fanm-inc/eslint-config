import basicRules from './rules/basic.mjs';
import typescriptRules from './rules/typescript.mjs';
import reactRules from './rules/react.mjs';

export default [
  ...basicRules,
  ...typescriptRules,
  ...reactRules,
];
