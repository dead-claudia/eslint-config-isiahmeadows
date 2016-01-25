# eslint-config-isiahmeadows

My ESLint preset for most of my projects (and all new ones I create).\* You can
look into each of the files to see what all the rules are. And yes, this project
uses itself as its own ESLint config (and works).

This is a global package for anyone who wants to use my config and/or agrees
with my code style opinions.

\* Well...that's sort of a lie, since I'm in the process of merging my existing
configs to use this one.

## Usage

1.  Install ESLint and this module.

    ```
    npm install --save-dev eslint eslint-plugin-isiahmeadows
    ```

2.  Create an `.eslintrc` file with one of these presets.

    ```json
    {"extends": "isiahmeadows/node"}
    ```

3.  Code away! :smile:

And if there's something you feel doesn't quite fit your style, it's a preset.
[You can make all the changes you feel you need.](http://eslint.org/docs/user-guide/configuring)

Although, why would you? It's readymade for you to start. Kinda like
[Standard](http://standardjs.com/).

## Why not Standard?

Although I agree with some things, like skipping semicolons, spacing keywords,
or strict checking except for `== null`, there are things I don't agree with:

-   Two spaces make the pyramid of doom a bit less steep, so it's not as
    obvious of a problem to fix. This is a bad thing. This set of presets uses
    an indent of 4 spaces, to make this much more clear.

-   Double quotes are better than single quotes. I use apostrophes much more
    often than quotes. You can still use the latter to avoid escaping.

-   Adding a space after the name of a named function isn't consistent with
    calling that function. That's ugly in my opinion.

-   Prefixing browser methods with `window.` gets repetitive and annoying after
    a while. All it does is increase boilerplate without adding anything
    meaningful.

I also feel a few things were missed, like max line length, function length, or
block depth. I limit those to 80 characters, 25 statements, and 4 levels
(excluding functions), respectively. This helps further make it easier and
clearer to keep your functions small and simple. In my experience, 99% of the
issues I have with this are fixable through refactoring.

## Tips

-   Keep your function names concise and self-descriptive. Common abbreviations
    are generally acceptable if it's very clear from context and the variable is
    only used in a small scope, but don't take this to an extreme (e.g. `xs` is
    *not* a preferable name for a list, but `i` for a loop index is okay).
    Here's a few examples:

    ```js
    // Bad
    function copyOwnProperties(destination, source) {
        for (var property in source) {
            if ({}.hasOwnProperty.call(source, property)) {
                destination[property] = source[property]
            }
        }
    }

    function clearNode(parentNode) {
        while (parentNode.firstChild) {
            parentNode.removeChild(parentNode.firstChild)
        }
    }

    function forEach(array, callback) {
        for (var index = 0; index < array.length; index++) {
            callback(array[index], index)
        }
    }

    // Better
    function assign(dest, src) {
        for (var key in src) if ({}.hasOwnProperty.call(src, key)) {
            dest[key] = src[key]
        }
    }

    function clear(node) {
        while (node.firstChild) node.removeChild(node.firstChild)
    }

    function forEach(list, func) {
        for (var i = 0; i < list.length; i++) {
            func(list[i], i)
        }
    }
    ```

-   Do heed the various limits. Trust me in that even though it makes callbacks
    slightly inconvenient at times, it makes stack traces more meaningful, and
    it makes it easier to reason about the code. I'd rather slightly unwieldy
    callbacks over slightly convoluted logic.

## Presets

Each of these refer to files within this directory, with all the merging magic
in ./merge.js. And do note that each of these are standalone presets.

-   **isiahmeadows** (isiahmeadows/index)

    The base preset for everything here. If you need some custom magic in your
    .eslintrc, just extend this file. Most of the rest of the rules are minor
    variations of this, and only exist to target a more specialized use case.

    Do note that this enables function-level strict mode, not global, by
    default.

-   **isiahmeadows/browser**, **isiahmeadows/worker**

    Presets for my web projects. If either of these are used with anything else,
    include it first (e.g. with isiahmeadows/node or isiahmeadows/commonjs). It
    is not advisable to use both together, as in practice, no runtime actually
    supports both simultaneously.

-   **isiahmeadows/commonjs**

    A preset for anything that works with CommonJS, but is otherwise
    platform-agnostic (it doesn't need any browser/Node APIs). Generally used
    for utility libraries without dependencies that consist of multiple files.

-   **isiahmeadows/compat**

    A preset for anything requiring ES3 support or support for older browsers.
    It also checks some IE quirks. If any other presets are used, this should be
    included last.

-   **isiahmeadows/es6**

    A preset for using ES6 (with Babel). It supports modules as well as
    everything else.

-   **isiahmeadows/node**

    A preset for Node. It doesn't include all the Node 4+ stuff, and includes 0
    support for ES6. For that, use isiahmeadows/node-4.

-   **isiahmeadows/node-4**

    A preset for Node 4 and later. It includes all the parts of ES6 that Node 4
    supports, and the relevant ES6 rules also set in isiahmeadows/es6.

## API

You can use these programmatically use each of these in your own `.eslintrc.js`,
and merge them however you want. Each of these presets without the base preset
can be retrieved from isiahmeadows/base/{preset-name}, with exception of the
base preset itself. And if you need to combine rules, you can use merge.js to do
whatever you need. This utility is also used to create the presets themselves.

```js
// Equivalent to the following .eslintrc.yml:
//
// extends:
//     - isiahmeadows/node
//     - isiahmeadows/es6

var merge = require("eslint-config-isiahmeadows/merge")

module.exports = merge(
    require("eslint-config-isiahmeadows"),
    require("eslint-config-isiahmeadows/base/node"),
    require("eslint-config-isiahmeadows/base/es6"))
```
