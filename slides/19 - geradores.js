function * range () {
  yield 1
  yield 2
  yield 3
}

const iter = range()

let next = iter.next()

while (!next.done) {
  console.log(next.value)
  next = iter.next()
}

// for (const value of range()) {
//   console.log(' -> ' + value)
// }

function * createNaturals () {
  let counter = 0

  while (true) {
    yield counter
    counter += 1
  }
}

const naturals = createNaturals()
