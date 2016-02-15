"use strict"

// For Node/io.js. This includes 0.x as well.

var merge = require("../merge.js")

// Only disallow what can't be gained from the global scope (and removed
// smalloc).
var restricted = [
    "buffer",
    "console",
    "timers",
    "process",
    "smalloc",
]

module.exports = merge(require("./commonjs.js"), {
    env: {commonjs: null, node: true},
    rules: {
        "no-restricted-imports": [2].concat(restricted),
        "no-restricted-modules": [2].concat(restricted),
    },
})
