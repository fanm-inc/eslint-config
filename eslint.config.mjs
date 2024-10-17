import rules from './lib/index.mjs';

export default [
  ...rules,
  {
    rules: {
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            multiline: true,
            minProperties: 1,
          },
          ObjectPattern: {
            multiline: true,
            minProperties: 1,
          },
          ImportDeclaration: {
            multiline: true,
            minProperties: 1,
          },
          ExportDeclaration: {
            multiline: true,
            minProperties: 1,
          },
        },
      ],
    },
  },
];
