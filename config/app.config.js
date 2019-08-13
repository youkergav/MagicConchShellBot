/**
 * The main configuration file.
 * @module config/config
 * @requires path
 * @requires dotenv
 */
"use strict";

import { join } from "path";
import { config as _config } from "dotenv";

const nodeEnv = process.env.NODE_ENV;
_config({ path: join(__dirname, `../env/${nodeEnv}.env`) }); // Load the environment variables.

/**
 * The object to hold default configuration data.
 * 
 * @const
 * @type {Object}
 * @property {Object} server - The server data for the NodeJS application.
 * @property {number} server.port - The port the server will run on.
 * @property {Object} db - The data to connect to the database.
 * @property {string} db.host - The hostname of the database.
 * @property {number} db.port - The port the database is listening on.
 */
const defaults = {
    server: {
        port: 5500
    },
    db: {
        host: "localhost",
        port: 27017
    }
};

/**
 * The object to hold all application configuration data.
 * 
 * @const
 * @type {Object}
 * @property {Object} node - The application metadata.
 * @property {string} node.env - The environment of the application state. Set by NODE_ENV.
 * @property {Array} node.blacklist - The blacklist that will used to mask sensitive objects. Array elements must be regular expressions.
 * @property {Object} [server] - The server data for the NodeJS application.
 * @property {number} [server.port=defaults.server.port] - The port the server will run on.
 * @property {Object} api - The credentials and data held in the API.
 * @property {string} api.username - The username to authenticate with the API.
 * @property {string} api.password - The password to authenticate with the API.
 * @property {Object} db - The data to connect to the database.
 * @property {string} db.username - The username of the database user.
 * @property {string} db.password - The password of the database user.
 * @property {string} [db.host=defaults.db.host] - The hostname of the database.
 * @property {number} [db.port=defaults.db.port] - The port the database is listening on.
 * @property {string} db.database - The name of the database to connect to.
 */
const config = {
    node: {
        env: nodeEnv,
        blacklist: [
            /.*password.*/,
            /.*ssn.*/
        ]
    },
    log: {
        consoleLevel: process.env.LOG_CONSOLE_LEVEL || nodeEnv === "sandbox" ? "verbose" : "debug",
        fileLevel: process.env.LOG_FILE_LEVEL || nodeEnv === "sandbox" ? "debug" : "verbose",
    },
    server: {
        port: parseInt(process.env.SERVER_PORT) || defaults.server.port
    },
    api: {
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD
    },
    db: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST || defaults.db.host,
        port: parseInt(process.env.DB_PORT) || defaults.db.port,
        database: process.env.DB_DATABASE
    }
};

export default config;