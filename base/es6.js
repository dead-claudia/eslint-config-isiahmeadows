"use strict"

// If using ES6 (via Babel)

module.exports = {
    env: {es6: true},
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module",
        ecmaFeatures: {
            impliedStrict: true,
        },
    },
    rules: {
        "arrow-body-style": 0,
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": 2,
        "constructor-super": 2,
        "generator-star-spacing": [2, "before"],
        "no-class-assign": 2,
        "no-confusing-arrow": 0,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-new-symbol": 2,
        "no-this-before-super": 2,
        "no-var": 2,
        "no-useless-constructor": 2,
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,
        "prefer-rest-params": 2,
        "prefer-spread": 2,
        "prefer-template": 2,
        "require-yield": 2,
        "template-curly-spacing": 2,
        "yield-star-spacing": 2,
    },
}
