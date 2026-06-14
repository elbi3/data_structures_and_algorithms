import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // globals: true means describe/it/expect/vi are available
    // without importing them in every test file — one less
    // thing to type while you're live-coding.
    globals: true,
    environment: 'node',
    include: ['homeworks/**/*.test.js'],
  },
});
