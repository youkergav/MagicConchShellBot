/**
 * The module to hold the blacklist class.
 * 
 * @module lib/blacklist
 */

"use strict";

/**
 * Class to hold blacklist information.
 */
class Blacklist{
    /**
     * Creates an instance of Blacklist.
     * @param {Array} [blacklist] - The native blacklist to pass in. The array elements must be regular expressions.
     * 
     * @example
     * let blacklist = new Blacklist([
     *      /password/,
     *      /ssn/
     * ]);
     */
    constructor(blacklist=[]) {
        this.blacklist = blacklist;
    }

    /**
     * Generated a blacklist comprised of the native blacklist and temporary blacklisted items.
     *
     * @param {Array} tempBlackitems - The additional regular expressions to add the the blacklist.
     * @returns {boolean}
     * 
     * @example
     * let result = blacklist.tempBlacklist([
     *      /address/,
     *      /creditCard/
     * ]);
     */
    tempBlacklist(tempBlackitems) {
        if(tempBlackitems) {
            return this.blacklist.concat(tempBlackitems);
        } else {
            return this.blacklist;
        }
    }

    /**
     * Gets the current blacklist.
     *
     * @returns {Array}
     * 
     * @example
     * let result = blacklist.getBlacklist();
     */
    getBlacklist() {
        return this.blacklist;
    }
}

export default Blacklist;