'use strict';

module.exports = {
  "extends": [
    "@seed-media/eslint-config",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": "warn"
  }
};
