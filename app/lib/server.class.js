/**
 * The module that holds the server class.
 * 
 * @module lib/server
 * @requires path
 * @requires fs
 * @requires mongoose
 */

"use strict";

// Import required modules.
import { join } from "path";
import { existsSync } from "fs";
import mongoose from "mongoose";
import config from "../../config/app.config";
import generalRouter from "../routes/general";

/**
 * Class to manage the NodeJS and Express server.
 */
class Server {
    /**
     * Callback for retrieving errors and results.
     *
     * @callback getData
     * @param {Object} error - The error message to return.
     * @param {Object} result - The successful result data.
     * @returns {boolean} Successful execution status.
     */

    /**
     * Creates an instance of Server.
     * 
     * @param {Object} express - The express object to be used.
     * 
     * @example
     * import express from "express";
     * import Server from "./lib/server.class";
     * 
     * let server = new Server(express);
     */
    constructor(express) {
        this.express = express;
        this.app = express();
    }

    /**
     * Initialized the database connection.
     * 
     * @param {Object} options - The optional values to be overridden in the function. If none pass in "{}".
     * @param {string} [options.username=config.db.username] - The Mongo username credential.
     * @param {string} [options.password=config.db.password] - The Mongo password credential.
     * @param {string} [options.host=config.db.host] - The Mongo hostname credential.
     * @param {number} [options.port=config.db.port] - The Mongo port number credential.
     * @param {string} [options.database=config.db.database] - The Mongo database name credential.
     * @param {getData} callback - A callback to retrieve data.
     * 
     * @example
     * // Call with default params.
     * server.initDb({}, (error, result) => {
     *      if(error) return false;
     * 
     *      // do something
     * });
     * 
     * // Call with optional params.
     * server.initDb({
     *      username: "root",
     *      password: "toor",
     *      host: "8.8.8.8",
     *      port: "12345",
     *      database: "sample"
     * }, (error, result) => {
     *      if(error) return false;
     * 
     *      // do something
     * });
     */
    initDb(options, callback) {
        // Set the option values.
        let username = encodeURIComponent(options.username || config.db.username);
        let password = encodeURIComponent(options.password || config.db.password);
        let host = encodeURIComponent(options.host || config.db.host);
        let port = encodeURIComponent(options.port || config.db.port);
        let database = encodeURIComponent(options.database || config.db.database);

        // Connect to the database.
        let mongoUri = `mongodb://${username}:${password}@${host}:${port}/${database}`;
        mongoose.connect(mongoUri, { useNewUrlParser: true }, (error, result) => {
            if(error) {
                callback(error, null);
                return false;
            }

            callback(null, result.db);
            return true;
        });
    }

    /**
     * Initializes the routes to be used.
     * 
     * @example
     * server.initRoutes();
     */
    initRoutes() {
        this.app.use(generalRouter); // Import the general router.
    }

    /**
     * Initializes the views location, engine, and static files.
     * 
     * @param {Object} options - The optional values to be overridden in the function. If none pass in "{}".
     * @param {string} [options.viewPath=path.join(__dirname, "../views")] - The path where the views are stored to be used for Express.
     * @param {string} [options.viewEngine="ejs"] - The templating engine that will be used for Express.
     * @param {string} [options.staticPath=path.join(__dirname, "../public")] - The path where static files are stored to be used for Express.
     * @param {getData} callback - A callback to retrieve data.
     * 
     * @example
     * // Call with default params.
     * server.initViews({}, (error, result) => {
     *      if(error) return false;
     * 
     *      // do something
     * });
     * 
     * // Call with optional params.
     * server.initViews({
     *      viewPath: path.join(__dirname, "views"),
     *      viewEngine: "jade",
     *      staticPath: path.join(__dirname, "static")
     * }, (error, result) => {
     *      if(error) return false;
     * 
     *      // do something
     * });
    */
    initViews(options, callback) {
        // Set the option values.
        let viewPath = options.viewPath || join(__dirname, "../views");
        let viewEngine = options.viewEngine || "ejs";
        let staticPath = options.staticPath || join(__dirname, "../public");

        // Check that the specified paths exist.
        if(!existsSync(viewPath)) {
            callback(new Error(`the view path ${viewPath}" does not exist`), null);
            return false;
        }

        if(!existsSync(staticPath)) {
            callback(new Error(`the static files path ${staticPath} does not exist`), null);
            return false;
        }

        // Set the express views.
        this.app.set("views", viewPath);
        this.app.set("view engine", viewEngine);
        this.app.use(this.express.static(staticPath));

        // Fire a successful callback.
        callback(null, {
            viewPath: viewPath,
            viewEngine: viewEngine,
            staticPath: staticPath
        });
    }

    /**
     * Runs the server object
     *
     * @param {Object} options - The optional values to be overridden in the function. If none pass in "{}".
     * @param {number} [options.port=config.server.port] - The port to listen on for the web application.
     * @param {getData} callback - A callback to retrieve data.
     * 
     * @example
     * // Call with default params.
     * server.run({}, (error, result) => {
     *      if(error) return false;
     * 
     *      // do something.
     * });
     * 
     * // Call with optional params.
     * server.run({ port: 4000 }, (error, result) => {
     *      if(error) return false;
     * 
     *      // do something.
     * });
     */
    run(options, callback) {
        // Set the option values.
        let port = options.port || config.server.port;

        // Check if port is a number.
        if(typeof port !== "number") {
            callback(new Error(`the port ${port} is not a number`), null);
            return false;
        }

        // Listen on port and check for errors.
        this.app.listen(port).on("error", (error) => {
            callback(error, null);
            return false;
        });

        callback(null, this.app);
    }
}

export default Server;