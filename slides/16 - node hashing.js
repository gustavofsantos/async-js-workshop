const crypto = require('crypto')

const NUM_REQUESTS = 8

console.time('TOTAL')
for (let i = 0; i < NUM_REQUESTS; i++) {
  console.time('REQUEST ' + i)
  const hash = crypto.pbkdf2Sync('secret', 'salt', 10000, 512, 'sha512')
  console.log(hash.toString('base64'))
  console.timeEnd('REQUEST ' + i)
}
console.timeEnd('TOTAL')
