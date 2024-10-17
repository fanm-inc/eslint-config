# eslint-config

## Get Started

### Installation

```bash
$ pnpm install @fanm-inc/eslint-config
```

### Usage

Create a `eslint.config.mjs` in your project root and extend the config:

```./eslint.config.mjs
import eslintConfig from '@fanm-inc/eslint-config'

export default [
  ...eslintConfig,
  {
    rules: {
      // Your custom rules here
    },
  },
];
```
