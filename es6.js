"use strict"

// If using ES6 (via Babel)

var merge = require("./merge.js")

module.exports = merge(require("./index.js"), require("./base/es6.js"))
