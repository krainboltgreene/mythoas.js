import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"
import knex from "knex"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "DATABASE_URL",
  "NODE_ENV"
])

const configuration = {
  client: "pg",
  connection: process.env.DATABASE_URL,
  SSL: process.env.NODE_ENV === "production"
}


export default knex(configuration)
