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

let server = new Server(express); // Create a server object.

// Initialize the server.
(async () => {
    await (() => {
        server.initDb({}, (error, result) => {
            if(error) {
                console.log("error initializing database");
                return false;
            }
    
            console.log("initialized database");
            console.log(`host: ${result.host}`);
            console.log(`port: ${result.port}`);
            console.log(`username: ${result.user}`);
            console.log(`database: ${result.name}`);
        });
    
        server.initRoutes();
    
        server.initViews({}, (error, result) => {
            if(error) {
                console.log(error)
                return false;
            };
    
            console.log("initialized express views");
            console.log(`view path: ${result.viewPath}`);
            console.log(`view engine: ${result.viewEngine}`);
            console.log(`static files path: ${result.staticPath}`);
        });
    })();

    server.run({}, (error, result) => {
        if(error) {
            console.log(error)
            return false;
        };
    
        console.log("running the application");
        console.log(`port: ${result.port}`);
    });
})();