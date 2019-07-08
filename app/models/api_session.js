"use strict";

const mongoose = require("mongoose");

// Create the session schema.
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

const Model = mongoose.model("session", schema); // Create the session model.

module.exports = Model;