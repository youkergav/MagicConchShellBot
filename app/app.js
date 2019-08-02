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
server.initDb();
server.initRoutes();
server.initViews();

server.run(); // Run the server.