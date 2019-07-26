/**
 * The module that holds the API session schema and model.
 * 
 * @module models/api_session
 * @requires mongoose
 */

"use strict";

const mongoose = require("mongoose");

/**
 * Mongoose model for API session data.
 * 
 * @class ApiSessionModel
 * @property {string} id - The unique user ID.
 * @property {string} authCode - The authorization code provided from OAUTH page.
 * @property {string} accessToken - The valid code that enables access to the API.
 * @property {string} createdAt - An ISO timestamp of when the object was created.
 * @property {string} updatedAt - An ISO timestamp of when the object was last updated.
 */
const schema = new mongoose.Schema({
    authCode: {
        type: String,
        required: [true, "Authorization code is required"] 
    },
    accessToken: {
        type: String,
        default: null
    }
}, { timestamps: true });

const ApiSession = mongoose.model("session", schema);

module.exports = ApiSession;