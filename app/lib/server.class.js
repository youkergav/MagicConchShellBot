"use strict";

// Import required modules.
const path = require("path");
const config = require("../../config/config");

class Server {
    constructor(express) {
        this.express = express;
        this.app = express();
    }

    initDb() {
        // Import required modules.
        const mongoose = require("mongoose");

        // Define database credentials.
        let dbUser = encodeURIComponent(config.db.username);
        let dbPass = encodeURIComponent(config.db.password);
        let dbDatabase = encodeURIComponent(config.db.database);
        let mongoUri = `mongodb://${dbUser}:${dbPass}@${config.db.host}:${config.db.port}/${dbDatabase}`;

        mongoose.connect(mongoUri, { useNewUrlParser: true }); // Connect to the database.

        return true;
    }

    initRoutes() {
        // Import required routes.
        const generalRouter = require("../routes/general");

        this.app.use(generalRouter); // Import the general router.

        return true;
    }

    initViews() {
        this.app.set("views", path.join(__dirname, "../views")); // Set the view location.
        this.app.set("view engine", "ejs"); // Set the view engine.
        this.app.use(this.express.static(path.join(__dirname, "../public"))); // Set the static location.

        return true;
    }

    run() {
        this.app.listen(config.server.port);
    }
}

module.exports = Server;