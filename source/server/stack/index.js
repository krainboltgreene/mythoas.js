import setLogger from "./setLogger"
import logRequest from "./logRequest"
import closeConnection from "./closeConnection"
import setResponseTimeStart from "./setResponseTimeStart"
import setResponseTimeElapsed from "./setResponseTimeElapsed"
import dispatch from "./dispatch"

export default [
  setResponseTimeStart,
  setLogger,
  dispatch,
  setResponseTimeElapsed,
  logRequest,
  closeConnection
]
