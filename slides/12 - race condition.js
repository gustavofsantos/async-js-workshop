const p1 = () => Promise.resolve(1)
const p2 = () => Promise.resolve(2)
const p3 = () => Promise.resolve(3)

Promise.race([p1(), p2(), p3()])
  .then(value => console.log('race: ', value))

Promise.all([p1(), p2(), p3()])
  .then(value => console.log('all: ', value))

Promise.allSettled([p1(), p2(), p3()])
  .then(value => console.log('allSettled: ', value))

/**
 * 1. Porque Promise.race sempre resolve em 1?
 */
