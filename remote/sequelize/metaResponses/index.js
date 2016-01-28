
import Sequelize from "sequelize"

const table = "metaResponses"
const id = {
  type: Sequelize.UUID,
  primaryKey: true,
  allowNull: false,
  defaultValue: Sequelize.UUIDV4,
  unique: true
}
const name = {
  type: Sequelize.TEXT,
  allowNull: false,
  defaultValue: ""
}
const status = {
  type: Sequelize.INTEGER,
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
  name,
  status,
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
