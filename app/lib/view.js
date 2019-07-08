"use strict";

class Views {
    constructor(express, app) {
        this.express = express;
        this.app = app;
        this.path = require("path");
    }

    setViewsLocation(location) {
        let fullLocation = this.path.join(__dirname, location);

        this.app.set("views", fullLocation);

        return true;
    }

    setViewEngine(engine) {
        this.app.set("view engine", engine);

        return true;
    }

    setStaticLocation(location) {
        let fullLocation = this.path.join(__dirname, location);
        let staticLocation = this.express.static(fullLocation);
        
        this.app.use(staticLocation);
        
        return true;
    }
}

module.exports = Views;