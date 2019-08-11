/**
 * The module that holds the logger class.
 * 
 * @module lib/logger
 * @requires winston
 */

"use strict";

import { createLogger } from "winston";
import winstonConfig from "../../config/winston.config";
import Privacy from "./privacy.class";
import Blacklist from "./blacklist.class";

/**
 * Class to manage logging.
 * 
 * Each log level method gets less strict as the levels increase.
 */
class Logger {
    /**
     * Creates an instance of Logger.
     */
    constructor(blacklist=[]) {
        this.blacklist = new Blacklist(blacklist);
        this.winston = createLogger(winstonConfig);
        this.privacy = new Privacy();
    }

    /**
     * Logs out error messages.
     *
     * @param {string} namespace - The namespace to give to the error log.
     * @param {string} content - The message or content to give the error log.
     * 
     * @example
     * logger.error("server.start.false", "the express server failed to start");
     */
    error(namespace, content, blacklist=[]) {
        this.winston.error({ namespace: namespace, content: content });
    }

    /**
     * Logs out warning messages.
     *
     * @param {string} namespace - The namespace to give to the warning log.
     * @param {string} content - The message or content to give the warning log.
     * 
     * @example
     * logger.warn("server.ssl.obsolete", "the SSL version is obsolete");
     */
    warn(namespace, content, blacklist=[]) {
        this.winston.warn({ namespace: namespace, content: content });
    }

    /**
     * Logs out informational messages.
     *
     * @param {string} namespace - The namespace to give to the info log.
     * @param {string} content - The message or content to give the info log.
     * 
     * @example
     * logger.info("server.start.true", "the server is running");
     */
    info(namespace, content) {
        this.winston.info({ namespace: namespace, content: content });
    }

    /**
     * Logs out verbose messages.
     *
     * @param {string} namespace - The namespace to give to the verbose log.
     * @param {string} content - The message or content to give the verbose log.
     * 
     * @example
     * // Without a content parameter.
     * logger.info("server.express.views.init.true");
     * 
     * // With a content parameter.
     * logger.info("server.express.views.init.true", "express views initialized");
     */
    verbose(namespace, content, blacklist=[]) {
        this.winston.verbose({ namespace: namespace, content: this.privacy.redact(content, blacklist) });
    }

    /**
     * Logs out debugging messages.
     *
     * @param {string} content - The content to log debugging data.
     * 
     * @example
     * logger.verbose(result.Promise);
     */
    debug(content, blackitems=[]) {
        this.winston.debug(this.privacy.redact(content, this.blacklist.tempBlacklist(blackitems)));
    }

    /**
     * Logs out silly messages.
     *
     * @param {string} message - A silly message to output.
     * 
     * @example
     * logger.silly("Hello, World!");
     */
    silly(message, blacklist=[]) {
        this.winston.silly(this.privacy.redact(message, blacklist));
    }
}

export default Logger;