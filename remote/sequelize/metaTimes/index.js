import Sequelize from "sequelize"

const table = "metaTimes"
const id = {
  type: Sequelize.UUID,
  primaryKey: true,
  allowNull: false,
  defaultValue: Sequelize.UUIDV4,
  unique: true
}
const times = {
  type: Sequelize.JSONB,
  allowNull: false,
  defaultValue: {}
}
const attributes = {
  id,
  times
}
const configuration = {
  timestamps: true,
  updatedAt: false
}

export default {
  table,
  attributes,
  configuration
}
