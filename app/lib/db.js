const config = require("../../config/config");
const mongoose = require("mongoose");

// Export all the functions.
module.exports = {
    connect: function(creds={}) {
        // Define database credentials
        let dbUser = encodeURIComponent(creds.username || config.db.username);
        let dbPass = encodeURIComponent(creds.password || config.db.password);
        let dbHost = creds.host || config.db.host;
        let dbPort = creds.port || config.db.port;
        let dbDatabase = encodeURIComponent(creds.database || config.db.database);
        
        // Connect to the database.
        let mongoUri = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbDatabase}`;
        mongoose.connect(mongoUri, { useNewUrlParser: true }, function(err, result) {
            if(err) throw err;

            return result;
        }); 
    }
}