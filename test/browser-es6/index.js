// Simple utility to merge two rules together.

const hasOwn = Object.prototype.hasOwnProperty

function copySingle(dest, src, prop) {
    const value = src[prop]

    if (value == null) {
        delete dest[prop]
    } else {
        dest[prop] = src[prop]
    }
}

function copyObject(dest, src, key) {
    if (!hasOwn.call(src, key)) return
    if (!hasOwn.call(dest, key)) dest[key] = {}

    src = src[key]
    dest = dest[key]

    for (const prop of Object.keys(src)) {
        copySingle(dest, src, prop)
    }
}

function copyArray(dest, src, key) {
    if (!hasOwn.call(src, key)) return
    if (!hasOwn.call(dest, key)) dest[key] = []
    if (!Array.isArray(dest[key])) dest[key] = [dest[key]]
    dest[key] = dest[key].concat(src[key])
}

function copy(dest, src, key) {
    if (hasOwn.call(src, key)) {
        copySingle(dest, src, key)
    }
}

function merge(ret, config) {
    copyArray(ret, config, "extends")
    copy(ret, config, "parser")
    copyObject(ret, config, "parserOptions")
    copyArray(ret, config, "plugins")
    copyObject(ret, config, "settings")
    copyObject(ret, config, "env")
    copyObject(ret, config, "globals")
    copyObject(ret, config, "rules")
}

export default function (...args) {
    const ret = {}

    args.forEach(arg => merge(ret, arg))

    return ret
}

window.setTimeout(() => {}, 0)
