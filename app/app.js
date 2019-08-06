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

(async () => {
    // Initialize the server.
    await (() => {
        return new Promise((resolve) => {
            server.initDb({}, (error, result) => {
                if(error) {
                    console.log(new Date().toISOString(), "error initializing database");
                    return false;
                }
        
                console.log(new Date().toISOString(), "initialized database");
                console.log(`host: ${result.host}`);
                console.log(`port: ${result.port}`);
                console.log(`username: ${result.user}`);
                console.log(`database: ${result.name}`);
    
                resolve(result);
            });
    
            server.initRoutes();
        
            server.initViews({}, (error, result) => {
                if(error) {
                    console.log(new Date().toISOString(), error)
                    return false;
                };
        
                console.log(new Date().toISOString(), "initialized express views");
                console.log(`view path: ${result.viewPath}`);
                console.log(`view engine: ${result.viewEngine}`);
                console.log(`static files path: ${result.staticPath}`);
            });
        });
    })();

    // Run the server.
    server.run({}, (error, result) => {
        if(error) {
            console.log(new Date().toISOString(), error)
            return false;
        };
    
        console.log(new Date().toISOString(), "running the application");
        console.log(`port: ${result.port}`);
    });
})();