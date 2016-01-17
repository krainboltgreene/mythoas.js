import requireEnvironmentVariables from "require-environment-variables"
import Dotenv from "dotenv"
import http from "http"
import connect from "connect"
import {reduce, map, flatten} from "ramda"

Dotenv.load()

requireEnvironmentVariables([
  "PORT"
])

import flows from "./flows"
import stack from "./stack"
import initialState from "./initialState"

const {
  env: {
    PORT
  }
} = process
const Application = connect()
const server = (request, response) => {

  return reduce(
    (state, ƒunction) => state.then(ƒunction),
    Promise.resolve(initialState(request, response)),
    flatten(map(stack, flows))
  )

}

Application.use((request, response) => server(request, response))

http.createServer(Application).listen(PORT)
