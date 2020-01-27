const { Worker } = require('worker_threads')

const w1 = new Worker('./slides/fibonacci-worker.js')
const w2 = new Worker('./slides/fibonacci-worker.js')

w1.on('message', (result) => {
  console.log('Fiboworker 1 result: ' + result)
})

w2.on('message', (result) => {
  console.log('Fiboworker 2 result: ' + result)
})

console.time('WORKER')
w1.postMessage(43)
w2.postMessage(43)
w1.postMessage(43)
w2.postMessage(43)
w1.postMessage(43)
w2.postMessage(43)
w1.postMessage(43)
w2.postMessage(43)
console.timeEnd('WORKER')
