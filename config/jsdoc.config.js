"use strict";

const path = require("path");

const config = {
    source: {
        "include": [
            path.join(__dirname, "../app"),
            path.join(__dirname, "../config")
        ],
        includePattern: ".js$",
    },
    plugins: [
        "plugins/markdown"
    ],
    opts: {
        encoding: "utf8",
        destination: path.join(__dirname, "../docs/"),
        readme: path.join(__dirname, "../README.md"),
        recurse: true,
        template: path.join(__dirname, "../node_modules/minami"),
        tutorials: path.join(__dirname, "../docs/src/tutorials"),
        verbose: true
    }
}

module.exports = config;