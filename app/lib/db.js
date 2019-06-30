const config = require("../../config/config");
const mongoose = require("mongoose");

function connect(creds={}) {
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

// Function to remove all collections from the database.
function dropDatabase() {
    mongoose.connection.dropDatabase(function(err, result) {
        if(err) throw err;

        return result
    });
}

// Export all the functions.
module.exports = {
    connect: connect,
    dropDatabase: dropDatabase,
};