import connect from "connect"
import http from "http"
import server from "./server"

const Application = connect()

Application.use((request, response) => server(request, response))

http.createServer(Application).listen(3000)
