"use strict";

/**
 * Class to handle redacting private information found in JavaScript objects.
 * 
 * NOTE: Is is important that you run _loadBlacklist() before checking against
 * the blacklist and to run _cleanBlaclist() after checking against the blacklist.
 * If you do not load or clean the blacklist, the blacklist attributes will become
 * polluted and unreliable.
 */
class Privacy {
    /**
     * Creates an instance of Privacy.
     * @param {Array} [blackitems] - An array of regex patterns to be added to the default blacklist.
     * @memberof Privacy
     */
    constructor(blackitems=[]) {
        /** The default blacklist to be used. @private */
        this._defaultBlacklist = blackitems;

        /** The temporary blacklist to be used one time @private*/
        this._tempBlacklist = [];
    }

    /**
     * Check if the value is in object.
     */
    _isObject(val) {
        return val != null && val.constructor.name === "Object"
    }

    /**
     * Checks if the key is found in any blacklists.
     *
     * @param {string} key - The key value to check against.
     * @returns {boolean}
     */
    _isPrivate(key, blacklist) {
        for(var b of blacklist) {
            if(b.test(key)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Recursively finds blacklisted items in a JavaScript object and replaces them 
     * with censored data.
     * 
     * @param {Object} obj - The object to be censored and cleaned.
     * @returns {Object}
     */
    redact(obj, blacklist) {
        if(!this._isObject(obj)) return obj; // Ignore non-object data structures.

        const result = Object.assign({}, obj); // Copy the object to modify.

        for(var key of Object.keys(result)) {
            const val = result[key];

            // Check for nested objects and perform recursion.
            if(this._isObject(val)) {
                result[key] = this.redact(val, blacklist);
            }
            
            // Check if key is private and mask.
            if(this._isPrivate(key, blacklist)) {
                result[key] = "*****";
            }
        }

        return result;
    }
}

export default Privacy;