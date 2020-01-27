const utils = require('../utils/utils')
const fibP = utils.promisifyFn(utils.worstFibonacciOf)

console.log('1')
fibP(43).then(console.log)
console.log('2')
