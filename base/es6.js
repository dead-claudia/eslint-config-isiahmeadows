"use strict"

// If using ES6 (via Babel)

module.exports = {
    env: {es6: true},
    ecmaFeatures: {modules: true},
    rules: {
        // "use strict" declarations are implicit, so this is almost a no-op.
        "strict": [2, "global"],
        "arrow-body-style": 2,
        "arrow-parens": [2, "as-needed"],
        "arrow-spacing": 2,
        "constructor-super": 2,
        "generator-star-spacing": [2, "before"],

        // This leads to a major gotcha in its buggy implementation.
        // See https://github.com/eslint/eslint/issues/4417
        "no-arrow-condition": 0,

        "no-class-assign": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-this-before-super": 2,
        "no-var": 2,
        "object-shorthand": 2,
        "prefer-arrow-callback": 2,
        "prefer-const": 2,

        // None of the polyfills reduce to that ES6 call.
        "prefer-reflect": 0,

        "prefer-spread": 2,
        "prefer-template": 2,
        "require-yield": 2,
    },
}
