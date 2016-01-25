"use strict"

// For Node 4, which has incomplete ES6 support

var merge = require("../merge.js")

module.exports = merge(require("./node.js"), {
    ecmaFeatures: {
        arrowFunctions: true,
        binaryLiterals: true,
        blockBindings: true,
        classes: true,
        forOf: true,
        generators: true,
        objectLiteralComputedProperties: true,
        objectLiteralDuplicateProperties: true,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true,
        octalLiterals: true,
        superInFunctions: true,
        templateStrings: true,
        unicodeCodePointEscapes: true,
    },

    rules: {
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": 2,
        "constructor-super": 2,
        "generator-star-spacing": [2, "before"],
        "no-class-assign": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-this-before-super": 2,
        "no-var": 2,
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-template": 2,
        "require-yield": 2,
    },
})
