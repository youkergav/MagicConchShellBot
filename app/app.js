// Import required modules.
const express = require("express");
const path = require("path");
const router = require("./routes/index");
const config = require("../config/config");
const database = require("./lib/db");
const app = express(); // Set up the express application.

app.use(router); // Use the router location.

database.connect(); // Connect to the database.
database.dropDatabase();

// Set up the views.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Set the static file location.

app.listen(config.server.port); // Start the application on specified port.