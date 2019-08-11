"use strict";

class Blacklist{
    constructor(blacklist=[]) {
        this.blacklist = blacklist;
    }

    getBlacklist() {
        return this.blacklist;
    }

    tempBlacklist(tempBlackitems) {
        if(tempBlackitems) {
            return this.blacklist.concat(tempBlackitems);
        } else {
            return this.blacklist;
        }
    }
}

export default Blacklist;