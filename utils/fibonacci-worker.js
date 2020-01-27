const { parentPort } = require('worker_threads')
const { worstFibonacciOf } = require('./utils')

parentPort.on('message', (n) => {
  return parentPort.postMessage(worstFibonacciOf(n))
})
