"use strict";

class Routes {
    constructor(app) {
        this.app = app;
    }

    setRoute(location) {
        let route = require(location);
        
        this.app.use(route);

        return true;
    }
}

module.exports = Routes;