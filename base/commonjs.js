"use strict"

// For plain CommonJS, independent of runtime.

module.exports = {
    env: {commonjs: true},
    rules: {
        "global-require": 2,
        "no-new-require": 2,
    },
}
