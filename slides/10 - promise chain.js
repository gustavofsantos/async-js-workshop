/**
 * Promise chain
 */

const p = Promise.resolve(1)
const add1 = (n) => n + 1

process.nextTick(() => console.log('tick'))

p
  .then(add1)
  .then(add1)
  .then(add1)
  .then(console.log)
  .catch(() => console.log('aconteceu algum erro...'))
