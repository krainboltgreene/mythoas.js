import connect from "connect"
import http from "http"
import immu from "immu"
import {logger} from "./stack"

const Application = connect()
const Stack = [
  logger
]
const environment = {
  application: {
    name: "Mythoas"
  }
}

Application.use((request, response) => Stack.reduce((accumulator, ƒ) => {ƒ(immu(accumulator))}, {request, response, environment}))

http.createServer(Application).listen(3000)
