// Import required modules.
const path = require('path');
const dotenv = require("dotenv")

dotenv.config({ path: path.join(__dirname, "master.env") }); // Load the master environment variables.
dotenv.config({ path: path.join(__dirname, process.env.NODE_ENV + ".env") }); // Load all the environment variables.

// Define default configs.
const defaults = {
    server: {
        port: 5500
    }
}

// Export all configs.
module.exports = {
    env: process.env.NODE_ENV,
    server: {
        port: process.env.SERVER_PORT || defaults.server.port
    },
    api: {
        username: process.env.API_USERNAME,
        password: process.env.API_PASSWORD
    }
}