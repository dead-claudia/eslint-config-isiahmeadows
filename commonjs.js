"use strict"

// For plain CommonJS, independent of runtime.

var merge = require("./merge.js")

module.exports = merge(require("./index.js"), require("./base/commonjs.js"))
