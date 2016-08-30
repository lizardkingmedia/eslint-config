'use strict';

module.exports = {
  "extends": [
    "@seed-media/eslint-config",
    "plugin:meteor/guide"
  ],

  "env": {
    "es6": true,
    "node": true,
    "meteor": true
  },

  "plugins": [
    "meteor"
  ],

  "rules": {
    "import/no-unresolved": 0,
    "no-underscore-dangle": [
      "error",
      {
        "allow": [
          "_id",
          "_ensureIndex",
          "_verifyEmailToken",
          "_resetPasswordToken",
          "_name"
        ]
      }
    ]
  }
};
