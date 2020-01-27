const crypto = require('crypto')

// Node usa libuv como implementação do Event Loop
// libuv usa uma variável de ambiente que indica qual
// o tamanho do thread pool (default 4), este é o número
// de threads que podem ser usadas pelo Node em operações
// assíncronas implementadas em C++
//
// UV_THREADPOOL_SIZE


const NUM_REQUESTS = 8

console.time('TOTAL')
for (let i = 0; i < NUM_REQUESTS; i++) {
  console.time('REQUEST ' + i)
  const hash = crypto.pbkdf2Sync('secret', 'salt', 10000, 512, 'sha512')
  console.log(hash.toString('base64'))
  console.timeEnd('REQUEST ' + i)
}
console.timeEnd('TOTAL')
