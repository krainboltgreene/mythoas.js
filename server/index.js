import Dotenv from "dotenv"

Dotenv.load()

import requireEnvironmentVariables from "require-environment-variables"

requireEnvironmentVariables([
  "PORT",
  "WEB_CONCURRENCY",
  "NODE_ENV"
])

const {
  env: {
    PORT,
    WEB_CONCURRENCY,
    NODE_ENV
  }
} = process

import Promise from "bluebird"
import http from "http"
import connect from "connect"
import throng from "throng"

import channel from "./channel"

const production = NODE_ENV === "production"

Promise.config({
  longStackTraces: production,
  warnings: production
})

throng(() => {

  const Application = connect()

  Application.use((request, response) => channel(request, response))

  console.log(`Listening to port ${PORT}`)

  return http.createServer(Application).listen(PORT)

}, {
  workers: WEB_CONCURRENCY,
  lifetime: Infinity
})
