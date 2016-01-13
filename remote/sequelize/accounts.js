import Sequelize from "sequelize"

const table = "accounts"
const email = {
  type: Sequelize.STRING
}
const username = {
  type: Sequelize.STRING
}
const attributes = {
  email,
  username
}
const configuration = {}

export default {
  table,
  attributes,
  configuration
}
