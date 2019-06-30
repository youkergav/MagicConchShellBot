// Import required modules.
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, ".env") }); // Load the environment variables.

// Define default configurations.
const defaults = {
    server: {
        port: 5500
    },
    db: {
        host: "localhost",
        port: 27017
    }
};

// Define all configurations.
module.exports = {
    env: process.env.NODE_ENV,
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