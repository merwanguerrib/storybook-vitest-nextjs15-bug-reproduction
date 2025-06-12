# Storybook Vitest + Next.js 15 Bug Reproduction

This is a minimal reproduction case for the Storybook Vitest addon failing with Next.js 15 due to React module resolution conflicts.

## Setup

```bash
npm install
npx storybook@latest init --yes
```

## Reproduction

### Working (UI Testing)
```bash
npm run storybook  # Opens http://localhost:6006
# Click \"🤖 Automated Click Test\" story and use Play button
```

### Failing (CLI Testing)
```bash
npm run test-storybook
# Error: Cannot read file: .../next/dist/compiled/react/index.js/jsx-runtime
```

## Expected Error

```
Error: Cannot read file: /path/to/project/node_modules/next/dist/compiled/react/index.js/jsx-runtime
Error: Cannot read file: /path/to/project/node_modules/next/dist/compiled/react-dom/index.js/client
```

## Root Cause

Next.js 15 compiles React into `next/dist/compiled/react/*` but Vitest addon expects standard React module paths.

## Related GitHub Issue

This reproduction is for: [Storybook Issue #XXXXX](https://github.com/storybookjs/storybook/issues/XXXXX)