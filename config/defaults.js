/**
 * The defaults configuration file.
 * @module config/defaults
 */

"use strict";

/**
 * The object to hold default configuration data.
 * 
 * 
 * @const
 * @type {Object}
 * @property {string} env - The environment of the application state. Set by NODE_ENV.
 * @property {Object} server - The server data for the NodeJS application.
 * @property {number} server.port - The port the server will run on.
 * @property {Object} db - The data to connect to the database.
 * @property {string} db.host - The hostname of the database.
 * @property {number} db.port - The port the database is listening on.
 */
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