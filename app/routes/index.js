const express = require("express");
const router = express.Router();
const ApiSession = require("../models/session");

router.get("/", function(req, res) {
    if(req.query.authCode) {
        let apiSession = new ApiSession({ authCode: req.query.authCode });
        apiSession.save(function(err, result) {
            if(err) return err;

            res.render("index");
            return result;
        });
    }
});

module.exports = router;