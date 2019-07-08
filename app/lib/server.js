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
        const Routes = require("./routes");
        const route = new Routes(this.app);

        route.setRoute("../routes/general");

        return true;
    }

    initViews() {
        const Views = require("./views");
        const view = new Views(this.express, this.app);

        view.setViewsLocation("../views");
        view.setViewEngine("ejs");
        view.setStaticLocation("../public");

        return true;
    }

    run() {
        this.app.listen(this.config.server.port);
    }
}

module.exports = Server;