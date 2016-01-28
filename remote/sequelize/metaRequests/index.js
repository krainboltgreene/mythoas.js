import Sequelize from "sequelize"

const table = "metaRequests"
const id = {
  type: Sequelize.UUID,
  primaryKey: true,
  allowNull: false,
  defaultValue: Sequelize.UUIDV4,
  unique: true
}
const method = {
  type: Sequelize.TEXT,
  allowNull: false
}
const headers = {
  type: Sequelize.JSONB,
  allowNull: false,
  defaultValue: {}
}
const body = {
  type: Sequelize.TEXT,
  allowNull: false,
  defaultValue: ""
}
const attributes = {
  id,
  method,
  headers,
  body
}
const configuration = {
  timestamps: true
}

export default {
  table,
  attributes,
  configuration
}
