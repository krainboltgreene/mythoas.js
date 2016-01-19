import requireEnvironmentVariables from "require-environment-variables"
import Dotenv from "dotenv"
import http from "http"
import connect from "connect"
import Promise from "bluebird"

Promise.config({
  longStackTraces: true,
  warnings: true
})

Dotenv.load()

requireEnvironmentVariables([
  "PORT"
])

import channel from "./channel"

const {
  env: {
    PORT
  }
} = process
const Application = connect()

Application.use((request, response) => channel(request, response))

http.createServer(Application).listen(PORT)
