// a lei: "não bloqueie o event loop" também é válida
// para promises

const calc = (n) => new Promise((resolve) => {
  let count = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      count += 1
    }
  }

  resolve(count)
})

console.log('1')
calc(100000)
  // .then((value) => console.log('result: ' + value))
console.log('2')

/**
 * 1. Pq é impresso:
 *
 * 1
 * 2
 * result: 10000000000
 *
 */
