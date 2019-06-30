// Import required modules.
const path = require("path");
const dotenv = require("dotenv");
const defaults = require("./defaults");

dotenv.config({ path: path.join(__dirname, `../env/${defaults.env}.env`) }); // Load the environment variables.

// Define all configurations.
module.exports = {
    env: defaults.env,
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