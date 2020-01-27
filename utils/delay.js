function delay (miliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, miliseconds)
  })
}

module.exports = delay
