class Database {
    constructor() {
        this.mongoose = require("mongoose");
        this.config = require("../../config/config");
    }

    connect() {
        let dbUser = encodeURIComponent(this.config.db.username);
        let dbPass = encodeURIComponent(this.config.db.password);
        let dbHost = this.config.db.host;
        let dbPort = this.config.db.port;
        let dbDatabase = encodeURIComponent(this.config.db.database);

        let mongoUri = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbDatabase}`;
        this.mongoose.connect(mongoUri, { useNewUrlParser: true }, function(error) {
            if(error) {
                console.error(error);
                return false;
            }

            return true;
        });
    }

    disconnect() {
        this.mongoose.connection.close(function(error) {
            if(error) {
                console.error(error);
                return false;
            }

            return true;
        });
    }
}

module.exports = Database;