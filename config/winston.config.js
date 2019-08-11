"use strict";

import { format, transports } from "winston";
import 'winston-daily-rotate-file';
import { join } from "path";
import config from "./app.config";

// Setup logging config.
const winston = {
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console({
            level: config.log.consoleLevel,
            format: format.combine(
                format.colorize(),
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.printf(log => `${log.level}\t${log.timestamp}   ${log.message.namespace}`)
            )
        }),
        new transports.DailyRotateFile({
            level: config.log.fileLevel,
            filename: join(__dirname, "../logs/%DATE%.log"),
            datePattern: "YYYY-MM-DD",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "14d"
        })
    ]
};

export default winston;