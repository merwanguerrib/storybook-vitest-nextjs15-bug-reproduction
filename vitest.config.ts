import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    storybookTest({
      configDir: resolve(__dirname, '.storybook'),
      storybookScript: 'npm run storybook -- --ci',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      name: 'chromium',
      headless: true,
    },
    globals: true,
  },
});