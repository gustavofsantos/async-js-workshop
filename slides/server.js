const app = require('express')()
const morgan = require('morgan')
const { Worker } = require('worker_threads')
let requestId = 0

app.use(morgan(':method :url :response-time'))

const longComputationWorker =
  new Worker('./utils/long-computation-worker.js')

app.get('/constant', (req, res) => {
  res.send('ok\n')
})

app.get('/count-n', (req, res) => {
  const n = req.query.n

  for (let i = 0; i < n; i++);

  res.send('ok\n')
})

app.get('/count-n2', (req, res) => {
  const n = req.query.n

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++);
  }

  res.send('ok\n')
})

app.get('/count-n2w', (req, res) => {
  const n = req.query.n
  const id = requestId

  longComputationWorker
    .postMessage({ requesterId: id, n })

  longComputationWorker
    .once('message', ({ requesterId }) => {
      if (requesterId === id) {
        res.send('ok\n')
      }
    })

  requestId += 1
})


app.listen(3000)
