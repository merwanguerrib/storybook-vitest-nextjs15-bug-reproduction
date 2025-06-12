# Storybook Vitest + Next.js 15 Bug Reproduction

This is a minimal reproduction case for the Storybook Vitest addon failing with Next.js 15 due to React module resolution conflicts.

**GitHub Issue**: https://github.com/storybookjs/storybook/issues/31760

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

Next.js 15 compiles React into `next/dist/compiled/react/*` but Vitest addon expects standard React module paths, creating invalid paths like `index.js/jsx-runtime`.

## Environment

- **Storybook**: 9.0.8
- **Framework**: @storybook/nextjs-vite
- **Next.js**: 15.1.0
- **React**: 19.0.0
- **Vitest**: 3.2.3
- **Node**: 18+

## Files of Interest

- `src/components/Button.stories.tsx` - Story with interaction test that fails in CLI
- `vitest.config.ts` - Configuration that triggers the bug
- `.storybook/main.ts` - Storybook config with Vitest addon enabled

## Workaround

Storybook UI testing works perfectly! You can:
1. Run `npm run storybook`
2. Navigate to the Button story
3. Click the \"🤖 Automated Click Test\" story
4. Use the \"Play\" button to run the interaction test

This provides the same testing capabilities as the CLI but requires manual execution in the browser.