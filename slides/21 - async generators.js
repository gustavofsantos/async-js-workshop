const delay = require('../utils/delay')

const asyncCounter = async function * (start = 0) {
  for (let counter = start; ; counter += 1) {
    await delay(1000)
    yield counter
  }
}

const asyncIter = asyncCounter()

async function main () {
  while (true) {
    for await (const val of asyncIter) {
      console.log(val)
    }
  }
}

main()
