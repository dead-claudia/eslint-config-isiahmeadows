"use strict"

// For Node/io.js. This includes 0.x as well.

var merge = require("./merge.js")

module.exports = merge(require("./index.js"), require("./base/node.js"))
