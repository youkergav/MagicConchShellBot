const ApiSession = require("../../app/models/api_session.model");

describe("new session", function() {
    test("valid session", function(done) {
        let apiSession = new ApiSession({ authCode: "12345" });
        apiSession.save(function(err, result) {
            if(err) done(err);
    
            expect(result.authCode).toBe("12345");
            done();
        });
    });
    
    test("empty session", function(done) {
        let apiSession = new ApiSession();
        apiSession.save(function(err) {
            expect(err.name).toBe("ValidationError");
            done();
        });
    });
});