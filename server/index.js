import requireEnvironmentVariables from "require-environment-variables"
import http from "http"
import connect from "connect"
import {reduce, map, flatten} from "ramda"

requireEnvironmentVariables([
  "KEENIO_API_PUBLIC",
  "KEENIO_API_PRIVATE",
  "PUSHER_API_ID",
  "PUSHER_API_PUBLIC",
  "PUSHER_API_PRIVATE",
  "SEQUALIZE_DATABASE_URI",
  "SEQUALIZE_POOL_MAX",
  "SEQUALIZE_POOL_MIN",
  "SEQUALIZE_POOL_IDLE",
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
