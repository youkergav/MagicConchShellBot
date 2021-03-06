"use strict";

const config =  {
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        quotes: [
            "warn",
            "double"
        ],
        semi: [
            "warn",
            "always"
        ],
        "keyword-spacing": [
            "warn",
            {
                after: false,
                before: false
            }
        ],
        "space-before-function-paren": [
            "warn",
            "never"
        ],
        "switch-colon-spacing": [
            "warn",
            {
                after: true,
                before: false
            }
        ],
        eqeqeq: [
            "warn",
            "smart"
        ],
        "handle-callback-err": "warn",
        "no-mixed-requires": "warn"
    }
}

module.exports = config;