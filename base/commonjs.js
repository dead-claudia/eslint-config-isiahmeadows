"use strict"

// For plain CommonJS, independent of runtime.

module.exports = {
    env: {commonjs: true},
    rules: {
        "strict": [2, "global"],
        "global-require": 2,
        "no-new-require": 2,
    },
}
