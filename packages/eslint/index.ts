module.exports = {
  "ignorePatterns": ["*.cy.js"],
  "env": {
    "browser": true,
    "es2021": true,
    "es6": true,
    "vue/setup-compiler-macros": true
  },
  "extends": [
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "camelcase": "error",
    "no-unused-vars": "off",
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": false
      }
    ],
    "implicit-arrow-linebreak": ["off"],
    "curly": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/consistent-generic-constructors": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/sort-type-constituents": "error",
    "@typescript-eslint/no-duplicate-enum-values": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "require-explicit-generics/require-explicit-generics": [
      "warn",
      ["computed", "ref"]
    ],
    "unused-imports/no-unused-imports": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "vue/no-reserved-component-names": [
      "error",
      {
        "disallowVueBuiltInComponents": true,
        "disallowVue3BuiltInComponents": true
      }
    ],
    "vue/no-v-html": "off",
    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        "registeredComponentsOnly": true
      }
    ],
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "always",
          "normal": "always",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }
    ],
    "vue/require-prop-types": ["error"],
    "vue/require-default-prop": ["error"],
    "vue/v-bind-style": ["error", "shorthand"],
    "vue/v-on-style": ["error", "shorthand"],
    "vue/attributes-order": [
      "error",
      {
        "order": [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          ["UNIQUE", "SLOT"],
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ],
        "alphabetical": true
      }
    ],
    "vue/require-explicit-emits": [
      "error",
      {
        "allowProps": false
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "semi": true,
        "tabWidth": 2,
        "singleQuote": true,
        "jsxSingleQuote": true,
        "bracketSpacing": true,
        "printWidth": 120,
        "trailingComma": "es5",
        "bracketSameLine": false,
        "useTabs": false,
        "arrowParens": "always",
        "singleAttributePerLine": true,
        "endOfLine": "auto",
        "quoteProps": "consistent"
      }
    ],
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.{vue}": "PASCAL_CASE",
        "**/*.{js,ts}": "CAMEL_CASE"
      },
      {
        "ignoreMiddleExtensions": true
      }
    ],
    "check-file/folder-naming-convention": [
      "error",
      {
        "src/**/": "KEBAB_CASE"
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "cypress/e2e/**/*.{cy,spec}.ts"
      ],
      "extends": [
        "plugin:cypress/recommended"
      ]
    }
  ],
  "plugins": [
    "vue",
    "simple-import-sort",
    "prettier",
    "require-explicit-generics",
    "unused-imports",
    "check-file"
  ]
}
