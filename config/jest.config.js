"use strict";

const path = require("path");

const config = {
    rootDir: path.join(__dirname, "../tests"),
    testEnvironment: "node",
    setupFilesAfterEnv: [
        path.join(__dirname, "../tests/setup.js")
    ]
}

module.exports = config;