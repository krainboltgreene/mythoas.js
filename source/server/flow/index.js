import dispatch from "./dispatch"
import logRequest from "./logRequest"
import setResponseTimeElapsed from "./setResponseTimeElapsed"
import setResponseTimeStart from "./setResponseTimeStart"

export default [
  setResponseTimeStart,
  dispatch,
  setResponseTimeElapsed,
  logRequest
]
