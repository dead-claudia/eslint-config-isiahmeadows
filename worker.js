"use strict"

// For browser workers

var merge = require("./merge.js")

module.exports = merge(require("./index.js"), require("./base/worker.js"))
