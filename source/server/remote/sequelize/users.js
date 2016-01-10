import Sequelize from "sequelize"

export default (connection) => {

  const users = connection.define("users", {
    "name": {
      "type": Sequelize.STRING
    },
    "username": {
      "type": Sequelize.STRING
    }
  })

  users.sync()

  return users

}
