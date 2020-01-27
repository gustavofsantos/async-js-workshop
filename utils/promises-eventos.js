const EventEmitter = require('events').EventEmitter
const ev = new EventEmitter()

function reasonOfLife () {
  return new Promise((resolve) => {
    let response

    ev.on('response', (data) => {
      response = data
    })

    ev.on('end', () => {
      resolve(response)
    })
  })
}

reasonOfLife()
  .then((response) =>
    console.log('O motivo da vida é...', response))
  .catch(console.warning)

ev.emit('response', 42)

setTimeout(() => {
  ev.emit('end')
}, 5000)
