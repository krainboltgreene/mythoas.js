import Sequelize from "sequelize"
import requireEnvironmentVariables from "require-environment-variables"
import Dotenv from "dotenv"

Dotenv.load()

requireEnvironmentVariables([
  "NODE_ENV",
  "SEQUALIZE_DATABASE_URI",
  "SEQUALIZE_POOL_MAX",
  "SEQUALIZE_POOL_MIN",
  "SEQUALIZE_POOL_IDLE"
])

const {
  env: {
    NODE_ENV,
    SEQUALIZE_DATABASE_URI,
    SEQUALIZE_POOL_MAX,
    SEQUALIZE_POOL_MIN,
    SEQUALIZE_POOL_IDLE
  }
} = process
const ssl = NODE_ENV === "production"

export default new Sequelize(SEQUALIZE_DATABASE_URI, {
  dialectOptions: {
    ssl
  },
  pool: {
    max: SEQUALIZE_POOL_MAX,
    min: SEQUALIZE_POOL_MIN,
    idle: SEQUALIZE_POOL_IDLE
  }
})
