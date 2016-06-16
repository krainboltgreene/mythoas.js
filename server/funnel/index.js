import Dotenv from "dotenv"
import requireEnvironmentVariables from "require-environment-variables"

import {map} from "ramda"
import {values} from "ramda"
import {pipeP} from "ramda"
import {flatten} from "ramda"
import {pipe} from "sanctuary"

import flow from "../flow"
import stack from "../stack"
import initialState from "./initialState"

Dotenv.load({silent: true})

requireEnvironmentVariables([
  "NODE_ENV"
])

const INTERNAL_SERVER_ERROR_STATUS = 500
const line = pipe(
  [
    values,
    map(stack),
    flatten
  ]
)
const passThrough = pipeP(initialState, ...line(flow))

export default (IncomingMessage, ServerResponse) => {
  return passThrough([IncomingMessage, ServerResponse])
    .catch((reason) => {
      ServerResponse.writeHead(INTERNAL_SERVER_ERROR_STATUS, {})
      if (process.env.NODE_ENV === "development") {
        return ServerResponse.end(reason.stack)
      }

      return ServerResponse.end("")
    })
}
