const fetch = require('node-fetch')

function promisifyFn (fn) {
  return function promisifiedFn (...args) {
    return new Promise((resolve) => {
      const result = fn(...args)
      resolve(result)
    })
  }
}

function worstFibonacciOf (n) {
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  return worstFibonacciOf(n - 1) + worstFibonacciOf(n - 2)
}

async function fetchAvatar (userId) {
  return {
    json: () => Promise.resolve({
      imageUrl: 'some img url'
    })
  }
}

module.exports = {
  worstFibonacciOf,
  promisifyFn,
  fetchAvatar
}
