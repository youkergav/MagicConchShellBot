"use strict";

const Server = require("./lib/server");

let server = new Server;

server.initDb(); // Connect to the database.
server.initRoutes(); // Use the router location.
server.initViews(); // Set up the server views.

server.run();