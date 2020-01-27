function * count (start = 0) {
  let counter = start

  while (true) {
    const newCounter = yield counter
    counter = newCounter || counter + 1
  }
}

const counter = count(1)

console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.next(10))
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
