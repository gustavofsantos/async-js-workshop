function computeMeanOfLife (onDone) {
  setTimeout(() => {
    const rand = Math.random() * 10
    if (rand > 5) {
      return onDone(new Error('ERROR!'))
    }

    return onDone(null, rand)
  }, 1000)
}

computeMeanOfLife((err, value) => {
  if (err) {
    return console.log('Computation with error!')
  }

  return console.log('Success: ', value)
})
