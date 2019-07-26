/**
 * The module that holds the general routes.
 * 
 * @module routes/general
 * @requires express
 */

"use strict";

// Import required modules.
const express = require("express");
const router = express.Router();

// Import the APISessionController class.
const ApiSessionController = require("../controllers/api_session.controller");
let apiSessionController;

/**
 * The index route of the project. Creates a new API session
 * in the database.
 * 
 * @function getIndex
 * @param {object} request - The express requested resource.
 * @param {string} request.query.authCode - The authorization code to be inserted to the database.
 * @param {object} response - The response that should be routed to.
 * @param {object} [next] - The next middleware to use.
 */
router.get("/", function(request, response) {
    
    apiSessionController = new ApiSessionController(request.query.authCode);
    apiSessionController.newSession();

    response.render("index"); // Render the index page.
});

module.exports = router;