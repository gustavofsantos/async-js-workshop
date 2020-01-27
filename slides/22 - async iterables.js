const delay = require('../utils/delay')

const asyncObjIter = {
  async * [Symbol.asyncIterator] (start = 0) {
    for (let counter = start; ; counter += 1) {
      await delay(1000)
      yield counter
    }
  },
  outroParam: 'kkkk'
}

async function main () {
  for await (const val of asyncObjIter) {
    console.log(val)
  }
}

main()
