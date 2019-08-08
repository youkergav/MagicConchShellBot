/**
 * The main script that is responsible for starting the
 * application.
 * 
 * @module app
 * @requires express
 */

"use strict";

// Import required modules.
import express from "express";
import Server from "./lib/server.class";
import Logger from "./lib/logger.class";

let server = new Server(express); // Create a server object.
let logger = new Logger;

(async () => {
    // Initialize the server.
    await (() => {
        return new Promise((resolve) => {
            server.initDb({}, (error, result) => {
                if(error) {
                    logger.error("db.init.false", "the mongo database failed to initialize");
                    logger.debug(error);

                    return false;
                }
        
                logger.info("db.init.true", "the mongo database is online");
                logger.debug(result.s);
    
                resolve(result);
            });
    
            server.initRoutes();
        
            server.initViews({}, (error, result) => {
                if(error) {
                    logger.error("server.express.views.init.false", "the express views failed to initialize");

                    return false;
                };

                logger.verbose("server.express.views.init.true", "express views initialized");
            });
        });
    })();

    // Run the server.
    server.run({}, (error, result) => {
        if(error) {
            logger.error("server.start.false", "the express server failed to start");
            logger.debug(error);
            
            return false;
        };
    
        logger.info("server.start.true", "the express server is online");
        logger.debug(result.settings);
    });
})();