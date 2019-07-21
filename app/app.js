"use strict";

// Import required modules.
const express = require("express");
const Server = require("./lib/server.class");

let server = new Server(express); // Create a server object.

// Initialize the server.
server.initDb();
server.initRoutes();
server.initViews();

server.run(); // Run the server.