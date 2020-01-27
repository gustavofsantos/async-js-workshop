const runProm = () => new Promise((resolve) => {
  while (true);
  console.log('1')
  resolve()
})

setTimeout(() => console.log('2'), 1000)

runProm()
