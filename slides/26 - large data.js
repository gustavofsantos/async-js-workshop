const fs = require('fs')
const path = require('path')

function readFile () {
  fs.readFile(path.join(__dirname, '../big.file'), (err, data) => {
    if (err) throw err

    console.log(data.toString('utf-8'))
  })
}

function readFileStream () {
  const stream = fs.createReadStream(path.join(__dirname, '../big.file'))
  stream.pipe(process.stdout)
}

// readFile()
// readFileStream()
