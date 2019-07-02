const mongoose = require("mongoose");

test("Should connect to the database", function() {
    expect(mongoose.connection.readyState).toBe(1);
});