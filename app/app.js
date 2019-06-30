// Import required modules.
const express = require("express");
const path = require("path");
const router = require("./routes/index");
const config = require("../config/config.js");
const mongoose = require("mongoose");

const app = express(); // Set up the express application.

// Define database credentials.
let dbUser = encodeURIComponent(config.db.username);
let dbPass = encodeURIComponent(config.db.password);
let dbHost = config.db.host;
let dbPort = config.db.port;
let dbDatabase = encodeURIComponent(config.db.database);
let dbUrl = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbDatabase}`;

mongoose.connect(dbUrl, { useNewUrlParser: true }); // Connect to the database.
mongoose.Promise = global.Promise; // Override Mongoose promise with Node JS promise.

app.use(router); // Use the router location.

// Set up the views.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Set the static file location.

app.listen(config.server.port); // Start the application on specified port.