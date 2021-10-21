const { createLogger, transports, format } = require("winston");
const { combine, timestamp, errors } = format;

function buildProdLogger() {
    return createLogger({
        format: combine(
            timestamp(),
            errors({ stack: true }),
            json()
        ),
        defaultMeta: { service: 'user-service' },
        transports: [
            new transports.File({ filename: 'logs/error.log', level: 'error' }),
            new transports.File({ filename: 'logs/combined.log' }),
        ]
    })
};

module.exports = buildProdLogger();