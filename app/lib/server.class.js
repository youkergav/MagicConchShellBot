/**
 * The module for that holds the server class.
 * 
 * @module lib/server
 * @requires path
 */

"use strict";

// Import required modules.
import { join } from "path";
import mongoose from "mongoose";
import { db, server } from "../../config/app.config";
import generalRouter from "../routes/general";

/**
 * Class to manage the NodeJS and Express server.
 */
class Server {
    /**
     * Creates an instance of Server.
     * 
     * @param {Object} express - The express object to be used.
     */
    constructor(express) {
        this.express = express;
        this.app = express();
    }

    /**
     * Initialized the database connection.
     * 
     * @param {Object} [options] - The optional values to be overridden in the function.
     * @param {string} [options.dbUser] - The Mongo username credential.
     * @param {string} [options.dbPass] - The Mongo password credential.
     * @param {string} [options.dbHost] - The Mongo hostname credential.
     * @param {number} [options.dbPort] - The Mongo port number credential.
     * @param {string} [options.dbDatabase] - The Mongo database name credential.
     * @returns {boolean} Successful execution status.
     */
    initDb(optional={}) {
        // Set the option values.
        let dbUser = encodeURIComponent(optional.dbUser || db.username);
        let dbPass = encodeURIComponent(optional.dbPass || db.password);
        let dbHost = encodeURIComponent(optional.dbHost || db.host);
        let dbPort = encodeURIComponent(optional.dbPort || db.port);
        let dbDatabase = encodeURIComponent(optional.dbDatabase || db.database);

        // Connect to the database.
        let mongoUri = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbDatabase}`;
        mongoose.connect(mongoUri, { useNewUrlParser: true });

        return true;
    }

    /**
     * Initializes the routes to be used.
     * 
     * @returns {boolean} Successful execution status.
     */
    initRoutes() {
        this.app.use(generalRouter); // Import the general router.

        return true;
    }

    /**
     * Initializes the views location, engine, and static files.
     * 
     * @param {Object} [options] - The optional values to be overridden in the function.
     * @param {string} [options.viewPath] - The path where the views are stored to be used for Express.
     * @param {string} [options.viewEngine] - The templating engine that will be used for Express.
     * @param {string} [options.staticPath] - The path where static files are stored to be used for Express.
     * @returns {boolean} Successful execution status.
    */
    initViews(optional={}) {
        // Set the option values.
        let viewPath = optional.viewPath || "../views";
        let viewEngine = optional.viewEngine || "ejs";
        let staticPath = optional.staticPath || "../public";

        this.app.set("views", join(__dirname, viewPath)); // Set the view location.
        this.app.set("view engine", viewEngine); // Set the view engine.
        this.app.use(this.express.static(join(__dirname, staticPath))); // Set the static location.

        return true;
    }

    /**
     * Runs the server object
     *
     * @param {Object} [options] - The optional values to be overridden in the function.
     * @param {number} [options.port] - The port to listen on for the web application.
     * @returns {boolean} Successful execution status.
     */
    run(options={}) {
        // Set the option values.
        let port = options.port || server.port;

        this.app.listen(port);
    }
}

export default Server;