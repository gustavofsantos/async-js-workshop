const http = require('http')

function request (base, path = '/', method = 'GET', body = {}) {
  const stringBody = JSON.stringify(body)

  return new Promise((resolve, reject) => {
    let buf = ''

    http.request({
      hostname: base,
      path,
      method,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': stringBody.length
      }
    }, (res) => {
      res.on('data', (data) => {
        console.log({ data })
        buf += data
      })

      res.on('end', () => {
        resolve(buf)
      })

      res.on('error', (err) => {
        reject(err)
      })
    })
  })
}

request('google.com')
  .then(console.log)
  .catch(console.warn)
