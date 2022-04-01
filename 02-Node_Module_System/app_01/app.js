// var logger = require('./logger')
// const logger = require('./logger')

// console.log(logger)

// { log: [Function: log] }

// logger = 1

// logger.log('message')
// logger('message')

// and  we get 'message' on the console

/*

logger = 1
       ^

TypeError: Assignment to constant variable.

*/

const log = require('./logger')

log('message')
