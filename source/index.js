import http from "http"
import connect from "connect"
import server from "./server"

const Application = connect()
const PORT = 3000

Application.use((request, response) => server(request, response))

http.createServer(Application).listen(PORT)
