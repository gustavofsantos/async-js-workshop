// O runtime procura em objetos, algumas chaves especiais
// cada uma das chaves especiais representa comportamentos
// especiais da engine, o Symbol.iterator é uma chave
// que o loop for-of usa para iterar sobre uma instância
// de um dado iterável

const objetoIteravel = {
  // *[Symbol.iterator]() {
  [Symbol.iterator]: function * () {
    for (let counter = 0; ; counter += 1) {
      yield counter
    }
  }
}

for (const val of objetoIteravel) {
  console.log('->', val)
}
