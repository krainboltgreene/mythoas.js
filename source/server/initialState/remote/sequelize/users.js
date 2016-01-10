import Sequelize from "sequelize"

const email = {
  type: Sequelize.STRING
}
const attributes = {
  email
}
const configuration = {
  timestamps: false
}

export default (connection) => {

  return connection.define("users", attributes, configuration)

}
