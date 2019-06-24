// Import required modules.
const path = require('path');
const dotenv = require("dotenv")

dotenv.config({ path: path.join(__dirname, ".env") }); // Load the environment variables.

// Define default configurations.
const defaults = {
    server: {
        port: 5500
    }
}

// Define environment configuration.
var envConfigs = {
    dev: {
        server: {
            port: process.env.DEV_SERVER_PORT || defaults.server.port
        },
        api: {
            username: process.env.DEV_API_USERNAME,
            password: process.env.DEV_API_PASSWORD,
            authCode: process.env.DEV_API_AUTHCODE,
            accessToken: process.env.DEV_API_ACCESSTOKEN
        }
    },
    test: {
        app: {
            server: process.env.TEST_SERVER_PORT || defaults.server.port
        },
        api: {
            username: process.env.TEST_API_USERNAME,
            password: process.env.TEST_API_PASSWORD,
            authCode: process.env.TEST_API_AUTHCODE,
            accessToken: process.env.TEST_API_ACCESSTOKEN
        }
    }
}

module.exports = envConfigs[process.env.NODE_ENV] // Export the configuration.
