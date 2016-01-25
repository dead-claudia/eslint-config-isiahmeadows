"use strict"

// For maintaining compatibility with ES3 environments (at least in the output).

var merge = require("./merge.js")

module.exports = merge(require("./index.js"), require("./base/compat.js"))
