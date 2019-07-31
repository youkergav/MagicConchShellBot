"use strict"

const path = require("path");
const nodeExternals = require("webpack-node-externals");
const Dotenv = require('dotenv-webpack');

const config = {
    target: "node",
    node: {
        __dirname: true
    },
    mode: "development",
    entry: {
        app: [
            path.join(__dirname, "../app/app.js")
        ]
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "server.bundle.js"
    },
    externals: [
        nodeExternals()
    ],
    plugins: [
        new Dotenv({
            path: path.join(__dirname, `../env/${process.env.NODE_ENV}.env`)
        })
    ]
}

module.exports = config;