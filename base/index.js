'use strict';

module.exports = {
  "extends": [
    "airbnb/base"
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
}
