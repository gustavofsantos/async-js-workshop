const app = require('express')()
const { Worker } = require('worker_threads')
let requestId = 0

const longComputationWorker =
  new Worker('./utils/long-computation-worker.js')

app.get('/constant', (req, res) => {
  res.sendStatus(200)
})

app.get('/count-n', (req, res) => {
  const n = req.query.n

  for (let i = 0; i < n; i++) { }

  res.sendStatus(200)
})

app.get('/count-n2', (req, res) => {
  const n = req.query.n

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) { }
  }

  res.sendStatus(200)
})

app.get('/count-n2w', (req, res) => {
  const n = req.query.n
  const id = requestId

  longComputationWorker.postMessage({ requesterId: id, n })
  longComputationWorker.once('message', ({ requesterId }) => {
    if (requesterId === id) {
      res.sendStatus(200)
    }
  })

  requestId += 1
})

app.listen(3000)
