"use strict";

class Server {
    constructor() {
        this.express = require("express");
        this.app = this.express();
        this.config = require("../../config/config");
    }

    initDb() {
        const Database = require("./database");

        let database = new Database();
        database.connect();
    }

    initRoutes() {
        const routerGeneral = require("../routes/general");
        this.app.use(routerGeneral);

        return true;
    }

    initViews() {
        const path = require("path");

        this.app.set("views", path.join(__dirname, "../views"));
        this.app.set("view engine", "ejs");
        this.app.use(this.express.static(path.join(__dirname, "../public")));

        return true;
    }

    run() {
        this.app.listen(this.config.server.port);
    }
}

module.exports = Server;