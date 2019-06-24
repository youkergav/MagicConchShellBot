// Import required modules.
const express = require('express')
const path = require('path');
const app = express();
const router = require("./routes/index");
const config = require("../config/config.js")

app.set('views', path.join(__dirname, 'views')); // Set the views location.
app.set("view engine", "ejs"); // Set the template engine.
app.use(express.static(path.join(__dirname, 'public'))); // Set the static file location.
app.use(router); // Use the router location.

app.listen(config.server.port); // Start the application on specified port.