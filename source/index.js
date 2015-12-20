import http from "http"
import connect from "connect"
import server from "./server"

const Application = connect()
const PORT = 3000

function close ({response, environment}) {

  const {ServerResponse} = environment
  const {status, headers, body} = response

  ServerResponse.writeHead(status, headers)
  ServerResponse.end(body)

}

Application.use((request, response) => close(server(request, response)))

http.createServer(Application).listen(PORT)
