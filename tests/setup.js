const mongoose = require("mongoose");
const config = require("../config/app.config");

beforeAll(async function() {
    // Define database credentials.
    let dbUser = encodeURIComponent(config.db.username);
    let dbPass = encodeURIComponent(config.db.password);
    let dbDatabase = encodeURIComponent(config.db.database);
    let mongoUri = `mongodb://${dbUser}:${dbPass}@${config.db.host}:${config.db.port}/${dbDatabase}`;

    // Connect to the database.
    await mongoose.connect(mongoUri, { useNewUrlParser: true }, function(err) {
        if(err) throw err;
    });
});

beforeEach(function() {
    // Clear the database collections.
    for(var coll in mongoose.connection.collections) {
        mongoose.connection.collections[coll].deleteMany(function(err) {
            if(err) throw err;
        });
    }
});

afterAll(function() {
    // Terminate the database connection.
    mongoose.connection.close(function(err) {
        if(err) throw err;
    });
});