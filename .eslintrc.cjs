
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  extends: [
    '@nuxt/eslint-config',
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/attribute-hyphenation': 'error',
    'vue/script-indent': ['error', 2, { baseIndent: 0 }],
    'vue/no-side-effects-in-computed-properties': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': ['error', 2],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-v-html': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/script-indent': 'off' // Отключить правило vue/script-indent для .vue файлов
      }
    }
  ]
};
