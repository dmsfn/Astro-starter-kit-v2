import globals from 'globals';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    ignores: [
      '.git/**',
      '.vscode/**',
      'gulpfile.js',
      'node_modules/**',
      'dist/**',
    ],
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];
