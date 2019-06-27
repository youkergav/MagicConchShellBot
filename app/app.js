// Import required modules.
const express = require("express");
const path = require("path");
const app = express();
const router = require("./routes/index");
const config = require("../config/config.js");

// Set up the views.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Set the static file location.

app.use(router); // Use the router location.

app.listen(config.server.port); // Start the application on specified port.