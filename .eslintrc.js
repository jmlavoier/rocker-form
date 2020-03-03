module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "airbnb"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-restricted-globals": ["error", "event", "fdescribe"],
    'jsx-a11y/anchor-has-content': 2,
    'jsx-a11y/label-has-for': 2,
    'jsx-a11y/heading-has-content': 2,
    'react/jsx-filename-extension': 0,
    "import/extensions": 0,
    "import/prefer-default-export": 0,
    "import/no-dynamic-require": 0,
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": [
            "src/**/*.test.js",
            "jest/setup.js",
            "webpack/config.*.js",
        ]
      }
    ],
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./webpack/config.dev.js",
      },
    },
  },
};