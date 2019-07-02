const mongoose = require("mongoose");
const config = require("../config/config");

beforeEach(async function() {
    // Define database credentials.
    let dbUser = encodeURIComponent(config.db.username);
    let dbPass = encodeURIComponent(config.db.password);
    let dbDatabase = encodeURIComponent(config.db.database);
    let mongoUri = `mongodb://${dbUser}:${dbPass}@${config.db.host}:${config.db.port}/${dbDatabase}`;

    // Connect and reset the database.
    await mongoose.connect(mongoUri, { useNewUrlParser: true });
    await mongoose.connection.dropDatabase();
});

afterEach(function() {
    mongoose.connection.close();
});