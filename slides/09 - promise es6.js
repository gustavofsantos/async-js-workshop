/**
 * Na especificação ECMAScript 2015, foi introduzido
 * um novo tipo "container", chamado de Promise.
 *
 * Promise é uma abstração temporal para um valor
 * que eventualmente irá existir.
 *
 * @param {number} id User identification
 */
const getUser = (id) => new Promise((resolve, reject) => {
  if (id === 10) {
    resolve({ id, name: 'Fulano de tal' })
  } else {
    reject(new Error('Usuário não encontrado.'))
  }
})

/**
 * @param {{ id: number, name: string}} user User instance
 */
const onFoundUser = (user) => {
  console.log('Usuário encontrado: ', user.name)
  console.log(user)
}

/**
 * @param {Error} error On user not found error.
 */
const onUserNotFound = (error) => {
  console.log('Oops: ', error.message)
}

getUser(10)
  .then(onFoundUser)
  .catch(onUserNotFound)

getUser(20)
  .then(onFoundUser)
  .catch(onUserNotFound)
  .finally(() => {
    console.log('finally called?')
  })
