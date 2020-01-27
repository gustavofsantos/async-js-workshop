/**
 * crypto.pbkdf2 executa em paralelo no processo do node
 */

const crypto = require('crypto')

const NUM_REQUESTS = 8

console.time('TOTAL')
for (let i = 0; i < NUM_REQUESTS; i++) {
  console.time('REQUEST ' + i)
  crypto.pbkdf2(
    'secret',
    'salt',
    10000,
    512,
    'sha512',
    () => {
      console.timeEnd('REQUEST ' + i)
    })
}
console.timeEnd('TOTAL')
