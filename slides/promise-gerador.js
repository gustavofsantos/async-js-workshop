const delay = require('../utils/delay')

const saveData = async (data) => {
  await delay(1000)
  return { success: true, data }
}

const findUser = async (id) => {
  await delay(2000)
  return { id, name: 'user', password: '1234' }
}

findUser(10)
  .then(saveData)
  .then(console.log)
