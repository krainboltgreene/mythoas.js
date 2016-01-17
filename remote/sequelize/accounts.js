import Sequelize from "sequelize"

const table = "accounts"
const email = {
  type: Sequelize.STRING
}
const name = {
  type: Sequelize.STRING
}
const attributes = {
  email,
  name
}
const configuration = {}

export default {
  table,
  attributes,
  configuration
}
