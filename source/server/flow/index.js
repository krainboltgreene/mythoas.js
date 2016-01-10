import accounts from "./accounts"
import closeConnection from "./closeConnection"
import logRequest from "./logRequest"
import naturalize from "./naturalize"
import notFound from "./notFound"
import serialize from "./serialize"
import setAcceptType from "./setAcceptType"
import setContentLength from "./setContentLength"
import setResponseTimeElapsed from "./setResponseTimeElapsed"
import setResponseTimeStart from "./setResponseTimeStart"

export default [
  setResponseTimeStart,
  naturalize,
  accounts,
  notFound,
  serialize,
  setContentLength,
  setAcceptType,
  setResponseTimeElapsed,
  logRequest,
  closeConnection
]
