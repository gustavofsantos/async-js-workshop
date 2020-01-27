const delay = require('../utils/delay')
// Funções async forçam um comportamento síncrono
// dentro do contexto da função, permitindo que cada etapa
// somente execute depois que a etapa anterior (await)
// seja executada

const getUser = async (id) => {
  await delay(5000)

  if (id === 10) {
    return { id, name: 'Fulano de tal' }
  }

  throw new Error('Usuário não encontrado.')
}

const startCounting = async () => {
  let counter = 0
  while (true) {
    await delay(1000)
    console.log(counter++)
  }
}

const main = async () => {
  console.log('getting the user...')
  const user = await getUser(10)
  console.log('Usuário encontrado:', user.name)
}

main()
startCounting()

/**
 *
 * 1. e se ocorrer um erro? try/catch
 * 2. executar código no final? finally
 * 3. padrão com promise chain e async/await
 */
