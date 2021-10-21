const { createLogger, transports, format, colorize, errors } = require('winston');
const { printf, combine } = format;

function devLoger() {

    const logFormat = printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} : ${stack || message}`;
    })

    return createLogger({
        // level: 'debug',
        // write in console NODE_ENV=development before running this
        level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
        // format: combine(logFormat),
        format: combine(
            colorize(),
            timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
            errors({ stack: true }),
            logFormat
        ),
        transports: [new transports.Console()]
    });
}

module.exports = devLoger();