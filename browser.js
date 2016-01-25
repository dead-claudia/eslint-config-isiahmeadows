"use strict"

// For the browser

var merge = require("./merge.js")

module.exports = merge(require("./index.js"), require("./base/browser.js"))
