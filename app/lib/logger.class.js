/**
 * The module that holds the logger class.
 * 
 * @module lib/logger
 * @requires winston
 */

"use strict";

import { createLogger } from "winston";
import winstonConfig from "../../config/winston.config";

/**
 * Class to manage logging.
 * 
 * Each log level method gets less strict as the levels increase.
 */
class Logger {
    /**
     * Creates an instance of Logger.
     */
    constructor() {
        this.winston = createLogger(winstonConfig);
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
    error(namespace, content) {
        if(content) {
            this.winston.error({ namespace: namespace, content: content });
        } else {
            this.winston.error({ namespace: namespace });
        }
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
    warn(namespace, content) {
        if(content) {
            this.winston.warn({ namespace: namespace, content: content });
        } else {
            this.winston.warn({ namespace: namespace });
        }
    }

    /**
     * Logs out informational messages.
     *
     * @param {string} namespace - The namespace to give to the info log.
     * @param {string} [content] - The message or content to give the info log.
     * 
     * @example
     * // Without a content parameter.
     * logger.info("server.start.true");
     * 
     * // With a content parameter.
     * logger.info("server.start.true", "the server is running");
     */
    info(namespace, content=false) {
        if(content) {
            this.winston.info({ namespace: namespace, content: content });
        } else {
            this.winston.info({ namespace: namespace });
        }
    }

    /**
     * Logs out verbose messages.
     *
     * @param {string} namespace - The namespace to give to the verbose log.
     * @param {string} [content] - The message or content to give the verbose log.
     * 
     * @example
     * // Without a content parameter.
     * logger.info("server.express.views.init.true");
     * 
     * // With a content parameter.
     * logger.info("server.express.views.init.true", "express views initialized");
     */
    verbose(namespace, content=false) {
        if(content) {
            this.winston.verbose({ namespace: namespace, content: content });
        } else {
            this.winston.verbose({ namespace: namespace });
        }
    }

    /**
     * Logs out debugging messages.
     *
     * @param {string} content - The content to log debugging data.
     * 
     * @example
     * logger.verbose(result.Promise);
     */
    debug(content) {
        this.winston.debug({ content: content });
    }

    /**
     * Logs out silly messages.
     *
     * @param {string} message - A silly message to output.
     * 
     * @example
     * logger.silly("Hello, World!");
     */
    silly(message) {
        this.winston.silly(message);
    }
}

export default Logger;