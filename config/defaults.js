"use strict";

const defaultConfig = {
    env: process.env.NODE_ENV,
    server: {
        port: 5500
    },
    db: {
        host: "localhost",
        port: 27017
    }
};

module.exports = defaultConfig;