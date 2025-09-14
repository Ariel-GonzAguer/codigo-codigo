// eslint flat config minimal (ESM)
const tsParser = (await import('@typescript-eslint/parser')).default;
const tsPlugin = (await import('@typescript-eslint/eslint-plugin')).default;

export default [
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    linterOptions: { reportUnusedDisableDirectives: true },
    rules: {
      // Puedes ajustar reglas aquí; mantenemos lo esencial para evitar fallos.
      'no-unused-vars': 'warn',
      'no-undef': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
  },
];
