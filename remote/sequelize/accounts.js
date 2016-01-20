import Sequelize from "sequelize"

const table = "accounts"
const id = {
  type: Sequelize.UUID,
  primaryKey: true
}
const email = {
  type: Sequelize.STRING,
  allowNull: false,
  unique: true
}
const name = {
  type: Sequelize.STRING,
  allowNull: false,
  defaultValue: ""
}
const attributes = {
  id,
  email,
  name
}
const configuration = {
  timestamps: true,
  paranoid: true
}

export default {
  table,
  attributes,
  configuration
}
