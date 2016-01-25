"use strict"

// For Node 4, which has incomplete ES6 support

var merge = require("./merge.js")

module.exports = merge(require("./index.js"), require("./base/node-4.js"))
