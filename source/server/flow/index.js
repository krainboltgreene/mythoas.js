import users from "./users"
import notFound from "./notFound"
import logRequest from "./logRequest"
import setResponseTimeElapsed from "./setResponseTimeElapsed"
import setResponseTimeStart from "./setResponseTimeStart"

export default [
  setResponseTimeStart,
  users,
  notFound,
  setResponseTimeElapsed,
  logRequest
]
