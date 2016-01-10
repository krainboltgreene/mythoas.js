import http from "http"
import connect from "connect"
import requireEnvironmentVariables from "require-environment-variables"
import server from "./server"

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

const {
  env: {
    PORT
  }
} = process
const Application = connect()

Application.use((request, response) => server(request, response))

http.createServer(Application).listen(PORT)
