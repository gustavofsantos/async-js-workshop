setTimeout(() => {
  console.log('1')
}, 1000)

setTimeout(() => {
  console.log('2')
}, 500)

setImmediate(() => {
  console.log('3')
})
