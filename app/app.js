"use strict";

// Import required modules.
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./routes/general");
const config = require("../config/config");
const app = express();

// Connect to the database.
let dbUser = encodeURIComponent(config.db.username);
let dbPass = encodeURIComponent(config.db.password);
let dbDatabase = encodeURIComponent(config.db.database);
let mongoUri = `mongodb://${dbUser}:${dbPass}@${config.db.host}:${config.db.port}/${dbDatabase}`;
mongoose.connect(mongoUri, { useNewUrlParser: true });

app.use(router); // Use the router location.

// Set up the views.
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // Set the static file location.

app.listen(config.server.port); // Start the application on specified port.