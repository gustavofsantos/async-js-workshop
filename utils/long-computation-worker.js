const { parentPort } = require('worker_threads')
const { worstFibonacciOf } = require('../utils/utils')

parentPort.on('message', ({ requesterId, n }) => {
  let counter = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      counter += 1
    }
  }
  return parentPort.postMessage({ requesterId, counter })
})
