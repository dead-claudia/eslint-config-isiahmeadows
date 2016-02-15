"use strict"

// The base rule set

// Node's internal modules. This list is overridden for isiahmeadows/node*, but
// it's here for safety with CommonJS, to reduce dependencies.
var restricted = [
    "assert", "buffer", "child_process", "cluster", "console", "constants",
    "crypto", "dgram", "dns", "domain", "events", "fs", "http", "https",
    "module", "net", "os", "path", "process", "punycode", "querystring",
    "readline", "repl", "smalloc", "stream", "string_decoder", "sys", "timers",
    "tls", "tty", "url", "util", "v8", "vm", "zlib",
]

var variablePattern = "(" + [
    "[$_]\\w*", // _ for Lodash, _private, _0, $ and $el for jQuery, etc.
    "[^\\W\\d]\\w*", // someValue, x1, etc.
    "[A-Z]([A-Z_]*[A-Z])?", // SOME_CONSTANT
].join("|") + ")"

module.exports = {
    rules: {
        "comma-dangle": [2, "always-multiline"],
        "no-cond-assign": 2,
        "no-console": 0,
        "no-constant-condition": 2,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": [2, "all", {conditionalAssign: false}],
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-unexpected-multiline": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-jsdoc": 0,
        "valid-typeof": 2,

        "accessor-pairs": 0,
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "complexity": 0,
        "consistent-return": 2,
        "curly": [2, "multi-line", "consistent"],
        "default-case": 2,
        "dot-location": [2, "property"],
        "dot-notation": [2, {allowPattern: "^((?:" + variablePattern + ").)$"}],
        "eqeqeq": [2, "allow-null"],
        "guard-for-in": 2,
        "no-alert": 2,
        "no-caller": 2,
        "no-case-declarations": 2, // This only has an effect in ES6+ code.
        "no-div-regex": 2,
        "no-else-return": 0,
        "no-empty-function": 0,
        "no-empty-pattern": 2,
        "no-eq-null": 0,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-label": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-implicit-coercion": [2, {
            boolean: true, // Disallow ~list.indexOf(item)
            number: false,
            string: false,
            allow: ["!!"],
        }],
        "no-implicit-globals": 2, // Not relevant in ES/CommonJS modules
        "no-implied-eval": 2,
        "no-iterator": 2,
        "no-labels": [2, {allowLoop: false, allowSwitch: false}],
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-magic-numbers": 0, // Little too nuanced to enable.
        "no-multi-spaces": 2, // This can be disabled if it helps readability.
        "no-multi-str": 2, // Use Array.prototype.join()
        "no-native-reassign": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-new": 2, // Constructors should not execute, just initialize.
        "no-octal-escape": 2,
        "no-octal": 2,
        "no-param-reassign": 0,
        "no-proto": 0,
        "no-redeclare": 2,
        "no-script-url": 2,
        "no-self-assign": 2,
        "no-self-compare": 2, // Only disable for NaN checks
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 2,
        "no-unused-expressions": 2,
        "no-unused-labels": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-void": 2,
        "no-warning-comments": 1, // Only warning. Exists to nag.
        "no-with": 2,
        "radix": 2,
        "wrap-iife": [2, "inside"],
        "yoda": [2, "never", {exceptRange: true}],

        "strict": 2,

        "init-declarations": 0,
        "no-catch-shadow": 0,
        "no-delete-var": 2,
        "no-label-var": 2,
        "no-shadow-restricted-names": 2,
        "no-shadow": 0, // Avoid if possible, but this rule is too general IMHO.
        "no-undef-init": 2,
        "no-undef": [2, {
            typeof: true, // In my experience, this masks bugs when not checked
        }],
        "no-undefined": 0,
        "no-unused-vars": 2,
        "no-use-before-define": [2, {functions: false, classes: false}],

        // Mostly Node-specific stuff that translates well to other runtimes as
        // well.
        "callback-return": [2, ["callback", "cb", "next", "done"]],
        "global-require": 2,
        "handle-callback-err": [2, "^(err|error)$"],
        "no-mixed-requires": 0,
        "no-new-require": 2,
        "no-path-concat": 2,
        "no-process-exit": 2, // This should only be disabled for CLI scripts.
        "no-restricted-imports": [2].concat(restricted),
        "no-restricted-modules": [2].concat(restricted),
        "no-sync": 0,

        "array-bracket-spacing": 2,
        "block-spacing": 2,
        "brace-style": [2, "1tbs", {allowSingleLine: true}],
        "camelcase": 2,
        "comma-spacing": 2,
        "comma-style": 2,
        "computed-property-spacing": 2,
        "consistent-this": [2, "self"],
        "eol-last": 2,
        "func-names": 0,
        "func-style": [2, "declaration", {allowArrowFunctions: true}],
        "id-length": 0,
        "id-match": [2, "^" + variablePattern + "$", {properties: true}],
        "id-blacklist": 0,
        "indent": [2, 4],
        "jsx-quotes": 2,
        "key-spacing": 2,
        "keyword-spacing": 2,
        "linebreak-style": [2, "unix"],
        "lines-around-comment": [2, {
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
            allowBlockEnd: true,
            allowObjectStart: true,
            allowObjectEnd: true,
            allowArrayStart: true,
            allowArrayEnd: true,
        }],
        "max-depth": [2, 4],
        "max-len": [2, 80, 4, {ignoreUrls: true}],
        "max-nested-callbacks": [2, 4],
        "max-params": [2, 4],
        "max-statements": [2, 25],
        "new-cap": 2,
        "new-parens": 2,
        "newline-after-var": 2,
        "newline-per-chained-call": [2, {ignoreChainWithDepth: 4}],
        "no-array-constructor": 2,
        "no-bitwise": 0, // These are usually intentional, and easy to spot.
        "no-continue": 0,
        "no-inline-comments": 0, // Little too nuanced to enable.
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": [2, {max: 1}],
        "no-negated-condition": 0,
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-plusplus": 0,
        "no-restricted-syntax": 0,
        "no-whitespace-before-property": 2,
        "no-spaced-func": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 2,
        "no-underscore-dangle": 0, // This is moot with id-match.
        "no-unneeded-ternary": 2,
        "object-curly-spacing": 2,
        "one-var": [2, {initialized: "never"}],
        "one-var-declaration-per-line": 0, // This is moot with one-var.
        "operator-assignment": 2,
        "operator-linebreak": [2, "after", {
            overrides: {"?": "before", ":": "before"},
        }],
        "padded-blocks": [2, "never"],
        "quote-props": [2, "consistent-as-needed"],
        "quotes": [2, "double", "avoid-escape"],
        "require-jsdoc": 0,
        "semi-spacing": 0,
        "semi": [2, "never"],
        "sort-vars": 0,
        "sort-imports": 0,
        "space-before-blocks": 2,
        "space-before-function-paren": [2, {
            anonymous: "always",
            named: "never",
        }],
        "space-in-parens": 2,
        "space-infix-ops": [2, {int32Hint: true}],
        "space-unary-ops": 2,
        "spaced-comment": [2, "always"],
        "wrap-regex": 0,
    },
}
