// Import required modules.
const express = require("express");
const path = require("path");
const router = require("./routes/index");
const config = require("../config/config.js");
const mongoose = require("mongoose");

const app = express(); // Set up the express application.

// Connect to the database.
mongoose.connect(`mongodb://${config.db.username}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.database}`);
mongoose.Promise = global.Promise; // Override Mongoose promise with Node JS promise.

app.use(router); // Use the router location.

// Set up the views.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Set the static file location.

app.listen(config.server.port); // Start the application on specified port.