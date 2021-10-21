// {
//     error: 0,
//         warn: 1,
//             info: 2,
//                 http: 3,
//                     verbose: 4,
//                         debug: 5,
//                             silly: 6
// }
// debug less => priority more


let logger = null;

if (process.env.NODE_ENV === 'development') {
    logger = require('./dev-logger');
} else {
    logger = require('./prod-logger');
}

module.exports = logger;