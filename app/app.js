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
import config from "../config/app.config";
import Server from "./lib/server.class";
import Logger from "./lib/logger.class";

let server = new Server(express); // Create a server object.
let logger = new Logger(config.node.blacklist);

(async () => {
    // Initialize the server.
    await (() => {
        return new Promise((resolve) => {
            server.initDb({}, (error, result) => {
                if(error) {
                    logger.error("db.start.fail", "the mongo database failed to initialize");
                    logger.debug(error);

                    return false;
                }
        
                logger.info("db.start.success", "the mongo database is online");
                // logger.debug(result.s);
    
                resolve(result);
            });
    
            server.initRoutes();
        
            server.initViews({}, (error, result) => {
                if(error) {
                    logger.error("server.express.views.init.fail", "the express views failed to initialize");

                    return false;
                };

                logger.verbose("server.express.views.init.success", "express views initialized");
            });
        });
    })();

    // Run the server.
    server.run({}, (error, result) => {
        if(error) {
            logger.error("server.start.fail", "the express server failed to start");
            logger.debug(error);
            
            return false;
        };
    
        logger.info("server.start.success", "the express server is online");
        logger.debug({
            user: { 
                username: "youkergav", 
                password: "testing",
                ssn: "1234567890",
                address: "ur moms house",
                test: "TEST"
            }, 
        });
        // logger.debug(result.settings);
    });
})();