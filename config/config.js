// Import required modules.
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.join(__dirname, ".env") }); // Load the environment variables.

// Define default configurations.
const defaults = {
    server: {
        port: 5500
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
    }
};