import http from "http"
import connect from "connect"
import {prop} from "ramda"
import requireEnvironmentVariables from "require-environment-variables"
import server from "./server"

requireEnvironmentVariables([
  "KEENIO_API_PUBLIC",
  "KEENIO_API_PRIVATE",
  "PUSHER_API_ID",
  "PUSHER_API_PUBLIC",
  "PUSHER_API_PRIVATE",
  "PORT"
])

const Application = connect()

function close ({response, environment}) {

  const {ServerResponse} = environment
  const {status, headers, body} = response

  ServerResponse.writeHead(status, headers)
  ServerResponse.end(body)

}

Application.use((request, response) => close(server(request, response)))

http.createServer(Application).listen(prop("PORT", process.env))
