/**
 * The module that holds the API session controller class.
 * 
 * @module controllers/api_session
 */

"use strict";

// Import api_session module.
import ApiSessionModel from "../models/api_session.model";

/**
 * Class to handle API session logic.
 */
class ApiSessionController {
    /**
     * Creates an instance of ApiSessionController.
     * 
     * @memberof ApiSessionController
     * @param {string} authCode - The authorization code from OAUTH.
     */
    constructor(authCode) {
        this.apiSessionModel = new ApiSessionModel({ authCode: authCode });
    }

    /**
     * Creates a new session with an authorization code.
     *
     * @returns {boolean} Successful execution status.
     * @memberof ApiSessionController
     */
    newSession() {
        this.apiSessionModel.save(function(err) {
            if(err) return false;
        });

        return true;
    }
}

export default ApiSessionController;